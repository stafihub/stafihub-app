import {
  chains,
  getDenom,
  getIBCConfig,
  getStafiHubChainId,
  ibcConfigs,
  KeplrChainParams,
} from "@stafihub/apps-config";
import { queryChannel } from "@stafihub/apps-wallet";
import { Button, CardContainer } from "@stafihub/react-components";
import { State } from "@stafihub/types";
import classNames from "classnames";
import * as _ from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconArrow from "../assets/images/bridge_arrow.png";
import { BridgeChainSelector } from "../components/bridge/BridgeChainSelector";
import { BridgeTokenSelector } from "../components/bridge/BridgeTokenSelector";
import { SwapAddressInput } from "../components/bridge/SwapAddressInput";
import { SwapAmountInput } from "../components/bridge/SwapAmountInput";
import { useAccounts, useIsLoading } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import {
  connectKeplr,
  updateAllTokenBalance,
} from "../redux/reducers/AppSlice";
import { getIBCBalanceInChannel } from "../redux/reducers/IBCSlice";
import { ibcBridgeSwap } from "../redux/reducers/TxSlice";
import { RootState } from "../redux/store";
import { IBCChannelToken } from "../types/interface";
import { getHumanAccountBalance } from "../utils/common";
import snackbarUtil from "../utils/snackbarUtils";

interface ChainPair {
  src: KeplrChainParams | null;
  dst: KeplrChainParams | null;
}

export const IBCBridge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accounts = useAccounts();
  const isLoading = useIsLoading();

  const [chainPair, setChainPair] = useState<ChainPair>({
    src: null,
    dst: null,
  });
  const [inputAmount, setInputAmount] = useState("");
  const [dstAddress, setDstAddress] = useState("");
  const [selectedChannelToken, setSelectedChannelToken] =
    useState<IBCChannelToken | null>(null);
  const [tokenChannelList, setTokenChannelList] = useState<
    IBCChannelToken[] | null
  >([]);

  const { updateStakeStatus } = useChainStakeStatus(undefined);

  const { ibcChannelStore, chainStakeStatusMap } = useSelector(
    (state: RootState) => {
      return {
        ibcChannelStore: state.ibc.ibcChannelStore,
        chainStakeStatusMap: state.chain.chainStakeStatusMap,
      };
    }
  );

  const handleSrcChainChange = useCallback(
    (chain: KeplrChainParams) => {
      if (chainPair.src?.chainId === chain.chainId) {
        return;
      }
      let dstChain = null;
      if (chain.chainId === getStafiHubChainId()) {
        dstChain = chainPair.src;
      } else {
        dstChain = chains[getStafiHubChainId()];
      }
      setChainPair({
        src: chain,
        dst: dstChain,
      });
      setInputAmount("");
      setDstAddress("");
    },
    [chainPair.src]
  );

  useEffect(() => {
    // Update rToken balance.
    if (chainPair.dst && chainPair.src) {
      const otherChainId =
        chainPair.src.chainId === getStafiHubChainId()
          ? chainPair.dst.chainId
          : chainPair.src.chainId;

      updateStakeStatus(otherChainId);
    }
  }, [chainPair, updateStakeStatus]);

  const chainArr = useMemo(() => {
    return _.values(chains)
      .filter((item) => {
        return (
          item.chainId === getStafiHubChainId() || ibcConfigs[item.chainId]
        );
      })
      .sort((one, two) => {
        return one.chainId === getStafiHubChainId() ? -1 : 0;
      });
  }, []);

  // useEffect(() => {
  //   if (location.state && (location.state as any).fromChainId) {
  //     const src = chainArr.find(
  //       (item) => item.chainId === (location.state as any).fromChainId
  //     );
  //     if (src) {
  //       handleSrcChainChange(src);
  //     }
  //   }
  // }, [location.state, chainArr, handleSrcChainChange]);

  const balance = useMemo(() => {
    if (!chainPair.src || !selectedChannelToken) {
      return "--";
    }
    if (chainPair.src.chainId === getStafiHubChainId() && !chainPair.dst) {
      return "--";
    }
    if (selectedChannelToken.denom.startsWith("ur")) {
      if (chainPair.src.chainId === getStafiHubChainId()) {
        const stakeStatus = chainStakeStatusMap[chainPair.dst!!.chainId];
        if (!stakeStatus || isNaN(Number(stakeStatus.rTokenBalance))) {
          return "--";
        }
        return stakeStatus.rTokenBalance;
      } else {
        return getIBCBalanceInChannel(
          accounts[chainPair.src.chainId]?.allBalances,
          ibcChannelStore,
          selectedChannelToken.denom,
          selectedChannelToken.channelName
        );
      }
    } else {
      if (chainPair.src.chainId === getStafiHubChainId()) {
        return getIBCBalanceInChannel(
          accounts[getStafiHubChainId()]?.allBalances,
          ibcChannelStore,
          selectedChannelToken.denom,
          selectedChannelToken.channelName
        );
      } else {
        return getHumanAccountBalance(
          accounts[chainPair.src.chainId]?.allBalances,
          // chainPair.src.denom
          selectedChannelToken.denom
        );
      }
    }
  }, [
    accounts,
    chainPair,
    ibcChannelStore,
    selectedChannelToken,
    chainStakeStatusMap,
  ]);

  const maxInput = useMemo(() => {
    if (isNaN(Number(balance)) || !chainPair.src) {
      return "--";
    }
    if (chainPair.src.denom === selectedChannelToken?.denom) {
      let temp = Math.max(0, Number(balance) - 0.05);
      temp = Math.floor(temp * 10000) / 10000;
      return temp + "";
    } else {
      return balance;
    }
  }, [balance, chainPair, selectedChannelToken]);

  const [buttonText, buttonDisabled] = useMemo(() => {
    if (chainPair.src && !accounts[chainPair.src.chainId]) {
      return ["Connect Wallet", false];
    }
    if (isLoading) {
      return ["Swap", true];
    }
    if (
      inputAmount &&
      (Number(inputAmount) > Number(maxInput) || isNaN(Number(maxInput)))
    ) {
      return ["Insufficient Balance", true];
    }
    if (
      !chainPair.src ||
      !chainPair.dst ||
      !inputAmount ||
      Number(inputAmount) <= 0 ||
      isNaN(Number(inputAmount)) ||
      !dstAddress ||
      !selectedChannelToken
    ) {
      return ["Swap", true];
    }
    return ["Swap", false];
  }, [
    accounts,
    chainPair,
    inputAmount,
    maxInput,
    dstAddress,
    selectedChannelToken,
    isLoading,
  ]);

  // Update tokenList when chain changes.
  useEffect(() => {
    setTokenChannelList(null);
    setSelectedChannelToken(null);

    (async () => {
      if (!chainPair.src || !chainPair.dst) {
        setTokenChannelList([]);
        return;
      }

      const otherChainId =
        chainPair.src.chainId === getStafiHubChainId()
          ? chainPair.dst.chainId
          : chainPair.src.chainId;

      const ibcConfig = getIBCConfig(otherChainId);

      if (!ibcConfig) {
        setTokenChannelList([]);
        return;
      }

      const channels = [
        chainPair.src.chainId === ibcConfig.srcChainId
          ? ibcConfig.srcChannel
          : ibcConfig.dstChannel,
      ];

      // Check channel status.
      const requests = channels.map((channelName) => {
        return (async () => {
          const channelRes = await queryChannel(
            chainPair.src?.chainId || "",
            channelName
          );
          return channelRes?.channel?.state === State.STATE_OPEN;
        })();
      });

      const activeResponses = await Promise.all(requests);

      const tokenChannelList: IBCChannelToken[] = [];

      (
        channels.filter((item, index) => {
          return activeResponses[index];
        }) || []
      ).forEach((channelName) => {
        ibcConfig.assets.forEach((asset) => {
          tokenChannelList.push({
            denom: asset.denom,
            channelName,
            displayTokenName: asset.displayName,
          });
        });
      });

      setTokenChannelList(tokenChannelList);
    })();
  }, [chainPair]);

  const handleDstChainChange = (chain: KeplrChainParams) => {
    if (chainPair.dst?.chainId === chain.chainId) {
      return;
    }
    let srcChain = null;
    if (chain.chainId === getStafiHubChainId()) {
      srcChain = chainPair.dst;
    } else {
      srcChain = chains[getStafiHubChainId()];
    }
    setChainPair({
      src: srcChain,
      dst: chain,
    });
    setInputAmount("");
    setDstAddress("");
  };

  const clickSwap = () => {
    // Connect src chain if not connected.
    if (chainPair.src && !accounts[chainPair.src.chainId]) {
      dispatch(connectKeplr(chainPair.src.chainId));
      return;
    }

    if (!chainPair.src || !chainPair.dst) {
      snackbarUtil.error("Please select chain first");
      return;
    }

    if (!selectedChannelToken) {
      snackbarUtil.error("Please select token channel");
      return;
    }

    const srcChainId = chainPair.src.chainId;
    const dstChainId = chainPair.dst.chainId;

    dispatch(
      ibcBridgeSwap(
        selectedChannelToken.denom.startsWith("ur"),
        srcChainId,
        dstChainId,
        selectedChannelToken.channelName,
        inputAmount,
        dstAddress,
        (success) => {
          if (success) {
            dispatch(updateAllTokenBalance());
            setInputAmount("");
            setDstAddress("");
          }
        }
      )
    );
  };

  return (
    <div className="flex items-center pt-2 flex-col">
      <div className="mb-6 h-[30px] px-10 rounded-full border-border-main border-solid border-[1px] flex justify-center items-center">
        <div className="text-white text-[14px] font-bold">Get FIS from</div>
        <div
          className="ml-1 text-primary text-[14px] font-bold cursor-pointer"
          onClick={() => navigate("/feeStation")}
        >
          Fee Station
        </div>
      </div>

      <CardContainer>
        <div className="mx-[60px] mt-7 mb-3">
          <div className="text-white font-bold text-[30px]">
            rBridge Swap (IBC)
          </div>

          <div className="mt-7 flex items-center">
            <div className="flex-1 mr-[-3px]">
              <BridgeChainSelector
                data={chainArr}
                selectedChain={chainPair.src}
                canTriggerSelect={!isLoading}
                onChange={handleSrcChainChange}
              />
            </div>
            <img
              src={iconArrow}
              className={classNames("w-7 h-7 z-10", {
                "cursor-pointer": !isLoading,
              })}
              alt="switch"
              onClick={() => {
                if (isLoading) {
                  return;
                }
                setChainPair({
                  src: chainPair.dst,
                  dst: chainPair.src,
                });
                setInputAmount("");
                setDstAddress("");
              }}
            />
            <div className="flex-1 ml-[-3px]">
              <BridgeChainSelector
                data={chainArr}
                selectedChain={chainPair.dst}
                canTriggerSelect={!isLoading}
                onChange={handleDstChainChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <BridgeTokenSelector
              selectedToken={selectedChannelToken}
              data={tokenChannelList}
              canTriggerSelect={!isLoading}
              onChange={setSelectedChannelToken}
            />
          </div>

          <div className="mt-4">
            <SwapAmountInput
              disabled={isLoading}
              value={inputAmount}
              onChange={setInputAmount}
              balance={balance}
              maxInput={maxInput}
            />
          </div>

          <div className="mt-4">
            <SwapAddressInput
              disabled={isLoading}
              chainId={chainPair.dst?.chainId}
              value={dstAddress}
              onChange={setDstAddress}
            />
          </div>

          <div className="mt-5 flex justify-end">
            <div>
              <Button
                px={30}
                onClick={clickSwap}
                disabled={buttonDisabled}
                loading={isLoading}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </CardContainer>

      <div className="mt-4 text-text-gray5 text-[12px]">
        Reminder: You cannot directly swap tokens to Exchange address from
        rBridge UI.
      </div>
    </div>
  );
};

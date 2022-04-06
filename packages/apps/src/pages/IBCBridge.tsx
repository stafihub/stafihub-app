import {
  chains,
  getDenom,
  getIBCChannels,
  getStafiHubChainId,
  getTokenDisplayName,
  KeplrChainParams,
} from "@stafihub/apps-config";
import { queryChannel } from "@stafihub/apps-wallet";
import { Button, CardContainer } from "@stafihub/react-components";
import { State } from "@stafihub/types";
import * as _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconArrow from "../assets/images/bridge_arrow.png";
import { BridgeChainSelector } from "../components/bridge/BridgeChainSelector";
import { BridgeTokenSelector } from "../components/bridge/BridgeTokenSelector";
import { SwapAddressInput } from "../components/bridge/SwapAddressInput";
import { SwapAmountInput } from "../components/bridge/SwapAmountInput";
import { useAccounts, useIsLoading } from "../hooks/useAppSlice";
import { connectKeplr } from "../redux/reducers/AppSlice";
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
  const accounts = useAccounts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const { ibcChannelStore } = useSelector((state: RootState) => {
    return {
      ibcChannelStore: state.ibc.ibcChannelStore,
    };
  });

  const chainArr = useMemo(() => {
    return _.values(chains)
      .filter((item) => {
        return (
          item.chainId === getStafiHubChainId() || item.stafihubIBCChannels
        );
      })
      .sort((one, two) => {
        return one.chainId === getStafiHubChainId() ? -1 : 0;
      });
  }, []);

  const balance = useMemo(() => {
    if (!chainPair.src || !selectedChannelToken) {
      return "--";
    }
    if (chainPair.src.chainId === getStafiHubChainId() && !chainPair.dst) {
      return "--";
    }
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
        chainPair.src.denom
      );
    }
  }, [accounts, chainPair, ibcChannelStore, selectedChannelToken]);

  const [buttonText, buttonDisabled] = useMemo(() => {
    if (chainPair.src && !accounts[chainPair.src.chainId]) {
      return ["Connect Wallet", false];
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
    if (Number(inputAmount) > Number(balance) || isNaN(Number(balance))) {
      return ["Insufficient Balance", true];
    }
    return ["Swap", false];
  }, [
    accounts,
    chainPair,
    inputAmount,
    balance,
    dstAddress,
    selectedChannelToken,
  ]);

  const tokenName = useMemo(() => {
    if (!chainPair.src || !chainPair.dst) {
      return "";
    }
    return chainPair.src.chainId === getStafiHubChainId()
      ? getTokenDisplayName(chainPair.dst.chainId)
      : getTokenDisplayName(chainPair.src.chainId);
  }, [chainPair]);

  // Update tokenList when chain changes.
  useEffect(() => {
    setTokenChannelList(null);

    (async () => {
      if (!chainPair.src || !chainPair.dst) {
        setTokenChannelList([]);
        setSelectedChannelToken(null);
        return;
      }

      const otherChainId =
        chainPair.src.chainId === getStafiHubChainId()
          ? chainPair.dst.chainId
          : chainPair.src.chainId;

      const configChannels = getIBCChannels(otherChainId);

      if (!configChannels) {
        setTokenChannelList([]);
        setSelectedChannelToken(null);
        return;
      }

      // Check channel status.
      const requests = configChannels.map((channelName) => {
        return (async () => {
          const channelRes = await queryChannel(otherChainId, channelName);
          return channelRes?.channel?.state === State.STATE_OPEN;
        })();
      });

      const activeResponses = await Promise.all(requests);

      setTokenChannelList(
        (
          configChannels?.filter((item, index) => {
            return activeResponses[index];
          }) || []
        ).map((channelName) => {
          return {
            denom: getDenom(otherChainId),
            channelName,
          };
        })
      );
    })();
  }, [chainPair]);

  const handleSrcChainChange = (chain: KeplrChainParams) => {
    if (chainPair.src?.chainId === chain.chainId) {
      return;
    }
    if (chain.chainId !== chainPair.dst?.chainId) {
      setSelectedChannelToken(null);
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
  };

  const handleDstChainChange = (chain: KeplrChainParams) => {
    if (chainPair.dst?.chainId === chain.chainId) {
      return;
    }
    if (chain.chainId !== chainPair.src?.chainId) {
      setSelectedChannelToken(null);
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
        srcChainId,
        dstChainId,
        selectedChannelToken.channelName,
        inputAmount,
        dstAddress
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
                onChange={handleSrcChainChange}
              />
            </div>
            <img
              src={iconArrow}
              className="w-7 h-7 z-10 cursor-pointer"
              alt="switch"
              onClick={() => {
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
                onChange={handleDstChainChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <BridgeTokenSelector
              tokenName={tokenName}
              selectedToken={selectedChannelToken}
              data={tokenChannelList}
              onChange={setSelectedChannelToken}
            />
          </div>

          <div className="mt-4">
            <SwapAmountInput
              value={inputAmount}
              onChange={setInputAmount}
              balance={balance}
            />
          </div>

          <div className="mt-4">
            <SwapAddressInput
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

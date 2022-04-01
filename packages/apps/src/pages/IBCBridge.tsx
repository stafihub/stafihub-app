import { useNavigate } from "react-router-dom";
import {
  chains,
  getStafiHubChainId,
  getTokenDisplayName,
  KeplrChainParams,
} from "@stafihub/apps-config";
import { Button, CardContainer } from "@stafihub/react-components";
import * as _ from "lodash";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import iconArrow from "../assets/images/bridge_arrow.png";
import { BridgeChainSelector } from "../components/bridge/BridgeChainSelector";
import { BridgeTokenSelector } from "../components/bridge/BridgeTokenSelector";
import { SwapAddressInput } from "../components/bridge/SwapAddressInput";
import { SwapAmountInput } from "../components/bridge/SwapAmountInput";
import { useAccounts, useIsLoading } from "../hooks/useAppSlice";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { ibcBridgeSwap } from "../redux/reducers/TxSlice";
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

  const chainArr = useMemo(() => {
    return _.values(chains)
      .filter((item) => {
        return item.chainId === getStafiHubChainId() || item.ibcDenom;
      })
      .sort((one, two) => {
        return one.chainId === getStafiHubChainId() ? -1 : 0;
      });
  }, []);

  const balance = useMemo(() => {
    if (!chainPair.src) {
      return "--";
    }
    if (chainPair.src.chainId === getStafiHubChainId() && !chainPair.dst) {
      return "--";
    }
    if (chainPair.src.chainId === getStafiHubChainId()) {
      return getHumanAccountBalance(
        accounts[getStafiHubChainId()]?.allBalances,
        chainPair.dst?.ibcDenom
      );
    } else {
      return getHumanAccountBalance(
        accounts[chainPair.src.chainId]?.allBalances,
        chainPair.src.denom
      );
    }
  }, [accounts, chainPair]);

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
      !dstAddress
    ) {
      return ["Swap", true];
    }
    if (Number(inputAmount) > Number(balance) || isNaN(Number(balance))) {
      return ["Insufficient Balance", true];
    }
    return ["Swap", false];
  }, [accounts, chainPair, inputAmount, balance, dstAddress]);

  const tokenName = useMemo(() => {
    if (!chainPair.src || !chainPair.dst) {
      return "";
    }
    return chainPair.src.chainId === getStafiHubChainId()
      ? getTokenDisplayName(chainPair.dst.chainId)
      : getTokenDisplayName(chainPair.src.chainId);
  }, [chainPair]);

  const handleSrcChainChange = (chain: KeplrChainParams) => {
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
  };

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
    const srcChainId = chainPair.src.chainId;
    const dstChainId = chainPair.dst.chainId;

    const ibcDenom =
      chainPair.src.chainId === getStafiHubChainId()
        ? chainPair.dst.ibcDenom
        : chainPair.src.ibcDenom;

    if (!ibcDenom) {
      snackbarUtil.error("IBC config not found");
      return;
    }

    dispatch(
      ibcBridgeSwap(srcChainId, dstChainId, ibcDenom, inputAmount, dstAddress)
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
            <BridgeTokenSelector selectedTokenName={tokenName} />
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

          <div className="mt-3 text-text-gray4 text-[12px]">
            Estimate Fee: -- FIS
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

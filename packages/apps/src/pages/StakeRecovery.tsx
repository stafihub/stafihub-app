import {
  getChainIdFromRTokenDisplayName,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { Button, CustomInput } from "@stafihub/react-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { chains } from "../config";
import { useChainAccount, useIsLoading } from "../hooks/useAppSlice";
import { connectKeplr } from "../redux/reducers/AppSlice";

export const StakeRecovery = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken, chains);
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const isLoading = useIsLoading();
  const [txHash, setTxHash] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");

  const setConnectedStafiHubAddress = () => {
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    setStafiHubAddress(stafiHubAccount.bech32Address);
  };

  const clickRecovery = () => {
    if (!txHash || !stafiHubAddress) {
      return;
    }
    // dispatch(stakeRecovery(chainId, stafiHubAddress, poolAddress, txHash));
  };

  return (
    <div className="pt-[34px] pl-[33px] pr-[80px] pb-[20px]">
      <div className="font-bold text-[24px] text-white text-center">
        Staking Record
      </div>

      <div className="mt-[10px] text-white text-[14px] leading-tight">
        Under certain circumstances such as providing a wrong address format in
        the memo when staking your PoS Tokens, you may not receive your rTokens
        due to being unable to resolve a valid StaFiHub address.
      </div>

      <div className="mt-[10px] text-white text-[14px] leading-tight">
        Fret not, submit your TX information to recover your rTokens.
      </div>

      <div className="mt-[34px] text-white text-[12px]">Token</div>

      <div className="mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center">
        <div className="ml-[13px] text-[#8f8f8f] text-[12px]">
          {getTokenDisplayName(chainId, chains)}
        </div>
      </div>

      <div className="mt-[40px] flex justify-between">
        <div className="text-white text-[12px]">TxHash</div>

        <div className="text-[#ededed] text-[12px] underline cursor-pointer">
          How to get TxHash?
        </div>
      </div>

      <div className="mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center">
        <div className="ml-[13px] flex-1">
          <CustomInput
            placeholder=""
            fontSize={12}
            value={txHash}
            handleValueChange={setTxHash}
          />
        </div>
      </div>

      <div className="mt-[40px] text-white text-[12px]">Receiving address</div>

      <div className="mt-[10px] border-solid border-[1px] rounded-[3.5px] border-input-border h-[46px] flex items-center justify-between">
        <div className="ml-5 flex-1">
          <CustomInput
            fontSize={14}
            placeholder="stafi..."
            value={stafiHubAddress}
            handleValueChange={setStafiHubAddress}
          />
        </div>

        <div
          className="mx-[10px] text-primary text-[12px] cursor-pointer w-[63px] text-center"
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[100px] flex justify-end">
        <div className="w-[144px]">
          <Button
            type="rectangle"
            size="small"
            disabled={true}
            loading={isLoading}
          >
            <div className="italic text-[#3B3D5C]" onClick={clickRecovery}>
              Proceed
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

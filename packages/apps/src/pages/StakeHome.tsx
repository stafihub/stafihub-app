import {
  getRTokenDenom,
  getRTokenDisplayName,
  getTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import {
  Button,
  CustomInput,
  CustomNumberInput,
  FormatterText,
} from "@stafihub/react-components";
import { atomicToHuman } from "@stafihub/apps-util";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import { usePoolInfo } from "../hooks";
import { useChainAccount, useIsLoading } from "../hooks/useAppSlice";
import { useChainInfo } from "../hooks/useChainInfo";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { stake } from "../redux/reducers/TxSlice";

export const StakeHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const chainId = params.chainId;
  const isLoading = useIsLoading();
  const chain = useChainInfo(chainId);
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainAccount = useChainAccount(chainId);
  const { poolAddress, exchangeRate } = usePoolInfo(getRTokenDenom(chainId));
  const [inputAmount, setInputAmount] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");

  const buttonDisabled = useMemo(() => {
    return Boolean(!poolAddress || !stafiHubAddress || !inputAmount);
  }, [poolAddress, stafiHubAddress, inputAmount]);

  const transferrableAmount = useMemo(() => {
    if (!chainAccount || !chainAccount.balance) {
      return "--";
    }
    return atomicToHuman(chainAccount?.balance?.amount);
  }, [chainAccount]);

  const willGetAmount = useMemo(() => {
    if (isNaN(Number(inputAmount)) || isNaN(Number(exchangeRate))) {
      return "--";
    }
    return Number(inputAmount) / Number(exchangeRate);
  }, [inputAmount, exchangeRate]);

  const clickStake = async () => {
    if (!poolAddress || !stafiHubAddress) {
      return;
    }
    if (!chainAccount) {
      dispatch(connectKeplr(chainId));
    }
    dispatch(
      stake(chainId, inputAmount, stafiHubAddress, poolAddress, (success) => {
        if (success) {
          navigate(`/stake/${chainId}/status`);
        }
      })
    );
  };

  const setConnectedStafiHubAddress = () => {
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    setStafiHubAddress(stafiHubAccount.bech32Address);
  };

  return (
    <div className="pt-[36px] pl-[30px] pb-[45px]">
      <div className="text-white font-bold text-[30px]">
        Stake {getTokenDisplayName(chainId)}
      </div>

      <div className="mt-[12px] text-text-gray4 text-[14px]">
        23.344 {getTokenDisplayName(chainId)} is staked in the contracts
      </div>

      <div className="mt-[10px] mr-[35px] h-[0.5px] bg-divider" />

      <div className="mt-10 flex flex-col">
        <div className="border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
          <div className="ml-5">
            <CustomNumberInput
              placeholder="STAKE AMOUNT"
              value={inputAmount}
              handleValueChange={setInputAmount}
            />
          </div>

          <div className="flex items-center">
            <div
              className="text-primary text-[16px] cursor-pointer"
              onClick={() => {
                if (
                  !isNaN(Number(transferrableAmount)) &&
                  Number(transferrableAmount) > 0
                ) {
                  setInputAmount(transferrableAmount);
                }
              }}
            >
              Max
            </div>

            <img
              src={ATOM}
              className="w-[36px] h-[36px] mx-[5px]"
              alt="token icon"
            />
          </div>
        </div>

        <div className="mt-[10px] text-white text-[14px]">
          Transferable:{" "}
          <FormatterText
            value={transferrableAmount}
            decimals={chain?.decimals}
          />
        </div>
      </div>

      <div className="mt-12 font-bold text-text-gray5 text-[14px]">
        You will get {getRTokenDisplayName(chainId)}
      </div>

      <div className="mt-[2px] font-bold text-primary text-[30px]">
        <FormatterText value={willGetAmount} decimals={6} />
      </div>

      <div className="mt-6 flex items-end">
        <div>
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Staking APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +BNB
            </div>
          </div>

          <div className="mt-[2px] font-bold text-primary text-[30px]">
            8.23%
          </div>
        </div>

        <div className="ml-[2px] mr-[20px] font-bold text-white text-[30px]">
          +
        </div>

        <div>
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Mint APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +FIS
            </div>
          </div>

          <div className="mt-[2px] font-bold text-primary text-[30px]">
            12.23%
          </div>
        </div>
      </div>

      <div className="mt-14 font-bold text-white text-[16px]">
        Received address
      </div>

      <div className="mt-[10px] border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
        <div className="ml-5 flex-1">
          <CustomInput
            fontSize={14}
            placeholder="stafi..."
            value={stafiHubAddress}
            handleValueChange={setStafiHubAddress}
          />
        </div>

        <div
          className="mr-[10px] text-primary text-[12px] cursor-pointer w-[63px] text-center"
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[10px] w-[494px] text-text-gray5 text-[12px]">
        Note: Make sure you have the right address, otherwise you will not
        receive the token If you provide a wrong address.
      </div>

      <div className="flex justify-end mt-[30px] mr-[57px]">
        <Button
          onClick={clickStake}
          disabled={buttonDisabled}
          loading={isLoading}
        >
          Stake
        </Button>
      </div>
    </div>
  );
};

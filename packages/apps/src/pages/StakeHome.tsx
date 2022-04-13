import {
  getChainIdFromRTokenDisplayName,
  getDenom,
  getRTokenDenom,
  getRTokenDisplayName,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { formatNumberToFixed } from "@stafihub/apps-util";
import {
  Button,
  CustomInput,
  CustomNumberInput,
  FormatterText,
  TokenIcon,
} from "@stafihub/react-components";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useChainAccount, useIsLoading } from "../hooks/useAppSlice";
import { useApy } from "../hooks/useApy";
import { useChainInfo } from "../hooks/useChainInfo";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useTokenSupply } from "../hooks/useTokenSupply";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { setStakeSidebarProps, stake } from "../redux/reducers/TxSlice";
import { getHumanAccountBalance } from "../utils/common";
import snackbarUtil from "../utils/snackbarUtils";

export const StakeHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const isLoading = useIsLoading();
  const chain = useChainInfo(chainId);
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainAccount = useChainAccount(chainId);
  const apy = useApy(chainId);
  const supply = useTokenSupply(chainId);
  const { poolAddress, exchangeRate, leastBond } = useStakePoolInfo(
    getRTokenDenom(chainId)
  );
  const [inputAmount, setInputAmount] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");

  const buttonDisabled = useMemo(() => {
    return Boolean(!poolAddress || !stafiHubAddress || !inputAmount);
  }, [poolAddress, stafiHubAddress, inputAmount]);

  const totalStakedAmount = useMemo(() => {
    if (isNaN(Number(exchangeRate)) || isNaN(Number(supply))) {
      return "--";
    }
    return Number(supply) * Number(exchangeRate);
  }, [exchangeRate, supply]);

  const transferrableAmount = useMemo(() => {
    if (!chainAccount) {
      return "--";
    }
    return getHumanAccountBalance(chainAccount.allBalances, getDenom(chainId));
  }, [chainAccount, chainId]);

  const willGetAmount = useMemo(() => {
    if (
      !inputAmount ||
      isNaN(Number(inputAmount)) ||
      isNaN(Number(exchangeRate))
    ) {
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

    if (Number(inputAmount) < Number(leastBond)) {
      snackbarUtil.warning(
        `The stake amount is less than the minimum stake size: ${leastBond} ${getTokenDisplayName(
          chainId
        )}`
      );
      return;
    }

    dispatch(
      stake(chainId, inputAmount, stafiHubAddress, poolAddress, (success) => {
        if (success) {
          snackbarUtil.success("Stake succeed");
          setInputAmount("");
          setStafiHubAddress("");
          setTimeout(() => {
            dispatch(
              setStakeSidebarProps({
                visible: false,
              })
            );
            navigate(`/${params.rToken}/stake/status`);
          }, 3000);
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
        <FormatterText value={totalStakedAmount} decimals={2} />{" "}
        {getTokenDisplayName(chainId)} is currently staked
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
                  Number(transferrableAmount) > 0.05
                ) {
                  setInputAmount(
                    formatNumberToFixed(Number(transferrableAmount) - 0.05, 6)
                  );
                }
              }}
            >
              Max
            </div>

            <div className="mx-[5px]">
              {params.rToken && (
                <TokenIcon tokenName={params.rToken.slice(1)} size={36} />
              )}
            </div>
          </div>
        </div>

        <div className="self-end mr-[60px] mt-[10px] text-white text-[14px]">
          Transferable:{" "}
          <FormatterText
            value={transferrableAmount}
            decimals={chain?.decimals}
          />
        </div>
      </div>

      <div className="mt-12 font-bold text-text-gray5 text-[14px]">
        You will get
      </div>

      <div className="mt-[2px] font-bold text-primary text-[30px]">
        <FormatterText value={willGetAmount} decimals={6} />{" "}
        {getRTokenDisplayName(chainId)}
      </div>

      <div className="mt-6 flex items-end">
        <div>
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Staking APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +{getTokenDisplayName(chainId)}
            </div>
          </div>

          <div className="mr-2 mt-[2px] font-bold text-primary text-[30px]">
            <FormatterText value={apy} decimals={2} />%
          </div>
        </div>

        <div className="hidden ml-[2px] mr-[20px] font-bold text-white text-[30px]">
          +
        </div>

        <div className="hidden">
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Mint APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +FIS
            </div>
          </div>

          <div className="mt-[2px] font-bold text-primary text-[30px]">--%</div>
        </div>
      </div>

      <div className="mt-14 font-bold text-white text-[16px]">
        Receiving address
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
          className="mx-[10px] text-primary text-[12px] cursor-pointer w-[63px] text-center"
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[10px] w-[494px] text-text-gray5 text-[12px]">
        Note: Please ensure you have input the correct address. Failure to do so
        may cause you to lose your tokens.
      </div>

      <div className="flex justify-end mt-[30px] mr-[57px]">
        <Button
          onClick={clickStake}
          disabled={
            buttonDisabled || Number(inputAmount) > Number(transferrableAmount)
          }
          loading={isLoading}
        >
          {Number(inputAmount) > 0 &&
          Number(inputAmount) > Number(transferrableAmount)
            ? "Insufficient Balance"
            : "Stake"}
        </Button>
      </div>
    </div>
  );
};

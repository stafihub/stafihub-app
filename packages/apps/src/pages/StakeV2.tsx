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
import classNames from "classnames";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import iconApy from "../assets/images/icon_apy.svg";
import iconStakeMenu from "../assets/images/icon_stake_menu.svg";
import { useChainAccount, useIsLoading } from "../hooks/useAppSlice";
import { useApy } from "../hooks/useApy";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useTokenSupply } from "../hooks/useTokenSupply";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { MemoNoticeModal } from "../modals/MemoNoticeModal";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { setStakeSidebarProps, stake } from "../redux/reducers/TxSlice";
import { getHumanAccountBalance } from "../utils/common";
import snackbarUtil from "../utils/snackbarUtils";

export const StakeV2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const isLoading = useIsLoading();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainAccount = useChainAccount(chainId);
  const apy = useApy(chainId);
  const supply = useTokenSupply(chainId);
  const { poolAddress, exchangeRate, leastBond } = useStakePoolInfo(
    getRTokenDenom(chainId)
  );
  const [inputAmount, setInputAmount] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");
  const [memoNoticeModalVisible, setMemoNoticeModalVisible] = useState(false);
  const { height } = useWindowDimensions();

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

  console.log("leastBond", leastBond);

  const clickStake = async () => {
    if (!poolAddress || !stafiHubAddress) {
      return;
    }
    if (!chainAccount) {
      dispatch(connectKeplr(chainId));
    }

    dispatch(
      stake(
        chainId,
        inputAmount,
        stafiHubAddress,
        poolAddress,
        () => {},
        (success) => {
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
              navigate(`/rToken/${params.rToken}/dashboard`);
            }, 3000);
          }
        }
      )
    );
  };

  const setConnectedStafiHubAddress = () => {
    if (isLoading) {
      return;
    }
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    setStafiHubAddress(stafiHubAccount.bech32Address);
  };

  return (
    <div className="w-[490px] pb-[45px] flex flex-col items-stretch">
      <div className="flex items-center self-center">
        <img src={iconStakeMenu} alt="menu" className="w-6 h-6" />
        <div className="ml-1 text-white font-bold text-[30px]">
          Stake {getTokenDisplayName(chainId)}
        </div>
      </div>

      <div className="self-center mt-[12px] text-text-gray4 text-[14px]">
        <FormatterText value={totalStakedAmount} />{" "}
        {getTokenDisplayName(chainId)} is currently staked
      </div>

      <div className="mt-[14px] h-[0.5px] bg-divider" />

      <div className="mt-10 flex flex-col">
        <div className="bg-white rounded-[3.5px] h-[46px] flex items-center justify-between">
          <div className="ml-5">
            <CustomNumberInput
              light
              fontSize={16}
              disabled={isLoading}
              placeholder="STAKE AMOUNT"
              value={inputAmount}
              handleValueChange={setInputAmount}
            />
          </div>

          <div className="flex items-center">
            <div
              className={classNames(
                "text-primary text-[16px]",
                isLoading ? "cursor-default" : "cursor-pointer"
              )}
              onClick={() => {
                if (isLoading) {
                  return;
                }
                if (
                  !isNaN(Number(transferrableAmount)) &&
                  Number(transferrableAmount) > 0.05
                ) {
                  setInputAmount(
                    formatNumberToFixed(Number(transferrableAmount) - 0.05)
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

        <div className="mr-[60px] mt-[10px] text-white text-[12px]">
          Transferable: <FormatterText value={transferrableAmount} />
        </div>
      </div>

      <div className="mt-[50px] bg-white rounded-[3.5px] h-[46px] flex items-center justify-between">
        <div className="ml-5 flex-1">
          <CustomInput
            light
            disabled={isLoading}
            fontSize={16}
            placeholder="RECEIVING ADDRESS"
            value={stafiHubAddress}
            handleValueChange={setStafiHubAddress}
          />
        </div>

        <div
          className={classNames(
            "mx-[10px] text-primary text-[12px] w-[63px] text-center",
            isLoading ? "cursor-default" : "cursor-pointer"
          )}
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[10px] text-text-gray8 text-[12px]">
        Note: Please ensure you have input the correct address. Failure to do so
        may cause you to lose your tokens.
      </div>

      <div className="self-center mt-14 flex items-center">
        <img src={iconApy} alt="apy icon" className="w-6 h-6" />

        <div className="ml-1 text-white font-bold text-[20px]">Stake APY</div>
      </div>

      <div className="self-center mt-6 font-bold text-primary text-[90px]">
        <FormatterText value={apy} decimals={2} />%
      </div>

      <div className="mt-10 h-[0.5px] bg-divider" />

      <div className="hidden">
        <div className="self-center mt-5 flex items-end">
          <div>
            <div className="flex items-end">
              <div className="font-bold text-[14px] text-text-gray8">
                Staking APR
              </div>

              <div className="ml-1 mb-[1.5px] text-text-gray8 text-[12px] scale-[0.67] origin-bottom-left">
                +{getTokenDisplayName(chainId)}
              </div>
            </div>

            <div className="mr-2 mt-[2px] font-bold text-text-gray8 text-[24px]">
              <FormatterText value={apy} decimals={2} />%
            </div>
          </div>

          <div className="hidden ml-[2px] mr-[20px] font-bold text-white text-[30px]">
            +
          </div>

          <div className="hidden">
            <div className="flex items-end">
              <div className="font-bold text-[14px] text-text-gray8">
                Mint APR
              </div>

              <div className="ml-1 mb-[1.5px] text-text-gray8 text-[12px] scale-[0.67] origin-bottom-left">
                +FIS
              </div>
            </div>

            <div className="mt-[2px] font-bold text-text-gray8 text-[24px]">
              --%
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          height < 830
            ? "absolute w-[490px] bottom-0 bg-[#000002] shadow-[0_-5px_20px_15px_rgba(0,0,0,1)]"
            : "mt-14"
        )}
      >
        <Button
          bgPrimary
          type="rectangle"
          height={56}
          onClick={() => {
            if (!stafiHubAccount) {
              dispatch(connectKeplr(getStafiHubChainId()));
              return;
            }
            if (Number(inputAmount) < Number(leastBond)) {
              snackbarUtil.warning(
                `The stake amount is less than the minimum stake size: ${leastBond} ${getTokenDisplayName(
                  chainId
                )}`
              );
              return;
            }
            setMemoNoticeModalVisible(true);
          }}
          disabled={
            stafiHubAccount &&
            (buttonDisabled ||
              Number(inputAmount) > Number(transferrableAmount))
          }
          loading={isLoading}
        >
          {isLoading ? (
            <div>
              You will get <FormatterText value={willGetAmount} />{" "}
              {getRTokenDisplayName(chainId)}
            </div>
          ) : !stafiHubAccount ? (
            "Connect StaFi-Hub Wallet"
          ) : Number(inputAmount) > 0 &&
            Number(inputAmount) > Number(transferrableAmount) ? (
            "Insufficient Balance"
          ) : (
            <div>
              You will get <FormatterText value={willGetAmount} />{" "}
              {getRTokenDisplayName(chainId)}
            </div>
          )}
        </Button>
      </div>

      <MemoNoticeModal
        visible={memoNoticeModalVisible}
        onClose={() => setMemoNoticeModalVisible(false)}
        onConfirm={() => {
          setMemoNoticeModalVisible(false);
          clickStake();
        }}
      />
    </div>
  );
};

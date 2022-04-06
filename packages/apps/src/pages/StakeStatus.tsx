import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { Button, FormatterText } from "@stafihub/react-components";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import iconArrowRight from "../assets/images/icon_arrow_right.svg";
import iconDown from "../assets/images/icon_down.png";
import iconStakeArrow from "../assets/images/icon_stake_arrow.svg";
import iconSwitch from "../assets/images/icon_switch.svg";
import { useAccountUnbond } from "../hooks/useAccountUnbond";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useUnbondCommission } from "../hooks/useUnbondCommission";

export const StakeStatus = () => {
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const rTokenDenom = getRTokenDenom(chainId);

  const { stakeStatus } = useChainStakeStatus(chainId);

  const { exchangeRate, eraHours } = useStakePoolInfo(rTokenDenom);
  const { unbondingAmount } = useAccountUnbond(rTokenDenom);
  const { unbondCommission } = useUnbondCommission(rTokenDenom);

  const stakedAmount = useMemo(() => {
    if (
      !stakeStatus ||
      isNaN(Number(exchangeRate)) ||
      isNaN(Number(stakeStatus.rTokenBalance))
    ) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * Number(exchangeRate);
  }, [exchangeRate, stakeStatus]);

  const redeemableAmount = useMemo(() => {
    if (
      isNaN(Number(exchangeRate)) ||
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance))
    ) {
      return "--";
    }
    return (
      Number(stakeStatus.rTokenBalance) *
      (1 - Number(unbondCommission)) *
      Number(exchangeRate)
    );
  }, [unbondCommission, exchangeRate, stakeStatus]);

  return (
    <div className="px-[52px] py-[42px]">
      <div className="flex items-center">
        <div className="text-[12px] text-text-gray4">rAsset on</div>
        <div className="ml-1 flex items-center cursor-pointer">
          <div className="text-[12px] text-primary font-bold">StaFiHub</div>
          <img src={iconSwitch} className="ml-1 h-[14px]" alt="switch" />
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center">
          <img src={ATOM} className="w-[36px] h-[36px]" alt="token icon" />

          <div className="ml-[10px] text-white text-[30px] font-bold">
            {getRTokenDisplayName(chainId)}
          </div>
        </div>

        <div className="ml-[10px] text-primary text-[30px] font-bold cursor-pointer">
          <FormatterText value={stakeStatus?.rTokenBalance} decimals={6} />
        </div>
      </div>

      <div className="flex justify-end mt-[5px] text-text-gray4 text-[12px]">
        <div className="mr-1">Redeemable {getTokenDisplayName(chainId)} :</div>

        <FormatterText value={redeemableAmount} decimals={6} />
      </div>

      <div className="mt-[50px] flex items-center">
        <div className="flex-grow-[1] flex justify-start pl-[15px]">
          <div className="flex flex-col items-center ">
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center">
              Staked {getTokenDisplayName(chainId)}
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              <FormatterText value={stakedAmount} />
            </div>
          </div>
        </div>

        <div className="w-[0.5px] h-[35px] bg-divider" />

        <div className="flex-grow-[2]">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              navigate(`/${params.rToken}/stake/unbond`);
            }}
          >
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center flex items-center">
              Unbonding {getTokenDisplayName(chainId)}
              <img src={iconArrowRight} alt="arrow" className="ml-1 h-[10px]" />
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              <FormatterText value={unbondingAmount} />
            </div>
          </div>
        </div>

        <div className="w-[0.5px] h-[35px] bg-divider" />

        <div
          className="flex-grow-[1] flex justify-end pr-[15px] cursor-pointer"
          onClick={() => {
            navigate(`/${params.rToken}/stake/reward`);
          }}
        >
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center flex items-center">
              Reward in last 24h
              <img src={iconArrowRight} alt="arrow" className="ml-1 h-[10px]" />
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              + 0.00
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[65px] flex justify-end">
        <Button
          size="small"
          onClick={() => {
            navigate(`/${params.rToken}/stake/redeem`);
          }}
        >
          Redeem
        </Button>

        <div className="ml-[10px]">
          <Button size="small">
            <div className="flex items-center">
              <div>Trade</div>
              <img
                className="ml-[2px] w-[8px] h-[6px]"
                src={iconDown}
                alt="down"
              />
            </div>
          </Button>
        </div>
      </div>

      <div className="mt-[30px] h-[0.5px] bg-divider mr-[-25px] ml-[-20px]" />

      <div className="mt-[40px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={iconStakeArrow}
            className="w-[36px] h-[36px]"
            alt="token icon"
          />

          <div className="ml-[10px] text-white text-[30px] font-bold">
            {getRTokenDisplayName(chainId)} / {getTokenDisplayName(chainId)}
          </div>
        </div>

        <div className="ml-[10px] text-primary text-[30px] font-bold cursor-pointer">
          <FormatterText value={exchangeRate} decimals={6} />
        </div>
      </div>

      <div className="mt-[44px] text-text-gray4 text-[12px]">
        Updated every {eraHours} hours
      </div>
    </div>
  );
};

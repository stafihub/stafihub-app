import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { FormatterText } from "@stafihub/react-components";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import iconSwitch from "../assets/images/icon_switch.svg";
import nodata from "../assets/images/nodata.png";
import { StakeRewardTableHeader } from "../components/StakeRewardTableHeader";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";

export const StakeReward = () => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const { stakeStatus } = useChainStakeStatus(chainId);
  const { exchangeRate, eraHours } = useStakePoolInfo(getRTokenDenom(chainId));

  const myStakedValue = useMemo(() => {
    if (
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance)) ||
      isNaN(Number(exchangeRate))
    ) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * Number(exchangeRate) * 0.06;
  }, [stakeStatus, exchangeRate]);

  return (
    <div className="pl-[43px] py-[30px] pr-[22px]">
      <div className="bg-[rgba(255,127,168,0.08)] text-[12px] text-text-gray6 p-[10px] border-solid border-[1px] border-[rgba(255,127,168,0.24)] rounded-[8px]">
        Reminder: rTokens will continuously generate staking rewards even when
        deposited in farms, mines or other yield generation methods, however, it
        will not be visible in the Est. Reward column as calculations are
        limited.
      </div>

      <div className="mt-6 flex items-center">
        <div className="text-[12px] text-text-gray4">rAsset on</div>
        <div className="ml-1 flex items-center cursor-pointer">
          <div className="text-[12px] text-primary font-bold">StaFiHub</div>
          <img src={iconSwitch} className="ml-1 h-[14px]" alt="switch" />
        </div>
      </div>

      <div className="mt-6 flex justify-between text-white font-bold text-[22px]">
        <div>Staked Value</div>

        <div>
          $ <FormatterText value={myStakedValue} decimals={2} />
        </div>
      </div>

      <div className="mt-[5px] flex justify-end">
        <div className="text-secondary text-[14px]">
          +0.00 {getTokenDisplayName(chainId)}
        </div>

        <div className="ml-[4px] text-white text-[14px]">(last era)</div>
      </div>

      <div className="mt-[10px] h-[0.5px] bg-divider" />

      <div className="mt-[20px] h-[150px]"></div>

      <div className="mt-[30px] font-bold text-white text-[22px]">Details</div>

      <StakeRewardTableHeader chainId={chainId} />

      <div className="max-h-[120px] h-[120px] overflow-auto">
        {/* <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem /> */}

        <div className="flex flex-col items-center">
          <img src={nodata} alt="nodata" className="mt-7 w-20" />

          <div className="mt-3 text-text-gray4 text-[12px]">No Data</div>
        </div>
      </div>

      <div className="mt-[45px] text-text-gray4 text-[12px]">
        Era is updated every {eraHours} hours
      </div>
    </div>
  );
};

import { StakeRewardTableHeader } from "../components/StakeRewardTableHeader";
import { StakeRewardTableItem } from "../components/StakeRewardTableItem";

export const StakeReward = () => {
  return (
    <div className="pl-[43px] py-[30px] pr-[22px]">
      <div className="bg-[rgba(255,127,168,0.08)] text-[12px] text-text-gray6 p-[10px] border-solid border-[1px] border-[rgba(255,127,168,0.24)] rounded-[8px]">
        Reminding: Holding rTokens still keeps generating staking reward while
        you depositing them to farm, mine and other yield generation protocols,
        but it can't be shown in the est.Reward as the calculation limits.
      </div>

      <div className="mt-6 flex justify-between text-white font-bold text-[22px]">
        <div>Staked Value</div>

        <div>$2302.21</div>
      </div>

      <div className="mt-[5px] flex justify-end">
        <div className="text-secondary text-[14px]">+0.001123 ATOM</div>

        <div className="ml-[4px] text-white text-[14px]">(last era)</div>
      </div>

      <div className="mt-[10px] h-[0.5px] bg-divider" />

      <div className="mt-[20px] h-[150px]"></div>

      <div className="mt-[30px] font-bold text-white text-[22px]">Details</div>

      <StakeRewardTableHeader />

      <div className="max-h-[120px] overflow-auto">
        <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem />

        <StakeRewardTableItem />
      </div>

      <div className="mt-[45px] text-text-gray4 text-[12px]">
        Era is updated every 1 hours
      </div>
    </div>
  );
};

import { atomicToHuman, formatNumberToFixed } from "@stafihub/apps-util";
import { FormatterText } from "@stafihub/react-components";
import classNames from "classnames";
import { useMemo } from "react";
import { EraRewardItem } from "../types/interface";

interface StakeRewardTableItemProps {
  eraReward: EraRewardItem;
}

export const StakeRewardTableItem = (props: StakeRewardTableItemProps) => {
  const { eraReward } = props;

  const [estReward, highlight] = useMemo(() => {
    if (isNaN(Number(eraReward.reward)) || !eraReward.reward) {
      return ["--", false];
    }
    const humanReward = atomicToHuman(eraReward.reward, 6);
    if (Number(humanReward) === 0) {
      return ["0", false];
    }
    if (Number(humanReward) > 0 && Number(humanReward) < 0.0001) {
      return ["<0.0001", true];
    }
    return ["+" + formatNumberToFixed(humanReward), true];
  }, [eraReward]);

  return (
    <div className="w-full h-[50px] py-[10px] flex items-center text-[14px] font-bold relative">
      <div className="basis-3/12 text-white pl-5">{eraReward.era}</div>

      <div className="basis-4/12 text-white">
        <FormatterText value={atomicToHuman(eraReward.stakeValue, 6)} />
      </div>

      <div className="basis-4/12 text-white">
        <FormatterText value={atomicToHuman(eraReward.rate, 6)} />
      </div>

      <div className="basis-3/12 text-white">
        <FormatterText value={atomicToHuman(eraReward.rTokenBalance, 6)} />
      </div>

      <div
        className={classNames(
          "basis-4/12 flex items-center",
          highlight ? "text-secondary" : "text-text-gray2"
        )}
      >
        {estReward}
      </div>

      <div className="bg-[#2f2f2f] h-[0.5px] absolute left-0 right-0 bottom-0" />
    </div>
  );
};

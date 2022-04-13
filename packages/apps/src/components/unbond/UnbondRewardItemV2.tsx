import {
  getChainDecimals,
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { FormatterText } from "@stafihub/react-components";
import { UserUnlockChunk } from "@stafihub/types";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import pendingIcon from "../../assets/images/icon_pending.svg";
import successIcon from "../../assets/images/icon_success_round.svg";
import { useChainEra } from "../../hooks/useChainEra";
import { useRParams } from "../../hooks/useRParams";

interface UnbondRewardItemProps {
  item: UserUnlockChunk;
  unbondingDays: string;
}

export const UnbondRewardItemV2 = (props: UnbondRewardItemProps) => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const era = useChainEra(chainId);
  const { eraHours } = useRParams(getRTokenDenom(chainId));
  const amount = useMemo(() => {
    if (!props.item) {
      return "--";
    }
    return atomicToHuman(props.item.value, getChainDecimals(chainId));
  }, [props.item, chainId]);

  const [completed, remainingDays]: [boolean, string] = useMemo(() => {
    if (!props.item || !era || isNaN(Number(eraHours))) {
      return [false, "--"];
    }

    if (props.item.unlockEra <= era) {
      return [true, "completed"];
    }

    const days = ((props.item.unlockEra - era) * Number(eraHours)) / 24;

    if (days < 1) {
      return [false, "<1d left"];
    }

    return [false, Math.floor(days) + "d left"];
  }, [props.item, era, eraHours]);

  return (
    <div className="w-full h-[50px] py-[10px] flex items-center text-text-gray2 text-[14px] border-[#494D51] border-solid border-b-[1px]">
      <div className="basis-1/12 flex items-center justify-center">
        <img
          src={completed ? successIcon : pendingIcon}
          alt="icon"
          className="w-4"
        />
      </div>

      <div className="basis-2/12 text-[14px] text-white">
        {!isNaN(Number(amount)) && Number(amount) < 0.01 ? (
          "<0.01"
        ) : (
          <FormatterText value={amount} decimals={2} />
        )}
      </div>

      <div className="basis-2/12 text-[12px]">
        {!isNaN(Number(props.unbondingDays)) && (
          <div>≈{props.unbondingDays} D</div>
        )}
      </div>

      <div className="basis-2/12 text-[12px]">
        <div className="mt-1">{remainingDays}</div>
      </div>

      <div className="w-[310px] text-[12px] text-white font-bold">
        <div className="break-all">{props.item.recipient}</div>
      </div>
    </div>
  );
};

import {
  getChainDecimals,
  getChainIdFromRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { FormatterText } from "@stafihub/react-components";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import pendingIcon from "../../assets/images/icon_pending.svg";
import successIcon from "../../assets/images/icon_success_round.svg";
import { chains } from "../../config";
import { UserUnbondRecord } from "../../types/interface";

interface UnbondRewardItemProps {
  item: UserUnbondRecord;
  unbondingDays: string;
}

export const UnbondRewardItemV2 = (props: UnbondRewardItemProps) => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken, chains);
  const amount = useMemo(() => {
    if (!props.item) {
      return "--";
    }
    return atomicToHuman(
      props.item.tokenAmount,
      getChainDecimals(chainId, chains)
    );
  }, [props.item, chainId]);

  const [completed, remainingDays]: [boolean, string] = useMemo(() => {
    if (props.item.lockLeftTime <= 0) {
      return [true, "completed"];
    }

    const days = props.item.lockLeftTime / (24 * 60 * 60);

    if (days < 1) {
      return [false, "<1d left"];
    }

    return [false, Math.floor(days) + "d left"];
  }, [props.item]);

  return (
    <div className="w-full h-[50px] py-[10px] flex items-center text-text-gray2 text-[14px] border-[#2f2f2f] border-solid border-b-[1px]">
      <div className="basis-[16%] flex items-center">
        <img
          src={completed ? successIcon : pendingIcon}
          alt="icon"
          className="w-4"
        />

        <div className="ml-5 text-[14px] text-white">
          {!isNaN(Number(amount)) && Number(amount) < 0.0001 ? (
            "<0.0001"
          ) : (
            <FormatterText value={amount} />
          )}
        </div>
      </div>

      <div className="basis-[16%] text-[14px] text-white">
        {getTokenDisplayName(chainId, chains)}
      </div>

      <div className="basis-[14%] text-[14px] text-white">
        {!isNaN(Number(props.unbondingDays)) && (
          <div>≈{props.unbondingDays} D</div>
        )}
      </div>

      <div className="basis-[14%] text-[14px] text-white">
        <div className="mt-1">{remainingDays}</div>
      </div>

      <div className="basis-5/12 text-[14px] text-white">
        <div className="break-all">{props.item.receiveAddress}</div>
      </div>
    </div>
  );
};

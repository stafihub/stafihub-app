import { useMemo } from "react";
import { getTokenIcon } from "../utils";

interface StakeTokenItemProps {
  originTokenName: string;
  derivativeTokenName: string;
  onClickStake: () => void;
}

export const StakeTokenItem = (props: StakeTokenItemProps) => {
  const icon = useMemo(() => {
    return getTokenIcon(props.derivativeTokenName);
  }, [props.derivativeTokenName]);

  return (
    <div className="w-[660px] h-[42px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center">
      <div className="basis-4/12 font-bold text-[16px] flex items-center justify-center">
        <img src={icon} className="w-[26px] h-[26px] mr-[10px]" alt="icon" />

        <div>{props.originTokenName}</div>
      </div>

      <div className="basis-3/12 text-[14px]">{props.derivativeTokenName}</div>

      <div className="basis-3/12 text-[14px]">8.23%</div>

      <div className="basis-4/12 text-[14px]">0.23B</div>

      <div className="basis-3/12 text-[14px]">
        <div
          className="w-[66px] h-[22px] text-primary text-[12px] flex justify-center items-center border-primary border-solid border-[0.5px] rounded-[3px] cursor-pointer"
          onClick={props.onClickStake}
        >
          Stake
        </div>
      </div>
    </div>
  );
};

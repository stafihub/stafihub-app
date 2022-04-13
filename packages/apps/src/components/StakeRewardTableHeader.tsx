import {
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";

export const StakeRewardTableHeader = (props: {
  chainId: string | undefined;
}) => {
  return (
    <div className="py-[10px] flex items-center text-text-gray2 text-[14px] font-bold relative border-[#2F2F2F] border-solid border-b-[1px]">
      <div className="basis-2/12 pl-5">To Era</div>

      <div className="basis-4/12">
        Staked {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-4/12">
        {getRTokenDisplayName(props.chainId)} :{" "}
        {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-3/12">{getRTokenDisplayName(props.chainId)}</div>

      <div className="basis-3/12 flex items-center">Est. Reward</div>

      <div className="bg-divider h-[0.5px] absolute left-0 right-0 bottom-0" />
    </div>
  );
};

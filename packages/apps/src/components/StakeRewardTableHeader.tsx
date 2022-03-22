import {
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";

export const StakeRewardTableHeader = (props: {
  chainId: string | undefined;
}) => {
  return (
    <div className="py-[10px] flex items-center text-text-gray2 text-[14px] font-bold relative">
      <div className="basis-2/12">To Era</div>

      <div className="basis-4/12">
        Staked {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-4/12">
        {getRTokenDisplayName(props.chainId)} :{" "}
        {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-3/12">{getRTokenDisplayName(props.chainId)}</div>

      <div className="basis-3/12 flex items-center justify-end">
        est. Reward
      </div>

      <div className="bg-divider h-[0.5px] absolute left-0 right-0 bottom-0" />
    </div>
  );
};

import {
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";

export const StakeRewardTableHeader = (props: {
  chainId: string | undefined;
}) => {
  return (
    <div className="w-full py-[10px] flex items-center text-text-gray2 text-[14px] relative border-[#2F2F2F] border-solid border-b-[1px]">
      <div className="basis-3/12 pl-5">To Era</div>

      <div className="basis-4/12">
        Staked {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-4/12">
        {getRTokenDisplayName(props.chainId)} :{" "}
        {getTokenDisplayName(props.chainId)}
      </div>

      <div className="basis-3/12">{getRTokenDisplayName(props.chainId)}</div>

      <div className="basis-4/12 flex items-center">Est. Reward</div>
    </div>
  );
};

export const MintProgramsTableHeader = () => {
  return (
    <div className="w-full py-[10px] flex items-center text-text-gray2 text-[14px] font-bold">
      <div className="basis-[25%] flex items-center">
        <div className="ml-5">Mint</div>
      </div>

      <div className="basis-[20%]">APY</div>

      <div className="basis-[15%]">Reward</div>

      <div className="basis-[20%]">
        Remaining
        <br />
        Reward
      </div>

      <div className="basis-[20%]">Minted Value</div>

      <div className="basis-[25%]">Duration(Days)</div>

      <div className="basis-3/12">Farm</div>
    </div>
  );
};

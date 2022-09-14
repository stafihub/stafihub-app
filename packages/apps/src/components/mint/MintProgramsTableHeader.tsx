export const MintProgramsTableHeader = () => {
  return (
    <div className="w-full py-[10px] flex items-center text-text-gray2 text-[14px] font-bold">
      <div className="basis-[20%] flex items-center">
        <div className="ml-5">Mint</div>
      </div>

      <div className="basis-[18%]">
        Reward
        <br />
        Ratio
      </div>

      <div className="basis-[20%]">
        Reward
        <br />
        Pool
      </div>

      <div className="basis-[20%]">
        Remaining
        <br />
        Reward
      </div>

      <div className="basis-[15%]">
        Minted
        <br />
        Value
      </div>

      <div className="basis-[22%]">Duration(Days)</div>

      <div className="basis-2/12">Farm</div>
    </div>
  );
};

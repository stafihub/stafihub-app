export const RAssetTableHeader = () => {
  return (
    <div className="w-[800px] py-[10px] flex items-center text-text-gray2 text-[14px]">
      <div className="basis-4/12 flex items-center justify-start">
        <div className="ml-5">Derivative</div>
      </div>

      <div className="basis-5/12">Staked</div>

      <div className="basis-4/12">rToken</div>

      <div className="basis-3/12">APY</div>

      <div className="basis-4/12">Operations</div>
    </div>
  );
};

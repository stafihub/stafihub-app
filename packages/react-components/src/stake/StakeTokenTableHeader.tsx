export const StakeTokenTableHeader = () => {
  return (
    <div className="w-[660px] py-[10px] flex items-center text-text-gray2 text-[14px]">
      <div className="basis-4/12 flex items-center justify-center">
        Staked Asset
      </div>

      <div className="basis-3/12">Derivative</div>

      <div className="basis-3/12">APY</div>

      <div className="basis-4/12">Liquidity</div>

      <div className="basis-3/12">Liquify</div>
    </div>
  );
};

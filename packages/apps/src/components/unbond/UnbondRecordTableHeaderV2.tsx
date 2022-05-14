export const UnbondRecordTableHeaderV2 = () => {
  return (
    <div className="w-full py-[10px] flex items-center text-text-gray2 text-[14px] border-[#2F2F2F] border-solid border-b-[1px]">
      <div className="basis-[16%]">Amount</div>

      <div className="basis-[16%]">Receiving Token</div>

      <div className="basis-[14%]">Unlock Date</div>

      <div className="basis-[14%]">Remaining</div>

      <div className="basis-5/12">Received Address</div>
    </div>
  );
};

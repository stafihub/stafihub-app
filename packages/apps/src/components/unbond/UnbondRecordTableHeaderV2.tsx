export const UnbondRecordTableHeaderV2 = () => {
  return (
    <div className="w-full py-[10px] flex items-center text-text-gray2 text-[14px] border-[#2F2F2F] border-solid border-b-[1px] font-bold">
      <div className="basis-1/12 flex items-center justify-center"></div>

      <div className="basis-2/12">Amount</div>

      <div className="basis-2/12">Unlock Date</div>

      <div className="basis-2/12">Remaining</div>

      <div className="basis-4/12">Received Address</div>
    </div>
  );
};

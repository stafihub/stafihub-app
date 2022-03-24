import { CardContainer } from "@stafihub/react-components";

export const RBridge = () => {
  return (
    <div className="flex items-center pt-2 flex-col">
      <div className="mb-6 h-[30px] px-10 rounded-full border-border-main border-solid border-[1px] flex justify-center items-center">
        <div className="text-white text-[14px] font-bold">Get FIS from</div>
        <div className="ml-1 text-primary text-[14px] font-bold cursor-pointer">
          Fee Station
        </div>
      </div>

      <CardContainer>
        <div className="mx-[60px] mt-7 mb-3">
          <div className="text-white font-bold text-[30px]">
            rBridge Swap (IBC)
          </div>
        </div>
      </CardContainer>

      <div className="mt-4 text-text-gray5 text-[12px]">
        Reminder: You cannot directly swap tokens to Exchange address from
        rBridge UI.
      </div>
    </div>
  );
};

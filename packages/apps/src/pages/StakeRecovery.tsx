import { CustomInput, Button } from "@stafihub/react-components";
import { useState } from "react";

export const StakeRecovery = () => {
  const [txHash, setTxHash] = useState("");

  return (
    <div className="pt-[34px] pl-[33px] pr-[80px] pb-[20px]">
      <div className="font-bold text-[24px] text-white text-center">
        Staking Record
      </div>

      <div className="mt-[10px] text-white text-[14px] leading-tight">
        Under special occasions like sudden shutdown of your computer after
        sending your PoS tokens, you may not receive your rToken tokens because
        of being not able to sign the staking authorization.
      </div>

      <div className="mt-[10px] text-white text-[14px] leading-tight">
        You could submit your token sending TX information to proceed.
      </div>

      <div className="mt-[34px] text-white text-[12px]">Token</div>

      <div className="mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center">
        <div className="ml-[13px] text-[#8f8f8f] text-[12px]">ATOM</div>
      </div>

      <div className="mt-[40px] flex justify-between">
        <div className="text-white text-[12px]">TxHash</div>

        <div className="text-[#ededed] text-[12px] underline cursor-pointer">
          How to get TxHash?
        </div>
      </div>

      <div className="mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center">
        <div className="ml-[13px]">
          <CustomInput
            placeholder=""
            fontSize={12}
            value={txHash}
            handleValueChange={setTxHash}
          />
        </div>
      </div>

      <div className="mt-[135px] flex justify-end">
        <div className="w-[144px]">
          <Button type="rectangle" size="small">
            <div className="italic text-[#3B3D5C]">Proceed</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

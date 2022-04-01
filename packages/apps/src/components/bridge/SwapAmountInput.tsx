import { CustomNumberInput, FormatterText } from "@stafihub/react-components";

interface SwapAmountInputProps {
  value: string;
  balance: string;
  onChange: (v: string) => void;
}

export const SwapAmountInput = (props: SwapAmountInputProps) => {
  return (
    <div className="rounded-[4px] bg-[#23292f] pl-8 pr-5 py-4">
      <div className="flex items-center text-text-gray7 justify-between">
        <div className="text-[16px]">Swap amount</div>
        <div className="text-[12px]">
          Balance: <FormatterText value={props.balance} decimals={6} />
        </div>
      </div>

      <div className="mt-3">
        <CustomNumberInput
          value={props.value}
          handleValueChange={props.onChange}
          fontSize={26}
          placeholder="0"
          primary
        />
      </div>
    </div>
  );
};

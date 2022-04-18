import { CustomInput } from "@stafihub/react-components";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useAccounts } from "../../hooks/useAppSlice";
import { connectKeplr } from "../../redux/reducers/AppSlice";

interface SwapAddressInputProps {
  chainId: string | undefined;
  value: string;
  disabled?: boolean;
  onChange: (v: string) => void;
}

export const SwapAddressInput = (props: SwapAddressInputProps) => {
  const dispatch = useDispatch();
  const accounts = useAccounts();

  const clickConnectedAddress = () => {
    if (!props.chainId || props.disabled) {
      return;
    }
    if (!accounts[props.chainId]) {
      dispatch(connectKeplr(props.chainId));
      return;
    }

    props.onChange(accounts[props.chainId]?.bech32Address || "");
  };

  return (
    <div className="rounded-[4px] bg-[#23292f] pl-8 pr-5 py-4">
      <div className="flex items-center text-text-gray7 justify-between">
        <div className="text-[16px]">Receving address</div>
      </div>

      <div className="h-[24px] mt-3 flex items-center justify-between">
        <div className="flex-1">
          <CustomInput
            disabled={props.disabled}
            fontSize={14}
            placeholder="..."
            value={props.value}
            handleValueChange={props.onChange}
            primary
          />
        </div>

        {props.chainId && (
          <div
            className={classNames(
              "mx-[10px] text-primary text-[12px] w-[63px] text-center",
              { "cursor-pointer": !props.disabled }
            )}
            onClick={clickConnectedAddress}
          >
            Connected Address
          </div>
        )}
      </div>
    </div>
  );
};

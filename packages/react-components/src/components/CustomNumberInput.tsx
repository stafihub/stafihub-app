import classNames from "classnames";

interface CustomInputProps {
  disabled?: boolean;
  placeholder?: string;
  fontSize?: number;
  value: string;
  primary?: boolean;
  light?: boolean;
  handleValueChange?: (value: string) => void;
}

export const CustomNumberInput = (props: CustomInputProps) => {
  return (
    <input
      disabled={props.disabled}
      className={classNames(
        "bg-transparent border-none outline-none font-bold",
        props.light
          ? "text-text-black1 placeholder:text-[#cacaca]"
          : props.primary
          ? "text-primary placeholder:text-placdholder-primary"
          : "text-white placeholder:text-placdholder"
      )}
      style={{
        fontSize: props.fontSize ? `${props.fontSize}px` : "22px",
      }}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => {
        let value = e.target.value.replace(/[^\d.]/g, "");
        // value = value.replace(/^\./g, "");
        value = value.replace(/\.{2,}/g, ".");
        value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        value = value.replace(/^(-)*(\d*)\.(\d\d\d\d\d\d).*$/, "$1$2.$3");
        props.handleValueChange && props.handleValueChange(value);
      }}
    />
  );
};

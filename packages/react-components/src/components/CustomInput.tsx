import classNames from "classnames";

interface CustomInputProps {
  placeholder: string;
  fontSize?: number;
  primary?: boolean;
  light?: boolean;
  value: string;
  handleValueChange: (value: string) => void;
}

export const CustomInput = (props: CustomInputProps) => {
  return (
    <input
      className={classNames(
        "w-full bg-transparent border-none outline-none  font-bold",
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
        let value = e.target.value;
        props.handleValueChange(value);
      }}
    />
  );
};

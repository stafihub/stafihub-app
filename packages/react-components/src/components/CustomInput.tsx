import classNames from "classnames";

interface CustomInputProps {
  placeholder: string;
  fontSize?: number;
  value: string;
  handleValueChange: (value: string) => void;
}

export const CustomInput = (props: CustomInputProps) => {
  return (
    <input
      className={classNames(
        "w-full bg-transparent border-none outline-none text-white font-bold placeholder:text-placdholder",
        props.fontSize ? `text-[${props.fontSize}px]` : "text-[22px]"
      )}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => {
        let value = e.target.value;
        props.handleValueChange(value);
      }}
    />
  );
};

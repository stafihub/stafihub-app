import classNames from "classnames";

interface CustomInputProps {
  placeholder: string;
  fontSize?: number;
  value: string;
  handleValueChange: (value: string) => void;
}

export const CustomNumberInput = (props: CustomInputProps) => {
  return (
    <input
      className={classNames(
        "bg-transparent border-none outline-none text-white font-bold placeholder:text-placdholder",
        props.fontSize ? `text-[${props.fontSize}px]` : "text-[22px]"
      )}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => {
        let value = e.target.value.replace(/[^\d\.]/g, "");
        // value = value.replace(/^\./g, "");
        value = value.replace(/\.{2,}/g, ".");
        value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        value = value.replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, "$1$2.$3");
        props.handleValueChange(value);
      }}
    />
  );
};

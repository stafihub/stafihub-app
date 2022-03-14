import classNames from "classnames";

interface CustomInputProps {
  placeholder: string;
  fontSize?: number;
}

export const CustomInput = (props: CustomInputProps) => {
  return (
    <input
      className={classNames(
        "bg-transparent border-none outline-none text-white font-bold placeholder:text-placdholder",
        props.fontSize ? `text-[${props.fontSize}px]` : "text-[22px]"
      )}
      placeholder={props.placeholder}
    />
  );
};

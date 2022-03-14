import classNames from "classnames";

type ButtonProps = React.PropsWithChildren<{
  disabled?: boolean;
  size?: "small" | "middle";
  type?: "rounded" | "rectangle";
  onClick?: () => void;
}>;

export const Button = (props: ButtonProps) => {
  return (
    <div
      className={classNames(
        "bg-secondary flex items-center justify-center font-bold text-text-black1 cursor-pointer",
        { "opacity-50 cursor-default": props.disabled },
        { "h-[30px] px-[11px] text-[12px]": props.size === "small" },
        {
          "h-[42px] px-[33px] text-[16px]":
            props.size === "middle" || !props.size,
        },
        { "rounded-full": !props.type || props.type === "rounded" },
        { "rounded-[2.4px]": props.type === "rectangle" }
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

import classNames from "classnames";
import { CustomLoading } from "./CustomLoading";

type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "middle";
  type?: "rounded" | "rectangle";
  height?: number;
  px?: number;
  bgPrimary?: boolean;
  textDark?: boolean;
  onClick?: () => void;
}>;

export const Button = (props: ButtonProps) => {
  return (
    <div
      className={classNames(
        " flex items-center justify-center font-bold cursor-pointer",
        props.bgPrimary ? "bg-primary" : "bg-secondary",
        { "opacity-50 cursor-default": props.disabled || props.loading },
        { "h-[30px] px-[11px] text-[12px]": props.size === "small" },
        {
          "h-[42px] px-[24px] text-[16px]":
            props.size === "middle" || !props.size,
        },
        { "rounded-full": !props.type || props.type === "rounded" },
        { "rounded-[2.4px]": props.type === "rectangle" },
        !props.textDark && props.bgPrimary ? "text-white" : "text-text-black1"
      )}
      style={{
        paddingLeft: props.px ? `${props.px}px` : "",
        paddingRight: props.px ? `${props.px}px` : "",
        height: props.height ? `${props.height}px` : "",
      }}
      onClick={() => {
        if (props.disabled || props.loading) {
          return;
        }
        props.onClick && props.onClick();
      }}
    >
      <div className="flex items-center">
        {props.loading && (
          <div className="mr-2">
            <CustomLoading
              color={props.bgPrimary && !props.textDark ? "#ffffff" : "#23292f"}
              size={24}
            />
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};

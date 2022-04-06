import classNames from "classnames";
import { useMemo } from "react";
import rIRIS from "../assets/images/rIRIS.png";
import rATOM from "../assets/images/rATOM.svg";

const getIconSource = (rtokenName: string) => {
  if (rtokenName === "rIRIS") {
    return rIRIS;
  }
  if (rtokenName === "rATOM") {
    return rATOM;
  }
  return undefined;
};

interface TokenIconProps {
  rtokenName: string;
  size?: number;
  withBorder?: boolean;
}

export const RTokenIcon = (props: TokenIconProps) => {
  const icon = useMemo(() => {
    return getIconSource(props.rtokenName);
  }, [props.rtokenName]);

  return (
    <div>
      <img
        src={icon}
        alt="icon"
        className={classNames("rounded-full", {
          "border-solid border-[1px] border-border-main": props.withBorder,
        })}
        style={{
          width: props.size ? `${props.size}px` : "24px",
          height: props.size ? `${props.size}px` : "24px",
        }}
      />
    </div>
  );
};

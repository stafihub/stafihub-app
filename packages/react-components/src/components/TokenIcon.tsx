import classNames from "classnames";
import { useMemo } from "react";
import IRIS from "../assets/images/IRIS.png";
import ATOM from "../assets/images/ATOM.svg";

const getIconSource = (tokenName: string) => {
  if (tokenName === "IRIS") {
    return IRIS;
  }
  if (tokenName === "ATOM") {
    return ATOM;
  }
  return undefined;
};

interface TokenIconProps {
  tokenName: string;
  size?: number;
  withBorder?: boolean;
}

export const TokenIcon = (props: TokenIconProps) => {
  const icon = useMemo(() => {
    return getIconSource(props.tokenName);
  }, [props.tokenName]);

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

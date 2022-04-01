import classNames from "classnames";
import { useMemo } from "react";
import rETH from "../assets/images/rETH.svg";

const getIconSource = (chainId: string) => {
  return rETH;
};

interface ChainIconProps {
  chainId: string;
  size?: number;
  withBorder?: boolean;
}

export const ChainIcon = (props: ChainIconProps) => {
  const icon = useMemo(() => {
    return getIconSource(props.chainId);
  }, [props.chainId]);

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

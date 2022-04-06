import classNames from "classnames";
import { useMemo } from "react";
import CosmosHub from "../assets/images/CosmosHub.svg";
import StaFiHub from "../assets/images/StaFiHub.svg";

const getIconSource = (displayHubName: string) => {
  if (displayHubName === "StaFiHub") {
    return StaFiHub;
  }
  if (displayHubName === "CosmosHub") {
    return CosmosHub;
  }
  return CosmosHub;
};

interface ChainIconProps {
  displayHubName: string;
  size?: number;
  withBorder?: boolean;
}

export const ChainIcon = (props: ChainIconProps) => {
  const icon = useMemo(() => {
    return getIconSource(props.displayHubName);
  }, [props.displayHubName]);

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

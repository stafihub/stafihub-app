import classNames from "classnames";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";

interface ChainIconProps {
  displayHubName: string;
  size?: number;
  withBorder?: boolean;
}

export const ChainIcon = (props: ChainIconProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.displayHubName);
  }, [props.displayHubName]);

  const loadImage = (displayHubName: string) => {
    import(`../assets/images/${displayHubName}.svg`).then((image) => {
      setImage(image.default);
    });
  };

  return (
    <div>
      <img
        src={image || iconEmpty}
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

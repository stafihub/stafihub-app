import classNames from "classnames";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";

interface TokenIconProps {
  rtokenName: string;
  size?: number;
  withBorder?: boolean;
}

export const RTokenIcon = (props: TokenIconProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.rtokenName);
  }, [props.rtokenName]);

  const loadImage = (rtokenName: string) => {
    import(`../assets/images/${rtokenName}.svg`).then((image) => {
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

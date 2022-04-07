import classNames from "classnames";
import { useEffect, useState } from "react";

interface TokenIconProps {
  tokenName: string;
  size?: number;
  withBorder?: boolean;
}

export const TokenIcon = (props: TokenIconProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.tokenName);
  }, [props.tokenName]);

  const loadImage = (tokenName: string) => {
    import(`../assets/images/${tokenName}.svg`).then((image) => {
      setImage(image.default);
    });
  };

  return (
    <div>
      <img
        src={image}
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

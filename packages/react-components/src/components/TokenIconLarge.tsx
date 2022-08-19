import classNames from "classnames";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";

interface TokenIconLargeProps {
  tokenName: string;
  size?: number;
  withBorder?: boolean;
}

export const TokenIconLarge = (props: TokenIconLargeProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.tokenName);
  }, [props.tokenName]);

  const loadImage = (tokenName: string) => {
    import(`../assets/images/${tokenName}_large.png`)
      .then((image) => {
        setImage(image.default);
      })
      .catch(() => {
        import(`../assets/images/${tokenName}.svg`)
          .then((image) => {
            setImage(image.default);
          })
          .catch();
      });
  };

  return (
    <div>
      <img
        src={image || iconEmpty}
        alt="icon"
        className={classNames({
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

import { queryDenomTrace } from "@stafihub/apps-wallet";
import classNames from "classnames";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";
import { KeplrChainParams } from "../interface";

interface TokenIconProps {
  stafiHubChainConfig: KeplrChainParams;
  denom: string;
  size?: number;
  withBorder?: boolean;
}

export const TokenIcon = (props: TokenIconProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.denom);
  }, [props.denom]);

  const loadImage = async (denom: string) => {
    let tokenName = "";
    if (denom.startsWith("ibc/")) {
      const denomTraceRes = await queryDenomTrace(
        props.stafiHubChainConfig,
        denom
      );
      if (denomTraceRes && denomTraceRes.denomTrace) {
        tokenName = denomTraceRes.denomTrace.baseDenom.slice(1).toUpperCase();
      }
    } else {
      tokenName = denom.slice(1).toUpperCase();
    }

    import(`../assets/images/${tokenName}.svg`)
      .then((image) => {
        setImage(image.default);
      })
      .catch();
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

import { queryDenomTrace } from "@stafihub/apps-wallet";
import classNames from "classnames";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";
import { KeplrChainParams } from "../interface";

interface TokenIconV2Props {
  stafiHubChainConfig: KeplrChainParams;
  denom: string;
  size?: number;
  withBorder?: boolean;
}

export const TokenIconV2 = (props: TokenIconV2Props) => {
  const [image, setImage] = useState();

  useEffect(() => {
    loadImage(props.denom);
  }, [props.denom]);

  const loadImage = async (denom: string) => {
    let finalDenom = denom;
    if (denom.startsWith("ibc/")) {
      const denomTraceRes = await queryDenomTrace(
        props.stafiHubChainConfig,
        denom
      );
      if (denomTraceRes && denomTraceRes.denomTrace) {
        finalDenom = denomTraceRes.denomTrace.baseDenom;
      }
    }

    if (finalDenom) {
      import(`../assets/images/denomTokens/${finalDenom}.svg`)
        .then((image) => {
          setImage(image.default);
        })
        .catch((err) => {});
    }
  };

  return (
    <div
      className={classNames("rounded-full", "bg-white", {
        "border-solid border-[1px] border-border-main": props.withBorder,
      })}
    >
      <img
        src={image || iconEmpty}
        alt="icon"
        className={classNames({
          "p-1": props.denom.indexOf("huahua") >= 0,
        })}
        style={{
          width: props.size ? `${props.size}px` : "24px",
          height: props.size ? `${props.size}px` : "24px",
        }}
      />
    </div>
  );
};

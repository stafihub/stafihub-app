import { queryDenomTrace } from "@stafihub/apps-wallet";
import classNames from "classnames";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { useEffect, useState } from "react";
import iconEmpty from "../assets/images/icon_empty.svg";

interface TokenIconV2Props {
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
      const denomTraceRes = await queryDenomTrace(getStafiHubChainId(), denom);
      if (denomTraceRes && denomTraceRes.denomTrace) {
        finalDenom = denomTraceRes.denomTrace.baseDenom;
      }
    }

    if (finalDenom) {
      import(`../assets/images/denomTokens/${finalDenom}.svg`)
        .then((image) => {
          setImage(image.default);
        })
        .catch();
    }
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

import { getStafiHubChainId } from "@stafihub/apps-config";
import { queryDenomTrace } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";

interface TokenNameProps {
  denom: string;
}

export const TokenName = (props: TokenNameProps) => {
  const { denom } = props;
  const [displayTokenName, setDisplayTokenName] = useState("");

  useEffect(() => {
    (async () => {
      if (denom.startsWith("ibc/")) {
        const denomTraceRes = await queryDenomTrace(
          getStafiHubChainId(),
          denom
        );

        if (denomTraceRes && denomTraceRes.denomTrace) {
          setDisplayTokenName(denomTraceRes.denomTrace.baseDenom.slice(1));
        }
      } else {
        setDisplayTokenName(denom.slice(1));
      }
    })();
  }, [denom]);

  return <span className="uppercase">{displayTokenName}</span>;
};

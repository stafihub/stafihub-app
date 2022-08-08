import { queryDenomTrace } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { KeplrChainParams } from "../interface";

interface TokenNameProps {
  stafiHubChainConfig: KeplrChainParams;
  denom: string;
}

export const TokenName = (props: TokenNameProps) => {
  const { denom } = props;
  const [displayTokenName, setDisplayTokenName] = useState("");

  useEffect(() => {
    (async () => {
      if (denom.startsWith("ibc/")) {
        const denomTraceRes = await queryDenomTrace(
          props.stafiHubChainConfig,
          denom
        );

        if (denomTraceRes && denomTraceRes.denomTrace) {
          setDisplayTokenName(denomTraceRes.denomTrace.baseDenom.slice(1));
        }
      } else {
        setDisplayTokenName(denom.slice(1));
      }
    })();
  }, [denom, props.stafiHubChainConfig]);

  return <span className="uppercase">{displayTokenName}</span>;
};

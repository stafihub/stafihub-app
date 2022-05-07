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

          // return {
          //   ibcDenom: denom,
          //   denomTrace: denomTraceRes.denomTrace,
          // } as IBCChannel;
        }
      } else {
        setDisplayTokenName(denom.slice(1));
      }
    })();
  }, [denom]);

  return (
    <div>
      <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom-left uppercase">
        {displayTokenName}
      </div>
    </div>
  );
};

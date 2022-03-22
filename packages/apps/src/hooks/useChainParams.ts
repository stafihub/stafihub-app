import { queryChainParams } from "@stafihub/apps-wallet";
import { QueryParamsResponse } from "@stafihub/types";
import { useEffect, useMemo, useState } from "react";

export function useChainParams(chainId: string | undefined) {
  const [chainParams, setChainParams] = useState<
    QueryParamsResponse | undefined
  >();

  useEffect(() => {
    (async () => {
      if (chainId) {
        const result = await queryChainParams(chainId);
        setChainParams(result);
      }
    })();
  }, [chainId]);

  const unbondingDays = useMemo(() => {
    if (chainParams?.params?.unbondingTime?.seconds) {
      const days = chainParams?.params?.unbondingTime?.seconds?.div(86400);

      return (Math.floor(days.toNumber()) + 1).toString();
    }
    return "--";
  }, [chainParams]);

  return { unbondingDays };
}

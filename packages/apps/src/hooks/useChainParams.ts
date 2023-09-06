import { queryChainParams } from "@stafihub/apps-wallet";
import { QueryStakingParamsResponse } from "@stafihub/types";
import { useEffect, useState } from "react";
import { chains } from "../config";

export function useChainParams(chainId: string | undefined) {
  const [chainParams, setChainParams] = useState<
    QueryStakingParamsResponse | undefined
  >();

  useEffect(() => {
    (async () => {
      if (chainId) {
        const result = await queryChainParams(chains[chainId]);
        setChainParams(result);
      }
    })();
  }, [chainId]);

  // const unbondingDays = useMemo(() => {
  //   if (chainParams?.params?.unbondingTime?.seconds) {
  //     const days = chainParams?.params?.unbondingTime?.seconds?.div(86400);

  //     return (Math.floor(days.toNumber()) + 1).toString();
  //   }
  //   return "--";
  // }, [chainParams]);

  // return { unbondingDays };
}

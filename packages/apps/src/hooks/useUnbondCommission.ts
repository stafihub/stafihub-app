import { queryUnbondCommission } from "@stafihub/apps-wallet";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { useEffect, useState } from "react";
import { chains } from "../config";

export function useUnbondCommission(denom: string) {
  const [unbondCommission, setUnbondCommission] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryUnbondCommission(
        chains[getStafiHubChainId()],
        denom
      );
      if (result) {
        setUnbondCommission(result.commission);
      }
    })();
  }, [denom]);

  return { unbondCommission };
}

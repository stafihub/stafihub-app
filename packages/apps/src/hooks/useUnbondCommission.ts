import { queryUnbondCommission } from "@stafihub/apps-wallet";
import { atomicToHuman } from "@stafihub/apps-util";

import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";

export function useUnbondCommission(denom: string) {
  const [unbondCommission, setUnbondCommission] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryUnbondCommission(denom);
      if (result) {
        setUnbondCommission(result.commission);
      }
    })();
  }, [denom]);

  return { unbondCommission };
}

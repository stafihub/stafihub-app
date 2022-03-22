import { queryUnbondCommission } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";

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

import { queryRParams } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";

export function useRParams(denom: string) {
  const [eraHours, setEraHours] = useState("--");
  // const [bondingDuration, setBondingDuration] = useState("--");
  const [bondingDays, setBondingDays] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryRParams(denom);
      if (result.rParams) {
        const hoursPerEra = Math.round(
          Number(result.rParams.eraSeconds) / 3600
        );
        setEraHours(hoursPerEra.toString());
        // setBondingDuration(result.rParams.bondingDuration.toString());
        setBondingDays(
          Math.round(
            (result.rParams.bondingDuration * hoursPerEra) / 24
          ).toString()
        );
      }
    })();
  }, [denom]);

  return { eraHours, bondingDays };
}

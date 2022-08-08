import { queryRParams } from "@stafihub/apps-wallet";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { useEffect, useState } from "react";
import { chains } from "../config";

export function useRParams(denom: string) {
  const [eraSeconds, setEraSeconds] = useState("--");
  const [eraHours, setEraHours] = useState("--");
  const [bondingHours, setBondingHours] = useState("--");
  const [bondingDays, setBondingDays] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryRParams(chains[getStafiHubChainId()], denom);
      if (result.rParams) {
        setEraSeconds(result.rParams.eraSeconds.toString());
        const hoursPerEra = Math.round(
          Number(result.rParams.eraSeconds) / 3600
        );
        setEraHours(hoursPerEra.toString());
        setBondingHours(
          (result.rParams.bondingDuration * hoursPerEra).toString()
        );
        setBondingDays(
          Math.round(
            (result.rParams.bondingDuration * hoursPerEra) / 24
          ).toString()
        );
      }
    })();
  }, [denom]);

  return { eraSeconds, eraHours, bondingDays, bondingHours };
}

import { atomicToHuman } from "@stafihub/apps-util";
import { queryAccountUnbond } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";

export function useAccountUnbond(denom: string, unbonder: string | undefined) {
  const [unbondingAmount, setUnbondingAmount] = useState("--");

  useEffect(() => {
    (async () => {
      if (unbonder) {
        let amount = 0;
        const result = await queryAccountUnbond(denom, unbonder);
        if (result?.unbond?.chunks) {
          result.unbond.chunks.forEach((chunk) => {
            amount += Number(atomicToHuman(chunk.value));
          });
        }
        setUnbondingAmount(amount.toString());
      }
    })();
  }, [denom, unbonder]);

  return { unbondingAmount };
}

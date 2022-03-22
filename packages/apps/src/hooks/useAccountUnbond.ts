import { atomicToHuman } from "@stafihub/apps-util";
import { queryAccountUnbond } from "@stafihub/apps-wallet";
import { UserUnlockChunk } from "@stafihub/types";
import { useEffect, useState } from "react";

export function useAccountUnbond(denom: string, unbonder: string | undefined) {
  const [loading, setLoading] = useState(true);
  const [unbondingAmount, setUnbondingAmount] = useState("--");
  const [unbondRecords, setUnbondRecords] = useState<UserUnlockChunk[]>([]);

  useEffect(() => {
    (async () => {
      if (unbonder && denom) {
        let amount = 0;
        const result = await queryAccountUnbond(denom, unbonder);
        setLoading(false);
        setUnbondRecords(result?.unbond?.chunks?.slice(0, 10) || []);
        if (result?.unbond?.chunks) {
          result.unbond.chunks.forEach((chunk) => {
            amount += Number(atomicToHuman(chunk.value));
          });
        }
        setUnbondingAmount(amount.toString());
      }
    })();
  }, [denom, unbonder]);

  return { unbondingAmount, unbondRecords, loading };
}

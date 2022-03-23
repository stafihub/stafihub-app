import { atomicToHuman } from "@stafihub/apps-util";
import { queryAccountUnbond } from "@stafihub/apps-wallet";
import { UserUnlockChunk } from "@stafihub/types";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { useEffect, useState } from "react";
import { useChainAccount } from "./useAppSlice";

export function useAccountUnbond(denom: string) {
  const stafiHubAccount = useChainAccount(getStafiHubChainId());

  const [loading, setLoading] = useState(true);
  const [unbondingAmount, setUnbondingAmount] = useState("--");
  const [unbondRecords, setUnbondRecords] = useState<UserUnlockChunk[]>([]);

  useEffect(() => {
    (async () => {
      if (!stafiHubAccount) {
        setLoading(false);
      } else {
        let amount = 0;
        const result = await queryAccountUnbond(
          denom,
          stafiHubAccount.bech32Address
        );
        setLoading(false);
        setUnbondRecords(result?.unbond?.chunks?.reverse()?.slice(0, 10) || []);
        if (result?.unbond?.chunks) {
          result.unbond.chunks.forEach((chunk) => {
            amount += Number(atomicToHuman(chunk.value));
          });
        }
        setUnbondingAmount(amount.toString());
      }
    })();
  }, [denom, stafiHubAccount]);

  return { unbondingAmount, unbondRecords, loading };
}

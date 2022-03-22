import { getChainDecimals, getRTokenDenom } from "@stafihub/apps-config";
import { queryUnbondRelayFee } from "@stafihub/apps-wallet";
import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useState } from "react";

export function useUnbondRelayFee(chainId: string | undefined) {
  const [relayFee, setRelayFee] = useState("--");

  useEffect(() => {
    (async () => {
      const denom = getRTokenDenom(chainId);
      const result = await queryUnbondRelayFee(denom);
      if (result) {
        setRelayFee(
          atomicToHuman(result.fee?.value?.amount, getChainDecimals(chainId)) ||
            "--"
        );
      }
    })();
  }, [chainId]);

  return { relayFee };
}

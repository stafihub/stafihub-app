import {
  getChainDecimals,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { queryUnbondRelayFee } from "@stafihub/apps-wallet";
import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useState } from "react";
import { chains } from "../config";

export function useUnbondRelayFee(chainId: string | undefined) {
  const [relayFee, setRelayFee] = useState("--");

  useEffect(() => {
    (async () => {
      const denom = getRTokenDenom(chainId, chains);
      const result = await queryUnbondRelayFee(
        chains[getStafiHubChainId()],
        denom
      );
      if (result) {
        setRelayFee(atomicToHuman(result.fee?.value?.amount) || "--");
      }
    })();
  }, [chainId]);

  return { relayFee };
}

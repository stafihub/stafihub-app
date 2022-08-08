import { queryTokenSupply } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { atomicToHuman } from "@stafihub/apps-util";
import {
  getChainDecimals,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { chains } from "../config";

export function useTokenSupply(chainId: string | undefined) {
  const [supply, setSupply] = useState("--");

  useEffect(() => {
    (async () => {
      if (!chainId) {
        return;
      }
      const decimals = getChainDecimals(chainId, chains);
      const denom = getRTokenDenom(chainId, chains);
      const result = await queryTokenSupply(
        chains[getStafiHubChainId()],
        denom
      );
      if (result && result.amount) {
        setSupply(atomicToHuman(result.amount?.amount, decimals));
      }
    })();
  }, [chainId]);

  return supply;
}

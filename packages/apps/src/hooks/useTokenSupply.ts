import { queryTokenSupply } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { atomicToHuman } from "@stafihub/apps-util";
import { getChainDecimals, getRTokenDenom } from "@stafihub/apps-config";

export function useTokenSupply(chainId: string | undefined) {
  const [supply, setSupply] = useState("--");

  useEffect(() => {
    (async () => {
      if (!chainId) {
        return;
      }
      const decimals = getChainDecimals(chainId);
      const denom = getRTokenDenom(chainId);
      const result = await queryTokenSupply(denom);
      if (result && result.amount) {
        setSupply(atomicToHuman(result.amount?.amount, decimals));
      }
    })();
  }, [chainId]);

  return supply;
}

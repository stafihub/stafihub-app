import { RTokenDenom } from "@stafihub/apps-config";
import { queryrTokenBalance } from "@stafihub/apps-wallet";
import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useState } from "react";

export function useRTokenBalance(denom: RTokenDenom) {
  const [rTokenBalance, setRTokenBalance] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryrTokenBalance(denom);
      setRTokenBalance(atomicToHuman(result));
    })();
  }, [denom]);

  return { rTokenBalance };
}

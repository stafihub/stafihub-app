import { queryPoolInfo } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { atomicToHuman } from "@stafihub/apps-util";

export function usePoolInfo(denom: string) {
  const [poolAddress, setPoolAddress] = useState("--");
  const [exchangeRate, setExchangeRate] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryPoolInfo(denom);
      if (result.exchangeRate) {
        setExchangeRate(atomicToHuman(result.exchangeRate));
      }
      setPoolAddress(result.poolAddress);
    })();
  }, [denom]);

  return { poolAddress, exchangeRate };
}

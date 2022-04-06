import { queryStakePoolInfo } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { atomicToHuman } from "@stafihub/apps-util";

export function useStakePoolInfo(denom: string) {
  const [poolAddress, setPoolAddress] = useState("--");
  const [exchangeRate, setExchangeRate] = useState("--");
  const [leastBond, setLeastBond] = useState("--");
  const [eraHours, setEraHours] = useState("--");

  useEffect(() => {
    (async () => {
      const result = await queryStakePoolInfo(denom);
      if (result.exchangeRate) {
        setExchangeRate(atomicToHuman(result.exchangeRate));
      }
      if (result.leastBond) {
        setLeastBond(atomicToHuman(result.leastBond));
      }
      if (result.eraHours) {
        setEraHours(result.eraHours);
      }
      setPoolAddress(result.poolAddress);
    })();
  }, [denom]);

  return { poolAddress, exchangeRate, leastBond, eraHours };
}

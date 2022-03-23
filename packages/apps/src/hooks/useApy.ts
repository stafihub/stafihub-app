import {
  getChainDecimals,
  getHoursPerEra,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { queryEraExchangeRate } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useApy(chainId: string | undefined) {
  const [apy, setApy] = useState("--");

  const chainEra = useSelector((state: RootState) => {
    return chainId ? state.chain.chainEras[chainId] : undefined;
  });

  useEffect(() => {
    (async () => {
      if (chainEra) {
        const currentEra = Math.max(0, chainEra - 1);
        const oldEra = Math.max(0, chainEra - 1 - (24 * 7) / getHoursPerEra());

        // console.log("currentEra oldEra", currentEra, oldEra);

        const currentRateRes = await queryEraExchangeRate(
          currentEra,
          getRTokenDenom(chainId)
        );
        const currentRate = currentRateRes?.eraExchangeRate?.value || 0;

        const oldRateRes = await queryEraExchangeRate(
          oldEra,
          getRTokenDenom(chainId)
        );
        const oldRate = oldRateRes?.eraExchangeRate?.value || 0;

        const apy =
          ((Number(currentRate) - Number(oldRate)) * 365.25 * 100) /
          (7 * Math.pow(10, getChainDecimals(chainId)));
        // console.log("apy:", apy);

        setApy(apy.toString());
      }
    })();
  }, [chainEra, chainId]);

  return apy;
}

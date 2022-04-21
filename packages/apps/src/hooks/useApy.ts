import { getChainDecimals, getRTokenDenom } from "@stafihub/apps-config";
import { queryEraExchangeRate } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRParams } from "./useRParams";

export function useApy(chainId: string | undefined) {
  const [apy, setApy] = useState("--");
  const { eraHours } = useRParams(getRTokenDenom(chainId));

  const chainEra = useSelector((state: RootState) => {
    return chainId ? state.chain.chainEras[chainId] : undefined;
  });

  useEffect(() => {
    (async () => {
      if (chainEra && !isNaN(Number(eraHours))) {
        const annualizedDay = 0.25;

        const currentEra = Math.max(0, chainEra - 1);
        const oldEra = Math.max(
          0,
          chainEra - 1 - (24 * annualizedDay) / Number(eraHours)
        );

        const currentRateRes = await queryEraExchangeRate(
          currentEra,
          getRTokenDenom(chainId)
        );
        const currentRate = currentRateRes?.eraExchangeRate?.value || 1000000;

        const oldRateRes = await queryEraExchangeRate(
          oldEra,
          getRTokenDenom(chainId)
        );
        const oldRate = oldRateRes?.eraExchangeRate?.value || 1000000;

        let apy =
          ((Number(currentRate) - Number(oldRate)) * 365.25 * 100) /
          (annualizedDay * Number(oldRate));

        apy = apy === 0 ? 7 : apy;

        setApy(apy.toString());
      }
    })();
  }, [chainEra, chainId, eraHours]);

  return apy;
}

import {
  getChainDecimals,
  getDefaultApy,
  getRTokenDenom,
} from "@stafihub/apps-config";
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
        // 7-day annualization
        const annualizedDay = 7;
        const defaultRate = 1000000;

        const currentEra = Math.max(0, chainEra - 1);
        const oldEra = Math.max(
          0,
          chainEra - 1 - (24 * annualizedDay) / Number(eraHours)
        );

        const currentRateRes = await queryEraExchangeRate(
          currentEra,
          getRTokenDenom(chainId)
        );
        const currentRate = currentRateRes?.eraExchangeRate?.value || defaultRate;

        const oldRateRes = await queryEraExchangeRate(
          oldEra,
          getRTokenDenom(chainId)
        );
        const oldRate = oldRateRes?.eraExchangeRate?.value || defaultRate;

        let apy = 0;
        if (oldRate === defaultRate) {
          const left1RateRes = await queryEraExchangeRate(
            Math.max(0, currentEra - 1),
            getRTokenDenom(chainId)
          );
          const left1Rate = left1RateRes?.eraExchangeRate?.value || defaultRate;

          if (left1Rate === defaultRate) {
            let defaultApy = 7;
            let configDefaultApy = getDefaultApy(chainId);
            if (configDefaultApy && !isNaN(Number(configDefaultApy))) {
              defaultApy = Number(configDefaultApy);
            }
            apy = defaultApy;
          } else {
            apy =
            ((Number(currentRate) - Number(left1Rate)) * 365.25 * 100) * 24 /
            (Number(eraHours) * Number(left1Rate));
          }
        } else {
          apy =
          ((Number(currentRate) - Number(oldRate)) * 365.25 * 100) /
          (annualizedDay * Number(oldRate));
        }

        setApy(apy.toString());
      }
    })();
  }, [chainEra, chainId, eraHours]);

  return apy;
}

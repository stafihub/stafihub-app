import {
  getDefaultApy,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { queryEraExchangeRate } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { chains } from "../config";
import { RootState } from "../redux/store";
import { useRParams } from "./useRParams";

export function useApy(chainId: string | undefined) {
  const [apy, setApy] = useState("--");
  const { eraHours } = useRParams(getRTokenDenom(chainId, chains));

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

        const exchangeRates = await Promise.all([
          queryEraExchangeRate(
            chains[getStafiHubChainId()],
            currentEra,
            getRTokenDenom(chainId, chains)
          ),
          queryEraExchangeRate(
            chains[getStafiHubChainId()],
            oldEra,
            getRTokenDenom(chainId, chains)
          ),
          queryEraExchangeRate(
            chains[getStafiHubChainId()],
            Math.max(0, currentEra - 1),
            getRTokenDenom(chainId, chains)
          ),
        ]);

        const currentRate =
          exchangeRates[0]?.eraExchangeRate?.value || defaultRate;

        const oldRate = exchangeRates[1]?.eraExchangeRate?.value || defaultRate;

        let apy = 0;
        let defaultApy = 7;
        let configDefaultApy = getDefaultApy(chainId, chains);
        if (configDefaultApy && !isNaN(Number(configDefaultApy))) {
          defaultApy = Number(configDefaultApy);
        }
        if (oldRate === defaultRate) {
          const left1Rate =
            exchangeRates[2]?.eraExchangeRate?.value || defaultRate;

          if (left1Rate !== defaultRate) {
            apy =
              ((Number(currentRate) - Number(left1Rate)) * 365.25 * 100 * 24) /
              (Number(eraHours) * Number(left1Rate));
          }
        } else {
          apy =
            ((Number(currentRate) - Number(oldRate)) * 365.25 * 100) /
            (annualizedDay * Number(oldRate));
        }

        apy = apy === 0 ? defaultApy : apy;

        setApy(apy.toString());
      }
    })();
  }, [chainEra, chainId, eraHours]);

  return apy;
}

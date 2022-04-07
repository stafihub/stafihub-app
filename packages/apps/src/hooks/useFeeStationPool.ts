import { chains, getDenom, STAFIHUB_DECIMALS } from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import * as _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { FeeStationPool } from "../types/interface";
import { getHumanAccountBalance } from "../utils/common";
import { useAccounts } from "./useAppSlice";

export function useFeeStationPools() {
  const accounts = useAccounts();
  const [loadingPools, setLoadingPools] = useState(true);
  const [serverPoolList, setServerPoolList] = useState<FeeStationPool[]>([]);
  const [swapMinLimit, setSwapMinLimit] = useState("--");
  const [swapMaxLimit, setSwapMaxLimit] = useState("--");

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      "https://test-rtoken-api.stafihub.io/feeStation/api/v1/station/poolInfo",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        setLoadingPools(false);

        if (resJson.status === "80000") {
          const pools = resJson.data.poolInfoList || [];
          setServerPoolList(pools);
          setSwapMaxLimit(
            atomicToHuman(resJson.data.swapMaxLimit, STAFIHUB_DECIMALS)
          );
          setSwapMinLimit(
            atomicToHuman(resJson.data.swapMinLimit, STAFIHUB_DECIMALS)
          );
        }
      })
      .catch((err: Error) => {
        if (err.name === "AbortError") return;
        throw err;
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const poolList: FeeStationPool[] = useMemo(() => {
    const chainArr = _.values(chains);

    const formatPools = serverPoolList.map((pool: any) => {
      const chain = chainArr.find((chain) => chain.denom === pool.symbol);

      if (chain) {
        return {
          ...pool,
          chainName: chain.chainName,
          chainId: chain.chainId,
          formatBalance: getHumanAccountBalance(
            accounts[chain.chainId]?.allBalances,
            getDenom(chain.chainId),
            pool.decimals
          ),
          formatSwapRate: atomicToHuman(pool.swapRate, pool.decimals),
        } as FeeStationPool;
      }
      return undefined;
    });

    return _.compact(formatPools);
  }, [serverPoolList, accounts]);

  return { poolList, swapMinLimit, swapMaxLimit, loadingPools };
}

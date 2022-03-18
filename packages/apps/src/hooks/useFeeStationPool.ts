import { FeeStationPool, KeplrAccount } from "@stafihub/types";
import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useMemo, useState } from "react";
import ATOM from "../assets/images/ATOM.svg";
import { useAccounts } from "./useAppSlice";
import { STAFIHUB_DECIMALS } from "@stafihub/apps-config";

export function useFeeStationPools() {
  const accounts = useAccounts();
  const [serverPoolList, setServerPoolList] = useState<FeeStationPool[]>([]);
  const [swapMinLimit, setSwapMinLimit] = useState("--");
  const [swapMaxLimit, setSwapMaxLimit] = useState("--");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://test-rtoken-api.stafihub.io/feeStation/api/v1/station/poolInfo",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await response.json();

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
    })();
  }, []);

  const poolList: FeeStationPool[] = useMemo(() => {
    const formatPools = serverPoolList.map((pool: any) => {
      const chainName = pool.symbol.slice(1);

      return {
        ...pool,
        chainName,
        formatBalance: atomicToHuman(
          accounts[chainName]?.balance?.amount || "--",
          pool.decimals
        ),
        formatSwapRate: atomicToHuman(pool.swapRate, pool.decimals),
        icon: ATOM,
      } as FeeStationPool;
    });
    // console.log("formatPools", formatPools);

    return formatPools;
  }, [serverPoolList, accounts]);

  return { poolList, swapMinLimit, swapMaxLimit };
}

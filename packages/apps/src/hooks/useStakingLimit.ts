import {
  queryStakingParams,
  queryStakingPool,
  queryStakingTotalLiquidStaked,
} from "@stafihub/apps-wallet";
import { useEffect, useMemo, useState } from "react";
import { chains } from "../config";

export function useStakingLimit(chainId: string | undefined) {
  const [totalLiquidAmount, setTotalLiquidAmount] = useState<string>();
  const [totalStakeAmount, setTotalStakeAmount] = useState<string>();
  const [liquidStakingCap, setLiquidStakingCap] = useState<string>("1");

  useEffect(() => {
    (async () => {
      if (!chainId) {
        return;
      }

      const result = await queryStakingTotalLiquidStaked(chains[chainId]);
      setTotalLiquidAmount(result?.tokens);
    })();
  }, [chainId]);

  useEffect(() => {
    (async () => {
      if (!chainId) {
        return;
      }

      const result = await queryStakingPool(chains[chainId]);
      setTotalStakeAmount(result?.pool?.bondedTokens);
    })();
  }, [chainId]);

  useEffect(() => {
    (async () => {
      if (!chainId) {
        return;
      }

      const result = await queryStakingParams(chains[chainId]);

      setLiquidStakingCap(
        result?.params?.globalLiquidStakingCap
          ? Number(result?.params?.globalLiquidStakingCap) /
              Number("1000000000000000000") +
              ""
          : "1"
      );
    })();
  }, [chainId]);

  const exceedLimit = useMemo(() => {
    // console.log("xxx", totalStakeAmount, liquidStakingCap, totalLiquidAmount);
    return (
      Number(totalStakeAmount) * Number(liquidStakingCap) <=
      Number(totalLiquidAmount)
    );
  }, [totalLiquidAmount, totalStakeAmount, liquidStakingCap]);

  return { exceedLimit };
}

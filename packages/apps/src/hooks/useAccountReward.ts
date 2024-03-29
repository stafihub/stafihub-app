import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { EraRewardItem, RTokenRewardData } from "../types/interface";
import * as _ from "lodash";
import {
  getChainDecimals,
  getDenom,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { usePriceFromDenom } from "./useAppSlice";
import { chains } from "../config";

export function useAccountReward(chainId: string) {
  const [loading, setLoading] = useState(true);
  const [originLast24hReward, setOriginLast24hReward] = useState<string>("--");
  const [last24hReward, setLast24hReward] = useState<string>("--");
  const [lastEraReward, setLastEraReward] = useState<string>("--");
  const [totalReward, setTotalReward] = useState<string>("--");
  const [eraRewards, setEraRewards] = useState<EraRewardItem[]>([]);
  const [chartXData, setChartXData] = useState<string[]>([]);
  const [chartYData, setChartYData] = useState<string[]>([]);
  const tokenPrice = usePriceFromDenom(getDenom(chainId, chains));

  const rTokenReward: RTokenRewardData | undefined = useSelector(
    (state: RootState) => {
      return state.chain.rTokenRewardStore[getRTokenDenom(chainId, chains)];
    }
  );

  useEffect(() => {
    if (!rTokenReward) {
      setLast24hReward("--");
      setTotalReward("--");
      setEraRewards([]);
      setChartXData([]);
      setChartYData([]);
    } else {
      const decimals = getChainDecimals(chainId, chains);
      setLoading(false);
      setOriginLast24hReward(rTokenReward.last24hReward);
      setLast24hReward(atomicToHuman(rTokenReward.last24hReward, decimals));
      setLastEraReward(atomicToHuman(rTokenReward.lastEraReward, decimals));
      setTotalReward(atomicToHuman(rTokenReward.totalReward, decimals));
      setEraRewards(rTokenReward.eraRewardList);
      const xData = [...rTokenReward.chartXData.slice(0, 10)];
      _.reverse(xData);
      setChartXData(xData);

      setChartYData(
        _.reverse(
          rTokenReward.chartYData
            .slice(0, 10)
            .map(
              (data) =>
                Math.floor(
                  Number(
                    atomicToHuman(Number(data) * Number(tokenPrice), decimals)
                  ) * Math.pow(10, 4)
                ) /
                  Math.pow(10, 4) +
                ""
            )
        )
      );
    }
  }, [rTokenReward, tokenPrice, chainId]);

  return {
    eraRewards,
    originLast24hReward,
    last24hReward,
    lastEraReward,
    totalReward,
    chartXData,
    chartYData,
    loading,
  };
}

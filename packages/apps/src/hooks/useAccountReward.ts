import { atomicToHuman } from "@stafihub/apps-util";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { EraRewardItem, RTokenRewardData } from "../types/interface";
import * as _ from "lodash";
import { getDenom, getRTokenDenom } from "@stafihub/apps-config";
import { usePriceFromDenom } from "./useAppSlice";

export function useAccountReward(chainId: string) {
  const [loading, setLoading] = useState(true);
  const [originLast24hReward, setOriginLast24hReward] = useState<string>("--");
  const [last24hReward, setLast24hReward] = useState<string>("--");
  const [lastEraReward, setLastEraReward] = useState<string>("--");
  const [totalReward, setTotalReward] = useState<string>("--");
  const [eraRewards, setEraRewards] = useState<EraRewardItem[]>([]);
  const [chartXData, setChartXData] = useState<string[]>([]);
  const [chartYData, setChartYData] = useState<string[]>([]);
  const tokenPrice = usePriceFromDenom(getDenom(chainId));

  const rTokenReward: RTokenRewardData | undefined = useSelector(
    (state: RootState) => {
      return state.chain.rTokenRewardStore[getRTokenDenom(chainId)];
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
      setLoading(false);
      setOriginLast24hReward(rTokenReward.last24hReward);
      setLast24hReward(atomicToHuman(rTokenReward.last24hReward));
      setLastEraReward(atomicToHuman(rTokenReward.lastEraReward));
      setTotalReward(atomicToHuman(rTokenReward.totalReward));
      setEraRewards(rTokenReward.eraRewardList);
      const xData = [...rTokenReward.chartXData];
      _.reverse(xData);
      setChartXData(xData);

      setChartYData(
        _.reverse(
          rTokenReward.chartYData.map((data) =>
            atomicToHuman((Number(data) * Number(tokenPrice)).toFixed(0), 6, 4)
          )
        )
      );
    }
  }, [rTokenReward, tokenPrice]);

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

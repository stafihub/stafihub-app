import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  getStafiHubChainId,
  getTokenDisplayName,
  getRTokenDisplayName,
} from "@stafihub/apps-config";
import { chains } from "../config";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface RAssetItem {
  chainName: string;
  chainId: string;
  tokenName: string;
  rTokenName: string;
  myStakedAmount: string;
  rTokenAmount: string;
}

export function useRAssetList() {
  const [rAssetList, setRAssetList] = useState<RAssetItem[]>([]);

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  useEffect(() => {
    const restChainsArr = _.values(_.omit(chains, [getStafiHubChainId()]));
    setRAssetList(
      restChainsArr
        .sort((a, b) => {
          const stakeStatus1 = stakeStatusMap[a.chainId];
          const stakeStatus2 = stakeStatusMap[b.chainId];

          if (
            (Number(stakeStatus1?.rTokenBalance) === 0 ||
              isNaN(Number(stakeStatus1?.rTokenBalance))) &&
            (Number(stakeStatus2?.rTokenBalance) === 0 ||
              isNaN(Number(stakeStatus2?.rTokenBalance)))
          ) {
            return Number(a.sortIndex) - Number(b.sortIndex);
          }

          const aBalance =
            !stakeStatus1 ||
            Number(stakeStatus1.rTokenBalance) === 0 ||
            isNaN(Number(stakeStatus1.rTokenBalance))
              ? 0
              : stakeStatus1.rTokenBalance;

          const bBalance =
            !stakeStatus1 ||
            Number(stakeStatus1.rTokenBalance) === 0 ||
            isNaN(Number(stakeStatus1.rTokenBalance))
              ? 0
              : stakeStatus1.rTokenBalance;

          return Number(bBalance) - Number(aBalance);
        })
        .map((chain) => {
          return {
            chainName: chain.chainName,
            chainId: chain.chainId,
            tokenName: getTokenDisplayName(chain.chainId, chains),
            rTokenName: getRTokenDisplayName(chain.chainId, chains),
            myStakedAmount: "--",
            rTokenAmount: "--",
          };
        })
    );
  }, [stakeStatusMap]);

  return rAssetList;
}

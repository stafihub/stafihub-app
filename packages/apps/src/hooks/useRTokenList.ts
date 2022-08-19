import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  getStafiHubChainId,
  getTokenDisplayName,
  getRTokenDisplayName,
} from "@stafihub/apps-config/src";
import { chains } from "../config";

export interface RTokenItem {
  chainName: string;
  chainId: string;
  tokenName: string;
  rTokenName: string;
}

export function useRTokenList() {
  const [rTokenList, setRTokenList] = useState<RTokenItem[]>([]);

  useEffect(() => {
    const restChainsArr = _.values(_.omit(chains, [getStafiHubChainId()]));
    setRTokenList(
      restChainsArr
        .filter((item) => !item.stakeDisabled)
        .sort((a, b) => {
          return Number(a.sortIndex) - Number(b.sortIndex);
        })
        .map((chain) => {
          return {
            chainName: chain.chainName,
            chainId: chain.chainId,
            tokenName: getTokenDisplayName(chain.chainId, chains),
            rTokenName: getRTokenDisplayName(chain.chainId, chains),
          };
        })
    );
  }, []);

  return rTokenList;
}

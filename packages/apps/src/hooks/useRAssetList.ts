import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  chains,
  getStafiHubChainId,
  getTokenDisplayName,
  getRTokenDisplayName,
} from "@stafihub/apps-config/src";

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

  useEffect(() => {
    const restChainsArr = _.values(_.omit(chains, [getStafiHubChainId()]));
    setRAssetList(
      restChainsArr.map((chain) => {
        return {
          chainName: chain.chainName,
          chainId: chain.chainId,
          tokenName: getTokenDisplayName(chain.chainId),
          rTokenName: getRTokenDisplayName(chain.chainId),
          myStakedAmount: "--",
          rTokenAmount: "--",
        };
      })
    );
  }, []);

  return rAssetList;
}

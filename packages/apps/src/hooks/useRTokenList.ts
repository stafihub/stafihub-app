import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  chains,
  getStafiHubChainId,
  getTokenDisplayName,
  getRTokenDisplayName,
} from "@stafihub/apps-config/src";

interface RTokenItem {
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
      restChainsArr.map((chain) => {
        return {
          chainName: chain.chainName,
          chainId: chain.chainId,
          tokenName: getTokenDisplayName(chain.chainId),
          rTokenName: getRTokenDisplayName(chain.chainId),
        };
      })
    );
  }, []);

  return rTokenList;
}

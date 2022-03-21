import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  chains,
  STAFIHUB_NETWORK,
  getTokenDisplayName,
  getRTokenDisplayName,
} from "@stafihub/apps-config/src";

interface RTokenItem {
  chainName: string;
  tokenName: string;
  rTokenName: string;
}

export function useRTokenList() {
  const [rTokenList, setRTokenList] = useState<RTokenItem[]>([]);

  useEffect(() => {
    const restChainsArr = _.values(_.omit(chains, [STAFIHUB_NETWORK]));
    setRTokenList(
      restChainsArr.map((chain) => {
        return {
          chainName: chain.chainName,
          tokenName: getTokenDisplayName(chain.chainName),
          rTokenName: getRTokenDisplayName(chain.chainName),
        };
      })
    );
  }, []);

  return rTokenList;
}

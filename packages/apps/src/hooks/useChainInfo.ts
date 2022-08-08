import { KeplrChainParams } from "@stafihub/apps-config";
import { useEffect, useState } from "react";
import { chains } from "../config";

export function useChainInfo(chainId: string | undefined) {
  const [chainInfo, setChainInfo] = useState<KeplrChainParams | undefined>();

  useEffect(() => {
    if (chainId) {
      setChainInfo(chains[chainId]);
    }
  }, [chainId]);

  return chainInfo;
}

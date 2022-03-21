import { chains, CosmosNetworkParams } from "@stafihub/apps-config";
import { useEffect, useState } from "react";

export function useChainInfo(chainId: string | undefined) {
  const [chainInfo, setChainInfo] = useState<CosmosNetworkParams | undefined>();

  useEffect(() => {
    if (chainId) {
      setChainInfo(chains[chainId]);
    }
  }, [chainId]);

  return chainInfo;
}

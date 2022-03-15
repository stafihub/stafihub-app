import { chains } from "@stafihub/apps-config";

export function useChainInfo(network: string) {
  return chains[network];
}

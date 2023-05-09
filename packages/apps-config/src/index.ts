import { chainsV2 } from "./chains";
import { NetworkConfig } from ".";
import { ibcConfigs } from "./ibc";
import * as _ from "lodash";

export * from "./types";
export * from "./chains";
export * from "./ibc";

export function isDev(): boolean {
  // console.log("REACT_APP_ENV", process.env.REACT_APP_ENV);
  return process.env.REACT_APP_ENV !== "production";
}

export function isFork(): boolean {
  return process.env.REACT_APP_CHAIN_ID !== getStafiHubChainId();
}

export function getChains(network: "testnet" | "devnet" | "mainnet") {
  return chainsV2[network];
}

export function getApiHost(): string {
  if (isDev()) {
    return "https://test-rtoken-api.stafihub.io";
  } else {
    return "https://rtoken-api.stafihub.io";
  }
}

export function getRTokenApi2Host(usePrd?: boolean) {
  if (isDev() && !usePrd) {
    return "https://test-rtoken-api2.stafi.io";
  } else {
    return "https://rtoken-api2.stafi.io";
  }
}

export function getStafiHubChainId(): string {
  if (isDev()) {
    return "stafihub-testnet-2";
  } else {
    return "stafihub-1";
  }
}

export function getChainRestEndpoint(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.restEndpoint;
}

export function getChainAccountPrefix(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.bech32Config.bech32PrefixAccAddr;
}

export function getChainName(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.chainName;
}

export function getChainDecimals(
  chainId: string | undefined,
  chains: NetworkConfig
): number {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.decimals;
}

export function getTokenDisplayName(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  // return chain.denom.slice(1).toUpperCase();
  return chain.coinDenom;
}

export function getRTokenDisplayName(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  // return `r${chain.denom.slice(1).toUpperCase()}`;
  return `r${chain.coinDenom}`;
}

export function getChainIdFromRTokenDisplayName(
  rTokenName: string | undefined,
  chains: NetworkConfig
): string {
  const chainArr = _.values(chains);
  const matchedChain = chainArr.find((chain) => {
    return getRTokenDisplayName(chain.chainId, chains) === rTokenName;
  });
  if (!matchedChain) {
    throw new Error(`Chain with this rTokenName not found: ${rTokenName}`);
  }
  return matchedChain.chainId;
}

export function getChainIdFromDenom(
  denom: string | undefined,
  chains: NetworkConfig
): string {
  const chainArr = _.values(chains);
  const matchedChain = chainArr.find((chain) => {
    return chain.denom === denom;
  });
  if (!matchedChain) {
    throw new Error(`Chain with this rTokenName not found: ${denom}`);
  }
  return matchedChain.chainId;
}

export function getChainIdFromRTokenDenom(
  rTokenDenom: string | undefined,
  chains: NetworkConfig
): string {
  const chainArr = _.values(chains);
  const matchedChain = chainArr.find((chain) => {
    return getRTokenDenom(chain.chainId, chains) === rTokenDenom;
  });
  if (!matchedChain) {
    throw new Error(`Chain with this rTokenDenom not found: ${rTokenDenom}`);
  }
  return matchedChain.chainId;
}

export function getDenom(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.denom;
}

export function getRTokenDenom(
  chainId: string | undefined,
  chains: NetworkConfig
): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  if (chain.denom.startsWith("u")) {
    return `ur${chain.denom.slice(1)}`;
  } else {
    return `ur${chain.denom}`;
  }
}

export function getExplorerUrl(
  chainId: string | undefined,
  chains: NetworkConfig
) {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.explorerUrl;
}

export function getIBCConfig(
  otherChainId: string | undefined,
  chains: NetworkConfig
) {
  if (!otherChainId || !ibcConfigs[otherChainId]) {
    throw new Error(`Invalid otherChainId: ${otherChainId}`);
  }
  const ibcConfig = ibcConfigs[otherChainId];
  return ibcConfig;
}

export function getDefaultApy(
  chainId: string | undefined,
  chains: NetworkConfig
) {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.defaultApy;
}

export function getDisplayHubName(
  chainId: string | undefined,
  chains: NetworkConfig
) {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.displayHubName;
}

export function getGasLimit(
  chainId: string | undefined,
  chains: NetworkConfig
) {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.gasLimit || "200000";
}

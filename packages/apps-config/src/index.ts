import { chains } from "./chains";
import * as _ from "lodash";

export * from "./types";
export * from "./chains";

export function isDev(): boolean {
  // console.log("REACT_APP_ENV", process.env.REACT_APP_ENV);
  return process.env.REACT_APP_ENV !== "production";
}

export function isFork(): boolean {
  return process.env.REACT_APP_CHAIN_ID !== getStafiHubChainId();
}

export function getStafiHubChainId(): string {
  return "stafihub-testnet-1";
}

export function getHoursPerEra(): number {
  if (isDev()) {
    return 3;
  }
  return 24;
}

export function getChainRestEndpoint(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.restEndpoint;
}

export function getChainAccountPrefix(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.bech32Config.bech32PrefixAccAddr;
}

export function getChainName(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.chainName;
}

export function getChainDecimals(chainId: string | undefined): number {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.decimals;
}

export function getTokenDisplayName(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  // return chain.denom.slice(1).toUpperCase();
  return chain.coinDenom;
}

export function getRTokenDisplayName(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  // return `r${chain.denom.slice(1).toUpperCase()}`;
  return `r${chain.coinDenom}`;
}

export function getChainIdFromRTokenDisplayName(
  rTokenName: string | undefined
): string {
  const chainArr = _.values(chains);
  const matchedChain = chainArr.find((chain) => {
    return getRTokenDisplayName(chain.chainId) === rTokenName;
  });
  if (!matchedChain) {
    throw new Error(`Chain with this rTokenName not found: ${rTokenName}`);
  }
  return matchedChain.chainId;
}

export function getDenom(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.denom;
}

export function getRTokenDenom(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return `ur${chain.denom.slice(1)}`;
}

export function getExplorerUrl(chainId: string | undefined) {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return chain.explorerUrl;
}

export function getExplorerAccountUrl(account: string | undefined) {
  if (!account) {
    return undefined;
  }
  if (isDev()) {
    return `https://testnet-explorer.stafihub.io/stafi-hub-devnet/account/${account}`;
  }
  return `https://testnet-explorer.stafihub.io/stafi-hub-devnet/account/${account}`;
}

export function getExplorerTransactionUrl(transactionHash: string | undefined) {
  if (!transactionHash) {
    return undefined;
  }
  if (isDev()) {
    return `https://testnet-explorer.stafihub.io/stafi-hub-devnet/tx/${transactionHash}`;
  }
  return `https://testnet-explorer.stafihub.io/stafi-hub-devnet/tx/${transactionHash}`;
}

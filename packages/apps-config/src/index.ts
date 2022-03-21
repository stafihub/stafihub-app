import { STAFIHUB_NETWORK } from "./types";
import { chains } from "./chains";

export * from "./types";
export * from "./chains";

export function isDev(): boolean {
  return true;
}

export function isFork(): boolean {
  return process.env.REACT_APP_NETWORK !== STAFIHUB_NETWORK;
}

export function getCosmosNetwork(): string {
  return "iris";
}

export function getTokenDisplayName(chainName: string | undefined): string {
  if (!chainName || !chains[chainName]) {
    throw new Error(`Invalid chainName: ${chainName}`);
  }
  const chain = chains[chainName];
  return chain.denom.slice(1).toUpperCase();
}

export function getRTokenDisplayName(chainName: string | undefined): string {
  if (!chainName || !chains[chainName]) {
    throw new Error(`Invalid chainName: ${chainName}`);
  }
  const chain = chains[chainName];
  return `r${chain.denom.slice(1).toUpperCase()}`;
}

export function getDenom(chainName: string | undefined): string {
  if (!chainName || !chains[chainName]) {
    throw new Error(`Invalid chainName: ${chainName}`);
  }
  const chain = chains[chainName];
  return chain.denom;
}

export function getRTokenDenom(chainName: string | undefined): string {
  if (!chainName || !chains[chainName]) {
    throw new Error(`Invalid chainName: ${chainName}`);
  }
  const chain = chains[chainName];
  return `ur${chain.denom.slice(1)}`;
}

export function getExplorerUrl(chainName: string | undefined) {
  if (!chainName || !chains[chainName]) {
    throw new Error(`Invalid chainName: ${chainName}`);
  }
  const chain = chains[chainName];
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

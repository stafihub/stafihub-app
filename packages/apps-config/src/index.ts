import { chains } from "./chains";

export * from "./types";
export * from "./chains";

export function isDev(): boolean {
  return true;
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
  return chain.denom.slice(1).toUpperCase();
}

export function getRTokenDisplayName(chainId: string | undefined): string {
  if (!chainId || !chains[chainId]) {
    throw new Error(`Invalid chainId: ${chainId}`);
  }
  const chain = chains[chainId];
  return `r${chain.denom.slice(1).toUpperCase()}`;
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

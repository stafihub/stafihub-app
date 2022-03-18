import { STAFIHUB_NETWORK } from "./types";

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

export function getDenomFromChainName(chainName: string | undefined): string {
  if (!chainName) {
    throw new Error("Invalid empty chainName");
  }
  return `u${chainName}`;
}

export function getRTokenDenomFromChainName(
  chainName: string | undefined
): string {
  if (!chainName) {
    throw new Error("Invalid empty chainName");
  }
  return `ur${chainName}`;
}

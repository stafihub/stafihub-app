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

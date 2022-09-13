import { getChains } from "@stafihub/apps-config";

export const chains = getChains(isDev() ? "testnet" : "mainnet");

export function isDev(): boolean {
  // console.log("REACT_APP_ENV", process.env.REACT_APP_ENV);
  return process.env.REACT_APP_ENV !== "production";
}

export function getStafiAppHost(): string {
  if (isDev()) {
    return "https://test-rdot.stafi.io";
  }
  return "https://app.stafi.io";
}

export function getRdexAppHost(): string {
  if (isDev()) {
    return "https://test-app.rdex.finance";
  }
  return "https://app.rdex.finance";
}

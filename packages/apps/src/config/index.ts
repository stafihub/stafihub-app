import { getChains } from "@stafihub/apps-config";

export function isDev(): boolean {
  // console.log("REACT_APP_ENV", process.env.REACT_APP_ENV);
  return process.env.REACT_APP_ENV !== "production";
}

export const chains = getChains(isDev() ? "testnet" : "mainnet");

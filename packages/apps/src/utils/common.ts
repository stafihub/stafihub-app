import { atomicToHuman } from "@stafihub/apps-util";
import { getChainDecimals, getChainIdFromDenom } from "@stafihub/apps-config";
import { chains } from "../config";
import { Coin } from "../types/interface";

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function openLink(url: string | undefined | null) {
  if (!url) {
    return;
  }
  const otherWindow = window.open();
  if (otherWindow) {
    otherWindow.opener = null;
    otherWindow.location = url;
  }
}

export function getHumanAccountBalance(
  balances: Coin[] | undefined,
  denom: string | undefined,
  decimals: number = 4
): string {
  // console.log("balances", balances);
  if (!balances || !denom) {
    return "--";
  }
  const target = balances.find((coin) => coin.denom === denom);
  return target
    ? atomicToHuman(
        target.amount,
        getChainDecimals(getChainIdFromDenom(denom, chains), chains),
        decimals
      )
    : "0";
}

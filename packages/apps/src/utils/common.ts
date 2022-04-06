import { atomicToHuman } from "@stafihub/apps-util";
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
  decimals: number = 6
): string {
  if (!balances || !denom) {
    return "--";
  }
  const target = balances.find((coin) => coin.denom === denom);
  return target ? atomicToHuman(target.amount, decimals) : "--";
}

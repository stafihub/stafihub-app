import { atomicToHuman } from "@stafihub/apps-util";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useAccounts() {
  const accounts = useSelector((state: RootState) => {
    return state.app.accounts;
  });

  return accounts;
}

export function useChainAccount(chainId: string | undefined) {
  const account = useSelector((state: RootState) => {
    if (!chainId) {
      return undefined;
    }
    return state.app.accounts[chainId];
  });

  return account;
}

export function useIsFork() {
  const isFork = useSelector((state: RootState) => {
    return state.app.isFork;
  });

  return [isFork];
}

export function useIsLoading() {
  const isLoading = useSelector((state: RootState) => {
    return state.app.isLoading;
  });

  return isLoading;
}

export function useSlippage() {
  const slippage = useSelector((state: RootState) => {
    return state.app.slippage;
  });

  return slippage;
}

export function useUnreadNoticeFlag() {
  const unreadNoticeFlag = useSelector((state: RootState) => {
    return state.app.unreadNoticeFlag;
  });

  return unreadNoticeFlag;
}

export function usePriceList() {
  const priceList = useSelector((state: RootState) => {
    return state.app.priceList;
  });

  return priceList;
}

export function usePriceFromDenom(denom: string) {
  const price = useSelector((state: RootState) => {
    const matched = state.app.priceList.find((price) => price.denom === denom);
    if (matched) {
      return atomicToHuman(matched?.price, 6);
    } else {
      return "--";
    }
  });

  return price;
}

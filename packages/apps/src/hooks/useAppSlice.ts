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

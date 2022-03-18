import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useAccounts() {
  const accounts = useSelector((state: RootState) => {
    return state.app.accounts;
  });

  return accounts;
}

export function useChainAccount(network: string | undefined) {
  const account = useSelector((state: RootState) => {
    if (!network) {
      return undefined;
    }
    return state.app.accounts[network];
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

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useAccounts() {
  const accounts = useSelector((state: RootState) => {
    return state.app.accounts;
  });

  return [accounts];
}

export function useChainAccount(network: string) {
  const account = useSelector((state: RootState) => {
    return state.app.accounts[network];
  });

  return [account];
}

export function useIsFork() {
  const isFork = useSelector((state: RootState) => {
    return state.app.isFork;
  });

  return [isFork];
}

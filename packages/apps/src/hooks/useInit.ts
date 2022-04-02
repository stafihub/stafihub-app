import { chains, getStafiHubChainId, isFork } from "@stafihub/apps-config";
import * as _ from "lodash";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  connectKeplrChains,
  setIsFork,
  updateAllTokenBalance,
} from "../redux/reducers/AppSlice";
import { updateChainEras } from "../redux/reducers/ChainSlice";
import { updateStafiHubIBCChannels } from "../redux/reducers/IBCSlice";
import { isNetworkAllowed } from "../utils/storage";
import { useChainAccount } from "./useAppSlice";
import { useInterval } from "./useInterval";

export function useInit() {
  const dispatch = useDispatch();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());

  useEffect(() => {
    console.log("chains", chains);

    dispatch(setIsFork(isFork()));
  }, [dispatch]);

  // Auto connect keplr chain if connected before.
  const fetchKeplrAccounts = useCallback(() => {
    const chainIds = _.keys(chains);

    dispatch(
      connectKeplrChains(
        chainIds.filter((network) => isNetworkAllowed(network))
      )
    );
  }, [dispatch]);

  useEffect(() => {
    fetchKeplrAccounts();

    // Keplr account change event.
    window.addEventListener("keplr_keystorechange", () => {
      fetchKeplrAccounts();
    });
  }, [fetchKeplrAccounts]);

  const updateEras = useCallback(() => {
    const chainIds = _.keys(_.omit(chains, [getStafiHubChainId()]));
    dispatch(updateChainEras(chainIds));
  }, [dispatch]);

  useEffect(() => {
    updateEras();
  }, [updateEras]);

  // Update eras every 10min.
  useInterval(() => {
    updateEras();
  }, 10 * 60 * 1000);

  // Update balances every 6s.
  useInterval(() => {
    dispatch(updateAllTokenBalance());
  }, 6000);

  // Update IBC channels.
  useEffect(() => {
    dispatch(updateStafiHubIBCChannels(stafiHubAccount?.allBalances));
  }, [stafiHubAccount, dispatch]);
}

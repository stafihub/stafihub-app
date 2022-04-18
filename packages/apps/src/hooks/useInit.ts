import { chains, getStafiHubChainId, isFork } from "@stafihub/apps-config";
import * as _ from "lodash";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  connectKeplrChains,
  setIsFork,
  updateAllTokenBalance,
  updatePriceList,
} from "../redux/reducers/AppSlice";
import { updateChainEras } from "../redux/reducers/ChainSlice";
import { updateChainIBCChannels } from "../redux/reducers/IBCSlice";
import { isNetworkAllowed } from "../utils/storage";
import { useAccounts } from "./useAppSlice";
import { useInterval } from "./useInterval";

export function useInit() {
  const dispatch = useDispatch();
  const accounts = useAccounts();

  useEffect(() => {
    // console.log("chains", chains);

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

  const updatePrices = useCallback(() => {
    dispatch(updatePriceList());
  }, [dispatch]);

  useEffect(() => {
    updateEras();
    updatePrices();
  }, [updateEras, updatePrices]);

  // Update eras every 10min.
  useInterval(() => {
    updateEras();
  }, 10 * 60 * 1000);

  // Update priceList every 30s.
  useInterval(() => {
    updatePrices();
  }, 30 * 1000);

  // Update balances every 6s.
  useInterval(() => {
    dispatch(updateAllTokenBalance());
  }, 6000);

  // Update IBC channels.
  useEffect(() => {
    _.keys(accounts).forEach((chainId) => {
      dispatch(updateChainIBCChannels(chainId, accounts[chainId]?.allBalances));
    });
  }, [accounts, dispatch]);
}

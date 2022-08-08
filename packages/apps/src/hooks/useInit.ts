import { getStafiHubChainId, isFork } from "@stafihub/apps-config";
import * as _ from "lodash";
import { queryLatestBlock } from "@stafihub/apps-wallet";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  connectKeplrChains,
  setIsFork,
  setLatestBlock,
  updateAllTokenBalance,
  updatePriceList,
} from "../redux/reducers/AppSlice";
import { updateChainEras } from "../redux/reducers/ChainSlice";
import { updateChainIBCChannels } from "../redux/reducers/IBCSlice";
import { isNetworkAllowed } from "../utils/storage";
import { useAccounts } from "./useAppSlice";
import { useInterval } from "./useInterval";
import { chains } from "../config";

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

  const updateLatestBlock = useCallback(async () => {
    const latestBlockResult = await queryLatestBlock(
      chains[getStafiHubChainId()]
    );
    const height = latestBlockResult?.block?.header?.height || 0;
    dispatch(setLatestBlock(height ? height.toInt() : 0));
  }, [dispatch]);

  useEffect(() => {
    updateEras();
    updatePrices();
    updateLatestBlock();
  }, [updateEras, updatePrices, updateLatestBlock]);

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

  // Update block every 6s.
  useInterval(() => {
    updateLatestBlock();
  }, 6000);

  // Update IBC channels.
  useEffect(() => {
    _.keys(accounts).forEach((chainId) => {
      dispatch(updateChainIBCChannels(chainId, accounts[chainId]?.allBalances));
    });
  }, [accounts, dispatch]);
}

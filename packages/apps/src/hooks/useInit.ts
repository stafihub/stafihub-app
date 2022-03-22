import { chains, getStafiHubChainId, isFork } from "@stafihub/apps-config";
import * as _ from "lodash";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectKeplrChains, setIsFork } from "../redux/reducers/AppSlice";
import { updateChainEras } from "../redux/reducers/ChainSlice";
import { isNetworkAllowed } from "../utils/storage";
import { useInterval } from "./useInterval";

export function useInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("chains", chains);

    dispatch(setIsFork(isFork()));
  }, [dispatch]);

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

  useInterval(() => {
    updateEras();
  }, 10 * 60 * 1000);
}

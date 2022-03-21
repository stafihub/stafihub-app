import { chains, isFork } from "@stafihub/apps-config";
import * as _ from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectKeplrChains, setIsFork } from "../redux/reducers/AppSlice";
import { isNetworkAllowed } from "../utils/storage";

export function useInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("chains", chains);

    dispatch(setIsFork(isFork()));

    const networks = _.keys(chains);

    dispatch(
      connectKeplrChains(
        networks.filter((network) => isNetworkAllowed(network))
      )
    );
  }, [dispatch]);
}

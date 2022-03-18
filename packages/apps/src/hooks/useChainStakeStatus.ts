import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance } from "@stafihub/apps-wallet";
import { ChainStakeStatus } from "@stafihub/types";
import { STAFIHUB_NETWORK } from "@stafihub/apps-config";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChainStakeStatus } from "../redux/reducers/ChainSlice";
import { RootState } from "../redux/store";
import { useChainAccount } from "./useAppSlice";

export function useChainStakeStatus(denom: string) {
  const dispatch = useDispatch();
  const stafiHubAccount = useChainAccount(STAFIHUB_NETWORK);

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const stakeStatus: ChainStakeStatus | undefined = useMemo(() => {
    return stakeStatusMap[denom];
  }, [stakeStatusMap, denom]);

  const updateStakeStatus = useCallback(async () => {
    if (!denom || !stafiHubAccount) {
      return;
    }
    const result = await queryrTokenBalance(
      stafiHubAccount.bech32Address,
      denom
    );
    const chainStakeStatus: ChainStakeStatus = {
      rTokenDenom: denom,
      rTokenBalance: atomicToHuman(result),
    };
    dispatch(updateChainStakeStatus(denom, chainStakeStatus));
  }, [dispatch, denom, stafiHubAccount]);

  useEffect(() => {
    updateStakeStatus();
  }, [updateStakeStatus]);

  return { stakeStatus, updateStakeStatus };
}

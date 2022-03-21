import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance } from "@stafihub/apps-wallet";
import { ChainStakeStatus } from "@stafihub/types";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChainStakeStatus } from "../redux/reducers/ChainSlice";
import { RootState } from "../redux/store";
import { useChainAccount } from "./useAppSlice";

export function useChainStakeStatus(chainId: string | undefined) {
  const dispatch = useDispatch();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const stakeStatus: ChainStakeStatus | undefined = useMemo(() => {
    return chainId ? stakeStatusMap[chainId] : undefined;
  }, [stakeStatusMap, chainId]);

  const updateStakeStatus = useCallback(async () => {
    if (!chainId || !stafiHubAccount) {
      return;
    }
    const result = await queryrTokenBalance(
      stafiHubAccount.bech32Address,
      getRTokenDenom(chainId)
    );
    const chainStakeStatus: ChainStakeStatus = {
      rTokenDenom: chainId,
      rTokenBalance: atomicToHuman(result),
    };
    dispatch(updateChainStakeStatus(chainId, chainStakeStatus));
  }, [dispatch, chainId, stafiHubAccount]);

  useEffect(() => {
    updateStakeStatus();
  }, [updateStakeStatus]);

  return { stakeStatus, updateStakeStatus };
}

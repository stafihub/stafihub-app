import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance } from "@stafihub/apps-wallet";
import { ChainStakeStatus } from "@stafihub/types";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChainStakeStatus } from "../redux/reducers/ChainSlice";
import { RootState } from "../redux/store";

export function useChainStakeStatus(denom: string) {
  const dispatch = useDispatch();

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const stakeStatus: ChainStakeStatus | undefined = useMemo(() => {
    return stakeStatusMap[denom];
  }, [stakeStatusMap, denom]);

  const updateStakeStatus = useCallback(async () => {
    if (!denom) {
      return;
    }
    const result = await queryrTokenBalance(denom);
    const chainStakeStatus: ChainStakeStatus = {
      ...stakeStatus,
      rTokenDenom: denom,
      rTokenBalance: atomicToHuman(result),
    };
    dispatch(updateChainStakeStatus(denom, chainStakeStatus));
  }, [dispatch, denom, stakeStatus]);

  useEffect(() => {
    updateStakeStatus();
  }, [updateStakeStatus]);

  return { stakeStatus, updateStakeStatus };
}

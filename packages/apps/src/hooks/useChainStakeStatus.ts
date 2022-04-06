import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance } from "@stafihub/apps-wallet";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChainStakeStatus } from "../redux/reducers/ChainSlice";
import { RootState } from "../redux/store";
import { useChainAccount } from "./useAppSlice";
import { ChainStakeStatus } from "../types/interface";
import { useStakePoolInfo } from "./useStakePoolInfo";

export function useChainStakeStatus(chainId: string | undefined) {
  const dispatch = useDispatch();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(chainId));

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const stakeStatus: ChainStakeStatus | undefined = useMemo(() => {
    return chainId ? stakeStatusMap[chainId] : undefined;
  }, [stakeStatusMap, chainId]);

  const updateStakeStatus = useCallback(async () => {
    if (!chainId || !stafiHubAccount || isNaN(Number(exchangeRate))) {
      return;
    }
    const result = await queryrTokenBalance(
      stafiHubAccount.bech32Address,
      getRTokenDenom(chainId)
    );
    const rTokenBalance = atomicToHuman(result);
    const stakedValue = Number(rTokenBalance) * Number(exchangeRate) * 0.06;
    const chainStakeStatus: ChainStakeStatus = {
      rTokenDenom: chainId,
      rTokenBalance,
      stakedValue: stakedValue.toString(),
    };
    dispatch(updateChainStakeStatus(chainId, chainStakeStatus));
  }, [dispatch, chainId, stafiHubAccount, exchangeRate]);

  useEffect(() => {
    updateStakeStatus();
  }, [updateStakeStatus]);

  return { stakeStatus, updateStakeStatus };
}

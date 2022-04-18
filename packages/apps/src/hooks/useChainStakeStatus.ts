import {
  getDenom,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance, queryStakePoolInfo } from "@stafihub/apps-wallet";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChainStakeStatus } from "../redux/reducers/ChainSlice";
import { RootState } from "../redux/store";
import { ChainStakeStatus } from "../types/interface";
import { useChainAccount, usePriceList } from "./useAppSlice";

export function useChainStakeStatus(chainId: string | undefined) {
  const dispatch = useDispatch();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const priceList = usePriceList();

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const stakeStatus: ChainStakeStatus | undefined = useMemo(() => {
    return chainId ? stakeStatusMap[chainId] : undefined;
  }, [stakeStatusMap, chainId]);

  const updateStakeStatus = useCallback(
    async (chainId: string | undefined) => {
      if (!chainId || !stafiHubAccount) {
        return;
      }

      const poolInfoResult = await queryStakePoolInfo(getRTokenDenom(chainId));
      const exchangeRate = atomicToHuman(poolInfoResult.exchangeRate);

      if (isNaN(Number(exchangeRate))) {
        return;
      }

      const result = await queryrTokenBalance(
        stafiHubAccount.bech32Address,
        getRTokenDenom(chainId)
      );
      const rTokenBalance = atomicToHuman(result);
      const matched = priceList.find(
        (price) => price.denom === getDenom(chainId)
      );
      let tokenPrice = "--";
      if (matched) {
        tokenPrice = atomicToHuman(matched?.price, 6);
      }
      const stakedValue =
        Number(rTokenBalance) * Number(exchangeRate) * Number(tokenPrice);
      const chainStakeStatus: ChainStakeStatus = {
        rTokenDenom: chainId,
        rTokenBalance,
        stakedValue: stakedValue.toString(),
      };
      dispatch(updateChainStakeStatus(chainId, chainStakeStatus));
    },
    [dispatch, stafiHubAccount, priceList]
  );

  useEffect(() => {
    updateStakeStatus(chainId);
  }, [updateStakeStatus, chainId]);

  return { stakeStatus, updateStakeStatus };
}

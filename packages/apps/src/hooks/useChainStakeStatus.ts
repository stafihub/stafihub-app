import {
  getDenom,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { queryrTokenBalance, queryStakePoolInfo } from "@stafihub/apps-wallet";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chains } from "../config";
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
      if (!chainId) {
        return;
      }
      if (!stafiHubAccount) {
        dispatch(updateChainStakeStatus(chainId, undefined));
        return;
      }

      const poolInfoResult = await queryStakePoolInfo(
        chains[getStafiHubChainId()],
        getRTokenDenom(chainId, chains)
      );
      const exchangeRate = atomicToHuman(poolInfoResult.exchangeRate, 6, 6);

      if (isNaN(Number(exchangeRate))) {
        return;
      }

      const result = await queryrTokenBalance(
        chains[getStafiHubChainId()],
        stafiHubAccount.bech32Address,
        getRTokenDenom(chainId, chains)
      );
      const rTokenBalance = atomicToHuman(result, 6, 6);

      const matched = priceList.find(
        (price) => price.denom === getDenom(chainId, chains)
      );
      let tokenPrice = "--";
      if (matched) {
        tokenPrice = atomicToHuman(matched.price, 6, 6);
      }
      const stakedAmount =
        (Number(result) / 1000000) *
          (Number(poolInfoResult.exchangeRate) / 1000000) +
        "";
      const stakedValue = Number(stakedAmount) * Number(tokenPrice);
      const chainStakeStatus: ChainStakeStatus = {
        rTokenDenom: chainId,
        rTokenBalance,
        stakedAmount,
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

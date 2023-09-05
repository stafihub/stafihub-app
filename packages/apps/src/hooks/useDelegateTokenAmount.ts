import {
  queryDelegatorDelegations,
  queryRValidatorList,
  queryTokenizeShareRecords,
} from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { chains } from "../config";
import { useChainAccount } from "./useAppSlice";
import { atomicToHuman } from "@stafihub/apps-util";
import { DelegationResponse } from "@stafihub/types";

export function useDelegateTokenAmount(chainId: string | undefined) {
  const chainAccount = useChainAccount(chainId);
  const [delegateTokenBalance, setDelegateTokenBalance] = useState<string>();
  const [delegationList, setDelegationList] = useState<DelegationResponse[]>(
    []
  );

  useEffect(() => {
    (async () => {
      if (!chainAccount?.bech32Address || !chainId) {
        return;
      }
      const delegatorDelegationsResult = await queryDelegatorDelegations(
        chains[chainId],
        chainAccount?.bech32Address
      );
      // console.log({ delegatorDelegationsResult });
      let total = 0;
      delegatorDelegationsResult?.delegationResponses.forEach((item) => {
        total += Number(item.balance?.amount);
      });
      // console.log({ total });
      setDelegateTokenBalance(atomicToHuman(total));
      setDelegationList(delegatorDelegationsResult?.delegationResponses || []);
    })();
  }, [chainAccount, chainId]);

  useEffect(() => {
    (async () => {
      if (!chainAccount?.bech32Address || !chainId) {
        return;
      }
      const tokenizeShareRecordsResult = await queryTokenizeShareRecords(
        chains[chainId],
        chainAccount?.bech32Address
      );
      console.log({ tokenizeShareRecordsResult });
    })();
  }, [chainAccount, chainId]);

  return { delegateTokenBalance, delegationList };
}

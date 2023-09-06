import { IndexedTx } from "@cosmjs/stargate";
import type {
  GetLatestBlockResponse,
  QueryActDetailResponse,
  QueryActLatestCycleResponse,
  QueryBondedPoolsByDenomResponse,
  QueryChannelResponse,
  QueryGetBondRecordResponse,
  QueryGetChainEraResponse,
  QueryGetEraExchangeRateResponse,
  QueryGetPoolDetailResponse,
  QueryGetRParamsResponse,
  QueryGetUnbondCommissionResponse,
  QueryGetUnbondRelayFeeResponse,
  QueryStakingParamsResponse,
  QuerySupplyOfResponse,
  UserClaimInfo,
} from "@stafihub/types";
import { ClientState, Coin, QueryDenomTraceResponse } from "@stafihub/types";
import Long from "long";
import {
  createCosmosBankQueryService,
  createCosmosBaseQueryService,
  createCosmosClient,
  createCosmosStakingQueryService,
  createIBCApplicationsQueryService,
  createIBCCoreConnectionQueryService,
  createQueryService,
  createRMintRewardQueryService,
} from ".";
import { KeplrChainParams } from "../interface";

export async function queryTx(
  chainConfig: KeplrChainParams | null | undefined,
  txHash: string
): Promise<IndexedTx | null> {
  const client = await createCosmosClient(chainConfig);
  if (!client) {
    return null;
  }

  try {
    const result = await client.getTx(txHash);
    return result;
  } catch {
    return null;
  }
}

export async function queryAccountBalance(
  chainConfig: KeplrChainParams | null | undefined,
  denom: string,
  address: string
): Promise<Coin | null> {
  const client = await createCosmosClient(chainConfig);
  if (!client) {
    return null;
  }

  const result = await client.getBalance(address, denom);
  return result;
}

export async function queryAccountBalances(
  chainConfig: KeplrChainParams | null | undefined,
  address: string
): Promise<Coin[]> {
  const client = await createCosmosClient(chainConfig);
  if (!client) {
    return [];
  }

  try {
    // const result = await client.getBalance(address, chains[chainId].denom);
    const allBalancesResult = await client.getAllBalances(address);
    return [...allBalancesResult];
  } catch {
    return [];
  }
}

export async function queryStakePoolInfo(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  tokenDenom: string
): Promise<any> {
  const queryService = await createQueryService(stafiHubChainConfig);

  const results = await Promise.all([
    queryService.BondedPoolsByDenom({
      denom: tokenDenom,
    }),
    queryService.GetExchangeRate({
      denom: tokenDenom,
    }),
    queryService.GetRParams({
      denom: tokenDenom,
    }),
    queryService.IcaPoolList({ denom: tokenDenom }),
  ]);

  const icaPoolList = results[3].icaPoolList;

  const multisigPoolAddress = results[0].addrs.find((poolAddress) => {
    const matchedIcaPool = icaPoolList.find(
      (item) => item.DelegationAccount?.address === poolAddress
    );
    return !matchedIcaPool;
  });

  const icaPoolAddress = results[0].addrs.find((poolAddress) => {
    const matchedIcaPool = icaPoolList.find(
      (item) => item.DelegationAccount?.address === poolAddress
    );
    return matchedIcaPool;
  });

  return {
    poolAddress: results[0].addrs[0],
    exchangeRate: results[1].exchangeRate?.value,
    leastBond: results[2].rParams?.leastBond
      ? parseInt(results[2].rParams?.leastBond).toString()
      : "--",
    eraHours: results[2].rParams?.eraSeconds
      ? Math.round(Number(results[2].rParams.eraSeconds) / 3600).toString()
      : "--",
    multisigPoolAddress,
    icaPoolAddress,
  };
}

export async function queryBondPipeline(
  stafiHubChainConfig: KeplrChainParams | null | undefined,

  tokenDenom: string,
  poolAddress: string
): Promise<string> {
  const queryService = await createQueryService(stafiHubChainConfig);
  const result = await queryService.GetBondPipeline({
    denom: tokenDenom,
    pool: poolAddress,
  });
  const balance = result.pipeline?.chunk?.active || "0";
  return balance;
}

export async function queryRParams(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  tokenDenom: string
): Promise<QueryGetRParamsResponse> {
  const queryService = await createQueryService(stafiHubChainConfig);

  const result = await queryService.GetRParams({
    denom: tokenDenom,
  });

  return result;
}

export async function queryLatestBlock(
  chainConfig: KeplrChainParams | null | undefined
): Promise<GetLatestBlockResponse | null> {
  const queryService = await createCosmosBaseQueryService(chainConfig);

  const result = await queryService.GetLatestBlock({});

  // console.log(`queryLatestBlock ${chainId} result`, result);

  return result;
}

export async function queryPoolByDenom(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  tokenDenom: string
): Promise<QueryBondedPoolsByDenomResponse> {
  const queryService = await createQueryService(stafiHubChainConfig);
  const result = await queryService.BondedPoolsByDenom({
    denom: tokenDenom,
  });
  return result;
}

export async function queryPoolDetail(
  chainConfig: KeplrChainParams | null | undefined,
  tokenDenom: string,
  poolAddress: string
): Promise<QueryGetPoolDetailResponse> {
  const queryService = await createQueryService(chainConfig);
  const result = await queryService.GetPoolDetail({
    denom: tokenDenom,
    pool: poolAddress,
  });
  return result;
}

export async function queryTokenSupply(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  denom: string
): Promise<QuerySupplyOfResponse | null> {
  try {
    const queryService = await createCosmosBankQueryService(
      stafiHubChainConfig
    );
    const result = await queryService.SupplyOf({
      denom,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryrTokenSupply err", denom, err);
  }
  return null;
}

export async function queryrTokenBalance(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  tokenDenom: string
): Promise<string> {
  const client = await createCosmosClient(stafiHubChainConfig);
  if (!client) {
    return "--";
  }

  const result = await client.getBalance(stafiHubAddress, tokenDenom);
  return result.amount;
}

export async function queryBondRecord(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  denom: string,
  txhash: string
): Promise<QueryGetBondRecordResponse | null> {
  try {
    const queryService = await createQueryService(stafiHubChainConfig);
    const result = await queryService.GetBondRecord({
      denom,
      txhash,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryBondRecord err", denom, txhash, err);
  }
  return null;
}

// export async function queryAccountUnbond(
//   tokenDenom: string,
//   stafiHubAddress: string
// ): Promise<QueryGetAccountUnbondResponse | null> {
//   try {
//     const queryService = await createQueryService(getStafiHubChainId());
//     const result = await queryService.GetAccountUnbond({
//       denom: tokenDenom,
//       unbonder: stafiHubAddress,
//     });
//     return result;
//   } catch (err: unknown) {
//     console.log("queryAccountUnbond err", err);
//   }
//   return null;
// }

export async function queryUnbondCommission(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  tokenDenom: string
): Promise<QueryGetUnbondCommissionResponse | null> {
  try {
    const queryService = await createQueryService(stafiHubChainConfig);
    const result = await queryService.GetUnbondCommission({
      denom: tokenDenom,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryUnbondCommission err", err);
  }
  return null;
}

export async function queryChainEra(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  denom: string
): Promise<QueryGetChainEraResponse | null> {
  try {
    const queryService = await createQueryService(stafiHubChainConfig);
    const result = await queryService.GetChainEra({
      denom,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryChainEra err", denom, err);
  }
  return null;
}

export async function queryEraExchangeRate(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  era: number,
  denom: string
): Promise<QueryGetEraExchangeRateResponse | null> {
  try {
    const queryService = await createQueryService(stafiHubChainConfig);
    const result = await queryService.GetEraExchangeRate({
      era,
      denom,
    });
    return result;
  } catch (err: unknown) {}
  return null;
}

export async function queryUnbondRelayFee(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  denom: string
): Promise<QueryGetUnbondRelayFeeResponse | null> {
  try {
    const queryService = await createQueryService(stafiHubChainConfig);
    const result = await queryService.GetUnbondRelayFee({
      denom,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryUnbondRelayFee err", denom, err);
  }
  return null;
}

export async function queryChainParams(
  chainConfig: KeplrChainParams | null | undefined
): Promise<QueryStakingParamsResponse | undefined> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.Params({});
    return result;
  } catch (err: unknown) {
    // console.log("queryChainParams err", chainId, err);
  }
  return;
}

export async function queryDenomTrace(
  chainConfig: KeplrChainParams | null | undefined,
  // ibc/{hash}
  ibcDenom: string
): Promise<QueryDenomTraceResponse | undefined> {
  try {
    const queryService = await createIBCApplicationsQueryService(chainConfig);
    const result = await queryService.DenomTrace({
      hash: ibcDenom.split("/")[1],
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryDenomTrace err", chainId, err);
  }
  return;
}

export async function queryChannel(
  chainConfig: KeplrChainParams | null | undefined,
  channelName: string
): Promise<QueryChannelResponse | undefined> {
  try {
    const queryService = await createIBCCoreConnectionQueryService(chainConfig);
    const result = await queryService.Channel({
      portId: "transfer",
      channelId: channelName,
    });
    return result;
  } catch (err: unknown) {
    // console.log("queryChannel err", chainId, err);
  }
  return;
}

export async function queryChannelClientState(
  chainConfig: KeplrChainParams | null | undefined,
  channelName: string
): Promise<ClientState | undefined> {
  try {
    const queryService = await createIBCCoreConnectionQueryService(chainConfig);
    const result = await queryService.ChannelClientState({
      portId: "transfer",
      channelId: channelName,
    });

    if (result.identifiedClientState?.clientState?.value) {
      const clientState = ClientState.decode(
        result.identifiedClientState?.clientState?.value
      );

      // console.log("clientState result", clientState);
      return clientState;
    }
  } catch (err: unknown) {
    // console.log("queryChannelClientState err", chainId, err);
  }
  return;
}

export async function queryActLatestCycle(
  chainConfig: KeplrChainParams | null | undefined,
  denom: string
): Promise<QueryActLatestCycleResponse> {
  const queryService = await createRMintRewardQueryService(chainConfig);
  const result = await queryService.ActLatestCycle({
    denom,
  });

  // console.log(`queryActLatestCycle ${chainId} ${denom} result`, result);

  return result;
}

export async function queryActDetail(
  chainConfig: KeplrChainParams | null | undefined,
  denom: string,
  cycle: Long
): Promise<QueryActDetailResponse> {
  const queryService = await createRMintRewardQueryService(chainConfig);
  const result = await queryService.ActDetail({
    denom,
    cycle,
  });

  // console.log(`queryActDetail ${chainId} ${denom} ${cycle} result`, result);

  return result;
}

export async function queryUserMintCount(
  chainConfig: KeplrChainParams | null | undefined,
  userAddress: string,
  denom: string,
  cycle: Long
): Promise<Long | undefined> {
  try {
    const queryService = await createRMintRewardQueryService(chainConfig);
    const result = await queryService.UserMintCount({
      address: userAddress,
      denom,
      cycle,
    });

    // console.log(
    //   `queryUserMintCount ${chainId} ${userAddress} ${denom} ${cycle} result`,
    //   result
    // );

    return result.count;
  } catch {
    return undefined;
  }
}

export async function queryUserClaimInfoDetail(
  chainConfig: KeplrChainParams | null | undefined,
  userAddress: string,
  denom: string,
  cycle: Long,
  mintIndex: Long
): Promise<UserClaimInfo | undefined> {
  try {
    const queryService = await createRMintRewardQueryService(chainConfig);
    const result = await queryService.ClaimInfoDetail({
      address: userAddress,
      denom,
      cycle,
      mintIndex,
    });

    // console.log(
    //   `queryUserClaimInfoDetail ${chainId} ${userAddress} ${denom} ${cycle} result`,
    //   result
    // );

    return result.claimInfo;
  } catch {
    return undefined;
  }
}

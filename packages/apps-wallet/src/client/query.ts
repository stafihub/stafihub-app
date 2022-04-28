import { IndexedTx } from "@cosmjs/stargate";
import { getStafiHubChainId } from "@stafihub/apps-config";
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
  QueryParamsResponse,
  QuerySupplyOfResponse,
  UserClaimInfo,
} from "@stafihub/types";
import {
  QueryDenomTraceResponse,
  QueryGetAccountUnbondResponse,
} from "@stafihub/types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
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

export async function queryTx(
  chainId: string,
  txHash: string
): Promise<IndexedTx | null> {
  const client = await createCosmosClient(chainId);
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
  chainId: string,
  denom: string,
  address: string
): Promise<Coin | null> {
  const client = await createCosmosClient(chainId);
  if (!client) {
    return null;
  }

  const result = await client.getBalance(address, denom);
  return result;
}

export async function queryAccountBalances(
  chainId: string,
  address: string
): Promise<Coin[]> {
  const client = await createCosmosClient(chainId);
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

export async function queryStakePoolInfo(tokenDenom: string): Promise<any> {
  const queryService = await createQueryService(getStafiHubChainId());

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
  ]);

  return {
    poolAddress: results[0].addrs[0],
    exchangeRate: results[1].exchangeRate?.value,
    leastBond: results[2].rParams?.leastBond
      ? parseInt(results[2].rParams?.leastBond).toString()
      : "--",
    eraHours: results[2].rParams?.eraSeconds
      ? Math.round(Number(results[2].rParams.eraSeconds) / 3600).toString()
      : "--",
  };
}

export async function queryRParams(
  tokenDenom: string
): Promise<QueryGetRParamsResponse> {
  const queryService = await createQueryService(getStafiHubChainId());

  const result = await queryService.GetRParams({
    denom: tokenDenom,
  });

  return result;
}

export async function queryLatestBlock(
  chainId: string
): Promise<GetLatestBlockResponse | null> {
  const queryService = await createCosmosBaseQueryService(chainId);

  const result = await queryService.GetLatestBlock({});

  // console.log(`queryLatestBlock ${chainId} result`, result);

  return result;
}

export async function queryPoolByDenom(
  tokenDenom: string
): Promise<QueryBondedPoolsByDenomResponse> {
  const queryService = await createQueryService(getStafiHubChainId());
  const result = await queryService.BondedPoolsByDenom({
    denom: tokenDenom,
  });
  return result;
}

export async function queryPoolDetail(
  chainId: string,
  tokenDenom: string,
  poolAddress: string
): Promise<QueryGetPoolDetailResponse> {
  const queryService = await createQueryService(chainId);
  const result = await queryService.GetPoolDetail({
    denom: tokenDenom,
    pool: poolAddress,
  });
  return result;
}

export async function queryTokenSupply(
  denom: string
): Promise<QuerySupplyOfResponse | null> {
  try {
    const queryService = await createCosmosBankQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.SupplyOf({
      denom,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryrTokenSupply err", denom, err);
  }
  return null;
}

export async function queryrTokenBalance(
  stafiHubAddress: string,
  tokenDenom: string
): Promise<string> {
  const client = await createCosmosClient(getStafiHubChainId());
  if (!client) {
    return "--";
  }

  const result = await client.getBalance(stafiHubAddress, tokenDenom);
  return result.amount;
}

export async function queryBondRecord(
  denom: string,
  txhash: string
): Promise<QueryGetBondRecordResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetBondRecord({
      denom,
      txhash,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryBondRecord err", denom, txhash, err);
  }
  return null;
}

export async function queryAccountUnbond(
  tokenDenom: string,
  stafiHubAddress: string
): Promise<QueryGetAccountUnbondResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetAccountUnbond({
      denom: tokenDenom,
      unbonder: stafiHubAddress,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryAccountUnbond err", err);
  }
  return null;
}

export async function queryUnbondCommission(
  tokenDenom: string
): Promise<QueryGetUnbondCommissionResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetUnbondCommission({
      denom: tokenDenom,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryUnbondCommission err", err);
  }
  return null;
}

export async function queryChainEra(
  denom: string
): Promise<QueryGetChainEraResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetChainEra({
      denom,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryChainEra err", denom, err);
  }
  return null;
}

export async function queryEraExchangeRate(
  era: number,
  denom: string
): Promise<QueryGetEraExchangeRateResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetEraExchangeRate({
      era,
      denom,
    });
    return result;
  } catch (err: unknown) {}
  return null;
}

export async function queryUnbondRelayFee(
  denom: string
): Promise<QueryGetUnbondRelayFeeResponse | null> {
  try {
    const queryService = await createQueryService(getStafiHubChainId());
    const result = await queryService.GetUnbondRelayFee({
      denom,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryUnbondRelayFee err", denom, err);
  }
  return null;
}

export async function queryChainParams(
  chainId: string
): Promise<QueryParamsResponse | undefined> {
  try {
    const queryService = await createCosmosStakingQueryService(chainId);
    const result = await queryService.Params({});
    return result;
  } catch (err: unknown) {
    console.log("queryChainParams err", chainId, err);
  }
  return;
}

export async function queryDenomTrace(
  chainId: string,
  // ibc/{hash}
  ibcDenom: string
): Promise<QueryDenomTraceResponse | undefined> {
  try {
    const queryService = await createIBCApplicationsQueryService(chainId);
    const result = await queryService.DenomTrace({
      hash: ibcDenom.split("/")[1],
    });
    return result;
  } catch (err: unknown) {
    console.log("queryDenomTrace err", chainId, err);
  }
  return;
}

export async function queryChannel(
  chainId: string,
  channelName: string
): Promise<QueryChannelResponse | undefined> {
  try {
    const queryService = await createIBCCoreConnectionQueryService(chainId);
    const result = await queryService.Channel({
      portId: "transfer",
      channelId: channelName,
    });
    return result;
  } catch (err: unknown) {
    console.log("queryChannel err", chainId, err);
  }
  return;
}

export async function queryActLatestCycle(
  chainId: string,
  denom: string
): Promise<QueryActLatestCycleResponse> {
  const queryService = await createRMintRewardQueryService(chainId);
  const result = await queryService.ActLatestCycle({
    denom,
  });

  // console.log(`queryActLatestCycle ${chainId} ${denom} result`, result);

  return result;
}

export async function queryActDetail(
  chainId: string,
  denom: string,
  cycle: Long
): Promise<QueryActDetailResponse> {
  const queryService = await createRMintRewardQueryService(chainId);
  const result = await queryService.ActDetail({
    denom,
    cycle,
  });

  // console.log(`queryActDetail ${chainId} ${denom} ${cycle} result`, result);

  return result;
}

export async function queryUserMintCount(
  chainId: string,
  userAddress: string,
  denom: string,
  cycle: Long
): Promise<Long | undefined> {
  try {
    const queryService = await createRMintRewardQueryService(chainId);
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
  chainId: string,
  userAddress: string,
  denom: string,
  cycle: Long,
  mintIndex: Long
): Promise<UserClaimInfo | undefined> {
  try {
    const queryService = await createRMintRewardQueryService(chainId);
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

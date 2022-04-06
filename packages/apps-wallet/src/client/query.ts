import { IndexedTx } from "@cosmjs/stargate";
import { getStafiHubChainId } from "@stafihub/apps-config";
import type {
  QueryBondedPoolsByDenomResponse,
  QueryChannelResponse,
  QueryGetBondRecordResponse,
  QueryGetChainEraResponse,
  QueryGetEraExchangeRateResponse,
  QueryGetPoolDetailResponse,
  QueryGetUnbondCommissionResponse,
  QueryGetUnbondRelayFeeResponse,
  QueryParamsResponse,
  QuerySupplyOfResponse,
  QueryGetRParamsResponse,
} from "@stafihub/types";
import {
  QueryDenomTraceResponse,
  QueryGetAccountUnbondResponse,
} from "@stafihub/types";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import {
  createCosmosBankQueryService,
  createCosmosClient,
  createCosmosStakingQueryService,
  createIBCApplicationsQueryService,
  createIBCCoreConnectionQueryService,
  createQueryService,
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
    console.log("queryTx result", result);
    return result;
  } catch {
    return null;
  }
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
    // console.log("account allBalancesResult", allBalancesResult);
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

  // console.log("result", results);

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

  // console.log(`queryRParams ${tokenDenom} result`, result);

  return result;
}

export async function queryPoolByDenom(
  chainId: string,
  tokenDenom: string
): Promise<QueryBondedPoolsByDenomResponse> {
  const queryService = await createQueryService(chainId);
  const result = await queryService.BondedPoolsByDenom({
    denom: tokenDenom,
  });
  // console.log("result", result);
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
  // console.log("result", result);
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
    // console.log("queryBondRecord result", result);
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
  // console.log("rToken balance result", result);
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
    // console.log("queryBondRecord result", result);
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
    // console.log("queryAccountUnbond result", result);
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
    // console.log("queryUnbondCommission result", result);
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
    // console.log("queryChainEra result", result);
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
    // console.log("queryEraExchangeRate result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryEraExchangeRate err", era, denom, err);
  }
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
    console.log("queryUnbondRelayFee result", result);
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
    console.log("queryChainParams result", result);
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
    // console.log("queryDenomTrace result", result);
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
    console.log("queryChannel result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryChannel err", chainId, err);
  }
  return;
}

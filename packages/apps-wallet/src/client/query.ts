import type {
  PoolInfo,
  QueryBondedPoolsByDenomResponse,
  QueryGetPoolDetailResponse,
  KeplrAccountBalance,
  QueryGetUnbondCommissionResponse,
  QueryGetBondRecordResponse,
  QueryGetEraExchangeRateResponse,
  QueryGetChainEraResponse,
  QuerySupplyOfResponse,
  QueryGetUnbondRelayFeeResponse,
  QueryParamsResponse,
} from "@stafihub/types";
import { chains, getStafiHubChainId } from "@stafihub/apps-config";
import {
  createCosmosBankQueryService,
  createCosmosClient,
  createCosmosStakingQueryService,
  createQueryService,
} from ".";
import { QueryGetAccountUnbondResponse } from "@stafihub/types";
import { IndexedTx } from "@cosmjs/stargate";

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

export async function queryAccountBalance(
  chainId: string,
  address: string
): Promise<KeplrAccountBalance> {
  const client = await createCosmosClient(chainId);
  if (!client) {
    return {
      denom: chains[chainId].coinDenom,
      amount: "--",
    };
  }

  try {
    const result = await client.getBalance(address, chains[chainId].coinDenom);
    // console.log("account balance result", result);
    return result;
  } catch {
    return {
      denom: chains[chainId].coinDenom,
      amount: "--",
    };
  }
}

export async function queryPoolInfo(tokenDenom: string): Promise<PoolInfo> {
  const queryService = await createQueryService(getStafiHubChainId());

  const results = await Promise.all([
    queryService.BondedPoolsByDenom({
      denom: tokenDenom,
    }),
    queryService.GetExchangeRate({
      denom: tokenDenom,
    }),
  ]);

  // console.log("result", results);

  return {
    poolAddress: results[0].addrs[0],
    exchangeRate: results[1].exchangeRate?.value,
  };
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

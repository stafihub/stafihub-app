import type {
  PoolInfo,
  QueryBondedPoolsByDenomResponse,
  QueryGetPoolDetailResponse,
  KeplrAccountBalance,
  QueryGetUnbondCommissionResponse,
} from "@stafihub/types";
import {
  getCosmosNetwork,
  chains,
  STAFIHUB_NETWORK,
} from "@stafihub/apps-config";
import { createCosmosClient, createQueryService } from ".";
import { QueryGetAccountUnbondResponse } from "@stafihub/types";

export async function queryPoolInfo(tokenDenom: string): Promise<PoolInfo> {
  const queryService = await createQueryService("stafiHub");

  const results = await Promise.all([
    queryService.BondedPoolsByDenom({
      denom: tokenDenom,
    }),
    queryService.GetExchangeRate({
      denom: tokenDenom,
    }),
  ]);

  console.log("result", results);

  return {
    poolAddress: results[0].addrs[0],
    exchangeRate: results[1].exchangeRate?.value,
  };
}

export async function queryPoolByDenom(
  tokenDenom: string
): Promise<QueryBondedPoolsByDenomResponse> {
  const network = getCosmosNetwork();
  const queryService = await createQueryService(network);
  const result = await queryService.BondedPoolsByDenom({
    denom: tokenDenom,
  });
  console.log("result", result);
  return result;
}

export async function queryPoolDetail(
  tokenDenom: string,
  poolAddress: string
): Promise<QueryGetPoolDetailResponse> {
  const network = getCosmosNetwork();
  const queryService = await createQueryService(network);
  const result = await queryService.GetPoolDetail({
    denom: tokenDenom,
    pool: poolAddress,
  });
  console.log("result", result);
  return result;
}

export async function queryAccountBalance(
  network: string,
  address: string
): Promise<KeplrAccountBalance> {
  const client = await createCosmosClient(network);
  if (!client) {
    return {
      denom: chains[network].coinDenom,
      amount: "--",
    };
  }

  try {
    const result = await client.getBalance(address, chains[network].coinDenom);
    console.log("account balance result", result);
    return result;
  } catch {
    return {
      denom: chains[network].coinDenom,
      amount: "--",
    };
  }
}

export async function queryrTokenBalance(
  stafiHubAddress: string,
  tokenDenom: string
): Promise<string> {
  const client = await createCosmosClient("stafiHub");
  if (!client) {
    return "--";
  }

  const result = await client.getBalance(
    stafiHubAddress,
    // "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
    tokenDenom
  );
  console.log("rToken balance result", result);
  return result.amount;
}

export async function queryAccountUnbond(
  tokenDenom: string,
  stafiHubAddress: string
): Promise<QueryGetAccountUnbondResponse | null> {
  try {
    const queryService = await createQueryService(STAFIHUB_NETWORK);
    const result = await queryService.GetAccountUnbond({
      denom: tokenDenom,
      unbonder: stafiHubAddress,
    });
    console.log("queryAccountUnbond result", result);
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
    const queryService = await createQueryService(STAFIHUB_NETWORK);
    const result = await queryService.GetUnbondCommission({
      denom: tokenDenom,
    });
    console.log("queryUnbondCommission result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryUnbondCommission err", err);
  }
  return null;
}

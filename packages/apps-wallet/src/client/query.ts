import type {
  PoolInfo,
  QueryBondedPoolsByDenomResponse,
  QueryGetPoolDetailResponse,
} from "@stafihub/types";
import { getCosmosNetwork } from "@stafihub/apps-config";
import { createCosmosClient, createQueryService } from ".";

export async function queryPoolInfo(tokenDenom: string): Promise<PoolInfo> {
  const network = "stafiHub";
  const queryService = await createQueryService(network);

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

export async function queryrTokenBalance(tokenDenom: string): Promise<string> {
  const client = await createCosmosClient("stafiHub");
  if (!client) {
    return "--";
  }

  const result = await client.getBalance(
    "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
    // "terra15lne70yk254s0pm2da6g59r82cjymzjq3r2v5x",
    tokenDenom
  );
  console.log("balance result", result);
  return result.amount;
}

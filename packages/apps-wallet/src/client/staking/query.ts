import {
  QueryDelegatorDelegationsResponse,
  QueryStakingParamsResponse,
  QueryStakingPoolResponse,
  QueryTokenizeShareRecordsOwnedResponse,
  QueryTotalLiquidStakedResponse,
  QueryStakingValidatorResponse,
} from "@stafihub/types";
import { createCosmosStakingQueryService } from "..";
import { KeplrChainParams } from "../../interface";

export async function queryDelegatorDelegations(
  chainConfig: KeplrChainParams | null | undefined,
  address: string
): Promise<QueryDelegatorDelegationsResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.DelegatorDelegations({
      delegatorAddr: address,
    });
    // console.log("queryDelegatorDelegations result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryDelegatorDelegations err", err);
  }
  return null;
}

export async function queryTokenizeShareRecords(
  chainConfig: KeplrChainParams | null | undefined,
  owner: string
): Promise<QueryTokenizeShareRecordsOwnedResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.TokenizeShareRecordsOwned({
      owner,
    });
    // console.log("queryTokenizeShareRecords result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryTokenizeShareRecords err", err);
  }
  return null;
}

export async function queryStakingTotalLiquidStaked(
  chainConfig: KeplrChainParams | null | undefined
): Promise<QueryTotalLiquidStakedResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.TotalLiquidStaked({});
    console.log("queryStakingTotalLiquidStaked result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryStakingTotalLiquidStaked err", err);
  }
  return null;
}

export async function queryStakingPool(
  chainConfig: KeplrChainParams | null | undefined
): Promise<QueryStakingPoolResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.Pool({});
    console.log("queryStakingPool result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryStakingPool err", err);
  }
  return null;
}

export async function queryStakingParams(
  chainConfig: KeplrChainParams | null | undefined
): Promise<QueryStakingParamsResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.Params({});
    console.log("queryStakingParams result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryStakingParams err", err);
  }
  return null;
}

export async function queryStakingValidator(
  chainConfig: KeplrChainParams | null | undefined,
  validatorAddr: string
): Promise<QueryStakingValidatorResponse | null> {
  try {
    const queryService = await createCosmosStakingQueryService(chainConfig);
    const result = await queryService.Validator({ validatorAddr });
    // console.log("queryStakingValidator result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryStakingValidator err", err);
  }
  return null;
}

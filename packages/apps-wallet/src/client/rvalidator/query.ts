import { QueryRValidatorListResponse } from "@stafihub/types";
import { createRValidatorQueryService } from "..";
import { KeplrChainParams } from "../../interface";

export async function queryRValidatorList(
  stafiHubChainConfig: KeplrChainParams,
  poolAddress: string,
  denom: string
): Promise<QueryRValidatorListResponse | null> {
  try {
    const queryService = await createRValidatorQueryService(
      stafiHubChainConfig
    );
    const result = await queryService.RValidatorList({
      poolAddress,
      denom,
    });
    // console.log("queryRValidatorList result", result);
    return result;
  } catch (err: unknown) {
    console.log("queryRValidatorList err", err);
  }
  return null;
}

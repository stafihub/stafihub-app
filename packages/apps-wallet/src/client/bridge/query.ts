import { QueryBridgeRelayFeeResponse } from "@stafihub/types";
import { createBridgeQueryService } from "..";
import { KeplrChainParams } from "../../interface";

export async function queryBridgeRelayFee(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  chainId: number
): Promise<QueryBridgeRelayFeeResponse | null> {
  try {
    const queryService = await createBridgeQueryService(stafiHubChainConfig);
    const result = await queryService.RelayFee({
      chainId,
    });
    // console.log("queryBridgeRelayFee result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryBridgeRelayFee err", err);
  }
  return null;
}

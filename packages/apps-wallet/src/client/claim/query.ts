import { QueryAirdropIsClaimedResponse } from "@stafihub/types";
import { createAirdropClaimQueryService } from "..";
import Long from "long";
import { KeplrChainParams } from "../../interface";

export async function queryAirdropIsClaimed(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  round: Long,
  index: Long
): Promise<QueryAirdropIsClaimedResponse | null> {
  try {
    const queryService = await createAirdropClaimQueryService(
      stafiHubChainConfig
    );
    const result = await queryService.IsClaimed({
      round,
      index,
    });
    // console.log("queryAirdropIsClaimed result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryAirdropIsClaimed err", err);
  }
  return null;
}

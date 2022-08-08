import { getStafiHubChainId } from "@stafihub/apps-config";
import { QueryAirdropIsClaimedResponse } from "@stafihub/types";
import { createAirdropClaimQueryService } from "..";
import Long from "long";

export async function queryAirdropIsClaimed(
  round: Long,
  index: Long
): Promise<QueryAirdropIsClaimedResponse | null> {
  try {
    const queryService = await createAirdropClaimQueryService(
      getStafiHubChainId()
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

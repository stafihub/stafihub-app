import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryIsClaimedRequest, QueryIsClaimedResponseSDKType, QueryClaimSwitchRequest, QueryClaimSwitchResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.isClaimed = this.isClaimed.bind(this);
    this.claimSwitch = this.claimSwitch.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/claim/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of IsClaimed items. */


  async isClaimed(params: QueryIsClaimedRequest): Promise<QueryIsClaimedResponseSDKType> {
    const endpoint = `stafihub/stafihub/claim/is_claimed/${params.round}/${params.index}`;
    return await this.req.get<QueryIsClaimedResponseSDKType>(endpoint);
  }
  /* Queries a list of ClaimSwitch items. */


  async claimSwitch(params: QueryClaimSwitchRequest): Promise<QueryClaimSwitchResponseSDKType> {
    const endpoint = `stafihub/stafihub/claim/claim_switch/${params.round}`;
    return await this.req.get<QueryClaimSwitchResponseSDKType>(endpoint);
  }

}
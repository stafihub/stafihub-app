//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryIsClaimedRequest, QueryIsClaimedResponse, QueryClaimSwitchRequest, QueryClaimSwitchResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of IsClaimed items. */

  isClaimed(request: QueryIsClaimedRequest): Promise<QueryIsClaimedResponse>;
  /** Queries a list of ClaimSwitch items. */

  claimSwitch(request: QueryClaimSwitchRequest): Promise<QueryClaimSwitchResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.isClaimed = this.isClaimed.bind(this);
    this.claimSwitch = this.claimSwitch.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  isClaimed(request: QueryIsClaimedRequest): Promise<QueryIsClaimedResponse> {
    const data = QueryIsClaimedRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Query", "IsClaimed", data);
    return promise.then(data => QueryIsClaimedResponse.decode(new _m0.Reader(data)));
  }

  claimSwitch(request: QueryClaimSwitchRequest): Promise<QueryClaimSwitchResponse> {
    const data = QueryClaimSwitchRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Query", "ClaimSwitch", data);
    return promise.then(data => QueryClaimSwitchResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    isClaimed(request: QueryIsClaimedRequest): Promise<QueryIsClaimedResponse> {
      return queryService.isClaimed(request);
    },

    claimSwitch(request: QueryClaimSwitchRequest): Promise<QueryClaimSwitchResponse> {
      return queryService.claimSwitch(request);
    }

  };
};
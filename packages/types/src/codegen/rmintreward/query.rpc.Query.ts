//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryActLatestCycleRequest, QueryActLatestCycleResponse, QueryActDetailRequest, QueryActDetailResponse, QueryUserMintCountRequest, QueryUserMintCountResponse, QueryUserActsRequest, QueryUserActsResponse, QueryActCurrentCycleRequest, QueryActCurrentCycleResponse, QueryClaimInfoDetailRequest, QueryClaimInfoDetailResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ActLatestCycle items. */

  actLatestCycle(request: QueryActLatestCycleRequest): Promise<QueryActLatestCycleResponse>;
  /** Queries a list of ActDetail items. */

  actDetail(request: QueryActDetailRequest): Promise<QueryActDetailResponse>;
  /** Queries a list of UserMintCount items. */

  userMintCount(request: QueryUserMintCountRequest): Promise<QueryUserMintCountResponse>;
  /** Queries a list of UserActs items. */

  userActs(request: QueryUserActsRequest): Promise<QueryUserActsResponse>;
  /** Queries a list of ActCurrentCycle items. */

  actCurrentCycle(request: QueryActCurrentCycleRequest): Promise<QueryActCurrentCycleResponse>;
  /** Queries a list of ClaimInfoDetail items. */

  claimInfoDetail(request: QueryClaimInfoDetailRequest): Promise<QueryClaimInfoDetailResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.actLatestCycle = this.actLatestCycle.bind(this);
    this.actDetail = this.actDetail.bind(this);
    this.userMintCount = this.userMintCount.bind(this);
    this.userActs = this.userActs.bind(this);
    this.actCurrentCycle = this.actCurrentCycle.bind(this);
    this.claimInfoDetail = this.claimInfoDetail.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  actLatestCycle(request: QueryActLatestCycleRequest): Promise<QueryActLatestCycleResponse> {
    const data = QueryActLatestCycleRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "ActLatestCycle", data);
    return promise.then(data => QueryActLatestCycleResponse.decode(new _m0.Reader(data)));
  }

  actDetail(request: QueryActDetailRequest): Promise<QueryActDetailResponse> {
    const data = QueryActDetailRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "ActDetail", data);
    return promise.then(data => QueryActDetailResponse.decode(new _m0.Reader(data)));
  }

  userMintCount(request: QueryUserMintCountRequest): Promise<QueryUserMintCountResponse> {
    const data = QueryUserMintCountRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "UserMintCount", data);
    return promise.then(data => QueryUserMintCountResponse.decode(new _m0.Reader(data)));
  }

  userActs(request: QueryUserActsRequest): Promise<QueryUserActsResponse> {
    const data = QueryUserActsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "UserActs", data);
    return promise.then(data => QueryUserActsResponse.decode(new _m0.Reader(data)));
  }

  actCurrentCycle(request: QueryActCurrentCycleRequest): Promise<QueryActCurrentCycleResponse> {
    const data = QueryActCurrentCycleRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "ActCurrentCycle", data);
    return promise.then(data => QueryActCurrentCycleResponse.decode(new _m0.Reader(data)));
  }

  claimInfoDetail(request: QueryClaimInfoDetailRequest): Promise<QueryClaimInfoDetailResponse> {
    const data = QueryClaimInfoDetailRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Query", "ClaimInfoDetail", data);
    return promise.then(data => QueryClaimInfoDetailResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    actLatestCycle(request: QueryActLatestCycleRequest): Promise<QueryActLatestCycleResponse> {
      return queryService.actLatestCycle(request);
    },

    actDetail(request: QueryActDetailRequest): Promise<QueryActDetailResponse> {
      return queryService.actDetail(request);
    },

    userMintCount(request: QueryUserMintCountRequest): Promise<QueryUserMintCountResponse> {
      return queryService.userMintCount(request);
    },

    userActs(request: QueryUserActsRequest): Promise<QueryUserActsResponse> {
      return queryService.userActs(request);
    },

    actCurrentCycle(request: QueryActCurrentCycleRequest): Promise<QueryActCurrentCycleResponse> {
      return queryService.actCurrentCycle(request);
    },

    claimInfoDetail(request: QueryClaimInfoDetailRequest): Promise<QueryClaimInfoDetailResponse> {
      return queryService.claimInfoDetail(request);
    }

  };
};
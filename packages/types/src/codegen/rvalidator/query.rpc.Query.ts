import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRValidatorListRequest, QueryRValidatorListResponse, QueryCycleSecondsRequest, QueryCycleSecondsResponse, QueryShuffleSecondsRequest, QueryShuffleSecondsResponse, QueryLatestVotedCycleRequest, QueryLatestVotedCycleResponse, QueryLatestDealedCycleRequest, QueryLatestDealedCycleResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RValidatorList items. */

  rValidatorList(request: QueryRValidatorListRequest): Promise<QueryRValidatorListResponse>;
  /** Queries a list of CycleSeconds items. */

  cycleSeconds(request: QueryCycleSecondsRequest): Promise<QueryCycleSecondsResponse>;
  /** Queries a list of ShuffleSeconds items. */

  shuffleSeconds(request: QueryShuffleSecondsRequest): Promise<QueryShuffleSecondsResponse>;
  /** Queries a list of LatestVotedCycle items. */

  latestVotedCycle(request: QueryLatestVotedCycleRequest): Promise<QueryLatestVotedCycleResponse>;
  /** Queries a list of LatestDealedCycle items. */

  latestDealedCycle(request: QueryLatestDealedCycleRequest): Promise<QueryLatestDealedCycleResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rValidatorList = this.rValidatorList.bind(this);
    this.cycleSeconds = this.cycleSeconds.bind(this);
    this.shuffleSeconds = this.shuffleSeconds.bind(this);
    this.latestVotedCycle = this.latestVotedCycle.bind(this);
    this.latestDealedCycle = this.latestDealedCycle.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  rValidatorList(request: QueryRValidatorListRequest): Promise<QueryRValidatorListResponse> {
    const data = QueryRValidatorListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "RValidatorList", data);
    return promise.then(data => QueryRValidatorListResponse.decode(new _m0.Reader(data)));
  }

  cycleSeconds(request: QueryCycleSecondsRequest): Promise<QueryCycleSecondsResponse> {
    const data = QueryCycleSecondsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "CycleSeconds", data);
    return promise.then(data => QueryCycleSecondsResponse.decode(new _m0.Reader(data)));
  }

  shuffleSeconds(request: QueryShuffleSecondsRequest): Promise<QueryShuffleSecondsResponse> {
    const data = QueryShuffleSecondsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "ShuffleSeconds", data);
    return promise.then(data => QueryShuffleSecondsResponse.decode(new _m0.Reader(data)));
  }

  latestVotedCycle(request: QueryLatestVotedCycleRequest): Promise<QueryLatestVotedCycleResponse> {
    const data = QueryLatestVotedCycleRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "LatestVotedCycle", data);
    return promise.then(data => QueryLatestVotedCycleResponse.decode(new _m0.Reader(data)));
  }

  latestDealedCycle(request: QueryLatestDealedCycleRequest): Promise<QueryLatestDealedCycleResponse> {
    const data = QueryLatestDealedCycleRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Query", "LatestDealedCycle", data);
    return promise.then(data => QueryLatestDealedCycleResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    rValidatorList(request: QueryRValidatorListRequest): Promise<QueryRValidatorListResponse> {
      return queryService.rValidatorList(request);
    },

    cycleSeconds(request: QueryCycleSecondsRequest): Promise<QueryCycleSecondsResponse> {
      return queryService.cycleSeconds(request);
    },

    shuffleSeconds(request: QueryShuffleSecondsRequest): Promise<QueryShuffleSecondsResponse> {
      return queryService.shuffleSeconds(request);
    },

    latestVotedCycle(request: QueryLatestVotedCycleRequest): Promise<QueryLatestVotedCycleResponse> {
      return queryService.latestVotedCycle(request);
    },

    latestDealedCycle(request: QueryLatestDealedCycleRequest): Promise<QueryLatestDealedCycleResponse> {
      return queryService.latestDealedCycle(request);
    }

  };
};
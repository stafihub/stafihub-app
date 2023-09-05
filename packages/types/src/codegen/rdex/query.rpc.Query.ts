//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySwapPoolInfoRequest, QuerySwapPoolInfoResponse, QuerySwapPoolListRequest, QuerySwapPoolListResponse, QueryProviderListRequest, QueryProviderListResponse, QueryPoolCreatorListRequest, QueryPoolCreatorListResponse, QueryProviderSwitchRequest, QueryProviderSwitchResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of SwapPoolInfo items. */

  swapPoolInfo(request: QuerySwapPoolInfoRequest): Promise<QuerySwapPoolInfoResponse>;
  /** Queries a list of SwapPoolList items. */

  swapPoolList(request?: QuerySwapPoolListRequest): Promise<QuerySwapPoolListResponse>;
  /** Queries a list of ProviderList items. */

  providerList(request?: QueryProviderListRequest): Promise<QueryProviderListResponse>;
  /** Queries a list of PoolCreatorList items. */

  poolCreatorList(request?: QueryPoolCreatorListRequest): Promise<QueryPoolCreatorListResponse>;
  /** Queries a list of ProviderSwitch items. */

  providerSwitch(request?: QueryProviderSwitchRequest): Promise<QueryProviderSwitchResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.swapPoolInfo = this.swapPoolInfo.bind(this);
    this.swapPoolList = this.swapPoolList.bind(this);
    this.providerList = this.providerList.bind(this);
    this.poolCreatorList = this.poolCreatorList.bind(this);
    this.providerSwitch = this.providerSwitch.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  swapPoolInfo(request: QuerySwapPoolInfoRequest): Promise<QuerySwapPoolInfoResponse> {
    const data = QuerySwapPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "SwapPoolInfo", data);
    return promise.then(data => QuerySwapPoolInfoResponse.decode(new _m0.Reader(data)));
  }

  swapPoolList(request: QuerySwapPoolListRequest = {}): Promise<QuerySwapPoolListResponse> {
    const data = QuerySwapPoolListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "SwapPoolList", data);
    return promise.then(data => QuerySwapPoolListResponse.decode(new _m0.Reader(data)));
  }

  providerList(request: QueryProviderListRequest = {}): Promise<QueryProviderListResponse> {
    const data = QueryProviderListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "ProviderList", data);
    return promise.then(data => QueryProviderListResponse.decode(new _m0.Reader(data)));
  }

  poolCreatorList(request: QueryPoolCreatorListRequest = {}): Promise<QueryPoolCreatorListResponse> {
    const data = QueryPoolCreatorListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "PoolCreatorList", data);
    return promise.then(data => QueryPoolCreatorListResponse.decode(new _m0.Reader(data)));
  }

  providerSwitch(request: QueryProviderSwitchRequest = {}): Promise<QueryProviderSwitchResponse> {
    const data = QueryProviderSwitchRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Query", "ProviderSwitch", data);
    return promise.then(data => QueryProviderSwitchResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    swapPoolInfo(request: QuerySwapPoolInfoRequest): Promise<QuerySwapPoolInfoResponse> {
      return queryService.swapPoolInfo(request);
    },

    swapPoolList(request?: QuerySwapPoolListRequest): Promise<QuerySwapPoolListResponse> {
      return queryService.swapPoolList(request);
    },

    providerList(request?: QueryProviderListRequest): Promise<QueryProviderListResponse> {
      return queryService.providerList(request);
    },

    poolCreatorList(request?: QueryPoolCreatorListRequest): Promise<QueryPoolCreatorListResponse> {
      return queryService.poolCreatorList(request);
    },

    providerSwitch(request?: QueryProviderSwitchRequest): Promise<QueryProviderSwitchResponse> {
      return queryService.providerSwitch(request);
    }

  };
};
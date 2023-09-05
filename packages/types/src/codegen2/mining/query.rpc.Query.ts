import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStakePoolInfoRequest, QueryStakePoolInfoResponse, QueryStakeItemListRequest, QueryStakeItemListResponse, QueryStakeRewardRequest, QueryStakeRewardResponse, QueryStakeRecordCountRequest, QueryStakeRecordCountResponse, QueryStakeRecordRequest, QueryStakeRecordResponse, QueryStakeRecordListRequest, QueryStakeRecordListResponse, QueryStakePoolListRequest, QueryStakePoolListResponse, QueryMiningProviderListRequest, QueryMiningProviderListResponse, QueryRewardTokenListRequest, QueryRewardTokenListResponse, QueryMaxRewardPoolNumberRequest, QueryMaxRewardPoolNumberResponse, QueryMaxStakeItemNumberRequest, QueryMaxStakeItemNumberResponse, QueryProviderSwitchRequest, QueryProviderSwitchResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of StakePoolInfo items. */

  stakePoolInfo(request: QueryStakePoolInfoRequest): Promise<QueryStakePoolInfoResponse>;
  /** Queries a list of StakeItemList items. */

  stakeItemList(request: QueryStakeItemListRequest): Promise<QueryStakeItemListResponse>;
  /** Queries a list of StakeReward items. */

  stakeReward(request: QueryStakeRewardRequest): Promise<QueryStakeRewardResponse>;
  /** Queries a list of StakeRecordCount items. */

  stakeRecordCount(request: QueryStakeRecordCountRequest): Promise<QueryStakeRecordCountResponse>;
  /** Queries a list of StakeRecord items. */

  stakeRecord(request: QueryStakeRecordRequest): Promise<QueryStakeRecordResponse>;
  /** Queries a list of StakeRecordList items. */

  stakeRecordList(request: QueryStakeRecordListRequest): Promise<QueryStakeRecordListResponse>;
  /** Queries a list of StakePoolList items. */

  stakePoolList(request?: QueryStakePoolListRequest): Promise<QueryStakePoolListResponse>;
  /** Queries a list of MiningProviderList items. */

  miningProviderList(request?: QueryMiningProviderListRequest): Promise<QueryMiningProviderListResponse>;
  /** Queries a list of RewardTokenList items. */

  rewardTokenList(request?: QueryRewardTokenListRequest): Promise<QueryRewardTokenListResponse>;
  /** Queries a list of MaxRewardPoolNumber items. */

  maxRewardPoolNumber(request?: QueryMaxRewardPoolNumberRequest): Promise<QueryMaxRewardPoolNumberResponse>;
  /** Queries a list of MaxStakeItemNumber items. */

  maxStakeItemNumber(request?: QueryMaxStakeItemNumberRequest): Promise<QueryMaxStakeItemNumberResponse>;
  /** Queries a list of ProviderSwitch items. */

  providerSwitch(request?: QueryProviderSwitchRequest): Promise<QueryProviderSwitchResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakePoolInfo = this.stakePoolInfo.bind(this);
    this.stakeItemList = this.stakeItemList.bind(this);
    this.stakeReward = this.stakeReward.bind(this);
    this.stakeRecordCount = this.stakeRecordCount.bind(this);
    this.stakeRecord = this.stakeRecord.bind(this);
    this.stakeRecordList = this.stakeRecordList.bind(this);
    this.stakePoolList = this.stakePoolList.bind(this);
    this.miningProviderList = this.miningProviderList.bind(this);
    this.rewardTokenList = this.rewardTokenList.bind(this);
    this.maxRewardPoolNumber = this.maxRewardPoolNumber.bind(this);
    this.maxStakeItemNumber = this.maxStakeItemNumber.bind(this);
    this.providerSwitch = this.providerSwitch.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  stakePoolInfo(request: QueryStakePoolInfoRequest): Promise<QueryStakePoolInfoResponse> {
    const data = QueryStakePoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakePoolInfo", data);
    return promise.then(data => QueryStakePoolInfoResponse.decode(new _m0.Reader(data)));
  }

  stakeItemList(request: QueryStakeItemListRequest): Promise<QueryStakeItemListResponse> {
    const data = QueryStakeItemListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakeItemList", data);
    return promise.then(data => QueryStakeItemListResponse.decode(new _m0.Reader(data)));
  }

  stakeReward(request: QueryStakeRewardRequest): Promise<QueryStakeRewardResponse> {
    const data = QueryStakeRewardRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakeReward", data);
    return promise.then(data => QueryStakeRewardResponse.decode(new _m0.Reader(data)));
  }

  stakeRecordCount(request: QueryStakeRecordCountRequest): Promise<QueryStakeRecordCountResponse> {
    const data = QueryStakeRecordCountRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakeRecordCount", data);
    return promise.then(data => QueryStakeRecordCountResponse.decode(new _m0.Reader(data)));
  }

  stakeRecord(request: QueryStakeRecordRequest): Promise<QueryStakeRecordResponse> {
    const data = QueryStakeRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakeRecord", data);
    return promise.then(data => QueryStakeRecordResponse.decode(new _m0.Reader(data)));
  }

  stakeRecordList(request: QueryStakeRecordListRequest): Promise<QueryStakeRecordListResponse> {
    const data = QueryStakeRecordListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakeRecordList", data);
    return promise.then(data => QueryStakeRecordListResponse.decode(new _m0.Reader(data)));
  }

  stakePoolList(request: QueryStakePoolListRequest = {}): Promise<QueryStakePoolListResponse> {
    const data = QueryStakePoolListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "StakePoolList", data);
    return promise.then(data => QueryStakePoolListResponse.decode(new _m0.Reader(data)));
  }

  miningProviderList(request: QueryMiningProviderListRequest = {}): Promise<QueryMiningProviderListResponse> {
    const data = QueryMiningProviderListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "MiningProviderList", data);
    return promise.then(data => QueryMiningProviderListResponse.decode(new _m0.Reader(data)));
  }

  rewardTokenList(request: QueryRewardTokenListRequest = {}): Promise<QueryRewardTokenListResponse> {
    const data = QueryRewardTokenListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "RewardTokenList", data);
    return promise.then(data => QueryRewardTokenListResponse.decode(new _m0.Reader(data)));
  }

  maxRewardPoolNumber(request: QueryMaxRewardPoolNumberRequest = {}): Promise<QueryMaxRewardPoolNumberResponse> {
    const data = QueryMaxRewardPoolNumberRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "MaxRewardPoolNumber", data);
    return promise.then(data => QueryMaxRewardPoolNumberResponse.decode(new _m0.Reader(data)));
  }

  maxStakeItemNumber(request: QueryMaxStakeItemNumberRequest = {}): Promise<QueryMaxStakeItemNumberResponse> {
    const data = QueryMaxStakeItemNumberRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "MaxStakeItemNumber", data);
    return promise.then(data => QueryMaxStakeItemNumberResponse.decode(new _m0.Reader(data)));
  }

  providerSwitch(request: QueryProviderSwitchRequest = {}): Promise<QueryProviderSwitchResponse> {
    const data = QueryProviderSwitchRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Query", "ProviderSwitch", data);
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

    stakePoolInfo(request: QueryStakePoolInfoRequest): Promise<QueryStakePoolInfoResponse> {
      return queryService.stakePoolInfo(request);
    },

    stakeItemList(request: QueryStakeItemListRequest): Promise<QueryStakeItemListResponse> {
      return queryService.stakeItemList(request);
    },

    stakeReward(request: QueryStakeRewardRequest): Promise<QueryStakeRewardResponse> {
      return queryService.stakeReward(request);
    },

    stakeRecordCount(request: QueryStakeRecordCountRequest): Promise<QueryStakeRecordCountResponse> {
      return queryService.stakeRecordCount(request);
    },

    stakeRecord(request: QueryStakeRecordRequest): Promise<QueryStakeRecordResponse> {
      return queryService.stakeRecord(request);
    },

    stakeRecordList(request: QueryStakeRecordListRequest): Promise<QueryStakeRecordListResponse> {
      return queryService.stakeRecordList(request);
    },

    stakePoolList(request?: QueryStakePoolListRequest): Promise<QueryStakePoolListResponse> {
      return queryService.stakePoolList(request);
    },

    miningProviderList(request?: QueryMiningProviderListRequest): Promise<QueryMiningProviderListResponse> {
      return queryService.miningProviderList(request);
    },

    rewardTokenList(request?: QueryRewardTokenListRequest): Promise<QueryRewardTokenListResponse> {
      return queryService.rewardTokenList(request);
    },

    maxRewardPoolNumber(request?: QueryMaxRewardPoolNumberRequest): Promise<QueryMaxRewardPoolNumberResponse> {
      return queryService.maxRewardPoolNumber(request);
    },

    maxStakeItemNumber(request?: QueryMaxStakeItemNumberRequest): Promise<QueryMaxStakeItemNumberResponse> {
      return queryService.maxStakeItemNumber(request);
    },

    providerSwitch(request?: QueryProviderSwitchRequest): Promise<QueryProviderSwitchResponse> {
      return queryService.providerSwitch(request);
    }

  };
};
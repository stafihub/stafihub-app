//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryChaindIdsRequest, QueryChaindIdsResponse, QueryProposalDetailRequest, QueryProposalDetailResponse, QueryResourceidToDenomsRequest, QueryResourceidToDenomsResponse, QueryRelayFeeReceiverRequest, QueryRelayFeeReceiverResponse, QueryRelayFeeRequest, QueryRelayFeeResponse, QueryBannedDenomListRequest, QueryBannedDenomListResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ChaindIds items. */

  chaindIds(request?: QueryChaindIdsRequest): Promise<QueryChaindIdsResponse>;
  /** Queries a list of ProposalDetail items. */

  proposalDetail(request: QueryProposalDetailRequest): Promise<QueryProposalDetailResponse>;
  /** Queries a list of ResourceidToDenoms items. */

  resourceidToDenoms(request?: QueryResourceidToDenomsRequest): Promise<QueryResourceidToDenomsResponse>;
  /** Queries a list of RelayFeeReceiver items. */

  relayFeeReceiver(request?: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponse>;
  /** Queries a list of RelayFee items. */

  relayFee(request: QueryRelayFeeRequest): Promise<QueryRelayFeeResponse>;
  /** Queries a list of BannedDenomList items. */

  bannedDenomList(request?: QueryBannedDenomListRequest): Promise<QueryBannedDenomListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.chaindIds = this.chaindIds.bind(this);
    this.proposalDetail = this.proposalDetail.bind(this);
    this.resourceidToDenoms = this.resourceidToDenoms.bind(this);
    this.relayFeeReceiver = this.relayFeeReceiver.bind(this);
    this.relayFee = this.relayFee.bind(this);
    this.bannedDenomList = this.bannedDenomList.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  chaindIds(request: QueryChaindIdsRequest = {}): Promise<QueryChaindIdsResponse> {
    const data = QueryChaindIdsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "ChaindIds", data);
    return promise.then(data => QueryChaindIdsResponse.decode(new _m0.Reader(data)));
  }

  proposalDetail(request: QueryProposalDetailRequest): Promise<QueryProposalDetailResponse> {
    const data = QueryProposalDetailRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "ProposalDetail", data);
    return promise.then(data => QueryProposalDetailResponse.decode(new _m0.Reader(data)));
  }

  resourceidToDenoms(request: QueryResourceidToDenomsRequest = {}): Promise<QueryResourceidToDenomsResponse> {
    const data = QueryResourceidToDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "ResourceidToDenoms", data);
    return promise.then(data => QueryResourceidToDenomsResponse.decode(new _m0.Reader(data)));
  }

  relayFeeReceiver(request: QueryRelayFeeReceiverRequest = {}): Promise<QueryRelayFeeReceiverResponse> {
    const data = QueryRelayFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "RelayFeeReceiver", data);
    return promise.then(data => QueryRelayFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  relayFee(request: QueryRelayFeeRequest): Promise<QueryRelayFeeResponse> {
    const data = QueryRelayFeeRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "RelayFee", data);
    return promise.then(data => QueryRelayFeeResponse.decode(new _m0.Reader(data)));
  }

  bannedDenomList(request: QueryBannedDenomListRequest = {}): Promise<QueryBannedDenomListResponse> {
    const data = QueryBannedDenomListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Query", "BannedDenomList", data);
    return promise.then(data => QueryBannedDenomListResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    chaindIds(request?: QueryChaindIdsRequest): Promise<QueryChaindIdsResponse> {
      return queryService.chaindIds(request);
    },

    proposalDetail(request: QueryProposalDetailRequest): Promise<QueryProposalDetailResponse> {
      return queryService.proposalDetail(request);
    },

    resourceidToDenoms(request?: QueryResourceidToDenomsRequest): Promise<QueryResourceidToDenomsResponse> {
      return queryService.resourceidToDenoms(request);
    },

    relayFeeReceiver(request?: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponse> {
      return queryService.relayFeeReceiver(request);
    },

    relayFee(request: QueryRelayFeeRequest): Promise<QueryRelayFeeResponse> {
      return queryService.relayFee(request);
    },

    bannedDenomList(request?: QueryBannedDenomListRequest): Promise<QueryBannedDenomListResponse> {
      return queryService.bannedDenomList(request);
    }

  };
};
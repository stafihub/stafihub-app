//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetExchangeRateRequest, QueryGetExchangeRateResponse, QueryExchangeRateAllRequest, QueryExchangeRateAllResponse, QueryGetEraExchangeRateRequest, QueryGetEraExchangeRateResponse, QueryEraExchangeRatesByDenomRequest, QueryEraExchangeRatesByDenomResponse, QueryBondedPoolsByDenomRequest, QueryBondedPoolsByDenomResponse, QueryGetPoolDetailRequest, QueryGetPoolDetailResponse, QueryGetChainEraRequest, QueryGetChainEraResponse, QueryGetCurrentEraSnapshotRequest, QueryGetCurrentEraSnapshotResponse, QueryGetProtocolFeeReceiverRequest, QueryGetProtocolFeeReceiverResponse, QueryGetStakingRewardCommissionRequest, QueryGetStakingRewardCommissionResponse, QueryGetUnbondRelayFeeRequest, QueryGetUnbondRelayFeeResponse, QueryGetUnbondCommissionRequest, QueryGetUnbondCommissionResponse, QueryGetEraUnbondLimitRequest, QueryGetEraUnbondLimitResponse, QueryGetBondPipelineRequest, QueryGetBondPipelineResponse, QueryGetEraSnapshotRequest, QueryGetEraSnapshotResponse, QueryGetSnapshotRequest, QueryGetSnapshotResponse, QueryGetTotalExpectedActiveRequest, QueryGetTotalExpectedActiveResponse, QueryGetBondRecordRequest, QueryGetBondRecordResponse, QueryGetSignatureRequest, QueryGetSignatureResponse, QueryGetRParamsRequest, QueryGetRParamsResponse, QueryTotalProtocolFeeRequest, QueryTotalProtocolFeeResponse, QueryRelayFeeReceiverRequest, QueryRelayFeeReceiverResponse, QueryUnbondSwitchRequest, QueryUnbondSwitchResponse, QueryPoolUnbondNextSequenceRequest, QueryPoolUnbondNextSequenceResponse, QueryPoolUnbondingsRequest, QueryPoolUnbondingsResponse, QueryIcaPoolListRequest, QueryIcaPoolListResponse, QueryInterchainTxStatusRequest, QueryInterchainTxStatusResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Queries a list of getExchangeRate items. */
  getExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse>;
  /** Queries a list of exchangeRateAll items. */

  exchangeRateAll(request?: QueryExchangeRateAllRequest): Promise<QueryExchangeRateAllResponse>;
  /** Queries a list of getEraExchangeRate items. */

  getEraExchangeRate(request: QueryGetEraExchangeRateRequest): Promise<QueryGetEraExchangeRateResponse>;
  /** Queries a list of eraExchangeRatesByDenom items. */

  eraExchangeRatesByDenom(request: QueryEraExchangeRatesByDenomRequest): Promise<QueryEraExchangeRatesByDenomResponse>;
  /** Queries a list of bondedPoolsByDenom items. */

  bondedPoolsByDenom(request: QueryBondedPoolsByDenomRequest): Promise<QueryBondedPoolsByDenomResponse>;
  /** Queries a list of getPoolDetail items. */

  getPoolDetail(request: QueryGetPoolDetailRequest): Promise<QueryGetPoolDetailResponse>;
  /** Queries a list of getChainEra items. */

  getChainEra(request: QueryGetChainEraRequest): Promise<QueryGetChainEraResponse>;
  /** Queries a list of getCurrentEraSnapshot items. */

  getCurrentEraSnapshot(request: QueryGetCurrentEraSnapshotRequest): Promise<QueryGetCurrentEraSnapshotResponse>;
  /** Queries a list of getReceiver items. */

  getProtocolFeeReceiver(request?: QueryGetProtocolFeeReceiverRequest): Promise<QueryGetProtocolFeeReceiverResponse>;
  /** Queries a list of getCommission items. */

  getStakingRewardCommission(request: QueryGetStakingRewardCommissionRequest): Promise<QueryGetStakingRewardCommissionResponse>;
  /** Queries a list of getUnbondFee items. */

  getUnbondRelayFee(request: QueryGetUnbondRelayFeeRequest): Promise<QueryGetUnbondRelayFeeResponse>;
  /** Queries a list of getUnbondCommission items. */

  getUnbondCommission(request: QueryGetUnbondCommissionRequest): Promise<QueryGetUnbondCommissionResponse>;
  /** Queries a list of getEraUnbondLimit items. */

  getEraUnbondLimit(request: QueryGetEraUnbondLimitRequest): Promise<QueryGetEraUnbondLimitResponse>;
  /** Queries a list of getBondPipeline items. */

  getBondPipeline(request: QueryGetBondPipelineRequest): Promise<QueryGetBondPipelineResponse>;
  /** Queries a list of getEraSnapshot items. */

  getEraSnapshot(request: QueryGetEraSnapshotRequest): Promise<QueryGetEraSnapshotResponse>;
  /** Queries a list of getSnapshot items. */

  getSnapshot(request: QueryGetSnapshotRequest): Promise<QueryGetSnapshotResponse>;
  /** Queries a list of getTotalExpectedActive items. */

  getTotalExpectedActive(request: QueryGetTotalExpectedActiveRequest): Promise<QueryGetTotalExpectedActiveResponse>;
  /** Queries a list of getBondRecord items. */

  getBondRecord(request: QueryGetBondRecordRequest): Promise<QueryGetBondRecordResponse>;
  /** Queries a list of getSignature items. */

  getSignature(request: QueryGetSignatureRequest): Promise<QueryGetSignatureResponse>;
  /** Queries a list of GetRParams items. */

  getRParams(request: QueryGetRParamsRequest): Promise<QueryGetRParamsResponse>;
  /** Queries a list of TotalFeeList items. */

  totalProtocolFee(request?: QueryTotalProtocolFeeRequest): Promise<QueryTotalProtocolFeeResponse>;
  /** Queries a list of RelayFeeReceiver items. */

  relayFeeReceiver(request: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponse>;
  /** Queries a list of UnbondSwitch items. */

  unbondSwitch(request: QueryUnbondSwitchRequest): Promise<QueryUnbondSwitchResponse>;
  /** Queries a list of PoolUnbondNextSequence items. */

  poolUnbondNextSequence(request: QueryPoolUnbondNextSequenceRequest): Promise<QueryPoolUnbondNextSequenceResponse>;
  /** Queries a list of PoolUnbondings items. */

  poolUnbondings(request: QueryPoolUnbondingsRequest): Promise<QueryPoolUnbondingsResponse>;
  /** Queries a list of IcaPoolList items. */

  icaPoolList(request: QueryIcaPoolListRequest): Promise<QueryIcaPoolListResponse>;
  /** Queries a list of InterchainTxStatus items. */

  interchainTxStatus(request: QueryInterchainTxStatusRequest): Promise<QueryInterchainTxStatusResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getExchangeRate = this.getExchangeRate.bind(this);
    this.exchangeRateAll = this.exchangeRateAll.bind(this);
    this.getEraExchangeRate = this.getEraExchangeRate.bind(this);
    this.eraExchangeRatesByDenom = this.eraExchangeRatesByDenom.bind(this);
    this.bondedPoolsByDenom = this.bondedPoolsByDenom.bind(this);
    this.getPoolDetail = this.getPoolDetail.bind(this);
    this.getChainEra = this.getChainEra.bind(this);
    this.getCurrentEraSnapshot = this.getCurrentEraSnapshot.bind(this);
    this.getProtocolFeeReceiver = this.getProtocolFeeReceiver.bind(this);
    this.getStakingRewardCommission = this.getStakingRewardCommission.bind(this);
    this.getUnbondRelayFee = this.getUnbondRelayFee.bind(this);
    this.getUnbondCommission = this.getUnbondCommission.bind(this);
    this.getEraUnbondLimit = this.getEraUnbondLimit.bind(this);
    this.getBondPipeline = this.getBondPipeline.bind(this);
    this.getEraSnapshot = this.getEraSnapshot.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getTotalExpectedActive = this.getTotalExpectedActive.bind(this);
    this.getBondRecord = this.getBondRecord.bind(this);
    this.getSignature = this.getSignature.bind(this);
    this.getRParams = this.getRParams.bind(this);
    this.totalProtocolFee = this.totalProtocolFee.bind(this);
    this.relayFeeReceiver = this.relayFeeReceiver.bind(this);
    this.unbondSwitch = this.unbondSwitch.bind(this);
    this.poolUnbondNextSequence = this.poolUnbondNextSequence.bind(this);
    this.poolUnbondings = this.poolUnbondings.bind(this);
    this.icaPoolList = this.icaPoolList.bind(this);
    this.interchainTxStatus = this.interchainTxStatus.bind(this);
  }

  getExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
    const data = QueryGetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetExchangeRate", data);
    return promise.then(data => QueryGetExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  exchangeRateAll(request: QueryExchangeRateAllRequest = {}): Promise<QueryExchangeRateAllResponse> {
    const data = QueryExchangeRateAllRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "ExchangeRateAll", data);
    return promise.then(data => QueryExchangeRateAllResponse.decode(new _m0.Reader(data)));
  }

  getEraExchangeRate(request: QueryGetEraExchangeRateRequest): Promise<QueryGetEraExchangeRateResponse> {
    const data = QueryGetEraExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetEraExchangeRate", data);
    return promise.then(data => QueryGetEraExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  eraExchangeRatesByDenom(request: QueryEraExchangeRatesByDenomRequest): Promise<QueryEraExchangeRatesByDenomResponse> {
    const data = QueryEraExchangeRatesByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "EraExchangeRatesByDenom", data);
    return promise.then(data => QueryEraExchangeRatesByDenomResponse.decode(new _m0.Reader(data)));
  }

  bondedPoolsByDenom(request: QueryBondedPoolsByDenomRequest): Promise<QueryBondedPoolsByDenomResponse> {
    const data = QueryBondedPoolsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "BondedPoolsByDenom", data);
    return promise.then(data => QueryBondedPoolsByDenomResponse.decode(new _m0.Reader(data)));
  }

  getPoolDetail(request: QueryGetPoolDetailRequest): Promise<QueryGetPoolDetailResponse> {
    const data = QueryGetPoolDetailRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetPoolDetail", data);
    return promise.then(data => QueryGetPoolDetailResponse.decode(new _m0.Reader(data)));
  }

  getChainEra(request: QueryGetChainEraRequest): Promise<QueryGetChainEraResponse> {
    const data = QueryGetChainEraRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetChainEra", data);
    return promise.then(data => QueryGetChainEraResponse.decode(new _m0.Reader(data)));
  }

  getCurrentEraSnapshot(request: QueryGetCurrentEraSnapshotRequest): Promise<QueryGetCurrentEraSnapshotResponse> {
    const data = QueryGetCurrentEraSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetCurrentEraSnapshot", data);
    return promise.then(data => QueryGetCurrentEraSnapshotResponse.decode(new _m0.Reader(data)));
  }

  getProtocolFeeReceiver(request: QueryGetProtocolFeeReceiverRequest = {}): Promise<QueryGetProtocolFeeReceiverResponse> {
    const data = QueryGetProtocolFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetProtocolFeeReceiver", data);
    return promise.then(data => QueryGetProtocolFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  getStakingRewardCommission(request: QueryGetStakingRewardCommissionRequest): Promise<QueryGetStakingRewardCommissionResponse> {
    const data = QueryGetStakingRewardCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetStakingRewardCommission", data);
    return promise.then(data => QueryGetStakingRewardCommissionResponse.decode(new _m0.Reader(data)));
  }

  getUnbondRelayFee(request: QueryGetUnbondRelayFeeRequest): Promise<QueryGetUnbondRelayFeeResponse> {
    const data = QueryGetUnbondRelayFeeRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetUnbondRelayFee", data);
    return promise.then(data => QueryGetUnbondRelayFeeResponse.decode(new _m0.Reader(data)));
  }

  getUnbondCommission(request: QueryGetUnbondCommissionRequest): Promise<QueryGetUnbondCommissionResponse> {
    const data = QueryGetUnbondCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetUnbondCommission", data);
    return promise.then(data => QueryGetUnbondCommissionResponse.decode(new _m0.Reader(data)));
  }

  getEraUnbondLimit(request: QueryGetEraUnbondLimitRequest): Promise<QueryGetEraUnbondLimitResponse> {
    const data = QueryGetEraUnbondLimitRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetEraUnbondLimit", data);
    return promise.then(data => QueryGetEraUnbondLimitResponse.decode(new _m0.Reader(data)));
  }

  getBondPipeline(request: QueryGetBondPipelineRequest): Promise<QueryGetBondPipelineResponse> {
    const data = QueryGetBondPipelineRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetBondPipeline", data);
    return promise.then(data => QueryGetBondPipelineResponse.decode(new _m0.Reader(data)));
  }

  getEraSnapshot(request: QueryGetEraSnapshotRequest): Promise<QueryGetEraSnapshotResponse> {
    const data = QueryGetEraSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetEraSnapshot", data);
    return promise.then(data => QueryGetEraSnapshotResponse.decode(new _m0.Reader(data)));
  }

  getSnapshot(request: QueryGetSnapshotRequest): Promise<QueryGetSnapshotResponse> {
    const data = QueryGetSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetSnapshot", data);
    return promise.then(data => QueryGetSnapshotResponse.decode(new _m0.Reader(data)));
  }

  getTotalExpectedActive(request: QueryGetTotalExpectedActiveRequest): Promise<QueryGetTotalExpectedActiveResponse> {
    const data = QueryGetTotalExpectedActiveRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetTotalExpectedActive", data);
    return promise.then(data => QueryGetTotalExpectedActiveResponse.decode(new _m0.Reader(data)));
  }

  getBondRecord(request: QueryGetBondRecordRequest): Promise<QueryGetBondRecordResponse> {
    const data = QueryGetBondRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetBondRecord", data);
    return promise.then(data => QueryGetBondRecordResponse.decode(new _m0.Reader(data)));
  }

  getSignature(request: QueryGetSignatureRequest): Promise<QueryGetSignatureResponse> {
    const data = QueryGetSignatureRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetSignature", data);
    return promise.then(data => QueryGetSignatureResponse.decode(new _m0.Reader(data)));
  }

  getRParams(request: QueryGetRParamsRequest): Promise<QueryGetRParamsResponse> {
    const data = QueryGetRParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "GetRParams", data);
    return promise.then(data => QueryGetRParamsResponse.decode(new _m0.Reader(data)));
  }

  totalProtocolFee(request: QueryTotalProtocolFeeRequest = {}): Promise<QueryTotalProtocolFeeResponse> {
    const data = QueryTotalProtocolFeeRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "TotalProtocolFee", data);
    return promise.then(data => QueryTotalProtocolFeeResponse.decode(new _m0.Reader(data)));
  }

  relayFeeReceiver(request: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponse> {
    const data = QueryRelayFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "RelayFeeReceiver", data);
    return promise.then(data => QueryRelayFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  unbondSwitch(request: QueryUnbondSwitchRequest): Promise<QueryUnbondSwitchResponse> {
    const data = QueryUnbondSwitchRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "UnbondSwitch", data);
    return promise.then(data => QueryUnbondSwitchResponse.decode(new _m0.Reader(data)));
  }

  poolUnbondNextSequence(request: QueryPoolUnbondNextSequenceRequest): Promise<QueryPoolUnbondNextSequenceResponse> {
    const data = QueryPoolUnbondNextSequenceRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "PoolUnbondNextSequence", data);
    return promise.then(data => QueryPoolUnbondNextSequenceResponse.decode(new _m0.Reader(data)));
  }

  poolUnbondings(request: QueryPoolUnbondingsRequest): Promise<QueryPoolUnbondingsResponse> {
    const data = QueryPoolUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "PoolUnbondings", data);
    return promise.then(data => QueryPoolUnbondingsResponse.decode(new _m0.Reader(data)));
  }

  icaPoolList(request: QueryIcaPoolListRequest): Promise<QueryIcaPoolListResponse> {
    const data = QueryIcaPoolListRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "IcaPoolList", data);
    return promise.then(data => QueryIcaPoolListResponse.decode(new _m0.Reader(data)));
  }

  interchainTxStatus(request: QueryInterchainTxStatusRequest): Promise<QueryInterchainTxStatusResponse> {
    const data = QueryInterchainTxStatusRequest.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Query", "InterchainTxStatus", data);
    return promise.then(data => QueryInterchainTxStatusResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
      return queryService.getExchangeRate(request);
    },

    exchangeRateAll(request?: QueryExchangeRateAllRequest): Promise<QueryExchangeRateAllResponse> {
      return queryService.exchangeRateAll(request);
    },

    getEraExchangeRate(request: QueryGetEraExchangeRateRequest): Promise<QueryGetEraExchangeRateResponse> {
      return queryService.getEraExchangeRate(request);
    },

    eraExchangeRatesByDenom(request: QueryEraExchangeRatesByDenomRequest): Promise<QueryEraExchangeRatesByDenomResponse> {
      return queryService.eraExchangeRatesByDenom(request);
    },

    bondedPoolsByDenom(request: QueryBondedPoolsByDenomRequest): Promise<QueryBondedPoolsByDenomResponse> {
      return queryService.bondedPoolsByDenom(request);
    },

    getPoolDetail(request: QueryGetPoolDetailRequest): Promise<QueryGetPoolDetailResponse> {
      return queryService.getPoolDetail(request);
    },

    getChainEra(request: QueryGetChainEraRequest): Promise<QueryGetChainEraResponse> {
      return queryService.getChainEra(request);
    },

    getCurrentEraSnapshot(request: QueryGetCurrentEraSnapshotRequest): Promise<QueryGetCurrentEraSnapshotResponse> {
      return queryService.getCurrentEraSnapshot(request);
    },

    getProtocolFeeReceiver(request?: QueryGetProtocolFeeReceiverRequest): Promise<QueryGetProtocolFeeReceiverResponse> {
      return queryService.getProtocolFeeReceiver(request);
    },

    getStakingRewardCommission(request: QueryGetStakingRewardCommissionRequest): Promise<QueryGetStakingRewardCommissionResponse> {
      return queryService.getStakingRewardCommission(request);
    },

    getUnbondRelayFee(request: QueryGetUnbondRelayFeeRequest): Promise<QueryGetUnbondRelayFeeResponse> {
      return queryService.getUnbondRelayFee(request);
    },

    getUnbondCommission(request: QueryGetUnbondCommissionRequest): Promise<QueryGetUnbondCommissionResponse> {
      return queryService.getUnbondCommission(request);
    },

    getEraUnbondLimit(request: QueryGetEraUnbondLimitRequest): Promise<QueryGetEraUnbondLimitResponse> {
      return queryService.getEraUnbondLimit(request);
    },

    getBondPipeline(request: QueryGetBondPipelineRequest): Promise<QueryGetBondPipelineResponse> {
      return queryService.getBondPipeline(request);
    },

    getEraSnapshot(request: QueryGetEraSnapshotRequest): Promise<QueryGetEraSnapshotResponse> {
      return queryService.getEraSnapshot(request);
    },

    getSnapshot(request: QueryGetSnapshotRequest): Promise<QueryGetSnapshotResponse> {
      return queryService.getSnapshot(request);
    },

    getTotalExpectedActive(request: QueryGetTotalExpectedActiveRequest): Promise<QueryGetTotalExpectedActiveResponse> {
      return queryService.getTotalExpectedActive(request);
    },

    getBondRecord(request: QueryGetBondRecordRequest): Promise<QueryGetBondRecordResponse> {
      return queryService.getBondRecord(request);
    },

    getSignature(request: QueryGetSignatureRequest): Promise<QueryGetSignatureResponse> {
      return queryService.getSignature(request);
    },

    getRParams(request: QueryGetRParamsRequest): Promise<QueryGetRParamsResponse> {
      return queryService.getRParams(request);
    },

    totalProtocolFee(request?: QueryTotalProtocolFeeRequest): Promise<QueryTotalProtocolFeeResponse> {
      return queryService.totalProtocolFee(request);
    },

    relayFeeReceiver(request: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponse> {
      return queryService.relayFeeReceiver(request);
    },

    unbondSwitch(request: QueryUnbondSwitchRequest): Promise<QueryUnbondSwitchResponse> {
      return queryService.unbondSwitch(request);
    },

    poolUnbondNextSequence(request: QueryPoolUnbondNextSequenceRequest): Promise<QueryPoolUnbondNextSequenceResponse> {
      return queryService.poolUnbondNextSequence(request);
    },

    poolUnbondings(request: QueryPoolUnbondingsRequest): Promise<QueryPoolUnbondingsResponse> {
      return queryService.poolUnbondings(request);
    },

    icaPoolList(request: QueryIcaPoolListRequest): Promise<QueryIcaPoolListResponse> {
      return queryService.icaPoolList(request);
    },

    interchainTxStatus(request: QueryInterchainTxStatusRequest): Promise<QueryInterchainTxStatusResponse> {
      return queryService.interchainTxStatus(request);
    }

  };
};
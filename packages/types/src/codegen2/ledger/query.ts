import { OriginalTxType, OriginalTxTypeSDKType, ExchangeRate, ExchangeRateSDKType, EraExchangeRate, EraExchangeRateSDKType, PoolDetail, PoolDetailSDKType, UnbondRelayFee, UnbondRelayFeeSDKType, BondPipeline, BondPipelineSDKType, BondSnapshot, BondSnapshotSDKType, BondRecord, BondRecordSDKType, Signature, SignatureSDKType, RParams, RParamsSDKType, TotalProtocolFee, TotalProtocolFeeSDKType, Unbonding, UnbondingSDKType, IcaPoolDetail, IcaPoolDetailSDKType, InterchainTxStatus, InterchainTxStatusSDKType } from "./ledger";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface QueryGetExchangeRateRequest {
  denom: string;
}
export interface QueryGetExchangeRateRequestSDKType {
  denom: string;
}
export interface QueryGetExchangeRateResponse {
  exchangeRate?: ExchangeRate;
}
export interface QueryGetExchangeRateResponseSDKType {
  exchangeRate?: ExchangeRateSDKType;
}
export interface QueryExchangeRateAllRequest {}
export interface QueryExchangeRateAllRequestSDKType {}
export interface QueryExchangeRateAllResponse {
  exchangeRates: ExchangeRate[];
}
export interface QueryExchangeRateAllResponseSDKType {
  exchangeRates: ExchangeRateSDKType[];
}
export interface QueryGetEraExchangeRateRequest {
  denom: string;
  era: number;
}
export interface QueryGetEraExchangeRateRequestSDKType {
  denom: string;
  era: number;
}
export interface QueryGetEraExchangeRateResponse {
  eraExchangeRate?: EraExchangeRate;
}
export interface QueryGetEraExchangeRateResponseSDKType {
  eraExchangeRate?: EraExchangeRateSDKType;
}
export interface QueryEraExchangeRatesByDenomRequest {
  denom: string;
}
export interface QueryEraExchangeRatesByDenomRequestSDKType {
  denom: string;
}
export interface QueryEraExchangeRatesByDenomResponse {
  eraExchangeRates: EraExchangeRate[];
}
export interface QueryEraExchangeRatesByDenomResponseSDKType {
  eraExchangeRates: EraExchangeRateSDKType[];
}
export interface QueryBondedPoolsByDenomRequest {
  denom: string;
}
export interface QueryBondedPoolsByDenomRequestSDKType {
  denom: string;
}
export interface QueryBondedPoolsByDenomResponse {
  addrs: string[];
}
export interface QueryBondedPoolsByDenomResponseSDKType {
  addrs: string[];
}
export interface QueryGetPoolDetailRequest {
  denom: string;
  pool: string;
}
export interface QueryGetPoolDetailRequestSDKType {
  denom: string;
  pool: string;
}
export interface QueryGetPoolDetailResponse {
  detail?: PoolDetail;
}
export interface QueryGetPoolDetailResponseSDKType {
  detail?: PoolDetailSDKType;
}
export interface QueryGetChainEraRequest {
  denom: string;
}
export interface QueryGetChainEraRequestSDKType {
  denom: string;
}
export interface QueryGetChainEraResponse {
  era: number;
}
export interface QueryGetChainEraResponseSDKType {
  era: number;
}
export interface QueryGetCurrentEraSnapshotRequest {
  denom: string;
}
export interface QueryGetCurrentEraSnapshotRequestSDKType {
  denom: string;
}
export interface QueryGetCurrentEraSnapshotResponse {
  shotIds: string[];
}
export interface QueryGetCurrentEraSnapshotResponseSDKType {
  shotIds: string[];
}
export interface QueryGetProtocolFeeReceiverRequest {}
export interface QueryGetProtocolFeeReceiverRequestSDKType {}
export interface QueryGetProtocolFeeReceiverResponse {
  receiver: string;
}
export interface QueryGetProtocolFeeReceiverResponseSDKType {
  receiver: string;
}
export interface QueryGetStakingRewardCommissionRequest {
  denom: string;
}
export interface QueryGetStakingRewardCommissionRequestSDKType {
  denom: string;
}
export interface QueryGetStakingRewardCommissionResponse {
  commission: string;
}
export interface QueryGetStakingRewardCommissionResponseSDKType {
  commission: string;
}
export interface QueryGetUnbondRelayFeeRequest {
  denom: string;
}
export interface QueryGetUnbondRelayFeeRequestSDKType {
  denom: string;
}
export interface QueryGetUnbondRelayFeeResponse {
  fee?: UnbondRelayFee;
}
export interface QueryGetUnbondRelayFeeResponseSDKType {
  fee?: UnbondRelayFeeSDKType;
}
export interface QueryGetUnbondCommissionRequest {
  denom: string;
}
export interface QueryGetUnbondCommissionRequestSDKType {
  denom: string;
}
export interface QueryGetUnbondCommissionResponse {
  commission: string;
}
export interface QueryGetUnbondCommissionResponseSDKType {
  commission: string;
}
export interface QueryGetEraUnbondLimitRequest {
  denom: string;
}
export interface QueryGetEraUnbondLimitRequestSDKType {
  denom: string;
}
export interface QueryGetEraUnbondLimitResponse {
  limit: number;
}
export interface QueryGetEraUnbondLimitResponseSDKType {
  limit: number;
}
export interface QueryGetBondPipelineRequest {
  denom: string;
  pool: string;
}
export interface QueryGetBondPipelineRequestSDKType {
  denom: string;
  pool: string;
}
export interface QueryGetBondPipelineResponse {
  pipeline?: BondPipeline;
}
export interface QueryGetBondPipelineResponseSDKType {
  pipeline?: BondPipelineSDKType;
}
export interface QueryGetEraSnapshotRequest {
  denom: string;
  era: number;
}
export interface QueryGetEraSnapshotRequestSDKType {
  denom: string;
  era: number;
}
export interface QueryGetEraSnapshotResponse {
  shotIds: string[];
}
export interface QueryGetEraSnapshotResponseSDKType {
  shotIds: string[];
}
export interface QueryGetSnapshotRequest {
  shotId: string;
}
export interface QueryGetSnapshotRequestSDKType {
  shotId: string;
}
export interface QueryGetSnapshotResponse {
  shot?: BondSnapshot;
}
export interface QueryGetSnapshotResponseSDKType {
  shot?: BondSnapshotSDKType;
}
export interface QueryGetTotalExpectedActiveRequest {
  denom: string;
  era: number;
}
export interface QueryGetTotalExpectedActiveRequestSDKType {
  denom: string;
  era: number;
}
export interface QueryGetTotalExpectedActiveResponse {
  active: string;
}
export interface QueryGetTotalExpectedActiveResponseSDKType {
  active: string;
}
export interface QueryGetBondRecordRequest {
  denom: string;
  txhash: string;
}
export interface QueryGetBondRecordRequestSDKType {
  denom: string;
  txhash: string;
}
export interface QueryGetBondRecordResponse {
  bondRecord?: BondRecord;
}
export interface QueryGetBondRecordResponseSDKType {
  bondRecord?: BondRecordSDKType;
}
export interface QueryGetSignatureRequest {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
  propId: string;
}
export interface QueryGetSignatureRequestSDKType {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxTypeSDKType;
  propId: string;
}
export interface QueryGetSignatureResponse {
  signature?: Signature;
}
export interface QueryGetSignatureResponseSDKType {
  signature?: SignatureSDKType;
}
export interface QueryGetRParamsRequest {
  denom: string;
}
export interface QueryGetRParamsRequestSDKType {
  denom: string;
}
export interface QueryGetRParamsResponse {
  rParams?: RParams;
}
export interface QueryGetRParamsResponseSDKType {
  rParams?: RParamsSDKType;
}
export interface QueryTotalProtocolFeeRequest {}
export interface QueryTotalProtocolFeeRequestSDKType {}
export interface QueryTotalProtocolFeeResponse {
  totalProtocolFeeList: TotalProtocolFee[];
}
export interface QueryTotalProtocolFeeResponseSDKType {
  totalProtocolFeeList: TotalProtocolFeeSDKType[];
}
export interface QueryRelayFeeReceiverRequest {
  denom: string;
}
export interface QueryRelayFeeReceiverRequestSDKType {
  denom: string;
}
export interface QueryRelayFeeReceiverResponse {
  receiver: string;
}
export interface QueryRelayFeeReceiverResponseSDKType {
  receiver: string;
}
export interface QueryUnbondSwitchRequest {
  denom: string;
}
export interface QueryUnbondSwitchRequestSDKType {
  denom: string;
}
export interface QueryUnbondSwitchResponse {
  isOpen: boolean;
}
export interface QueryUnbondSwitchResponseSDKType {
  isOpen: boolean;
}
export interface QueryPoolUnbondNextSequenceRequest {
  denom: string;
  pool: string;
  unlockEra: number;
}
export interface QueryPoolUnbondNextSequenceRequestSDKType {
  denom: string;
  pool: string;
  unlockEra: number;
}
export interface QueryPoolUnbondNextSequenceResponse {
  nextSequence: number;
}
export interface QueryPoolUnbondNextSequenceResponseSDKType {
  nextSequence: number;
}
export interface QueryPoolUnbondingsRequest {
  denom: string;
  pool: string;
  unlockEra: number;
}
export interface QueryPoolUnbondingsRequestSDKType {
  denom: string;
  pool: string;
  unlockEra: number;
}
export interface QueryPoolUnbondingsResponse {
  unbondings: Unbonding[];
}
export interface QueryPoolUnbondingsResponseSDKType {
  unbondings: UnbondingSDKType[];
}
export interface QueryIcaPoolListRequest {
  denom: string;
}
export interface QueryIcaPoolListRequestSDKType {
  denom: string;
}
export interface QueryIcaPoolListResponse {
  icaPoolList: IcaPoolDetail[];
}
export interface QueryIcaPoolListResponseSDKType {
  icaPoolList: IcaPoolDetailSDKType[];
}
export interface QueryInterchainTxStatusRequest {
  propId: string;
}
export interface QueryInterchainTxStatusRequestSDKType {
  propId: string;
}
export interface QueryInterchainTxStatusResponse {
  interchainTxStatus: InterchainTxStatus;
}
export interface QueryInterchainTxStatusResponseSDKType {
  interchainTxStatus: InterchainTxStatusSDKType;
}

function createBaseQueryGetExchangeRateRequest(): QueryGetExchangeRateRequest {
  return {
    denom: ""
  };
}

export const QueryGetExchangeRateRequest = {
  encode(message: QueryGetExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetExchangeRateRequest>): QueryGetExchangeRateRequest {
    const message = createBaseQueryGetExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetExchangeRateResponse(): QueryGetExchangeRateResponse {
  return {
    exchangeRate: undefined
  };
}

export const QueryGetExchangeRateResponse = {
  encode(message: QueryGetExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRate.encode(message.exchangeRate, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExchangeRateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = ExchangeRate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetExchangeRateResponse>): QueryGetExchangeRateResponse {
    const message = createBaseQueryGetExchangeRateResponse();
    message.exchangeRate = object.exchangeRate !== undefined && object.exchangeRate !== null ? ExchangeRate.fromPartial(object.exchangeRate) : undefined;
    return message;
  }

};

function createBaseQueryExchangeRateAllRequest(): QueryExchangeRateAllRequest {
  return {};
}

export const QueryExchangeRateAllRequest = {
  encode(_: QueryExchangeRateAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateAllRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryExchangeRateAllRequest>): QueryExchangeRateAllRequest {
    const message = createBaseQueryExchangeRateAllRequest();
    return message;
  }

};

function createBaseQueryExchangeRateAllResponse(): QueryExchangeRateAllResponse {
  return {
    exchangeRates: []
  };
}

export const QueryExchangeRateAllResponse = {
  encode(message: QueryExchangeRateAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRates) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateAllResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(ExchangeRate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryExchangeRateAllResponse>): QueryExchangeRateAllResponse {
    const message = createBaseQueryExchangeRateAllResponse();
    message.exchangeRates = object.exchangeRates?.map(e => ExchangeRate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetEraExchangeRateRequest(): QueryGetEraExchangeRateRequest {
  return {
    denom: "",
    era: 0
  };
}

export const QueryGetEraExchangeRateRequest = {
  encode(message: QueryGetEraExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraExchangeRateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraExchangeRateRequest>): QueryGetEraExchangeRateRequest {
    const message = createBaseQueryGetEraExchangeRateRequest();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  }

};

function createBaseQueryGetEraExchangeRateResponse(): QueryGetEraExchangeRateResponse {
  return {
    eraExchangeRate: undefined
  };
}

export const QueryGetEraExchangeRateResponse = {
  encode(message: QueryGetEraExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eraExchangeRate !== undefined) {
      EraExchangeRate.encode(message.eraExchangeRate, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraExchangeRateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eraExchangeRate = EraExchangeRate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraExchangeRateResponse>): QueryGetEraExchangeRateResponse {
    const message = createBaseQueryGetEraExchangeRateResponse();
    message.eraExchangeRate = object.eraExchangeRate !== undefined && object.eraExchangeRate !== null ? EraExchangeRate.fromPartial(object.eraExchangeRate) : undefined;
    return message;
  }

};

function createBaseQueryEraExchangeRatesByDenomRequest(): QueryEraExchangeRatesByDenomRequest {
  return {
    denom: ""
  };
}

export const QueryEraExchangeRatesByDenomRequest = {
  encode(message: QueryEraExchangeRatesByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEraExchangeRatesByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEraExchangeRatesByDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEraExchangeRatesByDenomRequest>): QueryEraExchangeRatesByDenomRequest {
    const message = createBaseQueryEraExchangeRatesByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryEraExchangeRatesByDenomResponse(): QueryEraExchangeRatesByDenomResponse {
  return {
    eraExchangeRates: []
  };
}

export const QueryEraExchangeRatesByDenomResponse = {
  encode(message: QueryEraExchangeRatesByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.eraExchangeRates) {
      EraExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEraExchangeRatesByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEraExchangeRatesByDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eraExchangeRates.push(EraExchangeRate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEraExchangeRatesByDenomResponse>): QueryEraExchangeRatesByDenomResponse {
    const message = createBaseQueryEraExchangeRatesByDenomResponse();
    message.eraExchangeRates = object.eraExchangeRates?.map(e => EraExchangeRate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBondedPoolsByDenomRequest(): QueryBondedPoolsByDenomRequest {
  return {
    denom: ""
  };
}

export const QueryBondedPoolsByDenomRequest = {
  encode(message: QueryBondedPoolsByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondedPoolsByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedPoolsByDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondedPoolsByDenomRequest>): QueryBondedPoolsByDenomRequest {
    const message = createBaseQueryBondedPoolsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryBondedPoolsByDenomResponse(): QueryBondedPoolsByDenomResponse {
  return {
    addrs: []
  };
}

export const QueryBondedPoolsByDenomResponse = {
  encode(message: QueryBondedPoolsByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addrs) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondedPoolsByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedPoolsByDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addrs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondedPoolsByDenomResponse>): QueryBondedPoolsByDenomResponse {
    const message = createBaseQueryBondedPoolsByDenomResponse();
    message.addrs = object.addrs?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetPoolDetailRequest(): QueryGetPoolDetailRequest {
  return {
    denom: "",
    pool: ""
  };
}

export const QueryGetPoolDetailRequest = {
  encode(message: QueryGetPoolDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolDetailRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPoolDetailRequest>): QueryGetPoolDetailRequest {
    const message = createBaseQueryGetPoolDetailRequest();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    return message;
  }

};

function createBaseQueryGetPoolDetailResponse(): QueryGetPoolDetailResponse {
  return {
    detail: undefined
  };
}

export const QueryGetPoolDetailResponse = {
  encode(message: QueryGetPoolDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.detail !== undefined) {
      PoolDetail.encode(message.detail, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolDetailResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.detail = PoolDetail.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPoolDetailResponse>): QueryGetPoolDetailResponse {
    const message = createBaseQueryGetPoolDetailResponse();
    message.detail = object.detail !== undefined && object.detail !== null ? PoolDetail.fromPartial(object.detail) : undefined;
    return message;
  }

};

function createBaseQueryGetChainEraRequest(): QueryGetChainEraRequest {
  return {
    denom: ""
  };
}

export const QueryGetChainEraRequest = {
  encode(message: QueryGetChainEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetChainEraRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChainEraRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetChainEraRequest>): QueryGetChainEraRequest {
    const message = createBaseQueryGetChainEraRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetChainEraResponse(): QueryGetChainEraResponse {
  return {
    era: 0
  };
}

export const QueryGetChainEraResponse = {
  encode(message: QueryGetChainEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint32(message.era);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetChainEraResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChainEraResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.era = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetChainEraResponse>): QueryGetChainEraResponse {
    const message = createBaseQueryGetChainEraResponse();
    message.era = object.era ?? 0;
    return message;
  }

};

function createBaseQueryGetCurrentEraSnapshotRequest(): QueryGetCurrentEraSnapshotRequest {
  return {
    denom: ""
  };
}

export const QueryGetCurrentEraSnapshotRequest = {
  encode(message: QueryGetCurrentEraSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEraSnapshotRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetCurrentEraSnapshotRequest>): QueryGetCurrentEraSnapshotRequest {
    const message = createBaseQueryGetCurrentEraSnapshotRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetCurrentEraSnapshotResponse(): QueryGetCurrentEraSnapshotResponse {
  return {
    shotIds: []
  };
}

export const QueryGetCurrentEraSnapshotResponse = {
  encode(message: QueryGetCurrentEraSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shotIds) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEraSnapshotResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shotIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetCurrentEraSnapshotResponse>): QueryGetCurrentEraSnapshotResponse {
    const message = createBaseQueryGetCurrentEraSnapshotResponse();
    message.shotIds = object.shotIds?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetProtocolFeeReceiverRequest(): QueryGetProtocolFeeReceiverRequest {
  return {};
}

export const QueryGetProtocolFeeReceiverRequest = {
  encode(_: QueryGetProtocolFeeReceiverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtocolFeeReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtocolFeeReceiverRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryGetProtocolFeeReceiverRequest>): QueryGetProtocolFeeReceiverRequest {
    const message = createBaseQueryGetProtocolFeeReceiverRequest();
    return message;
  }

};

function createBaseQueryGetProtocolFeeReceiverResponse(): QueryGetProtocolFeeReceiverResponse {
  return {
    receiver: ""
  };
}

export const QueryGetProtocolFeeReceiverResponse = {
  encode(message: QueryGetProtocolFeeReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtocolFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtocolFeeReceiverResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetProtocolFeeReceiverResponse>): QueryGetProtocolFeeReceiverResponse {
    const message = createBaseQueryGetProtocolFeeReceiverResponse();
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseQueryGetStakingRewardCommissionRequest(): QueryGetStakingRewardCommissionRequest {
  return {
    denom: ""
  };
}

export const QueryGetStakingRewardCommissionRequest = {
  encode(message: QueryGetStakingRewardCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardCommissionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetStakingRewardCommissionRequest>): QueryGetStakingRewardCommissionRequest {
    const message = createBaseQueryGetStakingRewardCommissionRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetStakingRewardCommissionResponse(): QueryGetStakingRewardCommissionResponse {
  return {
    commission: ""
  };
}

export const QueryGetStakingRewardCommissionResponse = {
  encode(message: QueryGetStakingRewardCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetStakingRewardCommissionResponse>): QueryGetStakingRewardCommissionResponse {
    const message = createBaseQueryGetStakingRewardCommissionResponse();
    message.commission = object.commission ?? "";
    return message;
  }

};

function createBaseQueryGetUnbondRelayFeeRequest(): QueryGetUnbondRelayFeeRequest {
  return {
    denom: ""
  };
}

export const QueryGetUnbondRelayFeeRequest = {
  encode(message: QueryGetUnbondRelayFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondRelayFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondRelayFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetUnbondRelayFeeRequest>): QueryGetUnbondRelayFeeRequest {
    const message = createBaseQueryGetUnbondRelayFeeRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetUnbondRelayFeeResponse(): QueryGetUnbondRelayFeeResponse {
  return {
    fee: undefined
  };
}

export const QueryGetUnbondRelayFeeResponse = {
  encode(message: QueryGetUnbondRelayFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      UnbondRelayFee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondRelayFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = UnbondRelayFee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetUnbondRelayFeeResponse>): QueryGetUnbondRelayFeeResponse {
    const message = createBaseQueryGetUnbondRelayFeeResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? UnbondRelayFee.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseQueryGetUnbondCommissionRequest(): QueryGetUnbondCommissionRequest {
  return {
    denom: ""
  };
}

export const QueryGetUnbondCommissionRequest = {
  encode(message: QueryGetUnbondCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondCommissionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetUnbondCommissionRequest>): QueryGetUnbondCommissionRequest {
    const message = createBaseQueryGetUnbondCommissionRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetUnbondCommissionResponse(): QueryGetUnbondCommissionResponse {
  return {
    commission: ""
  };
}

export const QueryGetUnbondCommissionResponse = {
  encode(message: QueryGetUnbondCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnbondCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnbondCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetUnbondCommissionResponse>): QueryGetUnbondCommissionResponse {
    const message = createBaseQueryGetUnbondCommissionResponse();
    message.commission = object.commission ?? "";
    return message;
  }

};

function createBaseQueryGetEraUnbondLimitRequest(): QueryGetEraUnbondLimitRequest {
  return {
    denom: ""
  };
}

export const QueryGetEraUnbondLimitRequest = {
  encode(message: QueryGetEraUnbondLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraUnbondLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraUnbondLimitRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraUnbondLimitRequest>): QueryGetEraUnbondLimitRequest {
    const message = createBaseQueryGetEraUnbondLimitRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetEraUnbondLimitResponse(): QueryGetEraUnbondLimitResponse {
  return {
    limit: 0
  };
}

export const QueryGetEraUnbondLimitResponse = {
  encode(message: QueryGetEraUnbondLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint32(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraUnbondLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraUnbondLimitResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraUnbondLimitResponse>): QueryGetEraUnbondLimitResponse {
    const message = createBaseQueryGetEraUnbondLimitResponse();
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBaseQueryGetBondPipelineRequest(): QueryGetBondPipelineRequest {
  return {
    denom: "",
    pool: ""
  };
}

export const QueryGetBondPipelineRequest = {
  encode(message: QueryGetBondPipelineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondPipelineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondPipelineRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetBondPipelineRequest>): QueryGetBondPipelineRequest {
    const message = createBaseQueryGetBondPipelineRequest();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    return message;
  }

};

function createBaseQueryGetBondPipelineResponse(): QueryGetBondPipelineResponse {
  return {
    pipeline: undefined
  };
}

export const QueryGetBondPipelineResponse = {
  encode(message: QueryGetBondPipelineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pipeline !== undefined) {
      BondPipeline.encode(message.pipeline, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondPipelineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondPipelineResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pipeline = BondPipeline.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetBondPipelineResponse>): QueryGetBondPipelineResponse {
    const message = createBaseQueryGetBondPipelineResponse();
    message.pipeline = object.pipeline !== undefined && object.pipeline !== null ? BondPipeline.fromPartial(object.pipeline) : undefined;
    return message;
  }

};

function createBaseQueryGetEraSnapshotRequest(): QueryGetEraSnapshotRequest {
  return {
    denom: "",
    era: 0
  };
}

export const QueryGetEraSnapshotRequest = {
  encode(message: QueryGetEraSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraSnapshotRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraSnapshotRequest>): QueryGetEraSnapshotRequest {
    const message = createBaseQueryGetEraSnapshotRequest();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  }

};

function createBaseQueryGetEraSnapshotResponse(): QueryGetEraSnapshotResponse {
  return {
    shotIds: []
  };
}

export const QueryGetEraSnapshotResponse = {
  encode(message: QueryGetEraSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shotIds) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraSnapshotResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shotIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetEraSnapshotResponse>): QueryGetEraSnapshotResponse {
    const message = createBaseQueryGetEraSnapshotResponse();
    message.shotIds = object.shotIds?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetSnapshotRequest(): QueryGetSnapshotRequest {
  return {
    shotId: ""
  };
}

export const QueryGetSnapshotRequest = {
  encode(message: QueryGetSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shotId !== "") {
      writer.uint32(10).string(message.shotId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSnapshotRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shotId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetSnapshotRequest>): QueryGetSnapshotRequest {
    const message = createBaseQueryGetSnapshotRequest();
    message.shotId = object.shotId ?? "";
    return message;
  }

};

function createBaseQueryGetSnapshotResponse(): QueryGetSnapshotResponse {
  return {
    shot: undefined
  };
}

export const QueryGetSnapshotResponse = {
  encode(message: QueryGetSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shot !== undefined) {
      BondSnapshot.encode(message.shot, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSnapshotResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shot = BondSnapshot.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetSnapshotResponse>): QueryGetSnapshotResponse {
    const message = createBaseQueryGetSnapshotResponse();
    message.shot = object.shot !== undefined && object.shot !== null ? BondSnapshot.fromPartial(object.shot) : undefined;
    return message;
  }

};

function createBaseQueryGetTotalExpectedActiveRequest(): QueryGetTotalExpectedActiveRequest {
  return {
    denom: "",
    era: 0
  };
}

export const QueryGetTotalExpectedActiveRequest = {
  encode(message: QueryGetTotalExpectedActiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTotalExpectedActiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTotalExpectedActiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTotalExpectedActiveRequest>): QueryGetTotalExpectedActiveRequest {
    const message = createBaseQueryGetTotalExpectedActiveRequest();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  }

};

function createBaseQueryGetTotalExpectedActiveResponse(): QueryGetTotalExpectedActiveResponse {
  return {
    active: ""
  };
}

export const QueryGetTotalExpectedActiveResponse = {
  encode(message: QueryGetTotalExpectedActiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active !== "") {
      writer.uint32(10).string(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTotalExpectedActiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTotalExpectedActiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTotalExpectedActiveResponse>): QueryGetTotalExpectedActiveResponse {
    const message = createBaseQueryGetTotalExpectedActiveResponse();
    message.active = object.active ?? "";
    return message;
  }

};

function createBaseQueryGetBondRecordRequest(): QueryGetBondRecordRequest {
  return {
    denom: "",
    txhash: ""
  };
}

export const QueryGetBondRecordRequest = {
  encode(message: QueryGetBondRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.txhash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetBondRecordRequest>): QueryGetBondRecordRequest {
    const message = createBaseQueryGetBondRecordRequest();
    message.denom = object.denom ?? "";
    message.txhash = object.txhash ?? "";
    return message;
  }

};

function createBaseQueryGetBondRecordResponse(): QueryGetBondRecordResponse {
  return {
    bondRecord: undefined
  };
}

export const QueryGetBondRecordResponse = {
  encode(message: QueryGetBondRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondRecord !== undefined) {
      BondRecord.encode(message.bondRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBondRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBondRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondRecord = BondRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetBondRecordResponse>): QueryGetBondRecordResponse {
    const message = createBaseQueryGetBondRecordResponse();
    message.bondRecord = object.bondRecord !== undefined && object.bondRecord !== null ? BondRecord.fromPartial(object.bondRecord) : undefined;
    return message;
  }

};

function createBaseQueryGetSignatureRequest(): QueryGetSignatureRequest {
  return {
    denom: "",
    era: 0,
    pool: "",
    txType: 0,
    propId: ""
  };
}

export const QueryGetSignatureRequest = {
  encode(message: QueryGetSignatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }

    if (message.txType !== 0) {
      writer.uint32(32).int32(message.txType);
    }

    if (message.propId !== "") {
      writer.uint32(42).string(message.propId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSignatureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSignatureRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        case 3:
          message.pool = reader.string();
          break;

        case 4:
          message.txType = (reader.int32() as any);
          break;

        case 5:
          message.propId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetSignatureRequest>): QueryGetSignatureRequest {
    const message = createBaseQueryGetSignatureRequest();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseQueryGetSignatureResponse(): QueryGetSignatureResponse {
  return {
    signature: undefined
  };
}

export const QueryGetSignatureResponse = {
  encode(message: QueryGetSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature !== undefined) {
      Signature.encode(message.signature, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSignatureResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signature = Signature.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetSignatureResponse>): QueryGetSignatureResponse {
    const message = createBaseQueryGetSignatureResponse();
    message.signature = object.signature !== undefined && object.signature !== null ? Signature.fromPartial(object.signature) : undefined;
    return message;
  }

};

function createBaseQueryGetRParamsRequest(): QueryGetRParamsRequest {
  return {
    denom: ""
  };
}

export const QueryGetRParamsRequest = {
  encode(message: QueryGetRParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetRParamsRequest>): QueryGetRParamsRequest {
    const message = createBaseQueryGetRParamsRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetRParamsResponse(): QueryGetRParamsResponse {
  return {
    rParams: undefined
  };
}

export const QueryGetRParamsResponse = {
  encode(message: QueryGetRParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rParams !== undefined) {
      RParams.encode(message.rParams, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rParams = RParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetRParamsResponse>): QueryGetRParamsResponse {
    const message = createBaseQueryGetRParamsResponse();
    message.rParams = object.rParams !== undefined && object.rParams !== null ? RParams.fromPartial(object.rParams) : undefined;
    return message;
  }

};

function createBaseQueryTotalProtocolFeeRequest(): QueryTotalProtocolFeeRequest {
  return {};
}

export const QueryTotalProtocolFeeRequest = {
  encode(_: QueryTotalProtocolFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalProtocolFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalProtocolFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryTotalProtocolFeeRequest>): QueryTotalProtocolFeeRequest {
    const message = createBaseQueryTotalProtocolFeeRequest();
    return message;
  }

};

function createBaseQueryTotalProtocolFeeResponse(): QueryTotalProtocolFeeResponse {
  return {
    totalProtocolFeeList: []
  };
}

export const QueryTotalProtocolFeeResponse = {
  encode(message: QueryTotalProtocolFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalProtocolFeeList) {
      TotalProtocolFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalProtocolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalProtocolFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalProtocolFeeList.push(TotalProtocolFee.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTotalProtocolFeeResponse>): QueryTotalProtocolFeeResponse {
    const message = createBaseQueryTotalProtocolFeeResponse();
    message.totalProtocolFeeList = object.totalProtocolFeeList?.map(e => TotalProtocolFee.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRelayFeeReceiverRequest(): QueryRelayFeeReceiverRequest {
  return {
    denom: ""
  };
}

export const QueryRelayFeeReceiverRequest = {
  encode(message: QueryRelayFeeReceiverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayFeeReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayFeeReceiverRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRelayFeeReceiverRequest>): QueryRelayFeeReceiverRequest {
    const message = createBaseQueryRelayFeeReceiverRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryRelayFeeReceiverResponse(): QueryRelayFeeReceiverResponse {
  return {
    receiver: ""
  };
}

export const QueryRelayFeeReceiverResponse = {
  encode(message: QueryRelayFeeReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayFeeReceiverResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRelayFeeReceiverResponse>): QueryRelayFeeReceiverResponse {
    const message = createBaseQueryRelayFeeReceiverResponse();
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseQueryUnbondSwitchRequest(): QueryUnbondSwitchRequest {
  return {
    denom: ""
  };
}

export const QueryUnbondSwitchRequest = {
  encode(message: QueryUnbondSwitchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondSwitchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnbondSwitchRequest>): QueryUnbondSwitchRequest {
    const message = createBaseQueryUnbondSwitchRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryUnbondSwitchResponse(): QueryUnbondSwitchResponse {
  return {
    isOpen: false
  };
}

export const QueryUnbondSwitchResponse = {
  encode(message: QueryUnbondSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOpen === true) {
      writer.uint32(8).bool(message.isOpen);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondSwitchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isOpen = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnbondSwitchResponse>): QueryUnbondSwitchResponse {
    const message = createBaseQueryUnbondSwitchResponse();
    message.isOpen = object.isOpen ?? false;
    return message;
  }

};

function createBaseQueryPoolUnbondNextSequenceRequest(): QueryPoolUnbondNextSequenceRequest {
  return {
    denom: "",
    pool: "",
    unlockEra: 0
  };
}

export const QueryPoolUnbondNextSequenceRequest = {
  encode(message: QueryPoolUnbondNextSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    if (message.unlockEra !== 0) {
      writer.uint32(24).uint32(message.unlockEra);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolUnbondNextSequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondNextSequenceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        case 3:
          message.unlockEra = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolUnbondNextSequenceRequest>): QueryPoolUnbondNextSequenceRequest {
    const message = createBaseQueryPoolUnbondNextSequenceRequest();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.unlockEra = object.unlockEra ?? 0;
    return message;
  }

};

function createBaseQueryPoolUnbondNextSequenceResponse(): QueryPoolUnbondNextSequenceResponse {
  return {
    nextSequence: 0
  };
}

export const QueryPoolUnbondNextSequenceResponse = {
  encode(message: QueryPoolUnbondNextSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextSequence !== 0) {
      writer.uint32(8).uint32(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolUnbondNextSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondNextSequenceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextSequence = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolUnbondNextSequenceResponse>): QueryPoolUnbondNextSequenceResponse {
    const message = createBaseQueryPoolUnbondNextSequenceResponse();
    message.nextSequence = object.nextSequence ?? 0;
    return message;
  }

};

function createBaseQueryPoolUnbondingsRequest(): QueryPoolUnbondingsRequest {
  return {
    denom: "",
    pool: "",
    unlockEra: 0
  };
}

export const QueryPoolUnbondingsRequest = {
  encode(message: QueryPoolUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    if (message.unlockEra !== 0) {
      writer.uint32(24).uint32(message.unlockEra);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        case 3:
          message.unlockEra = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolUnbondingsRequest>): QueryPoolUnbondingsRequest {
    const message = createBaseQueryPoolUnbondingsRequest();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.unlockEra = object.unlockEra ?? 0;
    return message;
  }

};

function createBaseQueryPoolUnbondingsResponse(): QueryPoolUnbondingsResponse {
  return {
    unbondings: []
  };
}

export const QueryPoolUnbondingsResponse = {
  encode(message: QueryPoolUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolUnbondingsResponse>): QueryPoolUnbondingsResponse {
    const message = createBaseQueryPoolUnbondingsResponse();
    message.unbondings = object.unbondings?.map(e => Unbonding.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryIcaPoolListRequest(): QueryIcaPoolListRequest {
  return {
    denom: ""
  };
}

export const QueryIcaPoolListRequest = {
  encode(message: QueryIcaPoolListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIcaPoolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcaPoolListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIcaPoolListRequest>): QueryIcaPoolListRequest {
    const message = createBaseQueryIcaPoolListRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryIcaPoolListResponse(): QueryIcaPoolListResponse {
  return {
    icaPoolList: []
  };
}

export const QueryIcaPoolListResponse = {
  encode(message: QueryIcaPoolListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.icaPoolList) {
      IcaPoolDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIcaPoolListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcaPoolListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.icaPoolList.push(IcaPoolDetail.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIcaPoolListResponse>): QueryIcaPoolListResponse {
    const message = createBaseQueryIcaPoolListResponse();
    message.icaPoolList = object.icaPoolList?.map(e => IcaPoolDetail.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryInterchainTxStatusRequest(): QueryInterchainTxStatusRequest {
  return {
    propId: ""
  };
}

export const QueryInterchainTxStatusRequest = {
  encode(message: QueryInterchainTxStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.propId !== "") {
      writer.uint32(10).string(message.propId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainTxStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainTxStatusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.propId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInterchainTxStatusRequest>): QueryInterchainTxStatusRequest {
    const message = createBaseQueryInterchainTxStatusRequest();
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseQueryInterchainTxStatusResponse(): QueryInterchainTxStatusResponse {
  return {
    interchainTxStatus: 0
  };
}

export const QueryInterchainTxStatusResponse = {
  encode(message: QueryInterchainTxStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainTxStatus !== 0) {
      writer.uint32(8).int32(message.interchainTxStatus);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainTxStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainTxStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interchainTxStatus = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInterchainTxStatusResponse>): QueryInterchainTxStatusResponse {
    const message = createBaseQueryInterchainTxStatusResponse();
    message.interchainTxStatus = object.interchainTxStatus ?? 0;
    return message;
  }

};
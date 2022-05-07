/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ExchangeRate,
  EraExchangeRate,
  PoolDetail,
  UnbondRelayFee,
  BondPipeline,
  BondSnapshot,
  BondRecord,
  OriginalTxType,
  Signature,
  RParams,
  TotalProtocolFee,
  Unbonding,
  originalTxTypeFromJSON,
  originalTxTypeToJSON,
} from "../ledger/ledger";

export const protobufPackage = "stafihub.stafihub.ledger";

export interface QueryGetExchangeRateRequest {
  denom: string;
}

export interface QueryGetExchangeRateResponse {
  exchangeRate?: ExchangeRate;
}

export interface QueryExchangeRateAllRequest {}

export interface QueryExchangeRateAllResponse {
  exchangeRates: ExchangeRate[];
}

export interface QueryGetEraExchangeRateRequest {
  denom: string;
  era: number;
}

export interface QueryGetEraExchangeRateResponse {
  eraExchangeRate?: EraExchangeRate;
}

export interface QueryEraExchangeRatesByDenomRequest {
  denom: string;
}

export interface QueryEraExchangeRatesByDenomResponse {
  eraExchangeRates: EraExchangeRate[];
}

export interface QueryBondedPoolsByDenomRequest {
  denom: string;
}

export interface QueryBondedPoolsByDenomResponse {
  addrs: string[];
}

export interface QueryGetPoolDetailRequest {
  denom: string;
  pool: string;
}

export interface QueryGetPoolDetailResponse {
  detail?: PoolDetail;
}

export interface QueryGetChainEraRequest {
  denom: string;
}

export interface QueryGetChainEraResponse {
  era: number;
}

export interface QueryGetCurrentEraSnapshotRequest {
  denom: string;
}

export interface QueryGetCurrentEraSnapshotResponse {
  shotIds: string[];
}

export interface QueryGetProtocolFeeReceiverRequest {}

export interface QueryGetProtocolFeeReceiverResponse {
  receiver: string;
}

export interface QueryGetStakingRewardCommissionRequest {
  denom: string;
}

export interface QueryGetStakingRewardCommissionResponse {
  commission: string;
}

export interface QueryGetUnbondRelayFeeRequest {
  denom: string;
}

export interface QueryGetUnbondRelayFeeResponse {
  fee?: UnbondRelayFee;
}

export interface QueryGetUnbondCommissionRequest {
  denom: string;
}

export interface QueryGetUnbondCommissionResponse {
  commission: string;
}

export interface QueryGetEraUnbondLimitRequest {
  denom: string;
}

export interface QueryGetEraUnbondLimitResponse {
  limit: number;
}

export interface QueryGetBondPipelineRequest {
  denom: string;
  pool: string;
}

export interface QueryGetBondPipelineResponse {
  pipeline?: BondPipeline;
}

export interface QueryGetEraSnapshotRequest {
  denom: string;
  era: number;
}

export interface QueryGetEraSnapshotResponse {
  shotIds: string[];
}

export interface QueryGetSnapshotRequest {
  shotId: string;
}

export interface QueryGetSnapshotResponse {
  shot?: BondSnapshot;
}

export interface QueryGetTotalExpectedActiveRequest {
  denom: string;
  era: number;
}

export interface QueryGetTotalExpectedActiveResponse {
  active: string;
}

export interface QueryGetBondRecordRequest {
  denom: string;
  txhash: string;
}

export interface QueryGetBondRecordResponse {
  bondRecord?: BondRecord;
}

export interface QueryGetSignatureRequest {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
  propId: string;
}

export interface QueryGetSignatureResponse {
  signature?: Signature;
}

export interface QueryGetRParamsRequest {
  denom: string;
}

export interface QueryGetRParamsResponse {
  rParams?: RParams;
}

export interface QueryTotalProtocolFeeRequest {}

export interface QueryTotalProtocolFeeResponse {
  totalProtocolFeeList: TotalProtocolFee[];
}

export interface QueryRelayFeeReceiverRequest {
  denom: string;
}

export interface QueryRelayFeeReceiverResponse {
  receiver: string;
}

export interface QueryUnbondSwitchRequest {
  denom: string;
}

export interface QueryUnbondSwitchResponse {
  isOpen: boolean;
}

export interface QueryPoolUnbondNextSequenceRequest {
  denom: string;
  pool: string;
  unlockEra: number;
}

export interface QueryPoolUnbondNextSequenceResponse {
  nextSequence: number;
}

export interface QueryPoolUnbondingsRequest {
  denom: string;
  pool: string;
  unlockEra: number;
}

export interface QueryPoolUnbondingsResponse {
  unbondings: Unbonding[];
}

const baseQueryGetExchangeRateRequest: object = { denom: "" };

export const QueryGetExchangeRateRequest = {
  encode(
    message: QueryGetExchangeRateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRateRequest,
    } as QueryGetExchangeRateRequest;
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

  fromJSON(object: any): QueryGetExchangeRateRequest {
    const message = {
      ...baseQueryGetExchangeRateRequest,
    } as QueryGetExchangeRateRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRateRequest>
  ): QueryGetExchangeRateRequest {
    const message = {
      ...baseQueryGetExchangeRateRequest,
    } as QueryGetExchangeRateRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetExchangeRateResponse: object = {};

export const QueryGetExchangeRateResponse = {
  encode(
    message: QueryGetExchangeRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRate.encode(
        message.exchangeRate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExchangeRateResponse,
    } as QueryGetExchangeRateResponse;
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

  fromJSON(object: any): QueryGetExchangeRateResponse {
    const message = {
      ...baseQueryGetExchangeRateResponse,
    } as QueryGetExchangeRateResponse;
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null
        ? ExchangeRate.fromJSON(object.exchangeRate)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined &&
      (obj.exchangeRate = message.exchangeRate
        ? ExchangeRate.toJSON(message.exchangeRate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExchangeRateResponse>
  ): QueryGetExchangeRateResponse {
    const message = {
      ...baseQueryGetExchangeRateResponse,
    } as QueryGetExchangeRateResponse;
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null
        ? ExchangeRate.fromPartial(object.exchangeRate)
        : undefined;
    return message;
  },
};

const baseQueryExchangeRateAllRequest: object = {};

export const QueryExchangeRateAllRequest = {
  encode(
    _: QueryExchangeRateAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateAllRequest,
    } as QueryExchangeRateAllRequest;
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

  fromJSON(_: any): QueryExchangeRateAllRequest {
    const message = {
      ...baseQueryExchangeRateAllRequest,
    } as QueryExchangeRateAllRequest;
    return message;
  },

  toJSON(_: QueryExchangeRateAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryExchangeRateAllRequest>
  ): QueryExchangeRateAllRequest {
    const message = {
      ...baseQueryExchangeRateAllRequest,
    } as QueryExchangeRateAllRequest;
    return message;
  },
};

const baseQueryExchangeRateAllResponse: object = {};

export const QueryExchangeRateAllResponse = {
  encode(
    message: QueryExchangeRateAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.exchangeRates) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateAllResponse,
    } as QueryExchangeRateAllResponse;
    message.exchangeRates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(
            ExchangeRate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateAllResponse {
    const message = {
      ...baseQueryExchangeRateAllResponse,
    } as QueryExchangeRateAllResponse;
    message.exchangeRates = (object.exchangeRates ?? []).map((e: any) =>
      ExchangeRate.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryExchangeRateAllResponse): unknown {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) =>
        e ? ExchangeRate.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRateAllResponse>
  ): QueryExchangeRateAllResponse {
    const message = {
      ...baseQueryExchangeRateAllResponse,
    } as QueryExchangeRateAllResponse;
    message.exchangeRates = (object.exchangeRates ?? []).map((e) =>
      ExchangeRate.fromPartial(e)
    );
    return message;
  },
};

const baseQueryGetEraExchangeRateRequest: object = { denom: "", era: 0 };

export const QueryGetEraExchangeRateRequest = {
  encode(
    message: QueryGetEraExchangeRateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraExchangeRateRequest,
    } as QueryGetEraExchangeRateRequest;
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

  fromJSON(object: any): QueryGetEraExchangeRateRequest {
    const message = {
      ...baseQueryGetEraExchangeRateRequest,
    } as QueryGetEraExchangeRateRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    return message;
  },

  toJSON(message: QueryGetEraExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraExchangeRateRequest>
  ): QueryGetEraExchangeRateRequest {
    const message = {
      ...baseQueryGetEraExchangeRateRequest,
    } as QueryGetEraExchangeRateRequest;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  },
};

const baseQueryGetEraExchangeRateResponse: object = {};

export const QueryGetEraExchangeRateResponse = {
  encode(
    message: QueryGetEraExchangeRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eraExchangeRate !== undefined) {
      EraExchangeRate.encode(
        message.eraExchangeRate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraExchangeRateResponse,
    } as QueryGetEraExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eraExchangeRate = EraExchangeRate.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraExchangeRateResponse {
    const message = {
      ...baseQueryGetEraExchangeRateResponse,
    } as QueryGetEraExchangeRateResponse;
    message.eraExchangeRate =
      object.eraExchangeRate !== undefined && object.eraExchangeRate !== null
        ? EraExchangeRate.fromJSON(object.eraExchangeRate)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetEraExchangeRateResponse): unknown {
    const obj: any = {};
    message.eraExchangeRate !== undefined &&
      (obj.eraExchangeRate = message.eraExchangeRate
        ? EraExchangeRate.toJSON(message.eraExchangeRate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraExchangeRateResponse>
  ): QueryGetEraExchangeRateResponse {
    const message = {
      ...baseQueryGetEraExchangeRateResponse,
    } as QueryGetEraExchangeRateResponse;
    message.eraExchangeRate =
      object.eraExchangeRate !== undefined && object.eraExchangeRate !== null
        ? EraExchangeRate.fromPartial(object.eraExchangeRate)
        : undefined;
    return message;
  },
};

const baseQueryEraExchangeRatesByDenomRequest: object = { denom: "" };

export const QueryEraExchangeRatesByDenomRequest = {
  encode(
    message: QueryEraExchangeRatesByDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEraExchangeRatesByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEraExchangeRatesByDenomRequest,
    } as QueryEraExchangeRatesByDenomRequest;
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

  fromJSON(object: any): QueryEraExchangeRatesByDenomRequest {
    const message = {
      ...baseQueryEraExchangeRatesByDenomRequest,
    } as QueryEraExchangeRatesByDenomRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryEraExchangeRatesByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEraExchangeRatesByDenomRequest>
  ): QueryEraExchangeRatesByDenomRequest {
    const message = {
      ...baseQueryEraExchangeRatesByDenomRequest,
    } as QueryEraExchangeRatesByDenomRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryEraExchangeRatesByDenomResponse: object = {};

export const QueryEraExchangeRatesByDenomResponse = {
  encode(
    message: QueryEraExchangeRatesByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.eraExchangeRates) {
      EraExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEraExchangeRatesByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEraExchangeRatesByDenomResponse,
    } as QueryEraExchangeRatesByDenomResponse;
    message.eraExchangeRates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eraExchangeRates.push(
            EraExchangeRate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEraExchangeRatesByDenomResponse {
    const message = {
      ...baseQueryEraExchangeRatesByDenomResponse,
    } as QueryEraExchangeRatesByDenomResponse;
    message.eraExchangeRates = (object.eraExchangeRates ?? []).map((e: any) =>
      EraExchangeRate.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryEraExchangeRatesByDenomResponse): unknown {
    const obj: any = {};
    if (message.eraExchangeRates) {
      obj.eraExchangeRates = message.eraExchangeRates.map((e) =>
        e ? EraExchangeRate.toJSON(e) : undefined
      );
    } else {
      obj.eraExchangeRates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEraExchangeRatesByDenomResponse>
  ): QueryEraExchangeRatesByDenomResponse {
    const message = {
      ...baseQueryEraExchangeRatesByDenomResponse,
    } as QueryEraExchangeRatesByDenomResponse;
    message.eraExchangeRates = (object.eraExchangeRates ?? []).map((e) =>
      EraExchangeRate.fromPartial(e)
    );
    return message;
  },
};

const baseQueryBondedPoolsByDenomRequest: object = { denom: "" };

export const QueryBondedPoolsByDenomRequest = {
  encode(
    message: QueryBondedPoolsByDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBondedPoolsByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBondedPoolsByDenomRequest,
    } as QueryBondedPoolsByDenomRequest;
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

  fromJSON(object: any): QueryBondedPoolsByDenomRequest {
    const message = {
      ...baseQueryBondedPoolsByDenomRequest,
    } as QueryBondedPoolsByDenomRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryBondedPoolsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBondedPoolsByDenomRequest>
  ): QueryBondedPoolsByDenomRequest {
    const message = {
      ...baseQueryBondedPoolsByDenomRequest,
    } as QueryBondedPoolsByDenomRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryBondedPoolsByDenomResponse: object = { addrs: "" };

export const QueryBondedPoolsByDenomResponse = {
  encode(
    message: QueryBondedPoolsByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addrs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBondedPoolsByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBondedPoolsByDenomResponse,
    } as QueryBondedPoolsByDenomResponse;
    message.addrs = [];
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

  fromJSON(object: any): QueryBondedPoolsByDenomResponse {
    const message = {
      ...baseQueryBondedPoolsByDenomResponse,
    } as QueryBondedPoolsByDenomResponse;
    message.addrs = (object.addrs ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QueryBondedPoolsByDenomResponse): unknown {
    const obj: any = {};
    if (message.addrs) {
      obj.addrs = message.addrs.map((e) => e);
    } else {
      obj.addrs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBondedPoolsByDenomResponse>
  ): QueryBondedPoolsByDenomResponse {
    const message = {
      ...baseQueryBondedPoolsByDenomResponse,
    } as QueryBondedPoolsByDenomResponse;
    message.addrs = (object.addrs ?? []).map((e) => e);
    return message;
  },
};

const baseQueryGetPoolDetailRequest: object = { denom: "", pool: "" };

export const QueryGetPoolDetailRequest = {
  encode(
    message: QueryGetPoolDetailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPoolDetailRequest,
    } as QueryGetPoolDetailRequest;
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

  fromJSON(object: any): QueryGetPoolDetailRequest {
    const message = {
      ...baseQueryGetPoolDetailRequest,
    } as QueryGetPoolDetailRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    return message;
  },

  toJSON(message: QueryGetPoolDetailRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPoolDetailRequest>
  ): QueryGetPoolDetailRequest {
    const message = {
      ...baseQueryGetPoolDetailRequest,
    } as QueryGetPoolDetailRequest;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    return message;
  },
};

const baseQueryGetPoolDetailResponse: object = {};

export const QueryGetPoolDetailResponse = {
  encode(
    message: QueryGetPoolDetailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.detail !== undefined) {
      PoolDetail.encode(message.detail, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPoolDetailResponse,
    } as QueryGetPoolDetailResponse;
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

  fromJSON(object: any): QueryGetPoolDetailResponse {
    const message = {
      ...baseQueryGetPoolDetailResponse,
    } as QueryGetPoolDetailResponse;
    message.detail =
      object.detail !== undefined && object.detail !== null
        ? PoolDetail.fromJSON(object.detail)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPoolDetailResponse): unknown {
    const obj: any = {};
    message.detail !== undefined &&
      (obj.detail = message.detail
        ? PoolDetail.toJSON(message.detail)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPoolDetailResponse>
  ): QueryGetPoolDetailResponse {
    const message = {
      ...baseQueryGetPoolDetailResponse,
    } as QueryGetPoolDetailResponse;
    message.detail =
      object.detail !== undefined && object.detail !== null
        ? PoolDetail.fromPartial(object.detail)
        : undefined;
    return message;
  },
};

const baseQueryGetChainEraRequest: object = { denom: "" };

export const QueryGetChainEraRequest = {
  encode(
    message: QueryGetChainEraRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetChainEraRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChainEraRequest,
    } as QueryGetChainEraRequest;
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

  fromJSON(object: any): QueryGetChainEraRequest {
    const message = {
      ...baseQueryGetChainEraRequest,
    } as QueryGetChainEraRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetChainEraRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChainEraRequest>
  ): QueryGetChainEraRequest {
    const message = {
      ...baseQueryGetChainEraRequest,
    } as QueryGetChainEraRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetChainEraResponse: object = { era: 0 };

export const QueryGetChainEraResponse = {
  encode(
    message: QueryGetChainEraResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint32(message.era);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetChainEraResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChainEraResponse,
    } as QueryGetChainEraResponse;
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

  fromJSON(object: any): QueryGetChainEraResponse {
    const message = {
      ...baseQueryGetChainEraResponse,
    } as QueryGetChainEraResponse;
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    return message;
  },

  toJSON(message: QueryGetChainEraResponse): unknown {
    const obj: any = {};
    message.era !== undefined && (obj.era = message.era);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChainEraResponse>
  ): QueryGetChainEraResponse {
    const message = {
      ...baseQueryGetChainEraResponse,
    } as QueryGetChainEraResponse;
    message.era = object.era ?? 0;
    return message;
  },
};

const baseQueryGetCurrentEraSnapshotRequest: object = { denom: "" };

export const QueryGetCurrentEraSnapshotRequest = {
  encode(
    message: QueryGetCurrentEraSnapshotRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCurrentEraSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCurrentEraSnapshotRequest,
    } as QueryGetCurrentEraSnapshotRequest;
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

  fromJSON(object: any): QueryGetCurrentEraSnapshotRequest {
    const message = {
      ...baseQueryGetCurrentEraSnapshotRequest,
    } as QueryGetCurrentEraSnapshotRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetCurrentEraSnapshotRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCurrentEraSnapshotRequest>
  ): QueryGetCurrentEraSnapshotRequest {
    const message = {
      ...baseQueryGetCurrentEraSnapshotRequest,
    } as QueryGetCurrentEraSnapshotRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetCurrentEraSnapshotResponse: object = { shotIds: "" };

export const QueryGetCurrentEraSnapshotResponse = {
  encode(
    message: QueryGetCurrentEraSnapshotResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.shotIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCurrentEraSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCurrentEraSnapshotResponse,
    } as QueryGetCurrentEraSnapshotResponse;
    message.shotIds = [];
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

  fromJSON(object: any): QueryGetCurrentEraSnapshotResponse {
    const message = {
      ...baseQueryGetCurrentEraSnapshotResponse,
    } as QueryGetCurrentEraSnapshotResponse;
    message.shotIds = (object.shotIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QueryGetCurrentEraSnapshotResponse): unknown {
    const obj: any = {};
    if (message.shotIds) {
      obj.shotIds = message.shotIds.map((e) => e);
    } else {
      obj.shotIds = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCurrentEraSnapshotResponse>
  ): QueryGetCurrentEraSnapshotResponse {
    const message = {
      ...baseQueryGetCurrentEraSnapshotResponse,
    } as QueryGetCurrentEraSnapshotResponse;
    message.shotIds = (object.shotIds ?? []).map((e) => e);
    return message;
  },
};

const baseQueryGetProtocolFeeReceiverRequest: object = {};

export const QueryGetProtocolFeeReceiverRequest = {
  encode(
    _: QueryGetProtocolFeeReceiverRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProtocolFeeReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProtocolFeeReceiverRequest,
    } as QueryGetProtocolFeeReceiverRequest;
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

  fromJSON(_: any): QueryGetProtocolFeeReceiverRequest {
    const message = {
      ...baseQueryGetProtocolFeeReceiverRequest,
    } as QueryGetProtocolFeeReceiverRequest;
    return message;
  },

  toJSON(_: QueryGetProtocolFeeReceiverRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetProtocolFeeReceiverRequest>
  ): QueryGetProtocolFeeReceiverRequest {
    const message = {
      ...baseQueryGetProtocolFeeReceiverRequest,
    } as QueryGetProtocolFeeReceiverRequest;
    return message;
  },
};

const baseQueryGetProtocolFeeReceiverResponse: object = { receiver: "" };

export const QueryGetProtocolFeeReceiverResponse = {
  encode(
    message: QueryGetProtocolFeeReceiverResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProtocolFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProtocolFeeReceiverResponse,
    } as QueryGetProtocolFeeReceiverResponse;
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

  fromJSON(object: any): QueryGetProtocolFeeReceiverResponse {
    const message = {
      ...baseQueryGetProtocolFeeReceiverResponse,
    } as QueryGetProtocolFeeReceiverResponse;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: QueryGetProtocolFeeReceiverResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProtocolFeeReceiverResponse>
  ): QueryGetProtocolFeeReceiverResponse {
    const message = {
      ...baseQueryGetProtocolFeeReceiverResponse,
    } as QueryGetProtocolFeeReceiverResponse;
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseQueryGetStakingRewardCommissionRequest: object = { denom: "" };

export const QueryGetStakingRewardCommissionRequest = {
  encode(
    message: QueryGetStakingRewardCommissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetStakingRewardCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStakingRewardCommissionRequest,
    } as QueryGetStakingRewardCommissionRequest;
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

  fromJSON(object: any): QueryGetStakingRewardCommissionRequest {
    const message = {
      ...baseQueryGetStakingRewardCommissionRequest,
    } as QueryGetStakingRewardCommissionRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetStakingRewardCommissionRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStakingRewardCommissionRequest>
  ): QueryGetStakingRewardCommissionRequest {
    const message = {
      ...baseQueryGetStakingRewardCommissionRequest,
    } as QueryGetStakingRewardCommissionRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetStakingRewardCommissionResponse: object = { commission: "" };

export const QueryGetStakingRewardCommissionResponse = {
  encode(
    message: QueryGetStakingRewardCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetStakingRewardCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStakingRewardCommissionResponse,
    } as QueryGetStakingRewardCommissionResponse;
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

  fromJSON(object: any): QueryGetStakingRewardCommissionResponse {
    const message = {
      ...baseQueryGetStakingRewardCommissionResponse,
    } as QueryGetStakingRewardCommissionResponse;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? String(object.commission)
        : "";
    return message;
  },

  toJSON(message: QueryGetStakingRewardCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStakingRewardCommissionResponse>
  ): QueryGetStakingRewardCommissionResponse {
    const message = {
      ...baseQueryGetStakingRewardCommissionResponse,
    } as QueryGetStakingRewardCommissionResponse;
    message.commission = object.commission ?? "";
    return message;
  },
};

const baseQueryGetUnbondRelayFeeRequest: object = { denom: "" };

export const QueryGetUnbondRelayFeeRequest = {
  encode(
    message: QueryGetUnbondRelayFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetUnbondRelayFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUnbondRelayFeeRequest,
    } as QueryGetUnbondRelayFeeRequest;
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

  fromJSON(object: any): QueryGetUnbondRelayFeeRequest {
    const message = {
      ...baseQueryGetUnbondRelayFeeRequest,
    } as QueryGetUnbondRelayFeeRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetUnbondRelayFeeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUnbondRelayFeeRequest>
  ): QueryGetUnbondRelayFeeRequest {
    const message = {
      ...baseQueryGetUnbondRelayFeeRequest,
    } as QueryGetUnbondRelayFeeRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetUnbondRelayFeeResponse: object = {};

export const QueryGetUnbondRelayFeeResponse = {
  encode(
    message: QueryGetUnbondRelayFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fee !== undefined) {
      UnbondRelayFee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetUnbondRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUnbondRelayFeeResponse,
    } as QueryGetUnbondRelayFeeResponse;
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

  fromJSON(object: any): QueryGetUnbondRelayFeeResponse {
    const message = {
      ...baseQueryGetUnbondRelayFeeResponse,
    } as QueryGetUnbondRelayFeeResponse;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? UnbondRelayFee.fromJSON(object.fee)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetUnbondRelayFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined &&
      (obj.fee = message.fee ? UnbondRelayFee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUnbondRelayFeeResponse>
  ): QueryGetUnbondRelayFeeResponse {
    const message = {
      ...baseQueryGetUnbondRelayFeeResponse,
    } as QueryGetUnbondRelayFeeResponse;
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? UnbondRelayFee.fromPartial(object.fee)
        : undefined;
    return message;
  },
};

const baseQueryGetUnbondCommissionRequest: object = { denom: "" };

export const QueryGetUnbondCommissionRequest = {
  encode(
    message: QueryGetUnbondCommissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetUnbondCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUnbondCommissionRequest,
    } as QueryGetUnbondCommissionRequest;
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

  fromJSON(object: any): QueryGetUnbondCommissionRequest {
    const message = {
      ...baseQueryGetUnbondCommissionRequest,
    } as QueryGetUnbondCommissionRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetUnbondCommissionRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUnbondCommissionRequest>
  ): QueryGetUnbondCommissionRequest {
    const message = {
      ...baseQueryGetUnbondCommissionRequest,
    } as QueryGetUnbondCommissionRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetUnbondCommissionResponse: object = { commission: "" };

export const QueryGetUnbondCommissionResponse = {
  encode(
    message: QueryGetUnbondCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetUnbondCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUnbondCommissionResponse,
    } as QueryGetUnbondCommissionResponse;
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

  fromJSON(object: any): QueryGetUnbondCommissionResponse {
    const message = {
      ...baseQueryGetUnbondCommissionResponse,
    } as QueryGetUnbondCommissionResponse;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? String(object.commission)
        : "";
    return message;
  },

  toJSON(message: QueryGetUnbondCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUnbondCommissionResponse>
  ): QueryGetUnbondCommissionResponse {
    const message = {
      ...baseQueryGetUnbondCommissionResponse,
    } as QueryGetUnbondCommissionResponse;
    message.commission = object.commission ?? "";
    return message;
  },
};

const baseQueryGetEraUnbondLimitRequest: object = { denom: "" };

export const QueryGetEraUnbondLimitRequest = {
  encode(
    message: QueryGetEraUnbondLimitRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraUnbondLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraUnbondLimitRequest,
    } as QueryGetEraUnbondLimitRequest;
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

  fromJSON(object: any): QueryGetEraUnbondLimitRequest {
    const message = {
      ...baseQueryGetEraUnbondLimitRequest,
    } as QueryGetEraUnbondLimitRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetEraUnbondLimitRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraUnbondLimitRequest>
  ): QueryGetEraUnbondLimitRequest {
    const message = {
      ...baseQueryGetEraUnbondLimitRequest,
    } as QueryGetEraUnbondLimitRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetEraUnbondLimitResponse: object = { limit: 0 };

export const QueryGetEraUnbondLimitResponse = {
  encode(
    message: QueryGetEraUnbondLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint32(message.limit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraUnbondLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraUnbondLimitResponse,
    } as QueryGetEraUnbondLimitResponse;
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

  fromJSON(object: any): QueryGetEraUnbondLimitResponse {
    const message = {
      ...baseQueryGetEraUnbondLimitResponse,
    } as QueryGetEraUnbondLimitResponse;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Number(object.limit)
        : 0;
    return message;
  },

  toJSON(message: QueryGetEraUnbondLimitResponse): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraUnbondLimitResponse>
  ): QueryGetEraUnbondLimitResponse {
    const message = {
      ...baseQueryGetEraUnbondLimitResponse,
    } as QueryGetEraUnbondLimitResponse;
    message.limit = object.limit ?? 0;
    return message;
  },
};

const baseQueryGetBondPipelineRequest: object = { denom: "", pool: "" };

export const QueryGetBondPipelineRequest = {
  encode(
    message: QueryGetBondPipelineRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBondPipelineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBondPipelineRequest,
    } as QueryGetBondPipelineRequest;
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

  fromJSON(object: any): QueryGetBondPipelineRequest {
    const message = {
      ...baseQueryGetBondPipelineRequest,
    } as QueryGetBondPipelineRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    return message;
  },

  toJSON(message: QueryGetBondPipelineRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBondPipelineRequest>
  ): QueryGetBondPipelineRequest {
    const message = {
      ...baseQueryGetBondPipelineRequest,
    } as QueryGetBondPipelineRequest;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    return message;
  },
};

const baseQueryGetBondPipelineResponse: object = {};

export const QueryGetBondPipelineResponse = {
  encode(
    message: QueryGetBondPipelineResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pipeline !== undefined) {
      BondPipeline.encode(message.pipeline, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBondPipelineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBondPipelineResponse,
    } as QueryGetBondPipelineResponse;
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

  fromJSON(object: any): QueryGetBondPipelineResponse {
    const message = {
      ...baseQueryGetBondPipelineResponse,
    } as QueryGetBondPipelineResponse;
    message.pipeline =
      object.pipeline !== undefined && object.pipeline !== null
        ? BondPipeline.fromJSON(object.pipeline)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetBondPipelineResponse): unknown {
    const obj: any = {};
    message.pipeline !== undefined &&
      (obj.pipeline = message.pipeline
        ? BondPipeline.toJSON(message.pipeline)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBondPipelineResponse>
  ): QueryGetBondPipelineResponse {
    const message = {
      ...baseQueryGetBondPipelineResponse,
    } as QueryGetBondPipelineResponse;
    message.pipeline =
      object.pipeline !== undefined && object.pipeline !== null
        ? BondPipeline.fromPartial(object.pipeline)
        : undefined;
    return message;
  },
};

const baseQueryGetEraSnapshotRequest: object = { denom: "", era: 0 };

export const QueryGetEraSnapshotRequest = {
  encode(
    message: QueryGetEraSnapshotRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraSnapshotRequest,
    } as QueryGetEraSnapshotRequest;
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

  fromJSON(object: any): QueryGetEraSnapshotRequest {
    const message = {
      ...baseQueryGetEraSnapshotRequest,
    } as QueryGetEraSnapshotRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    return message;
  },

  toJSON(message: QueryGetEraSnapshotRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraSnapshotRequest>
  ): QueryGetEraSnapshotRequest {
    const message = {
      ...baseQueryGetEraSnapshotRequest,
    } as QueryGetEraSnapshotRequest;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  },
};

const baseQueryGetEraSnapshotResponse: object = { shotIds: "" };

export const QueryGetEraSnapshotResponse = {
  encode(
    message: QueryGetEraSnapshotResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.shotIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetEraSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEraSnapshotResponse,
    } as QueryGetEraSnapshotResponse;
    message.shotIds = [];
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

  fromJSON(object: any): QueryGetEraSnapshotResponse {
    const message = {
      ...baseQueryGetEraSnapshotResponse,
    } as QueryGetEraSnapshotResponse;
    message.shotIds = (object.shotIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QueryGetEraSnapshotResponse): unknown {
    const obj: any = {};
    if (message.shotIds) {
      obj.shotIds = message.shotIds.map((e) => e);
    } else {
      obj.shotIds = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEraSnapshotResponse>
  ): QueryGetEraSnapshotResponse {
    const message = {
      ...baseQueryGetEraSnapshotResponse,
    } as QueryGetEraSnapshotResponse;
    message.shotIds = (object.shotIds ?? []).map((e) => e);
    return message;
  },
};

const baseQueryGetSnapshotRequest: object = { shotId: "" };

export const QueryGetSnapshotRequest = {
  encode(
    message: QueryGetSnapshotRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shotId !== "") {
      writer.uint32(10).string(message.shotId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSnapshotRequest,
    } as QueryGetSnapshotRequest;
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

  fromJSON(object: any): QueryGetSnapshotRequest {
    const message = {
      ...baseQueryGetSnapshotRequest,
    } as QueryGetSnapshotRequest;
    message.shotId =
      object.shotId !== undefined && object.shotId !== null
        ? String(object.shotId)
        : "";
    return message;
  },

  toJSON(message: QueryGetSnapshotRequest): unknown {
    const obj: any = {};
    message.shotId !== undefined && (obj.shotId = message.shotId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSnapshotRequest>
  ): QueryGetSnapshotRequest {
    const message = {
      ...baseQueryGetSnapshotRequest,
    } as QueryGetSnapshotRequest;
    message.shotId = object.shotId ?? "";
    return message;
  },
};

const baseQueryGetSnapshotResponse: object = {};

export const QueryGetSnapshotResponse = {
  encode(
    message: QueryGetSnapshotResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shot !== undefined) {
      BondSnapshot.encode(message.shot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSnapshotResponse,
    } as QueryGetSnapshotResponse;
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

  fromJSON(object: any): QueryGetSnapshotResponse {
    const message = {
      ...baseQueryGetSnapshotResponse,
    } as QueryGetSnapshotResponse;
    message.shot =
      object.shot !== undefined && object.shot !== null
        ? BondSnapshot.fromJSON(object.shot)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetSnapshotResponse): unknown {
    const obj: any = {};
    message.shot !== undefined &&
      (obj.shot = message.shot ? BondSnapshot.toJSON(message.shot) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSnapshotResponse>
  ): QueryGetSnapshotResponse {
    const message = {
      ...baseQueryGetSnapshotResponse,
    } as QueryGetSnapshotResponse;
    message.shot =
      object.shot !== undefined && object.shot !== null
        ? BondSnapshot.fromPartial(object.shot)
        : undefined;
    return message;
  },
};

const baseQueryGetTotalExpectedActiveRequest: object = { denom: "", era: 0 };

export const QueryGetTotalExpectedActiveRequest = {
  encode(
    message: QueryGetTotalExpectedActiveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTotalExpectedActiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTotalExpectedActiveRequest,
    } as QueryGetTotalExpectedActiveRequest;
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

  fromJSON(object: any): QueryGetTotalExpectedActiveRequest {
    const message = {
      ...baseQueryGetTotalExpectedActiveRequest,
    } as QueryGetTotalExpectedActiveRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    return message;
  },

  toJSON(message: QueryGetTotalExpectedActiveRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTotalExpectedActiveRequest>
  ): QueryGetTotalExpectedActiveRequest {
    const message = {
      ...baseQueryGetTotalExpectedActiveRequest,
    } as QueryGetTotalExpectedActiveRequest;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  },
};

const baseQueryGetTotalExpectedActiveResponse: object = { active: "" };

export const QueryGetTotalExpectedActiveResponse = {
  encode(
    message: QueryGetTotalExpectedActiveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.active !== "") {
      writer.uint32(10).string(message.active);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTotalExpectedActiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTotalExpectedActiveResponse,
    } as QueryGetTotalExpectedActiveResponse;
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

  fromJSON(object: any): QueryGetTotalExpectedActiveResponse {
    const message = {
      ...baseQueryGetTotalExpectedActiveResponse,
    } as QueryGetTotalExpectedActiveResponse;
    message.active =
      object.active !== undefined && object.active !== null
        ? String(object.active)
        : "";
    return message;
  },

  toJSON(message: QueryGetTotalExpectedActiveResponse): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTotalExpectedActiveResponse>
  ): QueryGetTotalExpectedActiveResponse {
    const message = {
      ...baseQueryGetTotalExpectedActiveResponse,
    } as QueryGetTotalExpectedActiveResponse;
    message.active = object.active ?? "";
    return message;
  },
};

const baseQueryGetBondRecordRequest: object = { denom: "", txhash: "" };

export const QueryGetBondRecordRequest = {
  encode(
    message: QueryGetBondRecordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBondRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBondRecordRequest,
    } as QueryGetBondRecordRequest;
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

  fromJSON(object: any): QueryGetBondRecordRequest {
    const message = {
      ...baseQueryGetBondRecordRequest,
    } as QueryGetBondRecordRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.txhash =
      object.txhash !== undefined && object.txhash !== null
        ? String(object.txhash)
        : "";
    return message;
  },

  toJSON(message: QueryGetBondRecordRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.txhash !== undefined && (obj.txhash = message.txhash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBondRecordRequest>
  ): QueryGetBondRecordRequest {
    const message = {
      ...baseQueryGetBondRecordRequest,
    } as QueryGetBondRecordRequest;
    message.denom = object.denom ?? "";
    message.txhash = object.txhash ?? "";
    return message;
  },
};

const baseQueryGetBondRecordResponse: object = {};

export const QueryGetBondRecordResponse = {
  encode(
    message: QueryGetBondRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bondRecord !== undefined) {
      BondRecord.encode(message.bondRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBondRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBondRecordResponse,
    } as QueryGetBondRecordResponse;
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

  fromJSON(object: any): QueryGetBondRecordResponse {
    const message = {
      ...baseQueryGetBondRecordResponse,
    } as QueryGetBondRecordResponse;
    message.bondRecord =
      object.bondRecord !== undefined && object.bondRecord !== null
        ? BondRecord.fromJSON(object.bondRecord)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetBondRecordResponse): unknown {
    const obj: any = {};
    message.bondRecord !== undefined &&
      (obj.bondRecord = message.bondRecord
        ? BondRecord.toJSON(message.bondRecord)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBondRecordResponse>
  ): QueryGetBondRecordResponse {
    const message = {
      ...baseQueryGetBondRecordResponse,
    } as QueryGetBondRecordResponse;
    message.bondRecord =
      object.bondRecord !== undefined && object.bondRecord !== null
        ? BondRecord.fromPartial(object.bondRecord)
        : undefined;
    return message;
  },
};

const baseQueryGetSignatureRequest: object = {
  denom: "",
  era: 0,
  pool: "",
  txType: 0,
  propId: "",
};

export const QueryGetSignatureRequest = {
  encode(
    message: QueryGetSignatureRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSignatureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSignatureRequest,
    } as QueryGetSignatureRequest;
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
          message.txType = reader.int32() as any;
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

  fromJSON(object: any): QueryGetSignatureRequest {
    const message = {
      ...baseQueryGetSignatureRequest,
    } as QueryGetSignatureRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.txType =
      object.txType !== undefined && object.txType !== null
        ? originalTxTypeFromJSON(object.txType)
        : 0;
    message.propId =
      object.propId !== undefined && object.propId !== null
        ? String(object.propId)
        : "";
    return message;
  },

  toJSON(message: QueryGetSignatureRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.pool !== undefined && (obj.pool = message.pool);
    message.txType !== undefined &&
      (obj.txType = originalTxTypeToJSON(message.txType));
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSignatureRequest>
  ): QueryGetSignatureRequest {
    const message = {
      ...baseQueryGetSignatureRequest,
    } as QueryGetSignatureRequest;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    return message;
  },
};

const baseQueryGetSignatureResponse: object = {};

export const QueryGetSignatureResponse = {
  encode(
    message: QueryGetSignatureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signature !== undefined) {
      Signature.encode(message.signature, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSignatureResponse,
    } as QueryGetSignatureResponse;
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

  fromJSON(object: any): QueryGetSignatureResponse {
    const message = {
      ...baseQueryGetSignatureResponse,
    } as QueryGetSignatureResponse;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Signature.fromJSON(object.signature)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetSignatureResponse): unknown {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = message.signature
        ? Signature.toJSON(message.signature)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSignatureResponse>
  ): QueryGetSignatureResponse {
    const message = {
      ...baseQueryGetSignatureResponse,
    } as QueryGetSignatureResponse;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Signature.fromPartial(object.signature)
        : undefined;
    return message;
  },
};

const baseQueryGetRParamsRequest: object = { denom: "" };

export const QueryGetRParamsRequest = {
  encode(
    message: QueryGetRParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRParamsRequest } as QueryGetRParamsRequest;
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

  fromJSON(object: any): QueryGetRParamsRequest {
    const message = { ...baseQueryGetRParamsRequest } as QueryGetRParamsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetRParamsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRParamsRequest>
  ): QueryGetRParamsRequest {
    const message = { ...baseQueryGetRParamsRequest } as QueryGetRParamsRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetRParamsResponse: object = {};

export const QueryGetRParamsResponse = {
  encode(
    message: QueryGetRParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rParams !== undefined) {
      RParams.encode(message.rParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRParamsResponse,
    } as QueryGetRParamsResponse;
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

  fromJSON(object: any): QueryGetRParamsResponse {
    const message = {
      ...baseQueryGetRParamsResponse,
    } as QueryGetRParamsResponse;
    message.rParams =
      object.rParams !== undefined && object.rParams !== null
        ? RParams.fromJSON(object.rParams)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetRParamsResponse): unknown {
    const obj: any = {};
    message.rParams !== undefined &&
      (obj.rParams = message.rParams
        ? RParams.toJSON(message.rParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRParamsResponse>
  ): QueryGetRParamsResponse {
    const message = {
      ...baseQueryGetRParamsResponse,
    } as QueryGetRParamsResponse;
    message.rParams =
      object.rParams !== undefined && object.rParams !== null
        ? RParams.fromPartial(object.rParams)
        : undefined;
    return message;
  },
};

const baseQueryTotalProtocolFeeRequest: object = {};

export const QueryTotalProtocolFeeRequest = {
  encode(
    _: QueryTotalProtocolFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalProtocolFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalProtocolFeeRequest,
    } as QueryTotalProtocolFeeRequest;
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

  fromJSON(_: any): QueryTotalProtocolFeeRequest {
    const message = {
      ...baseQueryTotalProtocolFeeRequest,
    } as QueryTotalProtocolFeeRequest;
    return message;
  },

  toJSON(_: QueryTotalProtocolFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalProtocolFeeRequest>
  ): QueryTotalProtocolFeeRequest {
    const message = {
      ...baseQueryTotalProtocolFeeRequest,
    } as QueryTotalProtocolFeeRequest;
    return message;
  },
};

const baseQueryTotalProtocolFeeResponse: object = {};

export const QueryTotalProtocolFeeResponse = {
  encode(
    message: QueryTotalProtocolFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.totalProtocolFeeList) {
      TotalProtocolFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalProtocolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalProtocolFeeResponse,
    } as QueryTotalProtocolFeeResponse;
    message.totalProtocolFeeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalProtocolFeeList.push(
            TotalProtocolFee.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalProtocolFeeResponse {
    const message = {
      ...baseQueryTotalProtocolFeeResponse,
    } as QueryTotalProtocolFeeResponse;
    message.totalProtocolFeeList = (object.totalProtocolFeeList ?? []).map(
      (e: any) => TotalProtocolFee.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryTotalProtocolFeeResponse): unknown {
    const obj: any = {};
    if (message.totalProtocolFeeList) {
      obj.totalProtocolFeeList = message.totalProtocolFeeList.map((e) =>
        e ? TotalProtocolFee.toJSON(e) : undefined
      );
    } else {
      obj.totalProtocolFeeList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalProtocolFeeResponse>
  ): QueryTotalProtocolFeeResponse {
    const message = {
      ...baseQueryTotalProtocolFeeResponse,
    } as QueryTotalProtocolFeeResponse;
    message.totalProtocolFeeList = (object.totalProtocolFeeList ?? []).map(
      (e) => TotalProtocolFee.fromPartial(e)
    );
    return message;
  },
};

const baseQueryRelayFeeReceiverRequest: object = { denom: "" };

export const QueryRelayFeeReceiverRequest = {
  encode(
    message: QueryRelayFeeReceiverRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelayFeeReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRelayFeeReceiverRequest,
    } as QueryRelayFeeReceiverRequest;
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

  fromJSON(object: any): QueryRelayFeeReceiverRequest {
    const message = {
      ...baseQueryRelayFeeReceiverRequest,
    } as QueryRelayFeeReceiverRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryRelayFeeReceiverRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRelayFeeReceiverRequest>
  ): QueryRelayFeeReceiverRequest {
    const message = {
      ...baseQueryRelayFeeReceiverRequest,
    } as QueryRelayFeeReceiverRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryRelayFeeReceiverResponse: object = { receiver: "" };

export const QueryRelayFeeReceiverResponse = {
  encode(
    message: QueryRelayFeeReceiverResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRelayFeeReceiverResponse,
    } as QueryRelayFeeReceiverResponse;
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

  fromJSON(object: any): QueryRelayFeeReceiverResponse {
    const message = {
      ...baseQueryRelayFeeReceiverResponse,
    } as QueryRelayFeeReceiverResponse;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: QueryRelayFeeReceiverResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRelayFeeReceiverResponse>
  ): QueryRelayFeeReceiverResponse {
    const message = {
      ...baseQueryRelayFeeReceiverResponse,
    } as QueryRelayFeeReceiverResponse;
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseQueryUnbondSwitchRequest: object = { denom: "" };

export const QueryUnbondSwitchRequest = {
  encode(
    message: QueryUnbondSwitchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnbondSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnbondSwitchRequest,
    } as QueryUnbondSwitchRequest;
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

  fromJSON(object: any): QueryUnbondSwitchRequest {
    const message = {
      ...baseQueryUnbondSwitchRequest,
    } as QueryUnbondSwitchRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryUnbondSwitchRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnbondSwitchRequest>
  ): QueryUnbondSwitchRequest {
    const message = {
      ...baseQueryUnbondSwitchRequest,
    } as QueryUnbondSwitchRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryUnbondSwitchResponse: object = { isOpen: false };

export const QueryUnbondSwitchResponse = {
  encode(
    message: QueryUnbondSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isOpen === true) {
      writer.uint32(8).bool(message.isOpen);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnbondSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnbondSwitchResponse,
    } as QueryUnbondSwitchResponse;
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

  fromJSON(object: any): QueryUnbondSwitchResponse {
    const message = {
      ...baseQueryUnbondSwitchResponse,
    } as QueryUnbondSwitchResponse;
    message.isOpen =
      object.isOpen !== undefined && object.isOpen !== null
        ? Boolean(object.isOpen)
        : false;
    return message;
  },

  toJSON(message: QueryUnbondSwitchResponse): unknown {
    const obj: any = {};
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnbondSwitchResponse>
  ): QueryUnbondSwitchResponse {
    const message = {
      ...baseQueryUnbondSwitchResponse,
    } as QueryUnbondSwitchResponse;
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

const baseQueryPoolUnbondNextSequenceRequest: object = {
  denom: "",
  pool: "",
  unlockEra: 0,
};

export const QueryPoolUnbondNextSequenceRequest = {
  encode(
    message: QueryPoolUnbondNextSequenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolUnbondNextSequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolUnbondNextSequenceRequest,
    } as QueryPoolUnbondNextSequenceRequest;
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

  fromJSON(object: any): QueryPoolUnbondNextSequenceRequest {
    const message = {
      ...baseQueryPoolUnbondNextSequenceRequest,
    } as QueryPoolUnbondNextSequenceRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.unlockEra =
      object.unlockEra !== undefined && object.unlockEra !== null
        ? Number(object.unlockEra)
        : 0;
    return message;
  },

  toJSON(message: QueryPoolUnbondNextSequenceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.unlockEra !== undefined && (obj.unlockEra = message.unlockEra);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolUnbondNextSequenceRequest>
  ): QueryPoolUnbondNextSequenceRequest {
    const message = {
      ...baseQueryPoolUnbondNextSequenceRequest,
    } as QueryPoolUnbondNextSequenceRequest;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.unlockEra = object.unlockEra ?? 0;
    return message;
  },
};

const baseQueryPoolUnbondNextSequenceResponse: object = { nextSequence: 0 };

export const QueryPoolUnbondNextSequenceResponse = {
  encode(
    message: QueryPoolUnbondNextSequenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nextSequence !== 0) {
      writer.uint32(8).uint32(message.nextSequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolUnbondNextSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolUnbondNextSequenceResponse,
    } as QueryPoolUnbondNextSequenceResponse;
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

  fromJSON(object: any): QueryPoolUnbondNextSequenceResponse {
    const message = {
      ...baseQueryPoolUnbondNextSequenceResponse,
    } as QueryPoolUnbondNextSequenceResponse;
    message.nextSequence =
      object.nextSequence !== undefined && object.nextSequence !== null
        ? Number(object.nextSequence)
        : 0;
    return message;
  },

  toJSON(message: QueryPoolUnbondNextSequenceResponse): unknown {
    const obj: any = {};
    message.nextSequence !== undefined &&
      (obj.nextSequence = message.nextSequence);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolUnbondNextSequenceResponse>
  ): QueryPoolUnbondNextSequenceResponse {
    const message = {
      ...baseQueryPoolUnbondNextSequenceResponse,
    } as QueryPoolUnbondNextSequenceResponse;
    message.nextSequence = object.nextSequence ?? 0;
    return message;
  },
};

const baseQueryPoolUnbondingsRequest: object = {
  denom: "",
  pool: "",
  unlockEra: 0,
};

export const QueryPoolUnbondingsRequest = {
  encode(
    message: QueryPoolUnbondingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolUnbondingsRequest,
    } as QueryPoolUnbondingsRequest;
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

  fromJSON(object: any): QueryPoolUnbondingsRequest {
    const message = {
      ...baseQueryPoolUnbondingsRequest,
    } as QueryPoolUnbondingsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.unlockEra =
      object.unlockEra !== undefined && object.unlockEra !== null
        ? Number(object.unlockEra)
        : 0;
    return message;
  },

  toJSON(message: QueryPoolUnbondingsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.unlockEra !== undefined && (obj.unlockEra = message.unlockEra);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolUnbondingsRequest>
  ): QueryPoolUnbondingsRequest {
    const message = {
      ...baseQueryPoolUnbondingsRequest,
    } as QueryPoolUnbondingsRequest;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.unlockEra = object.unlockEra ?? 0;
    return message;
  },
};

const baseQueryPoolUnbondingsResponse: object = {};

export const QueryPoolUnbondingsResponse = {
  encode(
    message: QueryPoolUnbondingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolUnbondingsResponse,
    } as QueryPoolUnbondingsResponse;
    message.unbondings = [];
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

  fromJSON(object: any): QueryPoolUnbondingsResponse {
    const message = {
      ...baseQueryPoolUnbondingsResponse,
    } as QueryPoolUnbondingsResponse;
    message.unbondings = (object.unbondings ?? []).map((e: any) =>
      Unbonding.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryPoolUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) =>
        e ? Unbonding.toJSON(e) : undefined
      );
    } else {
      obj.unbondings = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolUnbondingsResponse>
  ): QueryPoolUnbondingsResponse {
    const message = {
      ...baseQueryPoolUnbondingsResponse,
    } as QueryPoolUnbondingsResponse;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      Unbonding.fromPartial(e)
    );
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of getExchangeRate items. */
  GetExchangeRate(
    request: QueryGetExchangeRateRequest
  ): Promise<QueryGetExchangeRateResponse>;
  /** Queries a list of exchangeRateAll items. */
  ExchangeRateAll(
    request: QueryExchangeRateAllRequest
  ): Promise<QueryExchangeRateAllResponse>;
  /** Queries a list of getEraExchangeRate items. */
  GetEraExchangeRate(
    request: QueryGetEraExchangeRateRequest
  ): Promise<QueryGetEraExchangeRateResponse>;
  /** Queries a list of eraExchangeRatesByDenom items. */
  EraExchangeRatesByDenom(
    request: QueryEraExchangeRatesByDenomRequest
  ): Promise<QueryEraExchangeRatesByDenomResponse>;
  /** Queries a list of bondedPoolsByDenom items. */
  BondedPoolsByDenom(
    request: QueryBondedPoolsByDenomRequest
  ): Promise<QueryBondedPoolsByDenomResponse>;
  /** Queries a list of getPoolDetail items. */
  GetPoolDetail(
    request: QueryGetPoolDetailRequest
  ): Promise<QueryGetPoolDetailResponse>;
  /** Queries a list of getChainEra items. */
  GetChainEra(
    request: QueryGetChainEraRequest
  ): Promise<QueryGetChainEraResponse>;
  /** Queries a list of getCurrentEraSnapshot items. */
  GetCurrentEraSnapshot(
    request: QueryGetCurrentEraSnapshotRequest
  ): Promise<QueryGetCurrentEraSnapshotResponse>;
  /** Queries a list of getReceiver items. */
  GetProtocolFeeReceiver(
    request: QueryGetProtocolFeeReceiverRequest
  ): Promise<QueryGetProtocolFeeReceiverResponse>;
  /** Queries a list of getCommission items. */
  GetStakingRewardCommission(
    request: QueryGetStakingRewardCommissionRequest
  ): Promise<QueryGetStakingRewardCommissionResponse>;
  /** Queries a list of getUnbondFee items. */
  GetUnbondRelayFee(
    request: QueryGetUnbondRelayFeeRequest
  ): Promise<QueryGetUnbondRelayFeeResponse>;
  /** Queries a list of getUnbondCommission items. */
  GetUnbondCommission(
    request: QueryGetUnbondCommissionRequest
  ): Promise<QueryGetUnbondCommissionResponse>;
  /** Queries a list of getEraUnbondLimit items. */
  GetEraUnbondLimit(
    request: QueryGetEraUnbondLimitRequest
  ): Promise<QueryGetEraUnbondLimitResponse>;
  /** Queries a list of getBondPipeline items. */
  GetBondPipeline(
    request: QueryGetBondPipelineRequest
  ): Promise<QueryGetBondPipelineResponse>;
  /** Queries a list of getEraSnapshot items. */
  GetEraSnapshot(
    request: QueryGetEraSnapshotRequest
  ): Promise<QueryGetEraSnapshotResponse>;
  /** Queries a list of getSnapshot items. */
  GetSnapshot(
    request: QueryGetSnapshotRequest
  ): Promise<QueryGetSnapshotResponse>;
  /** Queries a list of getTotalExpectedActive items. */
  GetTotalExpectedActive(
    request: QueryGetTotalExpectedActiveRequest
  ): Promise<QueryGetTotalExpectedActiveResponse>;
  /** Queries a list of getBondRecord items. */
  GetBondRecord(
    request: QueryGetBondRecordRequest
  ): Promise<QueryGetBondRecordResponse>;
  /** Queries a list of getSignature items. */
  GetSignature(
    request: QueryGetSignatureRequest
  ): Promise<QueryGetSignatureResponse>;
  /** Queries a list of GetRParams items. */
  GetRParams(request: QueryGetRParamsRequest): Promise<QueryGetRParamsResponse>;
  /** Queries a list of TotalFeeList items. */
  TotalProtocolFee(
    request: QueryTotalProtocolFeeRequest
  ): Promise<QueryTotalProtocolFeeResponse>;
  /** Queries a list of RelayFeeReceiver items. */
  RelayFeeReceiver(
    request: QueryRelayFeeReceiverRequest
  ): Promise<QueryRelayFeeReceiverResponse>;
  /** Queries a list of UnbondSwitch items. */
  UnbondSwitch(
    request: QueryUnbondSwitchRequest
  ): Promise<QueryUnbondSwitchResponse>;
  /** Queries a list of PoolUnbondNextSequence items. */
  PoolUnbondNextSequence(
    request: QueryPoolUnbondNextSequenceRequest
  ): Promise<QueryPoolUnbondNextSequenceResponse>;
  /** Queries a list of PoolUnbondings items. */
  PoolUnbondings(
    request: QueryPoolUnbondingsRequest
  ): Promise<QueryPoolUnbondingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetExchangeRate = this.GetExchangeRate.bind(this);
    this.ExchangeRateAll = this.ExchangeRateAll.bind(this);
    this.GetEraExchangeRate = this.GetEraExchangeRate.bind(this);
    this.EraExchangeRatesByDenom = this.EraExchangeRatesByDenom.bind(this);
    this.BondedPoolsByDenom = this.BondedPoolsByDenom.bind(this);
    this.GetPoolDetail = this.GetPoolDetail.bind(this);
    this.GetChainEra = this.GetChainEra.bind(this);
    this.GetCurrentEraSnapshot = this.GetCurrentEraSnapshot.bind(this);
    this.GetProtocolFeeReceiver = this.GetProtocolFeeReceiver.bind(this);
    this.GetStakingRewardCommission =
      this.GetStakingRewardCommission.bind(this);
    this.GetUnbondRelayFee = this.GetUnbondRelayFee.bind(this);
    this.GetUnbondCommission = this.GetUnbondCommission.bind(this);
    this.GetEraUnbondLimit = this.GetEraUnbondLimit.bind(this);
    this.GetBondPipeline = this.GetBondPipeline.bind(this);
    this.GetEraSnapshot = this.GetEraSnapshot.bind(this);
    this.GetSnapshot = this.GetSnapshot.bind(this);
    this.GetTotalExpectedActive = this.GetTotalExpectedActive.bind(this);
    this.GetBondRecord = this.GetBondRecord.bind(this);
    this.GetSignature = this.GetSignature.bind(this);
    this.GetRParams = this.GetRParams.bind(this);
    this.TotalProtocolFee = this.TotalProtocolFee.bind(this);
    this.RelayFeeReceiver = this.RelayFeeReceiver.bind(this);
    this.UnbondSwitch = this.UnbondSwitch.bind(this);
    this.PoolUnbondNextSequence = this.PoolUnbondNextSequence.bind(this);
    this.PoolUnbondings = this.PoolUnbondings.bind(this);
  }
  GetExchangeRate(
    request: QueryGetExchangeRateRequest
  ): Promise<QueryGetExchangeRateResponse> {
    const data = QueryGetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetExchangeRate",
      data
    );
    return promise.then((data) =>
      QueryGetExchangeRateResponse.decode(new _m0.Reader(data))
    );
  }

  ExchangeRateAll(
    request: QueryExchangeRateAllRequest
  ): Promise<QueryExchangeRateAllResponse> {
    const data = QueryExchangeRateAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "ExchangeRateAll",
      data
    );
    return promise.then((data) =>
      QueryExchangeRateAllResponse.decode(new _m0.Reader(data))
    );
  }

  GetEraExchangeRate(
    request: QueryGetEraExchangeRateRequest
  ): Promise<QueryGetEraExchangeRateResponse> {
    const data = QueryGetEraExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetEraExchangeRate",
      data
    );
    return promise.then((data) =>
      QueryGetEraExchangeRateResponse.decode(new _m0.Reader(data))
    );
  }

  EraExchangeRatesByDenom(
    request: QueryEraExchangeRatesByDenomRequest
  ): Promise<QueryEraExchangeRatesByDenomResponse> {
    const data = QueryEraExchangeRatesByDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "EraExchangeRatesByDenom",
      data
    );
    return promise.then((data) =>
      QueryEraExchangeRatesByDenomResponse.decode(new _m0.Reader(data))
    );
  }

  BondedPoolsByDenom(
    request: QueryBondedPoolsByDenomRequest
  ): Promise<QueryBondedPoolsByDenomResponse> {
    const data = QueryBondedPoolsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "BondedPoolsByDenom",
      data
    );
    return promise.then((data) =>
      QueryBondedPoolsByDenomResponse.decode(new _m0.Reader(data))
    );
  }

  GetPoolDetail(
    request: QueryGetPoolDetailRequest
  ): Promise<QueryGetPoolDetailResponse> {
    const data = QueryGetPoolDetailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetPoolDetail",
      data
    );
    return promise.then((data) =>
      QueryGetPoolDetailResponse.decode(new _m0.Reader(data))
    );
  }

  GetChainEra(
    request: QueryGetChainEraRequest
  ): Promise<QueryGetChainEraResponse> {
    const data = QueryGetChainEraRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetChainEra",
      data
    );
    return promise.then((data) =>
      QueryGetChainEraResponse.decode(new _m0.Reader(data))
    );
  }

  GetCurrentEraSnapshot(
    request: QueryGetCurrentEraSnapshotRequest
  ): Promise<QueryGetCurrentEraSnapshotResponse> {
    const data = QueryGetCurrentEraSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetCurrentEraSnapshot",
      data
    );
    return promise.then((data) =>
      QueryGetCurrentEraSnapshotResponse.decode(new _m0.Reader(data))
    );
  }

  GetProtocolFeeReceiver(
    request: QueryGetProtocolFeeReceiverRequest
  ): Promise<QueryGetProtocolFeeReceiverResponse> {
    const data = QueryGetProtocolFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetProtocolFeeReceiver",
      data
    );
    return promise.then((data) =>
      QueryGetProtocolFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  GetStakingRewardCommission(
    request: QueryGetStakingRewardCommissionRequest
  ): Promise<QueryGetStakingRewardCommissionResponse> {
    const data =
      QueryGetStakingRewardCommissionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetStakingRewardCommission",
      data
    );
    return promise.then((data) =>
      QueryGetStakingRewardCommissionResponse.decode(new _m0.Reader(data))
    );
  }

  GetUnbondRelayFee(
    request: QueryGetUnbondRelayFeeRequest
  ): Promise<QueryGetUnbondRelayFeeResponse> {
    const data = QueryGetUnbondRelayFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetUnbondRelayFee",
      data
    );
    return promise.then((data) =>
      QueryGetUnbondRelayFeeResponse.decode(new _m0.Reader(data))
    );
  }

  GetUnbondCommission(
    request: QueryGetUnbondCommissionRequest
  ): Promise<QueryGetUnbondCommissionResponse> {
    const data = QueryGetUnbondCommissionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetUnbondCommission",
      data
    );
    return promise.then((data) =>
      QueryGetUnbondCommissionResponse.decode(new _m0.Reader(data))
    );
  }

  GetEraUnbondLimit(
    request: QueryGetEraUnbondLimitRequest
  ): Promise<QueryGetEraUnbondLimitResponse> {
    const data = QueryGetEraUnbondLimitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetEraUnbondLimit",
      data
    );
    return promise.then((data) =>
      QueryGetEraUnbondLimitResponse.decode(new _m0.Reader(data))
    );
  }

  GetBondPipeline(
    request: QueryGetBondPipelineRequest
  ): Promise<QueryGetBondPipelineResponse> {
    const data = QueryGetBondPipelineRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetBondPipeline",
      data
    );
    return promise.then((data) =>
      QueryGetBondPipelineResponse.decode(new _m0.Reader(data))
    );
  }

  GetEraSnapshot(
    request: QueryGetEraSnapshotRequest
  ): Promise<QueryGetEraSnapshotResponse> {
    const data = QueryGetEraSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetEraSnapshot",
      data
    );
    return promise.then((data) =>
      QueryGetEraSnapshotResponse.decode(new _m0.Reader(data))
    );
  }

  GetSnapshot(
    request: QueryGetSnapshotRequest
  ): Promise<QueryGetSnapshotResponse> {
    const data = QueryGetSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetSnapshot",
      data
    );
    return promise.then((data) =>
      QueryGetSnapshotResponse.decode(new _m0.Reader(data))
    );
  }

  GetTotalExpectedActive(
    request: QueryGetTotalExpectedActiveRequest
  ): Promise<QueryGetTotalExpectedActiveResponse> {
    const data = QueryGetTotalExpectedActiveRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetTotalExpectedActive",
      data
    );
    return promise.then((data) =>
      QueryGetTotalExpectedActiveResponse.decode(new _m0.Reader(data))
    );
  }

  GetBondRecord(
    request: QueryGetBondRecordRequest
  ): Promise<QueryGetBondRecordResponse> {
    const data = QueryGetBondRecordRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetBondRecord",
      data
    );
    return promise.then((data) =>
      QueryGetBondRecordResponse.decode(new _m0.Reader(data))
    );
  }

  GetSignature(
    request: QueryGetSignatureRequest
  ): Promise<QueryGetSignatureResponse> {
    const data = QueryGetSignatureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetSignature",
      data
    );
    return promise.then((data) =>
      QueryGetSignatureResponse.decode(new _m0.Reader(data))
    );
  }

  GetRParams(
    request: QueryGetRParamsRequest
  ): Promise<QueryGetRParamsResponse> {
    const data = QueryGetRParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "GetRParams",
      data
    );
    return promise.then((data) =>
      QueryGetRParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TotalProtocolFee(
    request: QueryTotalProtocolFeeRequest
  ): Promise<QueryTotalProtocolFeeResponse> {
    const data = QueryTotalProtocolFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "TotalProtocolFee",
      data
    );
    return promise.then((data) =>
      QueryTotalProtocolFeeResponse.decode(new _m0.Reader(data))
    );
  }

  RelayFeeReceiver(
    request: QueryRelayFeeReceiverRequest
  ): Promise<QueryRelayFeeReceiverResponse> {
    const data = QueryRelayFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "RelayFeeReceiver",
      data
    );
    return promise.then((data) =>
      QueryRelayFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  UnbondSwitch(
    request: QueryUnbondSwitchRequest
  ): Promise<QueryUnbondSwitchResponse> {
    const data = QueryUnbondSwitchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "UnbondSwitch",
      data
    );
    return promise.then((data) =>
      QueryUnbondSwitchResponse.decode(new _m0.Reader(data))
    );
  }

  PoolUnbondNextSequence(
    request: QueryPoolUnbondNextSequenceRequest
  ): Promise<QueryPoolUnbondNextSequenceResponse> {
    const data = QueryPoolUnbondNextSequenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "PoolUnbondNextSequence",
      data
    );
    return promise.then((data) =>
      QueryPoolUnbondNextSequenceResponse.decode(new _m0.Reader(data))
    );
  }

  PoolUnbondings(
    request: QueryPoolUnbondingsRequest
  ): Promise<QueryPoolUnbondingsResponse> {
    const data = QueryPoolUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Query",
      "PoolUnbondings",
      data
    );
    return promise.then((data) =>
      QueryPoolUnbondingsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

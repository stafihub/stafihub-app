/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../rmintreward/params";
import { MintRewardAct, Acts, UserClaimInfo } from "../rmintreward/models";

export const protobufPackage = "stafihub.stafihub.rmintreward";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryActLatestCycleRequest {
  denom: string;
}

export interface QueryActLatestCycleResponse {
  latestCycle: Long;
}

export interface QueryActDetailRequest {
  denom: string;
  cycle: Long;
}

export interface QueryActDetailResponse {
  act?: MintRewardAct;
}

export interface QueryUserMintCountRequest {
  address: string;
  denom: string;
  cycle: Long;
}

export interface QueryUserMintCountResponse {
  count: Long;
}

export interface QueryUserActsRequest {
  address: string;
  denom: string;
}

export interface QueryUserActsResponse {
  acts?: Acts;
}

export interface QueryActCurrentCycleRequest {
  denom: string;
}

export interface QueryActCurrentCycleResponse {
  currentCycle: Long;
}

export interface QueryClaimInfoDetailRequest {
  address: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}

export interface QueryClaimInfoDetailResponse {
  claimInfo?: UserClaimInfo;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryActLatestCycleRequest: object = { denom: "" };

export const QueryActLatestCycleRequest = {
  encode(
    message: QueryActLatestCycleRequest,
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
  ): QueryActLatestCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActLatestCycleRequest,
    } as QueryActLatestCycleRequest;
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

  fromJSON(object: any): QueryActLatestCycleRequest {
    const message = {
      ...baseQueryActLatestCycleRequest,
    } as QueryActLatestCycleRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryActLatestCycleRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActLatestCycleRequest>
  ): QueryActLatestCycleRequest {
    const message = {
      ...baseQueryActLatestCycleRequest,
    } as QueryActLatestCycleRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryActLatestCycleResponse: object = { latestCycle: Long.UZERO };

export const QueryActLatestCycleResponse = {
  encode(
    message: QueryActLatestCycleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.latestCycle.isZero()) {
      writer.uint32(8).uint64(message.latestCycle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActLatestCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActLatestCycleResponse,
    } as QueryActLatestCycleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestCycle = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActLatestCycleResponse {
    const message = {
      ...baseQueryActLatestCycleResponse,
    } as QueryActLatestCycleResponse;
    message.latestCycle =
      object.latestCycle !== undefined && object.latestCycle !== null
        ? Long.fromString(object.latestCycle)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryActLatestCycleResponse): unknown {
    const obj: any = {};
    message.latestCycle !== undefined &&
      (obj.latestCycle = (message.latestCycle || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActLatestCycleResponse>
  ): QueryActLatestCycleResponse {
    const message = {
      ...baseQueryActLatestCycleResponse,
    } as QueryActLatestCycleResponse;
    message.latestCycle =
      object.latestCycle !== undefined && object.latestCycle !== null
        ? Long.fromValue(object.latestCycle)
        : Long.UZERO;
    return message;
  },
};

const baseQueryActDetailRequest: object = { denom: "", cycle: Long.UZERO };

export const QueryActDetailRequest = {
  encode(
    message: QueryActDetailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.cycle.isZero()) {
      writer.uint32(16).uint64(message.cycle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActDetailRequest } as QueryActDetailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cycle = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActDetailRequest {
    const message = { ...baseQueryActDetailRequest } as QueryActDetailRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromString(object.cycle)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryActDetailRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cycle !== undefined &&
      (obj.cycle = (message.cycle || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActDetailRequest>
  ): QueryActDetailRequest {
    const message = { ...baseQueryActDetailRequest } as QueryActDetailRequest;
    message.denom = object.denom ?? "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromValue(object.cycle)
        : Long.UZERO;
    return message;
  },
};

const baseQueryActDetailResponse: object = {};

export const QueryActDetailResponse = {
  encode(
    message: QueryActDetailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.act !== undefined) {
      MintRewardAct.encode(message.act, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActDetailResponse } as QueryActDetailResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.act = MintRewardAct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActDetailResponse {
    const message = { ...baseQueryActDetailResponse } as QueryActDetailResponse;
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardAct.fromJSON(object.act)
        : undefined;
    return message;
  },

  toJSON(message: QueryActDetailResponse): unknown {
    const obj: any = {};
    message.act !== undefined &&
      (obj.act = message.act ? MintRewardAct.toJSON(message.act) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActDetailResponse>
  ): QueryActDetailResponse {
    const message = { ...baseQueryActDetailResponse } as QueryActDetailResponse;
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardAct.fromPartial(object.act)
        : undefined;
    return message;
  },
};

const baseQueryUserMintCountRequest: object = {
  address: "",
  denom: "",
  cycle: Long.UZERO,
};

export const QueryUserMintCountRequest = {
  encode(
    message: QueryUserMintCountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.cycle.isZero()) {
      writer.uint32(24).uint64(message.cycle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserMintCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserMintCountRequest,
    } as QueryUserMintCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.cycle = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserMintCountRequest {
    const message = {
      ...baseQueryUserMintCountRequest,
    } as QueryUserMintCountRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromString(object.cycle)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryUserMintCountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cycle !== undefined &&
      (obj.cycle = (message.cycle || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserMintCountRequest>
  ): QueryUserMintCountRequest {
    const message = {
      ...baseQueryUserMintCountRequest,
    } as QueryUserMintCountRequest;
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromValue(object.cycle)
        : Long.UZERO;
    return message;
  },
};

const baseQueryUserMintCountResponse: object = { count: Long.UZERO };

export const QueryUserMintCountResponse = {
  encode(
    message: QueryUserMintCountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserMintCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserMintCountResponse,
    } as QueryUserMintCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserMintCountResponse {
    const message = {
      ...baseQueryUserMintCountResponse,
    } as QueryUserMintCountResponse;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromString(object.count)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryUserMintCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserMintCountResponse>
  ): QueryUserMintCountResponse {
    const message = {
      ...baseQueryUserMintCountResponse,
    } as QueryUserMintCountResponse;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
    return message;
  },
};

const baseQueryUserActsRequest: object = { address: "", denom: "" };

export const QueryUserActsRequest = {
  encode(
    message: QueryUserActsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserActsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserActsRequest } as QueryUserActsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserActsRequest {
    const message = { ...baseQueryUserActsRequest } as QueryUserActsRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryUserActsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserActsRequest>): QueryUserActsRequest {
    const message = { ...baseQueryUserActsRequest } as QueryUserActsRequest;
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryUserActsResponse: object = {};

export const QueryUserActsResponse = {
  encode(
    message: QueryUserActsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.acts !== undefined) {
      Acts.encode(message.acts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserActsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserActsResponse } as QueryUserActsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acts = Acts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserActsResponse {
    const message = { ...baseQueryUserActsResponse } as QueryUserActsResponse;
    message.acts =
      object.acts !== undefined && object.acts !== null
        ? Acts.fromJSON(object.acts)
        : undefined;
    return message;
  },

  toJSON(message: QueryUserActsResponse): unknown {
    const obj: any = {};
    message.acts !== undefined &&
      (obj.acts = message.acts ? Acts.toJSON(message.acts) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserActsResponse>
  ): QueryUserActsResponse {
    const message = { ...baseQueryUserActsResponse } as QueryUserActsResponse;
    message.acts =
      object.acts !== undefined && object.acts !== null
        ? Acts.fromPartial(object.acts)
        : undefined;
    return message;
  },
};

const baseQueryActCurrentCycleRequest: object = { denom: "" };

export const QueryActCurrentCycleRequest = {
  encode(
    message: QueryActCurrentCycleRequest,
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
  ): QueryActCurrentCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActCurrentCycleRequest,
    } as QueryActCurrentCycleRequest;
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

  fromJSON(object: any): QueryActCurrentCycleRequest {
    const message = {
      ...baseQueryActCurrentCycleRequest,
    } as QueryActCurrentCycleRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryActCurrentCycleRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActCurrentCycleRequest>
  ): QueryActCurrentCycleRequest {
    const message = {
      ...baseQueryActCurrentCycleRequest,
    } as QueryActCurrentCycleRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryActCurrentCycleResponse: object = { currentCycle: Long.UZERO };

export const QueryActCurrentCycleResponse = {
  encode(
    message: QueryActCurrentCycleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.currentCycle.isZero()) {
      writer.uint32(8).uint64(message.currentCycle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActCurrentCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryActCurrentCycleResponse,
    } as QueryActCurrentCycleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentCycle = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActCurrentCycleResponse {
    const message = {
      ...baseQueryActCurrentCycleResponse,
    } as QueryActCurrentCycleResponse;
    message.currentCycle =
      object.currentCycle !== undefined && object.currentCycle !== null
        ? Long.fromString(object.currentCycle)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryActCurrentCycleResponse): unknown {
    const obj: any = {};
    message.currentCycle !== undefined &&
      (obj.currentCycle = (message.currentCycle || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryActCurrentCycleResponse>
  ): QueryActCurrentCycleResponse {
    const message = {
      ...baseQueryActCurrentCycleResponse,
    } as QueryActCurrentCycleResponse;
    message.currentCycle =
      object.currentCycle !== undefined && object.currentCycle !== null
        ? Long.fromValue(object.currentCycle)
        : Long.UZERO;
    return message;
  },
};

const baseQueryClaimInfoDetailRequest: object = {
  address: "",
  denom: "",
  cycle: Long.UZERO,
  mintIndex: Long.UZERO,
};

export const QueryClaimInfoDetailRequest = {
  encode(
    message: QueryClaimInfoDetailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.cycle.isZero()) {
      writer.uint32(24).uint64(message.cycle);
    }
    if (!message.mintIndex.isZero()) {
      writer.uint32(32).uint64(message.mintIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimInfoDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimInfoDetailRequest,
    } as QueryClaimInfoDetailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.cycle = reader.uint64() as Long;
          break;
        case 4:
          message.mintIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimInfoDetailRequest {
    const message = {
      ...baseQueryClaimInfoDetailRequest,
    } as QueryClaimInfoDetailRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromString(object.cycle)
        : Long.UZERO;
    message.mintIndex =
      object.mintIndex !== undefined && object.mintIndex !== null
        ? Long.fromString(object.mintIndex)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryClaimInfoDetailRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cycle !== undefined &&
      (obj.cycle = (message.cycle || Long.UZERO).toString());
    message.mintIndex !== undefined &&
      (obj.mintIndex = (message.mintIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimInfoDetailRequest>
  ): QueryClaimInfoDetailRequest {
    const message = {
      ...baseQueryClaimInfoDetailRequest,
    } as QueryClaimInfoDetailRequest;
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromValue(object.cycle)
        : Long.UZERO;
    message.mintIndex =
      object.mintIndex !== undefined && object.mintIndex !== null
        ? Long.fromValue(object.mintIndex)
        : Long.UZERO;
    return message;
  },
};

const baseQueryClaimInfoDetailResponse: object = {};

export const QueryClaimInfoDetailResponse = {
  encode(
    message: QueryClaimInfoDetailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.claimInfo !== undefined) {
      UserClaimInfo.encode(
        message.claimInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimInfoDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimInfoDetailResponse,
    } as QueryClaimInfoDetailResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimInfo = UserClaimInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimInfoDetailResponse {
    const message = {
      ...baseQueryClaimInfoDetailResponse,
    } as QueryClaimInfoDetailResponse;
    message.claimInfo =
      object.claimInfo !== undefined && object.claimInfo !== null
        ? UserClaimInfo.fromJSON(object.claimInfo)
        : undefined;
    return message;
  },

  toJSON(message: QueryClaimInfoDetailResponse): unknown {
    const obj: any = {};
    message.claimInfo !== undefined &&
      (obj.claimInfo = message.claimInfo
        ? UserClaimInfo.toJSON(message.claimInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimInfoDetailResponse>
  ): QueryClaimInfoDetailResponse {
    const message = {
      ...baseQueryClaimInfoDetailResponse,
    } as QueryClaimInfoDetailResponse;
    message.claimInfo =
      object.claimInfo !== undefined && object.claimInfo !== null
        ? UserClaimInfo.fromPartial(object.claimInfo)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ActLatestCycle items. */
  ActLatestCycle(
    request: QueryActLatestCycleRequest
  ): Promise<QueryActLatestCycleResponse>;
  /** Queries a list of ActDetail items. */
  ActDetail(request: QueryActDetailRequest): Promise<QueryActDetailResponse>;
  /** Queries a list of UserMintCount items. */
  UserMintCount(
    request: QueryUserMintCountRequest
  ): Promise<QueryUserMintCountResponse>;
  /** Queries a list of UserActs items. */
  UserActs(request: QueryUserActsRequest): Promise<QueryUserActsResponse>;
  /** Queries a list of ActCurrentCycle items. */
  ActCurrentCycle(
    request: QueryActCurrentCycleRequest
  ): Promise<QueryActCurrentCycleResponse>;
  /** Queries a list of ClaimInfoDetail items. */
  ClaimInfoDetail(
    request: QueryClaimInfoDetailRequest
  ): Promise<QueryClaimInfoDetailResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ActLatestCycle = this.ActLatestCycle.bind(this);
    this.ActDetail = this.ActDetail.bind(this);
    this.UserMintCount = this.UserMintCount.bind(this);
    this.UserActs = this.UserActs.bind(this);
    this.ActCurrentCycle = this.ActCurrentCycle.bind(this);
    this.ClaimInfoDetail = this.ClaimInfoDetail.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ActLatestCycle(
    request: QueryActLatestCycleRequest
  ): Promise<QueryActLatestCycleResponse> {
    const data = QueryActLatestCycleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "ActLatestCycle",
      data
    );
    return promise.then((data) =>
      QueryActLatestCycleResponse.decode(new _m0.Reader(data))
    );
  }

  ActDetail(request: QueryActDetailRequest): Promise<QueryActDetailResponse> {
    const data = QueryActDetailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "ActDetail",
      data
    );
    return promise.then((data) =>
      QueryActDetailResponse.decode(new _m0.Reader(data))
    );
  }

  UserMintCount(
    request: QueryUserMintCountRequest
  ): Promise<QueryUserMintCountResponse> {
    const data = QueryUserMintCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "UserMintCount",
      data
    );
    return promise.then((data) =>
      QueryUserMintCountResponse.decode(new _m0.Reader(data))
    );
  }

  UserActs(request: QueryUserActsRequest): Promise<QueryUserActsResponse> {
    const data = QueryUserActsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "UserActs",
      data
    );
    return promise.then((data) =>
      QueryUserActsResponse.decode(new _m0.Reader(data))
    );
  }

  ActCurrentCycle(
    request: QueryActCurrentCycleRequest
  ): Promise<QueryActCurrentCycleResponse> {
    const data = QueryActCurrentCycleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "ActCurrentCycle",
      data
    );
    return promise.then((data) =>
      QueryActCurrentCycleResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimInfoDetail(
    request: QueryClaimInfoDetailRequest
  ): Promise<QueryClaimInfoDetailResponse> {
    const data = QueryClaimInfoDetailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Query",
      "ClaimInfoDetail",
      data
    );
    return promise.then((data) =>
      QueryClaimInfoDetailResponse.decode(new _m0.Reader(data))
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

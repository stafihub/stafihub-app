//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { MintRewardAct, MintRewardActSDKType, Acts, ActsSDKType, UserClaimInfo, UserClaimInfoSDKType } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
  params?: ParamsSDKType;
}
export interface QueryActLatestCycleRequest {
  denom: string;
}
export interface QueryActLatestCycleRequestSDKType {
  denom: string;
}
export interface QueryActLatestCycleResponse {
  latestCycle: Long;
}
export interface QueryActLatestCycleResponseSDKType {
  latestCycle: Long;
}
export interface QueryActDetailRequest {
  denom: string;
  cycle: Long;
}
export interface QueryActDetailRequestSDKType {
  denom: string;
  cycle: Long;
}
export interface QueryActDetailResponse {
  act?: MintRewardAct;
}
export interface QueryActDetailResponseSDKType {
  act?: MintRewardActSDKType;
}
export interface QueryUserMintCountRequest {
  address: string;
  denom: string;
  cycle: Long;
}
export interface QueryUserMintCountRequestSDKType {
  address: string;
  denom: string;
  cycle: Long;
}
export interface QueryUserMintCountResponse {
  count: Long;
}
export interface QueryUserMintCountResponseSDKType {
  count: Long;
}
export interface QueryUserActsRequest {
  address: string;
  denom: string;
}
export interface QueryUserActsRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserActsResponse {
  acts?: Acts;
}
export interface QueryUserActsResponseSDKType {
  acts?: ActsSDKType;
}
export interface QueryActCurrentCycleRequest {
  denom: string;
}
export interface QueryActCurrentCycleRequestSDKType {
  denom: string;
}
export interface QueryActCurrentCycleResponse {
  currentCycle: Long;
}
export interface QueryActCurrentCycleResponseSDKType {
  currentCycle: Long;
}
export interface QueryClaimInfoDetailRequest {
  address: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}
export interface QueryClaimInfoDetailRequestSDKType {
  address: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}
export interface QueryClaimInfoDetailResponse {
  claimInfo?: UserClaimInfo;
}
export interface QueryClaimInfoDetailResponseSDKType {
  claimInfo?: UserClaimInfoSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryActLatestCycleRequest(): QueryActLatestCycleRequest {
  return {
    denom: ""
  };
}

export const QueryActLatestCycleRequest = {
  encode(message: QueryActLatestCycleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActLatestCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActLatestCycleRequest();

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

  fromPartial(object: DeepPartial<QueryActLatestCycleRequest>): QueryActLatestCycleRequest {
    const message = createBaseQueryActLatestCycleRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryActLatestCycleResponse(): QueryActLatestCycleResponse {
  return {
    latestCycle: Long.UZERO
  };
}

export const QueryActLatestCycleResponse = {
  encode(message: QueryActLatestCycleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.latestCycle.isZero()) {
      writer.uint32(8).uint64(message.latestCycle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActLatestCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActLatestCycleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestCycle = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryActLatestCycleResponse>): QueryActLatestCycleResponse {
    const message = createBaseQueryActLatestCycleResponse();
    message.latestCycle = object.latestCycle !== undefined && object.latestCycle !== null ? Long.fromValue(object.latestCycle) : Long.UZERO;
    return message;
  }

};

function createBaseQueryActDetailRequest(): QueryActDetailRequest {
  return {
    denom: "",
    cycle: Long.UZERO
  };
}

export const QueryActDetailRequest = {
  encode(message: QueryActDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (!message.cycle.isZero()) {
      writer.uint32(16).uint64(message.cycle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActDetailRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.cycle = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryActDetailRequest>): QueryActDetailRequest {
    const message = createBaseQueryActDetailRequest();
    message.denom = object.denom ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Long.fromValue(object.cycle) : Long.UZERO;
    return message;
  }

};

function createBaseQueryActDetailResponse(): QueryActDetailResponse {
  return {
    act: undefined
  };
}

export const QueryActDetailResponse = {
  encode(message: QueryActDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.act !== undefined) {
      MintRewardAct.encode(message.act, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActDetailResponse();

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

  fromPartial(object: DeepPartial<QueryActDetailResponse>): QueryActDetailResponse {
    const message = createBaseQueryActDetailResponse();
    message.act = object.act !== undefined && object.act !== null ? MintRewardAct.fromPartial(object.act) : undefined;
    return message;
  }

};

function createBaseQueryUserMintCountRequest(): QueryUserMintCountRequest {
  return {
    address: "",
    denom: "",
    cycle: Long.UZERO
  };
}

export const QueryUserMintCountRequest = {
  encode(message: QueryUserMintCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMintCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMintCountRequest();

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
          message.cycle = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUserMintCountRequest>): QueryUserMintCountRequest {
    const message = createBaseQueryUserMintCountRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Long.fromValue(object.cycle) : Long.UZERO;
    return message;
  }

};

function createBaseQueryUserMintCountResponse(): QueryUserMintCountResponse {
  return {
    count: Long.UZERO
  };
}

export const QueryUserMintCountResponse = {
  encode(message: QueryUserMintCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).uint64(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMintCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMintCountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.count = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUserMintCountResponse>): QueryUserMintCountResponse {
    const message = createBaseQueryUserMintCountResponse();
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }

};

function createBaseQueryUserActsRequest(): QueryUserActsRequest {
  return {
    address: "",
    denom: ""
  };
}

export const QueryUserActsRequest = {
  encode(message: QueryUserActsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserActsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserActsRequest();

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

  fromPartial(object: DeepPartial<QueryUserActsRequest>): QueryUserActsRequest {
    const message = createBaseQueryUserActsRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryUserActsResponse(): QueryUserActsResponse {
  return {
    acts: undefined
  };
}

export const QueryUserActsResponse = {
  encode(message: QueryUserActsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acts !== undefined) {
      Acts.encode(message.acts, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserActsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserActsResponse();

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

  fromPartial(object: DeepPartial<QueryUserActsResponse>): QueryUserActsResponse {
    const message = createBaseQueryUserActsResponse();
    message.acts = object.acts !== undefined && object.acts !== null ? Acts.fromPartial(object.acts) : undefined;
    return message;
  }

};

function createBaseQueryActCurrentCycleRequest(): QueryActCurrentCycleRequest {
  return {
    denom: ""
  };
}

export const QueryActCurrentCycleRequest = {
  encode(message: QueryActCurrentCycleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActCurrentCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActCurrentCycleRequest();

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

  fromPartial(object: DeepPartial<QueryActCurrentCycleRequest>): QueryActCurrentCycleRequest {
    const message = createBaseQueryActCurrentCycleRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryActCurrentCycleResponse(): QueryActCurrentCycleResponse {
  return {
    currentCycle: Long.UZERO
  };
}

export const QueryActCurrentCycleResponse = {
  encode(message: QueryActCurrentCycleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentCycle.isZero()) {
      writer.uint32(8).uint64(message.currentCycle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActCurrentCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActCurrentCycleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentCycle = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryActCurrentCycleResponse>): QueryActCurrentCycleResponse {
    const message = createBaseQueryActCurrentCycleResponse();
    message.currentCycle = object.currentCycle !== undefined && object.currentCycle !== null ? Long.fromValue(object.currentCycle) : Long.UZERO;
    return message;
  }

};

function createBaseQueryClaimInfoDetailRequest(): QueryClaimInfoDetailRequest {
  return {
    address: "",
    denom: "",
    cycle: Long.UZERO,
    mintIndex: Long.UZERO
  };
}

export const QueryClaimInfoDetailRequest = {
  encode(message: QueryClaimInfoDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimInfoDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimInfoDetailRequest();

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
          message.cycle = (reader.uint64() as Long);
          break;

        case 4:
          message.mintIndex = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimInfoDetailRequest>): QueryClaimInfoDetailRequest {
    const message = createBaseQueryClaimInfoDetailRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Long.fromValue(object.cycle) : Long.UZERO;
    message.mintIndex = object.mintIndex !== undefined && object.mintIndex !== null ? Long.fromValue(object.mintIndex) : Long.UZERO;
    return message;
  }

};

function createBaseQueryClaimInfoDetailResponse(): QueryClaimInfoDetailResponse {
  return {
    claimInfo: undefined
  };
}

export const QueryClaimInfoDetailResponse = {
  encode(message: QueryClaimInfoDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimInfo !== undefined) {
      UserClaimInfo.encode(message.claimInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimInfoDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimInfoDetailResponse();

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

  fromPartial(object: DeepPartial<QueryClaimInfoDetailResponse>): QueryClaimInfoDetailResponse {
    const message = createBaseQueryClaimInfoDetailResponse();
    message.claimInfo = object.claimInfo !== undefined && object.claimInfo !== null ? UserClaimInfo.fromPartial(object.claimInfo) : undefined;
    return message;
  }

};
import { Params, ParamsSDKType } from "./params";
import { CycleSeconds, CycleSecondsSDKType, ShuffleSeconds, ShuffleSecondsSDKType, Cycle, CycleSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
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
export interface QueryRValidatorListRequest {
  denom: string;
  poolAddress: string;
}
export interface QueryRValidatorListRequestSDKType {
  denom: string;
  poolAddress: string;
}
export interface QueryRValidatorListResponse {
  rValidatorList: string[];
}
export interface QueryRValidatorListResponseSDKType {
  rValidatorList: string[];
}
export interface QueryCycleSecondsRequest {
  denom: string;
}
export interface QueryCycleSecondsRequestSDKType {
  denom: string;
}
export interface QueryCycleSecondsResponse {
  cycleSeconds?: CycleSeconds;
}
export interface QueryCycleSecondsResponseSDKType {
  cycleSeconds?: CycleSecondsSDKType;
}
export interface QueryShuffleSecondsRequest {
  denom: string;
}
export interface QueryShuffleSecondsRequestSDKType {
  denom: string;
}
export interface QueryShuffleSecondsResponse {
  shuffleSeconds?: ShuffleSeconds;
}
export interface QueryShuffleSecondsResponseSDKType {
  shuffleSeconds?: ShuffleSecondsSDKType;
}
export interface QueryLatestVotedCycleRequest {
  denom: string;
  poolAddress: string;
}
export interface QueryLatestVotedCycleRequestSDKType {
  denom: string;
  poolAddress: string;
}
export interface QueryLatestVotedCycleResponse {
  latestVotedCycle?: Cycle;
}
export interface QueryLatestVotedCycleResponseSDKType {
  latestVotedCycle?: CycleSDKType;
}
export interface QueryLatestDealedCycleRequest {
  denom: string;
  poolAddress: string;
}
export interface QueryLatestDealedCycleRequestSDKType {
  denom: string;
  poolAddress: string;
}
export interface QueryLatestDealedCycleResponse {
  latestDealedCycle?: Cycle;
}
export interface QueryLatestDealedCycleResponseSDKType {
  latestDealedCycle?: CycleSDKType;
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

function createBaseQueryRValidatorListRequest(): QueryRValidatorListRequest {
  return {
    denom: "",
    poolAddress: ""
  };
}

export const QueryRValidatorListRequest = {
  encode(message: QueryRValidatorListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRValidatorListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRValidatorListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.poolAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRValidatorListRequest>): QueryRValidatorListRequest {
    const message = createBaseQueryRValidatorListRequest();
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  }

};

function createBaseQueryRValidatorListResponse(): QueryRValidatorListResponse {
  return {
    rValidatorList: []
  };
}

export const QueryRValidatorListResponse = {
  encode(message: QueryRValidatorListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rValidatorList) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRValidatorListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRValidatorListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rValidatorList.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRValidatorListResponse>): QueryRValidatorListResponse {
    const message = createBaseQueryRValidatorListResponse();
    message.rValidatorList = object.rValidatorList?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryCycleSecondsRequest(): QueryCycleSecondsRequest {
  return {
    denom: ""
  };
}

export const QueryCycleSecondsRequest = {
  encode(message: QueryCycleSecondsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCycleSecondsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCycleSecondsRequest();

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

  fromPartial(object: DeepPartial<QueryCycleSecondsRequest>): QueryCycleSecondsRequest {
    const message = createBaseQueryCycleSecondsRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryCycleSecondsResponse(): QueryCycleSecondsResponse {
  return {
    cycleSeconds: undefined
  };
}

export const QueryCycleSecondsResponse = {
  encode(message: QueryCycleSecondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cycleSeconds !== undefined) {
      CycleSeconds.encode(message.cycleSeconds, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCycleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCycleSecondsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cycleSeconds = CycleSeconds.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCycleSecondsResponse>): QueryCycleSecondsResponse {
    const message = createBaseQueryCycleSecondsResponse();
    message.cycleSeconds = object.cycleSeconds !== undefined && object.cycleSeconds !== null ? CycleSeconds.fromPartial(object.cycleSeconds) : undefined;
    return message;
  }

};

function createBaseQueryShuffleSecondsRequest(): QueryShuffleSecondsRequest {
  return {
    denom: ""
  };
}

export const QueryShuffleSecondsRequest = {
  encode(message: QueryShuffleSecondsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShuffleSecondsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShuffleSecondsRequest();

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

  fromPartial(object: DeepPartial<QueryShuffleSecondsRequest>): QueryShuffleSecondsRequest {
    const message = createBaseQueryShuffleSecondsRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryShuffleSecondsResponse(): QueryShuffleSecondsResponse {
  return {
    shuffleSeconds: undefined
  };
}

export const QueryShuffleSecondsResponse = {
  encode(message: QueryShuffleSecondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shuffleSeconds !== undefined) {
      ShuffleSeconds.encode(message.shuffleSeconds, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShuffleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShuffleSecondsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shuffleSeconds = ShuffleSeconds.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryShuffleSecondsResponse>): QueryShuffleSecondsResponse {
    const message = createBaseQueryShuffleSecondsResponse();
    message.shuffleSeconds = object.shuffleSeconds !== undefined && object.shuffleSeconds !== null ? ShuffleSeconds.fromPartial(object.shuffleSeconds) : undefined;
    return message;
  }

};

function createBaseQueryLatestVotedCycleRequest(): QueryLatestVotedCycleRequest {
  return {
    denom: "",
    poolAddress: ""
  };
}

export const QueryLatestVotedCycleRequest = {
  encode(message: QueryLatestVotedCycleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestVotedCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestVotedCycleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.poolAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestVotedCycleRequest>): QueryLatestVotedCycleRequest {
    const message = createBaseQueryLatestVotedCycleRequest();
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  }

};

function createBaseQueryLatestVotedCycleResponse(): QueryLatestVotedCycleResponse {
  return {
    latestVotedCycle: undefined
  };
}

export const QueryLatestVotedCycleResponse = {
  encode(message: QueryLatestVotedCycleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestVotedCycle !== undefined) {
      Cycle.encode(message.latestVotedCycle, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestVotedCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestVotedCycleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestVotedCycle = Cycle.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestVotedCycleResponse>): QueryLatestVotedCycleResponse {
    const message = createBaseQueryLatestVotedCycleResponse();
    message.latestVotedCycle = object.latestVotedCycle !== undefined && object.latestVotedCycle !== null ? Cycle.fromPartial(object.latestVotedCycle) : undefined;
    return message;
  }

};

function createBaseQueryLatestDealedCycleRequest(): QueryLatestDealedCycleRequest {
  return {
    denom: "",
    poolAddress: ""
  };
}

export const QueryLatestDealedCycleRequest = {
  encode(message: QueryLatestDealedCycleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestDealedCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestDealedCycleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.poolAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestDealedCycleRequest>): QueryLatestDealedCycleRequest {
    const message = createBaseQueryLatestDealedCycleRequest();
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  }

};

function createBaseQueryLatestDealedCycleResponse(): QueryLatestDealedCycleResponse {
  return {
    latestDealedCycle: undefined
  };
}

export const QueryLatestDealedCycleResponse = {
  encode(message: QueryLatestDealedCycleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestDealedCycle !== undefined) {
      Cycle.encode(message.latestDealedCycle, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestDealedCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestDealedCycleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestDealedCycle = Cycle.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestDealedCycleResponse>): QueryLatestDealedCycleResponse {
    const message = createBaseQueryLatestDealedCycleResponse();
    message.latestDealedCycle = object.latestDealedCycle !== undefined && object.latestDealedCycle !== null ? Cycle.fromPartial(object.latestDealedCycle) : undefined;
    return message;
  }

};
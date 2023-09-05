/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../rvalidator/params";
import { CycleSeconds, ShuffleSeconds, Cycle } from "../rvalidator/genesis";

export const protobufPackage = "stafihub.stafihub.rvalidator";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryRValidatorListRequest {
  denom: string;
  poolAddress: string;
}

export interface QueryRValidatorListResponse {
  rValidatorList: string[];
}

export interface QueryCycleSecondsRequest {
  denom: string;
}

export interface QueryCycleSecondsResponse {
  cycleSeconds?: CycleSeconds;
}

export interface QueryShuffleSecondsRequest {
  denom: string;
}

export interface QueryShuffleSecondsResponse {
  shuffleSeconds?: ShuffleSeconds;
}

export interface QueryLatestVotedCycleRequest {
  denom: string;
  poolAddress: string;
}

export interface QueryLatestVotedCycleResponse {
  latestVotedCycle?: Cycle;
}

export interface QueryLatestDealedCycleRequest {
  denom: string;
  poolAddress: string;
}

export interface QueryLatestDealedCycleResponse {
  latestDealedCycle?: Cycle;
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

const baseQueryRValidatorListRequest: object = { denom: "", poolAddress: "" };

export const QueryRValidatorListRequest = {
  encode(
    message: QueryRValidatorListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRValidatorListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRValidatorListRequest,
    } as QueryRValidatorListRequest;
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

  fromJSON(object: any): QueryRValidatorListRequest {
    const message = {
      ...baseQueryRValidatorListRequest,
    } as QueryRValidatorListRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    return message;
  },

  toJSON(message: QueryRValidatorListRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRValidatorListRequest>
  ): QueryRValidatorListRequest {
    const message = {
      ...baseQueryRValidatorListRequest,
    } as QueryRValidatorListRequest;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  },
};

const baseQueryRValidatorListResponse: object = { rValidatorList: "" };

export const QueryRValidatorListResponse = {
  encode(
    message: QueryRValidatorListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rValidatorList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRValidatorListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRValidatorListResponse,
    } as QueryRValidatorListResponse;
    message.rValidatorList = [];
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

  fromJSON(object: any): QueryRValidatorListResponse {
    const message = {
      ...baseQueryRValidatorListResponse,
    } as QueryRValidatorListResponse;
    message.rValidatorList = (object.rValidatorList ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: QueryRValidatorListResponse): unknown {
    const obj: any = {};
    if (message.rValidatorList) {
      obj.rValidatorList = message.rValidatorList.map((e) => e);
    } else {
      obj.rValidatorList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRValidatorListResponse>
  ): QueryRValidatorListResponse {
    const message = {
      ...baseQueryRValidatorListResponse,
    } as QueryRValidatorListResponse;
    message.rValidatorList = (object.rValidatorList ?? []).map((e) => e);
    return message;
  },
};

const baseQueryCycleSecondsRequest: object = { denom: "" };

export const QueryCycleSecondsRequest = {
  encode(
    message: QueryCycleSecondsRequest,
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
  ): QueryCycleSecondsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCycleSecondsRequest,
    } as QueryCycleSecondsRequest;
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

  fromJSON(object: any): QueryCycleSecondsRequest {
    const message = {
      ...baseQueryCycleSecondsRequest,
    } as QueryCycleSecondsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryCycleSecondsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCycleSecondsRequest>
  ): QueryCycleSecondsRequest {
    const message = {
      ...baseQueryCycleSecondsRequest,
    } as QueryCycleSecondsRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryCycleSecondsResponse: object = {};

export const QueryCycleSecondsResponse = {
  encode(
    message: QueryCycleSecondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cycleSeconds !== undefined) {
      CycleSeconds.encode(
        message.cycleSeconds,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCycleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCycleSecondsResponse,
    } as QueryCycleSecondsResponse;
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

  fromJSON(object: any): QueryCycleSecondsResponse {
    const message = {
      ...baseQueryCycleSecondsResponse,
    } as QueryCycleSecondsResponse;
    message.cycleSeconds =
      object.cycleSeconds !== undefined && object.cycleSeconds !== null
        ? CycleSeconds.fromJSON(object.cycleSeconds)
        : undefined;
    return message;
  },

  toJSON(message: QueryCycleSecondsResponse): unknown {
    const obj: any = {};
    message.cycleSeconds !== undefined &&
      (obj.cycleSeconds = message.cycleSeconds
        ? CycleSeconds.toJSON(message.cycleSeconds)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCycleSecondsResponse>
  ): QueryCycleSecondsResponse {
    const message = {
      ...baseQueryCycleSecondsResponse,
    } as QueryCycleSecondsResponse;
    message.cycleSeconds =
      object.cycleSeconds !== undefined && object.cycleSeconds !== null
        ? CycleSeconds.fromPartial(object.cycleSeconds)
        : undefined;
    return message;
  },
};

const baseQueryShuffleSecondsRequest: object = { denom: "" };

export const QueryShuffleSecondsRequest = {
  encode(
    message: QueryShuffleSecondsRequest,
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
  ): QueryShuffleSecondsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShuffleSecondsRequest,
    } as QueryShuffleSecondsRequest;
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

  fromJSON(object: any): QueryShuffleSecondsRequest {
    const message = {
      ...baseQueryShuffleSecondsRequest,
    } as QueryShuffleSecondsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryShuffleSecondsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShuffleSecondsRequest>
  ): QueryShuffleSecondsRequest {
    const message = {
      ...baseQueryShuffleSecondsRequest,
    } as QueryShuffleSecondsRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryShuffleSecondsResponse: object = {};

export const QueryShuffleSecondsResponse = {
  encode(
    message: QueryShuffleSecondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shuffleSeconds !== undefined) {
      ShuffleSeconds.encode(
        message.shuffleSeconds,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryShuffleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShuffleSecondsResponse,
    } as QueryShuffleSecondsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shuffleSeconds = ShuffleSeconds.decode(
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

  fromJSON(object: any): QueryShuffleSecondsResponse {
    const message = {
      ...baseQueryShuffleSecondsResponse,
    } as QueryShuffleSecondsResponse;
    message.shuffleSeconds =
      object.shuffleSeconds !== undefined && object.shuffleSeconds !== null
        ? ShuffleSeconds.fromJSON(object.shuffleSeconds)
        : undefined;
    return message;
  },

  toJSON(message: QueryShuffleSecondsResponse): unknown {
    const obj: any = {};
    message.shuffleSeconds !== undefined &&
      (obj.shuffleSeconds = message.shuffleSeconds
        ? ShuffleSeconds.toJSON(message.shuffleSeconds)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShuffleSecondsResponse>
  ): QueryShuffleSecondsResponse {
    const message = {
      ...baseQueryShuffleSecondsResponse,
    } as QueryShuffleSecondsResponse;
    message.shuffleSeconds =
      object.shuffleSeconds !== undefined && object.shuffleSeconds !== null
        ? ShuffleSeconds.fromPartial(object.shuffleSeconds)
        : undefined;
    return message;
  },
};

const baseQueryLatestVotedCycleRequest: object = { denom: "", poolAddress: "" };

export const QueryLatestVotedCycleRequest = {
  encode(
    message: QueryLatestVotedCycleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLatestVotedCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLatestVotedCycleRequest,
    } as QueryLatestVotedCycleRequest;
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

  fromJSON(object: any): QueryLatestVotedCycleRequest {
    const message = {
      ...baseQueryLatestVotedCycleRequest,
    } as QueryLatestVotedCycleRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    return message;
  },

  toJSON(message: QueryLatestVotedCycleRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLatestVotedCycleRequest>
  ): QueryLatestVotedCycleRequest {
    const message = {
      ...baseQueryLatestVotedCycleRequest,
    } as QueryLatestVotedCycleRequest;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  },
};

const baseQueryLatestVotedCycleResponse: object = {};

export const QueryLatestVotedCycleResponse = {
  encode(
    message: QueryLatestVotedCycleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latestVotedCycle !== undefined) {
      Cycle.encode(message.latestVotedCycle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLatestVotedCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLatestVotedCycleResponse,
    } as QueryLatestVotedCycleResponse;
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

  fromJSON(object: any): QueryLatestVotedCycleResponse {
    const message = {
      ...baseQueryLatestVotedCycleResponse,
    } as QueryLatestVotedCycleResponse;
    message.latestVotedCycle =
      object.latestVotedCycle !== undefined && object.latestVotedCycle !== null
        ? Cycle.fromJSON(object.latestVotedCycle)
        : undefined;
    return message;
  },

  toJSON(message: QueryLatestVotedCycleResponse): unknown {
    const obj: any = {};
    message.latestVotedCycle !== undefined &&
      (obj.latestVotedCycle = message.latestVotedCycle
        ? Cycle.toJSON(message.latestVotedCycle)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLatestVotedCycleResponse>
  ): QueryLatestVotedCycleResponse {
    const message = {
      ...baseQueryLatestVotedCycleResponse,
    } as QueryLatestVotedCycleResponse;
    message.latestVotedCycle =
      object.latestVotedCycle !== undefined && object.latestVotedCycle !== null
        ? Cycle.fromPartial(object.latestVotedCycle)
        : undefined;
    return message;
  },
};

const baseQueryLatestDealedCycleRequest: object = {
  denom: "",
  poolAddress: "",
};

export const QueryLatestDealedCycleRequest = {
  encode(
    message: QueryLatestDealedCycleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLatestDealedCycleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLatestDealedCycleRequest,
    } as QueryLatestDealedCycleRequest;
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

  fromJSON(object: any): QueryLatestDealedCycleRequest {
    const message = {
      ...baseQueryLatestDealedCycleRequest,
    } as QueryLatestDealedCycleRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    return message;
  },

  toJSON(message: QueryLatestDealedCycleRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLatestDealedCycleRequest>
  ): QueryLatestDealedCycleRequest {
    const message = {
      ...baseQueryLatestDealedCycleRequest,
    } as QueryLatestDealedCycleRequest;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    return message;
  },
};

const baseQueryLatestDealedCycleResponse: object = {};

export const QueryLatestDealedCycleResponse = {
  encode(
    message: QueryLatestDealedCycleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latestDealedCycle !== undefined) {
      Cycle.encode(
        message.latestDealedCycle,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLatestDealedCycleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLatestDealedCycleResponse,
    } as QueryLatestDealedCycleResponse;
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

  fromJSON(object: any): QueryLatestDealedCycleResponse {
    const message = {
      ...baseQueryLatestDealedCycleResponse,
    } as QueryLatestDealedCycleResponse;
    message.latestDealedCycle =
      object.latestDealedCycle !== undefined &&
      object.latestDealedCycle !== null
        ? Cycle.fromJSON(object.latestDealedCycle)
        : undefined;
    return message;
  },

  toJSON(message: QueryLatestDealedCycleResponse): unknown {
    const obj: any = {};
    message.latestDealedCycle !== undefined &&
      (obj.latestDealedCycle = message.latestDealedCycle
        ? Cycle.toJSON(message.latestDealedCycle)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLatestDealedCycleResponse>
  ): QueryLatestDealedCycleResponse {
    const message = {
      ...baseQueryLatestDealedCycleResponse,
    } as QueryLatestDealedCycleResponse;
    message.latestDealedCycle =
      object.latestDealedCycle !== undefined &&
      object.latestDealedCycle !== null
        ? Cycle.fromPartial(object.latestDealedCycle)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RValidatorList items. */
  RValidatorList(
    request: QueryRValidatorListRequest
  ): Promise<QueryRValidatorListResponse>;
  /** Queries a list of CycleSeconds items. */
  CycleSeconds(
    request: QueryCycleSecondsRequest
  ): Promise<QueryCycleSecondsResponse>;
  /** Queries a list of ShuffleSeconds items. */
  ShuffleSeconds(
    request: QueryShuffleSecondsRequest
  ): Promise<QueryShuffleSecondsResponse>;
  /** Queries a list of LatestVotedCycle items. */
  LatestVotedCycle(
    request: QueryLatestVotedCycleRequest
  ): Promise<QueryLatestVotedCycleResponse>;
  /** Queries a list of LatestDealedCycle items. */
  LatestDealedCycle(
    request: QueryLatestDealedCycleRequest
  ): Promise<QueryLatestDealedCycleResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RValidatorList = this.RValidatorList.bind(this);
    this.CycleSeconds = this.CycleSeconds.bind(this);
    this.ShuffleSeconds = this.ShuffleSeconds.bind(this);
    this.LatestVotedCycle = this.LatestVotedCycle.bind(this);
    this.LatestDealedCycle = this.LatestDealedCycle.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  RValidatorList(
    request: QueryRValidatorListRequest
  ): Promise<QueryRValidatorListResponse> {
    const data = QueryRValidatorListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "RValidatorList",
      data
    );
    return promise.then((data) =>
      QueryRValidatorListResponse.decode(new _m0.Reader(data))
    );
  }

  CycleSeconds(
    request: QueryCycleSecondsRequest
  ): Promise<QueryCycleSecondsResponse> {
    const data = QueryCycleSecondsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "CycleSeconds",
      data
    );
    return promise.then((data) =>
      QueryCycleSecondsResponse.decode(new _m0.Reader(data))
    );
  }

  ShuffleSeconds(
    request: QueryShuffleSecondsRequest
  ): Promise<QueryShuffleSecondsResponse> {
    const data = QueryShuffleSecondsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "ShuffleSeconds",
      data
    );
    return promise.then((data) =>
      QueryShuffleSecondsResponse.decode(new _m0.Reader(data))
    );
  }

  LatestVotedCycle(
    request: QueryLatestVotedCycleRequest
  ): Promise<QueryLatestVotedCycleResponse> {
    const data = QueryLatestVotedCycleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "LatestVotedCycle",
      data
    );
    return promise.then((data) =>
      QueryLatestVotedCycleResponse.decode(new _m0.Reader(data))
    );
  }

  LatestDealedCycle(
    request: QueryLatestDealedCycleRequest
  ): Promise<QueryLatestDealedCycleResponse> {
    const data = QueryLatestDealedCycleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rvalidator.Query",
      "LatestDealedCycle",
      data
    );
    return promise.then((data) =>
      QueryLatestDealedCycleResponse.decode(new _m0.Reader(data))
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

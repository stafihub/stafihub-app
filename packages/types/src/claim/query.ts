/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../claim/params";

export const protobufPackage = "stafihub.stafihub.claim";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryIsClaimedRequest {
  round: Long;
  index: Long;
}

export interface QueryIsClaimedResponse {
  isClaimed: boolean;
}

export interface QueryClaimSwitchRequest {
  round: Long;
}

export interface QueryClaimSwitchResponse {
  isOpen: boolean;
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

const baseQueryIsClaimedRequest: object = {
  round: Long.UZERO,
  index: Long.UZERO,
};

export const QueryIsClaimedRequest = {
  encode(
    message: QueryIsClaimedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }
    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIsClaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIsClaimedRequest } as QueryIsClaimedRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64() as Long;
          break;
        case 2:
          message.index = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIsClaimedRequest {
    const message = { ...baseQueryIsClaimedRequest } as QueryIsClaimedRequest;
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromString(object.round)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryIsClaimedRequest): unknown {
    const obj: any = {};
    message.round !== undefined &&
      (obj.round = (message.round || Long.UZERO).toString());
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIsClaimedRequest>
  ): QueryIsClaimedRequest {
    const message = { ...baseQueryIsClaimedRequest } as QueryIsClaimedRequest;
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromValue(object.round)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    return message;
  },
};

const baseQueryIsClaimedResponse: object = { isClaimed: false };

export const QueryIsClaimedResponse = {
  encode(
    message: QueryIsClaimedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isClaimed === true) {
      writer.uint32(8).bool(message.isClaimed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIsClaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIsClaimedResponse } as QueryIsClaimedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIsClaimedResponse {
    const message = { ...baseQueryIsClaimedResponse } as QueryIsClaimedResponse;
    message.isClaimed =
      object.isClaimed !== undefined && object.isClaimed !== null
        ? Boolean(object.isClaimed)
        : false;
    return message;
  },

  toJSON(message: QueryIsClaimedResponse): unknown {
    const obj: any = {};
    message.isClaimed !== undefined && (obj.isClaimed = message.isClaimed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIsClaimedResponse>
  ): QueryIsClaimedResponse {
    const message = { ...baseQueryIsClaimedResponse } as QueryIsClaimedResponse;
    message.isClaimed = object.isClaimed ?? false;
    return message;
  },
};

const baseQueryClaimSwitchRequest: object = { round: Long.UZERO };

export const QueryClaimSwitchRequest = {
  encode(
    message: QueryClaimSwitchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimSwitchRequest,
    } as QueryClaimSwitchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimSwitchRequest {
    const message = {
      ...baseQueryClaimSwitchRequest,
    } as QueryClaimSwitchRequest;
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromString(object.round)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryClaimSwitchRequest): unknown {
    const obj: any = {};
    message.round !== undefined &&
      (obj.round = (message.round || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimSwitchRequest>
  ): QueryClaimSwitchRequest {
    const message = {
      ...baseQueryClaimSwitchRequest,
    } as QueryClaimSwitchRequest;
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromValue(object.round)
        : Long.UZERO;
    return message;
  },
};

const baseQueryClaimSwitchResponse: object = { isOpen: false };

export const QueryClaimSwitchResponse = {
  encode(
    message: QueryClaimSwitchResponse,
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
  ): QueryClaimSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimSwitchResponse,
    } as QueryClaimSwitchResponse;
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

  fromJSON(object: any): QueryClaimSwitchResponse {
    const message = {
      ...baseQueryClaimSwitchResponse,
    } as QueryClaimSwitchResponse;
    message.isOpen =
      object.isOpen !== undefined && object.isOpen !== null
        ? Boolean(object.isOpen)
        : false;
    return message;
  },

  toJSON(message: QueryClaimSwitchResponse): unknown {
    const obj: any = {};
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimSwitchResponse>
  ): QueryClaimSwitchResponse {
    const message = {
      ...baseQueryClaimSwitchResponse,
    } as QueryClaimSwitchResponse;
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of IsClaimed items. */
  IsClaimed(request: QueryIsClaimedRequest): Promise<QueryIsClaimedResponse>;
  /** Queries a list of ClaimSwitch items. */
  ClaimSwitch(
    request: QueryClaimSwitchRequest
  ): Promise<QueryClaimSwitchResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.IsClaimed = this.IsClaimed.bind(this);
    this.ClaimSwitch = this.ClaimSwitch.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  IsClaimed(request: QueryIsClaimedRequest): Promise<QueryIsClaimedResponse> {
    const data = QueryIsClaimedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Query",
      "IsClaimed",
      data
    );
    return promise.then((data) =>
      QueryIsClaimedResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimSwitch(
    request: QueryClaimSwitchRequest
  ): Promise<QueryClaimSwitchResponse> {
    const data = QueryClaimSwitchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Query",
      "ClaimSwitch",
      data
    );
    return promise.then((data) =>
      QueryClaimSwitchResponse.decode(new _m0.Reader(data))
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

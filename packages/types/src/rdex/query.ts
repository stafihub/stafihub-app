/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../rdex/params";
import { SwapPool } from "../rdex/models";

export const protobufPackage = "stafihub.stafihub.rdex";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QuerySwapPoolInfoRequest {
  lpDenom: string;
}

export interface QuerySwapPoolInfoResponse {
  swapPool?: SwapPool;
}

export interface QuerySwapPoolListRequest {}

export interface QuerySwapPoolListResponse {
  swapPoolList: SwapPool[];
}

export interface QueryProviderListRequest {}

export interface QueryProviderListResponse {
  providerList: string[];
}

export interface QueryPoolCreatorListRequest {}

export interface QueryPoolCreatorListResponse {
  poolCreatorList: string[];
}

export interface QueryProviderSwitchRequest {}

export interface QueryProviderSwitchResponse {
  providerSwitch: boolean;
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

const baseQuerySwapPoolInfoRequest: object = { lpDenom: "" };

export const QuerySwapPoolInfoRequest = {
  encode(
    message: QuerySwapPoolInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lpDenom !== "") {
      writer.uint32(10).string(message.lpDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySwapPoolInfoRequest,
    } as QuerySwapPoolInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapPoolInfoRequest {
    const message = {
      ...baseQuerySwapPoolInfoRequest,
    } as QuerySwapPoolInfoRequest;
    message.lpDenom =
      object.lpDenom !== undefined && object.lpDenom !== null
        ? String(object.lpDenom)
        : "";
    return message;
  },

  toJSON(message: QuerySwapPoolInfoRequest): unknown {
    const obj: any = {};
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySwapPoolInfoRequest>
  ): QuerySwapPoolInfoRequest {
    const message = {
      ...baseQuerySwapPoolInfoRequest,
    } as QuerySwapPoolInfoRequest;
    message.lpDenom = object.lpDenom ?? "";
    return message;
  },
};

const baseQuerySwapPoolInfoResponse: object = {};

export const QuerySwapPoolInfoResponse = {
  encode(
    message: QuerySwapPoolInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swapPool !== undefined) {
      SwapPool.encode(message.swapPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySwapPoolInfoResponse,
    } as QuerySwapPoolInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapPool = SwapPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapPoolInfoResponse {
    const message = {
      ...baseQuerySwapPoolInfoResponse,
    } as QuerySwapPoolInfoResponse;
    message.swapPool =
      object.swapPool !== undefined && object.swapPool !== null
        ? SwapPool.fromJSON(object.swapPool)
        : undefined;
    return message;
  },

  toJSON(message: QuerySwapPoolInfoResponse): unknown {
    const obj: any = {};
    message.swapPool !== undefined &&
      (obj.swapPool = message.swapPool
        ? SwapPool.toJSON(message.swapPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySwapPoolInfoResponse>
  ): QuerySwapPoolInfoResponse {
    const message = {
      ...baseQuerySwapPoolInfoResponse,
    } as QuerySwapPoolInfoResponse;
    message.swapPool =
      object.swapPool !== undefined && object.swapPool !== null
        ? SwapPool.fromPartial(object.swapPool)
        : undefined;
    return message;
  },
};

const baseQuerySwapPoolListRequest: object = {};

export const QuerySwapPoolListRequest = {
  encode(
    _: QuerySwapPoolListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapPoolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySwapPoolListRequest,
    } as QuerySwapPoolListRequest;
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

  fromJSON(_: any): QuerySwapPoolListRequest {
    const message = {
      ...baseQuerySwapPoolListRequest,
    } as QuerySwapPoolListRequest;
    return message;
  },

  toJSON(_: QuerySwapPoolListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QuerySwapPoolListRequest>
  ): QuerySwapPoolListRequest {
    const message = {
      ...baseQuerySwapPoolListRequest,
    } as QuerySwapPoolListRequest;
    return message;
  },
};

const baseQuerySwapPoolListResponse: object = {};

export const QuerySwapPoolListResponse = {
  encode(
    message: QuerySwapPoolListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.swapPoolList) {
      SwapPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapPoolListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySwapPoolListResponse,
    } as QuerySwapPoolListResponse;
    message.swapPoolList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapPoolList.push(SwapPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapPoolListResponse {
    const message = {
      ...baseQuerySwapPoolListResponse,
    } as QuerySwapPoolListResponse;
    message.swapPoolList = (object.swapPoolList ?? []).map((e: any) =>
      SwapPool.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuerySwapPoolListResponse): unknown {
    const obj: any = {};
    if (message.swapPoolList) {
      obj.swapPoolList = message.swapPoolList.map((e) =>
        e ? SwapPool.toJSON(e) : undefined
      );
    } else {
      obj.swapPoolList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySwapPoolListResponse>
  ): QuerySwapPoolListResponse {
    const message = {
      ...baseQuerySwapPoolListResponse,
    } as QuerySwapPoolListResponse;
    message.swapPoolList = (object.swapPoolList ?? []).map((e) =>
      SwapPool.fromPartial(e)
    );
    return message;
  },
};

const baseQueryProviderListRequest: object = {};

export const QueryProviderListRequest = {
  encode(
    _: QueryProviderListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderListRequest,
    } as QueryProviderListRequest;
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

  fromJSON(_: any): QueryProviderListRequest {
    const message = {
      ...baseQueryProviderListRequest,
    } as QueryProviderListRequest;
    return message;
  },

  toJSON(_: QueryProviderListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryProviderListRequest>
  ): QueryProviderListRequest {
    const message = {
      ...baseQueryProviderListRequest,
    } as QueryProviderListRequest;
    return message;
  },
};

const baseQueryProviderListResponse: object = { providerList: "" };

export const QueryProviderListResponse = {
  encode(
    message: QueryProviderListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.providerList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderListResponse,
    } as QueryProviderListResponse;
    message.providerList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderListResponse {
    const message = {
      ...baseQueryProviderListResponse,
    } as QueryProviderListResponse;
    message.providerList = (object.providerList ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: QueryProviderListResponse): unknown {
    const obj: any = {};
    if (message.providerList) {
      obj.providerList = message.providerList.map((e) => e);
    } else {
      obj.providerList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProviderListResponse>
  ): QueryProviderListResponse {
    const message = {
      ...baseQueryProviderListResponse,
    } as QueryProviderListResponse;
    message.providerList = (object.providerList ?? []).map((e) => e);
    return message;
  },
};

const baseQueryPoolCreatorListRequest: object = {};

export const QueryPoolCreatorListRequest = {
  encode(
    _: QueryPoolCreatorListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolCreatorListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolCreatorListRequest,
    } as QueryPoolCreatorListRequest;
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

  fromJSON(_: any): QueryPoolCreatorListRequest {
    const message = {
      ...baseQueryPoolCreatorListRequest,
    } as QueryPoolCreatorListRequest;
    return message;
  },

  toJSON(_: QueryPoolCreatorListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryPoolCreatorListRequest>
  ): QueryPoolCreatorListRequest {
    const message = {
      ...baseQueryPoolCreatorListRequest,
    } as QueryPoolCreatorListRequest;
    return message;
  },
};

const baseQueryPoolCreatorListResponse: object = { poolCreatorList: "" };

export const QueryPoolCreatorListResponse = {
  encode(
    message: QueryPoolCreatorListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolCreatorList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolCreatorListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolCreatorListResponse,
    } as QueryPoolCreatorListResponse;
    message.poolCreatorList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCreatorList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolCreatorListResponse {
    const message = {
      ...baseQueryPoolCreatorListResponse,
    } as QueryPoolCreatorListResponse;
    message.poolCreatorList = (object.poolCreatorList ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: QueryPoolCreatorListResponse): unknown {
    const obj: any = {};
    if (message.poolCreatorList) {
      obj.poolCreatorList = message.poolCreatorList.map((e) => e);
    } else {
      obj.poolCreatorList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolCreatorListResponse>
  ): QueryPoolCreatorListResponse {
    const message = {
      ...baseQueryPoolCreatorListResponse,
    } as QueryPoolCreatorListResponse;
    message.poolCreatorList = (object.poolCreatorList ?? []).map((e) => e);
    return message;
  },
};

const baseQueryProviderSwitchRequest: object = {};

export const QueryProviderSwitchRequest = {
  encode(
    _: QueryProviderSwitchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
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

  fromJSON(_: any): QueryProviderSwitchRequest {
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
    return message;
  },

  toJSON(_: QueryProviderSwitchRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryProviderSwitchRequest>
  ): QueryProviderSwitchRequest {
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
    return message;
  },
};

const baseQueryProviderSwitchResponse: object = { providerSwitch: false };

export const QueryProviderSwitchResponse = {
  encode(
    message: QueryProviderSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.providerSwitch === true) {
      writer.uint32(8).bool(message.providerSwitch);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerSwitch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderSwitchResponse {
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    message.providerSwitch =
      object.providerSwitch !== undefined && object.providerSwitch !== null
        ? Boolean(object.providerSwitch)
        : false;
    return message;
  },

  toJSON(message: QueryProviderSwitchResponse): unknown {
    const obj: any = {};
    message.providerSwitch !== undefined &&
      (obj.providerSwitch = message.providerSwitch);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProviderSwitchResponse>
  ): QueryProviderSwitchResponse {
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    message.providerSwitch = object.providerSwitch ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of SwapPoolInfo items. */
  SwapPoolInfo(
    request: QuerySwapPoolInfoRequest
  ): Promise<QuerySwapPoolInfoResponse>;
  /** Queries a list of SwapPoolList items. */
  SwapPoolList(
    request: QuerySwapPoolListRequest
  ): Promise<QuerySwapPoolListResponse>;
  /** Queries a list of ProviderList items. */
  ProviderList(
    request: QueryProviderListRequest
  ): Promise<QueryProviderListResponse>;
  /** Queries a list of PoolCreatorList items. */
  PoolCreatorList(
    request: QueryPoolCreatorListRequest
  ): Promise<QueryPoolCreatorListResponse>;
  /** Queries a list of ProviderSwitch items. */
  ProviderSwitch(
    request: QueryProviderSwitchRequest
  ): Promise<QueryProviderSwitchResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SwapPoolInfo = this.SwapPoolInfo.bind(this);
    this.SwapPoolList = this.SwapPoolList.bind(this);
    this.ProviderList = this.ProviderList.bind(this);
    this.PoolCreatorList = this.PoolCreatorList.bind(this);
    this.ProviderSwitch = this.ProviderSwitch.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  SwapPoolInfo(
    request: QuerySwapPoolInfoRequest
  ): Promise<QuerySwapPoolInfoResponse> {
    const data = QuerySwapPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "SwapPoolInfo",
      data
    );
    return promise.then((data) =>
      QuerySwapPoolInfoResponse.decode(new _m0.Reader(data))
    );
  }

  SwapPoolList(
    request: QuerySwapPoolListRequest
  ): Promise<QuerySwapPoolListResponse> {
    const data = QuerySwapPoolListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "SwapPoolList",
      data
    );
    return promise.then((data) =>
      QuerySwapPoolListResponse.decode(new _m0.Reader(data))
    );
  }

  ProviderList(
    request: QueryProviderListRequest
  ): Promise<QueryProviderListResponse> {
    const data = QueryProviderListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "ProviderList",
      data
    );
    return promise.then((data) =>
      QueryProviderListResponse.decode(new _m0.Reader(data))
    );
  }

  PoolCreatorList(
    request: QueryPoolCreatorListRequest
  ): Promise<QueryPoolCreatorListResponse> {
    const data = QueryPoolCreatorListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "PoolCreatorList",
      data
    );
    return promise.then((data) =>
      QueryPoolCreatorListResponse.decode(new _m0.Reader(data))
    );
  }

  ProviderSwitch(
    request: QueryProviderSwitchRequest
  ): Promise<QueryProviderSwitchResponse> {
    const data = QueryProviderSwitchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Query",
      "ProviderSwitch",
      data
    );
    return promise.then((data) =>
      QueryProviderSwitchResponse.decode(new _m0.Reader(data))
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

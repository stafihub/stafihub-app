//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { SwapPool, SwapPoolSDKType } from "./models";
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
export interface QuerySwapPoolInfoRequest {
  lpDenom: string;
}
export interface QuerySwapPoolInfoRequestSDKType {
  lpDenom: string;
}
export interface QuerySwapPoolInfoResponse {
  swapPool?: SwapPool;
}
export interface QuerySwapPoolInfoResponseSDKType {
  swapPool?: SwapPoolSDKType;
}
export interface QuerySwapPoolListRequest {}
export interface QuerySwapPoolListRequestSDKType {}
export interface QuerySwapPoolListResponse {
  swapPoolList: SwapPool[];
}
export interface QuerySwapPoolListResponseSDKType {
  swapPoolList: SwapPoolSDKType[];
}
export interface QueryProviderListRequest {}
export interface QueryProviderListRequestSDKType {}
export interface QueryProviderListResponse {
  providerList: string[];
}
export interface QueryProviderListResponseSDKType {
  providerList: string[];
}
export interface QueryPoolCreatorListRequest {}
export interface QueryPoolCreatorListRequestSDKType {}
export interface QueryPoolCreatorListResponse {
  poolCreatorList: string[];
}
export interface QueryPoolCreatorListResponseSDKType {
  poolCreatorList: string[];
}
export interface QueryProviderSwitchRequest {}
export interface QueryProviderSwitchRequestSDKType {}
export interface QueryProviderSwitchResponse {
  providerSwitch: boolean;
}
export interface QueryProviderSwitchResponseSDKType {
  providerSwitch: boolean;
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

function createBaseQuerySwapPoolInfoRequest(): QuerySwapPoolInfoRequest {
  return {
    lpDenom: ""
  };
}

export const QuerySwapPoolInfoRequest = {
  encode(message: QuerySwapPoolInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpDenom !== "") {
      writer.uint32(10).string(message.lpDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapPoolInfoRequest();

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

  fromPartial(object: DeepPartial<QuerySwapPoolInfoRequest>): QuerySwapPoolInfoRequest {
    const message = createBaseQuerySwapPoolInfoRequest();
    message.lpDenom = object.lpDenom ?? "";
    return message;
  }

};

function createBaseQuerySwapPoolInfoResponse(): QuerySwapPoolInfoResponse {
  return {
    swapPool: undefined
  };
}

export const QuerySwapPoolInfoResponse = {
  encode(message: QuerySwapPoolInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapPool !== undefined) {
      SwapPool.encode(message.swapPool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapPoolInfoResponse();

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

  fromPartial(object: DeepPartial<QuerySwapPoolInfoResponse>): QuerySwapPoolInfoResponse {
    const message = createBaseQuerySwapPoolInfoResponse();
    message.swapPool = object.swapPool !== undefined && object.swapPool !== null ? SwapPool.fromPartial(object.swapPool) : undefined;
    return message;
  }

};

function createBaseQuerySwapPoolListRequest(): QuerySwapPoolListRequest {
  return {};
}

export const QuerySwapPoolListRequest = {
  encode(_: QuerySwapPoolListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapPoolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapPoolListRequest();

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

  fromPartial(_: DeepPartial<QuerySwapPoolListRequest>): QuerySwapPoolListRequest {
    const message = createBaseQuerySwapPoolListRequest();
    return message;
  }

};

function createBaseQuerySwapPoolListResponse(): QuerySwapPoolListResponse {
  return {
    swapPoolList: []
  };
}

export const QuerySwapPoolListResponse = {
  encode(message: QuerySwapPoolListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.swapPoolList) {
      SwapPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapPoolListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapPoolListResponse();

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

  fromPartial(object: DeepPartial<QuerySwapPoolListResponse>): QuerySwapPoolListResponse {
    const message = createBaseQuerySwapPoolListResponse();
    message.swapPoolList = object.swapPoolList?.map(e => SwapPool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryProviderListRequest(): QueryProviderListRequest {
  return {};
}

export const QueryProviderListRequest = {
  encode(_: QueryProviderListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderListRequest();

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

  fromPartial(_: DeepPartial<QueryProviderListRequest>): QueryProviderListRequest {
    const message = createBaseQueryProviderListRequest();
    return message;
  }

};

function createBaseQueryProviderListResponse(): QueryProviderListResponse {
  return {
    providerList: []
  };
}

export const QueryProviderListResponse = {
  encode(message: QueryProviderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerList) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderListResponse();

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

  fromPartial(object: DeepPartial<QueryProviderListResponse>): QueryProviderListResponse {
    const message = createBaseQueryProviderListResponse();
    message.providerList = object.providerList?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryPoolCreatorListRequest(): QueryPoolCreatorListRequest {
  return {};
}

export const QueryPoolCreatorListRequest = {
  encode(_: QueryPoolCreatorListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolCreatorListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolCreatorListRequest();

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

  fromPartial(_: DeepPartial<QueryPoolCreatorListRequest>): QueryPoolCreatorListRequest {
    const message = createBaseQueryPoolCreatorListRequest();
    return message;
  }

};

function createBaseQueryPoolCreatorListResponse(): QueryPoolCreatorListResponse {
  return {
    poolCreatorList: []
  };
}

export const QueryPoolCreatorListResponse = {
  encode(message: QueryPoolCreatorListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolCreatorList) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolCreatorListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolCreatorListResponse();

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

  fromPartial(object: DeepPartial<QueryPoolCreatorListResponse>): QueryPoolCreatorListResponse {
    const message = createBaseQueryPoolCreatorListResponse();
    message.poolCreatorList = object.poolCreatorList?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryProviderSwitchRequest(): QueryProviderSwitchRequest {
  return {};
}

export const QueryProviderSwitchRequest = {
  encode(_: QueryProviderSwitchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderSwitchRequest();

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

  fromPartial(_: DeepPartial<QueryProviderSwitchRequest>): QueryProviderSwitchRequest {
    const message = createBaseQueryProviderSwitchRequest();
    return message;
  }

};

function createBaseQueryProviderSwitchResponse(): QueryProviderSwitchResponse {
  return {
    providerSwitch: false
  };
}

export const QueryProviderSwitchResponse = {
  encode(message: QueryProviderSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerSwitch === true) {
      writer.uint32(8).bool(message.providerSwitch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderSwitchResponse();

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

  fromPartial(object: DeepPartial<QueryProviderSwitchResponse>): QueryProviderSwitchResponse {
    const message = createBaseQueryProviderSwitchResponse();
    message.providerSwitch = object.providerSwitch ?? false;
    return message;
  }

};
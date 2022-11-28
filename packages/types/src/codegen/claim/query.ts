//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
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
export interface QueryIsClaimedRequest {
  round: Long;
  index: Long;
}
export interface QueryIsClaimedRequestSDKType {
  round: Long;
  index: Long;
}
export interface QueryIsClaimedResponse {
  isClaimed: boolean;
}
export interface QueryIsClaimedResponseSDKType {
  isClaimed: boolean;
}
export interface QueryClaimSwitchRequest {
  round: Long;
}
export interface QueryClaimSwitchRequestSDKType {
  round: Long;
}
export interface QueryClaimSwitchResponse {
  isOpen: boolean;
}
export interface QueryClaimSwitchResponseSDKType {
  isOpen: boolean;
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

function createBaseQueryIsClaimedRequest(): QueryIsClaimedRequest {
  return {
    round: Long.UZERO,
    index: Long.UZERO
  };
}

export const QueryIsClaimedRequest = {
  encode(message: QueryIsClaimedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsClaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsClaimedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        case 2:
          message.index = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIsClaimedRequest>): QueryIsClaimedRequest {
    const message = createBaseQueryIsClaimedRequest();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIsClaimedResponse(): QueryIsClaimedResponse {
  return {
    isClaimed: false
  };
}

export const QueryIsClaimedResponse = {
  encode(message: QueryIsClaimedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isClaimed === true) {
      writer.uint32(8).bool(message.isClaimed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsClaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsClaimedResponse();

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

  fromPartial(object: DeepPartial<QueryIsClaimedResponse>): QueryIsClaimedResponse {
    const message = createBaseQueryIsClaimedResponse();
    message.isClaimed = object.isClaimed ?? false;
    return message;
  }

};

function createBaseQueryClaimSwitchRequest(): QueryClaimSwitchRequest {
  return {
    round: Long.UZERO
  };
}

export const QueryClaimSwitchRequest = {
  encode(message: QueryClaimSwitchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimSwitchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimSwitchRequest>): QueryClaimSwitchRequest {
    const message = createBaseQueryClaimSwitchRequest();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseQueryClaimSwitchResponse(): QueryClaimSwitchResponse {
  return {
    isOpen: false
  };
}

export const QueryClaimSwitchResponse = {
  encode(message: QueryClaimSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOpen === true) {
      writer.uint32(8).bool(message.isOpen);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimSwitchResponse();

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

  fromPartial(object: DeepPartial<QueryClaimSwitchResponse>): QueryClaimSwitchResponse {
    const message = createBaseQueryClaimSwitchResponse();
    message.isOpen = object.isOpen ?? false;
    return message;
  }

};
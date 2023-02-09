//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { Proposal, ProposalSDKType } from "./proposal";
import { ResourceIdToDenom, ResourceIdToDenomSDKType, BannedDenom, BannedDenomSDKType } from "./genesis";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
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
export interface QueryChaindIdsRequest {}
export interface QueryChaindIdsRequestSDKType {}
export interface QueryChaindIdsResponse {
  chainId: number[];
}
export interface QueryChaindIdsResponseSDKType {
  chainId: number[];
}
export interface QueryProposalDetailRequest {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}
export interface QueryProposalDetailRequestSDKType {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}
export interface QueryProposalDetailResponse {
  proposal?: Proposal;
}
export interface QueryProposalDetailResponseSDKType {
  proposal?: ProposalSDKType;
}
export interface QueryResourceidToDenomsRequest {}
export interface QueryResourceidToDenomsRequestSDKType {}
export interface QueryResourceidToDenomsResponse {
  resourceidToDenoms: ResourceIdToDenom[];
}
export interface QueryResourceidToDenomsResponseSDKType {
  resourceidToDenoms: ResourceIdToDenomSDKType[];
}
export interface QueryRelayFeeReceiverRequest {}
export interface QueryRelayFeeReceiverRequestSDKType {}
export interface QueryRelayFeeReceiverResponse {
  receiver: string;
}
export interface QueryRelayFeeReceiverResponseSDKType {
  receiver: string;
}
export interface QueryRelayFeeRequest {
  chainId: number;
}
export interface QueryRelayFeeRequestSDKType {
  chainId: number;
}
export interface QueryRelayFeeResponse {
  value?: Coin;
}
export interface QueryRelayFeeResponseSDKType {
  value?: CoinSDKType;
}
export interface QueryBannedDenomListRequest {}
export interface QueryBannedDenomListRequestSDKType {}
export interface QueryBannedDenomListResponse {
  list: BannedDenom[];
}
export interface QueryBannedDenomListResponseSDKType {
  list: BannedDenomSDKType[];
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

function createBaseQueryChaindIdsRequest(): QueryChaindIdsRequest {
  return {};
}

export const QueryChaindIdsRequest = {
  encode(_: QueryChaindIdsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChaindIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChaindIdsRequest();

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

  fromPartial(_: DeepPartial<QueryChaindIdsRequest>): QueryChaindIdsRequest {
    const message = createBaseQueryChaindIdsRequest();
    return message;
  }

};

function createBaseQueryChaindIdsResponse(): QueryChaindIdsResponse {
  return {
    chainId: []
  };
}

export const QueryChaindIdsResponse = {
  encode(message: QueryChaindIdsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.chainId) {
      writer.uint32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChaindIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChaindIdsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.chainId.push(reader.uint32());
            }
          } else {
            message.chainId.push(reader.uint32());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChaindIdsResponse>): QueryChaindIdsResponse {
    const message = createBaseQueryChaindIdsResponse();
    message.chainId = object.chainId?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryProposalDetailRequest(): QueryProposalDetailRequest {
  return {
    chainId: 0,
    depositNonce: Long.UZERO,
    resourceId: "",
    amount: "",
    receiver: ""
  };
}

export const QueryProposalDetailRequest = {
  encode(message: QueryProposalDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    if (!message.depositNonce.isZero()) {
      writer.uint32(16).uint64(message.depositNonce);
    }

    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalDetailRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;

        case 2:
          message.depositNonce = (reader.uint64() as Long);
          break;

        case 3:
          message.resourceId = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalDetailRequest>): QueryProposalDetailRequest {
    const message = createBaseQueryProposalDetailRequest();
    message.chainId = object.chainId ?? 0;
    message.depositNonce = object.depositNonce !== undefined && object.depositNonce !== null ? Long.fromValue(object.depositNonce) : Long.UZERO;
    message.resourceId = object.resourceId ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseQueryProposalDetailResponse(): QueryProposalDetailResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalDetailResponse = {
  encode(message: QueryProposalDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalDetailResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalDetailResponse>): QueryProposalDetailResponse {
    const message = createBaseQueryProposalDetailResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseQueryResourceidToDenomsRequest(): QueryResourceidToDenomsRequest {
  return {};
}

export const QueryResourceidToDenomsRequest = {
  encode(_: QueryResourceidToDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceidToDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceidToDenomsRequest();

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

  fromPartial(_: DeepPartial<QueryResourceidToDenomsRequest>): QueryResourceidToDenomsRequest {
    const message = createBaseQueryResourceidToDenomsRequest();
    return message;
  }

};

function createBaseQueryResourceidToDenomsResponse(): QueryResourceidToDenomsResponse {
  return {
    resourceidToDenoms: []
  };
}

export const QueryResourceidToDenomsResponse = {
  encode(message: QueryResourceidToDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceidToDenoms) {
      ResourceIdToDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceidToDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceidToDenomsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceidToDenoms.push(ResourceIdToDenom.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryResourceidToDenomsResponse>): QueryResourceidToDenomsResponse {
    const message = createBaseQueryResourceidToDenomsResponse();
    message.resourceidToDenoms = object.resourceidToDenoms?.map(e => ResourceIdToDenom.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRelayFeeReceiverRequest(): QueryRelayFeeReceiverRequest {
  return {};
}

export const QueryRelayFeeReceiverRequest = {
  encode(_: QueryRelayFeeReceiverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayFeeReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayFeeReceiverRequest();

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

  fromPartial(_: DeepPartial<QueryRelayFeeReceiverRequest>): QueryRelayFeeReceiverRequest {
    const message = createBaseQueryRelayFeeReceiverRequest();
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

function createBaseQueryRelayFeeRequest(): QueryRelayFeeRequest {
  return {
    chainId: 0
  };
}

export const QueryRelayFeeRequest = {
  encode(message: QueryRelayFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRelayFeeRequest>): QueryRelayFeeRequest {
    const message = createBaseQueryRelayFeeRequest();
    message.chainId = object.chainId ?? 0;
    return message;
  }

};

function createBaseQueryRelayFeeResponse(): QueryRelayFeeResponse {
  return {
    value: undefined
  };
}

export const QueryRelayFeeResponse = {
  encode(message: QueryRelayFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRelayFeeResponse>): QueryRelayFeeResponse {
    const message = createBaseQueryRelayFeeResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseQueryBannedDenomListRequest(): QueryBannedDenomListRequest {
  return {};
}

export const QueryBannedDenomListRequest = {
  encode(_: QueryBannedDenomListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBannedDenomListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBannedDenomListRequest();

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

  fromPartial(_: DeepPartial<QueryBannedDenomListRequest>): QueryBannedDenomListRequest {
    const message = createBaseQueryBannedDenomListRequest();
    return message;
  }

};

function createBaseQueryBannedDenomListResponse(): QueryBannedDenomListResponse {
  return {
    list: []
  };
}

export const QueryBannedDenomListResponse = {
  encode(message: QueryBannedDenomListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      BannedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBannedDenomListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBannedDenomListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(BannedDenom.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBannedDenomListResponse>): QueryBannedDenomListResponse {
    const message = createBaseQueryBannedDenomListResponse();
    message.list = object.list?.map(e => BannedDenom.fromPartial(e)) || [];
    return message;
  }

};
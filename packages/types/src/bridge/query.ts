/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../bridge/params";
import { Proposal } from "../bridge/proposal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { ResourceIdToDenom, BannedDenom } from "../bridge/genesis";

export const protobufPackage = "stafihub.stafihub.bridge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryChaindIdsRequest {}

export interface QueryChaindIdsResponse {
  chainId: number[];
}

export interface QueryProposalDetailRequest {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}

export interface QueryProposalDetailResponse {
  proposal?: Proposal;
}

export interface QueryResourceidToDenomsRequest {}

export interface QueryResourceidToDenomsResponse {
  resourceidToDenoms: ResourceIdToDenom[];
}

export interface QueryRelayFeeReceiverRequest {}

export interface QueryRelayFeeReceiverResponse {
  receiver: string;
}

export interface QueryRelayFeeRequest {
  chainId: number;
}

export interface QueryRelayFeeResponse {
  value?: Coin;
}

export interface QueryBannedDenomListRequest {}

export interface QueryBannedDenomListResponse {
  list: BannedDenom[];
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

const baseQueryChaindIdsRequest: object = {};

export const QueryChaindIdsRequest = {
  encode(
    _: QueryChaindIdsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChaindIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChaindIdsRequest } as QueryChaindIdsRequest;
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

  fromJSON(_: any): QueryChaindIdsRequest {
    const message = { ...baseQueryChaindIdsRequest } as QueryChaindIdsRequest;
    return message;
  },

  toJSON(_: QueryChaindIdsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryChaindIdsRequest>): QueryChaindIdsRequest {
    const message = { ...baseQueryChaindIdsRequest } as QueryChaindIdsRequest;
    return message;
  },
};

const baseQueryChaindIdsResponse: object = { chainId: 0 };

export const QueryChaindIdsResponse = {
  encode(
    message: QueryChaindIdsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.chainId) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChaindIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChaindIdsResponse } as QueryChaindIdsResponse;
    message.chainId = [];
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

  fromJSON(object: any): QueryChaindIdsResponse {
    const message = { ...baseQueryChaindIdsResponse } as QueryChaindIdsResponse;
    message.chainId = (object.chainId ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: QueryChaindIdsResponse): unknown {
    const obj: any = {};
    if (message.chainId) {
      obj.chainId = message.chainId.map((e) => e);
    } else {
      obj.chainId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChaindIdsResponse>
  ): QueryChaindIdsResponse {
    const message = { ...baseQueryChaindIdsResponse } as QueryChaindIdsResponse;
    message.chainId = (object.chainId ?? []).map((e) => e);
    return message;
  },
};

const baseQueryProposalDetailRequest: object = {
  chainId: 0,
  depositNonce: Long.UZERO,
  resourceId: "",
  amount: "",
  receiver: "",
};

export const QueryProposalDetailRequest = {
  encode(
    message: QueryProposalDetailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalDetailRequest,
    } as QueryProposalDetailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.depositNonce = reader.uint64() as Long;
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

  fromJSON(object: any): QueryProposalDetailRequest {
    const message = {
      ...baseQueryProposalDetailRequest,
    } as QueryProposalDetailRequest;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.depositNonce =
      object.depositNonce !== undefined && object.depositNonce !== null
        ? Long.fromString(object.depositNonce)
        : Long.UZERO;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: QueryProposalDetailRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.depositNonce !== undefined &&
      (obj.depositNonce = (message.depositNonce || Long.UZERO).toString());
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalDetailRequest>
  ): QueryProposalDetailRequest {
    const message = {
      ...baseQueryProposalDetailRequest,
    } as QueryProposalDetailRequest;
    message.chainId = object.chainId ?? 0;
    message.depositNonce =
      object.depositNonce !== undefined && object.depositNonce !== null
        ? Long.fromValue(object.depositNonce)
        : Long.UZERO;
    message.resourceId = object.resourceId ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseQueryProposalDetailResponse: object = {};

export const QueryProposalDetailResponse = {
  encode(
    message: QueryProposalDetailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalDetailResponse,
    } as QueryProposalDetailResponse;
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

  fromJSON(object: any): QueryProposalDetailResponse {
    const message = {
      ...baseQueryProposalDetailResponse,
    } as QueryProposalDetailResponse;
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromJSON(object.proposal)
        : undefined;
    return message;
  },

  toJSON(message: QueryProposalDetailResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalDetailResponse>
  ): QueryProposalDetailResponse {
    const message = {
      ...baseQueryProposalDetailResponse,
    } as QueryProposalDetailResponse;
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

const baseQueryResourceidToDenomsRequest: object = {};

export const QueryResourceidToDenomsRequest = {
  encode(
    _: QueryResourceidToDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryResourceidToDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryResourceidToDenomsRequest,
    } as QueryResourceidToDenomsRequest;
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

  fromJSON(_: any): QueryResourceidToDenomsRequest {
    const message = {
      ...baseQueryResourceidToDenomsRequest,
    } as QueryResourceidToDenomsRequest;
    return message;
  },

  toJSON(_: QueryResourceidToDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryResourceidToDenomsRequest>
  ): QueryResourceidToDenomsRequest {
    const message = {
      ...baseQueryResourceidToDenomsRequest,
    } as QueryResourceidToDenomsRequest;
    return message;
  },
};

const baseQueryResourceidToDenomsResponse: object = {};

export const QueryResourceidToDenomsResponse = {
  encode(
    message: QueryResourceidToDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resourceidToDenoms) {
      ResourceIdToDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryResourceidToDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryResourceidToDenomsResponse,
    } as QueryResourceidToDenomsResponse;
    message.resourceidToDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceidToDenoms.push(
            ResourceIdToDenom.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResourceidToDenomsResponse {
    const message = {
      ...baseQueryResourceidToDenomsResponse,
    } as QueryResourceidToDenomsResponse;
    message.resourceidToDenoms = (object.resourceidToDenoms ?? []).map(
      (e: any) => ResourceIdToDenom.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryResourceidToDenomsResponse): unknown {
    const obj: any = {};
    if (message.resourceidToDenoms) {
      obj.resourceidToDenoms = message.resourceidToDenoms.map((e) =>
        e ? ResourceIdToDenom.toJSON(e) : undefined
      );
    } else {
      obj.resourceidToDenoms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryResourceidToDenomsResponse>
  ): QueryResourceidToDenomsResponse {
    const message = {
      ...baseQueryResourceidToDenomsResponse,
    } as QueryResourceidToDenomsResponse;
    message.resourceidToDenoms = (object.resourceidToDenoms ?? []).map((e) =>
      ResourceIdToDenom.fromPartial(e)
    );
    return message;
  },
};

const baseQueryRelayFeeReceiverRequest: object = {};

export const QueryRelayFeeReceiverRequest = {
  encode(
    _: QueryRelayFeeReceiverRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRelayFeeReceiverRequest {
    const message = {
      ...baseQueryRelayFeeReceiverRequest,
    } as QueryRelayFeeReceiverRequest;
    return message;
  },

  toJSON(_: QueryRelayFeeReceiverRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRelayFeeReceiverRequest>
  ): QueryRelayFeeReceiverRequest {
    const message = {
      ...baseQueryRelayFeeReceiverRequest,
    } as QueryRelayFeeReceiverRequest;
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

const baseQueryRelayFeeRequest: object = { chainId: 0 };

export const QueryRelayFeeRequest = {
  encode(
    message: QueryRelayFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelayFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRelayFeeRequest } as QueryRelayFeeRequest;
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

  fromJSON(object: any): QueryRelayFeeRequest {
    const message = { ...baseQueryRelayFeeRequest } as QueryRelayFeeRequest;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    return message;
  },

  toJSON(message: QueryRelayFeeRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRelayFeeRequest>): QueryRelayFeeRequest {
    const message = { ...baseQueryRelayFeeRequest } as QueryRelayFeeRequest;
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

const baseQueryRelayFeeResponse: object = {};

export const QueryRelayFeeResponse = {
  encode(
    message: QueryRelayFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRelayFeeResponse } as QueryRelayFeeResponse;
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

  fromJSON(object: any): QueryRelayFeeResponse {
    const message = { ...baseQueryRelayFeeResponse } as QueryRelayFeeResponse;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: QueryRelayFeeResponse): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRelayFeeResponse>
  ): QueryRelayFeeResponse {
    const message = { ...baseQueryRelayFeeResponse } as QueryRelayFeeResponse;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseQueryBannedDenomListRequest: object = {};

export const QueryBannedDenomListRequest = {
  encode(
    _: QueryBannedDenomListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBannedDenomListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBannedDenomListRequest,
    } as QueryBannedDenomListRequest;
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

  fromJSON(_: any): QueryBannedDenomListRequest {
    const message = {
      ...baseQueryBannedDenomListRequest,
    } as QueryBannedDenomListRequest;
    return message;
  },

  toJSON(_: QueryBannedDenomListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryBannedDenomListRequest>
  ): QueryBannedDenomListRequest {
    const message = {
      ...baseQueryBannedDenomListRequest,
    } as QueryBannedDenomListRequest;
    return message;
  },
};

const baseQueryBannedDenomListResponse: object = {};

export const QueryBannedDenomListResponse = {
  encode(
    message: QueryBannedDenomListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.list) {
      BannedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBannedDenomListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBannedDenomListResponse,
    } as QueryBannedDenomListResponse;
    message.list = [];
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

  fromJSON(object: any): QueryBannedDenomListResponse {
    const message = {
      ...baseQueryBannedDenomListResponse,
    } as QueryBannedDenomListResponse;
    message.list = (object.list ?? []).map((e: any) => BannedDenom.fromJSON(e));
    return message;
  },

  toJSON(message: QueryBannedDenomListResponse): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) =>
        e ? BannedDenom.toJSON(e) : undefined
      );
    } else {
      obj.list = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBannedDenomListResponse>
  ): QueryBannedDenomListResponse {
    const message = {
      ...baseQueryBannedDenomListResponse,
    } as QueryBannedDenomListResponse;
    message.list = (object.list ?? []).map((e) => BannedDenom.fromPartial(e));
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ChaindIds items. */
  ChaindIds(request: QueryChaindIdsRequest): Promise<QueryChaindIdsResponse>;
  /** Queries a list of ProposalDetail items. */
  ProposalDetail(
    request: QueryProposalDetailRequest
  ): Promise<QueryProposalDetailResponse>;
  /** Queries a list of ResourceidToDenoms items. */
  ResourceidToDenoms(
    request: QueryResourceidToDenomsRequest
  ): Promise<QueryResourceidToDenomsResponse>;
  /** Queries a list of RelayFeeReceiver items. */
  RelayFeeReceiver(
    request: QueryRelayFeeReceiverRequest
  ): Promise<QueryRelayFeeReceiverResponse>;
  /** Queries a list of RelayFee items. */
  RelayFee(request: QueryRelayFeeRequest): Promise<QueryRelayFeeResponse>;
  /** Queries a list of BannedDenomList items. */
  BannedDenomList(
    request: QueryBannedDenomListRequest
  ): Promise<QueryBannedDenomListResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ChaindIds = this.ChaindIds.bind(this);
    this.ProposalDetail = this.ProposalDetail.bind(this);
    this.ResourceidToDenoms = this.ResourceidToDenoms.bind(this);
    this.RelayFeeReceiver = this.RelayFeeReceiver.bind(this);
    this.RelayFee = this.RelayFee.bind(this);
    this.BannedDenomList = this.BannedDenomList.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ChaindIds(request: QueryChaindIdsRequest): Promise<QueryChaindIdsResponse> {
    const data = QueryChaindIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "ChaindIds",
      data
    );
    return promise.then((data) =>
      QueryChaindIdsResponse.decode(new _m0.Reader(data))
    );
  }

  ProposalDetail(
    request: QueryProposalDetailRequest
  ): Promise<QueryProposalDetailResponse> {
    const data = QueryProposalDetailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "ProposalDetail",
      data
    );
    return promise.then((data) =>
      QueryProposalDetailResponse.decode(new _m0.Reader(data))
    );
  }

  ResourceidToDenoms(
    request: QueryResourceidToDenomsRequest
  ): Promise<QueryResourceidToDenomsResponse> {
    const data = QueryResourceidToDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "ResourceidToDenoms",
      data
    );
    return promise.then((data) =>
      QueryResourceidToDenomsResponse.decode(new _m0.Reader(data))
    );
  }

  RelayFeeReceiver(
    request: QueryRelayFeeReceiverRequest
  ): Promise<QueryRelayFeeReceiverResponse> {
    const data = QueryRelayFeeReceiverRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "RelayFeeReceiver",
      data
    );
    return promise.then((data) =>
      QueryRelayFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  RelayFee(request: QueryRelayFeeRequest): Promise<QueryRelayFeeResponse> {
    const data = QueryRelayFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "RelayFee",
      data
    );
    return promise.then((data) =>
      QueryRelayFeeResponse.decode(new _m0.Reader(data))
    );
  }

  BannedDenomList(
    request: QueryBannedDenomListRequest
  ): Promise<QueryBannedDenomListResponse> {
    const data = QueryBannedDenomListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Query",
      "BannedDenomList",
      data
    );
    return promise.then((data) =>
      QueryBannedDenomListResponse.decode(new _m0.Reader(data))
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

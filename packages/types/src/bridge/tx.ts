/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DenomType,
  denomTypeFromJSON,
  denomTypeToJSON,
} from "../bridge/genesis";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.bridge";

export interface MsgSetResourceidToDenom {
  creator: string;
  resourceId: string;
  denom: string;
  denomType: DenomType;
}

export interface MsgSetResourceidToDenomResponse {}

export interface MsgDeposit {
  creator: string;
  destChainId: number;
  denom: string;
  amount: string;
  receiver: string;
}

export interface MsgDepositResponse {}

export interface MsgAddChainId {
  creator: string;
  chainId: number;
}

export interface MsgAddChainIdResponse {}

export interface MsgVoteProposal {
  creator: string;
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}

export interface MsgVoteProposalResponse {}

export interface MsgRmChainId {
  creator: string;
  chainId: number;
}

export interface MsgRmChainIdResponse {}

export interface MsgSetRelayFeeReceiver {
  creator: string;
  address: string;
}

export interface MsgSetRelayFeeReceiverResponse {}

export interface MsgSetRelayFee {
  creator: string;
  chainId: number;
  value?: Coin;
}

export interface MsgSetRelayFeeResponse {}

export interface MsgAddBannedDenom {
  creator: string;
  chainId: number;
  denom: string;
}

export interface MsgAddBannedDenomResponse {}

export interface MsgRmBannedDenom {
  creator: string;
  chainId: number;
  denom: string;
}

export interface MsgRmBannedDenomResponse {}

const baseMsgSetResourceidToDenom: object = {
  creator: "",
  resourceId: "",
  denom: "",
  denomType: 0,
};

export const MsgSetResourceidToDenom = {
  encode(
    message: MsgSetResourceidToDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.denomType !== 0) {
      writer.uint32(32).int32(message.denomType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetResourceidToDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetResourceidToDenom,
    } as MsgSetResourceidToDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.denomType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetResourceidToDenom {
    const message = {
      ...baseMsgSetResourceidToDenom,
    } as MsgSetResourceidToDenom;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.denomType =
      object.denomType !== undefined && object.denomType !== null
        ? denomTypeFromJSON(object.denomType)
        : 0;
    return message;
  },

  toJSON(message: MsgSetResourceidToDenom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.denomType !== undefined &&
      (obj.denomType = denomTypeToJSON(message.denomType));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetResourceidToDenom>
  ): MsgSetResourceidToDenom {
    const message = {
      ...baseMsgSetResourceidToDenom,
    } as MsgSetResourceidToDenom;
    message.creator = object.creator ?? "";
    message.resourceId = object.resourceId ?? "";
    message.denom = object.denom ?? "";
    message.denomType = object.denomType ?? 0;
    return message;
  },
};

const baseMsgSetResourceidToDenomResponse: object = {};

export const MsgSetResourceidToDenomResponse = {
  encode(
    _: MsgSetResourceidToDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetResourceidToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetResourceidToDenomResponse,
    } as MsgSetResourceidToDenomResponse;
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

  fromJSON(_: any): MsgSetResourceidToDenomResponse {
    const message = {
      ...baseMsgSetResourceidToDenomResponse,
    } as MsgSetResourceidToDenomResponse;
    return message;
  },

  toJSON(_: MsgSetResourceidToDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetResourceidToDenomResponse>
  ): MsgSetResourceidToDenomResponse {
    const message = {
      ...baseMsgSetResourceidToDenomResponse,
    } as MsgSetResourceidToDenomResponse;
    return message;
  },
};

const baseMsgDeposit: object = {
  creator: "",
  destChainId: 0,
  denom: "",
  amount: "",
  receiver: "",
};

export const MsgDeposit = {
  encode(
    message: MsgDeposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destChainId !== 0) {
      writer.uint32(16).uint32(message.destChainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeposit } as MsgDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destChainId = reader.uint32();
          break;
        case 3:
          message.denom = reader.string();
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

  fromJSON(object: any): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.destChainId =
      object.destChainId !== undefined && object.destChainId !== null
        ? Number(object.destChainId)
        : 0;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
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

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destChainId !== undefined &&
      (obj.destChainId = message.destChainId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.creator = object.creator ?? "";
    message.destChainId = object.destChainId ?? 0;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseMsgDepositResponse: object = {};

export const MsgDepositResponse = {
  encode(
    _: MsgDepositResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
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

  fromJSON(_: any): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },
};

const baseMsgAddChainId: object = { creator: "", chainId: 0 };

export const MsgAddChainId = {
  encode(
    message: MsgAddChainId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddChainId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddChainId } as MsgAddChainId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddChainId {
    const message = { ...baseMsgAddChainId } as MsgAddChainId;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    return message;
  },

  toJSON(message: MsgAddChainId): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddChainId>): MsgAddChainId {
    const message = { ...baseMsgAddChainId } as MsgAddChainId;
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

const baseMsgAddChainIdResponse: object = {};

export const MsgAddChainIdResponse = {
  encode(
    _: MsgAddChainIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddChainIdResponse } as MsgAddChainIdResponse;
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

  fromJSON(_: any): MsgAddChainIdResponse {
    const message = { ...baseMsgAddChainIdResponse } as MsgAddChainIdResponse;
    return message;
  },

  toJSON(_: MsgAddChainIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddChainIdResponse>): MsgAddChainIdResponse {
    const message = { ...baseMsgAddChainIdResponse } as MsgAddChainIdResponse;
    return message;
  },
};

const baseMsgVoteProposal: object = {
  creator: "",
  chainId: 0,
  depositNonce: Long.UZERO,
  resourceId: "",
  amount: "",
  receiver: "",
};

export const MsgVoteProposal = {
  encode(
    message: MsgVoteProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    if (!message.depositNonce.isZero()) {
      writer.uint32(24).uint64(message.depositNonce);
    }
    if (message.resourceId !== "") {
      writer.uint32(34).string(message.resourceId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteProposal } as MsgVoteProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        case 3:
          message.depositNonce = reader.uint64() as Long;
          break;
        case 4:
          message.resourceId = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoteProposal {
    const message = { ...baseMsgVoteProposal } as MsgVoteProposal;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
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

  toJSON(message: MsgVoteProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.depositNonce !== undefined &&
      (obj.depositNonce = (message.depositNonce || Long.UZERO).toString());
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVoteProposal>): MsgVoteProposal {
    const message = { ...baseMsgVoteProposal } as MsgVoteProposal;
    message.creator = object.creator ?? "";
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

const baseMsgVoteProposalResponse: object = {};

export const MsgVoteProposalResponse = {
  encode(
    _: MsgVoteProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgVoteProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgVoteProposalResponse,
    } as MsgVoteProposalResponse;
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

  fromJSON(_: any): MsgVoteProposalResponse {
    const message = {
      ...baseMsgVoteProposalResponse,
    } as MsgVoteProposalResponse;
    return message;
  },

  toJSON(_: MsgVoteProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgVoteProposalResponse>
  ): MsgVoteProposalResponse {
    const message = {
      ...baseMsgVoteProposalResponse,
    } as MsgVoteProposalResponse;
    return message;
  },
};

const baseMsgRmChainId: object = { creator: "", chainId: 0 };

export const MsgRmChainId = {
  encode(
    message: MsgRmChainId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmChainId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmChainId } as MsgRmChainId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRmChainId {
    const message = { ...baseMsgRmChainId } as MsgRmChainId;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    return message;
  },

  toJSON(message: MsgRmChainId): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmChainId>): MsgRmChainId {
    const message = { ...baseMsgRmChainId } as MsgRmChainId;
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

const baseMsgRmChainIdResponse: object = {};

export const MsgRmChainIdResponse = {
  encode(
    _: MsgRmChainIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmChainIdResponse } as MsgRmChainIdResponse;
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

  fromJSON(_: any): MsgRmChainIdResponse {
    const message = { ...baseMsgRmChainIdResponse } as MsgRmChainIdResponse;
    return message;
  },

  toJSON(_: MsgRmChainIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRmChainIdResponse>): MsgRmChainIdResponse {
    const message = { ...baseMsgRmChainIdResponse } as MsgRmChainIdResponse;
    return message;
  },
};

const baseMsgSetRelayFeeReceiver: object = { creator: "", address: "" };

export const MsgSetRelayFeeReceiver = {
  encode(
    message: MsgSetRelayFeeReceiver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRelayFeeReceiver {
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: MsgSetRelayFeeReceiver): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetRelayFeeReceiver>
  ): MsgSetRelayFeeReceiver {
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseMsgSetRelayFeeReceiverResponse: object = {};

export const MsgSetRelayFeeReceiverResponse = {
  encode(
    _: MsgSetRelayFeeReceiverResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
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

  fromJSON(_: any): MsgSetRelayFeeReceiverResponse {
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
    return message;
  },

  toJSON(_: MsgSetRelayFeeReceiverResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetRelayFeeReceiverResponse>
  ): MsgSetRelayFeeReceiverResponse {
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
    return message;
  },
};

const baseMsgSetRelayFee: object = { creator: "", chainId: 0 };

export const MsgSetRelayFee = {
  encode(
    message: MsgSetRelayFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRelayFee } as MsgSetRelayFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        case 3:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRelayFee {
    const message = { ...baseMsgSetRelayFee } as MsgSetRelayFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetRelayFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetRelayFee>): MsgSetRelayFee {
    const message = { ...baseMsgSetRelayFee } as MsgSetRelayFee;
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseMsgSetRelayFeeResponse: object = {};

export const MsgSetRelayFeeResponse = {
  encode(
    _: MsgSetRelayFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRelayFeeResponse } as MsgSetRelayFeeResponse;
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

  fromJSON(_: any): MsgSetRelayFeeResponse {
    const message = { ...baseMsgSetRelayFeeResponse } as MsgSetRelayFeeResponse;
    return message;
  },

  toJSON(_: MsgSetRelayFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetRelayFeeResponse>): MsgSetRelayFeeResponse {
    const message = { ...baseMsgSetRelayFeeResponse } as MsgSetRelayFeeResponse;
    return message;
  },
};

const baseMsgAddBannedDenom: object = { creator: "", chainId: 0, denom: "" };

export const MsgAddBannedDenom = {
  encode(
    message: MsgAddBannedDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddBannedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddBannedDenom } as MsgAddBannedDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddBannedDenom {
    const message = { ...baseMsgAddBannedDenom } as MsgAddBannedDenom;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgAddBannedDenom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddBannedDenom>): MsgAddBannedDenom {
    const message = { ...baseMsgAddBannedDenom } as MsgAddBannedDenom;
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgAddBannedDenomResponse: object = {};

export const MsgAddBannedDenomResponse = {
  encode(
    _: MsgAddBannedDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddBannedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddBannedDenomResponse,
    } as MsgAddBannedDenomResponse;
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

  fromJSON(_: any): MsgAddBannedDenomResponse {
    const message = {
      ...baseMsgAddBannedDenomResponse,
    } as MsgAddBannedDenomResponse;
    return message;
  },

  toJSON(_: MsgAddBannedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddBannedDenomResponse>
  ): MsgAddBannedDenomResponse {
    const message = {
      ...baseMsgAddBannedDenomResponse,
    } as MsgAddBannedDenomResponse;
    return message;
  },
};

const baseMsgRmBannedDenom: object = { creator: "", chainId: 0, denom: "" };

export const MsgRmBannedDenom = {
  encode(
    message: MsgRmBannedDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== 0) {
      writer.uint32(16).uint32(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmBannedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmBannedDenom } as MsgRmBannedDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.uint32();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRmBannedDenom {
    const message = { ...baseMsgRmBannedDenom } as MsgRmBannedDenom;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRmBannedDenom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmBannedDenom>): MsgRmBannedDenom {
    const message = { ...baseMsgRmBannedDenom } as MsgRmBannedDenom;
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRmBannedDenomResponse: object = {};

export const MsgRmBannedDenomResponse = {
  encode(
    _: MsgRmBannedDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmBannedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmBannedDenomResponse,
    } as MsgRmBannedDenomResponse;
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

  fromJSON(_: any): MsgRmBannedDenomResponse {
    const message = {
      ...baseMsgRmBannedDenomResponse,
    } as MsgRmBannedDenomResponse;
    return message;
  },

  toJSON(_: MsgRmBannedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmBannedDenomResponse>
  ): MsgRmBannedDenomResponse {
    const message = {
      ...baseMsgRmBannedDenomResponse,
    } as MsgRmBannedDenomResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetResourceidToDenom(
    request: MsgSetResourceidToDenom
  ): Promise<MsgSetResourceidToDenomResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  AddChainId(request: MsgAddChainId): Promise<MsgAddChainIdResponse>;
  VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
  RmChainId(request: MsgRmChainId): Promise<MsgRmChainIdResponse>;
  SetRelayFeeReceiver(
    request: MsgSetRelayFeeReceiver
  ): Promise<MsgSetRelayFeeReceiverResponse>;
  SetRelayFee(request: MsgSetRelayFee): Promise<MsgSetRelayFeeResponse>;
  AddBannedDenom(
    request: MsgAddBannedDenom
  ): Promise<MsgAddBannedDenomResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RmBannedDenom(request: MsgRmBannedDenom): Promise<MsgRmBannedDenomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetResourceidToDenom = this.SetResourceidToDenom.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.AddChainId = this.AddChainId.bind(this);
    this.VoteProposal = this.VoteProposal.bind(this);
    this.RmChainId = this.RmChainId.bind(this);
    this.SetRelayFeeReceiver = this.SetRelayFeeReceiver.bind(this);
    this.SetRelayFee = this.SetRelayFee.bind(this);
    this.AddBannedDenom = this.AddBannedDenom.bind(this);
    this.RmBannedDenom = this.RmBannedDenom.bind(this);
  }
  SetResourceidToDenom(
    request: MsgSetResourceidToDenom
  ): Promise<MsgSetResourceidToDenomResponse> {
    const data = MsgSetResourceidToDenom.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "SetResourceidToDenom",
      data
    );
    return promise.then((data) =>
      MsgSetResourceidToDenomResponse.decode(new _m0.Reader(data))
    );
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "Deposit",
      data
    );
    return promise.then((data) =>
      MsgDepositResponse.decode(new _m0.Reader(data))
    );
  }

  AddChainId(request: MsgAddChainId): Promise<MsgAddChainIdResponse> {
    const data = MsgAddChainId.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "AddChainId",
      data
    );
    return promise.then((data) =>
      MsgAddChainIdResponse.decode(new _m0.Reader(data))
    );
  }

  VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse> {
    const data = MsgVoteProposal.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "VoteProposal",
      data
    );
    return promise.then((data) =>
      MsgVoteProposalResponse.decode(new _m0.Reader(data))
    );
  }

  RmChainId(request: MsgRmChainId): Promise<MsgRmChainIdResponse> {
    const data = MsgRmChainId.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "RmChainId",
      data
    );
    return promise.then((data) =>
      MsgRmChainIdResponse.decode(new _m0.Reader(data))
    );
  }

  SetRelayFeeReceiver(
    request: MsgSetRelayFeeReceiver
  ): Promise<MsgSetRelayFeeReceiverResponse> {
    const data = MsgSetRelayFeeReceiver.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "SetRelayFeeReceiver",
      data
    );
    return promise.then((data) =>
      MsgSetRelayFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  SetRelayFee(request: MsgSetRelayFee): Promise<MsgSetRelayFeeResponse> {
    const data = MsgSetRelayFee.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "SetRelayFee",
      data
    );
    return promise.then((data) =>
      MsgSetRelayFeeResponse.decode(new _m0.Reader(data))
    );
  }

  AddBannedDenom(
    request: MsgAddBannedDenom
  ): Promise<MsgAddBannedDenomResponse> {
    const data = MsgAddBannedDenom.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "AddBannedDenom",
      data
    );
    return promise.then((data) =>
      MsgAddBannedDenomResponse.decode(new _m0.Reader(data))
    );
  }

  RmBannedDenom(request: MsgRmBannedDenom): Promise<MsgRmBannedDenomResponse> {
    const data = MsgRmBannedDenom.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.bridge.Msg",
      "RmBannedDenom",
      data
    );
    return promise.then((data) =>
      MsgRmBannedDenomResponse.decode(new _m0.Reader(data))
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

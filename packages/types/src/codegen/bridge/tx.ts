//@ts-nocheck
import { DenomType, DenomTypeSDKType } from "./genesis";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export interface MsgSetResourceidToDenom {
  creator: string;
  resourceId: string;
  denom: string;
  denomType: DenomType;
}
export interface MsgSetResourceidToDenomSDKType {
  creator: string;
  resourceId: string;
  denom: string;
  denomType: DenomTypeSDKType;
}
export interface MsgSetResourceidToDenomResponse {}
export interface MsgSetResourceidToDenomResponseSDKType {}
export interface MsgDeposit {
  creator: string;
  destChainId: number;
  denom: string;
  amount: string;
  receiver: string;
}
export interface MsgDepositSDKType {
  creator: string;
  destChainId: number;
  denom: string;
  amount: string;
  receiver: string;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseSDKType {}
export interface MsgAddChainId {
  creator: string;
  chainId: number;
}
export interface MsgAddChainIdSDKType {
  creator: string;
  chainId: number;
}
export interface MsgAddChainIdResponse {}
export interface MsgAddChainIdResponseSDKType {}
export interface MsgVoteProposal {
  creator: string;
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}
export interface MsgVoteProposalSDKType {
  creator: string;
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  amount: string;
  receiver: string;
}
export interface MsgVoteProposalResponse {}
export interface MsgVoteProposalResponseSDKType {}
export interface MsgRmChainId {
  creator: string;
  chainId: number;
}
export interface MsgRmChainIdSDKType {
  creator: string;
  chainId: number;
}
export interface MsgRmChainIdResponse {}
export interface MsgRmChainIdResponseSDKType {}
export interface MsgSetRelayFeeReceiver {
  creator: string;
  address: string;
}
export interface MsgSetRelayFeeReceiverSDKType {
  creator: string;
  address: string;
}
export interface MsgSetRelayFeeReceiverResponse {}
export interface MsgSetRelayFeeReceiverResponseSDKType {}
export interface MsgSetRelayFee {
  creator: string;
  chainId: number;
  value?: Coin;
}
export interface MsgSetRelayFeeSDKType {
  creator: string;
  chainId: number;
  value?: CoinSDKType;
}
export interface MsgSetRelayFeeResponse {}
export interface MsgSetRelayFeeResponseSDKType {}
export interface MsgAddBannedDenom {
  creator: string;
  chainId: number;
  denom: string;
}
export interface MsgAddBannedDenomSDKType {
  creator: string;
  chainId: number;
  denom: string;
}
export interface MsgAddBannedDenomResponse {}
export interface MsgAddBannedDenomResponseSDKType {}
export interface MsgRmBannedDenom {
  creator: string;
  chainId: number;
  denom: string;
}
export interface MsgRmBannedDenomSDKType {
  creator: string;
  chainId: number;
  denom: string;
}
export interface MsgRmBannedDenomResponse {}
export interface MsgRmBannedDenomResponseSDKType {}

function createBaseMsgSetResourceidToDenom(): MsgSetResourceidToDenom {
  return {
    creator: "",
    resourceId: "",
    denom: "",
    denomType: 0
  };
}

export const MsgSetResourceidToDenom = {
  encode(message: MsgSetResourceidToDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetResourceidToDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetResourceidToDenom();

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
          message.denomType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetResourceidToDenom>): MsgSetResourceidToDenom {
    const message = createBaseMsgSetResourceidToDenom();
    message.creator = object.creator ?? "";
    message.resourceId = object.resourceId ?? "";
    message.denom = object.denom ?? "";
    message.denomType = object.denomType ?? 0;
    return message;
  }

};

function createBaseMsgSetResourceidToDenomResponse(): MsgSetResourceidToDenomResponse {
  return {};
}

export const MsgSetResourceidToDenomResponse = {
  encode(_: MsgSetResourceidToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetResourceidToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetResourceidToDenomResponse();

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

  fromPartial(_: DeepPartial<MsgSetResourceidToDenomResponse>): MsgSetResourceidToDenomResponse {
    const message = createBaseMsgSetResourceidToDenomResponse();
    return message;
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    destChainId: 0,
    denom: "",
    amount: "",
    receiver: ""
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgDeposit();

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

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.destChainId = object.destChainId ?? 0;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};

function createBaseMsgAddChainId(): MsgAddChainId {
  return {
    creator: "",
    chainId: 0
  };
}

export const MsgAddChainId = {
  encode(message: MsgAddChainId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgAddChainId();

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

  fromPartial(object: DeepPartial<MsgAddChainId>): MsgAddChainId {
    const message = createBaseMsgAddChainId();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  }

};

function createBaseMsgAddChainIdResponse(): MsgAddChainIdResponse {
  return {};
}

export const MsgAddChainIdResponse = {
  encode(_: MsgAddChainIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddChainIdResponse();

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

  fromPartial(_: DeepPartial<MsgAddChainIdResponse>): MsgAddChainIdResponse {
    const message = createBaseMsgAddChainIdResponse();
    return message;
  }

};

function createBaseMsgVoteProposal(): MsgVoteProposal {
  return {
    creator: "",
    chainId: 0,
    depositNonce: Long.UZERO,
    resourceId: "",
    amount: "",
    receiver: ""
  };
}

export const MsgVoteProposal = {
  encode(message: MsgVoteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgVoteProposal();

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
          message.depositNonce = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<MsgVoteProposal>): MsgVoteProposal {
    const message = createBaseMsgVoteProposal();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.depositNonce = object.depositNonce !== undefined && object.depositNonce !== null ? Long.fromValue(object.depositNonce) : Long.UZERO;
    message.resourceId = object.resourceId ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgVoteProposalResponse(): MsgVoteProposalResponse {
  return {};
}

export const MsgVoteProposalResponse = {
  encode(_: MsgVoteProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteProposalResponse();

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

  fromPartial(_: DeepPartial<MsgVoteProposalResponse>): MsgVoteProposalResponse {
    const message = createBaseMsgVoteProposalResponse();
    return message;
  }

};

function createBaseMsgRmChainId(): MsgRmChainId {
  return {
    creator: "",
    chainId: 0
  };
}

export const MsgRmChainId = {
  encode(message: MsgRmChainId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRmChainId();

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

  fromPartial(object: DeepPartial<MsgRmChainId>): MsgRmChainId {
    const message = createBaseMsgRmChainId();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  }

};

function createBaseMsgRmChainIdResponse(): MsgRmChainIdResponse {
  return {};
}

export const MsgRmChainIdResponse = {
  encode(_: MsgRmChainIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmChainIdResponse();

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

  fromPartial(_: DeepPartial<MsgRmChainIdResponse>): MsgRmChainIdResponse {
    const message = createBaseMsgRmChainIdResponse();
    return message;
  }

};

function createBaseMsgSetRelayFeeReceiver(): MsgSetRelayFeeReceiver {
  return {
    creator: "",
    address: ""
  };
}

export const MsgSetRelayFeeReceiver = {
  encode(message: MsgSetRelayFeeReceiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayFeeReceiver();

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

  fromPartial(object: DeepPartial<MsgSetRelayFeeReceiver>): MsgSetRelayFeeReceiver {
    const message = createBaseMsgSetRelayFeeReceiver();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgSetRelayFeeReceiverResponse(): MsgSetRelayFeeReceiverResponse {
  return {};
}

export const MsgSetRelayFeeReceiverResponse = {
  encode(_: MsgSetRelayFeeReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayFeeReceiverResponse();

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

  fromPartial(_: DeepPartial<MsgSetRelayFeeReceiverResponse>): MsgSetRelayFeeReceiverResponse {
    const message = createBaseMsgSetRelayFeeReceiverResponse();
    return message;
  }

};

function createBaseMsgSetRelayFee(): MsgSetRelayFee {
  return {
    creator: "",
    chainId: 0,
    value: undefined
  };
}

export const MsgSetRelayFee = {
  encode(message: MsgSetRelayFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSetRelayFee();

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

  fromPartial(object: DeepPartial<MsgSetRelayFee>): MsgSetRelayFee {
    const message = createBaseMsgSetRelayFee();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseMsgSetRelayFeeResponse(): MsgSetRelayFeeResponse {
  return {};
}

export const MsgSetRelayFeeResponse = {
  encode(_: MsgSetRelayFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayFeeResponse();

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

  fromPartial(_: DeepPartial<MsgSetRelayFeeResponse>): MsgSetRelayFeeResponse {
    const message = createBaseMsgSetRelayFeeResponse();
    return message;
  }

};

function createBaseMsgAddBannedDenom(): MsgAddBannedDenom {
  return {
    creator: "",
    chainId: 0,
    denom: ""
  };
}

export const MsgAddBannedDenom = {
  encode(message: MsgAddBannedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgAddBannedDenom();

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

  fromPartial(object: DeepPartial<MsgAddBannedDenom>): MsgAddBannedDenom {
    const message = createBaseMsgAddBannedDenom();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgAddBannedDenomResponse(): MsgAddBannedDenomResponse {
  return {};
}

export const MsgAddBannedDenomResponse = {
  encode(_: MsgAddBannedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddBannedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddBannedDenomResponse();

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

  fromPartial(_: DeepPartial<MsgAddBannedDenomResponse>): MsgAddBannedDenomResponse {
    const message = createBaseMsgAddBannedDenomResponse();
    return message;
  }

};

function createBaseMsgRmBannedDenom(): MsgRmBannedDenom {
  return {
    creator: "",
    chainId: 0,
    denom: ""
  };
}

export const MsgRmBannedDenom = {
  encode(message: MsgRmBannedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRmBannedDenom();

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

  fromPartial(object: DeepPartial<MsgRmBannedDenom>): MsgRmBannedDenom {
    const message = createBaseMsgRmBannedDenom();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgRmBannedDenomResponse(): MsgRmBannedDenomResponse {
  return {};
}

export const MsgRmBannedDenomResponse = {
  encode(_: MsgRmBannedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmBannedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmBannedDenomResponse();

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

  fromPartial(_: DeepPartial<MsgRmBannedDenomResponse>): MsgRmBannedDenomResponse {
    const message = createBaseMsgRmBannedDenomResponse();
    return message;
  }

};
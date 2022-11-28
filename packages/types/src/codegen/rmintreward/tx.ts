//@ts-nocheck
import { MintRewardActPost, MintRewardActPostSDKType } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export interface MsgAddMintRewardAct {
  creator: string;
  denom: string;
  act?: MintRewardActPost;
}
export interface MsgAddMintRewardActSDKType {
  creator: string;
  denom: string;
  act?: MintRewardActPostSDKType;
}
export interface MsgAddMintRewardActResponse {}
export interface MsgAddMintRewardActResponseSDKType {}
export interface MsgUpdateMintRewardAct {
  creator: string;
  denom: string;
  cycle: Long;
  act?: MintRewardActPost;
}
export interface MsgUpdateMintRewardActSDKType {
  creator: string;
  denom: string;
  cycle: Long;
  act?: MintRewardActPostSDKType;
}
export interface MsgUpdateMintRewardActResponse {}
export interface MsgUpdateMintRewardActResponseSDKType {}
export interface MsgClaimMintReward {
  creator: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}
export interface MsgClaimMintRewardSDKType {
  creator: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}
export interface MsgClaimMintRewardResponse {}
export interface MsgClaimMintRewardResponseSDKType {}
export interface MsgProvideRewardToken {
  creator: string;
  amount: string;
}
export interface MsgProvideRewardTokenSDKType {
  creator: string;
  amount: string;
}
export interface MsgProvideRewardTokenResponse {}
export interface MsgProvideRewardTokenResponseSDKType {}

function createBaseMsgAddMintRewardAct(): MsgAddMintRewardAct {
  return {
    creator: "",
    denom: "",
    act: undefined
  };
}

export const MsgAddMintRewardAct = {
  encode(message: MsgAddMintRewardAct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.act !== undefined) {
      MintRewardActPost.encode(message.act, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMintRewardAct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMintRewardAct();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.act = MintRewardActPost.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddMintRewardAct>): MsgAddMintRewardAct {
    const message = createBaseMsgAddMintRewardAct();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.act = object.act !== undefined && object.act !== null ? MintRewardActPost.fromPartial(object.act) : undefined;
    return message;
  }

};

function createBaseMsgAddMintRewardActResponse(): MsgAddMintRewardActResponse {
  return {};
}

export const MsgAddMintRewardActResponse = {
  encode(_: MsgAddMintRewardActResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMintRewardActResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMintRewardActResponse();

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

  fromPartial(_: DeepPartial<MsgAddMintRewardActResponse>): MsgAddMintRewardActResponse {
    const message = createBaseMsgAddMintRewardActResponse();
    return message;
  }

};

function createBaseMsgUpdateMintRewardAct(): MsgUpdateMintRewardAct {
  return {
    creator: "",
    denom: "",
    cycle: Long.UZERO,
    act: undefined
  };
}

export const MsgUpdateMintRewardAct = {
  encode(message: MsgUpdateMintRewardAct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.cycle.isZero()) {
      writer.uint32(24).uint64(message.cycle);
    }

    if (message.act !== undefined) {
      MintRewardActPost.encode(message.act, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMintRewardAct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintRewardAct();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.cycle = (reader.uint64() as Long);
          break;

        case 4:
          message.act = MintRewardActPost.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateMintRewardAct>): MsgUpdateMintRewardAct {
    const message = createBaseMsgUpdateMintRewardAct();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Long.fromValue(object.cycle) : Long.UZERO;
    message.act = object.act !== undefined && object.act !== null ? MintRewardActPost.fromPartial(object.act) : undefined;
    return message;
  }

};

function createBaseMsgUpdateMintRewardActResponse(): MsgUpdateMintRewardActResponse {
  return {};
}

export const MsgUpdateMintRewardActResponse = {
  encode(_: MsgUpdateMintRewardActResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMintRewardActResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintRewardActResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateMintRewardActResponse>): MsgUpdateMintRewardActResponse {
    const message = createBaseMsgUpdateMintRewardActResponse();
    return message;
  }

};

function createBaseMsgClaimMintReward(): MsgClaimMintReward {
  return {
    creator: "",
    denom: "",
    cycle: Long.UZERO,
    mintIndex: Long.UZERO
  };
}

export const MsgClaimMintReward = {
  encode(message: MsgClaimMintReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.cycle.isZero()) {
      writer.uint32(24).uint64(message.cycle);
    }

    if (!message.mintIndex.isZero()) {
      writer.uint32(32).uint64(message.mintIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimMintReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMintReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.cycle = (reader.uint64() as Long);
          break;

        case 4:
          message.mintIndex = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimMintReward>): MsgClaimMintReward {
    const message = createBaseMsgClaimMintReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Long.fromValue(object.cycle) : Long.UZERO;
    message.mintIndex = object.mintIndex !== undefined && object.mintIndex !== null ? Long.fromValue(object.mintIndex) : Long.UZERO;
    return message;
  }

};

function createBaseMsgClaimMintRewardResponse(): MsgClaimMintRewardResponse {
  return {};
}

export const MsgClaimMintRewardResponse = {
  encode(_: MsgClaimMintRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimMintRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMintRewardResponse();

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

  fromPartial(_: DeepPartial<MsgClaimMintRewardResponse>): MsgClaimMintRewardResponse {
    const message = createBaseMsgClaimMintRewardResponse();
    return message;
  }

};

function createBaseMsgProvideRewardToken(): MsgProvideRewardToken {
  return {
    creator: "",
    amount: ""
  };
}

export const MsgProvideRewardToken = {
  encode(message: MsgProvideRewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvideRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvideRewardToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgProvideRewardToken>): MsgProvideRewardToken {
    const message = createBaseMsgProvideRewardToken();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgProvideRewardTokenResponse(): MsgProvideRewardTokenResponse {
  return {};
}

export const MsgProvideRewardTokenResponse = {
  encode(_: MsgProvideRewardTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvideRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvideRewardTokenResponse();

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

  fromPartial(_: DeepPartial<MsgProvideRewardTokenResponse>): MsgProvideRewardTokenResponse {
    const message = createBaseMsgProvideRewardTokenResponse();
    return message;
  }

};
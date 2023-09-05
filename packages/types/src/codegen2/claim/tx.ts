import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../helpers";
export interface MsgSetMerkleRoot {
  creator: string;
  round: Long;
  merkleRoot: string;
}
export interface MsgSetMerkleRootSDKType {
  creator: string;
  round: Long;
  merkleRoot: string;
}
export interface MsgSetMerkleRootResponse {}
export interface MsgSetMerkleRootResponseSDKType {}
export interface MsgClaim {
  creator: string;
  round: Long;
  index: Long;
  account: string;
  coin?: Coin;
  proof: string[];
}
export interface MsgClaimSDKType {
  creator: string;
  round: Long;
  index: Long;
  account: string;
  coin?: CoinSDKType;
  proof: string[];
}
export interface MsgClaimResponse {}
export interface MsgClaimResponseSDKType {}
export interface MsgToggleClaimSwitch {
  creator: string;
  round: Long;
}
export interface MsgToggleClaimSwitchSDKType {
  creator: string;
  round: Long;
}
export interface MsgToggleClaimSwitchResponse {}
export interface MsgToggleClaimSwitchResponseSDKType {}
export interface MsgProvideToken {
  creator: string;
  token?: Coin;
}
export interface MsgProvideTokenSDKType {
  creator: string;
  token?: CoinSDKType;
}
export interface MsgProvideTokenResponse {}
export interface MsgProvideTokenResponseSDKType {}
export interface MsgWithdrawToken {
  creator: string;
  recipient: string;
  token?: Coin;
}
export interface MsgWithdrawTokenSDKType {
  creator: string;
  recipient: string;
  token?: CoinSDKType;
}
export interface MsgWithdrawTokenResponse {}
export interface MsgWithdrawTokenResponseSDKType {}

function createBaseMsgSetMerkleRoot(): MsgSetMerkleRoot {
  return {
    creator: "",
    round: Long.UZERO,
    merkleRoot: ""
  };
}

export const MsgSetMerkleRoot = {
  encode(message: MsgSetMerkleRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }

    if (message.merkleRoot !== "") {
      writer.uint32(26).string(message.merkleRoot);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMerkleRoot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMerkleRoot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.round = (reader.uint64() as Long);
          break;

        case 3:
          message.merkleRoot = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetMerkleRoot>): MsgSetMerkleRoot {
    const message = createBaseMsgSetMerkleRoot();
    message.creator = object.creator ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.merkleRoot = object.merkleRoot ?? "";
    return message;
  }

};

function createBaseMsgSetMerkleRootResponse(): MsgSetMerkleRootResponse {
  return {};
}

export const MsgSetMerkleRootResponse = {
  encode(_: MsgSetMerkleRootResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMerkleRootResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMerkleRootResponse();

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

  fromPartial(_: DeepPartial<MsgSetMerkleRootResponse>): MsgSetMerkleRootResponse {
    const message = createBaseMsgSetMerkleRootResponse();
    return message;
  }

};

function createBaseMsgClaim(): MsgClaim {
  return {
    creator: "",
    round: Long.UZERO,
    index: Long.UZERO,
    account: "",
    coin: undefined,
    proof: []
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }

    if (!message.index.isZero()) {
      writer.uint32(24).uint64(message.index);
    }

    if (message.account !== "") {
      writer.uint32(34).string(message.account);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.proof) {
      writer.uint32(50).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.round = (reader.uint64() as Long);
          break;

        case 3:
          message.index = (reader.uint64() as Long);
          break;

        case 4:
          message.account = reader.string();
          break;

        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.proof.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.creator = object.creator ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.account = object.account ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.proof = object.proof?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

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

  fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  }

};

function createBaseMsgToggleClaimSwitch(): MsgToggleClaimSwitch {
  return {
    creator: "",
    round: Long.UZERO
  };
}

export const MsgToggleClaimSwitch = {
  encode(message: MsgToggleClaimSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleClaimSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleClaimSwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.round = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgToggleClaimSwitch>): MsgToggleClaimSwitch {
    const message = createBaseMsgToggleClaimSwitch();
    message.creator = object.creator ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseMsgToggleClaimSwitchResponse(): MsgToggleClaimSwitchResponse {
  return {};
}

export const MsgToggleClaimSwitchResponse = {
  encode(_: MsgToggleClaimSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleClaimSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleClaimSwitchResponse();

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

  fromPartial(_: DeepPartial<MsgToggleClaimSwitchResponse>): MsgToggleClaimSwitchResponse {
    const message = createBaseMsgToggleClaimSwitchResponse();
    return message;
  }

};

function createBaseMsgProvideToken(): MsgProvideToken {
  return {
    creator: "",
    token: undefined
  };
}

export const MsgProvideToken = {
  encode(message: MsgProvideToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvideToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvideToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.token = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgProvideToken>): MsgProvideToken {
    const message = createBaseMsgProvideToken();
    message.creator = object.creator ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    return message;
  }

};

function createBaseMsgProvideTokenResponse(): MsgProvideTokenResponse {
  return {};
}

export const MsgProvideTokenResponse = {
  encode(_: MsgProvideTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvideTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvideTokenResponse();

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

  fromPartial(_: DeepPartial<MsgProvideTokenResponse>): MsgProvideTokenResponse {
    const message = createBaseMsgProvideTokenResponse();
    return message;
  }

};

function createBaseMsgWithdrawToken(): MsgWithdrawToken {
  return {
    creator: "",
    recipient: "",
    token: undefined
  };
}

export const MsgWithdrawToken = {
  encode(message: MsgWithdrawToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawToken>): MsgWithdrawToken {
    const message = createBaseMsgWithdrawToken();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawTokenResponse(): MsgWithdrawTokenResponse {
  return {};
}

export const MsgWithdrawTokenResponse = {
  encode(_: MsgWithdrawTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawTokenResponse>): MsgWithdrawTokenResponse {
    const message = createBaseMsgWithdrawTokenResponse();
    return message;
  }

};
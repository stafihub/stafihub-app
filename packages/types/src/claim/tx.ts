/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.claim";

export interface MsgSetMerkleRoot {
  creator: string;
  round: Long;
  merkleRoot: string;
}

export interface MsgSetMerkleRootResponse {}

export interface MsgClaim {
  creator: string;
  round: Long;
  index: Long;
  account: string;
  coin?: Coin;
  proof: string[];
}

export interface MsgClaimResponse {}

export interface MsgToggleClaimSwitch {
  creator: string;
  round: Long;
}

export interface MsgToggleClaimSwitchResponse {}

export interface MsgProvideToken {
  creator: string;
  token?: Coin;
}

export interface MsgProvideTokenResponse {}

export interface MsgWithdrawToken {
  creator: string;
  recipient: string;
  token?: Coin;
}

export interface MsgWithdrawTokenResponse {}

const baseMsgSetMerkleRoot: object = {
  creator: "",
  round: Long.UZERO,
  merkleRoot: "",
};

export const MsgSetMerkleRoot = {
  encode(
    message: MsgSetMerkleRoot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgSetMerkleRoot } as MsgSetMerkleRoot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.round = reader.uint64() as Long;
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

  fromJSON(object: any): MsgSetMerkleRoot {
    const message = { ...baseMsgSetMerkleRoot } as MsgSetMerkleRoot;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromString(object.round)
        : Long.UZERO;
    message.merkleRoot =
      object.merkleRoot !== undefined && object.merkleRoot !== null
        ? String(object.merkleRoot)
        : "";
    return message;
  },

  toJSON(message: MsgSetMerkleRoot): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.round !== undefined &&
      (obj.round = (message.round || Long.UZERO).toString());
    message.merkleRoot !== undefined && (obj.merkleRoot = message.merkleRoot);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMerkleRoot>): MsgSetMerkleRoot {
    const message = { ...baseMsgSetMerkleRoot } as MsgSetMerkleRoot;
    message.creator = object.creator ?? "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromValue(object.round)
        : Long.UZERO;
    message.merkleRoot = object.merkleRoot ?? "";
    return message;
  },
};

const baseMsgSetMerkleRootResponse: object = {};

export const MsgSetMerkleRootResponse = {
  encode(
    _: MsgSetMerkleRootResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMerkleRootResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMerkleRootResponse,
    } as MsgSetMerkleRootResponse;
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

  fromJSON(_: any): MsgSetMerkleRootResponse {
    const message = {
      ...baseMsgSetMerkleRootResponse,
    } as MsgSetMerkleRootResponse;
    return message;
  },

  toJSON(_: MsgSetMerkleRootResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMerkleRootResponse>
  ): MsgSetMerkleRootResponse {
    const message = {
      ...baseMsgSetMerkleRootResponse,
    } as MsgSetMerkleRootResponse;
    return message;
  },
};

const baseMsgClaim: object = {
  creator: "",
  round: Long.UZERO,
  index: Long.UZERO,
  account: "",
  proof: "",
};

export const MsgClaim = {
  encode(
    message: MsgClaim,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgClaim } as MsgClaim;
    message.proof = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.round = reader.uint64() as Long;
          break;
        case 3:
          message.index = reader.uint64() as Long;
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

  fromJSON(object: any): MsgClaim {
    const message = { ...baseMsgClaim } as MsgClaim;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromString(object.round)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.UZERO;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.proof = (object.proof ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.round !== undefined &&
      (obj.round = (message.round || Long.UZERO).toString());
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    if (message.proof) {
      obj.proof = message.proof.map((e) => e);
    } else {
      obj.proof = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = { ...baseMsgClaim } as MsgClaim;
    message.creator = object.creator ?? "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromValue(object.round)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.proof = (object.proof ?? []).map((e) => e);
    return message;
  },
};

const baseMsgClaimResponse: object = {};

export const MsgClaimResponse = {
  encode(
    _: MsgClaimResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
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

  fromJSON(_: any): MsgClaimResponse {
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
    return message;
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = { ...baseMsgClaimResponse } as MsgClaimResponse;
    return message;
  },
};

const baseMsgToggleClaimSwitch: object = { creator: "", round: Long.UZERO };

export const MsgToggleClaimSwitch = {
  encode(
    message: MsgToggleClaimSwitch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleClaimSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgToggleClaimSwitch } as MsgToggleClaimSwitch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.round = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgToggleClaimSwitch {
    const message = { ...baseMsgToggleClaimSwitch } as MsgToggleClaimSwitch;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromString(object.round)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgToggleClaimSwitch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.round !== undefined &&
      (obj.round = (message.round || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgToggleClaimSwitch>): MsgToggleClaimSwitch {
    const message = { ...baseMsgToggleClaimSwitch } as MsgToggleClaimSwitch;
    message.creator = object.creator ?? "";
    message.round =
      object.round !== undefined && object.round !== null
        ? Long.fromValue(object.round)
        : Long.UZERO;
    return message;
  },
};

const baseMsgToggleClaimSwitchResponse: object = {};

export const MsgToggleClaimSwitchResponse = {
  encode(
    _: MsgToggleClaimSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleClaimSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleClaimSwitchResponse,
    } as MsgToggleClaimSwitchResponse;
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

  fromJSON(_: any): MsgToggleClaimSwitchResponse {
    const message = {
      ...baseMsgToggleClaimSwitchResponse,
    } as MsgToggleClaimSwitchResponse;
    return message;
  },

  toJSON(_: MsgToggleClaimSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgToggleClaimSwitchResponse>
  ): MsgToggleClaimSwitchResponse {
    const message = {
      ...baseMsgToggleClaimSwitchResponse,
    } as MsgToggleClaimSwitchResponse;
    return message;
  },
};

const baseMsgProvideToken: object = { creator: "" };

export const MsgProvideToken = {
  encode(
    message: MsgProvideToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgProvideToken } as MsgProvideToken;
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

  fromJSON(object: any): MsgProvideToken {
    const message = { ...baseMsgProvideToken } as MsgProvideToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: MsgProvideToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgProvideToken>): MsgProvideToken {
    const message = { ...baseMsgProvideToken } as MsgProvideToken;
    message.creator = object.creator ?? "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseMsgProvideTokenResponse: object = {};

export const MsgProvideTokenResponse = {
  encode(
    _: MsgProvideTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProvideTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgProvideTokenResponse,
    } as MsgProvideTokenResponse;
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

  fromJSON(_: any): MsgProvideTokenResponse {
    const message = {
      ...baseMsgProvideTokenResponse,
    } as MsgProvideTokenResponse;
    return message;
  },

  toJSON(_: MsgProvideTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgProvideTokenResponse>
  ): MsgProvideTokenResponse {
    const message = {
      ...baseMsgProvideTokenResponse,
    } as MsgProvideTokenResponse;
    return message;
  },
};

const baseMsgWithdrawToken: object = { creator: "", recipient: "" };

export const MsgWithdrawToken = {
  encode(
    message: MsgWithdrawToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
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

  fromJSON(object: any): MsgWithdrawToken {
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: MsgWithdrawToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawToken>): MsgWithdrawToken {
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseMsgWithdrawTokenResponse: object = {};

export const MsgWithdrawTokenResponse = {
  encode(
    _: MsgWithdrawTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
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

  fromJSON(_: any): MsgWithdrawTokenResponse {
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
    return message;
  },

  toJSON(_: MsgWithdrawTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawTokenResponse>
  ): MsgWithdrawTokenResponse {
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse>;
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  ToggleClaimSwitch(
    request: MsgToggleClaimSwitch
  ): Promise<MsgToggleClaimSwitchResponse>;
  ProvideToken(request: MsgProvideToken): Promise<MsgProvideTokenResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetMerkleRoot = this.SetMerkleRoot.bind(this);
    this.Claim = this.Claim.bind(this);
    this.ToggleClaimSwitch = this.ToggleClaimSwitch.bind(this);
    this.ProvideToken = this.ProvideToken.bind(this);
    this.WithdrawToken = this.WithdrawToken.bind(this);
  }
  SetMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse> {
    const data = MsgSetMerkleRoot.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Msg",
      "SetMerkleRoot",
      data
    );
    return promise.then((data) =>
      MsgSetMerkleRootResponse.decode(new _m0.Reader(data))
    );
  }

  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Msg",
      "Claim",
      data
    );
    return promise.then((data) =>
      MsgClaimResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleClaimSwitch(
    request: MsgToggleClaimSwitch
  ): Promise<MsgToggleClaimSwitchResponse> {
    const data = MsgToggleClaimSwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Msg",
      "ToggleClaimSwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleClaimSwitchResponse.decode(new _m0.Reader(data))
    );
  }

  ProvideToken(request: MsgProvideToken): Promise<MsgProvideTokenResponse> {
    const data = MsgProvideToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Msg",
      "ProvideToken",
      data
    );
    return promise.then((data) =>
      MsgProvideTokenResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse> {
    const data = MsgWithdrawToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.claim.Msg",
      "WithdrawToken",
      data
    );
    return promise.then((data) =>
      MsgWithdrawTokenResponse.decode(new _m0.Reader(data))
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

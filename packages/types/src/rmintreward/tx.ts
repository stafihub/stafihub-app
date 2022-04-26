/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MintRewardActPost } from "../rmintreward/models";

export const protobufPackage = "stafihub.stafihub.rmintreward";

export interface MsgAddMintRewardAct {
  creator: string;
  denom: string;
  act?: MintRewardActPost;
}

export interface MsgAddMintRewardActResponse {}

export interface MsgUpdateMintRewardAct {
  creator: string;
  denom: string;
  cycle: Long;
  act?: MintRewardActPost;
}

export interface MsgUpdateMintRewardActResponse {}

export interface MsgClaimMintReward {
  creator: string;
  denom: string;
  cycle: Long;
  mintIndex: Long;
}

export interface MsgClaimMintRewardResponse {}

export interface MsgProvideRewardToken {
  creator: string;
  amount: string;
}

export interface MsgProvideRewardTokenResponse {}

const baseMsgAddMintRewardAct: object = { creator: "", denom: "" };

export const MsgAddMintRewardAct = {
  encode(
    message: MsgAddMintRewardAct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddMintRewardAct } as MsgAddMintRewardAct;
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

  fromJSON(object: any): MsgAddMintRewardAct {
    const message = { ...baseMsgAddMintRewardAct } as MsgAddMintRewardAct;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardActPost.fromJSON(object.act)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddMintRewardAct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.act !== undefined &&
      (obj.act = message.act
        ? MintRewardActPost.toJSON(message.act)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddMintRewardAct>): MsgAddMintRewardAct {
    const message = { ...baseMsgAddMintRewardAct } as MsgAddMintRewardAct;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardActPost.fromPartial(object.act)
        : undefined;
    return message;
  },
};

const baseMsgAddMintRewardActResponse: object = {};

export const MsgAddMintRewardActResponse = {
  encode(
    _: MsgAddMintRewardActResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddMintRewardActResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddMintRewardActResponse,
    } as MsgAddMintRewardActResponse;
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

  fromJSON(_: any): MsgAddMintRewardActResponse {
    const message = {
      ...baseMsgAddMintRewardActResponse,
    } as MsgAddMintRewardActResponse;
    return message;
  },

  toJSON(_: MsgAddMintRewardActResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddMintRewardActResponse>
  ): MsgAddMintRewardActResponse {
    const message = {
      ...baseMsgAddMintRewardActResponse,
    } as MsgAddMintRewardActResponse;
    return message;
  },
};

const baseMsgUpdateMintRewardAct: object = {
  creator: "",
  denom: "",
  cycle: Long.UZERO,
};

export const MsgUpdateMintRewardAct = {
  encode(
    message: MsgUpdateMintRewardAct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintRewardAct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMintRewardAct } as MsgUpdateMintRewardAct;
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
          message.cycle = reader.uint64() as Long;
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

  fromJSON(object: any): MsgUpdateMintRewardAct {
    const message = { ...baseMsgUpdateMintRewardAct } as MsgUpdateMintRewardAct;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromString(object.cycle)
        : Long.UZERO;
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardActPost.fromJSON(object.act)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMintRewardAct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cycle !== undefined &&
      (obj.cycle = (message.cycle || Long.UZERO).toString());
    message.act !== undefined &&
      (obj.act = message.act
        ? MintRewardActPost.toJSON(message.act)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMintRewardAct>
  ): MsgUpdateMintRewardAct {
    const message = { ...baseMsgUpdateMintRewardAct } as MsgUpdateMintRewardAct;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromValue(object.cycle)
        : Long.UZERO;
    message.act =
      object.act !== undefined && object.act !== null
        ? MintRewardActPost.fromPartial(object.act)
        : undefined;
    return message;
  },
};

const baseMsgUpdateMintRewardActResponse: object = {};

export const MsgUpdateMintRewardActResponse = {
  encode(
    _: MsgUpdateMintRewardActResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintRewardActResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMintRewardActResponse,
    } as MsgUpdateMintRewardActResponse;
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

  fromJSON(_: any): MsgUpdateMintRewardActResponse {
    const message = {
      ...baseMsgUpdateMintRewardActResponse,
    } as MsgUpdateMintRewardActResponse;
    return message;
  },

  toJSON(_: MsgUpdateMintRewardActResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMintRewardActResponse>
  ): MsgUpdateMintRewardActResponse {
    const message = {
      ...baseMsgUpdateMintRewardActResponse,
    } as MsgUpdateMintRewardActResponse;
    return message;
  },
};

const baseMsgClaimMintReward: object = {
  creator: "",
  denom: "",
  cycle: Long.UZERO,
  mintIndex: Long.UZERO,
};

export const MsgClaimMintReward = {
  encode(
    message: MsgClaimMintReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgClaimMintReward } as MsgClaimMintReward;
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
          message.cycle = reader.uint64() as Long;
          break;
        case 4:
          message.mintIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimMintReward {
    const message = { ...baseMsgClaimMintReward } as MsgClaimMintReward;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromString(object.cycle)
        : Long.UZERO;
    message.mintIndex =
      object.mintIndex !== undefined && object.mintIndex !== null
        ? Long.fromString(object.mintIndex)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgClaimMintReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cycle !== undefined &&
      (obj.cycle = (message.cycle || Long.UZERO).toString());
    message.mintIndex !== undefined &&
      (obj.mintIndex = (message.mintIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimMintReward>): MsgClaimMintReward {
    const message = { ...baseMsgClaimMintReward } as MsgClaimMintReward;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.cycle =
      object.cycle !== undefined && object.cycle !== null
        ? Long.fromValue(object.cycle)
        : Long.UZERO;
    message.mintIndex =
      object.mintIndex !== undefined && object.mintIndex !== null
        ? Long.fromValue(object.mintIndex)
        : Long.UZERO;
    return message;
  },
};

const baseMsgClaimMintRewardResponse: object = {};

export const MsgClaimMintRewardResponse = {
  encode(
    _: MsgClaimMintRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimMintRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClaimMintRewardResponse,
    } as MsgClaimMintRewardResponse;
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

  fromJSON(_: any): MsgClaimMintRewardResponse {
    const message = {
      ...baseMsgClaimMintRewardResponse,
    } as MsgClaimMintRewardResponse;
    return message;
  },

  toJSON(_: MsgClaimMintRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClaimMintRewardResponse>
  ): MsgClaimMintRewardResponse {
    const message = {
      ...baseMsgClaimMintRewardResponse,
    } as MsgClaimMintRewardResponse;
    return message;
  },
};

const baseMsgProvideRewardToken: object = { creator: "", amount: "" };

export const MsgProvideRewardToken = {
  encode(
    message: MsgProvideRewardToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProvideRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgProvideRewardToken } as MsgProvideRewardToken;
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

  fromJSON(object: any): MsgProvideRewardToken {
    const message = { ...baseMsgProvideRewardToken } as MsgProvideRewardToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: MsgProvideRewardToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgProvideRewardToken>
  ): MsgProvideRewardToken {
    const message = { ...baseMsgProvideRewardToken } as MsgProvideRewardToken;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgProvideRewardTokenResponse: object = {};

export const MsgProvideRewardTokenResponse = {
  encode(
    _: MsgProvideRewardTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProvideRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgProvideRewardTokenResponse,
    } as MsgProvideRewardTokenResponse;
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

  fromJSON(_: any): MsgProvideRewardTokenResponse {
    const message = {
      ...baseMsgProvideRewardTokenResponse,
    } as MsgProvideRewardTokenResponse;
    return message;
  },

  toJSON(_: MsgProvideRewardTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgProvideRewardTokenResponse>
  ): MsgProvideRewardTokenResponse {
    const message = {
      ...baseMsgProvideRewardTokenResponse,
    } as MsgProvideRewardTokenResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddMintRewardAct(
    request: MsgAddMintRewardAct
  ): Promise<MsgAddMintRewardActResponse>;
  UpdateMintRewardAct(
    request: MsgUpdateMintRewardAct
  ): Promise<MsgUpdateMintRewardActResponse>;
  ClaimMintReward(
    request: MsgClaimMintReward
  ): Promise<MsgClaimMintRewardResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ProvideRewardToken(
    request: MsgProvideRewardToken
  ): Promise<MsgProvideRewardTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddMintRewardAct = this.AddMintRewardAct.bind(this);
    this.UpdateMintRewardAct = this.UpdateMintRewardAct.bind(this);
    this.ClaimMintReward = this.ClaimMintReward.bind(this);
    this.ProvideRewardToken = this.ProvideRewardToken.bind(this);
  }
  AddMintRewardAct(
    request: MsgAddMintRewardAct
  ): Promise<MsgAddMintRewardActResponse> {
    const data = MsgAddMintRewardAct.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Msg",
      "AddMintRewardAct",
      data
    );
    return promise.then((data) =>
      MsgAddMintRewardActResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMintRewardAct(
    request: MsgUpdateMintRewardAct
  ): Promise<MsgUpdateMintRewardActResponse> {
    const data = MsgUpdateMintRewardAct.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Msg",
      "UpdateMintRewardAct",
      data
    );
    return promise.then((data) =>
      MsgUpdateMintRewardActResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimMintReward(
    request: MsgClaimMintReward
  ): Promise<MsgClaimMintRewardResponse> {
    const data = MsgClaimMintReward.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Msg",
      "ClaimMintReward",
      data
    );
    return promise.then((data) =>
      MsgClaimMintRewardResponse.decode(new _m0.Reader(data))
    );
  }

  ProvideRewardToken(
    request: MsgProvideRewardToken
  ): Promise<MsgProvideRewardTokenResponse> {
    const data = MsgProvideRewardToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rmintreward.Msg",
      "ProvideRewardToken",
      data
    );
    return promise.then((data) =>
      MsgProvideRewardTokenResponse.decode(new _m0.Reader(data))
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

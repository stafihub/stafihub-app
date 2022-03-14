/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stafihub.stafihub.rstaking";

export interface MsgSetInflationBase {
  creator: string;
  inflationBase: string;
}

export interface MsgSetInflationBaseResponse {}

export interface MsgAddValToWhitelist {
  creator: string;
  valAddress: string;
}

export interface MsgAddValToWhitelistResponse {}

export interface MsgToggleWhitelistSwitch {
  creator: string;
}

export interface MsgToggleWhitelistSwitchResponse {}

function createBaseMsgSetInflationBase(): MsgSetInflationBase {
  return { creator: "", inflationBase: "" };
}

export const MsgSetInflationBase = {
  encode(
    message: MsgSetInflationBase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.inflationBase !== "") {
      writer.uint32(18).string(message.inflationBase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInflationBase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInflationBase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.inflationBase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetInflationBase {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      inflationBase: isSet(object.inflationBase)
        ? String(object.inflationBase)
        : "",
    };
  },

  toJSON(message: MsgSetInflationBase): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.inflationBase !== undefined &&
      (obj.inflationBase = message.inflationBase);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetInflationBase>, I>>(
    object: I
  ): MsgSetInflationBase {
    const message = createBaseMsgSetInflationBase();
    message.creator = object.creator ?? "";
    message.inflationBase = object.inflationBase ?? "";
    return message;
  },
};

function createBaseMsgSetInflationBaseResponse(): MsgSetInflationBaseResponse {
  return {};
}

export const MsgSetInflationBaseResponse = {
  encode(
    _: MsgSetInflationBaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetInflationBaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInflationBaseResponse();
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

  fromJSON(_: any): MsgSetInflationBaseResponse {
    return {};
  },

  toJSON(_: MsgSetInflationBaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetInflationBaseResponse>, I>>(
    _: I
  ): MsgSetInflationBaseResponse {
    const message = createBaseMsgSetInflationBaseResponse();
    return message;
  },
};

function createBaseMsgAddValToWhitelist(): MsgAddValToWhitelist {
  return { creator: "", valAddress: "" };
}

export const MsgAddValToWhitelist = {
  encode(
    message: MsgAddValToWhitelist,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.valAddress !== "") {
      writer.uint32(18).string(message.valAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddValToWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValToWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.valAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddValToWhitelist {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      valAddress: isSet(object.valAddress) ? String(object.valAddress) : "",
    };
  },

  toJSON(message: MsgAddValToWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddValToWhitelist>, I>>(
    object: I
  ): MsgAddValToWhitelist {
    const message = createBaseMsgAddValToWhitelist();
    message.creator = object.creator ?? "";
    message.valAddress = object.valAddress ?? "";
    return message;
  },
};

function createBaseMsgAddValToWhitelistResponse(): MsgAddValToWhitelistResponse {
  return {};
}

export const MsgAddValToWhitelistResponse = {
  encode(
    _: MsgAddValToWhitelistResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddValToWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValToWhitelistResponse();
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

  fromJSON(_: any): MsgAddValToWhitelistResponse {
    return {};
  },

  toJSON(_: MsgAddValToWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddValToWhitelistResponse>, I>>(
    _: I
  ): MsgAddValToWhitelistResponse {
    const message = createBaseMsgAddValToWhitelistResponse();
    return message;
  },
};

function createBaseMsgToggleWhitelistSwitch(): MsgToggleWhitelistSwitch {
  return { creator: "" };
}

export const MsgToggleWhitelistSwitch = {
  encode(
    message: MsgToggleWhitelistSwitch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleWhitelistSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleWhitelistSwitch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgToggleWhitelistSwitch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgToggleWhitelistSwitch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgToggleWhitelistSwitch>, I>>(
    object: I
  ): MsgToggleWhitelistSwitch {
    const message = createBaseMsgToggleWhitelistSwitch();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgToggleWhitelistSwitchResponse(): MsgToggleWhitelistSwitchResponse {
  return {};
}

export const MsgToggleWhitelistSwitchResponse = {
  encode(
    _: MsgToggleWhitelistSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleWhitelistSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleWhitelistSwitchResponse();
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

  fromJSON(_: any): MsgToggleWhitelistSwitchResponse {
    return {};
  },

  toJSON(_: MsgToggleWhitelistSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgToggleWhitelistSwitchResponse>, I>
  >(_: I): MsgToggleWhitelistSwitchResponse {
    const message = createBaseMsgToggleWhitelistSwitchResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetInflationBase(
    request: MsgSetInflationBase
  ): Promise<MsgSetInflationBaseResponse>;
  AddValToWhitelist(
    request: MsgAddValToWhitelist
  ): Promise<MsgAddValToWhitelistResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ToggleWhitelistSwitch(
    request: MsgToggleWhitelistSwitch
  ): Promise<MsgToggleWhitelistSwitchResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetInflationBase = this.SetInflationBase.bind(this);
    this.AddValToWhitelist = this.AddValToWhitelist.bind(this);
    this.ToggleWhitelistSwitch = this.ToggleWhitelistSwitch.bind(this);
  }
  SetInflationBase(
    request: MsgSetInflationBase
  ): Promise<MsgSetInflationBaseResponse> {
    const data = MsgSetInflationBase.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rstaking.Msg",
      "SetInflationBase",
      data
    );
    return promise.then((data) =>
      MsgSetInflationBaseResponse.decode(new _m0.Reader(data))
    );
  }

  AddValToWhitelist(
    request: MsgAddValToWhitelist
  ): Promise<MsgAddValToWhitelistResponse> {
    const data = MsgAddValToWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rstaking.Msg",
      "AddValToWhitelist",
      data
    );
    return promise.then((data) =>
      MsgAddValToWhitelistResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleWhitelistSwitch(
    request: MsgToggleWhitelistSwitch
  ): Promise<MsgToggleWhitelistSwitchResponse> {
    const data = MsgToggleWhitelistSwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rstaking.Msg",
      "ToggleWhitelistSwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleWhitelistSwitchResponse.decode(new _m0.Reader(data))
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

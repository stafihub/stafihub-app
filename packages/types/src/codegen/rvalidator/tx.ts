// @ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export interface MsgInitRValidator {
  creator: string;
  denom: string;
  poolAddress: string;
  valAddressList: string[];
}
export interface MsgInitRValidatorSDKType {
  creator: string;
  denom: string;
  poolAddress: string;
  valAddressList: string[];
}
export interface MsgInitRValidatorResponse {}
export interface MsgInitRValidatorResponseSDKType {}
export interface MsgSetCycleSeconds {
  creator: string;
  denom: string;
  seconds: Long;
}
export interface MsgSetCycleSecondsSDKType {
  creator: string;
  denom: string;
  seconds: Long;
}
export interface MsgSetCycleSecondsResponse {}
export interface MsgSetCycleSecondsResponseSDKType {}
export interface MsgSetShuffleSeconds {
  creator: string;
  denom: string;
  seconds: Long;
}
export interface MsgSetShuffleSecondsSDKType {
  creator: string;
  denom: string;
  seconds: Long;
}
export interface MsgSetShuffleSecondsResponse {}
export interface MsgSetShuffleSecondsResponseSDKType {}
export interface MsgAddRValidator {
  creator: string;
  denom: string;
  poolAddress: string;
  valAddress: string;
}
export interface MsgAddRValidatorSDKType {
  creator: string;
  denom: string;
  poolAddress: string;
  valAddress: string;
}
export interface MsgAddRValidatorResponse {}
export interface MsgAddRValidatorResponseSDKType {}
export interface MsgRmRValidator {
  creator: string;
  denom: string;
  poolAddress: string;
  oldAddress: string;
  newAddress: string;
}
export interface MsgRmRValidatorSDKType {
  creator: string;
  denom: string;
  poolAddress: string;
  oldAddress: string;
  newAddress: string;
}
export interface MsgRmRValidatorResponse {}
export interface MsgRmRValidatorResponseSDKType {}

function createBaseMsgInitRValidator(): MsgInitRValidator {
  return {
    creator: "",
    denom: "",
    poolAddress: "",
    valAddressList: [],
  };
}

export const MsgInitRValidator = {
  encode(
    message: MsgInitRValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    for (const v of message.valAddressList) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitRValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitRValidator();

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
          message.poolAddress = reader.string();
          break;

        case 4:
          message.valAddressList.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInitRValidator>): MsgInitRValidator {
    const message = createBaseMsgInitRValidator();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.valAddressList = object.valAddressList?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgInitRValidatorResponse(): MsgInitRValidatorResponse {
  return {};
}

export const MsgInitRValidatorResponse = {
  encode(
    _: MsgInitRValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInitRValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitRValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgInitRValidatorResponse>
  ): MsgInitRValidatorResponse {
    const message = createBaseMsgInitRValidatorResponse();
    return message;
  },
};

function createBaseMsgSetCycleSeconds(): MsgSetCycleSeconds {
  return {
    creator: "",
    denom: "",
    seconds: Long.UZERO,
  };
}

export const MsgSetCycleSeconds = {
  encode(
    message: MsgSetCycleSeconds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.seconds.isZero()) {
      writer.uint32(24).uint64(message.seconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCycleSeconds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCycleSeconds();

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
          message.seconds = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetCycleSeconds>): MsgSetCycleSeconds {
    const message = createBaseMsgSetCycleSeconds();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromValue(object.seconds)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgSetCycleSecondsResponse(): MsgSetCycleSecondsResponse {
  return {};
}

export const MsgSetCycleSecondsResponse = {
  encode(
    _: MsgSetCycleSecondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetCycleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCycleSecondsResponse();

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

  fromPartial(
    _: DeepPartial<MsgSetCycleSecondsResponse>
  ): MsgSetCycleSecondsResponse {
    const message = createBaseMsgSetCycleSecondsResponse();
    return message;
  },
};

function createBaseMsgSetShuffleSeconds(): MsgSetShuffleSeconds {
  return {
    creator: "",
    denom: "",
    seconds: Long.UZERO,
  };
}

export const MsgSetShuffleSeconds = {
  encode(
    message: MsgSetShuffleSeconds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.seconds.isZero()) {
      writer.uint32(24).uint64(message.seconds);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetShuffleSeconds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetShuffleSeconds();

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
          message.seconds = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetShuffleSeconds>): MsgSetShuffleSeconds {
    const message = createBaseMsgSetShuffleSeconds();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromValue(object.seconds)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgSetShuffleSecondsResponse(): MsgSetShuffleSecondsResponse {
  return {};
}

export const MsgSetShuffleSecondsResponse = {
  encode(
    _: MsgSetShuffleSecondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetShuffleSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetShuffleSecondsResponse();

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

  fromPartial(
    _: DeepPartial<MsgSetShuffleSecondsResponse>
  ): MsgSetShuffleSecondsResponse {
    const message = createBaseMsgSetShuffleSecondsResponse();
    return message;
  },
};

function createBaseMsgAddRValidator(): MsgAddRValidator {
  return {
    creator: "",
    denom: "",
    poolAddress: "",
    valAddress: "",
  };
}

export const MsgAddRValidator = {
  encode(
    message: MsgAddRValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    if (message.valAddress !== "") {
      writer.uint32(34).string(message.valAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRValidator();

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
          message.poolAddress = reader.string();
          break;

        case 4:
          message.valAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddRValidator>): MsgAddRValidator {
    const message = createBaseMsgAddRValidator();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.valAddress = object.valAddress ?? "";
    return message;
  },
};

function createBaseMsgAddRValidatorResponse(): MsgAddRValidatorResponse {
  return {};
}

export const MsgAddRValidatorResponse = {
  encode(
    _: MsgAddRValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgAddRValidatorResponse>
  ): MsgAddRValidatorResponse {
    const message = createBaseMsgAddRValidatorResponse();
    return message;
  },
};

function createBaseMsgRmRValidator(): MsgRmRValidator {
  return {
    creator: "",
    denom: "",
    poolAddress: "",
    oldAddress: "",
    newAddress: "",
  };
}

export const MsgRmRValidator = {
  encode(
    message: MsgRmRValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    if (message.oldAddress !== "") {
      writer.uint32(34).string(message.oldAddress);
    }

    if (message.newAddress !== "") {
      writer.uint32(42).string(message.newAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmRValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmRValidator();

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
          message.poolAddress = reader.string();
          break;

        case 4:
          message.oldAddress = reader.string();
          break;

        case 5:
          message.newAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRmRValidator>): MsgRmRValidator {
    const message = createBaseMsgRmRValidator();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    return message;
  },
};

function createBaseMsgRmRValidatorResponse(): MsgRmRValidatorResponse {
  return {};
}

export const MsgRmRValidatorResponse = {
  encode(
    _: MsgRmRValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmRValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmRValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgRmRValidatorResponse>
  ): MsgRmRValidatorResponse {
    const message = createBaseMsgRmRValidatorResponse();
    return message;
  },
};

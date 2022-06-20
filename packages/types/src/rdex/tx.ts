/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.rdex";

export interface MsgCreatePool {
  creator: string;
  token0?: Coin;
  token1?: Coin;
}

export interface MsgCreatePoolResponse {}

export interface MsgAddLiquidity {
  creator: string;
  swapPoolIndex: number;
  token0?: Coin;
  token1?: Coin;
}

export interface MsgAddLiquidityResponse {}

export interface MsgSwap {
  creator: string;
  swapPoolIndex: number;
  inputToken?: Coin;
  minOutToken?: Coin;
}

export interface MsgSwapResponse {}

export interface MsgRemoveLiquidity {
  creator: string;
  swapPoolIndex: number;
  rmUnit: string;
  swapUnit: string;
  minOutToken0?: Coin;
  minOutToken1?: Coin;
  inputTokenDenom: string;
}

export interface MsgRemoveLiquidityResponse {}

export interface MsgToggleProviderSwitch {
  creator: string;
}

export interface MsgToggleProviderSwitchResponse {}

export interface MsgAddProvider {
  creator: string;
  userAddress: string;
}

export interface MsgAddProviderResponse {}

export interface MsgRmProvider {
  creator: string;
  userAddress: string;
}

export interface MsgRmProviderResponse {}

export interface MsgAddPoolCreator {
  creator: string;
  userAddress: string;
}

export interface MsgAddPoolCreatorResponse {}

export interface MsgRmPoolCreator {
  creator: string;
  userAddress: string;
}

export interface MsgRmPoolCreatorResponse {}

const baseMsgCreatePool: object = { creator: "" };

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token0 !== undefined) {
      Coin.encode(message.token0, writer.uint32(18).fork()).ldelim();
    }
    if (message.token1 !== undefined) {
      Coin.encode(message.token1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token0 = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.token1 = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.token0 =
      object.token0 !== undefined && object.token0 !== null
        ? Coin.fromJSON(object.token0)
        : undefined;
    message.token1 =
      object.token1 !== undefined && object.token1 !== null
        ? Coin.fromJSON(object.token1)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token0 !== undefined &&
      (obj.token0 = message.token0 ? Coin.toJSON(message.token0) : undefined);
    message.token1 !== undefined &&
      (obj.token1 = message.token1 ? Coin.toJSON(message.token1) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.creator = object.creator ?? "";
    message.token0 =
      object.token0 !== undefined && object.token0 !== null
        ? Coin.fromPartial(object.token0)
        : undefined;
    message.token1 =
      object.token1 !== undefined && object.token1 !== null
        ? Coin.fromPartial(object.token1)
        : undefined;
    return message;
  },
};

const baseMsgCreatePoolResponse: object = {};

export const MsgCreatePoolResponse = {
  encode(
    _: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
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

  fromJSON(_: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    return message;
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    return message;
  },
};

const baseMsgAddLiquidity: object = { creator: "", swapPoolIndex: 0 };

export const MsgAddLiquidity = {
  encode(
    message: MsgAddLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapPoolIndex !== 0) {
      writer.uint32(16).uint32(message.swapPoolIndex);
    }
    if (message.token0 !== undefined) {
      Coin.encode(message.token0, writer.uint32(26).fork()).ldelim();
    }
    if (message.token1 !== undefined) {
      Coin.encode(message.token1, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapPoolIndex = reader.uint32();
          break;
        case 3:
          message.token0 = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.token1 = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.swapPoolIndex =
      object.swapPoolIndex !== undefined && object.swapPoolIndex !== null
        ? Number(object.swapPoolIndex)
        : 0;
    message.token0 =
      object.token0 !== undefined && object.token0 !== null
        ? Coin.fromJSON(object.token0)
        : undefined;
    message.token1 =
      object.token1 !== undefined && object.token1 !== null
        ? Coin.fromJSON(object.token1)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapPoolIndex !== undefined &&
      (obj.swapPoolIndex = message.swapPoolIndex);
    message.token0 !== undefined &&
      (obj.token0 = message.token0 ? Coin.toJSON(message.token0) : undefined);
    message.token1 !== undefined &&
      (obj.token1 = message.token1 ? Coin.toJSON(message.token1) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = { ...baseMsgAddLiquidity } as MsgAddLiquidity;
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.token0 =
      object.token0 !== undefined && object.token0 !== null
        ? Coin.fromPartial(object.token0)
        : undefined;
    message.token1 =
      object.token1 !== undefined && object.token1 !== null
        ? Coin.fromPartial(object.token1)
        : undefined;
    return message;
  },
};

const baseMsgAddLiquidityResponse: object = {};

export const MsgAddLiquidityResponse = {
  encode(
    _: MsgAddLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
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

  fromJSON(_: any): MsgAddLiquidityResponse {
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
    return message;
  },

  toJSON(_: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddLiquidityResponse>
  ): MsgAddLiquidityResponse {
    const message = {
      ...baseMsgAddLiquidityResponse,
    } as MsgAddLiquidityResponse;
    return message;
  },
};

const baseMsgSwap: object = { creator: "", swapPoolIndex: 0 };

export const MsgSwap = {
  encode(
    message: MsgSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapPoolIndex !== 0) {
      writer.uint32(16).uint32(message.swapPoolIndex);
    }
    if (message.inputToken !== undefined) {
      Coin.encode(message.inputToken, writer.uint32(26).fork()).ldelim();
    }
    if (message.minOutToken !== undefined) {
      Coin.encode(message.minOutToken, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwap } as MsgSwap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapPoolIndex = reader.uint32();
          break;
        case 3:
          message.inputToken = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minOutToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwap {
    const message = { ...baseMsgSwap } as MsgSwap;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.swapPoolIndex =
      object.swapPoolIndex !== undefined && object.swapPoolIndex !== null
        ? Number(object.swapPoolIndex)
        : 0;
    message.inputToken =
      object.inputToken !== undefined && object.inputToken !== null
        ? Coin.fromJSON(object.inputToken)
        : undefined;
    message.minOutToken =
      object.minOutToken !== undefined && object.minOutToken !== null
        ? Coin.fromJSON(object.minOutToken)
        : undefined;
    return message;
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapPoolIndex !== undefined &&
      (obj.swapPoolIndex = message.swapPoolIndex);
    message.inputToken !== undefined &&
      (obj.inputToken = message.inputToken
        ? Coin.toJSON(message.inputToken)
        : undefined);
    message.minOutToken !== undefined &&
      (obj.minOutToken = message.minOutToken
        ? Coin.toJSON(message.minOutToken)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
    const message = { ...baseMsgSwap } as MsgSwap;
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.inputToken =
      object.inputToken !== undefined && object.inputToken !== null
        ? Coin.fromPartial(object.inputToken)
        : undefined;
    message.minOutToken =
      object.minOutToken !== undefined && object.minOutToken !== null
        ? Coin.fromPartial(object.minOutToken)
        : undefined;
    return message;
  },
};

const baseMsgSwapResponse: object = {};

export const MsgSwapResponse = {
  encode(
    _: MsgSwapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
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

  fromJSON(_: any): MsgSwapResponse {
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
    return message;
  },

  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
    return message;
  },
};

const baseMsgRemoveLiquidity: object = {
  creator: "",
  swapPoolIndex: 0,
  rmUnit: "",
  swapUnit: "",
  inputTokenDenom: "",
};

export const MsgRemoveLiquidity = {
  encode(
    message: MsgRemoveLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapPoolIndex !== 0) {
      writer.uint32(16).uint32(message.swapPoolIndex);
    }
    if (message.rmUnit !== "") {
      writer.uint32(26).string(message.rmUnit);
    }
    if (message.swapUnit !== "") {
      writer.uint32(34).string(message.swapUnit);
    }
    if (message.minOutToken0 !== undefined) {
      Coin.encode(message.minOutToken0, writer.uint32(42).fork()).ldelim();
    }
    if (message.minOutToken1 !== undefined) {
      Coin.encode(message.minOutToken1, writer.uint32(50).fork()).ldelim();
    }
    if (message.inputTokenDenom !== "") {
      writer.uint32(58).string(message.inputTokenDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapPoolIndex = reader.uint32();
          break;
        case 3:
          message.rmUnit = reader.string();
          break;
        case 4:
          message.swapUnit = reader.string();
          break;
        case 5:
          message.minOutToken0 = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.minOutToken1 = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.inputTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidity {
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.swapPoolIndex =
      object.swapPoolIndex !== undefined && object.swapPoolIndex !== null
        ? Number(object.swapPoolIndex)
        : 0;
    message.rmUnit =
      object.rmUnit !== undefined && object.rmUnit !== null
        ? String(object.rmUnit)
        : "";
    message.swapUnit =
      object.swapUnit !== undefined && object.swapUnit !== null
        ? String(object.swapUnit)
        : "";
    message.minOutToken0 =
      object.minOutToken0 !== undefined && object.minOutToken0 !== null
        ? Coin.fromJSON(object.minOutToken0)
        : undefined;
    message.minOutToken1 =
      object.minOutToken1 !== undefined && object.minOutToken1 !== null
        ? Coin.fromJSON(object.minOutToken1)
        : undefined;
    message.inputTokenDenom =
      object.inputTokenDenom !== undefined && object.inputTokenDenom !== null
        ? String(object.inputTokenDenom)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapPoolIndex !== undefined &&
      (obj.swapPoolIndex = message.swapPoolIndex);
    message.rmUnit !== undefined && (obj.rmUnit = message.rmUnit);
    message.swapUnit !== undefined && (obj.swapUnit = message.swapUnit);
    message.minOutToken0 !== undefined &&
      (obj.minOutToken0 = message.minOutToken0
        ? Coin.toJSON(message.minOutToken0)
        : undefined);
    message.minOutToken1 !== undefined &&
      (obj.minOutToken1 = message.minOutToken1
        ? Coin.toJSON(message.minOutToken1)
        : undefined);
    message.inputTokenDenom !== undefined &&
      (obj.inputTokenDenom = message.inputTokenDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = { ...baseMsgRemoveLiquidity } as MsgRemoveLiquidity;
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.rmUnit = object.rmUnit ?? "";
    message.swapUnit = object.swapUnit ?? "";
    message.minOutToken0 =
      object.minOutToken0 !== undefined && object.minOutToken0 !== null
        ? Coin.fromPartial(object.minOutToken0)
        : undefined;
    message.minOutToken1 =
      object.minOutToken1 !== undefined && object.minOutToken1 !== null
        ? Coin.fromPartial(object.minOutToken1)
        : undefined;
    message.inputTokenDenom = object.inputTokenDenom ?? "";
    return message;
  },
};

const baseMsgRemoveLiquidityResponse: object = {};

export const MsgRemoveLiquidityResponse = {
  encode(
    _: MsgRemoveLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
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

  fromJSON(_: any): MsgRemoveLiquidityResponse {
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    return message;
  },

  toJSON(_: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveLiquidityResponse>
  ): MsgRemoveLiquidityResponse {
    const message = {
      ...baseMsgRemoveLiquidityResponse,
    } as MsgRemoveLiquidityResponse;
    return message;
  },
};

const baseMsgToggleProviderSwitch: object = { creator: "" };

export const MsgToggleProviderSwitch = {
  encode(
    message: MsgToggleProviderSwitch,
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
  ): MsgToggleProviderSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleProviderSwitch,
    } as MsgToggleProviderSwitch;
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

  fromJSON(object: any): MsgToggleProviderSwitch {
    const message = {
      ...baseMsgToggleProviderSwitch,
    } as MsgToggleProviderSwitch;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgToggleProviderSwitch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgToggleProviderSwitch>
  ): MsgToggleProviderSwitch {
    const message = {
      ...baseMsgToggleProviderSwitch,
    } as MsgToggleProviderSwitch;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgToggleProviderSwitchResponse: object = {};

export const MsgToggleProviderSwitchResponse = {
  encode(
    _: MsgToggleProviderSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleProviderSwitchResponse,
    } as MsgToggleProviderSwitchResponse;
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

  fromJSON(_: any): MsgToggleProviderSwitchResponse {
    const message = {
      ...baseMsgToggleProviderSwitchResponse,
    } as MsgToggleProviderSwitchResponse;
    return message;
  },

  toJSON(_: MsgToggleProviderSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgToggleProviderSwitchResponse>
  ): MsgToggleProviderSwitchResponse {
    const message = {
      ...baseMsgToggleProviderSwitchResponse,
    } as MsgToggleProviderSwitchResponse;
    return message;
  },
};

const baseMsgAddProvider: object = { creator: "", userAddress: "" };

export const MsgAddProvider = {
  encode(
    message: MsgAddProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddProvider } as MsgAddProvider;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddProvider {
    const message = { ...baseMsgAddProvider } as MsgAddProvider;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: MsgAddProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddProvider>): MsgAddProvider {
    const message = { ...baseMsgAddProvider } as MsgAddProvider;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgAddProviderResponse: object = {};

export const MsgAddProviderResponse = {
  encode(
    _: MsgAddProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddProviderResponse } as MsgAddProviderResponse;
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

  fromJSON(_: any): MsgAddProviderResponse {
    const message = { ...baseMsgAddProviderResponse } as MsgAddProviderResponse;
    return message;
  },

  toJSON(_: MsgAddProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddProviderResponse>): MsgAddProviderResponse {
    const message = { ...baseMsgAddProviderResponse } as MsgAddProviderResponse;
    return message;
  },
};

const baseMsgRmProvider: object = { creator: "", userAddress: "" };

export const MsgRmProvider = {
  encode(
    message: MsgRmProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmProvider } as MsgRmProvider;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRmProvider {
    const message = { ...baseMsgRmProvider } as MsgRmProvider;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRmProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmProvider>): MsgRmProvider {
    const message = { ...baseMsgRmProvider } as MsgRmProvider;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgRmProviderResponse: object = {};

export const MsgRmProviderResponse = {
  encode(
    _: MsgRmProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmProviderResponse } as MsgRmProviderResponse;
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

  fromJSON(_: any): MsgRmProviderResponse {
    const message = { ...baseMsgRmProviderResponse } as MsgRmProviderResponse;
    return message;
  },

  toJSON(_: MsgRmProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRmProviderResponse>): MsgRmProviderResponse {
    const message = { ...baseMsgRmProviderResponse } as MsgRmProviderResponse;
    return message;
  },
};

const baseMsgAddPoolCreator: object = { creator: "", userAddress: "" };

export const MsgAddPoolCreator = {
  encode(
    message: MsgAddPoolCreator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPoolCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPoolCreator } as MsgAddPoolCreator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPoolCreator {
    const message = { ...baseMsgAddPoolCreator } as MsgAddPoolCreator;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: MsgAddPoolCreator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddPoolCreator>): MsgAddPoolCreator {
    const message = { ...baseMsgAddPoolCreator } as MsgAddPoolCreator;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgAddPoolCreatorResponse: object = {};

export const MsgAddPoolCreatorResponse = {
  encode(
    _: MsgAddPoolCreatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddPoolCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddPoolCreatorResponse,
    } as MsgAddPoolCreatorResponse;
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

  fromJSON(_: any): MsgAddPoolCreatorResponse {
    const message = {
      ...baseMsgAddPoolCreatorResponse,
    } as MsgAddPoolCreatorResponse;
    return message;
  },

  toJSON(_: MsgAddPoolCreatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddPoolCreatorResponse>
  ): MsgAddPoolCreatorResponse {
    const message = {
      ...baseMsgAddPoolCreatorResponse,
    } as MsgAddPoolCreatorResponse;
    return message;
  },
};

const baseMsgRmPoolCreator: object = { creator: "", userAddress: "" };

export const MsgRmPoolCreator = {
  encode(
    message: MsgRmPoolCreator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmPoolCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmPoolCreator } as MsgRmPoolCreator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRmPoolCreator {
    const message = { ...baseMsgRmPoolCreator } as MsgRmPoolCreator;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRmPoolCreator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmPoolCreator>): MsgRmPoolCreator {
    const message = { ...baseMsgRmPoolCreator } as MsgRmPoolCreator;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgRmPoolCreatorResponse: object = {};

export const MsgRmPoolCreatorResponse = {
  encode(
    _: MsgRmPoolCreatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmPoolCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmPoolCreatorResponse,
    } as MsgRmPoolCreatorResponse;
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

  fromJSON(_: any): MsgRmPoolCreatorResponse {
    const message = {
      ...baseMsgRmPoolCreatorResponse,
    } as MsgRmPoolCreatorResponse;
    return message;
  },

  toJSON(_: MsgRmPoolCreatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmPoolCreatorResponse>
  ): MsgRmPoolCreatorResponse {
    const message = {
      ...baseMsgRmPoolCreatorResponse,
    } as MsgRmPoolCreatorResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  Swap(request: MsgSwap): Promise<MsgSwapResponse>;
  RemoveLiquidity(
    request: MsgRemoveLiquidity
  ): Promise<MsgRemoveLiquidityResponse>;
  ToggleProviderSwitch(
    request: MsgToggleProviderSwitch
  ): Promise<MsgToggleProviderSwitchResponse>;
  AddProvider(request: MsgAddProvider): Promise<MsgAddProviderResponse>;
  RmProvider(request: MsgRmProvider): Promise<MsgRmProviderResponse>;
  AddPoolCreator(
    request: MsgAddPoolCreator
  ): Promise<MsgAddPoolCreatorResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RmPoolCreator(request: MsgRmPoolCreator): Promise<MsgRmPoolCreatorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.AddLiquidity = this.AddLiquidity.bind(this);
    this.Swap = this.Swap.bind(this);
    this.RemoveLiquidity = this.RemoveLiquidity.bind(this);
    this.ToggleProviderSwitch = this.ToggleProviderSwitch.bind(this);
    this.AddProvider = this.AddProvider.bind(this);
    this.RmProvider = this.RmProvider.bind(this);
    this.AddPoolCreator = this.AddPoolCreator.bind(this);
    this.RmPoolCreator = this.RmPoolCreator.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "CreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "AddLiquidity",
      data
    );
    return promise.then((data) =>
      MsgAddLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  Swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "Swap",
      data
    );
    return promise.then((data) => MsgSwapResponse.decode(new _m0.Reader(data)));
  }

  RemoveLiquidity(
    request: MsgRemoveLiquidity
  ): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "RemoveLiquidity",
      data
    );
    return promise.then((data) =>
      MsgRemoveLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleProviderSwitch(
    request: MsgToggleProviderSwitch
  ): Promise<MsgToggleProviderSwitchResponse> {
    const data = MsgToggleProviderSwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "ToggleProviderSwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleProviderSwitchResponse.decode(new _m0.Reader(data))
    );
  }

  AddProvider(request: MsgAddProvider): Promise<MsgAddProviderResponse> {
    const data = MsgAddProvider.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "AddProvider",
      data
    );
    return promise.then((data) =>
      MsgAddProviderResponse.decode(new _m0.Reader(data))
    );
  }

  RmProvider(request: MsgRmProvider): Promise<MsgRmProviderResponse> {
    const data = MsgRmProvider.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "RmProvider",
      data
    );
    return promise.then((data) =>
      MsgRmProviderResponse.decode(new _m0.Reader(data))
    );
  }

  AddPoolCreator(
    request: MsgAddPoolCreator
  ): Promise<MsgAddPoolCreatorResponse> {
    const data = MsgAddPoolCreator.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "AddPoolCreator",
      data
    );
    return promise.then((data) =>
      MsgAddPoolCreatorResponse.decode(new _m0.Reader(data))
    );
  }

  RmPoolCreator(request: MsgRmPoolCreator): Promise<MsgRmPoolCreatorResponse> {
    const data = MsgRmPoolCreator.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.rdex.Msg",
      "RmPoolCreator",
      data
    );
    return promise.then((data) =>
      MsgRmPoolCreatorResponse.decode(new _m0.Reader(data))
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

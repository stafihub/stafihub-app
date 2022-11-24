import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface MsgCreatePool {
  creator: string;
  token0?: Coin;
  token1?: Coin;
}
export interface MsgCreatePoolSDKType {
  creator: string;
  token0?: CoinSDKType;
  token1?: CoinSDKType;
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgAddLiquidity {
  creator: string;
  swapPoolIndex: number;
  token0?: Coin;
  token1?: Coin;
}
export interface MsgAddLiquiditySDKType {
  creator: string;
  swapPoolIndex: number;
  token0?: CoinSDKType;
  token1?: CoinSDKType;
}
export interface MsgAddLiquidityResponse {}
export interface MsgAddLiquidityResponseSDKType {}
export interface MsgSwap {
  creator: string;
  swapPoolIndex: number;
  inputToken?: Coin;
  minOutToken?: Coin;
}
export interface MsgSwapSDKType {
  creator: string;
  swapPoolIndex: number;
  inputToken?: CoinSDKType;
  minOutToken?: CoinSDKType;
}
export interface MsgSwapResponse {}
export interface MsgSwapResponseSDKType {}
export interface MsgRemoveLiquidity {
  creator: string;
  swapPoolIndex: number;
  rmUnit: string;
  swapUnit: string;
  minOutToken0?: Coin;
  minOutToken1?: Coin;
  inputTokenDenom: string;
}
export interface MsgRemoveLiquiditySDKType {
  creator: string;
  swapPoolIndex: number;
  rmUnit: string;
  swapUnit: string;
  minOutToken0?: CoinSDKType;
  minOutToken1?: CoinSDKType;
  inputTokenDenom: string;
}
export interface MsgRemoveLiquidityResponse {}
export interface MsgRemoveLiquidityResponseSDKType {}
export interface MsgToggleProviderSwitch {
  creator: string;
}
export interface MsgToggleProviderSwitchSDKType {
  creator: string;
}
export interface MsgToggleProviderSwitchResponse {}
export interface MsgToggleProviderSwitchResponseSDKType {}
export interface MsgAddProvider {
  creator: string;
  userAddress: string;
}
export interface MsgAddProviderSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgAddProviderResponse {}
export interface MsgAddProviderResponseSDKType {}
export interface MsgRmProvider {
  creator: string;
  userAddress: string;
}
export interface MsgRmProviderSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgRmProviderResponse {}
export interface MsgRmProviderResponseSDKType {}
export interface MsgAddPoolCreator {
  creator: string;
  userAddress: string;
}
export interface MsgAddPoolCreatorSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgAddPoolCreatorResponse {}
export interface MsgAddPoolCreatorResponseSDKType {}
export interface MsgRmPoolCreator {
  creator: string;
  userAddress: string;
}
export interface MsgRmPoolCreatorSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgRmPoolCreatorResponse {}
export interface MsgRmPoolCreatorResponseSDKType {}

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    token0: undefined,
    token1: undefined
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgCreatePool();

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

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.token0 = object.token0 !== undefined && object.token0 !== null ? Coin.fromPartial(object.token0) : undefined;
    message.token1 = object.token1 !== undefined && object.token1 !== null ? Coin.fromPartial(object.token1) : undefined;
    return message;
  }

};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }

};

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    creator: "",
    swapPoolIndex: 0,
    token0: undefined,
    token1: undefined
  };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgAddLiquidity();

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

  fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.token0 = object.token0 !== undefined && object.token0 !== null ? Coin.fromPartial(object.token0) : undefined;
    message.token1 = object.token1 !== undefined && object.token1 !== null ? Coin.fromPartial(object.token1) : undefined;
    return message;
  }

};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}

export const MsgAddLiquidityResponse = {
  encode(_: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();

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

  fromPartial(_: DeepPartial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  }

};

function createBaseMsgSwap(): MsgSwap {
  return {
    creator: "",
    swapPoolIndex: 0,
    inputToken: undefined,
    minOutToken: undefined
  };
}

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSwap();

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

  fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.inputToken = object.inputToken !== undefined && object.inputToken !== null ? Coin.fromPartial(object.inputToken) : undefined;
    message.minOutToken = object.minOutToken !== undefined && object.minOutToken !== null ? Coin.fromPartial(object.minOutToken) : undefined;
    return message;
  }

};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();

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

  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }

};

function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    creator: "",
    swapPoolIndex: 0,
    rmUnit: "",
    swapUnit: "",
    minOutToken0: undefined,
    minOutToken1: undefined,
    inputTokenDenom: ""
  };
}

export const MsgRemoveLiquidity = {
  encode(message: MsgRemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRemoveLiquidity();

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

  fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.swapPoolIndex = object.swapPoolIndex ?? 0;
    message.rmUnit = object.rmUnit ?? "";
    message.swapUnit = object.swapUnit ?? "";
    message.minOutToken0 = object.minOutToken0 !== undefined && object.minOutToken0 !== null ? Coin.fromPartial(object.minOutToken0) : undefined;
    message.minOutToken1 = object.minOutToken1 !== undefined && object.minOutToken1 !== null ? Coin.fromPartial(object.minOutToken1) : undefined;
    message.inputTokenDenom = object.inputTokenDenom ?? "";
    return message;
  }

};

function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {};
}

export const MsgRemoveLiquidityResponse = {
  encode(_: MsgRemoveLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();

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

  fromPartial(_: DeepPartial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  }

};

function createBaseMsgToggleProviderSwitch(): MsgToggleProviderSwitch {
  return {
    creator: ""
  };
}

export const MsgToggleProviderSwitch = {
  encode(message: MsgToggleProviderSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleProviderSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleProviderSwitch();

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

  fromPartial(object: DeepPartial<MsgToggleProviderSwitch>): MsgToggleProviderSwitch {
    const message = createBaseMsgToggleProviderSwitch();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgToggleProviderSwitchResponse(): MsgToggleProviderSwitchResponse {
  return {};
}

export const MsgToggleProviderSwitchResponse = {
  encode(_: MsgToggleProviderSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleProviderSwitchResponse();

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

  fromPartial(_: DeepPartial<MsgToggleProviderSwitchResponse>): MsgToggleProviderSwitchResponse {
    const message = createBaseMsgToggleProviderSwitchResponse();
    return message;
  }

};

function createBaseMsgAddProvider(): MsgAddProvider {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgAddProvider = {
  encode(message: MsgAddProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgAddProvider();

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

  fromPartial(object: DeepPartial<MsgAddProvider>): MsgAddProvider {
    const message = createBaseMsgAddProvider();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgAddProviderResponse(): MsgAddProviderResponse {
  return {};
}

export const MsgAddProviderResponse = {
  encode(_: MsgAddProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProviderResponse();

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

  fromPartial(_: DeepPartial<MsgAddProviderResponse>): MsgAddProviderResponse {
    const message = createBaseMsgAddProviderResponse();
    return message;
  }

};

function createBaseMsgRmProvider(): MsgRmProvider {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgRmProvider = {
  encode(message: MsgRmProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRmProvider();

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

  fromPartial(object: DeepPartial<MsgRmProvider>): MsgRmProvider {
    const message = createBaseMsgRmProvider();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgRmProviderResponse(): MsgRmProviderResponse {
  return {};
}

export const MsgRmProviderResponse = {
  encode(_: MsgRmProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmProviderResponse();

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

  fromPartial(_: DeepPartial<MsgRmProviderResponse>): MsgRmProviderResponse {
    const message = createBaseMsgRmProviderResponse();
    return message;
  }

};

function createBaseMsgAddPoolCreator(): MsgAddPoolCreator {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgAddPoolCreator = {
  encode(message: MsgAddPoolCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgAddPoolCreator();

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

  fromPartial(object: DeepPartial<MsgAddPoolCreator>): MsgAddPoolCreator {
    const message = createBaseMsgAddPoolCreator();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgAddPoolCreatorResponse(): MsgAddPoolCreatorResponse {
  return {};
}

export const MsgAddPoolCreatorResponse = {
  encode(_: MsgAddPoolCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPoolCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPoolCreatorResponse();

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

  fromPartial(_: DeepPartial<MsgAddPoolCreatorResponse>): MsgAddPoolCreatorResponse {
    const message = createBaseMsgAddPoolCreatorResponse();
    return message;
  }

};

function createBaseMsgRmPoolCreator(): MsgRmPoolCreator {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgRmPoolCreator = {
  encode(message: MsgRmPoolCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRmPoolCreator();

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

  fromPartial(object: DeepPartial<MsgRmPoolCreator>): MsgRmPoolCreator {
    const message = createBaseMsgRmPoolCreator();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgRmPoolCreatorResponse(): MsgRmPoolCreatorResponse {
  return {};
}

export const MsgRmPoolCreatorResponse = {
  encode(_: MsgRmPoolCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmPoolCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmPoolCreatorResponse();

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

  fromPartial(_: DeepPartial<MsgRmPoolCreatorResponse>): MsgRmPoolCreatorResponse {
    const message = createBaseMsgRmPoolCreatorResponse();
    return message;
  }

};
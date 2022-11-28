//@ts-nocheck
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface SwapPool {
  index: number;
  lpToken?: Coin;
  baseToken?: Coin;
  token?: Coin;
}
export interface SwapPoolSDKType {
  index: number;
  lpToken?: CoinSDKType;
  baseToken?: CoinSDKType;
  token?: CoinSDKType;
}

function createBaseSwapPool(): SwapPool {
  return {
    index: 0,
    lpToken: undefined,
    baseToken: undefined,
    token: undefined
  };
}

export const SwapPool = {
  encode(message: SwapPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.lpToken !== undefined) {
      Coin.encode(message.lpToken, writer.uint32(18).fork()).ldelim();
    }

    if (message.baseToken !== undefined) {
      Coin.encode(message.baseToken, writer.uint32(26).fork()).ldelim();
    }

    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.lpToken = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.baseToken = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.token = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SwapPool>): SwapPool {
    const message = createBaseSwapPool();
    message.index = object.index ?? 0;
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? Coin.fromPartial(object.lpToken) : undefined;
    message.baseToken = object.baseToken !== undefined && object.baseToken !== null ? Coin.fromPartial(object.baseToken) : undefined;
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    return message;
  }

};
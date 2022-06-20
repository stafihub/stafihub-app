/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.rdex";

export interface SwapPool {
  index: number;
  lpToken?: Coin;
  baseToken?: Coin;
  token?: Coin;
}

const baseSwapPool: object = { index: 0 };

export const SwapPool = {
  encode(
    message: SwapPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseSwapPool } as SwapPool;
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

  fromJSON(object: any): SwapPool {
    const message = { ...baseSwapPool } as SwapPool;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.lpToken =
      object.lpToken !== undefined && object.lpToken !== null
        ? Coin.fromJSON(object.lpToken)
        : undefined;
    message.baseToken =
      object.baseToken !== undefined && object.baseToken !== null
        ? Coin.fromJSON(object.baseToken)
        : undefined;
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: SwapPool): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.lpToken !== undefined &&
      (obj.lpToken = message.lpToken
        ? Coin.toJSON(message.lpToken)
        : undefined);
    message.baseToken !== undefined &&
      (obj.baseToken = message.baseToken
        ? Coin.toJSON(message.baseToken)
        : undefined);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SwapPool>): SwapPool {
    const message = { ...baseSwapPool } as SwapPool;
    message.index = object.index ?? 0;
    message.lpToken =
      object.lpToken !== undefined && object.lpToken !== null
        ? Coin.fromPartial(object.lpToken)
        : undefined;
    message.baseToken =
      object.baseToken !== undefined && object.baseToken !== null
        ? Coin.fromPartial(object.baseToken)
        : undefined;
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    return message;
  },
};

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

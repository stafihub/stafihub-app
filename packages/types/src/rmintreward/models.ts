/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stafihub.stafihub.rmintreward";

export interface MintRewardAct {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  totalRTokenAmount: string;
  totalNativeTokenAmount: string;
  tokenRewardInfos: TokenRewardInfo[];
}

export interface MintRewardActPost {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  tokenRewardInfos: TokenRewardInfoPost[];
}

export interface TokenRewardInfo {
  denom: string;
  rewardRate: string;
  totalRewardAmount: string;
  leftAmount: string;
  userLimit: string;
}

export interface TokenRewardInfoPost {
  denom: string;
  rewardRate: string;
  totalRewardAmount: string;
  userLimit: string;
}

export interface UserClaimInfo {
  mintRTokenAmount: string;
  nativeTokenAmount: string;
  mintBlock: Long;
  latestClaimedBlock: Long;
  TokenClaimInfos: TokenClaimInfo[];
}

export interface TokenClaimInfo {
  denom: string;
  totalRewardAmount: string;
  totalClaimedAmount: string;
}

export interface Acts {
  acts: Long[];
}

const baseMintRewardAct: object = {
  begin: Long.ZERO,
  end: Long.ZERO,
  lockedBlocks: Long.ZERO,
  totalRTokenAmount: "",
  totalNativeTokenAmount: "",
};

export const MintRewardAct = {
  encode(
    message: MintRewardAct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.begin.isZero()) {
      writer.uint32(8).int64(message.begin);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).int64(message.end);
    }
    if (!message.lockedBlocks.isZero()) {
      writer.uint32(24).int64(message.lockedBlocks);
    }
    if (message.totalRTokenAmount !== "") {
      writer.uint32(42).string(message.totalRTokenAmount);
    }
    if (message.totalNativeTokenAmount !== "") {
      writer.uint32(50).string(message.totalNativeTokenAmount);
    }
    for (const v of message.tokenRewardInfos) {
      TokenRewardInfo.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintRewardAct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintRewardAct } as MintRewardAct;
    message.tokenRewardInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.begin = reader.int64() as Long;
          break;
        case 2:
          message.end = reader.int64() as Long;
          break;
        case 3:
          message.lockedBlocks = reader.int64() as Long;
          break;
        case 5:
          message.totalRTokenAmount = reader.string();
          break;
        case 6:
          message.totalNativeTokenAmount = reader.string();
          break;
        case 7:
          message.tokenRewardInfos.push(
            TokenRewardInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintRewardAct {
    const message = { ...baseMintRewardAct } as MintRewardAct;
    message.begin =
      object.begin !== undefined && object.begin !== null
        ? Long.fromString(object.begin)
        : Long.ZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromString(object.end)
        : Long.ZERO;
    message.lockedBlocks =
      object.lockedBlocks !== undefined && object.lockedBlocks !== null
        ? Long.fromString(object.lockedBlocks)
        : Long.ZERO;
    message.totalRTokenAmount =
      object.totalRTokenAmount !== undefined &&
      object.totalRTokenAmount !== null
        ? String(object.totalRTokenAmount)
        : "";
    message.totalNativeTokenAmount =
      object.totalNativeTokenAmount !== undefined &&
      object.totalNativeTokenAmount !== null
        ? String(object.totalNativeTokenAmount)
        : "";
    message.tokenRewardInfos = (object.tokenRewardInfos ?? []).map((e: any) =>
      TokenRewardInfo.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MintRewardAct): unknown {
    const obj: any = {};
    message.begin !== undefined &&
      (obj.begin = (message.begin || Long.ZERO).toString());
    message.end !== undefined &&
      (obj.end = (message.end || Long.ZERO).toString());
    message.lockedBlocks !== undefined &&
      (obj.lockedBlocks = (message.lockedBlocks || Long.ZERO).toString());
    message.totalRTokenAmount !== undefined &&
      (obj.totalRTokenAmount = message.totalRTokenAmount);
    message.totalNativeTokenAmount !== undefined &&
      (obj.totalNativeTokenAmount = message.totalNativeTokenAmount);
    if (message.tokenRewardInfos) {
      obj.tokenRewardInfos = message.tokenRewardInfos.map((e) =>
        e ? TokenRewardInfo.toJSON(e) : undefined
      );
    } else {
      obj.tokenRewardInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MintRewardAct>): MintRewardAct {
    const message = { ...baseMintRewardAct } as MintRewardAct;
    message.begin =
      object.begin !== undefined && object.begin !== null
        ? Long.fromValue(object.begin)
        : Long.ZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromValue(object.end)
        : Long.ZERO;
    message.lockedBlocks =
      object.lockedBlocks !== undefined && object.lockedBlocks !== null
        ? Long.fromValue(object.lockedBlocks)
        : Long.ZERO;
    message.totalRTokenAmount = object.totalRTokenAmount ?? "";
    message.totalNativeTokenAmount = object.totalNativeTokenAmount ?? "";
    message.tokenRewardInfos = (object.tokenRewardInfos ?? []).map((e) =>
      TokenRewardInfo.fromPartial(e)
    );
    return message;
  },
};

const baseMintRewardActPost: object = {
  begin: Long.ZERO,
  end: Long.ZERO,
  lockedBlocks: Long.ZERO,
};

export const MintRewardActPost = {
  encode(
    message: MintRewardActPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.begin.isZero()) {
      writer.uint32(8).int64(message.begin);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).int64(message.end);
    }
    if (!message.lockedBlocks.isZero()) {
      writer.uint32(24).int64(message.lockedBlocks);
    }
    for (const v of message.tokenRewardInfos) {
      TokenRewardInfoPost.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintRewardActPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintRewardActPost } as MintRewardActPost;
    message.tokenRewardInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.begin = reader.int64() as Long;
          break;
        case 2:
          message.end = reader.int64() as Long;
          break;
        case 3:
          message.lockedBlocks = reader.int64() as Long;
          break;
        case 7:
          message.tokenRewardInfos.push(
            TokenRewardInfoPost.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintRewardActPost {
    const message = { ...baseMintRewardActPost } as MintRewardActPost;
    message.begin =
      object.begin !== undefined && object.begin !== null
        ? Long.fromString(object.begin)
        : Long.ZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromString(object.end)
        : Long.ZERO;
    message.lockedBlocks =
      object.lockedBlocks !== undefined && object.lockedBlocks !== null
        ? Long.fromString(object.lockedBlocks)
        : Long.ZERO;
    message.tokenRewardInfos = (object.tokenRewardInfos ?? []).map((e: any) =>
      TokenRewardInfoPost.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MintRewardActPost): unknown {
    const obj: any = {};
    message.begin !== undefined &&
      (obj.begin = (message.begin || Long.ZERO).toString());
    message.end !== undefined &&
      (obj.end = (message.end || Long.ZERO).toString());
    message.lockedBlocks !== undefined &&
      (obj.lockedBlocks = (message.lockedBlocks || Long.ZERO).toString());
    if (message.tokenRewardInfos) {
      obj.tokenRewardInfos = message.tokenRewardInfos.map((e) =>
        e ? TokenRewardInfoPost.toJSON(e) : undefined
      );
    } else {
      obj.tokenRewardInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MintRewardActPost>): MintRewardActPost {
    const message = { ...baseMintRewardActPost } as MintRewardActPost;
    message.begin =
      object.begin !== undefined && object.begin !== null
        ? Long.fromValue(object.begin)
        : Long.ZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromValue(object.end)
        : Long.ZERO;
    message.lockedBlocks =
      object.lockedBlocks !== undefined && object.lockedBlocks !== null
        ? Long.fromValue(object.lockedBlocks)
        : Long.ZERO;
    message.tokenRewardInfos = (object.tokenRewardInfos ?? []).map((e) =>
      TokenRewardInfoPost.fromPartial(e)
    );
    return message;
  },
};

const baseTokenRewardInfo: object = {
  denom: "",
  rewardRate: "",
  totalRewardAmount: "",
  leftAmount: "",
  userLimit: "",
};

export const TokenRewardInfo = {
  encode(
    message: TokenRewardInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rewardRate !== "") {
      writer.uint32(18).string(message.rewardRate);
    }
    if (message.totalRewardAmount !== "") {
      writer.uint32(26).string(message.totalRewardAmount);
    }
    if (message.leftAmount !== "") {
      writer.uint32(34).string(message.leftAmount);
    }
    if (message.userLimit !== "") {
      writer.uint32(42).string(message.userLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenRewardInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenRewardInfo } as TokenRewardInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rewardRate = reader.string();
          break;
        case 3:
          message.totalRewardAmount = reader.string();
          break;
        case 4:
          message.leftAmount = reader.string();
          break;
        case 5:
          message.userLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenRewardInfo {
    const message = { ...baseTokenRewardInfo } as TokenRewardInfo;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rewardRate =
      object.rewardRate !== undefined && object.rewardRate !== null
        ? String(object.rewardRate)
        : "";
    message.totalRewardAmount =
      object.totalRewardAmount !== undefined &&
      object.totalRewardAmount !== null
        ? String(object.totalRewardAmount)
        : "";
    message.leftAmount =
      object.leftAmount !== undefined && object.leftAmount !== null
        ? String(object.leftAmount)
        : "";
    message.userLimit =
      object.userLimit !== undefined && object.userLimit !== null
        ? String(object.userLimit)
        : "";
    return message;
  },

  toJSON(message: TokenRewardInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardRate !== undefined && (obj.rewardRate = message.rewardRate);
    message.totalRewardAmount !== undefined &&
      (obj.totalRewardAmount = message.totalRewardAmount);
    message.leftAmount !== undefined && (obj.leftAmount = message.leftAmount);
    message.userLimit !== undefined && (obj.userLimit = message.userLimit);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenRewardInfo>): TokenRewardInfo {
    const message = { ...baseTokenRewardInfo } as TokenRewardInfo;
    message.denom = object.denom ?? "";
    message.rewardRate = object.rewardRate ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.leftAmount = object.leftAmount ?? "";
    message.userLimit = object.userLimit ?? "";
    return message;
  },
};

const baseTokenRewardInfoPost: object = {
  denom: "",
  rewardRate: "",
  totalRewardAmount: "",
  userLimit: "",
};

export const TokenRewardInfoPost = {
  encode(
    message: TokenRewardInfoPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rewardRate !== "") {
      writer.uint32(18).string(message.rewardRate);
    }
    if (message.totalRewardAmount !== "") {
      writer.uint32(26).string(message.totalRewardAmount);
    }
    if (message.userLimit !== "") {
      writer.uint32(42).string(message.userLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenRewardInfoPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenRewardInfoPost } as TokenRewardInfoPost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rewardRate = reader.string();
          break;
        case 3:
          message.totalRewardAmount = reader.string();
          break;
        case 5:
          message.userLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenRewardInfoPost {
    const message = { ...baseTokenRewardInfoPost } as TokenRewardInfoPost;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rewardRate =
      object.rewardRate !== undefined && object.rewardRate !== null
        ? String(object.rewardRate)
        : "";
    message.totalRewardAmount =
      object.totalRewardAmount !== undefined &&
      object.totalRewardAmount !== null
        ? String(object.totalRewardAmount)
        : "";
    message.userLimit =
      object.userLimit !== undefined && object.userLimit !== null
        ? String(object.userLimit)
        : "";
    return message;
  },

  toJSON(message: TokenRewardInfoPost): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardRate !== undefined && (obj.rewardRate = message.rewardRate);
    message.totalRewardAmount !== undefined &&
      (obj.totalRewardAmount = message.totalRewardAmount);
    message.userLimit !== undefined && (obj.userLimit = message.userLimit);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenRewardInfoPost>): TokenRewardInfoPost {
    const message = { ...baseTokenRewardInfoPost } as TokenRewardInfoPost;
    message.denom = object.denom ?? "";
    message.rewardRate = object.rewardRate ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.userLimit = object.userLimit ?? "";
    return message;
  },
};

const baseUserClaimInfo: object = {
  mintRTokenAmount: "",
  nativeTokenAmount: "",
  mintBlock: Long.ZERO,
  latestClaimedBlock: Long.ZERO,
};

export const UserClaimInfo = {
  encode(
    message: UserClaimInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintRTokenAmount !== "") {
      writer.uint32(10).string(message.mintRTokenAmount);
    }
    if (message.nativeTokenAmount !== "") {
      writer.uint32(18).string(message.nativeTokenAmount);
    }
    if (!message.mintBlock.isZero()) {
      writer.uint32(24).int64(message.mintBlock);
    }
    if (!message.latestClaimedBlock.isZero()) {
      writer.uint32(32).int64(message.latestClaimedBlock);
    }
    for (const v of message.TokenClaimInfos) {
      TokenClaimInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserClaimInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserClaimInfo } as UserClaimInfo;
    message.TokenClaimInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRTokenAmount = reader.string();
          break;
        case 2:
          message.nativeTokenAmount = reader.string();
          break;
        case 3:
          message.mintBlock = reader.int64() as Long;
          break;
        case 4:
          message.latestClaimedBlock = reader.int64() as Long;
          break;
        case 5:
          message.TokenClaimInfos.push(
            TokenClaimInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserClaimInfo {
    const message = { ...baseUserClaimInfo } as UserClaimInfo;
    message.mintRTokenAmount =
      object.mintRTokenAmount !== undefined && object.mintRTokenAmount !== null
        ? String(object.mintRTokenAmount)
        : "";
    message.nativeTokenAmount =
      object.nativeTokenAmount !== undefined &&
      object.nativeTokenAmount !== null
        ? String(object.nativeTokenAmount)
        : "";
    message.mintBlock =
      object.mintBlock !== undefined && object.mintBlock !== null
        ? Long.fromString(object.mintBlock)
        : Long.ZERO;
    message.latestClaimedBlock =
      object.latestClaimedBlock !== undefined &&
      object.latestClaimedBlock !== null
        ? Long.fromString(object.latestClaimedBlock)
        : Long.ZERO;
    message.TokenClaimInfos = (object.TokenClaimInfos ?? []).map((e: any) =>
      TokenClaimInfo.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UserClaimInfo): unknown {
    const obj: any = {};
    message.mintRTokenAmount !== undefined &&
      (obj.mintRTokenAmount = message.mintRTokenAmount);
    message.nativeTokenAmount !== undefined &&
      (obj.nativeTokenAmount = message.nativeTokenAmount);
    message.mintBlock !== undefined &&
      (obj.mintBlock = (message.mintBlock || Long.ZERO).toString());
    message.latestClaimedBlock !== undefined &&
      (obj.latestClaimedBlock = (
        message.latestClaimedBlock || Long.ZERO
      ).toString());
    if (message.TokenClaimInfos) {
      obj.TokenClaimInfos = message.TokenClaimInfos.map((e) =>
        e ? TokenClaimInfo.toJSON(e) : undefined
      );
    } else {
      obj.TokenClaimInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UserClaimInfo>): UserClaimInfo {
    const message = { ...baseUserClaimInfo } as UserClaimInfo;
    message.mintRTokenAmount = object.mintRTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.mintBlock =
      object.mintBlock !== undefined && object.mintBlock !== null
        ? Long.fromValue(object.mintBlock)
        : Long.ZERO;
    message.latestClaimedBlock =
      object.latestClaimedBlock !== undefined &&
      object.latestClaimedBlock !== null
        ? Long.fromValue(object.latestClaimedBlock)
        : Long.ZERO;
    message.TokenClaimInfos = (object.TokenClaimInfos ?? []).map((e) =>
      TokenClaimInfo.fromPartial(e)
    );
    return message;
  },
};

const baseTokenClaimInfo: object = {
  denom: "",
  totalRewardAmount: "",
  totalClaimedAmount: "",
};

export const TokenClaimInfo = {
  encode(
    message: TokenClaimInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.totalRewardAmount !== "") {
      writer.uint32(18).string(message.totalRewardAmount);
    }
    if (message.totalClaimedAmount !== "") {
      writer.uint32(26).string(message.totalClaimedAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenClaimInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenClaimInfo } as TokenClaimInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.totalRewardAmount = reader.string();
          break;
        case 3:
          message.totalClaimedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenClaimInfo {
    const message = { ...baseTokenClaimInfo } as TokenClaimInfo;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.totalRewardAmount =
      object.totalRewardAmount !== undefined &&
      object.totalRewardAmount !== null
        ? String(object.totalRewardAmount)
        : "";
    message.totalClaimedAmount =
      object.totalClaimedAmount !== undefined &&
      object.totalClaimedAmount !== null
        ? String(object.totalClaimedAmount)
        : "";
    return message;
  },

  toJSON(message: TokenClaimInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalRewardAmount !== undefined &&
      (obj.totalRewardAmount = message.totalRewardAmount);
    message.totalClaimedAmount !== undefined &&
      (obj.totalClaimedAmount = message.totalClaimedAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenClaimInfo>): TokenClaimInfo {
    const message = { ...baseTokenClaimInfo } as TokenClaimInfo;
    message.denom = object.denom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.totalClaimedAmount = object.totalClaimedAmount ?? "";
    return message;
  },
};

const baseActs: object = { acts: Long.UZERO };

export const Acts = {
  encode(message: Acts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.acts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Acts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActs } as Acts;
    message.acts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.acts.push(reader.uint64() as Long);
            }
          } else {
            message.acts.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Acts {
    const message = { ...baseActs } as Acts;
    message.acts = (object.acts ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: Acts): unknown {
    const obj: any = {};
    if (message.acts) {
      obj.acts = message.acts.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.acts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Acts>): Acts {
    const message = { ...baseActs } as Acts;
    message.acts = (object.acts ?? []).map((e) => Long.fromValue(e));
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

import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../helpers";
export interface MintRewardAct {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  totalRTokenAmount: string;
  totalNativeTokenAmount: string;
  tokenRewardInfos: TokenRewardInfo[];
}
export interface MintRewardActSDKType {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  totalRTokenAmount: string;
  totalNativeTokenAmount: string;
  tokenRewardInfos: TokenRewardInfoSDKType[];
}
export interface MintRewardActPost {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  tokenRewardInfos: TokenRewardInfoPost[];
}
export interface MintRewardActPostSDKType {
  begin: Long;
  end: Long;
  lockedBlocks: Long;
  tokenRewardInfos: TokenRewardInfoPostSDKType[];
}
export interface TokenRewardInfo {
  denom: string;
  rewardRate: string;
  totalRewardAmount: string;
  leftAmount: string;
  userLimit: string;
}
export interface TokenRewardInfoSDKType {
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
export interface TokenRewardInfoPostSDKType {
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
export interface UserClaimInfoSDKType {
  mintRTokenAmount: string;
  nativeTokenAmount: string;
  mintBlock: Long;
  latestClaimedBlock: Long;
  TokenClaimInfos: TokenClaimInfoSDKType[];
}
export interface TokenClaimInfo {
  denom: string;
  totalRewardAmount: string;
  totalClaimedAmount: string;
}
export interface TokenClaimInfoSDKType {
  denom: string;
  totalRewardAmount: string;
  totalClaimedAmount: string;
}
export interface Acts {
  acts: Long[];
}
export interface ActsSDKType {
  acts: Long[];
}

function createBaseMintRewardAct(): MintRewardAct {
  return {
    begin: Long.ZERO,
    end: Long.ZERO,
    lockedBlocks: Long.ZERO,
    totalRTokenAmount: "",
    totalNativeTokenAmount: "",
    tokenRewardInfos: []
  };
}

export const MintRewardAct = {
  encode(message: MintRewardAct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMintRewardAct();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.begin = (reader.int64() as Long);
          break;

        case 2:
          message.end = (reader.int64() as Long);
          break;

        case 3:
          message.lockedBlocks = (reader.int64() as Long);
          break;

        case 5:
          message.totalRTokenAmount = reader.string();
          break;

        case 6:
          message.totalNativeTokenAmount = reader.string();
          break;

        case 7:
          message.tokenRewardInfos.push(TokenRewardInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MintRewardAct>): MintRewardAct {
    const message = createBaseMintRewardAct();
    message.begin = object.begin !== undefined && object.begin !== null ? Long.fromValue(object.begin) : Long.ZERO;
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.ZERO;
    message.lockedBlocks = object.lockedBlocks !== undefined && object.lockedBlocks !== null ? Long.fromValue(object.lockedBlocks) : Long.ZERO;
    message.totalRTokenAmount = object.totalRTokenAmount ?? "";
    message.totalNativeTokenAmount = object.totalNativeTokenAmount ?? "";
    message.tokenRewardInfos = object.tokenRewardInfos?.map(e => TokenRewardInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMintRewardActPost(): MintRewardActPost {
  return {
    begin: Long.ZERO,
    end: Long.ZERO,
    lockedBlocks: Long.ZERO,
    tokenRewardInfos: []
  };
}

export const MintRewardActPost = {
  encode(message: MintRewardActPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMintRewardActPost();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.begin = (reader.int64() as Long);
          break;

        case 2:
          message.end = (reader.int64() as Long);
          break;

        case 3:
          message.lockedBlocks = (reader.int64() as Long);
          break;

        case 7:
          message.tokenRewardInfos.push(TokenRewardInfoPost.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MintRewardActPost>): MintRewardActPost {
    const message = createBaseMintRewardActPost();
    message.begin = object.begin !== undefined && object.begin !== null ? Long.fromValue(object.begin) : Long.ZERO;
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.ZERO;
    message.lockedBlocks = object.lockedBlocks !== undefined && object.lockedBlocks !== null ? Long.fromValue(object.lockedBlocks) : Long.ZERO;
    message.tokenRewardInfos = object.tokenRewardInfos?.map(e => TokenRewardInfoPost.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenRewardInfo(): TokenRewardInfo {
  return {
    denom: "",
    rewardRate: "",
    totalRewardAmount: "",
    leftAmount: "",
    userLimit: ""
  };
}

export const TokenRewardInfo = {
  encode(message: TokenRewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseTokenRewardInfo();

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

  fromPartial(object: DeepPartial<TokenRewardInfo>): TokenRewardInfo {
    const message = createBaseTokenRewardInfo();
    message.denom = object.denom ?? "";
    message.rewardRate = object.rewardRate ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.leftAmount = object.leftAmount ?? "";
    message.userLimit = object.userLimit ?? "";
    return message;
  }

};

function createBaseTokenRewardInfoPost(): TokenRewardInfoPost {
  return {
    denom: "",
    rewardRate: "",
    totalRewardAmount: "",
    userLimit: ""
  };
}

export const TokenRewardInfoPost = {
  encode(message: TokenRewardInfoPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseTokenRewardInfoPost();

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

  fromPartial(object: DeepPartial<TokenRewardInfoPost>): TokenRewardInfoPost {
    const message = createBaseTokenRewardInfoPost();
    message.denom = object.denom ?? "";
    message.rewardRate = object.rewardRate ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.userLimit = object.userLimit ?? "";
    return message;
  }

};

function createBaseUserClaimInfo(): UserClaimInfo {
  return {
    mintRTokenAmount: "",
    nativeTokenAmount: "",
    mintBlock: Long.ZERO,
    latestClaimedBlock: Long.ZERO,
    TokenClaimInfos: []
  };
}

export const UserClaimInfo = {
  encode(message: UserClaimInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseUserClaimInfo();

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
          message.mintBlock = (reader.int64() as Long);
          break;

        case 4:
          message.latestClaimedBlock = (reader.int64() as Long);
          break;

        case 5:
          message.TokenClaimInfos.push(TokenClaimInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserClaimInfo>): UserClaimInfo {
    const message = createBaseUserClaimInfo();
    message.mintRTokenAmount = object.mintRTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.mintBlock = object.mintBlock !== undefined && object.mintBlock !== null ? Long.fromValue(object.mintBlock) : Long.ZERO;
    message.latestClaimedBlock = object.latestClaimedBlock !== undefined && object.latestClaimedBlock !== null ? Long.fromValue(object.latestClaimedBlock) : Long.ZERO;
    message.TokenClaimInfos = object.TokenClaimInfos?.map(e => TokenClaimInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTokenClaimInfo(): TokenClaimInfo {
  return {
    denom: "",
    totalRewardAmount: "",
    totalClaimedAmount: ""
  };
}

export const TokenClaimInfo = {
  encode(message: TokenClaimInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseTokenClaimInfo();

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

  fromPartial(object: DeepPartial<TokenClaimInfo>): TokenClaimInfo {
    const message = createBaseTokenClaimInfo();
    message.denom = object.denom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.totalClaimedAmount = object.totalClaimedAmount ?? "";
    return message;
  }

};

function createBaseActs(): Acts {
  return {
    acts: []
  };
}

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
    const message = createBaseActs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.acts.push((reader.uint64() as Long));
            }
          } else {
            message.acts.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Acts>): Acts {
    const message = createBaseActs();
    message.acts = object.acts?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};
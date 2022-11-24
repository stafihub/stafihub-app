import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export interface StakePool {
  index: number;
  /** staked token denom */

  stakeTokenDenom: string;
  rewardPools: RewardPool[];
  /** total (staked) balance of staked token */

  totalStakedAmount: string;
  totalStakedPower: string;
  emergencySwitch: boolean;
  creator: string;
}
export interface StakePoolSDKType {
  index: number;
  /** staked token denom */

  stakeTokenDenom: string;
  rewardPools: RewardPoolSDKType[];
  /** total (staked) balance of staked token */

  totalStakedAmount: string;
  totalStakedPower: string;
  emergencySwitch: boolean;
  creator: string;
}
export interface RewardPool {
  index: number;
  rewardTokenDenom: string;
  totalRewardAmount: string;
  leftRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
  rewardPerPower: string;
  lastRewardTimestamp: Long;
  creator: string;
  totalClaimedAmount: string;
}
export interface RewardPoolSDKType {
  index: number;
  rewardTokenDenom: string;
  totalRewardAmount: string;
  leftRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
  rewardPerPower: string;
  lastRewardTimestamp: Long;
  creator: string;
  totalClaimedAmount: string;
}
export interface UserStakeRecord {
  userAddress: string;
  stakePoolIndex: number;
  index: number;
  stakedAmount: string;
  stakedPower: string;
  /** the begin timestamp */

  startTimestamp: Long;
  /** promise not unstake before this timestamp */

  lockEndTimestamp: Long;
  userRewardInfos: UserRewardInfo[];
  stakeItemIndex: number;
}
export interface UserStakeRecordSDKType {
  userAddress: string;
  stakePoolIndex: number;
  index: number;
  stakedAmount: string;
  stakedPower: string;
  /** the begin timestamp */

  startTimestamp: Long;
  /** promise not unstake before this timestamp */

  lockEndTimestamp: Long;
  userRewardInfos: UserRewardInfoSDKType[];
  stakeItemIndex: number;
}
export interface UserRewardInfo {
  rewardPoolIndex: number;
  rewardTokenDenom: string;
  rewardDebt: string;
  claimedAmount: string;
}
export interface UserRewardInfoSDKType {
  rewardPoolIndex: number;
  rewardTokenDenom: string;
  rewardDebt: string;
  claimedAmount: string;
}
export interface RewardToken {
  rewardTokenDenom: string;
  minTotalRewardAmount: string;
  minRewardPerSecond: string;
}
export interface RewardTokenSDKType {
  rewardTokenDenom: string;
  minTotalRewardAmount: string;
  minRewardPerSecond: string;
}
export interface StakeItem {
  index: number;
  stakePoolIndex: number;
  lockSecond: Long;
  /** user stakedPower = powerRewardRate * stakedAmount */

  powerRewardRate: string;
  enable: boolean;
}
export interface StakeItemSDKType {
  index: number;
  stakePoolIndex: number;
  lockSecond: Long;
  /** user stakedPower = powerRewardRate * stakedAmount */

  powerRewardRate: string;
  enable: boolean;
}
export interface StakeItemLimit {
  maxPowerRewardRate: string;
  maxLockSecond: Long;
}
export interface StakeItemLimitSDKType {
  maxPowerRewardRate: string;
  maxLockSecond: Long;
}

function createBaseStakePool(): StakePool {
  return {
    index: 0,
    stakeTokenDenom: "",
    rewardPools: [],
    totalStakedAmount: "",
    totalStakedPower: "",
    emergencySwitch: false,
    creator: ""
  };
}

export const StakePool = {
  encode(message: StakePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.stakeTokenDenom !== "") {
      writer.uint32(18).string(message.stakeTokenDenom);
    }

    for (const v of message.rewardPools) {
      RewardPool.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.totalStakedAmount !== "") {
      writer.uint32(34).string(message.totalStakedAmount);
    }

    if (message.totalStakedPower !== "") {
      writer.uint32(42).string(message.totalStakedPower);
    }

    if (message.emergencySwitch === true) {
      writer.uint32(48).bool(message.emergencySwitch);
    }

    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.stakeTokenDenom = reader.string();
          break;

        case 3:
          message.rewardPools.push(RewardPool.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalStakedAmount = reader.string();
          break;

        case 5:
          message.totalStakedPower = reader.string();
          break;

        case 6:
          message.emergencySwitch = reader.bool();
          break;

        case 7:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakePool>): StakePool {
    const message = createBaseStakePool();
    message.index = object.index ?? 0;
    message.stakeTokenDenom = object.stakeTokenDenom ?? "";
    message.rewardPools = object.rewardPools?.map(e => RewardPool.fromPartial(e)) || [];
    message.totalStakedAmount = object.totalStakedAmount ?? "";
    message.totalStakedPower = object.totalStakedPower ?? "";
    message.emergencySwitch = object.emergencySwitch ?? false;
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseRewardPool(): RewardPool {
  return {
    index: 0,
    rewardTokenDenom: "",
    totalRewardAmount: "",
    leftRewardAmount: "",
    rewardPerSecond: "",
    startTimestamp: Long.UZERO,
    rewardPerPower: "",
    lastRewardTimestamp: Long.UZERO,
    creator: "",
    totalClaimedAmount: ""
  };
}

export const RewardPool = {
  encode(message: RewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.rewardTokenDenom !== "") {
      writer.uint32(18).string(message.rewardTokenDenom);
    }

    if (message.totalRewardAmount !== "") {
      writer.uint32(26).string(message.totalRewardAmount);
    }

    if (message.leftRewardAmount !== "") {
      writer.uint32(34).string(message.leftRewardAmount);
    }

    if (message.rewardPerSecond !== "") {
      writer.uint32(42).string(message.rewardPerSecond);
    }

    if (!message.startTimestamp.isZero()) {
      writer.uint32(48).uint64(message.startTimestamp);
    }

    if (message.rewardPerPower !== "") {
      writer.uint32(58).string(message.rewardPerPower);
    }

    if (!message.lastRewardTimestamp.isZero()) {
      writer.uint32(64).uint64(message.lastRewardTimestamp);
    }

    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }

    if (message.totalClaimedAmount !== "") {
      writer.uint32(82).string(message.totalClaimedAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.rewardTokenDenom = reader.string();
          break;

        case 3:
          message.totalRewardAmount = reader.string();
          break;

        case 4:
          message.leftRewardAmount = reader.string();
          break;

        case 5:
          message.rewardPerSecond = reader.string();
          break;

        case 6:
          message.startTimestamp = (reader.uint64() as Long);
          break;

        case 7:
          message.rewardPerPower = reader.string();
          break;

        case 8:
          message.lastRewardTimestamp = (reader.uint64() as Long);
          break;

        case 9:
          message.creator = reader.string();
          break;

        case 10:
          message.totalClaimedAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RewardPool>): RewardPool {
    const message = createBaseRewardPool();
    message.index = object.index ?? 0;
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.leftRewardAmount = object.leftRewardAmount ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.UZERO;
    message.rewardPerPower = object.rewardPerPower ?? "";
    message.lastRewardTimestamp = object.lastRewardTimestamp !== undefined && object.lastRewardTimestamp !== null ? Long.fromValue(object.lastRewardTimestamp) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.totalClaimedAmount = object.totalClaimedAmount ?? "";
    return message;
  }

};

function createBaseUserStakeRecord(): UserStakeRecord {
  return {
    userAddress: "",
    stakePoolIndex: 0,
    index: 0,
    stakedAmount: "",
    stakedPower: "",
    startTimestamp: Long.UZERO,
    lockEndTimestamp: Long.UZERO,
    userRewardInfos: [],
    stakeItemIndex: 0
  };
}

export const UserStakeRecord = {
  encode(message: UserStakeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }

    if (message.stakedAmount !== "") {
      writer.uint32(34).string(message.stakedAmount);
    }

    if (message.stakedPower !== "") {
      writer.uint32(42).string(message.stakedPower);
    }

    if (!message.startTimestamp.isZero()) {
      writer.uint32(48).uint64(message.startTimestamp);
    }

    if (!message.lockEndTimestamp.isZero()) {
      writer.uint32(56).uint64(message.lockEndTimestamp);
    }

    for (const v of message.userRewardInfos) {
      UserRewardInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.stakeItemIndex !== 0) {
      writer.uint32(72).uint32(message.stakeItemIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserStakeRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStakeRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.index = reader.uint32();
          break;

        case 4:
          message.stakedAmount = reader.string();
          break;

        case 5:
          message.stakedPower = reader.string();
          break;

        case 6:
          message.startTimestamp = (reader.uint64() as Long);
          break;

        case 7:
          message.lockEndTimestamp = (reader.uint64() as Long);
          break;

        case 8:
          message.userRewardInfos.push(UserRewardInfo.decode(reader, reader.uint32()));
          break;

        case 9:
          message.stakeItemIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserStakeRecord>): UserStakeRecord {
    const message = createBaseUserStakeRecord();
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.index = object.index ?? 0;
    message.stakedAmount = object.stakedAmount ?? "";
    message.stakedPower = object.stakedPower ?? "";
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.UZERO;
    message.lockEndTimestamp = object.lockEndTimestamp !== undefined && object.lockEndTimestamp !== null ? Long.fromValue(object.lockEndTimestamp) : Long.UZERO;
    message.userRewardInfos = object.userRewardInfos?.map(e => UserRewardInfo.fromPartial(e)) || [];
    message.stakeItemIndex = object.stakeItemIndex ?? 0;
    return message;
  }

};

function createBaseUserRewardInfo(): UserRewardInfo {
  return {
    rewardPoolIndex: 0,
    rewardTokenDenom: "",
    rewardDebt: "",
    claimedAmount: ""
  };
}

export const UserRewardInfo = {
  encode(message: UserRewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardPoolIndex !== 0) {
      writer.uint32(8).uint32(message.rewardPoolIndex);
    }

    if (message.rewardTokenDenom !== "") {
      writer.uint32(18).string(message.rewardTokenDenom);
    }

    if (message.rewardDebt !== "") {
      writer.uint32(26).string(message.rewardDebt);
    }

    if (message.claimedAmount !== "") {
      writer.uint32(34).string(message.claimedAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRewardInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRewardInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardPoolIndex = reader.uint32();
          break;

        case 2:
          message.rewardTokenDenom = reader.string();
          break;

        case 3:
          message.rewardDebt = reader.string();
          break;

        case 4:
          message.claimedAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserRewardInfo>): UserRewardInfo {
    const message = createBaseUserRewardInfo();
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.rewardDebt = object.rewardDebt ?? "";
    message.claimedAmount = object.claimedAmount ?? "";
    return message;
  }

};

function createBaseRewardToken(): RewardToken {
  return {
    rewardTokenDenom: "",
    minTotalRewardAmount: "",
    minRewardPerSecond: ""
  };
}

export const RewardToken = {
  encode(message: RewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardTokenDenom !== "") {
      writer.uint32(10).string(message.rewardTokenDenom);
    }

    if (message.minTotalRewardAmount !== "") {
      writer.uint32(18).string(message.minTotalRewardAmount);
    }

    if (message.minRewardPerSecond !== "") {
      writer.uint32(26).string(message.minRewardPerSecond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardTokenDenom = reader.string();
          break;

        case 2:
          message.minTotalRewardAmount = reader.string();
          break;

        case 3:
          message.minRewardPerSecond = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RewardToken>): RewardToken {
    const message = createBaseRewardToken();
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.minTotalRewardAmount = object.minTotalRewardAmount ?? "";
    message.minRewardPerSecond = object.minRewardPerSecond ?? "";
    return message;
  }

};

function createBaseStakeItem(): StakeItem {
  return {
    index: 0,
    stakePoolIndex: 0,
    lockSecond: Long.UZERO,
    powerRewardRate: "",
    enable: false
  };
}

export const StakeItem = {
  encode(message: StakeItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (!message.lockSecond.isZero()) {
      writer.uint32(24).uint64(message.lockSecond);
    }

    if (message.powerRewardRate !== "") {
      writer.uint32(34).string(message.powerRewardRate);
    }

    if (message.enable === true) {
      writer.uint32(40).bool(message.enable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.lockSecond = (reader.uint64() as Long);
          break;

        case 4:
          message.powerRewardRate = reader.string();
          break;

        case 5:
          message.enable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakeItem>): StakeItem {
    const message = createBaseStakeItem();
    message.index = object.index ?? 0;
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.lockSecond = object.lockSecond !== undefined && object.lockSecond !== null ? Long.fromValue(object.lockSecond) : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    message.enable = object.enable ?? false;
    return message;
  }

};

function createBaseStakeItemLimit(): StakeItemLimit {
  return {
    maxPowerRewardRate: "",
    maxLockSecond: Long.UZERO
  };
}

export const StakeItemLimit = {
  encode(message: StakeItemLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPowerRewardRate !== "") {
      writer.uint32(10).string(message.maxPowerRewardRate);
    }

    if (!message.maxLockSecond.isZero()) {
      writer.uint32(16).uint64(message.maxLockSecond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeItemLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeItemLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxPowerRewardRate = reader.string();
          break;

        case 2:
          message.maxLockSecond = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakeItemLimit>): StakeItemLimit {
    const message = createBaseStakeItemLimit();
    message.maxPowerRewardRate = object.maxPowerRewardRate ?? "";
    message.maxLockSecond = object.maxLockSecond !== undefined && object.maxLockSecond !== null ? Long.fromValue(object.maxLockSecond) : Long.UZERO;
    return message;
  }

};
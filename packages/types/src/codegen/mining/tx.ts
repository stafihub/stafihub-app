import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export interface MsgAddStakePool {
  creator: string;
  stakeTokenDenom: string;
  rewardPoolInfoList: CreateRewardPoolInfo[];
  stakeItemInfoList: CreateStakeItemInfo[];
}
export interface MsgAddStakePoolSDKType {
  creator: string;
  stakeTokenDenom: string;
  rewardPoolInfoList: CreateRewardPoolInfoSDKType[];
  stakeItemInfoList: CreateStakeItemInfoSDKType[];
}
export interface CreateRewardPoolInfo {
  rewardTokenDenom: string;
  totalRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
}
export interface CreateRewardPoolInfoSDKType {
  rewardTokenDenom: string;
  totalRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
}
export interface CreateStakeItemInfo {
  lockSecond: Long;
  /** user stakedPower = powerRewardRate * stakedAmount */

  powerRewardRate: string;
}
export interface CreateStakeItemInfoSDKType {
  lockSecond: Long;
  /** user stakedPower = powerRewardRate * stakedAmount */

  powerRewardRate: string;
}
export interface MsgAddStakePoolResponse {}
export interface MsgAddStakePoolResponseSDKType {}
export interface MsgAddStakeItem {
  creator: string;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}
export interface MsgAddStakeItemSDKType {
  creator: string;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}
export interface MsgAddStakeItemResponse {}
export interface MsgAddStakeItemResponseSDKType {}
export interface MsgAddRewardPool {
  creator: string;
  stakePoolIndex: number;
  rewardTokenDenom: string;
  totalRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
}
export interface MsgAddRewardPoolSDKType {
  creator: string;
  stakePoolIndex: number;
  rewardTokenDenom: string;
  totalRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
}
export interface MsgAddRewardPoolResponse {}
export interface MsgAddRewardPoolResponseSDKType {}
export interface MsgStake {
  creator: string;
  stakePoolIndex: number;
  stakeAmount: string;
  stakeItemIndex: number;
}
export interface MsgStakeSDKType {
  creator: string;
  stakePoolIndex: number;
  stakeAmount: string;
  stakeItemIndex: number;
}
export interface MsgStakeResponse {}
export interface MsgStakeResponseSDKType {}
export interface MsgClaimReward {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface MsgClaimRewardSDKType {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface MsgClaimRewardResponse {}
export interface MsgClaimRewardResponseSDKType {}
export interface MsgWithdraw {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
  withdrawAmount: string;
}
export interface MsgWithdrawSDKType {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
  withdrawAmount: string;
}
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseSDKType {}
export interface MsgUpdateStakeItem {
  creator: string;
  index: number;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}
export interface MsgUpdateStakeItemSDKType {
  creator: string;
  index: number;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}
export interface MsgUpdateStakeItemResponse {}
export interface MsgUpdateStakeItemResponseSDKType {}
export interface MsgAddMiningProvider {
  creator: string;
  userAddress: string;
}
export interface MsgAddMiningProviderSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgAddMiningProviderResponse {}
export interface MsgAddMiningProviderResponseSDKType {}
export interface MsgRmMiningProvider {
  creator: string;
  userAddress: string;
}
export interface MsgRmMiningProviderSDKType {
  creator: string;
  userAddress: string;
}
export interface MsgRmMiningProviderResponse {}
export interface MsgRmMiningProviderResponseSDKType {}
export interface MsgAddRewardToken {
  creator: string;
  denom: string;
  minTotalRewardAmount: string;
  minRewardPerSecond: string;
}
export interface MsgAddRewardTokenSDKType {
  creator: string;
  denom: string;
  minTotalRewardAmount: string;
  minRewardPerSecond: string;
}
export interface MsgAddRewardTokenResponse {}
export interface MsgAddRewardTokenResponseSDKType {}
export interface MsgSetMaxRewardPoolNumber {
  creator: string;
  number: number;
}
export interface MsgSetMaxRewardPoolNumberSDKType {
  creator: string;
  number: number;
}
export interface MsgSetMaxRewardPoolNumberResponse {}
export interface MsgSetMaxRewardPoolNumberResponseSDKType {}
export interface MsgUpdateRewardPool {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  rewardPerSecond: string;
}
export interface MsgUpdateRewardPoolSDKType {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  rewardPerSecond: string;
}
export interface MsgUpdateRewardPoolResponse {}
export interface MsgUpdateRewardPoolResponseSDKType {}
export interface MsgToggleProviderSwitch {
  creator: string;
}
export interface MsgToggleProviderSwitchSDKType {
  creator: string;
}
export interface MsgToggleProviderSwitchResponse {}
export interface MsgToggleProviderSwitchResponseSDKType {}
export interface MsgSetMaxStakeItemNumber {
  creator: string;
  number: number;
}
export interface MsgSetMaxStakeItemNumberSDKType {
  creator: string;
  number: number;
}
export interface MsgSetMaxStakeItemNumberResponse {}
export interface MsgSetMaxStakeItemNumberResponseSDKType {}
export interface MsgAddReward {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  addAmount: string;
  startTimestamp: Long;
  rewardPerSecond: string;
}
export interface MsgAddRewardSDKType {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  addAmount: string;
  startTimestamp: Long;
  rewardPerSecond: string;
}
export interface MsgAddRewardResponse {}
export interface MsgAddRewardResponseSDKType {}
export interface MsgToggleEmergencySwitch {
  creator: string;
  stakePoolIndex: number;
}
export interface MsgToggleEmergencySwitchSDKType {
  creator: string;
  stakePoolIndex: number;
}
export interface MsgToggleEmergencySwitchResponse {}
export interface MsgToggleEmergencySwitchResponseSDKType {}
export interface MsgEmergencyWithdraw {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface MsgEmergencyWithdrawSDKType {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface MsgEmergencyWithdrawResponse {}
export interface MsgEmergencyWithdrawResponseSDKType {}
export interface MsgAddStakeToken {
  creator: string;
  denom: string;
}
export interface MsgAddStakeTokenSDKType {
  creator: string;
  denom: string;
}
export interface MsgAddStakeTokenResponse {}
export interface MsgAddStakeTokenResponseSDKType {}
export interface MsgRmRewardToken {
  creator: string;
  denom: string;
}
export interface MsgRmRewardTokenSDKType {
  creator: string;
  denom: string;
}
export interface MsgRmRewardTokenResponse {}
export interface MsgRmRewardTokenResponseSDKType {}
export interface MsgRmStakeToken {
  creator: string;
  denom: string;
}
export interface MsgRmStakeTokenSDKType {
  creator: string;
  denom: string;
}
export interface MsgRmStakeTokenResponse {}
export interface MsgRmStakeTokenResponseSDKType {}
export interface MsgSetStakeItemLimit {
  creator: string;
  maxLockSecond: Long;
  maxPowerRewardRate: string;
}
export interface MsgSetStakeItemLimitSDKType {
  creator: string;
  maxLockSecond: Long;
  maxPowerRewardRate: string;
}
export interface MsgSetStakeItemLimitResponse {}
export interface MsgSetStakeItemLimitResponseSDKType {}
export interface MsgWithdrawRewardToken {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  withdrawAmount: string;
}
export interface MsgWithdrawRewardTokenSDKType {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  withdrawAmount: string;
}
export interface MsgWithdrawRewardTokenResponse {}
export interface MsgWithdrawRewardTokenResponseSDKType {}

function createBaseMsgAddStakePool(): MsgAddStakePool {
  return {
    creator: "",
    stakeTokenDenom: "",
    rewardPoolInfoList: [],
    stakeItemInfoList: []
  };
}

export const MsgAddStakePool = {
  encode(message: MsgAddStakePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakeTokenDenom !== "") {
      writer.uint32(18).string(message.stakeTokenDenom);
    }

    for (const v of message.rewardPoolInfoList) {
      CreateRewardPoolInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.stakeItemInfoList) {
      CreateStakeItemInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakeTokenDenom = reader.string();
          break;

        case 3:
          message.rewardPoolInfoList.push(CreateRewardPoolInfo.decode(reader, reader.uint32()));
          break;

        case 4:
          message.stakeItemInfoList.push(CreateStakeItemInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddStakePool>): MsgAddStakePool {
    const message = createBaseMsgAddStakePool();
    message.creator = object.creator ?? "";
    message.stakeTokenDenom = object.stakeTokenDenom ?? "";
    message.rewardPoolInfoList = object.rewardPoolInfoList?.map(e => CreateRewardPoolInfo.fromPartial(e)) || [];
    message.stakeItemInfoList = object.stakeItemInfoList?.map(e => CreateStakeItemInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCreateRewardPoolInfo(): CreateRewardPoolInfo {
  return {
    rewardTokenDenom: "",
    totalRewardAmount: "",
    rewardPerSecond: "",
    startTimestamp: Long.UZERO
  };
}

export const CreateRewardPoolInfo = {
  encode(message: CreateRewardPoolInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardTokenDenom !== "") {
      writer.uint32(10).string(message.rewardTokenDenom);
    }

    if (message.totalRewardAmount !== "") {
      writer.uint32(18).string(message.totalRewardAmount);
    }

    if (message.rewardPerSecond !== "") {
      writer.uint32(26).string(message.rewardPerSecond);
    }

    if (!message.startTimestamp.isZero()) {
      writer.uint32(32).uint64(message.startTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRewardPoolInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRewardPoolInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardTokenDenom = reader.string();
          break;

        case 2:
          message.totalRewardAmount = reader.string();
          break;

        case 3:
          message.rewardPerSecond = reader.string();
          break;

        case 4:
          message.startTimestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateRewardPoolInfo>): CreateRewardPoolInfo {
    const message = createBaseCreateRewardPoolInfo();
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.UZERO;
    return message;
  }

};

function createBaseCreateStakeItemInfo(): CreateStakeItemInfo {
  return {
    lockSecond: Long.UZERO,
    powerRewardRate: ""
  };
}

export const CreateStakeItemInfo = {
  encode(message: CreateStakeItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockSecond.isZero()) {
      writer.uint32(8).uint64(message.lockSecond);
    }

    if (message.powerRewardRate !== "") {
      writer.uint32(18).string(message.powerRewardRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateStakeItemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateStakeItemInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockSecond = (reader.uint64() as Long);
          break;

        case 2:
          message.powerRewardRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateStakeItemInfo>): CreateStakeItemInfo {
    const message = createBaseCreateStakeItemInfo();
    message.lockSecond = object.lockSecond !== undefined && object.lockSecond !== null ? Long.fromValue(object.lockSecond) : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    return message;
  }

};

function createBaseMsgAddStakePoolResponse(): MsgAddStakePoolResponse {
  return {};
}

export const MsgAddStakePoolResponse = {
  encode(_: MsgAddStakePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakePoolResponse();

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

  fromPartial(_: DeepPartial<MsgAddStakePoolResponse>): MsgAddStakePoolResponse {
    const message = createBaseMsgAddStakePoolResponse();
    return message;
  }

};

function createBaseMsgAddStakeItem(): MsgAddStakeItem {
  return {
    creator: "",
    stakePoolIndex: 0,
    lockSecond: Long.UZERO,
    powerRewardRate: "",
    enable: false
  };
}

export const MsgAddStakeItem = {
  encode(message: MsgAddStakeItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakeItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakeItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromPartial(object: DeepPartial<MsgAddStakeItem>): MsgAddStakeItem {
    const message = createBaseMsgAddStakeItem();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.lockSecond = object.lockSecond !== undefined && object.lockSecond !== null ? Long.fromValue(object.lockSecond) : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    message.enable = object.enable ?? false;
    return message;
  }

};

function createBaseMsgAddStakeItemResponse(): MsgAddStakeItemResponse {
  return {};
}

export const MsgAddStakeItemResponse = {
  encode(_: MsgAddStakeItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakeItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakeItemResponse();

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

  fromPartial(_: DeepPartial<MsgAddStakeItemResponse>): MsgAddStakeItemResponse {
    const message = createBaseMsgAddStakeItemResponse();
    return message;
  }

};

function createBaseMsgAddRewardPool(): MsgAddRewardPool {
  return {
    creator: "",
    stakePoolIndex: 0,
    rewardTokenDenom: "",
    totalRewardAmount: "",
    rewardPerSecond: "",
    startTimestamp: Long.UZERO
  };
}

export const MsgAddRewardPool = {
  encode(message: MsgAddRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.rewardTokenDenom !== "") {
      writer.uint32(26).string(message.rewardTokenDenom);
    }

    if (message.totalRewardAmount !== "") {
      writer.uint32(34).string(message.totalRewardAmount);
    }

    if (message.rewardPerSecond !== "") {
      writer.uint32(42).string(message.rewardPerSecond);
    }

    if (!message.startTimestamp.isZero()) {
      writer.uint32(48).uint64(message.startTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.rewardTokenDenom = reader.string();
          break;

        case 4:
          message.totalRewardAmount = reader.string();
          break;

        case 5:
          message.rewardPerSecond = reader.string();
          break;

        case 6:
          message.startTimestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddRewardPool>): MsgAddRewardPool {
    const message = createBaseMsgAddRewardPool();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAddRewardPoolResponse(): MsgAddRewardPoolResponse {
  return {};
}

export const MsgAddRewardPoolResponse = {
  encode(_: MsgAddRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardPoolResponse();

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

  fromPartial(_: DeepPartial<MsgAddRewardPoolResponse>): MsgAddRewardPoolResponse {
    const message = createBaseMsgAddRewardPoolResponse();
    return message;
  }

};

function createBaseMsgStake(): MsgStake {
  return {
    creator: "",
    stakePoolIndex: 0,
    stakeAmount: "",
    stakeItemIndex: 0
  };
}

export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.stakeAmount !== "") {
      writer.uint32(26).string(message.stakeAmount);
    }

    if (message.stakeItemIndex !== 0) {
      writer.uint32(32).uint32(message.stakeItemIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.stakeAmount = reader.string();
          break;

        case 4:
          message.stakeItemIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeAmount = object.stakeAmount ?? "";
    message.stakeItemIndex = object.stakeItemIndex ?? 0;
    return message;
  }

};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {};
}

export const MsgStakeResponse = {
  encode(_: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();

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

  fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  }

};

function createBaseMsgClaimReward(): MsgClaimReward {
  return {
    creator: "",
    stakePoolIndex: 0,
    stakeRecordIndex: 0
  };
}

export const MsgClaimReward = {
  encode(message: MsgClaimReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.stakeRecordIndex !== 0) {
      writer.uint32(24).uint32(message.stakeRecordIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.stakeRecordIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimReward>): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  }

};

function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return {};
}

export const MsgClaimRewardResponse = {
  encode(_: MsgClaimRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardResponse();

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

  fromPartial(_: DeepPartial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    creator: "",
    stakePoolIndex: 0,
    stakeRecordIndex: 0,
    withdrawAmount: ""
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.stakeRecordIndex !== 0) {
      writer.uint32(24).uint32(message.stakeRecordIndex);
    }

    if (message.withdrawAmount !== "") {
      writer.uint32(34).string(message.withdrawAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.stakeRecordIndex = reader.uint32();
          break;

        case 4:
          message.withdrawAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }

};

function createBaseMsgUpdateStakeItem(): MsgUpdateStakeItem {
  return {
    creator: "",
    index: 0,
    stakePoolIndex: 0,
    lockSecond: Long.UZERO,
    powerRewardRate: "",
    enable: false
  };
}

export const MsgUpdateStakeItem = {
  encode(message: MsgUpdateStakeItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(24).uint32(message.stakePoolIndex);
    }

    if (!message.lockSecond.isZero()) {
      writer.uint32(32).uint64(message.lockSecond);
    }

    if (message.powerRewardRate !== "") {
      writer.uint32(42).string(message.powerRewardRate);
    }

    if (message.enable === true) {
      writer.uint32(48).bool(message.enable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakeItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakeItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.index = reader.uint32();
          break;

        case 3:
          message.stakePoolIndex = reader.uint32();
          break;

        case 4:
          message.lockSecond = (reader.uint64() as Long);
          break;

        case 5:
          message.powerRewardRate = reader.string();
          break;

        case 6:
          message.enable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateStakeItem>): MsgUpdateStakeItem {
    const message = createBaseMsgUpdateStakeItem();
    message.creator = object.creator ?? "";
    message.index = object.index ?? 0;
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.lockSecond = object.lockSecond !== undefined && object.lockSecond !== null ? Long.fromValue(object.lockSecond) : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    message.enable = object.enable ?? false;
    return message;
  }

};

function createBaseMsgUpdateStakeItemResponse(): MsgUpdateStakeItemResponse {
  return {};
}

export const MsgUpdateStakeItemResponse = {
  encode(_: MsgUpdateStakeItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakeItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakeItemResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateStakeItemResponse>): MsgUpdateStakeItemResponse {
    const message = createBaseMsgUpdateStakeItemResponse();
    return message;
  }

};

function createBaseMsgAddMiningProvider(): MsgAddMiningProvider {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgAddMiningProvider = {
  encode(message: MsgAddMiningProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMiningProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMiningProvider();

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

  fromPartial(object: DeepPartial<MsgAddMiningProvider>): MsgAddMiningProvider {
    const message = createBaseMsgAddMiningProvider();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgAddMiningProviderResponse(): MsgAddMiningProviderResponse {
  return {};
}

export const MsgAddMiningProviderResponse = {
  encode(_: MsgAddMiningProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMiningProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMiningProviderResponse();

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

  fromPartial(_: DeepPartial<MsgAddMiningProviderResponse>): MsgAddMiningProviderResponse {
    const message = createBaseMsgAddMiningProviderResponse();
    return message;
  }

};

function createBaseMsgRmMiningProvider(): MsgRmMiningProvider {
  return {
    creator: "",
    userAddress: ""
  };
}

export const MsgRmMiningProvider = {
  encode(message: MsgRmMiningProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmMiningProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmMiningProvider();

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

  fromPartial(object: DeepPartial<MsgRmMiningProvider>): MsgRmMiningProvider {
    const message = createBaseMsgRmMiningProvider();
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  }

};

function createBaseMsgRmMiningProviderResponse(): MsgRmMiningProviderResponse {
  return {};
}

export const MsgRmMiningProviderResponse = {
  encode(_: MsgRmMiningProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmMiningProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmMiningProviderResponse();

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

  fromPartial(_: DeepPartial<MsgRmMiningProviderResponse>): MsgRmMiningProviderResponse {
    const message = createBaseMsgRmMiningProviderResponse();
    return message;
  }

};

function createBaseMsgAddRewardToken(): MsgAddRewardToken {
  return {
    creator: "",
    denom: "",
    minTotalRewardAmount: "",
    minRewardPerSecond: ""
  };
}

export const MsgAddRewardToken = {
  encode(message: MsgAddRewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.minTotalRewardAmount !== "") {
      writer.uint32(26).string(message.minTotalRewardAmount);
    }

    if (message.minRewardPerSecond !== "") {
      writer.uint32(34).string(message.minRewardPerSecond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardToken();

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
          message.minTotalRewardAmount = reader.string();
          break;

        case 4:
          message.minRewardPerSecond = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddRewardToken>): MsgAddRewardToken {
    const message = createBaseMsgAddRewardToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.minTotalRewardAmount = object.minTotalRewardAmount ?? "";
    message.minRewardPerSecond = object.minRewardPerSecond ?? "";
    return message;
  }

};

function createBaseMsgAddRewardTokenResponse(): MsgAddRewardTokenResponse {
  return {};
}

export const MsgAddRewardTokenResponse = {
  encode(_: MsgAddRewardTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardTokenResponse();

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

  fromPartial(_: DeepPartial<MsgAddRewardTokenResponse>): MsgAddRewardTokenResponse {
    const message = createBaseMsgAddRewardTokenResponse();
    return message;
  }

};

function createBaseMsgSetMaxRewardPoolNumber(): MsgSetMaxRewardPoolNumber {
  return {
    creator: "",
    number: 0
  };
}

export const MsgSetMaxRewardPoolNumber = {
  encode(message: MsgSetMaxRewardPoolNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxRewardPoolNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxRewardPoolNumber();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.number = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetMaxRewardPoolNumber>): MsgSetMaxRewardPoolNumber {
    const message = createBaseMsgSetMaxRewardPoolNumber();
    message.creator = object.creator ?? "";
    message.number = object.number ?? 0;
    return message;
  }

};

function createBaseMsgSetMaxRewardPoolNumberResponse(): MsgSetMaxRewardPoolNumberResponse {
  return {};
}

export const MsgSetMaxRewardPoolNumberResponse = {
  encode(_: MsgSetMaxRewardPoolNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxRewardPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxRewardPoolNumberResponse();

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

  fromPartial(_: DeepPartial<MsgSetMaxRewardPoolNumberResponse>): MsgSetMaxRewardPoolNumberResponse {
    const message = createBaseMsgSetMaxRewardPoolNumberResponse();
    return message;
  }

};

function createBaseMsgUpdateRewardPool(): MsgUpdateRewardPool {
  return {
    creator: "",
    stakePoolIndex: 0,
    rewardPoolIndex: 0,
    rewardPerSecond: ""
  };
}

export const MsgUpdateRewardPool = {
  encode(message: MsgUpdateRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.rewardPoolIndex !== 0) {
      writer.uint32(24).uint32(message.rewardPoolIndex);
    }

    if (message.rewardPerSecond !== "") {
      writer.uint32(34).string(message.rewardPerSecond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.rewardPoolIndex = reader.uint32();
          break;

        case 4:
          message.rewardPerSecond = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateRewardPool>): MsgUpdateRewardPool {
    const message = createBaseMsgUpdateRewardPool();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    return message;
  }

};

function createBaseMsgUpdateRewardPoolResponse(): MsgUpdateRewardPoolResponse {
  return {};
}

export const MsgUpdateRewardPoolResponse = {
  encode(_: MsgUpdateRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardPoolResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateRewardPoolResponse>): MsgUpdateRewardPoolResponse {
    const message = createBaseMsgUpdateRewardPoolResponse();
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

function createBaseMsgSetMaxStakeItemNumber(): MsgSetMaxStakeItemNumber {
  return {
    creator: "",
    number: 0
  };
}

export const MsgSetMaxStakeItemNumber = {
  encode(message: MsgSetMaxStakeItemNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxStakeItemNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxStakeItemNumber();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.number = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetMaxStakeItemNumber>): MsgSetMaxStakeItemNumber {
    const message = createBaseMsgSetMaxStakeItemNumber();
    message.creator = object.creator ?? "";
    message.number = object.number ?? 0;
    return message;
  }

};

function createBaseMsgSetMaxStakeItemNumberResponse(): MsgSetMaxStakeItemNumberResponse {
  return {};
}

export const MsgSetMaxStakeItemNumberResponse = {
  encode(_: MsgSetMaxStakeItemNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxStakeItemNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxStakeItemNumberResponse();

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

  fromPartial(_: DeepPartial<MsgSetMaxStakeItemNumberResponse>): MsgSetMaxStakeItemNumberResponse {
    const message = createBaseMsgSetMaxStakeItemNumberResponse();
    return message;
  }

};

function createBaseMsgAddReward(): MsgAddReward {
  return {
    creator: "",
    stakePoolIndex: 0,
    rewardPoolIndex: 0,
    addAmount: "",
    startTimestamp: Long.UZERO,
    rewardPerSecond: ""
  };
}

export const MsgAddReward = {
  encode(message: MsgAddReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.rewardPoolIndex !== 0) {
      writer.uint32(24).uint32(message.rewardPoolIndex);
    }

    if (message.addAmount !== "") {
      writer.uint32(34).string(message.addAmount);
    }

    if (!message.startTimestamp.isZero()) {
      writer.uint32(40).uint64(message.startTimestamp);
    }

    if (message.rewardPerSecond !== "") {
      writer.uint32(50).string(message.rewardPerSecond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.rewardPoolIndex = reader.uint32();
          break;

        case 4:
          message.addAmount = reader.string();
          break;

        case 5:
          message.startTimestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.rewardPerSecond = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddReward>): MsgAddReward {
    const message = createBaseMsgAddReward();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.addAmount = object.addAmount ?? "";
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.UZERO;
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    return message;
  }

};

function createBaseMsgAddRewardResponse(): MsgAddRewardResponse {
  return {};
}

export const MsgAddRewardResponse = {
  encode(_: MsgAddRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardResponse();

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

  fromPartial(_: DeepPartial<MsgAddRewardResponse>): MsgAddRewardResponse {
    const message = createBaseMsgAddRewardResponse();
    return message;
  }

};

function createBaseMsgToggleEmergencySwitch(): MsgToggleEmergencySwitch {
  return {
    creator: "",
    stakePoolIndex: 0
  };
}

export const MsgToggleEmergencySwitch = {
  encode(message: MsgToggleEmergencySwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleEmergencySwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleEmergencySwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgToggleEmergencySwitch>): MsgToggleEmergencySwitch {
    const message = createBaseMsgToggleEmergencySwitch();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  }

};

function createBaseMsgToggleEmergencySwitchResponse(): MsgToggleEmergencySwitchResponse {
  return {};
}

export const MsgToggleEmergencySwitchResponse = {
  encode(_: MsgToggleEmergencySwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleEmergencySwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleEmergencySwitchResponse();

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

  fromPartial(_: DeepPartial<MsgToggleEmergencySwitchResponse>): MsgToggleEmergencySwitchResponse {
    const message = createBaseMsgToggleEmergencySwitchResponse();
    return message;
  }

};

function createBaseMsgEmergencyWithdraw(): MsgEmergencyWithdraw {
  return {
    creator: "",
    stakePoolIndex: 0,
    stakeRecordIndex: 0
  };
}

export const MsgEmergencyWithdraw = {
  encode(message: MsgEmergencyWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.stakeRecordIndex !== 0) {
      writer.uint32(24).uint32(message.stakeRecordIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEmergencyWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmergencyWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.stakeRecordIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEmergencyWithdraw>): MsgEmergencyWithdraw {
    const message = createBaseMsgEmergencyWithdraw();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  }

};

function createBaseMsgEmergencyWithdrawResponse(): MsgEmergencyWithdrawResponse {
  return {};
}

export const MsgEmergencyWithdrawResponse = {
  encode(_: MsgEmergencyWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEmergencyWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmergencyWithdrawResponse();

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

  fromPartial(_: DeepPartial<MsgEmergencyWithdrawResponse>): MsgEmergencyWithdrawResponse {
    const message = createBaseMsgEmergencyWithdrawResponse();
    return message;
  }

};

function createBaseMsgAddStakeToken(): MsgAddStakeToken {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgAddStakeToken = {
  encode(message: MsgAddStakeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakeToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddStakeToken>): MsgAddStakeToken {
    const message = createBaseMsgAddStakeToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgAddStakeTokenResponse(): MsgAddStakeTokenResponse {
  return {};
}

export const MsgAddStakeTokenResponse = {
  encode(_: MsgAddStakeTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStakeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStakeTokenResponse();

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

  fromPartial(_: DeepPartial<MsgAddStakeTokenResponse>): MsgAddStakeTokenResponse {
    const message = createBaseMsgAddStakeTokenResponse();
    return message;
  }

};

function createBaseMsgRmRewardToken(): MsgRmRewardToken {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgRmRewardToken = {
  encode(message: MsgRmRewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmRewardToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRmRewardToken>): MsgRmRewardToken {
    const message = createBaseMsgRmRewardToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgRmRewardTokenResponse(): MsgRmRewardTokenResponse {
  return {};
}

export const MsgRmRewardTokenResponse = {
  encode(_: MsgRmRewardTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmRewardTokenResponse();

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

  fromPartial(_: DeepPartial<MsgRmRewardTokenResponse>): MsgRmRewardTokenResponse {
    const message = createBaseMsgRmRewardTokenResponse();
    return message;
  }

};

function createBaseMsgRmStakeToken(): MsgRmStakeToken {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgRmStakeToken = {
  encode(message: MsgRmStakeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmStakeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmStakeToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRmStakeToken>): MsgRmStakeToken {
    const message = createBaseMsgRmStakeToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgRmStakeTokenResponse(): MsgRmStakeTokenResponse {
  return {};
}

export const MsgRmStakeTokenResponse = {
  encode(_: MsgRmStakeTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmStakeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmStakeTokenResponse();

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

  fromPartial(_: DeepPartial<MsgRmStakeTokenResponse>): MsgRmStakeTokenResponse {
    const message = createBaseMsgRmStakeTokenResponse();
    return message;
  }

};

function createBaseMsgSetStakeItemLimit(): MsgSetStakeItemLimit {
  return {
    creator: "",
    maxLockSecond: Long.UZERO,
    maxPowerRewardRate: ""
  };
}

export const MsgSetStakeItemLimit = {
  encode(message: MsgSetStakeItemLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.maxLockSecond.isZero()) {
      writer.uint32(16).uint64(message.maxLockSecond);
    }

    if (message.maxPowerRewardRate !== "") {
      writer.uint32(26).string(message.maxPowerRewardRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakeItemLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakeItemLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.maxLockSecond = (reader.uint64() as Long);
          break;

        case 3:
          message.maxPowerRewardRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetStakeItemLimit>): MsgSetStakeItemLimit {
    const message = createBaseMsgSetStakeItemLimit();
    message.creator = object.creator ?? "";
    message.maxLockSecond = object.maxLockSecond !== undefined && object.maxLockSecond !== null ? Long.fromValue(object.maxLockSecond) : Long.UZERO;
    message.maxPowerRewardRate = object.maxPowerRewardRate ?? "";
    return message;
  }

};

function createBaseMsgSetStakeItemLimitResponse(): MsgSetStakeItemLimitResponse {
  return {};
}

export const MsgSetStakeItemLimitResponse = {
  encode(_: MsgSetStakeItemLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakeItemLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakeItemLimitResponse();

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

  fromPartial(_: DeepPartial<MsgSetStakeItemLimitResponse>): MsgSetStakeItemLimitResponse {
    const message = createBaseMsgSetStakeItemLimitResponse();
    return message;
  }

};

function createBaseMsgWithdrawRewardToken(): MsgWithdrawRewardToken {
  return {
    creator: "",
    stakePoolIndex: 0,
    rewardPoolIndex: 0,
    withdrawAmount: ""
  };
}

export const MsgWithdrawRewardToken = {
  encode(message: MsgWithdrawRewardToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    if (message.rewardPoolIndex !== 0) {
      writer.uint32(24).uint32(message.rewardPoolIndex);
    }

    if (message.withdrawAmount !== "") {
      writer.uint32(34).string(message.withdrawAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.stakePoolIndex = reader.uint32();
          break;

        case 3:
          message.rewardPoolIndex = reader.uint32();
          break;

        case 4:
          message.withdrawAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawRewardToken>): MsgWithdrawRewardToken {
    const message = createBaseMsgWithdrawRewardToken();
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  }

};

function createBaseMsgWithdrawRewardTokenResponse(): MsgWithdrawRewardTokenResponse {
  return {};
}

export const MsgWithdrawRewardTokenResponse = {
  encode(_: MsgWithdrawRewardTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardTokenResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawRewardTokenResponse>): MsgWithdrawRewardTokenResponse {
    const message = createBaseMsgWithdrawRewardTokenResponse();
    return message;
  }

};
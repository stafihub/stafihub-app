/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stafihub.stafihub.mining";

export interface MsgAddStakePool {
  creator: string;
  stakeTokenDenom: string;
  rewardPoolInfoList: CreateRewardPoolInfo[];
  stakeItemInfoList: CreateStakeItemInfo[];
}

export interface CreateRewardPoolInfo {
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

export interface MsgAddStakePoolResponse {}

export interface MsgAddStakeItem {
  creator: string;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}

export interface MsgAddStakeItemResponse {}

export interface MsgAddRewardPool {
  creator: string;
  stakePoolIndex: number;
  rewardTokenDenom: string;
  totalRewardAmount: string;
  rewardPerSecond: string;
  startTimestamp: Long;
}

export interface MsgAddRewardPoolResponse {}

export interface MsgStake {
  creator: string;
  stakePoolIndex: number;
  stakeAmount: string;
  stakeItemIndex: number;
}

export interface MsgStakeResponse {}

export interface MsgClaimReward {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}

export interface MsgClaimRewardResponse {}

export interface MsgWithdraw {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
  withdrawAmount: string;
}

export interface MsgWithdrawResponse {}

export interface MsgUpdateStakeItem {
  creator: string;
  index: number;
  stakePoolIndex: number;
  lockSecond: Long;
  powerRewardRate: string;
  enable: boolean;
}

export interface MsgUpdateStakeItemResponse {}

export interface MsgAddMiningProvider {
  creator: string;
  userAddress: string;
}

export interface MsgAddMiningProviderResponse {}

export interface MsgRmMiningProvider {
  creator: string;
  userAddress: string;
}

export interface MsgRmMiningProviderResponse {}

export interface MsgAddRewardToken {
  creator: string;
  denom: string;
  minTotalRewardAmount: string;
  minRewardPerSecond: string;
}

export interface MsgAddRewardTokenResponse {}

export interface MsgSetMaxRewardPoolNumber {
  creator: string;
  number: number;
}

export interface MsgSetMaxRewardPoolNumberResponse {}

export interface MsgUpdateRewardPool {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  rewardPerSecond: string;
}

export interface MsgUpdateRewardPoolResponse {}

export interface MsgToggleProviderSwitch {
  creator: string;
}

export interface MsgToggleProviderSwitchResponse {}

export interface MsgSetMaxStakeItemNumber {
  creator: string;
  number: number;
}

export interface MsgSetMaxStakeItemNumberResponse {}

export interface MsgAddReward {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  addAmount: string;
  startTimestamp: Long;
  rewardPerSecond: string;
}

export interface MsgAddRewardResponse {}

export interface MsgToggleEmergencySwitch {
  creator: string;
  stakePoolIndex: number;
}

export interface MsgToggleEmergencySwitchResponse {}

export interface MsgEmergencyWithdraw {
  creator: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}

export interface MsgEmergencyWithdrawResponse {}

export interface MsgAddStakeToken {
  creator: string;
  denom: string;
}

export interface MsgAddStakeTokenResponse {}

export interface MsgRmRewardToken {
  creator: string;
  denom: string;
}

export interface MsgRmRewardTokenResponse {}

export interface MsgRmStakeToken {
  creator: string;
  denom: string;
}

export interface MsgRmStakeTokenResponse {}

export interface MsgSetStakeItemLimit {
  creator: string;
  maxLockSecond: Long;
  maxPowerRewardRate: string;
}

export interface MsgSetStakeItemLimitResponse {}

export interface MsgWithdrawRewardToken {
  creator: string;
  stakePoolIndex: number;
  rewardPoolIndex: number;
  withdrawAmount: string;
}

export interface MsgWithdrawRewardTokenResponse {}

const baseMsgAddStakePool: object = { creator: "", stakeTokenDenom: "" };

export const MsgAddStakePool = {
  encode(
    message: MsgAddStakePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddStakePool } as MsgAddStakePool;
    message.rewardPoolInfoList = [];
    message.stakeItemInfoList = [];
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
          message.rewardPoolInfoList.push(
            CreateRewardPoolInfo.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.stakeItemInfoList.push(
            CreateStakeItemInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddStakePool {
    const message = { ...baseMsgAddStakePool } as MsgAddStakePool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakeTokenDenom =
      object.stakeTokenDenom !== undefined && object.stakeTokenDenom !== null
        ? String(object.stakeTokenDenom)
        : "";
    message.rewardPoolInfoList = (object.rewardPoolInfoList ?? []).map(
      (e: any) => CreateRewardPoolInfo.fromJSON(e)
    );
    message.stakeItemInfoList = (object.stakeItemInfoList ?? []).map((e: any) =>
      CreateStakeItemInfo.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgAddStakePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakeTokenDenom !== undefined &&
      (obj.stakeTokenDenom = message.stakeTokenDenom);
    if (message.rewardPoolInfoList) {
      obj.rewardPoolInfoList = message.rewardPoolInfoList.map((e) =>
        e ? CreateRewardPoolInfo.toJSON(e) : undefined
      );
    } else {
      obj.rewardPoolInfoList = [];
    }
    if (message.stakeItemInfoList) {
      obj.stakeItemInfoList = message.stakeItemInfoList.map((e) =>
        e ? CreateStakeItemInfo.toJSON(e) : undefined
      );
    } else {
      obj.stakeItemInfoList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddStakePool>): MsgAddStakePool {
    const message = { ...baseMsgAddStakePool } as MsgAddStakePool;
    message.creator = object.creator ?? "";
    message.stakeTokenDenom = object.stakeTokenDenom ?? "";
    message.rewardPoolInfoList = (object.rewardPoolInfoList ?? []).map((e) =>
      CreateRewardPoolInfo.fromPartial(e)
    );
    message.stakeItemInfoList = (object.stakeItemInfoList ?? []).map((e) =>
      CreateStakeItemInfo.fromPartial(e)
    );
    return message;
  },
};

const baseCreateRewardPoolInfo: object = {
  rewardTokenDenom: "",
  totalRewardAmount: "",
  rewardPerSecond: "",
  startTimestamp: Long.UZERO,
};

export const CreateRewardPoolInfo = {
  encode(
    message: CreateRewardPoolInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRewardPoolInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRewardPoolInfo } as CreateRewardPoolInfo;
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
          message.startTimestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRewardPoolInfo {
    const message = { ...baseCreateRewardPoolInfo } as CreateRewardPoolInfo;
    message.rewardTokenDenom =
      object.rewardTokenDenom !== undefined && object.rewardTokenDenom !== null
        ? String(object.rewardTokenDenom)
        : "";
    message.totalRewardAmount =
      object.totalRewardAmount !== undefined &&
      object.totalRewardAmount !== null
        ? String(object.totalRewardAmount)
        : "";
    message.rewardPerSecond =
      object.rewardPerSecond !== undefined && object.rewardPerSecond !== null
        ? String(object.rewardPerSecond)
        : "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromString(object.startTimestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: CreateRewardPoolInfo): unknown {
    const obj: any = {};
    message.rewardTokenDenom !== undefined &&
      (obj.rewardTokenDenom = message.rewardTokenDenom);
    message.totalRewardAmount !== undefined &&
      (obj.totalRewardAmount = message.totalRewardAmount);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = (message.startTimestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRewardPoolInfo>): CreateRewardPoolInfo {
    const message = { ...baseCreateRewardPoolInfo } as CreateRewardPoolInfo;
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromValue(object.startTimestamp)
        : Long.UZERO;
    return message;
  },
};

const baseCreateStakeItemInfo: object = {
  lockSecond: Long.UZERO,
  powerRewardRate: "",
};

export const CreateStakeItemInfo = {
  encode(
    message: CreateStakeItemInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseCreateStakeItemInfo } as CreateStakeItemInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockSecond = reader.uint64() as Long;
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

  fromJSON(object: any): CreateStakeItemInfo {
    const message = { ...baseCreateStakeItemInfo } as CreateStakeItemInfo;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromString(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate =
      object.powerRewardRate !== undefined && object.powerRewardRate !== null
        ? String(object.powerRewardRate)
        : "";
    return message;
  },

  toJSON(message: CreateStakeItemInfo): unknown {
    const obj: any = {};
    message.lockSecond !== undefined &&
      (obj.lockSecond = (message.lockSecond || Long.UZERO).toString());
    message.powerRewardRate !== undefined &&
      (obj.powerRewardRate = message.powerRewardRate);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateStakeItemInfo>): CreateStakeItemInfo {
    const message = { ...baseCreateStakeItemInfo } as CreateStakeItemInfo;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromValue(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    return message;
  },
};

const baseMsgAddStakePoolResponse: object = {};

export const MsgAddStakePoolResponse = {
  encode(
    _: MsgAddStakePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddStakePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddStakePoolResponse,
    } as MsgAddStakePoolResponse;
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

  fromJSON(_: any): MsgAddStakePoolResponse {
    const message = {
      ...baseMsgAddStakePoolResponse,
    } as MsgAddStakePoolResponse;
    return message;
  },

  toJSON(_: MsgAddStakePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddStakePoolResponse>
  ): MsgAddStakePoolResponse {
    const message = {
      ...baseMsgAddStakePoolResponse,
    } as MsgAddStakePoolResponse;
    return message;
  },
};

const baseMsgAddStakeItem: object = {
  creator: "",
  stakePoolIndex: 0,
  lockSecond: Long.UZERO,
  powerRewardRate: "",
  enable: false,
};

export const MsgAddStakeItem = {
  encode(
    message: MsgAddStakeItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddStakeItem } as MsgAddStakeItem;
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
          message.lockSecond = reader.uint64() as Long;
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

  fromJSON(object: any): MsgAddStakeItem {
    const message = { ...baseMsgAddStakeItem } as MsgAddStakeItem;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromString(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate =
      object.powerRewardRate !== undefined && object.powerRewardRate !== null
        ? String(object.powerRewardRate)
        : "";
    message.enable =
      object.enable !== undefined && object.enable !== null
        ? Boolean(object.enable)
        : false;
    return message;
  },

  toJSON(message: MsgAddStakeItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.lockSecond !== undefined &&
      (obj.lockSecond = (message.lockSecond || Long.UZERO).toString());
    message.powerRewardRate !== undefined &&
      (obj.powerRewardRate = message.powerRewardRate);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddStakeItem>): MsgAddStakeItem {
    const message = { ...baseMsgAddStakeItem } as MsgAddStakeItem;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromValue(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    message.enable = object.enable ?? false;
    return message;
  },
};

const baseMsgAddStakeItemResponse: object = {};

export const MsgAddStakeItemResponse = {
  encode(
    _: MsgAddStakeItemResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddStakeItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddStakeItemResponse,
    } as MsgAddStakeItemResponse;
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

  fromJSON(_: any): MsgAddStakeItemResponse {
    const message = {
      ...baseMsgAddStakeItemResponse,
    } as MsgAddStakeItemResponse;
    return message;
  },

  toJSON(_: MsgAddStakeItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddStakeItemResponse>
  ): MsgAddStakeItemResponse {
    const message = {
      ...baseMsgAddStakeItemResponse,
    } as MsgAddStakeItemResponse;
    return message;
  },
};

const baseMsgAddRewardPool: object = {
  creator: "",
  stakePoolIndex: 0,
  rewardTokenDenom: "",
  totalRewardAmount: "",
  rewardPerSecond: "",
  startTimestamp: Long.UZERO,
};

export const MsgAddRewardPool = {
  encode(
    message: MsgAddRewardPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddRewardPool } as MsgAddRewardPool;
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
          message.startTimestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddRewardPool {
    const message = { ...baseMsgAddRewardPool } as MsgAddRewardPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.rewardTokenDenom =
      object.rewardTokenDenom !== undefined && object.rewardTokenDenom !== null
        ? String(object.rewardTokenDenom)
        : "";
    message.totalRewardAmount =
      object.totalRewardAmount !== undefined &&
      object.totalRewardAmount !== null
        ? String(object.totalRewardAmount)
        : "";
    message.rewardPerSecond =
      object.rewardPerSecond !== undefined && object.rewardPerSecond !== null
        ? String(object.rewardPerSecond)
        : "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromString(object.startTimestamp)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgAddRewardPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.rewardTokenDenom !== undefined &&
      (obj.rewardTokenDenom = message.rewardTokenDenom);
    message.totalRewardAmount !== undefined &&
      (obj.totalRewardAmount = message.totalRewardAmount);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = (message.startTimestamp || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRewardPool>): MsgAddRewardPool {
    const message = { ...baseMsgAddRewardPool } as MsgAddRewardPool;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardTokenDenom = object.rewardTokenDenom ?? "";
    message.totalRewardAmount = object.totalRewardAmount ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromValue(object.startTimestamp)
        : Long.UZERO;
    return message;
  },
};

const baseMsgAddRewardPoolResponse: object = {};

export const MsgAddRewardPoolResponse = {
  encode(
    _: MsgAddRewardPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddRewardPoolResponse,
    } as MsgAddRewardPoolResponse;
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

  fromJSON(_: any): MsgAddRewardPoolResponse {
    const message = {
      ...baseMsgAddRewardPoolResponse,
    } as MsgAddRewardPoolResponse;
    return message;
  },

  toJSON(_: MsgAddRewardPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddRewardPoolResponse>
  ): MsgAddRewardPoolResponse {
    const message = {
      ...baseMsgAddRewardPoolResponse,
    } as MsgAddRewardPoolResponse;
    return message;
  },
};

const baseMsgStake: object = {
  creator: "",
  stakePoolIndex: 0,
  stakeAmount: "",
  stakeItemIndex: 0,
};

export const MsgStake = {
  encode(
    message: MsgStake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgStake } as MsgStake;
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

  fromJSON(object: any): MsgStake {
    const message = { ...baseMsgStake } as MsgStake;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeAmount =
      object.stakeAmount !== undefined && object.stakeAmount !== null
        ? String(object.stakeAmount)
        : "";
    message.stakeItemIndex =
      object.stakeItemIndex !== undefined && object.stakeItemIndex !== null
        ? Number(object.stakeItemIndex)
        : 0;
    return message;
  },

  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeAmount !== undefined &&
      (obj.stakeAmount = message.stakeAmount);
    message.stakeItemIndex !== undefined &&
      (obj.stakeItemIndex = message.stakeItemIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = { ...baseMsgStake } as MsgStake;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeAmount = object.stakeAmount ?? "";
    message.stakeItemIndex = object.stakeItemIndex ?? 0;
    return message;
  },
};

const baseMsgStakeResponse: object = {};

export const MsgStakeResponse = {
  encode(
    _: MsgStakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
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

  fromJSON(_: any): MsgStakeResponse {
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
    return message;
  },

  toJSON(_: MsgStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
    return message;
  },
};

const baseMsgClaimReward: object = {
  creator: "",
  stakePoolIndex: 0,
  stakeRecordIndex: 0,
};

export const MsgClaimReward = {
  encode(
    message: MsgClaimReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
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

  fromJSON(object: any): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeRecordIndex =
      object.stakeRecordIndex !== undefined && object.stakeRecordIndex !== null
        ? Number(object.stakeRecordIndex)
        : 0;
    return message;
  },

  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeRecordIndex !== undefined &&
      (obj.stakeRecordIndex = message.stakeRecordIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimReward>): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  },
};

const baseMsgClaimRewardResponse: object = {};

export const MsgClaimRewardResponse = {
  encode(
    _: MsgClaimRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
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

  fromJSON(_: any): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    return message;
  },

  toJSON(_: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    return message;
  },
};

const baseMsgWithdraw: object = {
  creator: "",
  stakePoolIndex: 0,
  stakeRecordIndex: 0,
  withdrawAmount: "",
};

export const MsgWithdraw = {
  encode(
    message: MsgWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
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

  fromJSON(object: any): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeRecordIndex =
      object.stakeRecordIndex !== undefined && object.stakeRecordIndex !== null
        ? Number(object.stakeRecordIndex)
        : 0;
    message.withdrawAmount =
      object.withdrawAmount !== undefined && object.withdrawAmount !== null
        ? String(object.withdrawAmount)
        : "";
    return message;
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeRecordIndex !== undefined &&
      (obj.stakeRecordIndex = message.stakeRecordIndex);
    message.withdrawAmount !== undefined &&
      (obj.withdrawAmount = message.withdrawAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  },
};

const baseMsgWithdrawResponse: object = {};

export const MsgWithdrawResponse = {
  encode(
    _: MsgWithdrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
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

  fromJSON(_: any): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },
};

const baseMsgUpdateStakeItem: object = {
  creator: "",
  index: 0,
  stakePoolIndex: 0,
  lockSecond: Long.UZERO,
  powerRewardRate: "",
  enable: false,
};

export const MsgUpdateStakeItem = {
  encode(
    message: MsgUpdateStakeItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgUpdateStakeItem } as MsgUpdateStakeItem;
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
          message.lockSecond = reader.uint64() as Long;
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

  fromJSON(object: any): MsgUpdateStakeItem {
    const message = { ...baseMsgUpdateStakeItem } as MsgUpdateStakeItem;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromString(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate =
      object.powerRewardRate !== undefined && object.powerRewardRate !== null
        ? String(object.powerRewardRate)
        : "";
    message.enable =
      object.enable !== undefined && object.enable !== null
        ? Boolean(object.enable)
        : false;
    return message;
  },

  toJSON(message: MsgUpdateStakeItem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.lockSecond !== undefined &&
      (obj.lockSecond = (message.lockSecond || Long.UZERO).toString());
    message.powerRewardRate !== undefined &&
      (obj.powerRewardRate = message.powerRewardRate);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateStakeItem>): MsgUpdateStakeItem {
    const message = { ...baseMsgUpdateStakeItem } as MsgUpdateStakeItem;
    message.creator = object.creator ?? "";
    message.index = object.index ?? 0;
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.lockSecond =
      object.lockSecond !== undefined && object.lockSecond !== null
        ? Long.fromValue(object.lockSecond)
        : Long.UZERO;
    message.powerRewardRate = object.powerRewardRate ?? "";
    message.enable = object.enable ?? false;
    return message;
  },
};

const baseMsgUpdateStakeItemResponse: object = {};

export const MsgUpdateStakeItemResponse = {
  encode(
    _: MsgUpdateStakeItemResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateStakeItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateStakeItemResponse,
    } as MsgUpdateStakeItemResponse;
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

  fromJSON(_: any): MsgUpdateStakeItemResponse {
    const message = {
      ...baseMsgUpdateStakeItemResponse,
    } as MsgUpdateStakeItemResponse;
    return message;
  },

  toJSON(_: MsgUpdateStakeItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateStakeItemResponse>
  ): MsgUpdateStakeItemResponse {
    const message = {
      ...baseMsgUpdateStakeItemResponse,
    } as MsgUpdateStakeItemResponse;
    return message;
  },
};

const baseMsgAddMiningProvider: object = { creator: "", userAddress: "" };

export const MsgAddMiningProvider = {
  encode(
    message: MsgAddMiningProvider,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddMiningProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddMiningProvider } as MsgAddMiningProvider;
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

  fromJSON(object: any): MsgAddMiningProvider {
    const message = { ...baseMsgAddMiningProvider } as MsgAddMiningProvider;
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

  toJSON(message: MsgAddMiningProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddMiningProvider>): MsgAddMiningProvider {
    const message = { ...baseMsgAddMiningProvider } as MsgAddMiningProvider;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgAddMiningProviderResponse: object = {};

export const MsgAddMiningProviderResponse = {
  encode(
    _: MsgAddMiningProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddMiningProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddMiningProviderResponse,
    } as MsgAddMiningProviderResponse;
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

  fromJSON(_: any): MsgAddMiningProviderResponse {
    const message = {
      ...baseMsgAddMiningProviderResponse,
    } as MsgAddMiningProviderResponse;
    return message;
  },

  toJSON(_: MsgAddMiningProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddMiningProviderResponse>
  ): MsgAddMiningProviderResponse {
    const message = {
      ...baseMsgAddMiningProviderResponse,
    } as MsgAddMiningProviderResponse;
    return message;
  },
};

const baseMsgRmMiningProvider: object = { creator: "", userAddress: "" };

export const MsgRmMiningProvider = {
  encode(
    message: MsgRmMiningProvider,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmMiningProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmMiningProvider } as MsgRmMiningProvider;
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

  fromJSON(object: any): MsgRmMiningProvider {
    const message = { ...baseMsgRmMiningProvider } as MsgRmMiningProvider;
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

  toJSON(message: MsgRmMiningProvider): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmMiningProvider>): MsgRmMiningProvider {
    const message = { ...baseMsgRmMiningProvider } as MsgRmMiningProvider;
    message.creator = object.creator ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseMsgRmMiningProviderResponse: object = {};

export const MsgRmMiningProviderResponse = {
  encode(
    _: MsgRmMiningProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmMiningProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmMiningProviderResponse,
    } as MsgRmMiningProviderResponse;
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

  fromJSON(_: any): MsgRmMiningProviderResponse {
    const message = {
      ...baseMsgRmMiningProviderResponse,
    } as MsgRmMiningProviderResponse;
    return message;
  },

  toJSON(_: MsgRmMiningProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmMiningProviderResponse>
  ): MsgRmMiningProviderResponse {
    const message = {
      ...baseMsgRmMiningProviderResponse,
    } as MsgRmMiningProviderResponse;
    return message;
  },
};

const baseMsgAddRewardToken: object = {
  creator: "",
  denom: "",
  minTotalRewardAmount: "",
  minRewardPerSecond: "",
};

export const MsgAddRewardToken = {
  encode(
    message: MsgAddRewardToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddRewardToken } as MsgAddRewardToken;
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

  fromJSON(object: any): MsgAddRewardToken {
    const message = { ...baseMsgAddRewardToken } as MsgAddRewardToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.minTotalRewardAmount =
      object.minTotalRewardAmount !== undefined &&
      object.minTotalRewardAmount !== null
        ? String(object.minTotalRewardAmount)
        : "";
    message.minRewardPerSecond =
      object.minRewardPerSecond !== undefined &&
      object.minRewardPerSecond !== null
        ? String(object.minRewardPerSecond)
        : "";
    return message;
  },

  toJSON(message: MsgAddRewardToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minTotalRewardAmount !== undefined &&
      (obj.minTotalRewardAmount = message.minTotalRewardAmount);
    message.minRewardPerSecond !== undefined &&
      (obj.minRewardPerSecond = message.minRewardPerSecond);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRewardToken>): MsgAddRewardToken {
    const message = { ...baseMsgAddRewardToken } as MsgAddRewardToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.minTotalRewardAmount = object.minTotalRewardAmount ?? "";
    message.minRewardPerSecond = object.minRewardPerSecond ?? "";
    return message;
  },
};

const baseMsgAddRewardTokenResponse: object = {};

export const MsgAddRewardTokenResponse = {
  encode(
    _: MsgAddRewardTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddRewardTokenResponse,
    } as MsgAddRewardTokenResponse;
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

  fromJSON(_: any): MsgAddRewardTokenResponse {
    const message = {
      ...baseMsgAddRewardTokenResponse,
    } as MsgAddRewardTokenResponse;
    return message;
  },

  toJSON(_: MsgAddRewardTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddRewardTokenResponse>
  ): MsgAddRewardTokenResponse {
    const message = {
      ...baseMsgAddRewardTokenResponse,
    } as MsgAddRewardTokenResponse;
    return message;
  },
};

const baseMsgSetMaxRewardPoolNumber: object = { creator: "", number: 0 };

export const MsgSetMaxRewardPoolNumber = {
  encode(
    message: MsgSetMaxRewardPoolNumber,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMaxRewardPoolNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMaxRewardPoolNumber,
    } as MsgSetMaxRewardPoolNumber;
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

  fromJSON(object: any): MsgSetMaxRewardPoolNumber {
    const message = {
      ...baseMsgSetMaxRewardPoolNumber,
    } as MsgSetMaxRewardPoolNumber;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    return message;
  },

  toJSON(message: MsgSetMaxRewardPoolNumber): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.number !== undefined && (obj.number = message.number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMaxRewardPoolNumber>
  ): MsgSetMaxRewardPoolNumber {
    const message = {
      ...baseMsgSetMaxRewardPoolNumber,
    } as MsgSetMaxRewardPoolNumber;
    message.creator = object.creator ?? "";
    message.number = object.number ?? 0;
    return message;
  },
};

const baseMsgSetMaxRewardPoolNumberResponse: object = {};

export const MsgSetMaxRewardPoolNumberResponse = {
  encode(
    _: MsgSetMaxRewardPoolNumberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMaxRewardPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMaxRewardPoolNumberResponse,
    } as MsgSetMaxRewardPoolNumberResponse;
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

  fromJSON(_: any): MsgSetMaxRewardPoolNumberResponse {
    const message = {
      ...baseMsgSetMaxRewardPoolNumberResponse,
    } as MsgSetMaxRewardPoolNumberResponse;
    return message;
  },

  toJSON(_: MsgSetMaxRewardPoolNumberResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMaxRewardPoolNumberResponse>
  ): MsgSetMaxRewardPoolNumberResponse {
    const message = {
      ...baseMsgSetMaxRewardPoolNumberResponse,
    } as MsgSetMaxRewardPoolNumberResponse;
    return message;
  },
};

const baseMsgUpdateRewardPool: object = {
  creator: "",
  stakePoolIndex: 0,
  rewardPoolIndex: 0,
  rewardPerSecond: "",
};

export const MsgUpdateRewardPool = {
  encode(
    message: MsgUpdateRewardPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgUpdateRewardPool } as MsgUpdateRewardPool;
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

  fromJSON(object: any): MsgUpdateRewardPool {
    const message = { ...baseMsgUpdateRewardPool } as MsgUpdateRewardPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.rewardPoolIndex =
      object.rewardPoolIndex !== undefined && object.rewardPoolIndex !== null
        ? Number(object.rewardPoolIndex)
        : 0;
    message.rewardPerSecond =
      object.rewardPerSecond !== undefined && object.rewardPerSecond !== null
        ? String(object.rewardPerSecond)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateRewardPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.rewardPoolIndex !== undefined &&
      (obj.rewardPoolIndex = message.rewardPoolIndex);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRewardPool>): MsgUpdateRewardPool {
    const message = { ...baseMsgUpdateRewardPool } as MsgUpdateRewardPool;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    return message;
  },
};

const baseMsgUpdateRewardPoolResponse: object = {};

export const MsgUpdateRewardPoolResponse = {
  encode(
    _: MsgUpdateRewardPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRewardPoolResponse,
    } as MsgUpdateRewardPoolResponse;
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

  fromJSON(_: any): MsgUpdateRewardPoolResponse {
    const message = {
      ...baseMsgUpdateRewardPoolResponse,
    } as MsgUpdateRewardPoolResponse;
    return message;
  },

  toJSON(_: MsgUpdateRewardPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRewardPoolResponse>
  ): MsgUpdateRewardPoolResponse {
    const message = {
      ...baseMsgUpdateRewardPoolResponse,
    } as MsgUpdateRewardPoolResponse;
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

const baseMsgSetMaxStakeItemNumber: object = { creator: "", number: 0 };

export const MsgSetMaxStakeItemNumber = {
  encode(
    message: MsgSetMaxStakeItemNumber,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMaxStakeItemNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMaxStakeItemNumber,
    } as MsgSetMaxStakeItemNumber;
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

  fromJSON(object: any): MsgSetMaxStakeItemNumber {
    const message = {
      ...baseMsgSetMaxStakeItemNumber,
    } as MsgSetMaxStakeItemNumber;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    return message;
  },

  toJSON(message: MsgSetMaxStakeItemNumber): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.number !== undefined && (obj.number = message.number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMaxStakeItemNumber>
  ): MsgSetMaxStakeItemNumber {
    const message = {
      ...baseMsgSetMaxStakeItemNumber,
    } as MsgSetMaxStakeItemNumber;
    message.creator = object.creator ?? "";
    message.number = object.number ?? 0;
    return message;
  },
};

const baseMsgSetMaxStakeItemNumberResponse: object = {};

export const MsgSetMaxStakeItemNumberResponse = {
  encode(
    _: MsgSetMaxStakeItemNumberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMaxStakeItemNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMaxStakeItemNumberResponse,
    } as MsgSetMaxStakeItemNumberResponse;
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

  fromJSON(_: any): MsgSetMaxStakeItemNumberResponse {
    const message = {
      ...baseMsgSetMaxStakeItemNumberResponse,
    } as MsgSetMaxStakeItemNumberResponse;
    return message;
  },

  toJSON(_: MsgSetMaxStakeItemNumberResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetMaxStakeItemNumberResponse>
  ): MsgSetMaxStakeItemNumberResponse {
    const message = {
      ...baseMsgSetMaxStakeItemNumberResponse,
    } as MsgSetMaxStakeItemNumberResponse;
    return message;
  },
};

const baseMsgAddReward: object = {
  creator: "",
  stakePoolIndex: 0,
  rewardPoolIndex: 0,
  addAmount: "",
  startTimestamp: Long.UZERO,
  rewardPerSecond: "",
};

export const MsgAddReward = {
  encode(
    message: MsgAddReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddReward } as MsgAddReward;
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
          message.startTimestamp = reader.uint64() as Long;
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

  fromJSON(object: any): MsgAddReward {
    const message = { ...baseMsgAddReward } as MsgAddReward;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.rewardPoolIndex =
      object.rewardPoolIndex !== undefined && object.rewardPoolIndex !== null
        ? Number(object.rewardPoolIndex)
        : 0;
    message.addAmount =
      object.addAmount !== undefined && object.addAmount !== null
        ? String(object.addAmount)
        : "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromString(object.startTimestamp)
        : Long.UZERO;
    message.rewardPerSecond =
      object.rewardPerSecond !== undefined && object.rewardPerSecond !== null
        ? String(object.rewardPerSecond)
        : "";
    return message;
  },

  toJSON(message: MsgAddReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.rewardPoolIndex !== undefined &&
      (obj.rewardPoolIndex = message.rewardPoolIndex);
    message.addAmount !== undefined && (obj.addAmount = message.addAmount);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = (message.startTimestamp || Long.UZERO).toString());
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddReward>): MsgAddReward {
    const message = { ...baseMsgAddReward } as MsgAddReward;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.addAmount = object.addAmount ?? "";
    message.startTimestamp =
      object.startTimestamp !== undefined && object.startTimestamp !== null
        ? Long.fromValue(object.startTimestamp)
        : Long.UZERO;
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    return message;
  },
};

const baseMsgAddRewardResponse: object = {};

export const MsgAddRewardResponse = {
  encode(
    _: MsgAddRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRewardResponse } as MsgAddRewardResponse;
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

  fromJSON(_: any): MsgAddRewardResponse {
    const message = { ...baseMsgAddRewardResponse } as MsgAddRewardResponse;
    return message;
  },

  toJSON(_: MsgAddRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddRewardResponse>): MsgAddRewardResponse {
    const message = { ...baseMsgAddRewardResponse } as MsgAddRewardResponse;
    return message;
  },
};

const baseMsgToggleEmergencySwitch: object = { creator: "", stakePoolIndex: 0 };

export const MsgToggleEmergencySwitch = {
  encode(
    message: MsgToggleEmergencySwitch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleEmergencySwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleEmergencySwitch,
    } as MsgToggleEmergencySwitch;
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

  fromJSON(object: any): MsgToggleEmergencySwitch {
    const message = {
      ...baseMsgToggleEmergencySwitch,
    } as MsgToggleEmergencySwitch;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    return message;
  },

  toJSON(message: MsgToggleEmergencySwitch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgToggleEmergencySwitch>
  ): MsgToggleEmergencySwitch {
    const message = {
      ...baseMsgToggleEmergencySwitch,
    } as MsgToggleEmergencySwitch;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  },
};

const baseMsgToggleEmergencySwitchResponse: object = {};

export const MsgToggleEmergencySwitchResponse = {
  encode(
    _: MsgToggleEmergencySwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleEmergencySwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleEmergencySwitchResponse,
    } as MsgToggleEmergencySwitchResponse;
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

  fromJSON(_: any): MsgToggleEmergencySwitchResponse {
    const message = {
      ...baseMsgToggleEmergencySwitchResponse,
    } as MsgToggleEmergencySwitchResponse;
    return message;
  },

  toJSON(_: MsgToggleEmergencySwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgToggleEmergencySwitchResponse>
  ): MsgToggleEmergencySwitchResponse {
    const message = {
      ...baseMsgToggleEmergencySwitchResponse,
    } as MsgToggleEmergencySwitchResponse;
    return message;
  },
};

const baseMsgEmergencyWithdraw: object = {
  creator: "",
  stakePoolIndex: 0,
  stakeRecordIndex: 0,
};

export const MsgEmergencyWithdraw = {
  encode(
    message: MsgEmergencyWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEmergencyWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEmergencyWithdraw } as MsgEmergencyWithdraw;
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

  fromJSON(object: any): MsgEmergencyWithdraw {
    const message = { ...baseMsgEmergencyWithdraw } as MsgEmergencyWithdraw;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeRecordIndex =
      object.stakeRecordIndex !== undefined && object.stakeRecordIndex !== null
        ? Number(object.stakeRecordIndex)
        : 0;
    return message;
  },

  toJSON(message: MsgEmergencyWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeRecordIndex !== undefined &&
      (obj.stakeRecordIndex = message.stakeRecordIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEmergencyWithdraw>): MsgEmergencyWithdraw {
    const message = { ...baseMsgEmergencyWithdraw } as MsgEmergencyWithdraw;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  },
};

const baseMsgEmergencyWithdrawResponse: object = {};

export const MsgEmergencyWithdrawResponse = {
  encode(
    _: MsgEmergencyWithdrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEmergencyWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEmergencyWithdrawResponse,
    } as MsgEmergencyWithdrawResponse;
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

  fromJSON(_: any): MsgEmergencyWithdrawResponse {
    const message = {
      ...baseMsgEmergencyWithdrawResponse,
    } as MsgEmergencyWithdrawResponse;
    return message;
  },

  toJSON(_: MsgEmergencyWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgEmergencyWithdrawResponse>
  ): MsgEmergencyWithdrawResponse {
    const message = {
      ...baseMsgEmergencyWithdrawResponse,
    } as MsgEmergencyWithdrawResponse;
    return message;
  },
};

const baseMsgAddStakeToken: object = { creator: "", denom: "" };

export const MsgAddStakeToken = {
  encode(
    message: MsgAddStakeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgAddStakeToken } as MsgAddStakeToken;
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

  fromJSON(object: any): MsgAddStakeToken {
    const message = { ...baseMsgAddStakeToken } as MsgAddStakeToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgAddStakeToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddStakeToken>): MsgAddStakeToken {
    const message = { ...baseMsgAddStakeToken } as MsgAddStakeToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgAddStakeTokenResponse: object = {};

export const MsgAddStakeTokenResponse = {
  encode(
    _: MsgAddStakeTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddStakeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddStakeTokenResponse,
    } as MsgAddStakeTokenResponse;
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

  fromJSON(_: any): MsgAddStakeTokenResponse {
    const message = {
      ...baseMsgAddStakeTokenResponse,
    } as MsgAddStakeTokenResponse;
    return message;
  },

  toJSON(_: MsgAddStakeTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddStakeTokenResponse>
  ): MsgAddStakeTokenResponse {
    const message = {
      ...baseMsgAddStakeTokenResponse,
    } as MsgAddStakeTokenResponse;
    return message;
  },
};

const baseMsgRmRewardToken: object = { creator: "", denom: "" };

export const MsgRmRewardToken = {
  encode(
    message: MsgRmRewardToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgRmRewardToken } as MsgRmRewardToken;
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

  fromJSON(object: any): MsgRmRewardToken {
    const message = { ...baseMsgRmRewardToken } as MsgRmRewardToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRmRewardToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmRewardToken>): MsgRmRewardToken {
    const message = { ...baseMsgRmRewardToken } as MsgRmRewardToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRmRewardTokenResponse: object = {};

export const MsgRmRewardTokenResponse = {
  encode(
    _: MsgRmRewardTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmRewardTokenResponse,
    } as MsgRmRewardTokenResponse;
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

  fromJSON(_: any): MsgRmRewardTokenResponse {
    const message = {
      ...baseMsgRmRewardTokenResponse,
    } as MsgRmRewardTokenResponse;
    return message;
  },

  toJSON(_: MsgRmRewardTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmRewardTokenResponse>
  ): MsgRmRewardTokenResponse {
    const message = {
      ...baseMsgRmRewardTokenResponse,
    } as MsgRmRewardTokenResponse;
    return message;
  },
};

const baseMsgRmStakeToken: object = { creator: "", denom: "" };

export const MsgRmStakeToken = {
  encode(
    message: MsgRmStakeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgRmStakeToken } as MsgRmStakeToken;
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

  fromJSON(object: any): MsgRmStakeToken {
    const message = { ...baseMsgRmStakeToken } as MsgRmStakeToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRmStakeToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmStakeToken>): MsgRmStakeToken {
    const message = { ...baseMsgRmStakeToken } as MsgRmStakeToken;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRmStakeTokenResponse: object = {};

export const MsgRmStakeTokenResponse = {
  encode(
    _: MsgRmStakeTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmStakeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmStakeTokenResponse,
    } as MsgRmStakeTokenResponse;
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

  fromJSON(_: any): MsgRmStakeTokenResponse {
    const message = {
      ...baseMsgRmStakeTokenResponse,
    } as MsgRmStakeTokenResponse;
    return message;
  },

  toJSON(_: MsgRmStakeTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmStakeTokenResponse>
  ): MsgRmStakeTokenResponse {
    const message = {
      ...baseMsgRmStakeTokenResponse,
    } as MsgRmStakeTokenResponse;
    return message;
  },
};

const baseMsgSetStakeItemLimit: object = {
  creator: "",
  maxLockSecond: Long.UZERO,
  maxPowerRewardRate: "",
};

export const MsgSetStakeItemLimit = {
  encode(
    message: MsgSetStakeItemLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakeItemLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetStakeItemLimit } as MsgSetStakeItemLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.maxLockSecond = reader.uint64() as Long;
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

  fromJSON(object: any): MsgSetStakeItemLimit {
    const message = { ...baseMsgSetStakeItemLimit } as MsgSetStakeItemLimit;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.maxLockSecond =
      object.maxLockSecond !== undefined && object.maxLockSecond !== null
        ? Long.fromString(object.maxLockSecond)
        : Long.UZERO;
    message.maxPowerRewardRate =
      object.maxPowerRewardRate !== undefined &&
      object.maxPowerRewardRate !== null
        ? String(object.maxPowerRewardRate)
        : "";
    return message;
  },

  toJSON(message: MsgSetStakeItemLimit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.maxLockSecond !== undefined &&
      (obj.maxLockSecond = (message.maxLockSecond || Long.UZERO).toString());
    message.maxPowerRewardRate !== undefined &&
      (obj.maxPowerRewardRate = message.maxPowerRewardRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetStakeItemLimit>): MsgSetStakeItemLimit {
    const message = { ...baseMsgSetStakeItemLimit } as MsgSetStakeItemLimit;
    message.creator = object.creator ?? "";
    message.maxLockSecond =
      object.maxLockSecond !== undefined && object.maxLockSecond !== null
        ? Long.fromValue(object.maxLockSecond)
        : Long.UZERO;
    message.maxPowerRewardRate = object.maxPowerRewardRate ?? "";
    return message;
  },
};

const baseMsgSetStakeItemLimitResponse: object = {};

export const MsgSetStakeItemLimitResponse = {
  encode(
    _: MsgSetStakeItemLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakeItemLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStakeItemLimitResponse,
    } as MsgSetStakeItemLimitResponse;
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

  fromJSON(_: any): MsgSetStakeItemLimitResponse {
    const message = {
      ...baseMsgSetStakeItemLimitResponse,
    } as MsgSetStakeItemLimitResponse;
    return message;
  },

  toJSON(_: MsgSetStakeItemLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStakeItemLimitResponse>
  ): MsgSetStakeItemLimitResponse {
    const message = {
      ...baseMsgSetStakeItemLimitResponse,
    } as MsgSetStakeItemLimitResponse;
    return message;
  },
};

const baseMsgWithdrawRewardToken: object = {
  creator: "",
  stakePoolIndex: 0,
  rewardPoolIndex: 0,
  withdrawAmount: "",
};

export const MsgWithdrawRewardToken = {
  encode(
    message: MsgWithdrawRewardToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawRewardToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawRewardToken } as MsgWithdrawRewardToken;
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

  fromJSON(object: any): MsgWithdrawRewardToken {
    const message = { ...baseMsgWithdrawRewardToken } as MsgWithdrawRewardToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.rewardPoolIndex =
      object.rewardPoolIndex !== undefined && object.rewardPoolIndex !== null
        ? Number(object.rewardPoolIndex)
        : 0;
    message.withdrawAmount =
      object.withdrawAmount !== undefined && object.withdrawAmount !== null
        ? String(object.withdrawAmount)
        : "";
    return message;
  },

  toJSON(message: MsgWithdrawRewardToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.rewardPoolIndex !== undefined &&
      (obj.rewardPoolIndex = message.rewardPoolIndex);
    message.withdrawAmount !== undefined &&
      (obj.withdrawAmount = message.withdrawAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawRewardToken>
  ): MsgWithdrawRewardToken {
    const message = { ...baseMsgWithdrawRewardToken } as MsgWithdrawRewardToken;
    message.creator = object.creator ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.rewardPoolIndex = object.rewardPoolIndex ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  },
};

const baseMsgWithdrawRewardTokenResponse: object = {};

export const MsgWithdrawRewardTokenResponse = {
  encode(
    _: MsgWithdrawRewardTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawRewardTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawRewardTokenResponse,
    } as MsgWithdrawRewardTokenResponse;
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

  fromJSON(_: any): MsgWithdrawRewardTokenResponse {
    const message = {
      ...baseMsgWithdrawRewardTokenResponse,
    } as MsgWithdrawRewardTokenResponse;
    return message;
  },

  toJSON(_: MsgWithdrawRewardTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawRewardTokenResponse>
  ): MsgWithdrawRewardTokenResponse {
    const message = {
      ...baseMsgWithdrawRewardTokenResponse,
    } as MsgWithdrawRewardTokenResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddStakePool(request: MsgAddStakePool): Promise<MsgAddStakePoolResponse>;
  AddStakeItem(request: MsgAddStakeItem): Promise<MsgAddStakeItemResponse>;
  AddRewardPool(request: MsgAddRewardPool): Promise<MsgAddRewardPoolResponse>;
  Stake(request: MsgStake): Promise<MsgStakeResponse>;
  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  UpdateStakeItem(
    request: MsgUpdateStakeItem
  ): Promise<MsgUpdateStakeItemResponse>;
  AddMiningProvider(
    request: MsgAddMiningProvider
  ): Promise<MsgAddMiningProviderResponse>;
  RmMiningProvider(
    request: MsgRmMiningProvider
  ): Promise<MsgRmMiningProviderResponse>;
  AddRewardToken(
    request: MsgAddRewardToken
  ): Promise<MsgAddRewardTokenResponse>;
  SetMaxRewardPoolNumber(
    request: MsgSetMaxRewardPoolNumber
  ): Promise<MsgSetMaxRewardPoolNumberResponse>;
  UpdateRewardPool(
    request: MsgUpdateRewardPool
  ): Promise<MsgUpdateRewardPoolResponse>;
  ToggleProviderSwitch(
    request: MsgToggleProviderSwitch
  ): Promise<MsgToggleProviderSwitchResponse>;
  SetMaxStakeItemNumber(
    request: MsgSetMaxStakeItemNumber
  ): Promise<MsgSetMaxStakeItemNumberResponse>;
  AddReward(request: MsgAddReward): Promise<MsgAddRewardResponse>;
  ToggleEmergencySwitch(
    request: MsgToggleEmergencySwitch
  ): Promise<MsgToggleEmergencySwitchResponse>;
  EmergencyWithdraw(
    request: MsgEmergencyWithdraw
  ): Promise<MsgEmergencyWithdrawResponse>;
  AddStakeToken(request: MsgAddStakeToken): Promise<MsgAddStakeTokenResponse>;
  RmRewardToken(request: MsgRmRewardToken): Promise<MsgRmRewardTokenResponse>;
  RmStakeToken(request: MsgRmStakeToken): Promise<MsgRmStakeTokenResponse>;
  SetStakeItemLimit(
    request: MsgSetStakeItemLimit
  ): Promise<MsgSetStakeItemLimitResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawRewardToken(
    request: MsgWithdrawRewardToken
  ): Promise<MsgWithdrawRewardTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddStakePool = this.AddStakePool.bind(this);
    this.AddStakeItem = this.AddStakeItem.bind(this);
    this.AddRewardPool = this.AddRewardPool.bind(this);
    this.Stake = this.Stake.bind(this);
    this.ClaimReward = this.ClaimReward.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.UpdateStakeItem = this.UpdateStakeItem.bind(this);
    this.AddMiningProvider = this.AddMiningProvider.bind(this);
    this.RmMiningProvider = this.RmMiningProvider.bind(this);
    this.AddRewardToken = this.AddRewardToken.bind(this);
    this.SetMaxRewardPoolNumber = this.SetMaxRewardPoolNumber.bind(this);
    this.UpdateRewardPool = this.UpdateRewardPool.bind(this);
    this.ToggleProviderSwitch = this.ToggleProviderSwitch.bind(this);
    this.SetMaxStakeItemNumber = this.SetMaxStakeItemNumber.bind(this);
    this.AddReward = this.AddReward.bind(this);
    this.ToggleEmergencySwitch = this.ToggleEmergencySwitch.bind(this);
    this.EmergencyWithdraw = this.EmergencyWithdraw.bind(this);
    this.AddStakeToken = this.AddStakeToken.bind(this);
    this.RmRewardToken = this.RmRewardToken.bind(this);
    this.RmStakeToken = this.RmStakeToken.bind(this);
    this.SetStakeItemLimit = this.SetStakeItemLimit.bind(this);
    this.WithdrawRewardToken = this.WithdrawRewardToken.bind(this);
  }
  AddStakePool(request: MsgAddStakePool): Promise<MsgAddStakePoolResponse> {
    const data = MsgAddStakePool.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddStakePool",
      data
    );
    return promise.then((data) =>
      MsgAddStakePoolResponse.decode(new _m0.Reader(data))
    );
  }

  AddStakeItem(request: MsgAddStakeItem): Promise<MsgAddStakeItemResponse> {
    const data = MsgAddStakeItem.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddStakeItem",
      data
    );
    return promise.then((data) =>
      MsgAddStakeItemResponse.decode(new _m0.Reader(data))
    );
  }

  AddRewardPool(request: MsgAddRewardPool): Promise<MsgAddRewardPoolResponse> {
    const data = MsgAddRewardPool.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddRewardPool",
      data
    );
    return promise.then((data) =>
      MsgAddRewardPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "Stake",
      data
    );
    return promise.then((data) =>
      MsgStakeResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "ClaimReward",
      data
    );
    return promise.then((data) =>
      MsgClaimRewardResponse.decode(new _m0.Reader(data))
    );
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "Withdraw",
      data
    );
    return promise.then((data) =>
      MsgWithdrawResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateStakeItem(
    request: MsgUpdateStakeItem
  ): Promise<MsgUpdateStakeItemResponse> {
    const data = MsgUpdateStakeItem.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "UpdateStakeItem",
      data
    );
    return promise.then((data) =>
      MsgUpdateStakeItemResponse.decode(new _m0.Reader(data))
    );
  }

  AddMiningProvider(
    request: MsgAddMiningProvider
  ): Promise<MsgAddMiningProviderResponse> {
    const data = MsgAddMiningProvider.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddMiningProvider",
      data
    );
    return promise.then((data) =>
      MsgAddMiningProviderResponse.decode(new _m0.Reader(data))
    );
  }

  RmMiningProvider(
    request: MsgRmMiningProvider
  ): Promise<MsgRmMiningProviderResponse> {
    const data = MsgRmMiningProvider.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "RmMiningProvider",
      data
    );
    return promise.then((data) =>
      MsgRmMiningProviderResponse.decode(new _m0.Reader(data))
    );
  }

  AddRewardToken(
    request: MsgAddRewardToken
  ): Promise<MsgAddRewardTokenResponse> {
    const data = MsgAddRewardToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddRewardToken",
      data
    );
    return promise.then((data) =>
      MsgAddRewardTokenResponse.decode(new _m0.Reader(data))
    );
  }

  SetMaxRewardPoolNumber(
    request: MsgSetMaxRewardPoolNumber
  ): Promise<MsgSetMaxRewardPoolNumberResponse> {
    const data = MsgSetMaxRewardPoolNumber.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "SetMaxRewardPoolNumber",
      data
    );
    return promise.then((data) =>
      MsgSetMaxRewardPoolNumberResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRewardPool(
    request: MsgUpdateRewardPool
  ): Promise<MsgUpdateRewardPoolResponse> {
    const data = MsgUpdateRewardPool.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "UpdateRewardPool",
      data
    );
    return promise.then((data) =>
      MsgUpdateRewardPoolResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleProviderSwitch(
    request: MsgToggleProviderSwitch
  ): Promise<MsgToggleProviderSwitchResponse> {
    const data = MsgToggleProviderSwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "ToggleProviderSwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleProviderSwitchResponse.decode(new _m0.Reader(data))
    );
  }

  SetMaxStakeItemNumber(
    request: MsgSetMaxStakeItemNumber
  ): Promise<MsgSetMaxStakeItemNumberResponse> {
    const data = MsgSetMaxStakeItemNumber.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "SetMaxStakeItemNumber",
      data
    );
    return promise.then((data) =>
      MsgSetMaxStakeItemNumberResponse.decode(new _m0.Reader(data))
    );
  }

  AddReward(request: MsgAddReward): Promise<MsgAddRewardResponse> {
    const data = MsgAddReward.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddReward",
      data
    );
    return promise.then((data) =>
      MsgAddRewardResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleEmergencySwitch(
    request: MsgToggleEmergencySwitch
  ): Promise<MsgToggleEmergencySwitchResponse> {
    const data = MsgToggleEmergencySwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "ToggleEmergencySwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleEmergencySwitchResponse.decode(new _m0.Reader(data))
    );
  }

  EmergencyWithdraw(
    request: MsgEmergencyWithdraw
  ): Promise<MsgEmergencyWithdrawResponse> {
    const data = MsgEmergencyWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "EmergencyWithdraw",
      data
    );
    return promise.then((data) =>
      MsgEmergencyWithdrawResponse.decode(new _m0.Reader(data))
    );
  }

  AddStakeToken(request: MsgAddStakeToken): Promise<MsgAddStakeTokenResponse> {
    const data = MsgAddStakeToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "AddStakeToken",
      data
    );
    return promise.then((data) =>
      MsgAddStakeTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RmRewardToken(request: MsgRmRewardToken): Promise<MsgRmRewardTokenResponse> {
    const data = MsgRmRewardToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "RmRewardToken",
      data
    );
    return promise.then((data) =>
      MsgRmRewardTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RmStakeToken(request: MsgRmStakeToken): Promise<MsgRmStakeTokenResponse> {
    const data = MsgRmStakeToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "RmStakeToken",
      data
    );
    return promise.then((data) =>
      MsgRmStakeTokenResponse.decode(new _m0.Reader(data))
    );
  }

  SetStakeItemLimit(
    request: MsgSetStakeItemLimit
  ): Promise<MsgSetStakeItemLimitResponse> {
    const data = MsgSetStakeItemLimit.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "SetStakeItemLimit",
      data
    );
    return promise.then((data) =>
      MsgSetStakeItemLimitResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawRewardToken(
    request: MsgWithdrawRewardToken
  ): Promise<MsgWithdrawRewardTokenResponse> {
    const data = MsgWithdrawRewardToken.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Msg",
      "WithdrawRewardToken",
      data
    );
    return promise.then((data) =>
      MsgWithdrawRewardTokenResponse.decode(new _m0.Reader(data))
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

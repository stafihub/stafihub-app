/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import {
  OriginalTxType,
  Unbonding,
  originalTxTypeFromJSON,
  originalTxTypeToJSON,
} from "../ledger/ledger";

export const protobufPackage = "stafihub.stafihub.ledger";

export interface MsgSetEraUnbondLimit {
  creator: string;
  denom: string;
  limit: number;
}

export interface MsgSetEraUnbondLimitResponse {}

export interface MsgSetPoolDetail {
  creator: string;
  denom: string;
  pool: string;
  subAccounts: string[];
  threshold: number;
}

export interface MsgSetPoolDetailResponse {}

export interface MsgSetLeastBond {
  creator: string;
  denom: string;
  leastBond: string;
}

export interface MsgSetLeastBondResponse {}

export interface MsgClearCurrentEraSnapShots {
  creator: string;
  denom: string;
}

export interface MsgClearCurrentEraSnapShotsResponse {}

export interface MsgSetStakingRewardCommission {
  creator: string;
  denom: string;
  commission: string;
}

export interface MsgSetStakingRewardCommissionResponse {}

export interface MsgSetProtocolFeeReceiver {
  creator: string;
  receiver: string;
}

export interface MsgSetProtocolFeeReceiverResponse {}

export interface MsgSetUnbondRelayFee {
  creator: string;
  denom: string;
  value: string;
}

export interface MsgSetUnbondRelayFeeResponse {}

export interface MsgLiquidityUnbond {
  creator: string;
  pool: string;
  value?: Coin;
  recipient: string;
}

export interface MsgLiquidityUnbondResponse {}

export interface MsgSetUnbondCommission {
  creator: string;
  denom: string;
  commission: string;
}

export interface MsgSetUnbondCommissionResponse {}

export interface MsgSubmitSignature {
  creator: string;
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
  propId: string;
  signature: string;
}

export interface MsgSubmitSignatureResponse {}

export interface MsgSetRParams {
  creator: string;
  denom: string;
  gasPrice: string;
  eraSeconds: number;
  offset: number;
  bondingDuration: number;
  leastBond: string;
  validators: string[];
}

export interface MsgSetRParamsResponse {}

export interface MsgSetRelayFeeReceiver {
  creator: string;
  denom: string;
  receiver: string;
}

export interface MsgSetRelayFeeReceiverResponse {}

export interface MsgSetRelayGasPrice {
  creator: string;
  denom: string;
  gasPrice: string;
}

export interface MsgSetRelayGasPriceResponse {}

export interface MsgSetEraSeconds {
  creator: string;
  denom: string;
  eraSeconds: number;
  bondingDuration: number;
  offset: number;
}

export interface MsgSetEraSecondsResponse {}

export interface MsgRmBondedPool {
  creator: string;
  denom: string;
  address: string;
}

export interface MsgRmBondedPoolResponse {}

export interface MsgMigrateInit {
  creator: string;
  denom: string;
  pool: string;
  totalSupply: string;
  active: string;
  bond: string;
  unbond: string;
  exchangeRate: string;
  totalProtocolFee: string;
}

export interface MsgMigrateInitResponse {}

export interface MsgMigrateUnbondings {
  creator: string;
  denom: string;
  pool: string;
  era: number;
  unbondings: Unbonding[];
}

export interface MsgMigrateUnbondingsResponse {}

export interface MsgToggleUnbondSwitch {
  creator: string;
  denom: string;
}

export interface MsgToggleUnbondSwitchResponse {}

const baseMsgSetEraUnbondLimit: object = { creator: "", denom: "", limit: 0 };

export const MsgSetEraUnbondLimit = {
  encode(
    message: MsgSetEraUnbondLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetEraUnbondLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetEraUnbondLimit } as MsgSetEraUnbondLimit;
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
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetEraUnbondLimit {
    const message = { ...baseMsgSetEraUnbondLimit } as MsgSetEraUnbondLimit;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Number(object.limit)
        : 0;
    return message;
  },

  toJSON(message: MsgSetEraUnbondLimit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetEraUnbondLimit>): MsgSetEraUnbondLimit {
    const message = { ...baseMsgSetEraUnbondLimit } as MsgSetEraUnbondLimit;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

const baseMsgSetEraUnbondLimitResponse: object = {};

export const MsgSetEraUnbondLimitResponse = {
  encode(
    _: MsgSetEraUnbondLimitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetEraUnbondLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetEraUnbondLimitResponse,
    } as MsgSetEraUnbondLimitResponse;
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

  fromJSON(_: any): MsgSetEraUnbondLimitResponse {
    const message = {
      ...baseMsgSetEraUnbondLimitResponse,
    } as MsgSetEraUnbondLimitResponse;
    return message;
  },

  toJSON(_: MsgSetEraUnbondLimitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetEraUnbondLimitResponse>
  ): MsgSetEraUnbondLimitResponse {
    const message = {
      ...baseMsgSetEraUnbondLimitResponse,
    } as MsgSetEraUnbondLimitResponse;
    return message;
  },
};

const baseMsgSetPoolDetail: object = {
  creator: "",
  denom: "",
  pool: "",
  subAccounts: "",
  threshold: 0,
};

export const MsgSetPoolDetail = {
  encode(
    message: MsgSetPoolDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }
    for (const v of message.subAccounts) {
      writer.uint32(34).string(v!);
    }
    if (message.threshold !== 0) {
      writer.uint32(40).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetPoolDetail } as MsgSetPoolDetail;
    message.subAccounts = [];
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
          message.pool = reader.string();
          break;
        case 4:
          message.subAccounts.push(reader.string());
          break;
        case 5:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetPoolDetail {
    const message = { ...baseMsgSetPoolDetail } as MsgSetPoolDetail;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.subAccounts = (object.subAccounts ?? []).map((e: any) => String(e));
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? Number(object.threshold)
        : 0;
    return message;
  },

  toJSON(message: MsgSetPoolDetail): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    if (message.subAccounts) {
      obj.subAccounts = message.subAccounts.map((e) => e);
    } else {
      obj.subAccounts = [];
    }
    message.threshold !== undefined && (obj.threshold = message.threshold);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetPoolDetail>): MsgSetPoolDetail {
    const message = { ...baseMsgSetPoolDetail } as MsgSetPoolDetail;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.subAccounts = (object.subAccounts ?? []).map((e) => e);
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

const baseMsgSetPoolDetailResponse: object = {};

export const MsgSetPoolDetailResponse = {
  encode(
    _: MsgSetPoolDetailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetPoolDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetPoolDetailResponse,
    } as MsgSetPoolDetailResponse;
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

  fromJSON(_: any): MsgSetPoolDetailResponse {
    const message = {
      ...baseMsgSetPoolDetailResponse,
    } as MsgSetPoolDetailResponse;
    return message;
  },

  toJSON(_: MsgSetPoolDetailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetPoolDetailResponse>
  ): MsgSetPoolDetailResponse {
    const message = {
      ...baseMsgSetPoolDetailResponse,
    } as MsgSetPoolDetailResponse;
    return message;
  },
};

const baseMsgSetLeastBond: object = { creator: "", denom: "", leastBond: "" };

export const MsgSetLeastBond = {
  encode(
    message: MsgSetLeastBond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.leastBond !== "") {
      writer.uint32(26).string(message.leastBond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLeastBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetLeastBond } as MsgSetLeastBond;
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
          message.leastBond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetLeastBond {
    const message = { ...baseMsgSetLeastBond } as MsgSetLeastBond;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.leastBond =
      object.leastBond !== undefined && object.leastBond !== null
        ? String(object.leastBond)
        : "";
    return message;
  },

  toJSON(message: MsgSetLeastBond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.leastBond !== undefined && (obj.leastBond = message.leastBond);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetLeastBond>): MsgSetLeastBond {
    const message = { ...baseMsgSetLeastBond } as MsgSetLeastBond;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.leastBond = object.leastBond ?? "";
    return message;
  },
};

const baseMsgSetLeastBondResponse: object = {};

export const MsgSetLeastBondResponse = {
  encode(
    _: MsgSetLeastBondResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetLeastBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetLeastBondResponse,
    } as MsgSetLeastBondResponse;
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

  fromJSON(_: any): MsgSetLeastBondResponse {
    const message = {
      ...baseMsgSetLeastBondResponse,
    } as MsgSetLeastBondResponse;
    return message;
  },

  toJSON(_: MsgSetLeastBondResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetLeastBondResponse>
  ): MsgSetLeastBondResponse {
    const message = {
      ...baseMsgSetLeastBondResponse,
    } as MsgSetLeastBondResponse;
    return message;
  },
};

const baseMsgClearCurrentEraSnapShots: object = { creator: "", denom: "" };

export const MsgClearCurrentEraSnapShots = {
  encode(
    message: MsgClearCurrentEraSnapShots,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClearCurrentEraSnapShots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClearCurrentEraSnapShots,
    } as MsgClearCurrentEraSnapShots;
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

  fromJSON(object: any): MsgClearCurrentEraSnapShots {
    const message = {
      ...baseMsgClearCurrentEraSnapShots,
    } as MsgClearCurrentEraSnapShots;
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

  toJSON(message: MsgClearCurrentEraSnapShots): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClearCurrentEraSnapShots>
  ): MsgClearCurrentEraSnapShots {
    const message = {
      ...baseMsgClearCurrentEraSnapShots,
    } as MsgClearCurrentEraSnapShots;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgClearCurrentEraSnapShotsResponse: object = {};

export const MsgClearCurrentEraSnapShotsResponse = {
  encode(
    _: MsgClearCurrentEraSnapShotsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClearCurrentEraSnapShotsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClearCurrentEraSnapShotsResponse,
    } as MsgClearCurrentEraSnapShotsResponse;
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

  fromJSON(_: any): MsgClearCurrentEraSnapShotsResponse {
    const message = {
      ...baseMsgClearCurrentEraSnapShotsResponse,
    } as MsgClearCurrentEraSnapShotsResponse;
    return message;
  },

  toJSON(_: MsgClearCurrentEraSnapShotsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClearCurrentEraSnapShotsResponse>
  ): MsgClearCurrentEraSnapShotsResponse {
    const message = {
      ...baseMsgClearCurrentEraSnapShotsResponse,
    } as MsgClearCurrentEraSnapShotsResponse;
    return message;
  },
};

const baseMsgSetStakingRewardCommission: object = {
  creator: "",
  denom: "",
  commission: "",
};

export const MsgSetStakingRewardCommission = {
  encode(
    message: MsgSetStakingRewardCommission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakingRewardCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStakingRewardCommission,
    } as MsgSetStakingRewardCommission;
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
          message.commission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStakingRewardCommission {
    const message = {
      ...baseMsgSetStakingRewardCommission,
    } as MsgSetStakingRewardCommission;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? String(object.commission)
        : "";
    return message;
  },

  toJSON(message: MsgSetStakingRewardCommission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.commission !== undefined && (obj.commission = message.commission);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStakingRewardCommission>
  ): MsgSetStakingRewardCommission {
    const message = {
      ...baseMsgSetStakingRewardCommission,
    } as MsgSetStakingRewardCommission;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
};

const baseMsgSetStakingRewardCommissionResponse: object = {};

export const MsgSetStakingRewardCommissionResponse = {
  encode(
    _: MsgSetStakingRewardCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakingRewardCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStakingRewardCommissionResponse,
    } as MsgSetStakingRewardCommissionResponse;
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

  fromJSON(_: any): MsgSetStakingRewardCommissionResponse {
    const message = {
      ...baseMsgSetStakingRewardCommissionResponse,
    } as MsgSetStakingRewardCommissionResponse;
    return message;
  },

  toJSON(_: MsgSetStakingRewardCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStakingRewardCommissionResponse>
  ): MsgSetStakingRewardCommissionResponse {
    const message = {
      ...baseMsgSetStakingRewardCommissionResponse,
    } as MsgSetStakingRewardCommissionResponse;
    return message;
  },
};

const baseMsgSetProtocolFeeReceiver: object = { creator: "", receiver: "" };

export const MsgSetProtocolFeeReceiver = {
  encode(
    message: MsgSetProtocolFeeReceiver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetProtocolFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetProtocolFeeReceiver,
    } as MsgSetProtocolFeeReceiver;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetProtocolFeeReceiver {
    const message = {
      ...baseMsgSetProtocolFeeReceiver,
    } as MsgSetProtocolFeeReceiver;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: MsgSetProtocolFeeReceiver): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetProtocolFeeReceiver>
  ): MsgSetProtocolFeeReceiver {
    const message = {
      ...baseMsgSetProtocolFeeReceiver,
    } as MsgSetProtocolFeeReceiver;
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseMsgSetProtocolFeeReceiverResponse: object = {};

export const MsgSetProtocolFeeReceiverResponse = {
  encode(
    _: MsgSetProtocolFeeReceiverResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetProtocolFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetProtocolFeeReceiverResponse,
    } as MsgSetProtocolFeeReceiverResponse;
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

  fromJSON(_: any): MsgSetProtocolFeeReceiverResponse {
    const message = {
      ...baseMsgSetProtocolFeeReceiverResponse,
    } as MsgSetProtocolFeeReceiverResponse;
    return message;
  },

  toJSON(_: MsgSetProtocolFeeReceiverResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetProtocolFeeReceiverResponse>
  ): MsgSetProtocolFeeReceiverResponse {
    const message = {
      ...baseMsgSetProtocolFeeReceiverResponse,
    } as MsgSetProtocolFeeReceiverResponse;
    return message;
  },
};

const baseMsgSetUnbondRelayFee: object = { creator: "", denom: "", value: "" };

export const MsgSetUnbondRelayFee = {
  encode(
    message: MsgSetUnbondRelayFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUnbondRelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetUnbondRelayFee } as MsgSetUnbondRelayFee;
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
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUnbondRelayFee {
    const message = { ...baseMsgSetUnbondRelayFee } as MsgSetUnbondRelayFee;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: MsgSetUnbondRelayFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetUnbondRelayFee>): MsgSetUnbondRelayFee {
    const message = { ...baseMsgSetUnbondRelayFee } as MsgSetUnbondRelayFee;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseMsgSetUnbondRelayFeeResponse: object = {};

export const MsgSetUnbondRelayFeeResponse = {
  encode(
    _: MsgSetUnbondRelayFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUnbondRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetUnbondRelayFeeResponse,
    } as MsgSetUnbondRelayFeeResponse;
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

  fromJSON(_: any): MsgSetUnbondRelayFeeResponse {
    const message = {
      ...baseMsgSetUnbondRelayFeeResponse,
    } as MsgSetUnbondRelayFeeResponse;
    return message;
  },

  toJSON(_: MsgSetUnbondRelayFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetUnbondRelayFeeResponse>
  ): MsgSetUnbondRelayFeeResponse {
    const message = {
      ...baseMsgSetUnbondRelayFeeResponse,
    } as MsgSetUnbondRelayFeeResponse;
    return message;
  },
};

const baseMsgLiquidityUnbond: object = { creator: "", pool: "", recipient: "" };

export const MsgLiquidityUnbond = {
  encode(
    message: MsgLiquidityUnbond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidityUnbond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidityUnbond } as MsgLiquidityUnbond;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pool = reader.string();
          break;
        case 3:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidityUnbond {
    const message = { ...baseMsgLiquidityUnbond } as MsgLiquidityUnbond;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    return message;
  },

  toJSON(message: MsgLiquidityUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pool !== undefined && (obj.pool = message.pool);
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidityUnbond>): MsgLiquidityUnbond {
    const message = { ...baseMsgLiquidityUnbond } as MsgLiquidityUnbond;
    message.creator = object.creator ?? "";
    message.pool = object.pool ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

const baseMsgLiquidityUnbondResponse: object = {};

export const MsgLiquidityUnbondResponse = {
  encode(
    _: MsgLiquidityUnbondResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidityUnbondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidityUnbondResponse,
    } as MsgLiquidityUnbondResponse;
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

  fromJSON(_: any): MsgLiquidityUnbondResponse {
    const message = {
      ...baseMsgLiquidityUnbondResponse,
    } as MsgLiquidityUnbondResponse;
    return message;
  },

  toJSON(_: MsgLiquidityUnbondResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidityUnbondResponse>
  ): MsgLiquidityUnbondResponse {
    const message = {
      ...baseMsgLiquidityUnbondResponse,
    } as MsgLiquidityUnbondResponse;
    return message;
  },
};

const baseMsgSetUnbondCommission: object = {
  creator: "",
  denom: "",
  commission: "",
};

export const MsgSetUnbondCommission = {
  encode(
    message: MsgSetUnbondCommission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUnbondCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetUnbondCommission } as MsgSetUnbondCommission;
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
          message.commission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUnbondCommission {
    const message = { ...baseMsgSetUnbondCommission } as MsgSetUnbondCommission;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? String(object.commission)
        : "";
    return message;
  },

  toJSON(message: MsgSetUnbondCommission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.commission !== undefined && (obj.commission = message.commission);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetUnbondCommission>
  ): MsgSetUnbondCommission {
    const message = { ...baseMsgSetUnbondCommission } as MsgSetUnbondCommission;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
};

const baseMsgSetUnbondCommissionResponse: object = {};

export const MsgSetUnbondCommissionResponse = {
  encode(
    _: MsgSetUnbondCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUnbondCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetUnbondCommissionResponse,
    } as MsgSetUnbondCommissionResponse;
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

  fromJSON(_: any): MsgSetUnbondCommissionResponse {
    const message = {
      ...baseMsgSetUnbondCommissionResponse,
    } as MsgSetUnbondCommissionResponse;
    return message;
  },

  toJSON(_: MsgSetUnbondCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetUnbondCommissionResponse>
  ): MsgSetUnbondCommissionResponse {
    const message = {
      ...baseMsgSetUnbondCommissionResponse,
    } as MsgSetUnbondCommissionResponse;
    return message;
  },
};

const baseMsgSubmitSignature: object = {
  creator: "",
  denom: "",
  era: 0,
  pool: "",
  txType: 0,
  propId: "",
  signature: "",
};

export const MsgSubmitSignature = {
  encode(
    message: MsgSubmitSignature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era);
    }
    if (message.pool !== "") {
      writer.uint32(34).string(message.pool);
    }
    if (message.txType !== 0) {
      writer.uint32(40).int32(message.txType);
    }
    if (message.propId !== "") {
      writer.uint32(50).string(message.propId);
    }
    if (message.signature !== "") {
      writer.uint32(58).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitSignature } as MsgSubmitSignature;
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
          message.era = reader.uint32();
          break;
        case 4:
          message.pool = reader.string();
          break;
        case 5:
          message.txType = reader.int32() as any;
          break;
        case 6:
          message.propId = reader.string();
          break;
        case 7:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitSignature {
    const message = { ...baseMsgSubmitSignature } as MsgSubmitSignature;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.txType =
      object.txType !== undefined && object.txType !== null
        ? originalTxTypeFromJSON(object.txType)
        : 0;
    message.propId =
      object.propId !== undefined && object.propId !== null
        ? String(object.propId)
        : "";
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? String(object.signature)
        : "";
    return message;
  },

  toJSON(message: MsgSubmitSignature): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.pool !== undefined && (obj.pool = message.pool);
    message.txType !== undefined &&
      (obj.txType = originalTxTypeToJSON(message.txType));
    message.propId !== undefined && (obj.propId = message.propId);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitSignature>): MsgSubmitSignature {
    const message = { ...baseMsgSubmitSignature } as MsgSubmitSignature;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

const baseMsgSubmitSignatureResponse: object = {};

export const MsgSubmitSignatureResponse = {
  encode(
    _: MsgSubmitSignatureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitSignatureResponse,
    } as MsgSubmitSignatureResponse;
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

  fromJSON(_: any): MsgSubmitSignatureResponse {
    const message = {
      ...baseMsgSubmitSignatureResponse,
    } as MsgSubmitSignatureResponse;
    return message;
  },

  toJSON(_: MsgSubmitSignatureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSubmitSignatureResponse>
  ): MsgSubmitSignatureResponse {
    const message = {
      ...baseMsgSubmitSignatureResponse,
    } as MsgSubmitSignatureResponse;
    return message;
  },
};

const baseMsgSetRParams: object = {
  creator: "",
  denom: "",
  gasPrice: "",
  eraSeconds: 0,
  offset: 0,
  bondingDuration: 0,
  leastBond: "",
  validators: "",
};

export const MsgSetRParams = {
  encode(
    message: MsgSetRParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    if (message.eraSeconds !== 0) {
      writer.uint32(32).uint32(message.eraSeconds);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int32(message.offset);
    }
    if (message.bondingDuration !== 0) {
      writer.uint32(48).uint32(message.bondingDuration);
    }
    if (message.leastBond !== "") {
      writer.uint32(58).string(message.leastBond);
    }
    for (const v of message.validators) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRParams } as MsgSetRParams;
    message.validators = [];
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
          message.gasPrice = reader.string();
          break;
        case 4:
          message.eraSeconds = reader.uint32();
          break;
        case 5:
          message.offset = reader.int32();
          break;
        case 6:
          message.bondingDuration = reader.uint32();
          break;
        case 7:
          message.leastBond = reader.string();
          break;
        case 8:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRParams {
    const message = { ...baseMsgSetRParams } as MsgSetRParams;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? String(object.gasPrice)
        : "";
    message.eraSeconds =
      object.eraSeconds !== undefined && object.eraSeconds !== null
        ? Number(object.eraSeconds)
        : 0;
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Number(object.offset)
        : 0;
    message.bondingDuration =
      object.bondingDuration !== undefined && object.bondingDuration !== null
        ? Number(object.bondingDuration)
        : 0;
    message.leastBond =
      object.leastBond !== undefined && object.leastBond !== null
        ? String(object.leastBond)
        : "";
    message.validators = (object.validators ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgSetRParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.eraSeconds !== undefined && (obj.eraSeconds = message.eraSeconds);
    message.offset !== undefined && (obj.offset = message.offset);
    message.bondingDuration !== undefined &&
      (obj.bondingDuration = message.bondingDuration);
    message.leastBond !== undefined && (obj.leastBond = message.leastBond);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetRParams>): MsgSetRParams {
    const message = { ...baseMsgSetRParams } as MsgSetRParams;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.gasPrice = object.gasPrice ?? "";
    message.eraSeconds = object.eraSeconds ?? 0;
    message.offset = object.offset ?? 0;
    message.bondingDuration = object.bondingDuration ?? 0;
    message.leastBond = object.leastBond ?? "";
    message.validators = (object.validators ?? []).map((e) => e);
    return message;
  },
};

const baseMsgSetRParamsResponse: object = {};

export const MsgSetRParamsResponse = {
  encode(
    _: MsgSetRParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRParamsResponse } as MsgSetRParamsResponse;
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

  fromJSON(_: any): MsgSetRParamsResponse {
    const message = { ...baseMsgSetRParamsResponse } as MsgSetRParamsResponse;
    return message;
  },

  toJSON(_: MsgSetRParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetRParamsResponse>): MsgSetRParamsResponse {
    const message = { ...baseMsgSetRParamsResponse } as MsgSetRParamsResponse;
    return message;
  },
};

const baseMsgSetRelayFeeReceiver: object = {
  creator: "",
  denom: "",
  receiver: "",
};

export const MsgSetRelayFeeReceiver = {
  encode(
    message: MsgSetRelayFeeReceiver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
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
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRelayFeeReceiver {
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: MsgSetRelayFeeReceiver): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetRelayFeeReceiver>
  ): MsgSetRelayFeeReceiver {
    const message = { ...baseMsgSetRelayFeeReceiver } as MsgSetRelayFeeReceiver;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

const baseMsgSetRelayFeeReceiverResponse: object = {};

export const MsgSetRelayFeeReceiverResponse = {
  encode(
    _: MsgSetRelayFeeReceiverResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
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

  fromJSON(_: any): MsgSetRelayFeeReceiverResponse {
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
    return message;
  },

  toJSON(_: MsgSetRelayFeeReceiverResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetRelayFeeReceiverResponse>
  ): MsgSetRelayFeeReceiverResponse {
    const message = {
      ...baseMsgSetRelayFeeReceiverResponse,
    } as MsgSetRelayFeeReceiverResponse;
    return message;
  },
};

const baseMsgSetRelayGasPrice: object = {
  creator: "",
  denom: "",
  gasPrice: "",
};

export const MsgSetRelayGasPrice = {
  encode(
    message: MsgSetRelayGasPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayGasPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRelayGasPrice } as MsgSetRelayGasPrice;
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
          message.gasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRelayGasPrice {
    const message = { ...baseMsgSetRelayGasPrice } as MsgSetRelayGasPrice;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? String(object.gasPrice)
        : "";
    return message;
  },

  toJSON(message: MsgSetRelayGasPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetRelayGasPrice>): MsgSetRelayGasPrice {
    const message = { ...baseMsgSetRelayGasPrice } as MsgSetRelayGasPrice;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.gasPrice = object.gasPrice ?? "";
    return message;
  },
};

const baseMsgSetRelayGasPriceResponse: object = {};

export const MsgSetRelayGasPriceResponse = {
  encode(
    _: MsgSetRelayGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRelayGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetRelayGasPriceResponse,
    } as MsgSetRelayGasPriceResponse;
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

  fromJSON(_: any): MsgSetRelayGasPriceResponse {
    const message = {
      ...baseMsgSetRelayGasPriceResponse,
    } as MsgSetRelayGasPriceResponse;
    return message;
  },

  toJSON(_: MsgSetRelayGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetRelayGasPriceResponse>
  ): MsgSetRelayGasPriceResponse {
    const message = {
      ...baseMsgSetRelayGasPriceResponse,
    } as MsgSetRelayGasPriceResponse;
    return message;
  },
};

const baseMsgSetEraSeconds: object = {
  creator: "",
  denom: "",
  eraSeconds: 0,
  bondingDuration: 0,
  offset: 0,
};

export const MsgSetEraSeconds = {
  encode(
    message: MsgSetEraSeconds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.eraSeconds !== 0) {
      writer.uint32(24).uint32(message.eraSeconds);
    }
    if (message.bondingDuration !== 0) {
      writer.uint32(32).uint32(message.bondingDuration);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetEraSeconds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetEraSeconds } as MsgSetEraSeconds;
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
          message.eraSeconds = reader.uint32();
          break;
        case 4:
          message.bondingDuration = reader.uint32();
          break;
        case 5:
          message.offset = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetEraSeconds {
    const message = { ...baseMsgSetEraSeconds } as MsgSetEraSeconds;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.eraSeconds =
      object.eraSeconds !== undefined && object.eraSeconds !== null
        ? Number(object.eraSeconds)
        : 0;
    message.bondingDuration =
      object.bondingDuration !== undefined && object.bondingDuration !== null
        ? Number(object.bondingDuration)
        : 0;
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Number(object.offset)
        : 0;
    return message;
  },

  toJSON(message: MsgSetEraSeconds): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.eraSeconds !== undefined && (obj.eraSeconds = message.eraSeconds);
    message.bondingDuration !== undefined &&
      (obj.bondingDuration = message.bondingDuration);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetEraSeconds>): MsgSetEraSeconds {
    const message = { ...baseMsgSetEraSeconds } as MsgSetEraSeconds;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.eraSeconds = object.eraSeconds ?? 0;
    message.bondingDuration = object.bondingDuration ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

const baseMsgSetEraSecondsResponse: object = {};

export const MsgSetEraSecondsResponse = {
  encode(
    _: MsgSetEraSecondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetEraSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetEraSecondsResponse,
    } as MsgSetEraSecondsResponse;
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

  fromJSON(_: any): MsgSetEraSecondsResponse {
    const message = {
      ...baseMsgSetEraSecondsResponse,
    } as MsgSetEraSecondsResponse;
    return message;
  },

  toJSON(_: MsgSetEraSecondsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetEraSecondsResponse>
  ): MsgSetEraSecondsResponse {
    const message = {
      ...baseMsgSetEraSecondsResponse,
    } as MsgSetEraSecondsResponse;
    return message;
  },
};

const baseMsgRmBondedPool: object = { creator: "", denom: "", address: "" };

export const MsgRmBondedPool = {
  encode(
    message: MsgRmBondedPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmBondedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRmBondedPool } as MsgRmBondedPool;
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRmBondedPool {
    const message = { ...baseMsgRmBondedPool } as MsgRmBondedPool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: MsgRmBondedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRmBondedPool>): MsgRmBondedPool {
    const message = { ...baseMsgRmBondedPool } as MsgRmBondedPool;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseMsgRmBondedPoolResponse: object = {};

export const MsgRmBondedPoolResponse = {
  encode(
    _: MsgRmBondedPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRmBondedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRmBondedPoolResponse,
    } as MsgRmBondedPoolResponse;
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

  fromJSON(_: any): MsgRmBondedPoolResponse {
    const message = {
      ...baseMsgRmBondedPoolResponse,
    } as MsgRmBondedPoolResponse;
    return message;
  },

  toJSON(_: MsgRmBondedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRmBondedPoolResponse>
  ): MsgRmBondedPoolResponse {
    const message = {
      ...baseMsgRmBondedPoolResponse,
    } as MsgRmBondedPoolResponse;
    return message;
  },
};

const baseMsgMigrateInit: object = {
  creator: "",
  denom: "",
  pool: "",
  totalSupply: "",
  active: "",
  bond: "",
  unbond: "",
  exchangeRate: "",
  totalProtocolFee: "",
};

export const MsgMigrateInit = {
  encode(
    message: MsgMigrateInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }
    if (message.totalSupply !== "") {
      writer.uint32(34).string(message.totalSupply);
    }
    if (message.active !== "") {
      writer.uint32(42).string(message.active);
    }
    if (message.bond !== "") {
      writer.uint32(50).string(message.bond);
    }
    if (message.unbond !== "") {
      writer.uint32(58).string(message.unbond);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(66).string(message.exchangeRate);
    }
    if (message.totalProtocolFee !== "") {
      writer.uint32(74).string(message.totalProtocolFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateInit } as MsgMigrateInit;
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
          message.pool = reader.string();
          break;
        case 4:
          message.totalSupply = reader.string();
          break;
        case 5:
          message.active = reader.string();
          break;
        case 6:
          message.bond = reader.string();
          break;
        case 7:
          message.unbond = reader.string();
          break;
        case 8:
          message.exchangeRate = reader.string();
          break;
        case 9:
          message.totalProtocolFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateInit {
    const message = { ...baseMsgMigrateInit } as MsgMigrateInit;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.totalSupply =
      object.totalSupply !== undefined && object.totalSupply !== null
        ? String(object.totalSupply)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? String(object.active)
        : "";
    message.bond =
      object.bond !== undefined && object.bond !== null
        ? String(object.bond)
        : "";
    message.unbond =
      object.unbond !== undefined && object.unbond !== null
        ? String(object.unbond)
        : "";
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null
        ? String(object.exchangeRate)
        : "";
    message.totalProtocolFee =
      object.totalProtocolFee !== undefined && object.totalProtocolFee !== null
        ? String(object.totalProtocolFee)
        : "";
    return message;
  },

  toJSON(message: MsgMigrateInit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    message.active !== undefined && (obj.active = message.active);
    message.bond !== undefined && (obj.bond = message.bond);
    message.unbond !== undefined && (obj.unbond = message.unbond);
    message.exchangeRate !== undefined &&
      (obj.exchangeRate = message.exchangeRate);
    message.totalProtocolFee !== undefined &&
      (obj.totalProtocolFee = message.totalProtocolFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMigrateInit>): MsgMigrateInit {
    const message = { ...baseMsgMigrateInit } as MsgMigrateInit;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.totalSupply = object.totalSupply ?? "";
    message.active = object.active ?? "";
    message.bond = object.bond ?? "";
    message.unbond = object.unbond ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    message.totalProtocolFee = object.totalProtocolFee ?? "";
    return message;
  },
};

const baseMsgMigrateInitResponse: object = {};

export const MsgMigrateInitResponse = {
  encode(
    _: MsgMigrateInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMigrateInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateInitResponse } as MsgMigrateInitResponse;
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

  fromJSON(_: any): MsgMigrateInitResponse {
    const message = { ...baseMsgMigrateInitResponse } as MsgMigrateInitResponse;
    return message;
  },

  toJSON(_: MsgMigrateInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMigrateInitResponse>): MsgMigrateInitResponse {
    const message = { ...baseMsgMigrateInitResponse } as MsgMigrateInitResponse;
    return message;
  },
};

const baseMsgMigrateUnbondings: object = {
  creator: "",
  denom: "",
  pool: "",
  era: 0,
};

export const MsgMigrateUnbondings = {
  encode(
    message: MsgMigrateUnbondings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }
    if (message.era !== 0) {
      writer.uint32(32).uint32(message.era);
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMigrateUnbondings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateUnbondings } as MsgMigrateUnbondings;
    message.unbondings = [];
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
          message.pool = reader.string();
          break;
        case 4:
          message.era = reader.uint32();
          break;
        case 5:
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateUnbondings {
    const message = { ...baseMsgMigrateUnbondings } as MsgMigrateUnbondings;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    message.unbondings = (object.unbondings ?? []).map((e: any) =>
      Unbonding.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgMigrateUnbondings): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.era !== undefined && (obj.era = message.era);
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) =>
        e ? Unbonding.toJSON(e) : undefined
      );
    } else {
      obj.unbondings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMigrateUnbondings>): MsgMigrateUnbondings {
    const message = { ...baseMsgMigrateUnbondings } as MsgMigrateUnbondings;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.era = object.era ?? 0;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      Unbonding.fromPartial(e)
    );
    return message;
  },
};

const baseMsgMigrateUnbondingsResponse: object = {};

export const MsgMigrateUnbondingsResponse = {
  encode(
    _: MsgMigrateUnbondingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMigrateUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMigrateUnbondingsResponse,
    } as MsgMigrateUnbondingsResponse;
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

  fromJSON(_: any): MsgMigrateUnbondingsResponse {
    const message = {
      ...baseMsgMigrateUnbondingsResponse,
    } as MsgMigrateUnbondingsResponse;
    return message;
  },

  toJSON(_: MsgMigrateUnbondingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMigrateUnbondingsResponse>
  ): MsgMigrateUnbondingsResponse {
    const message = {
      ...baseMsgMigrateUnbondingsResponse,
    } as MsgMigrateUnbondingsResponse;
    return message;
  },
};

const baseMsgToggleUnbondSwitch: object = { creator: "", denom: "" };

export const MsgToggleUnbondSwitch = {
  encode(
    message: MsgToggleUnbondSwitch,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleUnbondSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgToggleUnbondSwitch } as MsgToggleUnbondSwitch;
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

  fromJSON(object: any): MsgToggleUnbondSwitch {
    const message = { ...baseMsgToggleUnbondSwitch } as MsgToggleUnbondSwitch;
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

  toJSON(message: MsgToggleUnbondSwitch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgToggleUnbondSwitch>
  ): MsgToggleUnbondSwitch {
    const message = { ...baseMsgToggleUnbondSwitch } as MsgToggleUnbondSwitch;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgToggleUnbondSwitchResponse: object = {};

export const MsgToggleUnbondSwitchResponse = {
  encode(
    _: MsgToggleUnbondSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgToggleUnbondSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleUnbondSwitchResponse,
    } as MsgToggleUnbondSwitchResponse;
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

  fromJSON(_: any): MsgToggleUnbondSwitchResponse {
    const message = {
      ...baseMsgToggleUnbondSwitchResponse,
    } as MsgToggleUnbondSwitchResponse;
    return message;
  },

  toJSON(_: MsgToggleUnbondSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgToggleUnbondSwitchResponse>
  ): MsgToggleUnbondSwitchResponse {
    const message = {
      ...baseMsgToggleUnbondSwitchResponse,
    } as MsgToggleUnbondSwitchResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetEraUnbondLimit(
    request: MsgSetEraUnbondLimit
  ): Promise<MsgSetEraUnbondLimitResponse>;
  SetPoolDetail(request: MsgSetPoolDetail): Promise<MsgSetPoolDetailResponse>;
  SetLeastBond(request: MsgSetLeastBond): Promise<MsgSetLeastBondResponse>;
  ClearCurrentEraSnapShots(
    request: MsgClearCurrentEraSnapShots
  ): Promise<MsgClearCurrentEraSnapShotsResponse>;
  SetStakingRewardCommission(
    request: MsgSetStakingRewardCommission
  ): Promise<MsgSetStakingRewardCommissionResponse>;
  SetProtocolFeeReceiver(
    request: MsgSetProtocolFeeReceiver
  ): Promise<MsgSetProtocolFeeReceiverResponse>;
  SetUnbondRelayFee(
    request: MsgSetUnbondRelayFee
  ): Promise<MsgSetUnbondRelayFeeResponse>;
  LiquidityUnbond(
    request: MsgLiquidityUnbond
  ): Promise<MsgLiquidityUnbondResponse>;
  SetUnbondCommission(
    request: MsgSetUnbondCommission
  ): Promise<MsgSetUnbondCommissionResponse>;
  SubmitSignature(
    request: MsgSubmitSignature
  ): Promise<MsgSubmitSignatureResponse>;
  SetRParams(request: MsgSetRParams): Promise<MsgSetRParamsResponse>;
  SetRelayFeeReceiver(
    request: MsgSetRelayFeeReceiver
  ): Promise<MsgSetRelayFeeReceiverResponse>;
  SetRelayGasPrice(
    request: MsgSetRelayGasPrice
  ): Promise<MsgSetRelayGasPriceResponse>;
  SetEraSeconds(request: MsgSetEraSeconds): Promise<MsgSetEraSecondsResponse>;
  RmBondedPool(request: MsgRmBondedPool): Promise<MsgRmBondedPoolResponse>;
  MigrateInit(request: MsgMigrateInit): Promise<MsgMigrateInitResponse>;
  MigrateUnbondings(
    request: MsgMigrateUnbondings
  ): Promise<MsgMigrateUnbondingsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ToggleUnbondSwitch(
    request: MsgToggleUnbondSwitch
  ): Promise<MsgToggleUnbondSwitchResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetEraUnbondLimit = this.SetEraUnbondLimit.bind(this);
    this.SetPoolDetail = this.SetPoolDetail.bind(this);
    this.SetLeastBond = this.SetLeastBond.bind(this);
    this.ClearCurrentEraSnapShots = this.ClearCurrentEraSnapShots.bind(this);
    this.SetStakingRewardCommission =
      this.SetStakingRewardCommission.bind(this);
    this.SetProtocolFeeReceiver = this.SetProtocolFeeReceiver.bind(this);
    this.SetUnbondRelayFee = this.SetUnbondRelayFee.bind(this);
    this.LiquidityUnbond = this.LiquidityUnbond.bind(this);
    this.SetUnbondCommission = this.SetUnbondCommission.bind(this);
    this.SubmitSignature = this.SubmitSignature.bind(this);
    this.SetRParams = this.SetRParams.bind(this);
    this.SetRelayFeeReceiver = this.SetRelayFeeReceiver.bind(this);
    this.SetRelayGasPrice = this.SetRelayGasPrice.bind(this);
    this.SetEraSeconds = this.SetEraSeconds.bind(this);
    this.RmBondedPool = this.RmBondedPool.bind(this);
    this.MigrateInit = this.MigrateInit.bind(this);
    this.MigrateUnbondings = this.MigrateUnbondings.bind(this);
    this.ToggleUnbondSwitch = this.ToggleUnbondSwitch.bind(this);
  }
  SetEraUnbondLimit(
    request: MsgSetEraUnbondLimit
  ): Promise<MsgSetEraUnbondLimitResponse> {
    const data = MsgSetEraUnbondLimit.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetEraUnbondLimit",
      data
    );
    return promise.then((data) =>
      MsgSetEraUnbondLimitResponse.decode(new _m0.Reader(data))
    );
  }

  SetPoolDetail(request: MsgSetPoolDetail): Promise<MsgSetPoolDetailResponse> {
    const data = MsgSetPoolDetail.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetPoolDetail",
      data
    );
    return promise.then((data) =>
      MsgSetPoolDetailResponse.decode(new _m0.Reader(data))
    );
  }

  SetLeastBond(request: MsgSetLeastBond): Promise<MsgSetLeastBondResponse> {
    const data = MsgSetLeastBond.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetLeastBond",
      data
    );
    return promise.then((data) =>
      MsgSetLeastBondResponse.decode(new _m0.Reader(data))
    );
  }

  ClearCurrentEraSnapShots(
    request: MsgClearCurrentEraSnapShots
  ): Promise<MsgClearCurrentEraSnapShotsResponse> {
    const data = MsgClearCurrentEraSnapShots.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "ClearCurrentEraSnapShots",
      data
    );
    return promise.then((data) =>
      MsgClearCurrentEraSnapShotsResponse.decode(new _m0.Reader(data))
    );
  }

  SetStakingRewardCommission(
    request: MsgSetStakingRewardCommission
  ): Promise<MsgSetStakingRewardCommissionResponse> {
    const data = MsgSetStakingRewardCommission.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetStakingRewardCommission",
      data
    );
    return promise.then((data) =>
      MsgSetStakingRewardCommissionResponse.decode(new _m0.Reader(data))
    );
  }

  SetProtocolFeeReceiver(
    request: MsgSetProtocolFeeReceiver
  ): Promise<MsgSetProtocolFeeReceiverResponse> {
    const data = MsgSetProtocolFeeReceiver.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetProtocolFeeReceiver",
      data
    );
    return promise.then((data) =>
      MsgSetProtocolFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  SetUnbondRelayFee(
    request: MsgSetUnbondRelayFee
  ): Promise<MsgSetUnbondRelayFeeResponse> {
    const data = MsgSetUnbondRelayFee.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetUnbondRelayFee",
      data
    );
    return promise.then((data) =>
      MsgSetUnbondRelayFeeResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidityUnbond(
    request: MsgLiquidityUnbond
  ): Promise<MsgLiquidityUnbondResponse> {
    const data = MsgLiquidityUnbond.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "LiquidityUnbond",
      data
    );
    return promise.then((data) =>
      MsgLiquidityUnbondResponse.decode(new _m0.Reader(data))
    );
  }

  SetUnbondCommission(
    request: MsgSetUnbondCommission
  ): Promise<MsgSetUnbondCommissionResponse> {
    const data = MsgSetUnbondCommission.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetUnbondCommission",
      data
    );
    return promise.then((data) =>
      MsgSetUnbondCommissionResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitSignature(
    request: MsgSubmitSignature
  ): Promise<MsgSubmitSignatureResponse> {
    const data = MsgSubmitSignature.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SubmitSignature",
      data
    );
    return promise.then((data) =>
      MsgSubmitSignatureResponse.decode(new _m0.Reader(data))
    );
  }

  SetRParams(request: MsgSetRParams): Promise<MsgSetRParamsResponse> {
    const data = MsgSetRParams.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetRParams",
      data
    );
    return promise.then((data) =>
      MsgSetRParamsResponse.decode(new _m0.Reader(data))
    );
  }

  SetRelayFeeReceiver(
    request: MsgSetRelayFeeReceiver
  ): Promise<MsgSetRelayFeeReceiverResponse> {
    const data = MsgSetRelayFeeReceiver.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetRelayFeeReceiver",
      data
    );
    return promise.then((data) =>
      MsgSetRelayFeeReceiverResponse.decode(new _m0.Reader(data))
    );
  }

  SetRelayGasPrice(
    request: MsgSetRelayGasPrice
  ): Promise<MsgSetRelayGasPriceResponse> {
    const data = MsgSetRelayGasPrice.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetRelayGasPrice",
      data
    );
    return promise.then((data) =>
      MsgSetRelayGasPriceResponse.decode(new _m0.Reader(data))
    );
  }

  SetEraSeconds(request: MsgSetEraSeconds): Promise<MsgSetEraSecondsResponse> {
    const data = MsgSetEraSeconds.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "SetEraSeconds",
      data
    );
    return promise.then((data) =>
      MsgSetEraSecondsResponse.decode(new _m0.Reader(data))
    );
  }

  RmBondedPool(request: MsgRmBondedPool): Promise<MsgRmBondedPoolResponse> {
    const data = MsgRmBondedPool.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "RmBondedPool",
      data
    );
    return promise.then((data) =>
      MsgRmBondedPoolResponse.decode(new _m0.Reader(data))
    );
  }

  MigrateInit(request: MsgMigrateInit): Promise<MsgMigrateInitResponse> {
    const data = MsgMigrateInit.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "MigrateInit",
      data
    );
    return promise.then((data) =>
      MsgMigrateInitResponse.decode(new _m0.Reader(data))
    );
  }

  MigrateUnbondings(
    request: MsgMigrateUnbondings
  ): Promise<MsgMigrateUnbondingsResponse> {
    const data = MsgMigrateUnbondings.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "MigrateUnbondings",
      data
    );
    return promise.then((data) =>
      MsgMigrateUnbondingsResponse.decode(new _m0.Reader(data))
    );
  }

  ToggleUnbondSwitch(
    request: MsgToggleUnbondSwitch
  ): Promise<MsgToggleUnbondSwitchResponse> {
    const data = MsgToggleUnbondSwitch.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.ledger.Msg",
      "ToggleUnbondSwitch",
      data
    );
    return promise.then((data) =>
      MsgToggleUnbondSwitchResponse.decode(new _m0.Reader(data))
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

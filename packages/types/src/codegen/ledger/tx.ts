import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { OriginalTxType, OriginalTxTypeSDKType, Unbonding, UnbondingSDKType } from "./ledger";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface MsgSetEraUnbondLimit {
  creator: string;
  denom: string;
  limit: number;
}
export interface MsgSetEraUnbondLimitSDKType {
  creator: string;
  denom: string;
  limit: number;
}
export interface MsgSetEraUnbondLimitResponse {}
export interface MsgSetEraUnbondLimitResponseSDKType {}
export interface MsgSetPoolDetail {
  creator: string;
  denom: string;
  pool: string;
  subAccounts: string[];
  threshold: number;
}
export interface MsgSetPoolDetailSDKType {
  creator: string;
  denom: string;
  pool: string;
  subAccounts: string[];
  threshold: number;
}
export interface MsgSetPoolDetailResponse {}
export interface MsgSetPoolDetailResponseSDKType {}
export interface MsgSetLeastBond {
  creator: string;
  denom: string;
  leastBond: string;
}
export interface MsgSetLeastBondSDKType {
  creator: string;
  denom: string;
  leastBond: string;
}
export interface MsgSetLeastBondResponse {}
export interface MsgSetLeastBondResponseSDKType {}
export interface MsgClearCurrentEraSnapShots {
  creator: string;
  denom: string;
}
export interface MsgClearCurrentEraSnapShotsSDKType {
  creator: string;
  denom: string;
}
export interface MsgClearCurrentEraSnapShotsResponse {}
export interface MsgClearCurrentEraSnapShotsResponseSDKType {}
export interface MsgSetStakingRewardCommission {
  creator: string;
  denom: string;
  commission: string;
}
export interface MsgSetStakingRewardCommissionSDKType {
  creator: string;
  denom: string;
  commission: string;
}
export interface MsgSetStakingRewardCommissionResponse {}
export interface MsgSetStakingRewardCommissionResponseSDKType {}
export interface MsgSetProtocolFeeReceiver {
  creator: string;
  receiver: string;
}
export interface MsgSetProtocolFeeReceiverSDKType {
  creator: string;
  receiver: string;
}
export interface MsgSetProtocolFeeReceiverResponse {}
export interface MsgSetProtocolFeeReceiverResponseSDKType {}
export interface MsgSetUnbondRelayFee {
  creator: string;
  denom: string;
  value?: Coin;
}
export interface MsgSetUnbondRelayFeeSDKType {
  creator: string;
  denom: string;
  value?: CoinSDKType;
}
export interface MsgSetUnbondRelayFeeResponse {}
export interface MsgSetUnbondRelayFeeResponseSDKType {}
export interface MsgLiquidityUnbond {
  creator: string;
  pool: string;
  value?: Coin;
  recipient: string;
}
export interface MsgLiquidityUnbondSDKType {
  creator: string;
  pool: string;
  value?: CoinSDKType;
  recipient: string;
}
export interface MsgLiquidityUnbondResponse {}
export interface MsgLiquidityUnbondResponseSDKType {}
export interface MsgSetUnbondCommission {
  creator: string;
  denom: string;
  commission: string;
}
export interface MsgSetUnbondCommissionSDKType {
  creator: string;
  denom: string;
  commission: string;
}
export interface MsgSetUnbondCommissionResponse {}
export interface MsgSetUnbondCommissionResponseSDKType {}
export interface MsgSubmitSignature {
  creator: string;
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
  propId: string;
  signature: string;
}
export interface MsgSubmitSignatureSDKType {
  creator: string;
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxTypeSDKType;
  propId: string;
  signature: string;
}
export interface MsgSubmitSignatureResponse {}
export interface MsgSubmitSignatureResponseSDKType {}
export interface MsgSetRParams {
  creator: string;
  denom: string;
  gasPrice: string;
  eraSeconds: number;
  offset: number;
  bondingDuration: number;
  leastBond: string;
}
export interface MsgSetRParamsSDKType {
  creator: string;
  denom: string;
  gasPrice: string;
  eraSeconds: number;
  offset: number;
  bondingDuration: number;
  leastBond: string;
}
export interface MsgSetRParamsResponse {}
export interface MsgSetRParamsResponseSDKType {}
export interface MsgSetRelayFeeReceiver {
  creator: string;
  denom: string;
  receiver: string;
}
export interface MsgSetRelayFeeReceiverSDKType {
  creator: string;
  denom: string;
  receiver: string;
}
export interface MsgSetRelayFeeReceiverResponse {}
export interface MsgSetRelayFeeReceiverResponseSDKType {}
export interface MsgSetRelayGasPrice {
  creator: string;
  denom: string;
  gasPrice: string;
}
export interface MsgSetRelayGasPriceSDKType {
  creator: string;
  denom: string;
  gasPrice: string;
}
export interface MsgSetRelayGasPriceResponse {}
export interface MsgSetRelayGasPriceResponseSDKType {}
export interface MsgSetEraSeconds {
  creator: string;
  denom: string;
  eraSeconds: number;
  bondingDuration: number;
  offset: number;
}
export interface MsgSetEraSecondsSDKType {
  creator: string;
  denom: string;
  eraSeconds: number;
  bondingDuration: number;
  offset: number;
}
export interface MsgSetEraSecondsResponse {}
export interface MsgSetEraSecondsResponseSDKType {}
export interface MsgRmBondedPool {
  creator: string;
  denom: string;
  address: string;
}
export interface MsgRmBondedPoolSDKType {
  creator: string;
  denom: string;
  address: string;
}
export interface MsgRmBondedPoolResponse {}
export interface MsgRmBondedPoolResponseSDKType {}
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
export interface MsgMigrateInitSDKType {
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
export interface MsgMigrateInitResponseSDKType {}
export interface MsgMigrateUnbondings {
  creator: string;
  denom: string;
  pool: string;
  era: number;
  unbondings: Unbonding[];
}
export interface MsgMigrateUnbondingsSDKType {
  creator: string;
  denom: string;
  pool: string;
  era: number;
  unbondings: UnbondingSDKType[];
}
export interface MsgMigrateUnbondingsResponse {}
export interface MsgMigrateUnbondingsResponseSDKType {}
export interface MsgToggleUnbondSwitch {
  creator: string;
  denom: string;
}
export interface MsgToggleUnbondSwitchSDKType {
  creator: string;
  denom: string;
}
export interface MsgToggleUnbondSwitchResponse {}
export interface MsgToggleUnbondSwitchResponseSDKType {}
export interface MsgUnsealMigrateInit {
  creator: string;
}
export interface MsgUnsealMigrateInitSDKType {
  creator: string;
}
export interface MsgUnsealMigrateInitResponse {}
export interface MsgUnsealMigrateInitResponseSDKType {}
export interface MsgRegisterIcaPool {
  creator: string;
  denom: string;
  connectionId: string;
}
export interface MsgRegisterIcaPoolSDKType {
  creator: string;
  denom: string;
  connectionId: string;
}
export interface MsgRegisterIcaPoolResponse {}
export interface MsgRegisterIcaPoolResponseSDKType {}
export interface MsgSetWithdrawalAddr {
  creator: string;
  delegationAddr: string;
}
export interface MsgSetWithdrawalAddrSDKType {
  creator: string;
  delegationAddr: string;
}
export interface MsgSetWithdrawalAddrResponse {}
export interface MsgSetWithdrawalAddrResponseSDKType {}
export interface MsgInitPool {
  creator: string;
  denom: string;
  pool: string;
}
export interface MsgInitPoolSDKType {
  creator: string;
  denom: string;
  pool: string;
}
export interface MsgInitPoolResponse {}
export interface MsgInitPoolResponseSDKType {}

function createBaseMsgSetEraUnbondLimit(): MsgSetEraUnbondLimit {
  return {
    creator: "",
    denom: "",
    limit: 0
  };
}

export const MsgSetEraUnbondLimit = {
  encode(message: MsgSetEraUnbondLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetEraUnbondLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetEraUnbondLimit();

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

  fromPartial(object: DeepPartial<MsgSetEraUnbondLimit>): MsgSetEraUnbondLimit {
    const message = createBaseMsgSetEraUnbondLimit();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBaseMsgSetEraUnbondLimitResponse(): MsgSetEraUnbondLimitResponse {
  return {};
}

export const MsgSetEraUnbondLimitResponse = {
  encode(_: MsgSetEraUnbondLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetEraUnbondLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetEraUnbondLimitResponse();

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

  fromPartial(_: DeepPartial<MsgSetEraUnbondLimitResponse>): MsgSetEraUnbondLimitResponse {
    const message = createBaseMsgSetEraUnbondLimitResponse();
    return message;
  }

};

function createBaseMsgSetPoolDetail(): MsgSetPoolDetail {
  return {
    creator: "",
    denom: "",
    pool: "",
    subAccounts: [],
    threshold: 0
  };
}

export const MsgSetPoolDetail = {
  encode(message: MsgSetPoolDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSetPoolDetail();

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

  fromPartial(object: DeepPartial<MsgSetPoolDetail>): MsgSetPoolDetail {
    const message = createBaseMsgSetPoolDetail();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.subAccounts = object.subAccounts?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  }

};

function createBaseMsgSetPoolDetailResponse(): MsgSetPoolDetailResponse {
  return {};
}

export const MsgSetPoolDetailResponse = {
  encode(_: MsgSetPoolDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolDetailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolDetailResponse();

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

  fromPartial(_: DeepPartial<MsgSetPoolDetailResponse>): MsgSetPoolDetailResponse {
    const message = createBaseMsgSetPoolDetailResponse();
    return message;
  }

};

function createBaseMsgSetLeastBond(): MsgSetLeastBond {
  return {
    creator: "",
    denom: "",
    leastBond: ""
  };
}

export const MsgSetLeastBond = {
  encode(message: MsgSetLeastBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSetLeastBond();

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

  fromPartial(object: DeepPartial<MsgSetLeastBond>): MsgSetLeastBond {
    const message = createBaseMsgSetLeastBond();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.leastBond = object.leastBond ?? "";
    return message;
  }

};

function createBaseMsgSetLeastBondResponse(): MsgSetLeastBondResponse {
  return {};
}

export const MsgSetLeastBondResponse = {
  encode(_: MsgSetLeastBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLeastBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLeastBondResponse();

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

  fromPartial(_: DeepPartial<MsgSetLeastBondResponse>): MsgSetLeastBondResponse {
    const message = createBaseMsgSetLeastBondResponse();
    return message;
  }

};

function createBaseMsgClearCurrentEraSnapShots(): MsgClearCurrentEraSnapShots {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgClearCurrentEraSnapShots = {
  encode(message: MsgClearCurrentEraSnapShots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearCurrentEraSnapShots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearCurrentEraSnapShots();

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

  fromPartial(object: DeepPartial<MsgClearCurrentEraSnapShots>): MsgClearCurrentEraSnapShots {
    const message = createBaseMsgClearCurrentEraSnapShots();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgClearCurrentEraSnapShotsResponse(): MsgClearCurrentEraSnapShotsResponse {
  return {};
}

export const MsgClearCurrentEraSnapShotsResponse = {
  encode(_: MsgClearCurrentEraSnapShotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearCurrentEraSnapShotsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearCurrentEraSnapShotsResponse();

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

  fromPartial(_: DeepPartial<MsgClearCurrentEraSnapShotsResponse>): MsgClearCurrentEraSnapShotsResponse {
    const message = createBaseMsgClearCurrentEraSnapShotsResponse();
    return message;
  }

};

function createBaseMsgSetStakingRewardCommission(): MsgSetStakingRewardCommission {
  return {
    creator: "",
    denom: "",
    commission: ""
  };
}

export const MsgSetStakingRewardCommission = {
  encode(message: MsgSetStakingRewardCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakingRewardCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakingRewardCommission();

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

  fromPartial(object: DeepPartial<MsgSetStakingRewardCommission>): MsgSetStakingRewardCommission {
    const message = createBaseMsgSetStakingRewardCommission();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.commission = object.commission ?? "";
    return message;
  }

};

function createBaseMsgSetStakingRewardCommissionResponse(): MsgSetStakingRewardCommissionResponse {
  return {};
}

export const MsgSetStakingRewardCommissionResponse = {
  encode(_: MsgSetStakingRewardCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakingRewardCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakingRewardCommissionResponse();

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

  fromPartial(_: DeepPartial<MsgSetStakingRewardCommissionResponse>): MsgSetStakingRewardCommissionResponse {
    const message = createBaseMsgSetStakingRewardCommissionResponse();
    return message;
  }

};

function createBaseMsgSetProtocolFeeReceiver(): MsgSetProtocolFeeReceiver {
  return {
    creator: "",
    receiver: ""
  };
}

export const MsgSetProtocolFeeReceiver = {
  encode(message: MsgSetProtocolFeeReceiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProtocolFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProtocolFeeReceiver();

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

  fromPartial(object: DeepPartial<MsgSetProtocolFeeReceiver>): MsgSetProtocolFeeReceiver {
    const message = createBaseMsgSetProtocolFeeReceiver();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgSetProtocolFeeReceiverResponse(): MsgSetProtocolFeeReceiverResponse {
  return {};
}

export const MsgSetProtocolFeeReceiverResponse = {
  encode(_: MsgSetProtocolFeeReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetProtocolFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetProtocolFeeReceiverResponse();

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

  fromPartial(_: DeepPartial<MsgSetProtocolFeeReceiverResponse>): MsgSetProtocolFeeReceiverResponse {
    const message = createBaseMsgSetProtocolFeeReceiverResponse();
    return message;
  }

};

function createBaseMsgSetUnbondRelayFee(): MsgSetUnbondRelayFee {
  return {
    creator: "",
    denom: "",
    value: undefined
  };
}

export const MsgSetUnbondRelayFee = {
  encode(message: MsgSetUnbondRelayFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUnbondRelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUnbondRelayFee();

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
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetUnbondRelayFee>): MsgSetUnbondRelayFee {
    const message = createBaseMsgSetUnbondRelayFee();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseMsgSetUnbondRelayFeeResponse(): MsgSetUnbondRelayFeeResponse {
  return {};
}

export const MsgSetUnbondRelayFeeResponse = {
  encode(_: MsgSetUnbondRelayFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUnbondRelayFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUnbondRelayFeeResponse();

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

  fromPartial(_: DeepPartial<MsgSetUnbondRelayFeeResponse>): MsgSetUnbondRelayFeeResponse {
    const message = createBaseMsgSetUnbondRelayFeeResponse();
    return message;
  }

};

function createBaseMsgLiquidityUnbond(): MsgLiquidityUnbond {
  return {
    creator: "",
    pool: "",
    value: undefined,
    recipient: ""
  };
}

export const MsgLiquidityUnbond = {
  encode(message: MsgLiquidityUnbond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgLiquidityUnbond();

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

  fromPartial(object: DeepPartial<MsgLiquidityUnbond>): MsgLiquidityUnbond {
    const message = createBaseMsgLiquidityUnbond();
    message.creator = object.creator ?? "";
    message.pool = object.pool ?? "";
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseMsgLiquidityUnbondResponse(): MsgLiquidityUnbondResponse {
  return {};
}

export const MsgLiquidityUnbondResponse = {
  encode(_: MsgLiquidityUnbondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidityUnbondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidityUnbondResponse();

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

  fromPartial(_: DeepPartial<MsgLiquidityUnbondResponse>): MsgLiquidityUnbondResponse {
    const message = createBaseMsgLiquidityUnbondResponse();
    return message;
  }

};

function createBaseMsgSetUnbondCommission(): MsgSetUnbondCommission {
  return {
    creator: "",
    denom: "",
    commission: ""
  };
}

export const MsgSetUnbondCommission = {
  encode(message: MsgSetUnbondCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUnbondCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUnbondCommission();

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

  fromPartial(object: DeepPartial<MsgSetUnbondCommission>): MsgSetUnbondCommission {
    const message = createBaseMsgSetUnbondCommission();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.commission = object.commission ?? "";
    return message;
  }

};

function createBaseMsgSetUnbondCommissionResponse(): MsgSetUnbondCommissionResponse {
  return {};
}

export const MsgSetUnbondCommissionResponse = {
  encode(_: MsgSetUnbondCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUnbondCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUnbondCommissionResponse();

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

  fromPartial(_: DeepPartial<MsgSetUnbondCommissionResponse>): MsgSetUnbondCommissionResponse {
    const message = createBaseMsgSetUnbondCommissionResponse();
    return message;
  }

};

function createBaseMsgSubmitSignature(): MsgSubmitSignature {
  return {
    creator: "",
    denom: "",
    era: 0,
    pool: "",
    txType: 0,
    propId: "",
    signature: ""
  };
}

export const MsgSubmitSignature = {
  encode(message: MsgSubmitSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSubmitSignature();

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
          message.txType = (reader.int32() as any);
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

  fromPartial(object: DeepPartial<MsgSubmitSignature>): MsgSubmitSignature {
    const message = createBaseMsgSubmitSignature();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseMsgSubmitSignatureResponse(): MsgSubmitSignatureResponse {
  return {};
}

export const MsgSubmitSignatureResponse = {
  encode(_: MsgSubmitSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSignatureResponse();

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

  fromPartial(_: DeepPartial<MsgSubmitSignatureResponse>): MsgSubmitSignatureResponse {
    const message = createBaseMsgSubmitSignatureResponse();
    return message;
  }

};

function createBaseMsgSetRParams(): MsgSetRParams {
  return {
    creator: "",
    denom: "",
    gasPrice: "",
    eraSeconds: 0,
    offset: 0,
    bondingDuration: 0,
    leastBond: ""
  };
}

export const MsgSetRParams = {
  encode(message: MsgSetRParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRParams();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetRParams>): MsgSetRParams {
    const message = createBaseMsgSetRParams();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.gasPrice = object.gasPrice ?? "";
    message.eraSeconds = object.eraSeconds ?? 0;
    message.offset = object.offset ?? 0;
    message.bondingDuration = object.bondingDuration ?? 0;
    message.leastBond = object.leastBond ?? "";
    return message;
  }

};

function createBaseMsgSetRParamsResponse(): MsgSetRParamsResponse {
  return {};
}

export const MsgSetRParamsResponse = {
  encode(_: MsgSetRParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRParamsResponse();

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

  fromPartial(_: DeepPartial<MsgSetRParamsResponse>): MsgSetRParamsResponse {
    const message = createBaseMsgSetRParamsResponse();
    return message;
  }

};

function createBaseMsgSetRelayFeeReceiver(): MsgSetRelayFeeReceiver {
  return {
    creator: "",
    denom: "",
    receiver: ""
  };
}

export const MsgSetRelayFeeReceiver = {
  encode(message: MsgSetRelayFeeReceiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayFeeReceiver();

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

  fromPartial(object: DeepPartial<MsgSetRelayFeeReceiver>): MsgSetRelayFeeReceiver {
    const message = createBaseMsgSetRelayFeeReceiver();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgSetRelayFeeReceiverResponse(): MsgSetRelayFeeReceiverResponse {
  return {};
}

export const MsgSetRelayFeeReceiverResponse = {
  encode(_: MsgSetRelayFeeReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayFeeReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayFeeReceiverResponse();

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

  fromPartial(_: DeepPartial<MsgSetRelayFeeReceiverResponse>): MsgSetRelayFeeReceiverResponse {
    const message = createBaseMsgSetRelayFeeReceiverResponse();
    return message;
  }

};

function createBaseMsgSetRelayGasPrice(): MsgSetRelayGasPrice {
  return {
    creator: "",
    denom: "",
    gasPrice: ""
  };
}

export const MsgSetRelayGasPrice = {
  encode(message: MsgSetRelayGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSetRelayGasPrice();

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

  fromPartial(object: DeepPartial<MsgSetRelayGasPrice>): MsgSetRelayGasPrice {
    const message = createBaseMsgSetRelayGasPrice();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.gasPrice = object.gasPrice ?? "";
    return message;
  }

};

function createBaseMsgSetRelayGasPriceResponse(): MsgSetRelayGasPriceResponse {
  return {};
}

export const MsgSetRelayGasPriceResponse = {
  encode(_: MsgSetRelayGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRelayGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRelayGasPriceResponse();

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

  fromPartial(_: DeepPartial<MsgSetRelayGasPriceResponse>): MsgSetRelayGasPriceResponse {
    const message = createBaseMsgSetRelayGasPriceResponse();
    return message;
  }

};

function createBaseMsgSetEraSeconds(): MsgSetEraSeconds {
  return {
    creator: "",
    denom: "",
    eraSeconds: 0,
    bondingDuration: 0,
    offset: 0
  };
}

export const MsgSetEraSeconds = {
  encode(message: MsgSetEraSeconds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgSetEraSeconds();

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

  fromPartial(object: DeepPartial<MsgSetEraSeconds>): MsgSetEraSeconds {
    const message = createBaseMsgSetEraSeconds();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.eraSeconds = object.eraSeconds ?? 0;
    message.bondingDuration = object.bondingDuration ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  }

};

function createBaseMsgSetEraSecondsResponse(): MsgSetEraSecondsResponse {
  return {};
}

export const MsgSetEraSecondsResponse = {
  encode(_: MsgSetEraSecondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetEraSecondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetEraSecondsResponse();

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

  fromPartial(_: DeepPartial<MsgSetEraSecondsResponse>): MsgSetEraSecondsResponse {
    const message = createBaseMsgSetEraSecondsResponse();
    return message;
  }

};

function createBaseMsgRmBondedPool(): MsgRmBondedPool {
  return {
    creator: "",
    denom: "",
    address: ""
  };
}

export const MsgRmBondedPool = {
  encode(message: MsgRmBondedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgRmBondedPool();

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

  fromPartial(object: DeepPartial<MsgRmBondedPool>): MsgRmBondedPool {
    const message = createBaseMsgRmBondedPool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgRmBondedPoolResponse(): MsgRmBondedPoolResponse {
  return {};
}

export const MsgRmBondedPoolResponse = {
  encode(_: MsgRmBondedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRmBondedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRmBondedPoolResponse();

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

  fromPartial(_: DeepPartial<MsgRmBondedPoolResponse>): MsgRmBondedPoolResponse {
    const message = createBaseMsgRmBondedPoolResponse();
    return message;
  }

};

function createBaseMsgMigrateInit(): MsgMigrateInit {
  return {
    creator: "",
    denom: "",
    pool: "",
    totalSupply: "",
    active: "",
    bond: "",
    unbond: "",
    exchangeRate: "",
    totalProtocolFee: ""
  };
}

export const MsgMigrateInit = {
  encode(message: MsgMigrateInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseMsgMigrateInit();

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

  fromPartial(object: DeepPartial<MsgMigrateInit>): MsgMigrateInit {
    const message = createBaseMsgMigrateInit();
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
  }

};

function createBaseMsgMigrateInitResponse(): MsgMigrateInitResponse {
  return {};
}

export const MsgMigrateInitResponse = {
  encode(_: MsgMigrateInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateInitResponse();

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

  fromPartial(_: DeepPartial<MsgMigrateInitResponse>): MsgMigrateInitResponse {
    const message = createBaseMsgMigrateInitResponse();
    return message;
  }

};

function createBaseMsgMigrateUnbondings(): MsgMigrateUnbondings {
  return {
    creator: "",
    denom: "",
    pool: "",
    era: 0,
    unbondings: []
  };
}

export const MsgMigrateUnbondings = {
  encode(message: MsgMigrateUnbondings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateUnbondings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateUnbondings();

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

  fromPartial(object: DeepPartial<MsgMigrateUnbondings>): MsgMigrateUnbondings {
    const message = createBaseMsgMigrateUnbondings();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.era = object.era ?? 0;
    message.unbondings = object.unbondings?.map(e => Unbonding.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgMigrateUnbondingsResponse(): MsgMigrateUnbondingsResponse {
  return {};
}

export const MsgMigrateUnbondingsResponse = {
  encode(_: MsgMigrateUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateUnbondingsResponse();

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

  fromPartial(_: DeepPartial<MsgMigrateUnbondingsResponse>): MsgMigrateUnbondingsResponse {
    const message = createBaseMsgMigrateUnbondingsResponse();
    return message;
  }

};

function createBaseMsgToggleUnbondSwitch(): MsgToggleUnbondSwitch {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgToggleUnbondSwitch = {
  encode(message: MsgToggleUnbondSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleUnbondSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleUnbondSwitch();

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

  fromPartial(object: DeepPartial<MsgToggleUnbondSwitch>): MsgToggleUnbondSwitch {
    const message = createBaseMsgToggleUnbondSwitch();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgToggleUnbondSwitchResponse(): MsgToggleUnbondSwitchResponse {
  return {};
}

export const MsgToggleUnbondSwitchResponse = {
  encode(_: MsgToggleUnbondSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleUnbondSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleUnbondSwitchResponse();

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

  fromPartial(_: DeepPartial<MsgToggleUnbondSwitchResponse>): MsgToggleUnbondSwitchResponse {
    const message = createBaseMsgToggleUnbondSwitchResponse();
    return message;
  }

};

function createBaseMsgUnsealMigrateInit(): MsgUnsealMigrateInit {
  return {
    creator: ""
  };
}

export const MsgUnsealMigrateInit = {
  encode(message: MsgUnsealMigrateInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsealMigrateInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsealMigrateInit();

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

  fromPartial(object: DeepPartial<MsgUnsealMigrateInit>): MsgUnsealMigrateInit {
    const message = createBaseMsgUnsealMigrateInit();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgUnsealMigrateInitResponse(): MsgUnsealMigrateInitResponse {
  return {};
}

export const MsgUnsealMigrateInitResponse = {
  encode(_: MsgUnsealMigrateInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsealMigrateInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsealMigrateInitResponse();

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

  fromPartial(_: DeepPartial<MsgUnsealMigrateInitResponse>): MsgUnsealMigrateInitResponse {
    const message = createBaseMsgUnsealMigrateInitResponse();
    return message;
  }

};

function createBaseMsgRegisterIcaPool(): MsgRegisterIcaPool {
  return {
    creator: "",
    denom: "",
    connectionId: ""
  };
}

export const MsgRegisterIcaPool = {
  encode(message: MsgRegisterIcaPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterIcaPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterIcaPool();

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
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterIcaPool>): MsgRegisterIcaPool {
    const message = createBaseMsgRegisterIcaPool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }

};

function createBaseMsgRegisterIcaPoolResponse(): MsgRegisterIcaPoolResponse {
  return {};
}

export const MsgRegisterIcaPoolResponse = {
  encode(_: MsgRegisterIcaPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterIcaPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterIcaPoolResponse();

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

  fromPartial(_: DeepPartial<MsgRegisterIcaPoolResponse>): MsgRegisterIcaPoolResponse {
    const message = createBaseMsgRegisterIcaPoolResponse();
    return message;
  }

};

function createBaseMsgSetWithdrawalAddr(): MsgSetWithdrawalAddr {
  return {
    creator: "",
    delegationAddr: ""
  };
}

export const MsgSetWithdrawalAddr = {
  encode(message: MsgSetWithdrawalAddr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.delegationAddr !== "") {
      writer.uint32(26).string(message.delegationAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawalAddr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawalAddr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 3:
          message.delegationAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetWithdrawalAddr>): MsgSetWithdrawalAddr {
    const message = createBaseMsgSetWithdrawalAddr();
    message.creator = object.creator ?? "";
    message.delegationAddr = object.delegationAddr ?? "";
    return message;
  }

};

function createBaseMsgSetWithdrawalAddrResponse(): MsgSetWithdrawalAddrResponse {
  return {};
}

export const MsgSetWithdrawalAddrResponse = {
  encode(_: MsgSetWithdrawalAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawalAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawalAddrResponse();

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

  fromPartial(_: DeepPartial<MsgSetWithdrawalAddrResponse>): MsgSetWithdrawalAddrResponse {
    const message = createBaseMsgSetWithdrawalAddrResponse();
    return message;
  }

};

function createBaseMsgInitPool(): MsgInitPool {
  return {
    creator: "",
    denom: "",
    pool: ""
  };
}

export const MsgInitPool = {
  encode(message: MsgInitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitPool();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInitPool>): MsgInitPool {
    const message = createBaseMsgInitPool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    return message;
  }

};

function createBaseMsgInitPoolResponse(): MsgInitPoolResponse {
  return {};
}

export const MsgInitPoolResponse = {
  encode(_: MsgInitPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitPoolResponse();

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

  fromPartial(_: DeepPartial<MsgInitPoolResponse>): MsgInitPoolResponse {
    const message = createBaseMsgInitPoolResponse();
    return message;
  }

};
import { ExchangeRate, ExchangeRateSDKType, EraExchangeRate, EraExchangeRateSDKType, TotalProtocolFee, TotalProtocolFeeSDKType, Pool, PoolSDKType, BondPipeline, BondPipelineSDKType, EraUnbondLimit, EraUnbondLimitSDKType, PoolDetail, PoolDetailSDKType, EraSnapshot, EraSnapshotSDKType, ChainEra, ChainEraSDKType, UnbondRelayFee, UnbondRelayFeeSDKType, BondRecord, BondRecordSDKType, RParams, RParamsSDKType, Signature, SignatureSDKType, Unbonding, UnbondingSDKType, BondSnapshot, BondSnapshotSDKType } from "./ledger";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** GenesisState defines the ledger module's genesis state. */

export interface GenesisState {
  exchangeRateList: ExchangeRate[];
  eraExchangeRateList: EraExchangeRate[];
  totalProtocolFeeList: TotalProtocolFee[];
  unbondSwitchList: UnbondSwitch[];
  bondedPoolList: Pool[];
  bondPipelineList: BondPipeline[];
  eraUnbondLimitList: EraUnbondLimit[];
  poolDetailList: PoolDetail[];
  currentEraSnapshotList: EraSnapshot[];
  snapshotList: GenesisSnapshot[];
  eraSnapshotList: GenesisEraSnapshot[];
  chainEraList: ChainEra[];
  stakingRewardCommissionList: StakingRewardCommission[];
  protocolFeeReceiver: string;
  relayFeeReceiverList: RelayFeeReceiver[];
  totalExpectedActiveList: TotalExpectedActive[];
  poolUnbondingList: GenesisPoolUnbonding[];
  unbondRelayFeeList: UnbondRelayFee[];
  unbondCommissionList: UnbondCommission[];
  bondRecordList: BondRecord[];
  rparamsList: RParams[];
  signatureList: Signature[];
  MigrateIsSealed: boolean;
}
/** GenesisState defines the ledger module's genesis state. */

export interface GenesisStateSDKType {
  exchangeRateList: ExchangeRateSDKType[];
  eraExchangeRateList: EraExchangeRateSDKType[];
  totalProtocolFeeList: TotalProtocolFeeSDKType[];
  unbondSwitchList: UnbondSwitchSDKType[];
  bondedPoolList: PoolSDKType[];
  bondPipelineList: BondPipelineSDKType[];
  eraUnbondLimitList: EraUnbondLimitSDKType[];
  poolDetailList: PoolDetailSDKType[];
  currentEraSnapshotList: EraSnapshotSDKType[];
  snapshotList: GenesisSnapshotSDKType[];
  eraSnapshotList: GenesisEraSnapshotSDKType[];
  chainEraList: ChainEraSDKType[];
  stakingRewardCommissionList: StakingRewardCommissionSDKType[];
  protocolFeeReceiver: string;
  relayFeeReceiverList: RelayFeeReceiverSDKType[];
  totalExpectedActiveList: TotalExpectedActiveSDKType[];
  poolUnbondingList: GenesisPoolUnbondingSDKType[];
  unbondRelayFeeList: UnbondRelayFeeSDKType[];
  unbondCommissionList: UnbondCommissionSDKType[];
  bondRecordList: BondRecordSDKType[];
  rparamsList: RParamsSDKType[];
  signatureList: SignatureSDKType[];
  MigrateIsSealed: boolean;
}
export interface UnbondSwitch {
  denom: string;
  switch: boolean;
}
export interface UnbondSwitchSDKType {
  denom: string;
  switch: boolean;
}
export interface GenesisEraSnapshot {
  denom: string;
  era: number;
  shotIds: string[];
}
export interface GenesisEraSnapshotSDKType {
  denom: string;
  era: number;
  shotIds: string[];
}
export interface StakingRewardCommission {
  denom: string;
  value: string;
}
export interface StakingRewardCommissionSDKType {
  denom: string;
  value: string;
}
export interface UnbondCommission {
  denom: string;
  value: string;
}
export interface UnbondCommissionSDKType {
  denom: string;
  value: string;
}
export interface RelayFeeReceiver {
  denom: string;
  address: string;
}
export interface RelayFeeReceiverSDKType {
  denom: string;
  address: string;
}
export interface TotalExpectedActive {
  denom: string;
  era: number;
  value: string;
}
export interface TotalExpectedActiveSDKType {
  denom: string;
  era: number;
  value: string;
}
export interface GenesisPoolUnbonding {
  denom: string;
  era: number;
  pool: string;
  sequence: number;
  unbonding?: Unbonding;
}
export interface GenesisPoolUnbondingSDKType {
  denom: string;
  era: number;
  pool: string;
  sequence: number;
  unbonding?: UnbondingSDKType;
}
export interface GenesisSnapshot {
  shotId: string;
  snapshot?: BondSnapshot;
}
export interface GenesisSnapshotSDKType {
  shotId: string;
  snapshot?: BondSnapshotSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    exchangeRateList: [],
    eraExchangeRateList: [],
    totalProtocolFeeList: [],
    unbondSwitchList: [],
    bondedPoolList: [],
    bondPipelineList: [],
    eraUnbondLimitList: [],
    poolDetailList: [],
    currentEraSnapshotList: [],
    snapshotList: [],
    eraSnapshotList: [],
    chainEraList: [],
    stakingRewardCommissionList: [],
    protocolFeeReceiver: "",
    relayFeeReceiverList: [],
    totalExpectedActiveList: [],
    poolUnbondingList: [],
    unbondRelayFeeList: [],
    unbondCommissionList: [],
    bondRecordList: [],
    rparamsList: [],
    signatureList: [],
    MigrateIsSealed: false
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateList) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.eraExchangeRateList) {
      EraExchangeRate.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.totalProtocolFeeList) {
      TotalProtocolFee.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.unbondSwitchList) {
      UnbondSwitch.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.bondedPoolList) {
      Pool.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.bondPipelineList) {
      BondPipeline.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.eraUnbondLimitList) {
      EraUnbondLimit.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.poolDetailList) {
      PoolDetail.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.currentEraSnapshotList) {
      EraSnapshot.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.snapshotList) {
      GenesisSnapshot.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.eraSnapshotList) {
      GenesisEraSnapshot.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.chainEraList) {
      ChainEra.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.stakingRewardCommissionList) {
      StakingRewardCommission.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    if (message.protocolFeeReceiver !== "") {
      writer.uint32(114).string(message.protocolFeeReceiver);
    }

    for (const v of message.relayFeeReceiverList) {
      RelayFeeReceiver.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    for (const v of message.totalExpectedActiveList) {
      TotalExpectedActive.encode(v!, writer.uint32(130).fork()).ldelim();
    }

    for (const v of message.poolUnbondingList) {
      GenesisPoolUnbonding.encode(v!, writer.uint32(138).fork()).ldelim();
    }

    for (const v of message.unbondRelayFeeList) {
      UnbondRelayFee.encode(v!, writer.uint32(146).fork()).ldelim();
    }

    for (const v of message.unbondCommissionList) {
      UnbondCommission.encode(v!, writer.uint32(154).fork()).ldelim();
    }

    for (const v of message.bondRecordList) {
      BondRecord.encode(v!, writer.uint32(162).fork()).ldelim();
    }

    for (const v of message.rparamsList) {
      RParams.encode(v!, writer.uint32(170).fork()).ldelim();
    }

    for (const v of message.signatureList) {
      Signature.encode(v!, writer.uint32(178).fork()).ldelim();
    }

    if (message.MigrateIsSealed === true) {
      writer.uint32(184).bool(message.MigrateIsSealed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRateList.push(ExchangeRate.decode(reader, reader.uint32()));
          break;

        case 2:
          message.eraExchangeRateList.push(EraExchangeRate.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalProtocolFeeList.push(TotalProtocolFee.decode(reader, reader.uint32()));
          break;

        case 4:
          message.unbondSwitchList.push(UnbondSwitch.decode(reader, reader.uint32()));
          break;

        case 5:
          message.bondedPoolList.push(Pool.decode(reader, reader.uint32()));
          break;

        case 6:
          message.bondPipelineList.push(BondPipeline.decode(reader, reader.uint32()));
          break;

        case 7:
          message.eraUnbondLimitList.push(EraUnbondLimit.decode(reader, reader.uint32()));
          break;

        case 8:
          message.poolDetailList.push(PoolDetail.decode(reader, reader.uint32()));
          break;

        case 9:
          message.currentEraSnapshotList.push(EraSnapshot.decode(reader, reader.uint32()));
          break;

        case 10:
          message.snapshotList.push(GenesisSnapshot.decode(reader, reader.uint32()));
          break;

        case 11:
          message.eraSnapshotList.push(GenesisEraSnapshot.decode(reader, reader.uint32()));
          break;

        case 12:
          message.chainEraList.push(ChainEra.decode(reader, reader.uint32()));
          break;

        case 13:
          message.stakingRewardCommissionList.push(StakingRewardCommission.decode(reader, reader.uint32()));
          break;

        case 14:
          message.protocolFeeReceiver = reader.string();
          break;

        case 15:
          message.relayFeeReceiverList.push(RelayFeeReceiver.decode(reader, reader.uint32()));
          break;

        case 16:
          message.totalExpectedActiveList.push(TotalExpectedActive.decode(reader, reader.uint32()));
          break;

        case 17:
          message.poolUnbondingList.push(GenesisPoolUnbonding.decode(reader, reader.uint32()));
          break;

        case 18:
          message.unbondRelayFeeList.push(UnbondRelayFee.decode(reader, reader.uint32()));
          break;

        case 19:
          message.unbondCommissionList.push(UnbondCommission.decode(reader, reader.uint32()));
          break;

        case 20:
          message.bondRecordList.push(BondRecord.decode(reader, reader.uint32()));
          break;

        case 21:
          message.rparamsList.push(RParams.decode(reader, reader.uint32()));
          break;

        case 22:
          message.signatureList.push(Signature.decode(reader, reader.uint32()));
          break;

        case 23:
          message.MigrateIsSealed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.exchangeRateList = object.exchangeRateList?.map(e => ExchangeRate.fromPartial(e)) || [];
    message.eraExchangeRateList = object.eraExchangeRateList?.map(e => EraExchangeRate.fromPartial(e)) || [];
    message.totalProtocolFeeList = object.totalProtocolFeeList?.map(e => TotalProtocolFee.fromPartial(e)) || [];
    message.unbondSwitchList = object.unbondSwitchList?.map(e => UnbondSwitch.fromPartial(e)) || [];
    message.bondedPoolList = object.bondedPoolList?.map(e => Pool.fromPartial(e)) || [];
    message.bondPipelineList = object.bondPipelineList?.map(e => BondPipeline.fromPartial(e)) || [];
    message.eraUnbondLimitList = object.eraUnbondLimitList?.map(e => EraUnbondLimit.fromPartial(e)) || [];
    message.poolDetailList = object.poolDetailList?.map(e => PoolDetail.fromPartial(e)) || [];
    message.currentEraSnapshotList = object.currentEraSnapshotList?.map(e => EraSnapshot.fromPartial(e)) || [];
    message.snapshotList = object.snapshotList?.map(e => GenesisSnapshot.fromPartial(e)) || [];
    message.eraSnapshotList = object.eraSnapshotList?.map(e => GenesisEraSnapshot.fromPartial(e)) || [];
    message.chainEraList = object.chainEraList?.map(e => ChainEra.fromPartial(e)) || [];
    message.stakingRewardCommissionList = object.stakingRewardCommissionList?.map(e => StakingRewardCommission.fromPartial(e)) || [];
    message.protocolFeeReceiver = object.protocolFeeReceiver ?? "";
    message.relayFeeReceiverList = object.relayFeeReceiverList?.map(e => RelayFeeReceiver.fromPartial(e)) || [];
    message.totalExpectedActiveList = object.totalExpectedActiveList?.map(e => TotalExpectedActive.fromPartial(e)) || [];
    message.poolUnbondingList = object.poolUnbondingList?.map(e => GenesisPoolUnbonding.fromPartial(e)) || [];
    message.unbondRelayFeeList = object.unbondRelayFeeList?.map(e => UnbondRelayFee.fromPartial(e)) || [];
    message.unbondCommissionList = object.unbondCommissionList?.map(e => UnbondCommission.fromPartial(e)) || [];
    message.bondRecordList = object.bondRecordList?.map(e => BondRecord.fromPartial(e)) || [];
    message.rparamsList = object.rparamsList?.map(e => RParams.fromPartial(e)) || [];
    message.signatureList = object.signatureList?.map(e => Signature.fromPartial(e)) || [];
    message.MigrateIsSealed = object.MigrateIsSealed ?? false;
    return message;
  }

};

function createBaseUnbondSwitch(): UnbondSwitch {
  return {
    denom: "",
    switch: false
  };
}

export const UnbondSwitch = {
  encode(message: UnbondSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.switch === true) {
      writer.uint32(16).bool(message.switch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondSwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.switch = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondSwitch>): UnbondSwitch {
    const message = createBaseUnbondSwitch();
    message.denom = object.denom ?? "";
    message.switch = object.switch ?? false;
    return message;
  }

};

function createBaseGenesisEraSnapshot(): GenesisEraSnapshot {
  return {
    denom: "",
    era: 0,
    shotIds: []
  };
}

export const GenesisEraSnapshot = {
  encode(message: GenesisEraSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    for (const v of message.shotIds) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisEraSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisEraSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        case 3:
          message.shotIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisEraSnapshot>): GenesisEraSnapshot {
    const message = createBaseGenesisEraSnapshot();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.shotIds = object.shotIds?.map(e => e) || [];
    return message;
  }

};

function createBaseStakingRewardCommission(): StakingRewardCommission {
  return {
    denom: "",
    value: ""
  };
}

export const StakingRewardCommission = {
  encode(message: StakingRewardCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakingRewardCommission>): StakingRewardCommission {
    const message = createBaseStakingRewardCommission();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseUnbondCommission(): UnbondCommission {
  return {
    denom: "",
    value: ""
  };
}

export const UnbondCommission = {
  encode(message: UnbondCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondCommission>): UnbondCommission {
    const message = createBaseUnbondCommission();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseRelayFeeReceiver(): RelayFeeReceiver {
  return {
    denom: "",
    address: ""
  };
}

export const RelayFeeReceiver = {
  encode(message: RelayFeeReceiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelayFeeReceiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayFeeReceiver();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RelayFeeReceiver>): RelayFeeReceiver {
    const message = createBaseRelayFeeReceiver();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseTotalExpectedActive(): TotalExpectedActive {
  return {
    denom: "",
    era: 0,
    value: ""
  };
}

export const TotalExpectedActive = {
  encode(message: TotalExpectedActive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalExpectedActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalExpectedActive();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
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

  fromPartial(object: DeepPartial<TotalExpectedActive>): TotalExpectedActive {
    const message = createBaseTotalExpectedActive();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseGenesisPoolUnbonding(): GenesisPoolUnbonding {
  return {
    denom: "",
    era: 0,
    pool: "",
    sequence: 0,
    unbonding: undefined
  };
}

export const GenesisPoolUnbonding = {
  encode(message: GenesisPoolUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }

    if (message.sequence !== 0) {
      writer.uint32(32).uint32(message.sequence);
    }

    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPoolUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPoolUnbonding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        case 3:
          message.pool = reader.string();
          break;

        case 4:
          message.sequence = reader.uint32();
          break;

        case 5:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisPoolUnbonding>): GenesisPoolUnbonding {
    const message = createBaseGenesisPoolUnbonding();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.sequence = object.sequence ?? 0;
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    return message;
  }

};

function createBaseGenesisSnapshot(): GenesisSnapshot {
  return {
    shotId: "",
    snapshot: undefined
  };
}

export const GenesisSnapshot = {
  encode(message: GenesisSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shotId !== "") {
      writer.uint32(10).string(message.shotId);
    }

    if (message.snapshot !== undefined) {
      BondSnapshot.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shotId = reader.string();
          break;

        case 2:
          message.snapshot = BondSnapshot.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisSnapshot>): GenesisSnapshot {
    const message = createBaseGenesisSnapshot();
    message.shotId = object.shotId ?? "";
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? BondSnapshot.fromPartial(object.snapshot) : undefined;
    return message;
  }

};
import { Params, ParamsSDKType, Validator, ValidatorSDKType, Delegation, DelegationSDKType, UnbondingDelegation, UnbondingDelegationSDKType, Redelegation, RedelegationSDKType, TokenizeShareRecord, TokenizeShareRecordSDKType } from "./staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  exported: boolean;
  /** store tokenize share records to provide reward to record owners */
  tokenizeShareRecords: TokenizeShareRecord[];
  /** last tokenize share record id, used for next share record id calculation */
  lastTokenizeShareRecordId: Long;
  /** total number of liquid staked tokens at genesis */
  totalLiquidStakedTokens: Uint8Array;
  /** tokenize shares locks at genesis */
  tokenizeShareLocks: TokenizeShareLock[];
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  last_total_power: Uint8Array;
  last_validator_powers: LastValidatorPowerSDKType[];
  validators: ValidatorSDKType[];
  delegations: DelegationSDKType[];
  unbonding_delegations: UnbondingDelegationSDKType[];
  redelegations: RedelegationSDKType[];
  exported: boolean;
  tokenize_share_records: TokenizeShareRecordSDKType[];
  last_tokenize_share_record_id: Long;
  total_liquid_staked_tokens: Uint8Array;
  tokenize_share_locks: TokenizeShareLockSDKType[];
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLock {
  /** Address of the account that is locked */
  address: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status: string;
  /** Completion time if the lock is expiring */
  completionTime: Date;
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLockSDKType {
  address: string;
  status: string;
  completion_time: Date;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: Long;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
  address: string;
  power: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: Long.UZERO,
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (!message.lastTokenizeShareRecordId.isZero()) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v!, writer.uint32(98).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        case 9:
          message.tokenizeShareRecords.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lastTokenizeShareRecordId = (reader.uint64() as Long);
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(TokenizeShareLock.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.tokenizeShareRecords = object.tokenizeShareRecords?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId !== undefined && object.lastTokenizeShareRecordId !== null ? Long.fromValue(object.lastTokenizeShareRecordId) : Long.UZERO;
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks = object.tokenizeShareLocks?.map(e => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTokenizeShareLock(): TokenizeShareLock {
  return {
    address: "",
    status: "",
    completionTime: new Date()
  };
}
export const TokenizeShareLock = {
  encode(message: TokenizeShareLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenizeShareLock>): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }
};
function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: Long.ZERO
  };
}
export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};
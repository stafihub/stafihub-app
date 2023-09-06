// @ts-nocheck
import {
  Description,
  DescriptionSDKType,
  CommissionRates,
  CommissionRatesSDKType,
} from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import {
  DeepPartial,
  toTimestamp,
  fromTimestamp,
  Long,
} from "../../../helpers";
/** MsgCreateValidator defines a SDK message for creating a new validator. */

export interface MsgCreateValidator {
  description?: Description;
  commission?: CommissionRates;
  /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */

  /** @deprecated */

  minSelfDelegation: string;
  delegatorAddress: string;
  validatorAddress: string;
  pubkey?: Any;
  value?: Coin;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */

export interface MsgCreateValidatorSDKType {
  description?: DescriptionSDKType;
  commission?: CommissionRatesSDKType;
  /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */

  /** @deprecated */

  min_self_delegation: string;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnySDKType;
  value?: CoinSDKType;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

export interface MsgCreateValidatorResponse {}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

export interface MsgCreateValidatorResponseSDKType {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */

export interface MsgEditValidator {
  description?: Description;
  validatorAddress: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */

  commissionRate: string;
  /** @deprecated */

  minSelfDelegation: string;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */

export interface MsgEditValidatorSDKType {
  description?: DescriptionSDKType;
  validator_address: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */

  commission_rate: string;
  /** @deprecated */

  min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

export interface MsgEditValidatorResponse {}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

export interface MsgEditValidatorResponseSDKType {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */

export interface MsgDelegateResponse {}
/** MsgDelegateResponse defines the Msg/Delegate response type. */

export interface MsgDelegateResponseSDKType {}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount?: Coin;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount?: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

export interface MsgBeginRedelegateResponse {
  completionTime?: Date;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

export interface MsgBeginRedelegateResponseSDKType {
  completion_time?: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

export interface MsgUndelegateResponse {
  completionTime?: Date;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

export interface MsgUndelegateResponseSDKType {
  completion_time?: Date;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */

export interface MsgUnbondValidator {
  validatorAddress: string;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */

export interface MsgUnbondValidatorSDKType {
  validator_address: string;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */

export interface MsgUnbondValidatorResponse {}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */

export interface MsgUnbondValidatorResponseSDKType {}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /** amount is always less than or equal to unbonding delegation entry balance */

  amount?: Coin;
  /** creation_height is the height which the unbonding took place. */

  creationHeight: Long;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  /** amount is always less than or equal to unbonding delegation entry balance */

  amount?: CoinSDKType;
  /** creation_height is the height which the unbonding took place. */

  creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationResponse {}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUnbondingDelegationResponseSDKType {}
/** MsgTokenizeShares tokenizes a delegation */

export interface MsgTokenizeShares {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
  tokenizedShareOwner: string;
}
/** MsgTokenizeShares tokenizes a delegation */

export interface MsgTokenizeSharesSDKType {
  delegator_address: string;
  validator_address: string;
  amount?: CoinSDKType;
  tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */

export interface MsgTokenizeSharesResponse {
  amount?: Coin;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */

export interface MsgTokenizeSharesResponseSDKType {
  amount?: CoinSDKType;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */

export interface MsgRedeemTokensForShares {
  delegatorAddress: string;
  amount?: Coin;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */

export interface MsgRedeemTokensForSharesSDKType {
  delegator_address: string;
  amount?: CoinSDKType;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */

export interface MsgRedeemTokensForSharesResponse {
  amount?: Coin;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */

export interface MsgRedeemTokensForSharesResponseSDKType {
  amount?: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */

export interface MsgTransferTokenizeShareRecord {
  tokenizeShareRecordId: Long;
  sender: string;
  newOwner: string;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */

export interface MsgTransferTokenizeShareRecordSDKType {
  tokenize_share_record_id: Long;
  sender: string;
  new_owner: string;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */

export interface MsgTransferTokenizeShareRecordResponse {}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */

export interface MsgTransferTokenizeShareRecordResponseSDKType {}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */

export interface MsgDisableTokenizeShares {
  delegatorAddress: string;
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */

export interface MsgDisableTokenizeSharesSDKType {
  delegator_address: string;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */

export interface MsgDisableTokenizeSharesResponse {}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */

export interface MsgDisableTokenizeSharesResponseSDKType {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */

export interface MsgEnableTokenizeShares {
  delegatorAddress: string;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */

export interface MsgEnableTokenizeSharesSDKType {
  delegator_address: string;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */

export interface MsgEnableTokenizeSharesResponse {
  completionTime?: Date;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */

export interface MsgEnableTokenizeSharesResponseSDKType {
  completion_time?: Date;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of delegated coins
 * from a delegator to a validator.
 */

export interface MsgValidatorBond {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of delegated coins
 * from a delegator to a validator.
 */

export interface MsgValidatorBondSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */

export interface MsgValidatorBondResponse {}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */

export interface MsgValidatorBondResponseSDKType {}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: undefined,
    commission: undefined,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined,
  };
}

export const MsgCreateValidator = {
  encode(
    message: MsgCreateValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(10).fork()
      ).ldelim();
    }

    if (message.commission !== undefined) {
      CommissionRates.encode(
        message.commission,
        writer.uint32(18).fork()
      ).ldelim();
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }

    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;

        case 3:
          message.minSelfDelegation = reader.string();
          break;

        case 4:
          message.delegatorAddress = reader.string();
          break;

        case 5:
          message.validatorAddress = reader.string();
          break;

        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;

        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? CommissionRates.fromPartial(object.commission)
        : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.pubkey =
      object.pubkey !== undefined && object.pubkey !== null
        ? Any.fromPartial(object.pubkey)
        : undefined;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}

export const MsgCreateValidatorResponse = {
  encode(
    _: MsgCreateValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgCreateValidatorResponse>
  ): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
};

function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: undefined,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: "",
  };
}

export const MsgEditValidator = {
  encode(
    message: MsgEditValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(10).fork()
      ).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.commissionRate = reader.string();
          break;

        case 4:
          message.minSelfDelegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditValidator>): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
};

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}

export const MsgEditValidatorResponse = {
  encode(
    _: MsgEditValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgEditValidatorResponse>
  ): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
};

function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
  };
}

export const MsgDelegate = {
  encode(
    message: MsgDelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(
    _: MsgDelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();

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

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
};

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: undefined,
  };
}

export const MsgBeginRedelegate = {
  encode(
    message: MsgBeginRedelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBeginRedelegate>): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completionTime: undefined,
  };
}

export const MsgBeginRedelegateResponse = {
  encode(
    message: MsgBeginRedelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBeginRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgBeginRedelegateResponse>
  ): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
  };
}

export const MsgUndelegate = {
  encode(
    message: MsgUndelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: undefined,
  };
}

export const MsgUndelegateResponse = {
  encode(
    message: MsgUndelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgUndelegateResponse>
  ): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgUnbondValidator(): MsgUnbondValidator {
  return {
    validatorAddress: "",
  };
}

export const MsgUnbondValidator = {
  encode(
    message: MsgUnbondValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUnbondValidator>): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgUnbondValidatorResponse(): MsgUnbondValidatorResponse {
  return {};
}

export const MsgUnbondValidatorResponse = {
  encode(
    _: MsgUnbondValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnbondValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidatorResponse();

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

  fromPartial(
    _: DeepPartial<MsgUnbondValidatorResponse>
  ): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
};

function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
    creationHeight: Long.ZERO,
  };
}

export const MsgCancelUnbondingDelegation = {
  encode(
    message: MsgCancelUnbondingDelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.creationHeight.isZero()) {
      writer.uint32(32).int64(message.creationHeight);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelUnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.creationHeight = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgCancelUnbondingDelegation>
  ): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromValue(object.creationHeight)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgCancelUnbondingDelegationResponse(): MsgCancelUnbondingDelegationResponse {
  return {};
}

export const MsgCancelUnbondingDelegationResponse = {
  encode(
    _: MsgCancelUnbondingDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();

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

  fromPartial(
    _: DeepPartial<MsgCancelUnbondingDelegationResponse>
  ): MsgCancelUnbondingDelegationResponse {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
};

function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined,
    tokenizedShareOwner: "",
  };
}

export const MsgTokenizeShares = {
  encode(
    message: MsgTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.tokenizedShareOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
};

function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: undefined,
  };
}

export const MsgTokenizeSharesResponse = {
  encode(
    message: MsgTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgTokenizeSharesResponse>
  ): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: undefined,
  };
}

export const MsgRedeemTokensForShares = {
  encode(
    message: MsgRedeemTokensForShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedeemTokensForShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgRedeemTokensForShares>
  ): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: undefined,
  };
}

export const MsgRedeemTokensForSharesResponse = {
  encode(
    message: MsgRedeemTokensForSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgRedeemTokensForSharesResponse>
  ): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: Long.UZERO,
    sender: "",
    newOwner: "",
  };
}

export const MsgTransferTokenizeShareRecord = {
  encode(
    message: MsgTransferTokenizeShareRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.tokenizeShareRecordId.isZero()) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferTokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = reader.uint64() as Long;
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.newOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgTransferTokenizeShareRecord>
  ): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId =
      object.tokenizeShareRecordId !== undefined &&
      object.tokenizeShareRecordId !== null
        ? Long.fromValue(object.tokenizeShareRecordId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};

function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}

export const MsgTransferTokenizeShareRecordResponse = {
  encode(
    _: MsgTransferTokenizeShareRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();

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

  fromPartial(
    _: DeepPartial<MsgTransferTokenizeShareRecordResponse>
  ): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
};

function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: "",
  };
}

export const MsgDisableTokenizeShares = {
  encode(
    message: MsgDisableTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgDisableTokenizeShares>
  ): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}

export const MsgDisableTokenizeSharesResponse = {
  encode(
    _: MsgDisableTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();

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

  fromPartial(
    _: DeepPartial<MsgDisableTokenizeSharesResponse>
  ): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
};

function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: "",
  };
}

export const MsgEnableTokenizeShares = {
  encode(
    message: MsgEnableTokenizeShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgEnableTokenizeShares>
  ): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: undefined,
  };
}

export const MsgEnableTokenizeSharesResponse = {
  encode(
    message: MsgEnableTokenizeSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgEnableTokenizeSharesResponse>
  ): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgValidatorBond(): MsgValidatorBond {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}

export const MsgValidatorBond = {
  encode(
    message: MsgValidatorBond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgValidatorBond>): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgValidatorBondResponse(): MsgValidatorBondResponse {
  return {};
}

export const MsgValidatorBondResponse = {
  encode(
    _: MsgValidatorBondResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgValidatorBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBondResponse();

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

  fromPartial(
    _: DeepPartial<MsgValidatorBondResponse>
  ): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
};

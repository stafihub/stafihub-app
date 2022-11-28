//@ts-nocheck
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export enum PoolBondState {
  ERA_UPDATED = 0,
  BOND_REPORTED = 1,
  ACTIVE_REPORTED = 2,
  TRANSFER_SKIPPED = 3,
  TRANSFER_REPORTED = 4,
  UNRECOGNIZED = -1,
}
export enum PoolBondStateSDKType {
  ERA_UPDATED = 0,
  BOND_REPORTED = 1,
  ACTIVE_REPORTED = 2,
  TRANSFER_SKIPPED = 3,
  TRANSFER_REPORTED = 4,
  UNRECOGNIZED = -1,
}
export function poolBondStateFromJSON(object: any): PoolBondState {
  switch (object) {
    case 0:
    case "ERA_UPDATED":
      return PoolBondState.ERA_UPDATED;

    case 1:
    case "BOND_REPORTED":
      return PoolBondState.BOND_REPORTED;

    case 2:
    case "ACTIVE_REPORTED":
      return PoolBondState.ACTIVE_REPORTED;

    case 3:
    case "TRANSFER_SKIPPED":
      return PoolBondState.TRANSFER_SKIPPED;

    case 4:
    case "TRANSFER_REPORTED":
      return PoolBondState.TRANSFER_REPORTED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolBondState.UNRECOGNIZED;
  }
}
export function poolBondStateToJSON(object: PoolBondState): string {
  switch (object) {
    case PoolBondState.ERA_UPDATED:
      return "ERA_UPDATED";

    case PoolBondState.BOND_REPORTED:
      return "BOND_REPORTED";

    case PoolBondState.ACTIVE_REPORTED:
      return "ACTIVE_REPORTED";

    case PoolBondState.TRANSFER_SKIPPED:
      return "TRANSFER_SKIPPED";

    case PoolBondState.TRANSFER_REPORTED:
      return "TRANSFER_REPORTED";

    case PoolBondState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum BondAction {
  BOND_ONLY = 0,
  UNBOND_ONLY = 1,
  BOTH_BOND_UNBOND = 2,
  EITHER_BOND_UNBOND = 3,
  INTER_DEDUCT = 4,
  UNRECOGNIZED = -1,
}
export enum BondActionSDKType {
  BOND_ONLY = 0,
  UNBOND_ONLY = 1,
  BOTH_BOND_UNBOND = 2,
  EITHER_BOND_UNBOND = 3,
  INTER_DEDUCT = 4,
  UNRECOGNIZED = -1,
}
export function bondActionFromJSON(object: any): BondAction {
  switch (object) {
    case 0:
    case "BOND_ONLY":
      return BondAction.BOND_ONLY;

    case 1:
    case "UNBOND_ONLY":
      return BondAction.UNBOND_ONLY;

    case 2:
    case "BOTH_BOND_UNBOND":
      return BondAction.BOTH_BOND_UNBOND;

    case 3:
    case "EITHER_BOND_UNBOND":
      return BondAction.EITHER_BOND_UNBOND;

    case 4:
    case "INTER_DEDUCT":
      return BondAction.INTER_DEDUCT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BondAction.UNRECOGNIZED;
  }
}
export function bondActionToJSON(object: BondAction): string {
  switch (object) {
    case BondAction.BOND_ONLY:
      return "BOND_ONLY";

    case BondAction.UNBOND_ONLY:
      return "UNBOND_ONLY";

    case BondAction.BOTH_BOND_UNBOND:
      return "BOTH_BOND_UNBOND";

    case BondAction.EITHER_BOND_UNBOND:
      return "EITHER_BOND_UNBOND";

    case BondAction.INTER_DEDUCT:
      return "INTER_DEDUCT";

    case BondAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum LiquidityBondState {
  LIQUIDITY_BOND_STATE_VERIFY_OK = 0,
  LIQUIDITY_BOND_STATE_DENOM_UNMATCH = 1,
  LIQUIDITY_BOND_STATE_BONDER_UNMATCH = 2,
  LIQUIDITY_BOND_STATE_POOL_UNMATCH = 3,
  LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH = 4,
  LIQUIDITY_BOND_STATE_MEMO_UNMATCH = 5,
  UNRECOGNIZED = -1,
}
export enum LiquidityBondStateSDKType {
  LIQUIDITY_BOND_STATE_VERIFY_OK = 0,
  LIQUIDITY_BOND_STATE_DENOM_UNMATCH = 1,
  LIQUIDITY_BOND_STATE_BONDER_UNMATCH = 2,
  LIQUIDITY_BOND_STATE_POOL_UNMATCH = 3,
  LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH = 4,
  LIQUIDITY_BOND_STATE_MEMO_UNMATCH = 5,
  UNRECOGNIZED = -1,
}
export function liquidityBondStateFromJSON(object: any): LiquidityBondState {
  switch (object) {
    case 0:
    case "LIQUIDITY_BOND_STATE_VERIFY_OK":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK;

    case 1:
    case "LIQUIDITY_BOND_STATE_DENOM_UNMATCH":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_DENOM_UNMATCH;

    case 2:
    case "LIQUIDITY_BOND_STATE_BONDER_UNMATCH":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_BONDER_UNMATCH;

    case 3:
    case "LIQUIDITY_BOND_STATE_POOL_UNMATCH":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_POOL_UNMATCH;

    case 4:
    case "LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH;

    case 5:
    case "LIQUIDITY_BOND_STATE_MEMO_UNMATCH":
      return LiquidityBondState.LIQUIDITY_BOND_STATE_MEMO_UNMATCH;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LiquidityBondState.UNRECOGNIZED;
  }
}
export function liquidityBondStateToJSON(object: LiquidityBondState): string {
  switch (object) {
    case LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK:
      return "LIQUIDITY_BOND_STATE_VERIFY_OK";

    case LiquidityBondState.LIQUIDITY_BOND_STATE_DENOM_UNMATCH:
      return "LIQUIDITY_BOND_STATE_DENOM_UNMATCH";

    case LiquidityBondState.LIQUIDITY_BOND_STATE_BONDER_UNMATCH:
      return "LIQUIDITY_BOND_STATE_BONDER_UNMATCH";

    case LiquidityBondState.LIQUIDITY_BOND_STATE_POOL_UNMATCH:
      return "LIQUIDITY_BOND_STATE_POOL_UNMATCH";

    case LiquidityBondState.LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH:
      return "LIQUIDITY_BOND_STATE_AMOUNT_UNMATCH";

    case LiquidityBondState.LIQUIDITY_BOND_STATE_MEMO_UNMATCH:
      return "LIQUIDITY_BOND_STATE_MEMO_UNMATCH";

    case LiquidityBondState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** OriginalTxType enumerates the tx type of a signature. */

export enum OriginalTxType {
  ORIGINAL_TX_TYPE_DEAL_ERAUPDATED = 0,
  ORIGINAL_TX_TYPE_DEAL_BONDREPORTED = 1,
  ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED = 2,
  ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED = 3,
  ORIGINAL_TX_TYPE_RESERVED = 4,
  UNRECOGNIZED = -1,
}
/** OriginalTxType enumerates the tx type of a signature. */

export enum OriginalTxTypeSDKType {
  ORIGINAL_TX_TYPE_DEAL_ERAUPDATED = 0,
  ORIGINAL_TX_TYPE_DEAL_BONDREPORTED = 1,
  ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED = 2,
  ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED = 3,
  ORIGINAL_TX_TYPE_RESERVED = 4,
  UNRECOGNIZED = -1,
}
export function originalTxTypeFromJSON(object: any): OriginalTxType {
  switch (object) {
    case 0:
    case "ORIGINAL_TX_TYPE_DEAL_ERAUPDATED":
      return OriginalTxType.ORIGINAL_TX_TYPE_DEAL_ERAUPDATED;

    case 1:
    case "ORIGINAL_TX_TYPE_DEAL_BONDREPORTED":
      return OriginalTxType.ORIGINAL_TX_TYPE_DEAL_BONDREPORTED;

    case 2:
    case "ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED":
      return OriginalTxType.ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED;

    case 3:
    case "ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED":
      return OriginalTxType.ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED;

    case 4:
    case "ORIGINAL_TX_TYPE_RESERVED":
      return OriginalTxType.ORIGINAL_TX_TYPE_RESERVED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OriginalTxType.UNRECOGNIZED;
  }
}
export function originalTxTypeToJSON(object: OriginalTxType): string {
  switch (object) {
    case OriginalTxType.ORIGINAL_TX_TYPE_DEAL_ERAUPDATED:
      return "ORIGINAL_TX_TYPE_DEAL_ERAUPDATED";

    case OriginalTxType.ORIGINAL_TX_TYPE_DEAL_BONDREPORTED:
      return "ORIGINAL_TX_TYPE_DEAL_BONDREPORTED";

    case OriginalTxType.ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED:
      return "ORIGINAL_TX_TYPE_DEAL_ACTIVEREPORTED";

    case OriginalTxType.ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED:
      return "ORIGINAL_TX_TYPE_DEAL_VALIDATORUPDATED";

    case OriginalTxType.ORIGINAL_TX_TYPE_RESERVED:
      return "ORIGINAL_TX_TYPE_RESERVED";

    case OriginalTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum IcaPoolStatus {
  ICA_POOL_STATUS_UNSPECIFIED = 0,
  ICA_POOL_STATUS_INIT = 1,
  ICA_POOL_STATUS_CREATE_ONE = 2,
  ICA_POOL_STATUS_CREATE_TWO = 3,
  ICA_POOL_STATUS_SET_WITHDRAWAL = 4,
  UNRECOGNIZED = -1,
}
export enum IcaPoolStatusSDKType {
  ICA_POOL_STATUS_UNSPECIFIED = 0,
  ICA_POOL_STATUS_INIT = 1,
  ICA_POOL_STATUS_CREATE_ONE = 2,
  ICA_POOL_STATUS_CREATE_TWO = 3,
  ICA_POOL_STATUS_SET_WITHDRAWAL = 4,
  UNRECOGNIZED = -1,
}
export function icaPoolStatusFromJSON(object: any): IcaPoolStatus {
  switch (object) {
    case 0:
    case "ICA_POOL_STATUS_UNSPECIFIED":
      return IcaPoolStatus.ICA_POOL_STATUS_UNSPECIFIED;

    case 1:
    case "ICA_POOL_STATUS_INIT":
      return IcaPoolStatus.ICA_POOL_STATUS_INIT;

    case 2:
    case "ICA_POOL_STATUS_CREATE_ONE":
      return IcaPoolStatus.ICA_POOL_STATUS_CREATE_ONE;

    case 3:
    case "ICA_POOL_STATUS_CREATE_TWO":
      return IcaPoolStatus.ICA_POOL_STATUS_CREATE_TWO;

    case 4:
    case "ICA_POOL_STATUS_SET_WITHDRAWAL":
      return IcaPoolStatus.ICA_POOL_STATUS_SET_WITHDRAWAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return IcaPoolStatus.UNRECOGNIZED;
  }
}
export function icaPoolStatusToJSON(object: IcaPoolStatus): string {
  switch (object) {
    case IcaPoolStatus.ICA_POOL_STATUS_UNSPECIFIED:
      return "ICA_POOL_STATUS_UNSPECIFIED";

    case IcaPoolStatus.ICA_POOL_STATUS_INIT:
      return "ICA_POOL_STATUS_INIT";

    case IcaPoolStatus.ICA_POOL_STATUS_CREATE_ONE:
      return "ICA_POOL_STATUS_CREATE_ONE";

    case IcaPoolStatus.ICA_POOL_STATUS_CREATE_TWO:
      return "ICA_POOL_STATUS_CREATE_TWO";

    case IcaPoolStatus.ICA_POOL_STATUS_SET_WITHDRAWAL:
      return "ICA_POOL_STATUS_SET_WITHDRAWAL";

    case IcaPoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InterchainTxStatus {
  INTERCHAIN_TX_STATUS_UNSPECIFIED = 0,
  INTERCHAIN_TX_STATUS_INIT = 1,
  INTERCHAIN_TX_STATUS_SUCCESS = 2,
  INTERCHAIN_TX_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export enum InterchainTxStatusSDKType {
  INTERCHAIN_TX_STATUS_UNSPECIFIED = 0,
  INTERCHAIN_TX_STATUS_INIT = 1,
  INTERCHAIN_TX_STATUS_SUCCESS = 2,
  INTERCHAIN_TX_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export function interchainTxStatusFromJSON(object: any): InterchainTxStatus {
  switch (object) {
    case 0:
    case "INTERCHAIN_TX_STATUS_UNSPECIFIED":
      return InterchainTxStatus.INTERCHAIN_TX_STATUS_UNSPECIFIED;

    case 1:
    case "INTERCHAIN_TX_STATUS_INIT":
      return InterchainTxStatus.INTERCHAIN_TX_STATUS_INIT;

    case 2:
    case "INTERCHAIN_TX_STATUS_SUCCESS":
      return InterchainTxStatus.INTERCHAIN_TX_STATUS_SUCCESS;

    case 3:
    case "INTERCHAIN_TX_STATUS_FAILED":
      return InterchainTxStatus.INTERCHAIN_TX_STATUS_FAILED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return InterchainTxStatus.UNRECOGNIZED;
  }
}
export function interchainTxStatusToJSON(object: InterchainTxStatus): string {
  switch (object) {
    case InterchainTxStatus.INTERCHAIN_TX_STATUS_UNSPECIFIED:
      return "INTERCHAIN_TX_STATUS_UNSPECIFIED";

    case InterchainTxStatus.INTERCHAIN_TX_STATUS_INIT:
      return "INTERCHAIN_TX_STATUS_INIT";

    case InterchainTxStatus.INTERCHAIN_TX_STATUS_SUCCESS:
      return "INTERCHAIN_TX_STATUS_SUCCESS";

    case InterchainTxStatus.INTERCHAIN_TX_STATUS_FAILED:
      return "INTERCHAIN_TX_STATUS_FAILED";

    case InterchainTxStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ChainEra {
  denom: string;
  era: number;
}
export interface ChainEraSDKType {
  denom: string;
  era: number;
}
export interface Pool {
  denom: string;
  addrs: string[];
}
export interface PoolSDKType {
  denom: string;
  addrs: string[];
}
export interface BondPipeline {
  denom: string;
  pool: string;
  chunk?: LinkChunk;
}
export interface BondPipelineSDKType {
  denom: string;
  pool: string;
  chunk?: LinkChunkSDKType;
}
export interface EraSnapshot {
  denom: string;
  shotIds: string[];
}
export interface EraSnapshotSDKType {
  denom: string;
  shotIds: string[];
}
export interface EraUnbondLimit {
  denom: string;
  limit: number;
}
export interface EraUnbondLimitSDKType {
  denom: string;
  limit: number;
}
export interface PoolDetail {
  denom: string;
  pool: string;
  subAccounts: string[];
  threshold: number;
}
export interface PoolDetailSDKType {
  denom: string;
  pool: string;
  subAccounts: string[];
  threshold: number;
}
export interface LinkChunk {
  bond: string;
  unbond: string;
  active: string;
}
export interface LinkChunkSDKType {
  bond: string;
  unbond: string;
  active: string;
}
export interface BondSnapshot {
  denom: string;
  pool: string;
  era: number;
  chunk?: LinkChunk;
  bondState: PoolBondState;
}
export interface BondSnapshotSDKType {
  denom: string;
  pool: string;
  era: number;
  chunk?: LinkChunkSDKType;
  bond_state: PoolBondStateSDKType;
}
export interface ExchangeRate {
  denom: string;
  value: string;
}
export interface ExchangeRateSDKType {
  denom: string;
  value: string;
}
export interface TotalProtocolFee {
  denom: string;
  value: string;
}
export interface TotalProtocolFeeSDKType {
  denom: string;
  value: string;
}
export interface EraExchangeRate {
  denom: string;
  era: number;
  value: string;
}
export interface EraExchangeRateSDKType {
  denom: string;
  era: number;
  value: string;
}
export interface UnbondRelayFee {
  denom: string;
  value?: Coin;
}
export interface UnbondRelayFeeSDKType {
  denom: string;
  value?: CoinSDKType;
}
export interface Unbonding {
  unbonder: string;
  amount: string;
  recipient: string;
}
export interface UnbondingSDKType {
  unbonder: string;
  amount: string;
  recipient: string;
}
export interface BondRecord {
  denom: string;
  bonder: string;
  pool: string;
  txhash: string;
  amount: string;
  state: LiquidityBondState;
}
export interface BondRecordSDKType {
  denom: string;
  bonder: string;
  pool: string;
  txhash: string;
  amount: string;
  state: LiquidityBondStateSDKType;
}
export interface Signature {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
  propId: string;
  sigs: string[];
}
export interface SignatureSDKType {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxTypeSDKType;
  propId: string;
  sigs: string[];
}
export interface RParams {
  denom: string;
  gasPrice: string;
  eraSeconds: number;
  offset: number;
  bondingDuration: number;
  leastBond: string;
}
export interface RParamsSDKType {
  denom: string;
  gasPrice: string;
  eraSeconds: number;
  offset: number;
  bondingDuration: number;
  leastBond: string;
}
export interface IcaAccount {
  owner: string;
  address: string;
  ctrlConnectionId: string;
  ctrlPortId: string;
  ctrlChannelId: string;
  hostConnectionId: string;
  hostPortId: string;
  hostChannelId: string;
}
export interface IcaAccountSDKType {
  owner: string;
  address: string;
  ctrlConnectionId: string;
  ctrlPortId: string;
  ctrlChannelId: string;
  hostConnectionId: string;
  hostPortId: string;
  hostChannelId: string;
}
export interface IcaPoolDetail {
  denom: string;
  index: number;
  status: IcaPoolStatus;
  DelegationAccount?: IcaAccount;
  WithdrawalAccount?: IcaAccount;
}
export interface IcaPoolDetailSDKType {
  denom: string;
  index: number;
  status: IcaPoolStatusSDKType;
  DelegationAccount?: IcaAccountSDKType;
  WithdrawalAccount?: IcaAccountSDKType;
}

function createBaseChainEra(): ChainEra {
  return {
    denom: "",
    era: 0
  };
}

export const ChainEra = {
  encode(message: ChainEra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainEra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainEra();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.era = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ChainEra>): ChainEra {
    const message = createBaseChainEra();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  }

};

function createBasePool(): Pool {
  return {
    denom: "",
    addrs: []
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.addrs) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.addrs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.denom = object.denom ?? "";
    message.addrs = object.addrs?.map(e => e) || [];
    return message;
  }

};

function createBaseBondPipeline(): BondPipeline {
  return {
    denom: "",
    pool: "",
    chunk: undefined
  };
}

export const BondPipeline = {
  encode(message: BondPipeline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    if (message.chunk !== undefined) {
      LinkChunk.encode(message.chunk, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondPipeline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondPipeline();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        case 3:
          message.chunk = LinkChunk.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BondPipeline>): BondPipeline {
    const message = createBaseBondPipeline();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.chunk = object.chunk !== undefined && object.chunk !== null ? LinkChunk.fromPartial(object.chunk) : undefined;
    return message;
  }

};

function createBaseEraSnapshot(): EraSnapshot {
  return {
    denom: "",
    shotIds: []
  };
}

export const EraSnapshot = {
  encode(message: EraSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.shotIds) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EraSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEraSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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

  fromPartial(object: DeepPartial<EraSnapshot>): EraSnapshot {
    const message = createBaseEraSnapshot();
    message.denom = object.denom ?? "";
    message.shotIds = object.shotIds?.map(e => e) || [];
    return message;
  }

};

function createBaseEraUnbondLimit(): EraUnbondLimit {
  return {
    denom: "",
    limit: 0
  };
}

export const EraUnbondLimit = {
  encode(message: EraUnbondLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EraUnbondLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEraUnbondLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.limit = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EraUnbondLimit>): EraUnbondLimit {
    const message = createBaseEraUnbondLimit();
    message.denom = object.denom ?? "";
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBasePoolDetail(): PoolDetail {
  return {
    denom: "",
    pool: "",
    subAccounts: [],
    threshold: 0
  };
}

export const PoolDetail = {
  encode(message: PoolDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    for (const v of message.subAccounts) {
      writer.uint32(26).string(v!);
    }

    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolDetail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        case 3:
          message.subAccounts.push(reader.string());
          break;

        case 4:
          message.threshold = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolDetail>): PoolDetail {
    const message = createBasePoolDetail();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.subAccounts = object.subAccounts?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  }

};

function createBaseLinkChunk(): LinkChunk {
  return {
    bond: "",
    unbond: "",
    active: ""
  };
}

export const LinkChunk = {
  encode(message: LinkChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bond !== "") {
      writer.uint32(10).string(message.bond);
    }

    if (message.unbond !== "") {
      writer.uint32(18).string(message.unbond);
    }

    if (message.active !== "") {
      writer.uint32(26).string(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkChunk();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bond = reader.string();
          break;

        case 2:
          message.unbond = reader.string();
          break;

        case 3:
          message.active = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LinkChunk>): LinkChunk {
    const message = createBaseLinkChunk();
    message.bond = object.bond ?? "";
    message.unbond = object.unbond ?? "";
    message.active = object.active ?? "";
    return message;
  }

};

function createBaseBondSnapshot(): BondSnapshot {
  return {
    denom: "",
    pool: "",
    era: 0,
    chunk: undefined,
    bondState: 0
  };
}

export const BondSnapshot = {
  encode(message: BondSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }

    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era);
    }

    if (message.chunk !== undefined) {
      LinkChunk.encode(message.chunk, writer.uint32(34).fork()).ldelim();
    }

    if (message.bondState !== 0) {
      writer.uint32(48).int32(message.bondState);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pool = reader.string();
          break;

        case 3:
          message.era = reader.uint32();
          break;

        case 4:
          message.chunk = LinkChunk.decode(reader, reader.uint32());
          break;

        case 6:
          message.bondState = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BondSnapshot>): BondSnapshot {
    const message = createBaseBondSnapshot();
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.era = object.era ?? 0;
    message.chunk = object.chunk !== undefined && object.chunk !== null ? LinkChunk.fromPartial(object.chunk) : undefined;
    message.bondState = object.bondState ?? 0;
    return message;
  }

};

function createBaseExchangeRate(): ExchangeRate {
  return {
    denom: "",
    value: ""
  };
}

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();

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

  fromPartial(object: DeepPartial<ExchangeRate>): ExchangeRate {
    const message = createBaseExchangeRate();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseTotalProtocolFee(): TotalProtocolFee {
  return {
    denom: "",
    value: ""
  };
}

export const TotalProtocolFee = {
  encode(message: TotalProtocolFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalProtocolFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalProtocolFee();

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

  fromPartial(object: DeepPartial<TotalProtocolFee>): TotalProtocolFee {
    const message = createBaseTotalProtocolFee();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseEraExchangeRate(): EraExchangeRate {
  return {
    denom: "",
    era: 0,
    value: ""
  };
}

export const EraExchangeRate = {
  encode(message: EraExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EraExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEraExchangeRate();

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

  fromPartial(object: DeepPartial<EraExchangeRate>): EraExchangeRate {
    const message = createBaseEraExchangeRate();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseUnbondRelayFee(): UnbondRelayFee {
  return {
    denom: "",
    value: undefined
  };
}

export const UnbondRelayFee = {
  encode(message: UnbondRelayFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondRelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondRelayFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondRelayFee>): UnbondRelayFee {
    const message = createBaseUnbondRelayFee();
    message.denom = object.denom ?? "";
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseUnbonding(): Unbonding {
  return {
    unbonder: "",
    amount: "",
    recipient: ""
  };
}

export const Unbonding = {
  encode(message: Unbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbonder !== "") {
      writer.uint32(10).string(message.unbonder);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbonding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbonder = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Unbonding>): Unbonding {
    const message = createBaseUnbonding();
    message.unbonder = object.unbonder ?? "";
    message.amount = object.amount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseBondRecord(): BondRecord {
  return {
    denom: "",
    bonder: "",
    pool: "",
    txhash: "",
    amount: "",
    state: 0
  };
}

export const BondRecord = {
  encode(message: BondRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.bonder !== "") {
      writer.uint32(18).string(message.bonder);
    }

    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }

    if (message.txhash !== "") {
      writer.uint32(34).string(message.txhash);
    }

    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }

    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.bonder = reader.string();
          break;

        case 3:
          message.pool = reader.string();
          break;

        case 4:
          message.txhash = reader.string();
          break;

        case 5:
          message.amount = reader.string();
          break;

        case 6:
          message.state = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BondRecord>): BondRecord {
    const message = createBaseBondRecord();
    message.denom = object.denom ?? "";
    message.bonder = object.bonder ?? "";
    message.pool = object.pool ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount ?? "";
    message.state = object.state ?? 0;
    return message;
  }

};

function createBaseSignature(): Signature {
  return {
    denom: "",
    era: 0,
    pool: "",
    txType: 0,
    propId: "",
    sigs: []
  };
}

export const Signature = {
  encode(message: Signature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era);
    }

    if (message.pool !== "") {
      writer.uint32(26).string(message.pool);
    }

    if (message.txType !== 0) {
      writer.uint32(32).int32(message.txType);
    }

    if (message.propId !== "") {
      writer.uint32(42).string(message.propId);
    }

    for (const v of message.sigs) {
      writer.uint32(50).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature();

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
          message.txType = (reader.int32() as any);
          break;

        case 5:
          message.propId = reader.string();
          break;

        case 6:
          message.sigs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Signature>): Signature {
    const message = createBaseSignature();
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    message.sigs = object.sigs?.map(e => e) || [];
    return message;
  }

};

function createBaseRParams(): RParams {
  return {
    denom: "",
    gasPrice: "",
    eraSeconds: 0,
    offset: 0,
    bondingDuration: 0,
    leastBond: ""
  };
}

export const RParams = {
  encode(message: RParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }

    if (message.eraSeconds !== 0) {
      writer.uint32(24).uint32(message.eraSeconds);
    }

    if (message.offset !== 0) {
      writer.uint32(32).int32(message.offset);
    }

    if (message.bondingDuration !== 0) {
      writer.uint32(40).uint32(message.bondingDuration);
    }

    if (message.leastBond !== "") {
      writer.uint32(50).string(message.leastBond);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.gasPrice = reader.string();
          break;

        case 3:
          message.eraSeconds = reader.uint32();
          break;

        case 4:
          message.offset = reader.int32();
          break;

        case 5:
          message.bondingDuration = reader.uint32();
          break;

        case 6:
          message.leastBond = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RParams>): RParams {
    const message = createBaseRParams();
    message.denom = object.denom ?? "";
    message.gasPrice = object.gasPrice ?? "";
    message.eraSeconds = object.eraSeconds ?? 0;
    message.offset = object.offset ?? 0;
    message.bondingDuration = object.bondingDuration ?? 0;
    message.leastBond = object.leastBond ?? "";
    return message;
  }

};

function createBaseIcaAccount(): IcaAccount {
  return {
    owner: "",
    address: "",
    ctrlConnectionId: "",
    ctrlPortId: "",
    ctrlChannelId: "",
    hostConnectionId: "",
    hostPortId: "",
    hostChannelId: ""
  };
}

export const IcaAccount = {
  encode(message: IcaAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.ctrlConnectionId !== "") {
      writer.uint32(26).string(message.ctrlConnectionId);
    }

    if (message.ctrlPortId !== "") {
      writer.uint32(34).string(message.ctrlPortId);
    }

    if (message.ctrlChannelId !== "") {
      writer.uint32(42).string(message.ctrlChannelId);
    }

    if (message.hostConnectionId !== "") {
      writer.uint32(50).string(message.hostConnectionId);
    }

    if (message.hostPortId !== "") {
      writer.uint32(58).string(message.hostPortId);
    }

    if (message.hostChannelId !== "") {
      writer.uint32(66).string(message.hostChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcaAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcaAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.ctrlConnectionId = reader.string();
          break;

        case 4:
          message.ctrlPortId = reader.string();
          break;

        case 5:
          message.ctrlChannelId = reader.string();
          break;

        case 6:
          message.hostConnectionId = reader.string();
          break;

        case 7:
          message.hostPortId = reader.string();
          break;

        case 8:
          message.hostChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IcaAccount>): IcaAccount {
    const message = createBaseIcaAccount();
    message.owner = object.owner ?? "";
    message.address = object.address ?? "";
    message.ctrlConnectionId = object.ctrlConnectionId ?? "";
    message.ctrlPortId = object.ctrlPortId ?? "";
    message.ctrlChannelId = object.ctrlChannelId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.hostPortId = object.hostPortId ?? "";
    message.hostChannelId = object.hostChannelId ?? "";
    return message;
  }

};

function createBaseIcaPoolDetail(): IcaPoolDetail {
  return {
    denom: "",
    index: 0,
    status: 0,
    DelegationAccount: undefined,
    WithdrawalAccount: undefined
  };
}

export const IcaPoolDetail = {
  encode(message: IcaPoolDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.DelegationAccount !== undefined) {
      IcaAccount.encode(message.DelegationAccount, writer.uint32(34).fork()).ldelim();
    }

    if (message.WithdrawalAccount !== undefined) {
      IcaAccount.encode(message.WithdrawalAccount, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcaPoolDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcaPoolDetail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.index = reader.uint32();
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.DelegationAccount = IcaAccount.decode(reader, reader.uint32());
          break;

        case 5:
          message.WithdrawalAccount = IcaAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IcaPoolDetail>): IcaPoolDetail {
    const message = createBaseIcaPoolDetail();
    message.denom = object.denom ?? "";
    message.index = object.index ?? 0;
    message.status = object.status ?? 0;
    message.DelegationAccount = object.DelegationAccount !== undefined && object.DelegationAccount !== null ? IcaAccount.fromPartial(object.DelegationAccount) : undefined;
    message.WithdrawalAccount = object.WithdrawalAccount !== undefined && object.WithdrawalAccount !== null ? IcaAccount.fromPartial(object.WithdrawalAccount) : undefined;
    return message;
  }

};
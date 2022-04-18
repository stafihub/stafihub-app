/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.ledger";

export enum PoolBondState {
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
    default:
      return "UNKNOWN";
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
    default:
      return "UNKNOWN";
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
    default:
      return "UNKNOWN";
  }
}

/** OriginalTxType enumerates the tx type of a signature. */
export enum OriginalTxType {
  ORIGINAL_TX_TYPE_TRANSFER = 0,
  ORIGINAL_TX_TYPE_BOND = 1,
  ORIGINAL_TX_TYPE_UNBOND = 2,
  ORIGINAL_TX_TYPE_WITHDRAW = 3,
  ORIGINAL_TX_TYPE_CLAIM = 4,
  UNRECOGNIZED = -1,
}

export function originalTxTypeFromJSON(object: any): OriginalTxType {
  switch (object) {
    case 0:
    case "ORIGINAL_TX_TYPE_TRANSFER":
      return OriginalTxType.ORIGINAL_TX_TYPE_TRANSFER;
    case 1:
    case "ORIGINAL_TX_TYPE_BOND":
      return OriginalTxType.ORIGINAL_TX_TYPE_BOND;
    case 2:
    case "ORIGINAL_TX_TYPE_UNBOND":
      return OriginalTxType.ORIGINAL_TX_TYPE_UNBOND;
    case 3:
    case "ORIGINAL_TX_TYPE_WITHDRAW":
      return OriginalTxType.ORIGINAL_TX_TYPE_WITHDRAW;
    case 4:
    case "ORIGINAL_TX_TYPE_CLAIM":
      return OriginalTxType.ORIGINAL_TX_TYPE_CLAIM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OriginalTxType.UNRECOGNIZED;
  }
}

export function originalTxTypeToJSON(object: OriginalTxType): string {
  switch (object) {
    case OriginalTxType.ORIGINAL_TX_TYPE_TRANSFER:
      return "ORIGINAL_TX_TYPE_TRANSFER";
    case OriginalTxType.ORIGINAL_TX_TYPE_BOND:
      return "ORIGINAL_TX_TYPE_BOND";
    case OriginalTxType.ORIGINAL_TX_TYPE_UNBOND:
      return "ORIGINAL_TX_TYPE_UNBOND";
    case OriginalTxType.ORIGINAL_TX_TYPE_WITHDRAW:
      return "ORIGINAL_TX_TYPE_WITHDRAW";
    case OriginalTxType.ORIGINAL_TX_TYPE_CLAIM:
      return "ORIGINAL_TX_TYPE_CLAIM";
    default:
      return "UNKNOWN";
  }
}

export interface ChainEra {
  denom: string;
  era: number;
}

export interface Pool {
  denom: string;
  addrs: string[];
}

export interface TotalExpectedActive {
  denom: string;
  era: string;
  amount: string;
}

export interface BondPipeline {
  denom: string;
  pool: string;
  chunk?: LinkChunk;
}

export interface EraSnapshot {
  denom: string;
  shotIds: string[];
}

export interface PoolUnbond {
  denom: string;
  pool: string;
  era: number;
  unbondings: Unbonding[];
}

export interface EraUnbondLimit {
  denom: string;
  limit: number;
}

export interface PoolDetail {
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

export interface BondSnapshot {
  denom: string;
  pool: string;
  era: number;
  chunk?: LinkChunk;
  bondState: PoolBondState;
}

export interface ExchangeRate {
  denom: string;
  value: string;
}

export interface TotalProtocolFee {
  denom: string;
  value: string;
}

export interface EraExchangeRate {
  denom: string;
  era: number;
  value: string;
}

export interface UnbondRelayFee {
  denom: string;
  value?: Coin;
}

export interface Unbonding {
  unbonder: string;
  amount: string;
  recipient: string;
}

export interface UserUnlockChunk {
  pool: string;
  unlockEra: number;
  value: string;
  recipient: string;
}

export interface AccountUnbond {
  unbonder: string;
  denom: string;
  chunks: UserUnlockChunk[];
}

export interface BondRecord {
  denom: string;
  bonder: string;
  pool: string;
  txhash: string;
  amount: string;
  state: LiquidityBondState;
}

export interface Signature {
  denom: string;
  era: number;
  pool: string;
  txType: OriginalTxType;
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
  validators: string[];
}

const baseChainEra: object = { denom: "", era: 0 };

export const ChainEra = {
  encode(
    message: ChainEra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseChainEra } as ChainEra;
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

  fromJSON(object: any): ChainEra {
    const message = { ...baseChainEra } as ChainEra;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    return message;
  },

  toJSON(message: ChainEra): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainEra>): ChainEra {
    const message = { ...baseChainEra } as ChainEra;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    return message;
  },
};

const basePool: object = { denom: "", addrs: "" };

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
    const message = { ...basePool } as Pool;
    message.addrs = [];
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

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.addrs = (object.addrs ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.addrs) {
      obj.addrs = message.addrs.map((e) => e);
    } else {
      obj.addrs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    message.denom = object.denom ?? "";
    message.addrs = (object.addrs ?? []).map((e) => e);
    return message;
  },
};

const baseTotalExpectedActive: object = { denom: "", era: "", amount: "" };

export const TotalExpectedActive = {
  encode(
    message: TotalExpectedActive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.era !== "") {
      writer.uint32(18).string(message.era);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalExpectedActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.era = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalExpectedActive {
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? String(object.era) : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: TotalExpectedActive): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalExpectedActive>): TotalExpectedActive {
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive;
    message.denom = object.denom ?? "";
    message.era = object.era ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseBondPipeline: object = { denom: "", pool: "" };

export const BondPipeline = {
  encode(
    message: BondPipeline,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseBondPipeline } as BondPipeline;
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

  fromJSON(object: any): BondPipeline {
    const message = { ...baseBondPipeline } as BondPipeline;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? LinkChunk.fromJSON(object.chunk)
        : undefined;
    return message;
  },

  toJSON(message: BondPipeline): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.chunk !== undefined &&
      (obj.chunk = message.chunk ? LinkChunk.toJSON(message.chunk) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BondPipeline>): BondPipeline {
    const message = { ...baseBondPipeline } as BondPipeline;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? LinkChunk.fromPartial(object.chunk)
        : undefined;
    return message;
  },
};

const baseEraSnapshot: object = { denom: "", shotIds: "" };

export const EraSnapshot = {
  encode(
    message: EraSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseEraSnapshot } as EraSnapshot;
    message.shotIds = [];
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

  fromJSON(object: any): EraSnapshot {
    const message = { ...baseEraSnapshot } as EraSnapshot;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.shotIds = (object.shotIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: EraSnapshot): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.shotIds) {
      obj.shotIds = message.shotIds.map((e) => e);
    } else {
      obj.shotIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EraSnapshot>): EraSnapshot {
    const message = { ...baseEraSnapshot } as EraSnapshot;
    message.denom = object.denom ?? "";
    message.shotIds = (object.shotIds ?? []).map((e) => e);
    return message;
  },
};

const basePoolUnbond: object = { denom: "", pool: "", era: 0 };

export const PoolUnbond = {
  encode(
    message: PoolUnbond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }
    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era);
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolUnbond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolUnbond } as PoolUnbond;
    message.unbondings = [];
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
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolUnbond {
    const message = { ...basePoolUnbond } as PoolUnbond;
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

  toJSON(message: PoolUnbond): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<PoolUnbond>): PoolUnbond {
    const message = { ...basePoolUnbond } as PoolUnbond;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.era = object.era ?? 0;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      Unbonding.fromPartial(e)
    );
    return message;
  },
};

const baseEraUnbondLimit: object = { denom: "", limit: 0 };

export const EraUnbondLimit = {
  encode(
    message: EraUnbondLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit;
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

  fromJSON(object: any): EraUnbondLimit {
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit;
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

  toJSON(message: EraUnbondLimit): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<EraUnbondLimit>): EraUnbondLimit {
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit;
    message.denom = object.denom ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

const basePoolDetail: object = {
  denom: "",
  pool: "",
  subAccounts: "",
  threshold: 0,
};

export const PoolDetail = {
  encode(
    message: PoolDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...basePoolDetail } as PoolDetail;
    message.subAccounts = [];
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

  fromJSON(object: any): PoolDetail {
    const message = { ...basePoolDetail } as PoolDetail;
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

  toJSON(message: PoolDetail): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<PoolDetail>): PoolDetail {
    const message = { ...basePoolDetail } as PoolDetail;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.subAccounts = (object.subAccounts ?? []).map((e) => e);
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

const baseLinkChunk: object = { bond: "", unbond: "", active: "" };

export const LinkChunk = {
  encode(
    message: LinkChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseLinkChunk } as LinkChunk;
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

  fromJSON(object: any): LinkChunk {
    const message = { ...baseLinkChunk } as LinkChunk;
    message.bond =
      object.bond !== undefined && object.bond !== null
        ? String(object.bond)
        : "";
    message.unbond =
      object.unbond !== undefined && object.unbond !== null
        ? String(object.unbond)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? String(object.active)
        : "";
    return message;
  },

  toJSON(message: LinkChunk): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond);
    message.unbond !== undefined && (obj.unbond = message.unbond);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<LinkChunk>): LinkChunk {
    const message = { ...baseLinkChunk } as LinkChunk;
    message.bond = object.bond ?? "";
    message.unbond = object.unbond ?? "";
    message.active = object.active ?? "";
    return message;
  },
};

const baseBondSnapshot: object = { denom: "", pool: "", era: 0, bondState: 0 };

export const BondSnapshot = {
  encode(
    message: BondSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseBondSnapshot } as BondSnapshot;
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
          message.bondState = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondSnapshot {
    const message = { ...baseBondSnapshot } as BondSnapshot;
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
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? LinkChunk.fromJSON(object.chunk)
        : undefined;
    message.bondState =
      object.bondState !== undefined && object.bondState !== null
        ? poolBondStateFromJSON(object.bondState)
        : 0;
    return message;
  },

  toJSON(message: BondSnapshot): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pool !== undefined && (obj.pool = message.pool);
    message.era !== undefined && (obj.era = message.era);
    message.chunk !== undefined &&
      (obj.chunk = message.chunk ? LinkChunk.toJSON(message.chunk) : undefined);
    message.bondState !== undefined &&
      (obj.bondState = poolBondStateToJSON(message.bondState));
    return obj;
  },

  fromPartial(object: DeepPartial<BondSnapshot>): BondSnapshot {
    const message = { ...baseBondSnapshot } as BondSnapshot;
    message.denom = object.denom ?? "";
    message.pool = object.pool ?? "";
    message.era = object.era ?? 0;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? LinkChunk.fromPartial(object.chunk)
        : undefined;
    message.bondState = object.bondState ?? 0;
    return message;
  },
};

const baseExchangeRate: object = { denom: "", value: "" };

export const ExchangeRate = {
  encode(
    message: ExchangeRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseExchangeRate } as ExchangeRate;
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

  fromJSON(object: any): ExchangeRate {
    const message = { ...baseExchangeRate } as ExchangeRate;
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

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRate>): ExchangeRate {
    const message = { ...baseExchangeRate } as ExchangeRate;
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseTotalProtocolFee: object = { denom: "", value: "" };

export const TotalProtocolFee = {
  encode(
    message: TotalProtocolFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseTotalProtocolFee } as TotalProtocolFee;
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

  fromJSON(object: any): TotalProtocolFee {
    const message = { ...baseTotalProtocolFee } as TotalProtocolFee;
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

  toJSON(message: TotalProtocolFee): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalProtocolFee>): TotalProtocolFee {
    const message = { ...baseTotalProtocolFee } as TotalProtocolFee;
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEraExchangeRate: object = { denom: "", era: 0, value: "" };

export const EraExchangeRate = {
  encode(
    message: EraExchangeRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseEraExchangeRate } as EraExchangeRate;
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

  fromJSON(object: any): EraExchangeRate {
    const message = { ...baseEraExchangeRate } as EraExchangeRate;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.era =
      object.era !== undefined && object.era !== null ? Number(object.era) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: EraExchangeRate): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<EraExchangeRate>): EraExchangeRate {
    const message = { ...baseEraExchangeRate } as EraExchangeRate;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

const baseUnbondRelayFee: object = { denom: "" };

export const UnbondRelayFee = {
  encode(
    message: UnbondRelayFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseUnbondRelayFee } as UnbondRelayFee;
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

  fromJSON(object: any): UnbondRelayFee {
    const message = { ...baseUnbondRelayFee } as UnbondRelayFee;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: UnbondRelayFee): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UnbondRelayFee>): UnbondRelayFee {
    const message = { ...baseUnbondRelayFee } as UnbondRelayFee;
    message.denom = object.denom ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseUnbonding: object = { unbonder: "", amount: "", recipient: "" };

export const Unbonding = {
  encode(
    message: Unbonding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseUnbonding } as Unbonding;
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

  fromJSON(object: any): Unbonding {
    const message = { ...baseUnbonding } as Unbonding;
    message.unbonder =
      object.unbonder !== undefined && object.unbonder !== null
        ? String(object.unbonder)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    return message;
  },

  toJSON(message: Unbonding): unknown {
    const obj: any = {};
    message.unbonder !== undefined && (obj.unbonder = message.unbonder);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<Unbonding>): Unbonding {
    const message = { ...baseUnbonding } as Unbonding;
    message.unbonder = object.unbonder ?? "";
    message.amount = object.amount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

const baseUserUnlockChunk: object = {
  pool: "",
  unlockEra: 0,
  value: "",
  recipient: "",
};

export const UserUnlockChunk = {
  encode(
    message: UserUnlockChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    if (message.unlockEra !== 0) {
      writer.uint32(16).uint32(message.unlockEra);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUnlockChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.string();
          break;
        case 2:
          message.unlockEra = reader.uint32();
          break;
        case 3:
          message.value = reader.string();
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

  fromJSON(object: any): UserUnlockChunk {
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.unlockEra =
      object.unlockEra !== undefined && object.unlockEra !== null
        ? Number(object.unlockEra)
        : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    return message;
  },

  toJSON(message: UserUnlockChunk): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool);
    message.unlockEra !== undefined && (obj.unlockEra = message.unlockEra);
    message.value !== undefined && (obj.value = message.value);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<UserUnlockChunk>): UserUnlockChunk {
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk;
    message.pool = object.pool ?? "";
    message.unlockEra = object.unlockEra ?? 0;
    message.value = object.value ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

const baseAccountUnbond: object = { unbonder: "", denom: "" };

export const AccountUnbond = {
  encode(
    message: AccountUnbond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unbonder !== "") {
      writer.uint32(10).string(message.unbonder);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    for (const v of message.chunks) {
      UserUnlockChunk.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnbond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountUnbond } as AccountUnbond;
    message.chunks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonder = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.chunks.push(UserUnlockChunk.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnbond {
    const message = { ...baseAccountUnbond } as AccountUnbond;
    message.unbonder =
      object.unbonder !== undefined && object.unbonder !== null
        ? String(object.unbonder)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.chunks = (object.chunks ?? []).map((e: any) =>
      UserUnlockChunk.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AccountUnbond): unknown {
    const obj: any = {};
    message.unbonder !== undefined && (obj.unbonder = message.unbonder);
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) =>
        e ? UserUnlockChunk.toJSON(e) : undefined
      );
    } else {
      obj.chunks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnbond>): AccountUnbond {
    const message = { ...baseAccountUnbond } as AccountUnbond;
    message.unbonder = object.unbonder ?? "";
    message.denom = object.denom ?? "";
    message.chunks = (object.chunks ?? []).map((e) =>
      UserUnlockChunk.fromPartial(e)
    );
    return message;
  },
};

const baseBondRecord: object = {
  denom: "",
  bonder: "",
  pool: "",
  txhash: "",
  amount: "",
  state: 0,
};

export const BondRecord = {
  encode(
    message: BondRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseBondRecord } as BondRecord;
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
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondRecord {
    const message = { ...baseBondRecord } as BondRecord;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.bonder =
      object.bonder !== undefined && object.bonder !== null
        ? String(object.bonder)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? String(object.pool)
        : "";
    message.txhash =
      object.txhash !== undefined && object.txhash !== null
        ? String(object.txhash)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.state =
      object.state !== undefined && object.state !== null
        ? liquidityBondStateFromJSON(object.state)
        : 0;
    return message;
  },

  toJSON(message: BondRecord): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.bonder !== undefined && (obj.bonder = message.bonder);
    message.pool !== undefined && (obj.pool = message.pool);
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.amount !== undefined && (obj.amount = message.amount);
    message.state !== undefined &&
      (obj.state = liquidityBondStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<BondRecord>): BondRecord {
    const message = { ...baseBondRecord } as BondRecord;
    message.denom = object.denom ?? "";
    message.bonder = object.bonder ?? "";
    message.pool = object.pool ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

const baseSignature: object = {
  denom: "",
  era: 0,
  pool: "",
  txType: 0,
  propId: "",
  sigs: "",
};

export const Signature = {
  encode(
    message: Signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseSignature } as Signature;
    message.sigs = [];
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
          message.txType = reader.int32() as any;
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

  fromJSON(object: any): Signature {
    const message = { ...baseSignature } as Signature;
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
    message.sigs = (object.sigs ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Signature): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.pool !== undefined && (obj.pool = message.pool);
    message.txType !== undefined &&
      (obj.txType = originalTxTypeToJSON(message.txType));
    message.propId !== undefined && (obj.propId = message.propId);
    if (message.sigs) {
      obj.sigs = message.sigs.map((e) => e);
    } else {
      obj.sigs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Signature>): Signature {
    const message = { ...baseSignature } as Signature;
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.pool = object.pool ?? "";
    message.txType = object.txType ?? 0;
    message.propId = object.propId ?? "";
    message.sigs = (object.sigs ?? []).map((e) => e);
    return message;
  },
};

const baseRParams: object = {
  denom: "",
  gasPrice: "",
  eraSeconds: 0,
  offset: 0,
  bondingDuration: 0,
  leastBond: "",
  validators: "",
};

export const RParams = {
  encode(
    message: RParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    for (const v of message.validators) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRParams } as RParams;
    message.validators = [];
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
        case 7:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RParams {
    const message = { ...baseRParams } as RParams;
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

  toJSON(message: RParams): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<RParams>): RParams {
    const message = { ...baseRParams } as RParams;
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

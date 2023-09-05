/* eslint-disable */
import {
  BondAction,
  bondActionFromJSON,
  bondActionToJSON,
} from "../ledger/ledger";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stafihub.stafihub.ledger";

export interface SetChainEraProposal {
  proposer: string;
  denom: string;
  era: number;
  propId: string;
}

export interface BondReportProposal {
  proposer: string;
  denom: string;
  shotId: string;
  action: BondAction;
  propId: string;
}

export interface BondAndReportActiveProposal {
  proposer: string;
  denom: string;
  shotId: string;
  action: BondAction;
  staked: string;
  unstaked: string;
  propId: string;
}

export interface ActiveReportProposal {
  proposer: string;
  denom: string;
  shotId: string;
  staked: string;
  unstaked: string;
  propId: string;
}

export interface WithdrawReportProposal {
  proposer: string;
  denom: string;
  shotId: string;
  propId: string;
}

export interface TransferReportProposal {
  proposer: string;
  denom: string;
  shotId: string;
  propId: string;
}

export interface ExecuteBondProposal {
  proposer: string;
  denom: string;
  bonder: string;
  pool: string;
  txhash: string;
  amount: string;
  propId: string;
}

const baseSetChainEraProposal: object = {
  proposer: "",
  denom: "",
  era: 0,
  propId: "",
};

export const SetChainEraProposal = {
  encode(
    message: SetChainEraProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era);
    }
    if (message.propId !== "") {
      writer.uint32(34).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetChainEraProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetChainEraProposal } as SetChainEraProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.era = reader.uint32();
          break;
        case 4:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetChainEraProposal {
    const message = { ...baseSetChainEraProposal } as SetChainEraProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era);
    } else {
      message.era = 0;
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: SetChainEraProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.era !== undefined && (obj.era = message.era);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(object: DeepPartial<SetChainEraProposal>): SetChainEraProposal {
    const message = { ...baseSetChainEraProposal } as SetChainEraProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era;
    } else {
      message.era = 0;
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseBondReportProposal: object = {
  proposer: "",
  denom: "",
  shotId: "",
  action: 0,
  propId: "",
};

export const BondReportProposal = {
  encode(
    message: BondReportProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.shotId !== "") {
      writer.uint32(26).string(message.shotId);
    }
    if (message.action !== 0) {
      writer.uint32(32).int32(message.action);
    }
    if (message.propId !== "") {
      writer.uint32(42).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BondReportProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBondReportProposal } as BondReportProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.shotId = reader.string();
          break;
        case 4:
          message.action = reader.int32() as any;
          break;
        case 5:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondReportProposal {
    const message = { ...baseBondReportProposal } as BondReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = String(object.shotId);
    } else {
      message.shotId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = bondActionFromJSON(object.action);
    } else {
      message.action = 0;
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: BondReportProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shotId !== undefined && (obj.shotId = message.shotId);
    message.action !== undefined &&
      (obj.action = bondActionToJSON(message.action));
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(object: DeepPartial<BondReportProposal>): BondReportProposal {
    const message = { ...baseBondReportProposal } as BondReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = object.shotId;
    } else {
      message.shotId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseBondAndReportActiveProposal: object = {
  proposer: "",
  denom: "",
  shotId: "",
  action: 0,
  staked: "",
  unstaked: "",
  propId: "",
};

export const BondAndReportActiveProposal = {
  encode(
    message: BondAndReportActiveProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.shotId !== "") {
      writer.uint32(26).string(message.shotId);
    }
    if (message.action !== 0) {
      writer.uint32(32).int32(message.action);
    }
    if (message.staked !== "") {
      writer.uint32(42).string(message.staked);
    }
    if (message.unstaked !== "") {
      writer.uint32(50).string(message.unstaked);
    }
    if (message.propId !== "") {
      writer.uint32(58).string(message.propId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BondAndReportActiveProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBondAndReportActiveProposal,
    } as BondAndReportActiveProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.shotId = reader.string();
          break;
        case 4:
          message.action = reader.int32() as any;
          break;
        case 5:
          message.staked = reader.string();
          break;
        case 6:
          message.unstaked = reader.string();
          break;
        case 7:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondAndReportActiveProposal {
    const message = {
      ...baseBondAndReportActiveProposal,
    } as BondAndReportActiveProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = String(object.shotId);
    } else {
      message.shotId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = bondActionFromJSON(object.action);
    } else {
      message.action = 0;
    }
    if (object.staked !== undefined && object.staked !== null) {
      message.staked = String(object.staked);
    } else {
      message.staked = "";
    }
    if (object.unstaked !== undefined && object.unstaked !== null) {
      message.unstaked = String(object.unstaked);
    } else {
      message.unstaked = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: BondAndReportActiveProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shotId !== undefined && (obj.shotId = message.shotId);
    message.action !== undefined &&
      (obj.action = bondActionToJSON(message.action));
    message.staked !== undefined && (obj.staked = message.staked);
    message.unstaked !== undefined && (obj.unstaked = message.unstaked);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BondAndReportActiveProposal>
  ): BondAndReportActiveProposal {
    const message = {
      ...baseBondAndReportActiveProposal,
    } as BondAndReportActiveProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = object.shotId;
    } else {
      message.shotId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    if (object.staked !== undefined && object.staked !== null) {
      message.staked = object.staked;
    } else {
      message.staked = "";
    }
    if (object.unstaked !== undefined && object.unstaked !== null) {
      message.unstaked = object.unstaked;
    } else {
      message.unstaked = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseActiveReportProposal: object = {
  proposer: "",
  denom: "",
  shotId: "",
  staked: "",
  unstaked: "",
  propId: "",
};

export const ActiveReportProposal = {
  encode(
    message: ActiveReportProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.shotId !== "") {
      writer.uint32(26).string(message.shotId);
    }
    if (message.staked !== "") {
      writer.uint32(34).string(message.staked);
    }
    if (message.unstaked !== "") {
      writer.uint32(42).string(message.unstaked);
    }
    if (message.propId !== "") {
      writer.uint32(50).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActiveReportProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActiveReportProposal } as ActiveReportProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.shotId = reader.string();
          break;
        case 4:
          message.staked = reader.string();
          break;
        case 5:
          message.unstaked = reader.string();
          break;
        case 6:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveReportProposal {
    const message = { ...baseActiveReportProposal } as ActiveReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = String(object.shotId);
    } else {
      message.shotId = "";
    }
    if (object.staked !== undefined && object.staked !== null) {
      message.staked = String(object.staked);
    } else {
      message.staked = "";
    }
    if (object.unstaked !== undefined && object.unstaked !== null) {
      message.unstaked = String(object.unstaked);
    } else {
      message.unstaked = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: ActiveReportProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shotId !== undefined && (obj.shotId = message.shotId);
    message.staked !== undefined && (obj.staked = message.staked);
    message.unstaked !== undefined && (obj.unstaked = message.unstaked);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveReportProposal>): ActiveReportProposal {
    const message = { ...baseActiveReportProposal } as ActiveReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = object.shotId;
    } else {
      message.shotId = "";
    }
    if (object.staked !== undefined && object.staked !== null) {
      message.staked = object.staked;
    } else {
      message.staked = "";
    }
    if (object.unstaked !== undefined && object.unstaked !== null) {
      message.unstaked = object.unstaked;
    } else {
      message.unstaked = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseWithdrawReportProposal: object = {
  proposer: "",
  denom: "",
  shotId: "",
  propId: "",
};

export const WithdrawReportProposal = {
  encode(
    message: WithdrawReportProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.shotId !== "") {
      writer.uint32(26).string(message.shotId);
    }
    if (message.propId !== "") {
      writer.uint32(34).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WithdrawReportProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawReportProposal } as WithdrawReportProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.shotId = reader.string();
          break;
        case 4:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawReportProposal {
    const message = { ...baseWithdrawReportProposal } as WithdrawReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = String(object.shotId);
    } else {
      message.shotId = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: WithdrawReportProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shotId !== undefined && (obj.shotId = message.shotId);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawReportProposal>
  ): WithdrawReportProposal {
    const message = { ...baseWithdrawReportProposal } as WithdrawReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = object.shotId;
    } else {
      message.shotId = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseTransferReportProposal: object = {
  proposer: "",
  denom: "",
  shotId: "",
  propId: "",
};

export const TransferReportProposal = {
  encode(
    message: TransferReportProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.shotId !== "") {
      writer.uint32(26).string(message.shotId);
    }
    if (message.propId !== "") {
      writer.uint32(34).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransferReportProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransferReportProposal } as TransferReportProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.shotId = reader.string();
          break;
        case 4:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferReportProposal {
    const message = { ...baseTransferReportProposal } as TransferReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = String(object.shotId);
    } else {
      message.shotId = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: TransferReportProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.shotId !== undefined && (obj.shotId = message.shotId);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransferReportProposal>
  ): TransferReportProposal {
    const message = { ...baseTransferReportProposal } as TransferReportProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.shotId !== undefined && object.shotId !== null) {
      message.shotId = object.shotId;
    } else {
      message.shotId = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

const baseExecuteBondProposal: object = {
  proposer: "",
  denom: "",
  bonder: "",
  pool: "",
  txhash: "",
  amount: "",
  propId: "",
};

export const ExecuteBondProposal = {
  encode(
    message: ExecuteBondProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.bonder !== "") {
      writer.uint32(26).string(message.bonder);
    }
    if (message.pool !== "") {
      writer.uint32(34).string(message.pool);
    }
    if (message.txhash !== "") {
      writer.uint32(58).string(message.txhash);
    }
    if (message.amount !== "") {
      writer.uint32(66).string(message.amount);
    }
    if (message.propId !== "") {
      writer.uint32(74).string(message.propId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExecuteBondProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecuteBondProposal } as ExecuteBondProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.bonder = reader.string();
          break;
        case 4:
          message.pool = reader.string();
          break;
        case 7:
          message.txhash = reader.string();
          break;
        case 8:
          message.amount = reader.string();
          break;
        case 9:
          message.propId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteBondProposal {
    const message = { ...baseExecuteBondProposal } as ExecuteBondProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.bonder !== undefined && object.bonder !== null) {
      message.bonder = String(object.bonder);
    } else {
      message.bonder = "";
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool);
    } else {
      message.pool = "";
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = String(object.txhash);
    } else {
      message.txhash = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = String(object.propId);
    } else {
      message.propId = "";
    }
    return message;
  },

  toJSON(message: ExecuteBondProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.bonder !== undefined && (obj.bonder = message.bonder);
    message.pool !== undefined && (obj.pool = message.pool);
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.amount !== undefined && (obj.amount = message.amount);
    message.propId !== undefined && (obj.propId = message.propId);
    return obj;
  },

  fromPartial(object: DeepPartial<ExecuteBondProposal>): ExecuteBondProposal {
    const message = { ...baseExecuteBondProposal } as ExecuteBondProposal;
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.bonder !== undefined && object.bonder !== null) {
      message.bonder = object.bonder;
    } else {
      message.bonder = "";
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool;
    } else {
      message.pool = "";
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash;
    } else {
      message.txhash = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId;
    } else {
      message.propId = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

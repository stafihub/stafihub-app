import { BondAction, BondActionSDKType, LiquidityBondState, LiquidityBondStateSDKType, OriginalTxType, OriginalTxTypeSDKType } from "./ledger";
import { Any, AnySDKType } from "../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface SetChainEraProposal {
  proposer: string;
  denom: string;
  era: number;
  propId: string;
}
export interface SetChainEraProposalSDKType {
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
export interface BondReportProposalSDKType {
  proposer: string;
  denom: string;
  shotId: string;
  action: BondActionSDKType;
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
export interface ActiveReportProposalSDKType {
  proposer: string;
  denom: string;
  shotId: string;
  staked: string;
  unstaked: string;
  propId: string;
}
export interface TransferReportProposal {
  proposer: string;
  denom: string;
  shotId: string;
  propId: string;
}
export interface TransferReportProposalSDKType {
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
  state: LiquidityBondState;
}
export interface ExecuteBondProposalSDKType {
  proposer: string;
  denom: string;
  bonder: string;
  pool: string;
  txhash: string;
  amount: string;
  propId: string;
  state: LiquidityBondStateSDKType;
}
export interface InterchainTxProposal {
  proposer: string;
  denom: string;
  poolAddress: string;
  era: number;
  txType: OriginalTxType;
  factor: number;
  msgs: Any[];
  propId: string;
}
export interface InterchainTxProposalSDKType {
  proposer: string;
  denom: string;
  poolAddress: string;
  era: number;
  txType: OriginalTxTypeSDKType;
  factor: number;
  msgs: AnySDKType[];
  propId: string;
}

function createBaseSetChainEraProposal(): SetChainEraProposal {
  return {
    proposer: "",
    denom: "",
    era: 0,
    propId: ""
  };
}

export const SetChainEraProposal = {
  encode(message: SetChainEraProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetChainEraProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetChainEraProposal();

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

  fromPartial(object: DeepPartial<SetChainEraProposal>): SetChainEraProposal {
    const message = createBaseSetChainEraProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.era = object.era ?? 0;
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseBondReportProposal(): BondReportProposal {
  return {
    proposer: "",
    denom: "",
    shotId: "",
    action: 0,
    propId: ""
  };
}

export const BondReportProposal = {
  encode(message: BondReportProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BondReportProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondReportProposal();

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
          message.action = (reader.int32() as any);
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

  fromPartial(object: DeepPartial<BondReportProposal>): BondReportProposal {
    const message = createBaseBondReportProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.shotId = object.shotId ?? "";
    message.action = object.action ?? 0;
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseActiveReportProposal(): ActiveReportProposal {
  return {
    proposer: "",
    denom: "",
    shotId: "",
    staked: "",
    unstaked: "",
    propId: ""
  };
}

export const ActiveReportProposal = {
  encode(message: ActiveReportProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveReportProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveReportProposal();

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

  fromPartial(object: DeepPartial<ActiveReportProposal>): ActiveReportProposal {
    const message = createBaseActiveReportProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.shotId = object.shotId ?? "";
    message.staked = object.staked ?? "";
    message.unstaked = object.unstaked ?? "";
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseTransferReportProposal(): TransferReportProposal {
  return {
    proposer: "",
    denom: "",
    shotId: "",
    propId: ""
  };
}

export const TransferReportProposal = {
  encode(message: TransferReportProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferReportProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferReportProposal();

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

  fromPartial(object: DeepPartial<TransferReportProposal>): TransferReportProposal {
    const message = createBaseTransferReportProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.shotId = object.shotId ?? "";
    message.propId = object.propId ?? "";
    return message;
  }

};

function createBaseExecuteBondProposal(): ExecuteBondProposal {
  return {
    proposer: "",
    denom: "",
    bonder: "",
    pool: "",
    txhash: "",
    amount: "",
    propId: "",
    state: 0
  };
}

export const ExecuteBondProposal = {
  encode(message: ExecuteBondProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(42).string(message.txhash);
    }

    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }

    if (message.propId !== "") {
      writer.uint32(58).string(message.propId);
    }

    if (message.state !== 0) {
      writer.uint32(64).int32(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteBondProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteBondProposal();

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

        case 5:
          message.txhash = reader.string();
          break;

        case 6:
          message.amount = reader.string();
          break;

        case 7:
          message.propId = reader.string();
          break;

        case 8:
          message.state = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExecuteBondProposal>): ExecuteBondProposal {
    const message = createBaseExecuteBondProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.bonder = object.bonder ?? "";
    message.pool = object.pool ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount ?? "";
    message.propId = object.propId ?? "";
    message.state = object.state ?? 0;
    return message;
  }

};

function createBaseInterchainTxProposal(): InterchainTxProposal {
  return {
    proposer: "",
    denom: "",
    poolAddress: "",
    era: 0,
    txType: 0,
    factor: 0,
    msgs: [],
    propId: ""
  };
}

export const InterchainTxProposal = {
  encode(message: InterchainTxProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    if (message.era !== 0) {
      writer.uint32(32).uint32(message.era);
    }

    if (message.txType !== 0) {
      writer.uint32(40).int32(message.txType);
    }

    if (message.factor !== 0) {
      writer.uint32(48).uint32(message.factor);
    }

    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.propId !== "") {
      writer.uint32(66).string(message.propId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainTxProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainTxProposal();

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
          message.poolAddress = reader.string();
          break;

        case 4:
          message.era = reader.uint32();
          break;

        case 5:
          message.txType = (reader.int32() as any);
          break;

        case 6:
          message.factor = reader.uint32();
          break;

        case 7:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;

        case 8:
          message.propId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InterchainTxProposal>): InterchainTxProposal {
    const message = createBaseInterchainTxProposal();
    message.proposer = object.proposer ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.era = object.era ?? 0;
    message.txType = object.txType ?? 0;
    message.factor = object.factor ?? 0;
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.propId = object.propId ?? "";
    return message;
  }

};
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stafihub.stafihub.bridge";

export interface Proposal {
  content?: ProposalContent;
  executed: boolean;
  voters: string[];
}

export interface ProposalContent {
  amount: string;
  receiver: string;
}

const baseProposal: object = { executed: false, voters: "" };

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      ProposalContent.encode(
        message.content,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.executed === true) {
      writer.uint32(16).bool(message.executed);
    }
    for (const v of message.voters) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    message.voters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = ProposalContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.executed = reader.bool();
          break;
        case 3:
          message.voters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.content =
      object.content !== undefined && object.content !== null
        ? ProposalContent.fromJSON(object.content)
        : undefined;
    message.executed =
      object.executed !== undefined && object.executed !== null
        ? Boolean(object.executed)
        : false;
    message.voters = (object.voters ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content
        ? ProposalContent.toJSON(message.content)
        : undefined);
    message.executed !== undefined && (obj.executed = message.executed);
    if (message.voters) {
      obj.voters = message.voters.map((e) => e);
    } else {
      obj.voters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.content =
      object.content !== undefined && object.content !== null
        ? ProposalContent.fromPartial(object.content)
        : undefined;
    message.executed = object.executed ?? false;
    message.voters = (object.voters ?? []).map((e) => e);
    return message;
  },
};

const baseProposalContent: object = { amount: "", receiver: "" };

export const ProposalContent = {
  encode(
    message: ProposalContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposalContent } as ProposalContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
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

  fromJSON(object: any): ProposalContent {
    const message = { ...baseProposalContent } as ProposalContent;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    return message;
  },

  toJSON(message: ProposalContent): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<ProposalContent>): ProposalContent {
    const message = { ...baseProposalContent } as ProposalContent;
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
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

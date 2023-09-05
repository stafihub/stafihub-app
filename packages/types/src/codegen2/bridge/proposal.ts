import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface Proposal {
  content?: ProposalContent;
  executed: boolean;
  voters: string[];
}
export interface ProposalSDKType {
  content?: ProposalContentSDKType;
  executed: boolean;
  voters: string[];
}
export interface ProposalContent {
  amount: string;
  receiver: string;
}
export interface ProposalContentSDKType {
  amount: string;
  receiver: string;
}

function createBaseProposal(): Proposal {
  return {
    content: undefined,
    executed: false,
    voters: []
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      ProposalContent.encode(message.content, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseProposal();

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

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.content = object.content !== undefined && object.content !== null ? ProposalContent.fromPartial(object.content) : undefined;
    message.executed = object.executed ?? false;
    message.voters = object.voters?.map(e => e) || [];
    return message;
  }

};

function createBaseProposalContent(): ProposalContent {
  return {
    amount: "",
    receiver: ""
  };
}

export const ProposalContent = {
  encode(message: ProposalContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseProposalContent();

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

  fromPartial(object: DeepPartial<ProposalContent>): ProposalContent {
    const message = createBaseProposalContent();
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};
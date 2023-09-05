import { Params, ParamsSDKType } from "./params";
import { Proposal, ProposalSDKType } from "./proposal";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
export enum DenomType {
  UNSPECIFIED = 0,
  NATIVE = 1,
  EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export enum DenomTypeSDKType {
  UNSPECIFIED = 0,
  NATIVE = 1,
  EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export function denomTypeFromJSON(object: any): DenomType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return DenomType.UNSPECIFIED;

    case 1:
    case "NATIVE":
      return DenomType.NATIVE;

    case 2:
    case "EXTERNAL":
      return DenomType.EXTERNAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DenomType.UNRECOGNIZED;
  }
}
export function denomTypeToJSON(object: DenomType): string {
  switch (object) {
    case DenomType.UNSPECIFIED:
      return "UNSPECIFIED";

    case DenomType.NATIVE:
      return "NATIVE";

    case DenomType.EXTERNAL:
      return "EXTERNAL";

    case DenomType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GenesisState defines the bridge module's genesis state. */

export interface GenesisState {
  params?: Params;
  depositCountList: DepositCount[];
  proposalList: GenesisProposal[];
  relayFeeList: RelayFee[];
  chainIdList: number[];
  relayFeeReceiver: string;
  resourceIdToDenomList: ResourceIdToDenom[];
  bannedDenomList: BannedDenom[];
}
/** GenesisState defines the bridge module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  depositCountList: DepositCountSDKType[];
  proposalList: GenesisProposalSDKType[];
  relayFeeList: RelayFeeSDKType[];
  chainIdList: number[];
  relayFeeReceiver: string;
  resourceIdToDenomList: ResourceIdToDenomSDKType[];
  bannedDenomList: BannedDenomSDKType[];
}
export interface DepositCount {
  chainId: number;
  count: Long;
}
export interface DepositCountSDKType {
  chainId: number;
  count: Long;
}
export interface GenesisProposal {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  proposal?: Proposal;
}
export interface GenesisProposalSDKType {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  proposal?: ProposalSDKType;
}
export interface RelayFee {
  chainId: number;
  value?: Coin;
}
export interface RelayFeeSDKType {
  chainId: number;
  value?: CoinSDKType;
}
export interface BannedDenom {
  chainId: number;
  denom: string;
}
export interface BannedDenomSDKType {
  chainId: number;
  denom: string;
}
export interface ResourceIdToDenom {
  resourceId: string;
  denom: string;
  denomType: DenomType;
}
export interface ResourceIdToDenomSDKType {
  resourceId: string;
  denom: string;
  denomType: DenomTypeSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    depositCountList: [],
    proposalList: [],
    relayFeeList: [],
    chainIdList: [],
    relayFeeReceiver: "",
    resourceIdToDenomList: [],
    bannedDenomList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.depositCountList) {
      DepositCount.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.proposalList) {
      GenesisProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.relayFeeList) {
      RelayFee.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    writer.uint32(42).fork();

    for (const v of message.chainIdList) {
      writer.uint32(v);
    }

    writer.ldelim();

    if (message.relayFeeReceiver !== "") {
      writer.uint32(50).string(message.relayFeeReceiver);
    }

    for (const v of message.resourceIdToDenomList) {
      ResourceIdToDenom.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.bannedDenomList) {
      BannedDenom.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.depositCountList.push(DepositCount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposalList.push(GenesisProposal.decode(reader, reader.uint32()));
          break;

        case 4:
          message.relayFeeList.push(RelayFee.decode(reader, reader.uint32()));
          break;

        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.chainIdList.push(reader.uint32());
            }
          } else {
            message.chainIdList.push(reader.uint32());
          }

          break;

        case 6:
          message.relayFeeReceiver = reader.string();
          break;

        case 7:
          message.resourceIdToDenomList.push(ResourceIdToDenom.decode(reader, reader.uint32()));
          break;

        case 8:
          message.bannedDenomList.push(BannedDenom.decode(reader, reader.uint32()));
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
    message.depositCountList = object.depositCountList?.map(e => DepositCount.fromPartial(e)) || [];
    message.proposalList = object.proposalList?.map(e => GenesisProposal.fromPartial(e)) || [];
    message.relayFeeList = object.relayFeeList?.map(e => RelayFee.fromPartial(e)) || [];
    message.chainIdList = object.chainIdList?.map(e => e) || [];
    message.relayFeeReceiver = object.relayFeeReceiver ?? "";
    message.resourceIdToDenomList = object.resourceIdToDenomList?.map(e => ResourceIdToDenom.fromPartial(e)) || [];
    message.bannedDenomList = object.bannedDenomList?.map(e => BannedDenom.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDepositCount(): DepositCount {
  return {
    chainId: 0,
    count: Long.UZERO
  };
}

export const DepositCount = {
  encode(message: DepositCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositCount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;

        case 2:
          message.count = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DepositCount>): DepositCount {
    const message = createBaseDepositCount();
    message.chainId = object.chainId ?? 0;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }

};

function createBaseGenesisProposal(): GenesisProposal {
  return {
    chainId: 0,
    depositNonce: Long.UZERO,
    resourceId: "",
    proposal: undefined
  };
}

export const GenesisProposal = {
  encode(message: GenesisProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    if (!message.depositNonce.isZero()) {
      writer.uint32(16).uint64(message.depositNonce);
    }

    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }

    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;

        case 2:
          message.depositNonce = (reader.uint64() as Long);
          break;

        case 3:
          message.resourceId = reader.string();
          break;

        case 4:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisProposal>): GenesisProposal {
    const message = createBaseGenesisProposal();
    message.chainId = object.chainId ?? 0;
    message.depositNonce = object.depositNonce !== undefined && object.depositNonce !== null ? Long.fromValue(object.depositNonce) : Long.UZERO;
    message.resourceId = object.resourceId ?? "";
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseRelayFee(): RelayFee {
  return {
    chainId: 0,
    value: undefined
  };
}

export const RelayFee = {
  encode(message: RelayFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
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

  fromPartial(object: DeepPartial<RelayFee>): RelayFee {
    const message = createBaseRelayFee();
    message.chainId = object.chainId ?? 0;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseBannedDenom(): BannedDenom {
  return {
    chainId: 0,
    denom: ""
  };
}

export const BannedDenom = {
  encode(message: BannedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BannedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBannedDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
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

  fromPartial(object: DeepPartial<BannedDenom>): BannedDenom {
    const message = createBaseBannedDenom();
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseResourceIdToDenom(): ResourceIdToDenom {
  return {
    resourceId: "",
    denom: "",
    denomType: 0
  };
}

export const ResourceIdToDenom = {
  encode(message: ResourceIdToDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.denomType !== 0) {
      writer.uint32(24).int32(message.denomType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceIdToDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceIdToDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.denomType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResourceIdToDenom>): ResourceIdToDenom {
    const message = createBaseResourceIdToDenom();
    message.resourceId = object.resourceId ?? "";
    message.denom = object.denom ?? "";
    message.denomType = object.denomType ?? 0;
    return message;
  }

};
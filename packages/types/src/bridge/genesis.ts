/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../bridge/params";
import { Proposal } from "../bridge/proposal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.bridge";

export enum DenomType {
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
    default:
      return "UNKNOWN";
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
  /** this line is used by starport scaffolding # genesis/proto/state */
  bannedDenomList: BannedDenom[];
}

export interface DepositCount {
  chainId: number;
  count: Long;
}

export interface GenesisProposal {
  chainId: number;
  depositNonce: Long;
  resourceId: string;
  proposal?: Proposal;
}

export interface RelayFee {
  chainId: number;
  value?: Coin;
}

export interface BannedDenom {
  chainId: number;
  denom: string;
}

export interface ResourceIdToDenom {
  resourceId: string;
  denom: string;
  denomType: DenomType;
}

const baseGenesisState: object = { chainIdList: 0, relayFeeReceiver: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseGenesisState } as GenesisState;
    message.depositCountList = [];
    message.proposalList = [];
    message.relayFeeList = [];
    message.chainIdList = [];
    message.resourceIdToDenomList = [];
    message.bannedDenomList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositCountList.push(
            DepositCount.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.proposalList.push(
            GenesisProposal.decode(reader, reader.uint32())
          );
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
          message.resourceIdToDenomList.push(
            ResourceIdToDenom.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.bannedDenomList.push(
            BannedDenom.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.depositCountList = (object.depositCountList ?? []).map((e: any) =>
      DepositCount.fromJSON(e)
    );
    message.proposalList = (object.proposalList ?? []).map((e: any) =>
      GenesisProposal.fromJSON(e)
    );
    message.relayFeeList = (object.relayFeeList ?? []).map((e: any) =>
      RelayFee.fromJSON(e)
    );
    message.chainIdList = (object.chainIdList ?? []).map((e: any) => Number(e));
    message.relayFeeReceiver =
      object.relayFeeReceiver !== undefined && object.relayFeeReceiver !== null
        ? String(object.relayFeeReceiver)
        : "";
    message.resourceIdToDenomList = (object.resourceIdToDenomList ?? []).map(
      (e: any) => ResourceIdToDenom.fromJSON(e)
    );
    message.bannedDenomList = (object.bannedDenomList ?? []).map((e: any) =>
      BannedDenom.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.depositCountList) {
      obj.depositCountList = message.depositCountList.map((e) =>
        e ? DepositCount.toJSON(e) : undefined
      );
    } else {
      obj.depositCountList = [];
    }
    if (message.proposalList) {
      obj.proposalList = message.proposalList.map((e) =>
        e ? GenesisProposal.toJSON(e) : undefined
      );
    } else {
      obj.proposalList = [];
    }
    if (message.relayFeeList) {
      obj.relayFeeList = message.relayFeeList.map((e) =>
        e ? RelayFee.toJSON(e) : undefined
      );
    } else {
      obj.relayFeeList = [];
    }
    if (message.chainIdList) {
      obj.chainIdList = message.chainIdList.map((e) => e);
    } else {
      obj.chainIdList = [];
    }
    message.relayFeeReceiver !== undefined &&
      (obj.relayFeeReceiver = message.relayFeeReceiver);
    if (message.resourceIdToDenomList) {
      obj.resourceIdToDenomList = message.resourceIdToDenomList.map((e) =>
        e ? ResourceIdToDenom.toJSON(e) : undefined
      );
    } else {
      obj.resourceIdToDenomList = [];
    }
    if (message.bannedDenomList) {
      obj.bannedDenomList = message.bannedDenomList.map((e) =>
        e ? BannedDenom.toJSON(e) : undefined
      );
    } else {
      obj.bannedDenomList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.depositCountList = (object.depositCountList ?? []).map((e) =>
      DepositCount.fromPartial(e)
    );
    message.proposalList = (object.proposalList ?? []).map((e) =>
      GenesisProposal.fromPartial(e)
    );
    message.relayFeeList = (object.relayFeeList ?? []).map((e) =>
      RelayFee.fromPartial(e)
    );
    message.chainIdList = (object.chainIdList ?? []).map((e) => e);
    message.relayFeeReceiver = object.relayFeeReceiver ?? "";
    message.resourceIdToDenomList = (object.resourceIdToDenomList ?? []).map(
      (e) => ResourceIdToDenom.fromPartial(e)
    );
    message.bannedDenomList = (object.bannedDenomList ?? []).map((e) =>
      BannedDenom.fromPartial(e)
    );
    return message;
  },
};

const baseDepositCount: object = { chainId: 0, count: Long.UZERO };

export const DepositCount = {
  encode(
    message: DepositCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseDepositCount } as DepositCount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.count = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositCount {
    const message = { ...baseDepositCount } as DepositCount;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromString(object.count)
        : Long.UZERO;
    return message;
  },

  toJSON(message: DepositCount): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositCount>): DepositCount {
    const message = { ...baseDepositCount } as DepositCount;
    message.chainId = object.chainId ?? 0;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
    return message;
  },
};

const baseGenesisProposal: object = {
  chainId: 0,
  depositNonce: Long.UZERO,
  resourceId: "",
};

export const GenesisProposal = {
  encode(
    message: GenesisProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseGenesisProposal } as GenesisProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.depositNonce = reader.uint64() as Long;
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

  fromJSON(object: any): GenesisProposal {
    const message = { ...baseGenesisProposal } as GenesisProposal;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.depositNonce =
      object.depositNonce !== undefined && object.depositNonce !== null
        ? Long.fromString(object.depositNonce)
        : Long.UZERO;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromJSON(object.proposal)
        : undefined;
    return message;
  },

  toJSON(message: GenesisProposal): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.depositNonce !== undefined &&
      (obj.depositNonce = (message.depositNonce || Long.UZERO).toString());
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisProposal>): GenesisProposal {
    const message = { ...baseGenesisProposal } as GenesisProposal;
    message.chainId = object.chainId ?? 0;
    message.depositNonce =
      object.depositNonce !== undefined && object.depositNonce !== null
        ? Long.fromValue(object.depositNonce)
        : Long.UZERO;
    message.resourceId = object.resourceId ?? "";
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

const baseRelayFee: object = { chainId: 0 };

export const RelayFee = {
  encode(
    message: RelayFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseRelayFee } as RelayFee;
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

  fromJSON(object: any): RelayFee {
    const message = { ...baseRelayFee } as RelayFee;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: RelayFee): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RelayFee>): RelayFee {
    const message = { ...baseRelayFee } as RelayFee;
    message.chainId = object.chainId ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseBannedDenom: object = { chainId: 0, denom: "" };

export const BannedDenom = {
  encode(
    message: BannedDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseBannedDenom } as BannedDenom;
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

  fromJSON(object: any): BannedDenom {
    const message = { ...baseBannedDenom } as BannedDenom;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Number(object.chainId)
        : 0;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: BannedDenom): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<BannedDenom>): BannedDenom {
    const message = { ...baseBannedDenom } as BannedDenom;
    message.chainId = object.chainId ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseResourceIdToDenom: object = {
  resourceId: "",
  denom: "",
  denomType: 0,
};

export const ResourceIdToDenom = {
  encode(
    message: ResourceIdToDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseResourceIdToDenom } as ResourceIdToDenom;
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
          message.denomType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceIdToDenom {
    const message = { ...baseResourceIdToDenom } as ResourceIdToDenom;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.denomType =
      object.denomType !== undefined && object.denomType !== null
        ? denomTypeFromJSON(object.denomType)
        : 0;
    return message;
  },

  toJSON(message: ResourceIdToDenom): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.denomType !== undefined &&
      (obj.denomType = denomTypeToJSON(message.denomType));
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceIdToDenom>): ResourceIdToDenom {
    const message = { ...baseResourceIdToDenom } as ResourceIdToDenom;
    message.resourceId = object.resourceId ?? "";
    message.denom = object.denom ?? "";
    message.denomType = object.denomType ?? 0;
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

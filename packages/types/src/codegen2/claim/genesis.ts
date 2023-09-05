import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
/** GenesisState defines the claim module's genesis state. */

export interface GenesisState {
  params?: Params;
  merkleRootList: MerkleRoot[];
  claimBitMapList: ClaimBitMap[];
  claimSwitchList: ClaimSwitch[];
}
/** GenesisState defines the claim module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  merkleRootList: MerkleRootSDKType[];
  claimBitMapList: ClaimBitMapSDKType[];
  claimSwitchList: ClaimSwitchSDKType[];
}
export interface MerkleRoot {
  round: Long;
  rootHash: string;
}
export interface MerkleRootSDKType {
  round: Long;
  rootHash: string;
}
export interface ClaimBitMap {
  round: Long;
  wordIndex: Long;
  bits: Long;
}
export interface ClaimBitMapSDKType {
  round: Long;
  wordIndex: Long;
  bits: Long;
}
export interface ClaimSwitch {
  round: Long;
  isOpen: boolean;
}
export interface ClaimSwitchSDKType {
  round: Long;
  isOpen: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    merkleRootList: [],
    claimBitMapList: [],
    claimSwitchList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.merkleRootList) {
      MerkleRoot.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.claimBitMapList) {
      ClaimBitMap.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.claimSwitchList) {
      ClaimSwitch.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.merkleRootList.push(MerkleRoot.decode(reader, reader.uint32()));
          break;

        case 3:
          message.claimBitMapList.push(ClaimBitMap.decode(reader, reader.uint32()));
          break;

        case 4:
          message.claimSwitchList.push(ClaimSwitch.decode(reader, reader.uint32()));
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
    message.merkleRootList = object.merkleRootList?.map(e => MerkleRoot.fromPartial(e)) || [];
    message.claimBitMapList = object.claimBitMapList?.map(e => ClaimBitMap.fromPartial(e)) || [];
    message.claimSwitchList = object.claimSwitchList?.map(e => ClaimSwitch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMerkleRoot(): MerkleRoot {
  return {
    round: Long.UZERO,
    rootHash: ""
  };
}

export const MerkleRoot = {
  encode(message: MerkleRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    if (message.rootHash !== "") {
      writer.uint32(18).string(message.rootHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        case 2:
          message.rootHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.rootHash = object.rootHash ?? "";
    return message;
  }

};

function createBaseClaimBitMap(): ClaimBitMap {
  return {
    round: Long.UZERO,
    wordIndex: Long.UZERO,
    bits: Long.UZERO
  };
}

export const ClaimBitMap = {
  encode(message: ClaimBitMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    if (!message.wordIndex.isZero()) {
      writer.uint32(16).uint64(message.wordIndex);
    }

    if (!message.bits.isZero()) {
      writer.uint32(24).uint64(message.bits);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimBitMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimBitMap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        case 2:
          message.wordIndex = (reader.uint64() as Long);
          break;

        case 3:
          message.bits = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimBitMap>): ClaimBitMap {
    const message = createBaseClaimBitMap();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.wordIndex = object.wordIndex !== undefined && object.wordIndex !== null ? Long.fromValue(object.wordIndex) : Long.UZERO;
    message.bits = object.bits !== undefined && object.bits !== null ? Long.fromValue(object.bits) : Long.UZERO;
    return message;
  }

};

function createBaseClaimSwitch(): ClaimSwitch {
  return {
    round: Long.UZERO,
    isOpen: false
  };
}

export const ClaimSwitch = {
  encode(message: ClaimSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    if (message.isOpen === true) {
      writer.uint32(16).bool(message.isOpen);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimSwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        case 2:
          message.isOpen = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimSwitch>): ClaimSwitch {
    const message = createBaseClaimSwitch();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.isOpen = object.isOpen ?? false;
    return message;
  }

};
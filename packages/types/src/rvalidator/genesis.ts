/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../rvalidator/params";

export const protobufPackage = "stafihub.stafihub.rvalidator";

/** GenesisState defines the rvalidator module's genesis state. */
export interface GenesisState {
  params?: Params;
  selectedRValidatorList: RValidator[];
  latestVotedCycleList: Cycle[];
  latestDealedCycleList: Cycle[];
  cycleSecondsList: CycleSeconds[];
  shuffleSecondsList: ShuffleSeconds[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  dealingRValidatorList: DealingRValidator[];
}

export interface RValidator {
  denom: string;
  poolAddress: string;
  valAddress: string;
}

export interface DealingRValidator {
  denom: string;
  poolAddress: string;
  oldValAddress: string;
  newValAddress: string;
}

export interface Cycle {
  denom: string;
  poolAddress: string;
  version: Long;
  number: Long;
}

export interface CycleSeconds {
  denom: string;
  version: Long;
  seconds: Long;
}

export interface ShuffleSeconds {
  denom: string;
  version: Long;
  seconds: Long;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.selectedRValidatorList) {
      RValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestVotedCycleList) {
      Cycle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.latestDealedCycleList) {
      Cycle.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cycleSecondsList) {
      CycleSeconds.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.shuffleSecondsList) {
      ShuffleSeconds.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.dealingRValidatorList) {
      DealingRValidator.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.selectedRValidatorList = [];
    message.latestVotedCycleList = [];
    message.latestDealedCycleList = [];
    message.cycleSecondsList = [];
    message.shuffleSecondsList = [];
    message.dealingRValidatorList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.selectedRValidatorList.push(
            RValidator.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.latestVotedCycleList.push(
            Cycle.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.latestDealedCycleList.push(
            Cycle.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.cycleSecondsList.push(
            CycleSeconds.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.shuffleSecondsList.push(
            ShuffleSeconds.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.dealingRValidatorList.push(
            DealingRValidator.decode(reader, reader.uint32())
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
    message.selectedRValidatorList = (object.selectedRValidatorList ?? []).map(
      (e: any) => RValidator.fromJSON(e)
    );
    message.latestVotedCycleList = (object.latestVotedCycleList ?? []).map(
      (e: any) => Cycle.fromJSON(e)
    );
    message.latestDealedCycleList = (object.latestDealedCycleList ?? []).map(
      (e: any) => Cycle.fromJSON(e)
    );
    message.cycleSecondsList = (object.cycleSecondsList ?? []).map((e: any) =>
      CycleSeconds.fromJSON(e)
    );
    message.shuffleSecondsList = (object.shuffleSecondsList ?? []).map(
      (e: any) => ShuffleSeconds.fromJSON(e)
    );
    message.dealingRValidatorList = (object.dealingRValidatorList ?? []).map(
      (e: any) => DealingRValidator.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.selectedRValidatorList) {
      obj.selectedRValidatorList = message.selectedRValidatorList.map((e) =>
        e ? RValidator.toJSON(e) : undefined
      );
    } else {
      obj.selectedRValidatorList = [];
    }
    if (message.latestVotedCycleList) {
      obj.latestVotedCycleList = message.latestVotedCycleList.map((e) =>
        e ? Cycle.toJSON(e) : undefined
      );
    } else {
      obj.latestVotedCycleList = [];
    }
    if (message.latestDealedCycleList) {
      obj.latestDealedCycleList = message.latestDealedCycleList.map((e) =>
        e ? Cycle.toJSON(e) : undefined
      );
    } else {
      obj.latestDealedCycleList = [];
    }
    if (message.cycleSecondsList) {
      obj.cycleSecondsList = message.cycleSecondsList.map((e) =>
        e ? CycleSeconds.toJSON(e) : undefined
      );
    } else {
      obj.cycleSecondsList = [];
    }
    if (message.shuffleSecondsList) {
      obj.shuffleSecondsList = message.shuffleSecondsList.map((e) =>
        e ? ShuffleSeconds.toJSON(e) : undefined
      );
    } else {
      obj.shuffleSecondsList = [];
    }
    if (message.dealingRValidatorList) {
      obj.dealingRValidatorList = message.dealingRValidatorList.map((e) =>
        e ? DealingRValidator.toJSON(e) : undefined
      );
    } else {
      obj.dealingRValidatorList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.selectedRValidatorList = (object.selectedRValidatorList ?? []).map(
      (e) => RValidator.fromPartial(e)
    );
    message.latestVotedCycleList = (object.latestVotedCycleList ?? []).map(
      (e) => Cycle.fromPartial(e)
    );
    message.latestDealedCycleList = (object.latestDealedCycleList ?? []).map(
      (e) => Cycle.fromPartial(e)
    );
    message.cycleSecondsList = (object.cycleSecondsList ?? []).map((e) =>
      CycleSeconds.fromPartial(e)
    );
    message.shuffleSecondsList = (object.shuffleSecondsList ?? []).map((e) =>
      ShuffleSeconds.fromPartial(e)
    );
    message.dealingRValidatorList = (object.dealingRValidatorList ?? []).map(
      (e) => DealingRValidator.fromPartial(e)
    );
    return message;
  },
};

const baseRValidator: object = { denom: "", poolAddress: "", valAddress: "" };

export const RValidator = {
  encode(
    message: RValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    if (message.valAddress !== "") {
      writer.uint32(26).string(message.valAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRValidator } as RValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolAddress = reader.string();
          break;
        case 3:
          message.valAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RValidator {
    const message = { ...baseRValidator } as RValidator;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    message.valAddress =
      object.valAddress !== undefined && object.valAddress !== null
        ? String(object.valAddress)
        : "";
    return message;
  },

  toJSON(message: RValidator): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<RValidator>): RValidator {
    const message = { ...baseRValidator } as RValidator;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.valAddress = object.valAddress ?? "";
    return message;
  },
};

const baseDealingRValidator: object = {
  denom: "",
  poolAddress: "",
  oldValAddress: "",
  newValAddress: "",
};

export const DealingRValidator = {
  encode(
    message: DealingRValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    if (message.oldValAddress !== "") {
      writer.uint32(26).string(message.oldValAddress);
    }
    if (message.newValAddress !== "") {
      writer.uint32(34).string(message.newValAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DealingRValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDealingRValidator } as DealingRValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolAddress = reader.string();
          break;
        case 3:
          message.oldValAddress = reader.string();
          break;
        case 4:
          message.newValAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DealingRValidator {
    const message = { ...baseDealingRValidator } as DealingRValidator;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    message.oldValAddress =
      object.oldValAddress !== undefined && object.oldValAddress !== null
        ? String(object.oldValAddress)
        : "";
    message.newValAddress =
      object.newValAddress !== undefined && object.newValAddress !== null
        ? String(object.newValAddress)
        : "";
    return message;
  },

  toJSON(message: DealingRValidator): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    message.oldValAddress !== undefined &&
      (obj.oldValAddress = message.oldValAddress);
    message.newValAddress !== undefined &&
      (obj.newValAddress = message.newValAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<DealingRValidator>): DealingRValidator {
    const message = { ...baseDealingRValidator } as DealingRValidator;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.oldValAddress = object.oldValAddress ?? "";
    message.newValAddress = object.newValAddress ?? "";
    return message;
  },
};

const baseCycle: object = {
  denom: "",
  poolAddress: "",
  version: Long.UZERO,
  number: Long.UZERO,
};

export const Cycle = {
  encode(message: Cycle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolAddress !== "") {
      writer.uint32(18).string(message.poolAddress);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (!message.number.isZero()) {
      writer.uint32(32).uint64(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cycle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCycle } as Cycle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolAddress = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.number = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Cycle {
    const message = { ...baseCycle } as Cycle;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.number =
      object.number !== undefined && object.number !== null
        ? Long.fromString(object.number)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Cycle): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.number !== undefined &&
      (obj.number = (message.number || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Cycle>): Cycle {
    const message = { ...baseCycle } as Cycle;
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.number =
      object.number !== undefined && object.number !== null
        ? Long.fromValue(object.number)
        : Long.UZERO;
    return message;
  },
};

const baseCycleSeconds: object = {
  denom: "",
  version: Long.UZERO,
  seconds: Long.UZERO,
};

export const CycleSeconds = {
  encode(
    message: CycleSeconds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    if (!message.seconds.isZero()) {
      writer.uint32(24).uint64(message.seconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CycleSeconds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCycleSeconds } as CycleSeconds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.version = reader.uint64() as Long;
          break;
        case 3:
          message.seconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CycleSeconds {
    const message = { ...baseCycleSeconds } as CycleSeconds;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromString(object.seconds)
        : Long.UZERO;
    return message;
  },

  toJSON(message: CycleSeconds): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.seconds !== undefined &&
      (obj.seconds = (message.seconds || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<CycleSeconds>): CycleSeconds {
    const message = { ...baseCycleSeconds } as CycleSeconds;
    message.denom = object.denom ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromValue(object.seconds)
        : Long.UZERO;
    return message;
  },
};

const baseShuffleSeconds: object = {
  denom: "",
  version: Long.UZERO,
  seconds: Long.UZERO,
};

export const ShuffleSeconds = {
  encode(
    message: ShuffleSeconds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    if (!message.seconds.isZero()) {
      writer.uint32(24).uint64(message.seconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShuffleSeconds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShuffleSeconds } as ShuffleSeconds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.version = reader.uint64() as Long;
          break;
        case 3:
          message.seconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShuffleSeconds {
    const message = { ...baseShuffleSeconds } as ShuffleSeconds;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromString(object.seconds)
        : Long.UZERO;
    return message;
  },

  toJSON(message: ShuffleSeconds): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.seconds !== undefined &&
      (obj.seconds = (message.seconds || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ShuffleSeconds>): ShuffleSeconds {
    const message = { ...baseShuffleSeconds } as ShuffleSeconds;
    message.denom = object.denom ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.seconds =
      object.seconds !== undefined && object.seconds !== null
        ? Long.fromValue(object.seconds)
        : Long.UZERO;
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

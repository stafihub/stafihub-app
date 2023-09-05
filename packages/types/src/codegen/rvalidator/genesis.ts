// @ts-nocheck
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../helpers";
/** GenesisState defines the rvalidator module's genesis state. */

export interface GenesisState {
  params?: Params;
  selectedRValidatorList: RValidator[];
  latestVotedCycleList: Cycle[];
  latestDealedCycleList: Cycle[];
  cycleSecondsList: CycleSeconds[];
  shuffleSecondsList: ShuffleSeconds[];
  dealingRValidatorList: DealingRValidator[];
}
/** GenesisState defines the rvalidator module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  selectedRValidatorList: RValidatorSDKType[];
  latestVotedCycleList: CycleSDKType[];
  latestDealedCycleList: CycleSDKType[];
  cycleSecondsList: CycleSecondsSDKType[];
  shuffleSecondsList: ShuffleSecondsSDKType[];
  dealingRValidatorList: DealingRValidatorSDKType[];
}
export interface RValidator {
  denom: string;
  poolAddress: string;
  valAddress: string;
}
export interface RValidatorSDKType {
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
export interface DealingRValidatorSDKType {
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
export interface CycleSDKType {
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
export interface CycleSecondsSDKType {
  denom: string;
  version: Long;
  seconds: Long;
}
export interface ShuffleSeconds {
  denom: string;
  version: Long;
  seconds: Long;
}
export interface ShuffleSecondsSDKType {
  denom: string;
  version: Long;
  seconds: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    selectedRValidatorList: [],
    latestVotedCycleList: [],
    latestDealedCycleList: [],
    cycleSecondsList: [],
    shuffleSecondsList: [],
    dealingRValidatorList: [],
  };
}

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
    const message = createBaseGenesisState();

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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.selectedRValidatorList =
      object.selectedRValidatorList?.map((e) => RValidator.fromPartial(e)) ||
      [];
    message.latestVotedCycleList =
      object.latestVotedCycleList?.map((e) => Cycle.fromPartial(e)) || [];
    message.latestDealedCycleList =
      object.latestDealedCycleList?.map((e) => Cycle.fromPartial(e)) || [];
    message.cycleSecondsList =
      object.cycleSecondsList?.map((e) => CycleSeconds.fromPartial(e)) || [];
    message.shuffleSecondsList =
      object.shuffleSecondsList?.map((e) => ShuffleSeconds.fromPartial(e)) ||
      [];
    message.dealingRValidatorList =
      object.dealingRValidatorList?.map((e) =>
        DealingRValidator.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseRValidator(): RValidator {
  return {
    denom: "",
    poolAddress: "",
    valAddress: "",
  };
}

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
    const message = createBaseRValidator();

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

  fromPartial(object: DeepPartial<RValidator>): RValidator {
    const message = createBaseRValidator();
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.valAddress = object.valAddress ?? "";
    return message;
  },
};

function createBaseDealingRValidator(): DealingRValidator {
  return {
    denom: "",
    poolAddress: "",
    oldValAddress: "",
    newValAddress: "",
  };
}

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
    const message = createBaseDealingRValidator();

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

  fromPartial(object: DeepPartial<DealingRValidator>): DealingRValidator {
    const message = createBaseDealingRValidator();
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.oldValAddress = object.oldValAddress ?? "";
    message.newValAddress = object.newValAddress ?? "";
    return message;
  },
};

function createBaseCycle(): Cycle {
  return {
    denom: "",
    poolAddress: "",
    version: Long.UZERO,
    number: Long.UZERO,
  };
}

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
    const message = createBaseCycle();

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

  fromPartial(object: DeepPartial<Cycle>): Cycle {
    const message = createBaseCycle();
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

function createBaseCycleSeconds(): CycleSeconds {
  return {
    denom: "",
    version: Long.UZERO,
    seconds: Long.UZERO,
  };
}

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
    const message = createBaseCycleSeconds();

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

  fromPartial(object: DeepPartial<CycleSeconds>): CycleSeconds {
    const message = createBaseCycleSeconds();
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

function createBaseShuffleSeconds(): ShuffleSeconds {
  return {
    denom: "",
    version: Long.UZERO,
    seconds: Long.UZERO,
  };
}

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
    const message = createBaseShuffleSeconds();

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

  fromPartial(object: DeepPartial<ShuffleSeconds>): ShuffleSeconds {
    const message = createBaseShuffleSeconds();
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

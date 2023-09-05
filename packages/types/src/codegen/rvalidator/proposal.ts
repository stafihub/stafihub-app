import { Cycle, CycleSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export enum UpdateRValidatorStatus {
  UPDATE_RVALIDATOR_STATUS_UNSPECIFIED = 0,
  UPDATE_RVALIDATOR_STATUS_SUCCESS = 1,
  UPDATE_RVALIDATOR_STATUS_FAILED = 2,
  UNRECOGNIZED = -1,
}
export enum UpdateRValidatorStatusSDKType {
  UPDATE_RVALIDATOR_STATUS_UNSPECIFIED = 0,
  UPDATE_RVALIDATOR_STATUS_SUCCESS = 1,
  UPDATE_RVALIDATOR_STATUS_FAILED = 2,
  UNRECOGNIZED = -1,
}
export function updateRValidatorStatusFromJSON(object: any): UpdateRValidatorStatus {
  switch (object) {
    case 0:
    case "UPDATE_RVALIDATOR_STATUS_UNSPECIFIED":
      return UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_UNSPECIFIED;

    case 1:
    case "UPDATE_RVALIDATOR_STATUS_SUCCESS":
      return UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_SUCCESS;

    case 2:
    case "UPDATE_RVALIDATOR_STATUS_FAILED":
      return UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_FAILED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateRValidatorStatus.UNRECOGNIZED;
  }
}
export function updateRValidatorStatusToJSON(object: UpdateRValidatorStatus): string {
  switch (object) {
    case UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_UNSPECIFIED:
      return "UPDATE_RVALIDATOR_STATUS_UNSPECIFIED";

    case UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_SUCCESS:
      return "UPDATE_RVALIDATOR_STATUS_SUCCESS";

    case UpdateRValidatorStatus.UPDATE_RVALIDATOR_STATUS_FAILED:
      return "UPDATE_RVALIDATOR_STATUS_FAILED";

    case UpdateRValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UpdateRValidatorProposal {
  creator: string;
  denom: string;
  poolAddress: string;
  oldAddress: string;
  newAddress: string;
  propId: string;
  cycle?: Cycle;
}
export interface UpdateRValidatorProposalSDKType {
  creator: string;
  denom: string;
  poolAddress: string;
  oldAddress: string;
  newAddress: string;
  propId: string;
  cycle?: CycleSDKType;
}
export interface UpdateRValidatorReportProposal {
  creator: string;
  denom: string;
  poolAddress: string;
  propId: string;
  cycle?: Cycle;
  status: UpdateRValidatorStatus;
}
export interface UpdateRValidatorReportProposalSDKType {
  creator: string;
  denom: string;
  poolAddress: string;
  propId: string;
  cycle?: CycleSDKType;
  status: UpdateRValidatorStatusSDKType;
}

function createBaseUpdateRValidatorProposal(): UpdateRValidatorProposal {
  return {
    creator: "",
    denom: "",
    poolAddress: "",
    oldAddress: "",
    newAddress: "",
    propId: "",
    cycle: undefined
  };
}

export const UpdateRValidatorProposal = {
  encode(message: UpdateRValidatorProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    if (message.oldAddress !== "") {
      writer.uint32(34).string(message.oldAddress);
    }

    if (message.newAddress !== "") {
      writer.uint32(42).string(message.newAddress);
    }

    if (message.propId !== "") {
      writer.uint32(50).string(message.propId);
    }

    if (message.cycle !== undefined) {
      Cycle.encode(message.cycle, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRValidatorProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRValidatorProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.poolAddress = reader.string();
          break;

        case 4:
          message.oldAddress = reader.string();
          break;

        case 5:
          message.newAddress = reader.string();
          break;

        case 6:
          message.propId = reader.string();
          break;

        case 7:
          message.cycle = Cycle.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateRValidatorProposal>): UpdateRValidatorProposal {
    const message = createBaseUpdateRValidatorProposal();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.propId = object.propId ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Cycle.fromPartial(object.cycle) : undefined;
    return message;
  }

};

function createBaseUpdateRValidatorReportProposal(): UpdateRValidatorReportProposal {
  return {
    creator: "",
    denom: "",
    poolAddress: "",
    propId: "",
    cycle: undefined,
    status: 0
  };
}

export const UpdateRValidatorReportProposal = {
  encode(message: UpdateRValidatorReportProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.poolAddress !== "") {
      writer.uint32(26).string(message.poolAddress);
    }

    if (message.propId !== "") {
      writer.uint32(34).string(message.propId);
    }

    if (message.cycle !== undefined) {
      Cycle.encode(message.cycle, writer.uint32(42).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRValidatorReportProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRValidatorReportProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.poolAddress = reader.string();
          break;

        case 4:
          message.propId = reader.string();
          break;

        case 5:
          message.cycle = Cycle.decode(reader, reader.uint32());
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateRValidatorReportProposal>): UpdateRValidatorReportProposal {
    const message = createBaseUpdateRValidatorReportProposal();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.poolAddress = object.poolAddress ?? "";
    message.propId = object.propId ?? "";
    message.cycle = object.cycle !== undefined && object.cycle !== null ? Cycle.fromPartial(object.cycle) : undefined;
    message.status = object.status ?? 0;
    return message;
  }

};
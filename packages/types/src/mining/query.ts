/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../mining/params";
import {
  StakePool,
  UserStakeRecord,
  StakeItem,
  RewardToken,
} from "../mining/models";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "stafihub.stafihub.mining";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryStakePoolInfoRequest {
  stakePoolIndex: number;
}

export interface QueryStakePoolInfoResponse {
  stakePool?: StakePool;
}

export interface QueryStakeItemListRequest {
  stakePoolIndex: number;
}

export interface QueryStakeItemListResponse {
  stakeItemList: StakeItem[];
}

export interface QueryStakeRewardRequest {
  stakeUserAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}

export interface QueryStakeRewardResponse {
  rewardTokens: Coin[];
}

export interface QueryStakeRecordCountRequest {
  userAddress: string;
  stakePoolIndex: number;
}

export interface QueryStakeRecordCountResponse {
  count: number;
}

export interface QueryStakeRecordRequest {
  userAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}

export interface QueryStakeRecordResponse {
  stakeRecord?: UserStakeRecord;
}

export interface QueryStakeRecordListRequest {
  userAddress: string;
  stakePoolIndex: number;
}

export interface QueryStakeRecordListResponse {
  stakeRecordList: UserStakeRecord[];
}

export interface QueryStakePoolListRequest {}

export interface QueryStakePoolListResponse {
  stakePoolList: StakePool[];
}

export interface QueryMiningProviderListRequest {}

export interface QueryMiningProviderListResponse {
  miningProviderList: string[];
}

export interface QueryRewardTokenListRequest {}

export interface QueryRewardTokenListResponse {
  rewardTokenList: RewardToken[];
}

export interface QueryMaxRewardPoolNumberRequest {}

export interface QueryMaxRewardPoolNumberResponse {
  number: number;
}

export interface QueryMaxStakeItemNumberRequest {}

export interface QueryMaxStakeItemNumberResponse {
  number: number;
}

export interface QueryProviderSwitchRequest {}

export interface QueryProviderSwitchResponse {
  providerSwitch: boolean;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryStakePoolInfoRequest: object = { stakePoolIndex: 0 };

export const QueryStakePoolInfoRequest = {
  encode(
    message: QueryStakePoolInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakePoolIndex !== 0) {
      writer.uint32(8).uint32(message.stakePoolIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakePoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakePoolInfoRequest,
    } as QueryStakePoolInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakePoolIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakePoolInfoRequest {
    const message = {
      ...baseQueryStakePoolInfoRequest,
    } as QueryStakePoolInfoRequest;
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakePoolInfoRequest): unknown {
    const obj: any = {};
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakePoolInfoRequest>
  ): QueryStakePoolInfoRequest {
    const message = {
      ...baseQueryStakePoolInfoRequest,
    } as QueryStakePoolInfoRequest;
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  },
};

const baseQueryStakePoolInfoResponse: object = {};

export const QueryStakePoolInfoResponse = {
  encode(
    message: QueryStakePoolInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakePool !== undefined) {
      StakePool.encode(message.stakePool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakePoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakePoolInfoResponse,
    } as QueryStakePoolInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakePool = StakePool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakePoolInfoResponse {
    const message = {
      ...baseQueryStakePoolInfoResponse,
    } as QueryStakePoolInfoResponse;
    message.stakePool =
      object.stakePool !== undefined && object.stakePool !== null
        ? StakePool.fromJSON(object.stakePool)
        : undefined;
    return message;
  },

  toJSON(message: QueryStakePoolInfoResponse): unknown {
    const obj: any = {};
    message.stakePool !== undefined &&
      (obj.stakePool = message.stakePool
        ? StakePool.toJSON(message.stakePool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakePoolInfoResponse>
  ): QueryStakePoolInfoResponse {
    const message = {
      ...baseQueryStakePoolInfoResponse,
    } as QueryStakePoolInfoResponse;
    message.stakePool =
      object.stakePool !== undefined && object.stakePool !== null
        ? StakePool.fromPartial(object.stakePool)
        : undefined;
    return message;
  },
};

const baseQueryStakeItemListRequest: object = { stakePoolIndex: 0 };

export const QueryStakeItemListRequest = {
  encode(
    message: QueryStakeItemListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakePoolIndex !== 0) {
      writer.uint32(8).uint32(message.stakePoolIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeItemListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeItemListRequest,
    } as QueryStakeItemListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakePoolIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeItemListRequest {
    const message = {
      ...baseQueryStakeItemListRequest,
    } as QueryStakeItemListRequest;
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeItemListRequest): unknown {
    const obj: any = {};
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeItemListRequest>
  ): QueryStakeItemListRequest {
    const message = {
      ...baseQueryStakeItemListRequest,
    } as QueryStakeItemListRequest;
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  },
};

const baseQueryStakeItemListResponse: object = {};

export const QueryStakeItemListResponse = {
  encode(
    message: QueryStakeItemListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakeItemList) {
      StakeItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeItemListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeItemListResponse,
    } as QueryStakeItemListResponse;
    message.stakeItemList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeItemList.push(StakeItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeItemListResponse {
    const message = {
      ...baseQueryStakeItemListResponse,
    } as QueryStakeItemListResponse;
    message.stakeItemList = (object.stakeItemList ?? []).map((e: any) =>
      StakeItem.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryStakeItemListResponse): unknown {
    const obj: any = {};
    if (message.stakeItemList) {
      obj.stakeItemList = message.stakeItemList.map((e) =>
        e ? StakeItem.toJSON(e) : undefined
      );
    } else {
      obj.stakeItemList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeItemListResponse>
  ): QueryStakeItemListResponse {
    const message = {
      ...baseQueryStakeItemListResponse,
    } as QueryStakeItemListResponse;
    message.stakeItemList = (object.stakeItemList ?? []).map((e) =>
      StakeItem.fromPartial(e)
    );
    return message;
  },
};

const baseQueryStakeRewardRequest: object = {
  stakeUserAddress: "",
  stakePoolIndex: 0,
  stakeRecordIndex: 0,
};

export const QueryStakeRewardRequest = {
  encode(
    message: QueryStakeRewardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakeUserAddress !== "") {
      writer.uint32(10).string(message.stakeUserAddress);
    }
    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }
    if (message.stakeRecordIndex !== 0) {
      writer.uint32(24).uint32(message.stakeRecordIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRewardRequest,
    } as QueryStakeRewardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeUserAddress = reader.string();
          break;
        case 2:
          message.stakePoolIndex = reader.uint32();
          break;
        case 3:
          message.stakeRecordIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRewardRequest {
    const message = {
      ...baseQueryStakeRewardRequest,
    } as QueryStakeRewardRequest;
    message.stakeUserAddress =
      object.stakeUserAddress !== undefined && object.stakeUserAddress !== null
        ? String(object.stakeUserAddress)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeRecordIndex =
      object.stakeRecordIndex !== undefined && object.stakeRecordIndex !== null
        ? Number(object.stakeRecordIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeRewardRequest): unknown {
    const obj: any = {};
    message.stakeUserAddress !== undefined &&
      (obj.stakeUserAddress = message.stakeUserAddress);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeRecordIndex !== undefined &&
      (obj.stakeRecordIndex = message.stakeRecordIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRewardRequest>
  ): QueryStakeRewardRequest {
    const message = {
      ...baseQueryStakeRewardRequest,
    } as QueryStakeRewardRequest;
    message.stakeUserAddress = object.stakeUserAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  },
};

const baseQueryStakeRewardResponse: object = {};

export const QueryStakeRewardResponse = {
  encode(
    message: QueryStakeRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardTokens) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRewardResponse,
    } as QueryStakeRewardResponse;
    message.rewardTokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardTokens.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRewardResponse {
    const message = {
      ...baseQueryStakeRewardResponse,
    } as QueryStakeRewardResponse;
    message.rewardTokens = (object.rewardTokens ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryStakeRewardResponse): unknown {
    const obj: any = {};
    if (message.rewardTokens) {
      obj.rewardTokens = message.rewardTokens.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewardTokens = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRewardResponse>
  ): QueryStakeRewardResponse {
    const message = {
      ...baseQueryStakeRewardResponse,
    } as QueryStakeRewardResponse;
    message.rewardTokens = (object.rewardTokens ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    return message;
  },
};

const baseQueryStakeRecordCountRequest: object = {
  userAddress: "",
  stakePoolIndex: 0,
};

export const QueryStakeRecordCountRequest = {
  encode(
    message: QueryStakeRecordCountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordCountRequest,
    } as QueryStakeRecordCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.stakePoolIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordCountRequest {
    const message = {
      ...baseQueryStakeRecordCountRequest,
    } as QueryStakeRecordCountRequest;
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeRecordCountRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordCountRequest>
  ): QueryStakeRecordCountRequest {
    const message = {
      ...baseQueryStakeRecordCountRequest,
    } as QueryStakeRecordCountRequest;
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  },
};

const baseQueryStakeRecordCountResponse: object = { count: 0 };

export const QueryStakeRecordCountResponse = {
  encode(
    message: QueryStakeRecordCountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordCountResponse,
    } as QueryStakeRecordCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordCountResponse {
    const message = {
      ...baseQueryStakeRecordCountResponse,
    } as QueryStakeRecordCountResponse;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeRecordCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordCountResponse>
  ): QueryStakeRecordCountResponse {
    const message = {
      ...baseQueryStakeRecordCountResponse,
    } as QueryStakeRecordCountResponse;
    message.count = object.count ?? 0;
    return message;
  },
};

const baseQueryStakeRecordRequest: object = {
  userAddress: "",
  stakePoolIndex: 0,
  stakeRecordIndex: 0,
};

export const QueryStakeRecordRequest = {
  encode(
    message: QueryStakeRecordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }
    if (message.stakeRecordIndex !== 0) {
      writer.uint32(24).uint32(message.stakeRecordIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordRequest,
    } as QueryStakeRecordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.stakePoolIndex = reader.uint32();
          break;
        case 3:
          message.stakeRecordIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordRequest {
    const message = {
      ...baseQueryStakeRecordRequest,
    } as QueryStakeRecordRequest;
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    message.stakeRecordIndex =
      object.stakeRecordIndex !== undefined && object.stakeRecordIndex !== null
        ? Number(object.stakeRecordIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeRecordRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    message.stakeRecordIndex !== undefined &&
      (obj.stakeRecordIndex = message.stakeRecordIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordRequest>
  ): QueryStakeRecordRequest {
    const message = {
      ...baseQueryStakeRecordRequest,
    } as QueryStakeRecordRequest;
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  },
};

const baseQueryStakeRecordResponse: object = {};

export const QueryStakeRecordResponse = {
  encode(
    message: QueryStakeRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakeRecord !== undefined) {
      UserStakeRecord.encode(
        message.stakeRecord,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordResponse,
    } as QueryStakeRecordResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeRecord = UserStakeRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordResponse {
    const message = {
      ...baseQueryStakeRecordResponse,
    } as QueryStakeRecordResponse;
    message.stakeRecord =
      object.stakeRecord !== undefined && object.stakeRecord !== null
        ? UserStakeRecord.fromJSON(object.stakeRecord)
        : undefined;
    return message;
  },

  toJSON(message: QueryStakeRecordResponse): unknown {
    const obj: any = {};
    message.stakeRecord !== undefined &&
      (obj.stakeRecord = message.stakeRecord
        ? UserStakeRecord.toJSON(message.stakeRecord)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordResponse>
  ): QueryStakeRecordResponse {
    const message = {
      ...baseQueryStakeRecordResponse,
    } as QueryStakeRecordResponse;
    message.stakeRecord =
      object.stakeRecord !== undefined && object.stakeRecord !== null
        ? UserStakeRecord.fromPartial(object.stakeRecord)
        : undefined;
    return message;
  },
};

const baseQueryStakeRecordListRequest: object = {
  userAddress: "",
  stakePoolIndex: 0,
};

export const QueryStakeRecordListRequest = {
  encode(
    message: QueryStakeRecordListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordListRequest,
    } as QueryStakeRecordListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.stakePoolIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordListRequest {
    const message = {
      ...baseQueryStakeRecordListRequest,
    } as QueryStakeRecordListRequest;
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    message.stakePoolIndex =
      object.stakePoolIndex !== undefined && object.stakePoolIndex !== null
        ? Number(object.stakePoolIndex)
        : 0;
    return message;
  },

  toJSON(message: QueryStakeRecordListRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.stakePoolIndex !== undefined &&
      (obj.stakePoolIndex = message.stakePoolIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordListRequest>
  ): QueryStakeRecordListRequest {
    const message = {
      ...baseQueryStakeRecordListRequest,
    } as QueryStakeRecordListRequest;
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  },
};

const baseQueryStakeRecordListResponse: object = {};

export const QueryStakeRecordListResponse = {
  encode(
    message: QueryStakeRecordListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakeRecordList) {
      UserStakeRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeRecordListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakeRecordListResponse,
    } as QueryStakeRecordListResponse;
    message.stakeRecordList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeRecordList.push(
            UserStakeRecord.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeRecordListResponse {
    const message = {
      ...baseQueryStakeRecordListResponse,
    } as QueryStakeRecordListResponse;
    message.stakeRecordList = (object.stakeRecordList ?? []).map((e: any) =>
      UserStakeRecord.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryStakeRecordListResponse): unknown {
    const obj: any = {};
    if (message.stakeRecordList) {
      obj.stakeRecordList = message.stakeRecordList.map((e) =>
        e ? UserStakeRecord.toJSON(e) : undefined
      );
    } else {
      obj.stakeRecordList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakeRecordListResponse>
  ): QueryStakeRecordListResponse {
    const message = {
      ...baseQueryStakeRecordListResponse,
    } as QueryStakeRecordListResponse;
    message.stakeRecordList = (object.stakeRecordList ?? []).map((e) =>
      UserStakeRecord.fromPartial(e)
    );
    return message;
  },
};

const baseQueryStakePoolListRequest: object = {};

export const QueryStakePoolListRequest = {
  encode(
    _: QueryStakePoolListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakePoolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakePoolListRequest,
    } as QueryStakePoolListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryStakePoolListRequest {
    const message = {
      ...baseQueryStakePoolListRequest,
    } as QueryStakePoolListRequest;
    return message;
  },

  toJSON(_: QueryStakePoolListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryStakePoolListRequest>
  ): QueryStakePoolListRequest {
    const message = {
      ...baseQueryStakePoolListRequest,
    } as QueryStakePoolListRequest;
    return message;
  },
};

const baseQueryStakePoolListResponse: object = {};

export const QueryStakePoolListResponse = {
  encode(
    message: QueryStakePoolListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakePoolList) {
      StakePool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakePoolListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStakePoolListResponse,
    } as QueryStakePoolListResponse;
    message.stakePoolList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakePoolList.push(StakePool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakePoolListResponse {
    const message = {
      ...baseQueryStakePoolListResponse,
    } as QueryStakePoolListResponse;
    message.stakePoolList = (object.stakePoolList ?? []).map((e: any) =>
      StakePool.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryStakePoolListResponse): unknown {
    const obj: any = {};
    if (message.stakePoolList) {
      obj.stakePoolList = message.stakePoolList.map((e) =>
        e ? StakePool.toJSON(e) : undefined
      );
    } else {
      obj.stakePoolList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStakePoolListResponse>
  ): QueryStakePoolListResponse {
    const message = {
      ...baseQueryStakePoolListResponse,
    } as QueryStakePoolListResponse;
    message.stakePoolList = (object.stakePoolList ?? []).map((e) =>
      StakePool.fromPartial(e)
    );
    return message;
  },
};

const baseQueryMiningProviderListRequest: object = {};

export const QueryMiningProviderListRequest = {
  encode(
    _: QueryMiningProviderListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMiningProviderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMiningProviderListRequest,
    } as QueryMiningProviderListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryMiningProviderListRequest {
    const message = {
      ...baseQueryMiningProviderListRequest,
    } as QueryMiningProviderListRequest;
    return message;
  },

  toJSON(_: QueryMiningProviderListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryMiningProviderListRequest>
  ): QueryMiningProviderListRequest {
    const message = {
      ...baseQueryMiningProviderListRequest,
    } as QueryMiningProviderListRequest;
    return message;
  },
};

const baseQueryMiningProviderListResponse: object = { miningProviderList: "" };

export const QueryMiningProviderListResponse = {
  encode(
    message: QueryMiningProviderListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.miningProviderList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMiningProviderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMiningProviderListResponse,
    } as QueryMiningProviderListResponse;
    message.miningProviderList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miningProviderList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMiningProviderListResponse {
    const message = {
      ...baseQueryMiningProviderListResponse,
    } as QueryMiningProviderListResponse;
    message.miningProviderList = (object.miningProviderList ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: QueryMiningProviderListResponse): unknown {
    const obj: any = {};
    if (message.miningProviderList) {
      obj.miningProviderList = message.miningProviderList.map((e) => e);
    } else {
      obj.miningProviderList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMiningProviderListResponse>
  ): QueryMiningProviderListResponse {
    const message = {
      ...baseQueryMiningProviderListResponse,
    } as QueryMiningProviderListResponse;
    message.miningProviderList = (object.miningProviderList ?? []).map(
      (e) => e
    );
    return message;
  },
};

const baseQueryRewardTokenListRequest: object = {};

export const QueryRewardTokenListRequest = {
  encode(
    _: QueryRewardTokenListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardTokenListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardTokenListRequest,
    } as QueryRewardTokenListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRewardTokenListRequest {
    const message = {
      ...baseQueryRewardTokenListRequest,
    } as QueryRewardTokenListRequest;
    return message;
  },

  toJSON(_: QueryRewardTokenListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRewardTokenListRequest>
  ): QueryRewardTokenListRequest {
    const message = {
      ...baseQueryRewardTokenListRequest,
    } as QueryRewardTokenListRequest;
    return message;
  },
};

const baseQueryRewardTokenListResponse: object = {};

export const QueryRewardTokenListResponse = {
  encode(
    message: QueryRewardTokenListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardTokenList) {
      RewardToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardTokenListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardTokenListResponse,
    } as QueryRewardTokenListResponse;
    message.rewardTokenList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardTokenList.push(
            RewardToken.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardTokenListResponse {
    const message = {
      ...baseQueryRewardTokenListResponse,
    } as QueryRewardTokenListResponse;
    message.rewardTokenList = (object.rewardTokenList ?? []).map((e: any) =>
      RewardToken.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryRewardTokenListResponse): unknown {
    const obj: any = {};
    if (message.rewardTokenList) {
      obj.rewardTokenList = message.rewardTokenList.map((e) =>
        e ? RewardToken.toJSON(e) : undefined
      );
    } else {
      obj.rewardTokenList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardTokenListResponse>
  ): QueryRewardTokenListResponse {
    const message = {
      ...baseQueryRewardTokenListResponse,
    } as QueryRewardTokenListResponse;
    message.rewardTokenList = (object.rewardTokenList ?? []).map((e) =>
      RewardToken.fromPartial(e)
    );
    return message;
  },
};

const baseQueryMaxRewardPoolNumberRequest: object = {};

export const QueryMaxRewardPoolNumberRequest = {
  encode(
    _: QueryMaxRewardPoolNumberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMaxRewardPoolNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMaxRewardPoolNumberRequest,
    } as QueryMaxRewardPoolNumberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryMaxRewardPoolNumberRequest {
    const message = {
      ...baseQueryMaxRewardPoolNumberRequest,
    } as QueryMaxRewardPoolNumberRequest;
    return message;
  },

  toJSON(_: QueryMaxRewardPoolNumberRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryMaxRewardPoolNumberRequest>
  ): QueryMaxRewardPoolNumberRequest {
    const message = {
      ...baseQueryMaxRewardPoolNumberRequest,
    } as QueryMaxRewardPoolNumberRequest;
    return message;
  },
};

const baseQueryMaxRewardPoolNumberResponse: object = { number: 0 };

export const QueryMaxRewardPoolNumberResponse = {
  encode(
    message: QueryMaxRewardPoolNumberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMaxRewardPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMaxRewardPoolNumberResponse,
    } as QueryMaxRewardPoolNumberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMaxRewardPoolNumberResponse {
    const message = {
      ...baseQueryMaxRewardPoolNumberResponse,
    } as QueryMaxRewardPoolNumberResponse;
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    return message;
  },

  toJSON(message: QueryMaxRewardPoolNumberResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMaxRewardPoolNumberResponse>
  ): QueryMaxRewardPoolNumberResponse {
    const message = {
      ...baseQueryMaxRewardPoolNumberResponse,
    } as QueryMaxRewardPoolNumberResponse;
    message.number = object.number ?? 0;
    return message;
  },
};

const baseQueryMaxStakeItemNumberRequest: object = {};

export const QueryMaxStakeItemNumberRequest = {
  encode(
    _: QueryMaxStakeItemNumberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMaxStakeItemNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMaxStakeItemNumberRequest,
    } as QueryMaxStakeItemNumberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryMaxStakeItemNumberRequest {
    const message = {
      ...baseQueryMaxStakeItemNumberRequest,
    } as QueryMaxStakeItemNumberRequest;
    return message;
  },

  toJSON(_: QueryMaxStakeItemNumberRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryMaxStakeItemNumberRequest>
  ): QueryMaxStakeItemNumberRequest {
    const message = {
      ...baseQueryMaxStakeItemNumberRequest,
    } as QueryMaxStakeItemNumberRequest;
    return message;
  },
};

const baseQueryMaxStakeItemNumberResponse: object = { number: 0 };

export const QueryMaxStakeItemNumberResponse = {
  encode(
    message: QueryMaxStakeItemNumberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMaxStakeItemNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMaxStakeItemNumberResponse,
    } as QueryMaxStakeItemNumberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMaxStakeItemNumberResponse {
    const message = {
      ...baseQueryMaxStakeItemNumberResponse,
    } as QueryMaxStakeItemNumberResponse;
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    return message;
  },

  toJSON(message: QueryMaxStakeItemNumberResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMaxStakeItemNumberResponse>
  ): QueryMaxStakeItemNumberResponse {
    const message = {
      ...baseQueryMaxStakeItemNumberResponse,
    } as QueryMaxStakeItemNumberResponse;
    message.number = object.number ?? 0;
    return message;
  },
};

const baseQueryProviderSwitchRequest: object = {};

export const QueryProviderSwitchRequest = {
  encode(
    _: QueryProviderSwitchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryProviderSwitchRequest {
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
    return message;
  },

  toJSON(_: QueryProviderSwitchRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryProviderSwitchRequest>
  ): QueryProviderSwitchRequest {
    const message = {
      ...baseQueryProviderSwitchRequest,
    } as QueryProviderSwitchRequest;
    return message;
  },
};

const baseQueryProviderSwitchResponse: object = { providerSwitch: false };

export const QueryProviderSwitchResponse = {
  encode(
    message: QueryProviderSwitchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.providerSwitch === true) {
      writer.uint32(8).bool(message.providerSwitch);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerSwitch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderSwitchResponse {
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    message.providerSwitch =
      object.providerSwitch !== undefined && object.providerSwitch !== null
        ? Boolean(object.providerSwitch)
        : false;
    return message;
  },

  toJSON(message: QueryProviderSwitchResponse): unknown {
    const obj: any = {};
    message.providerSwitch !== undefined &&
      (obj.providerSwitch = message.providerSwitch);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProviderSwitchResponse>
  ): QueryProviderSwitchResponse {
    const message = {
      ...baseQueryProviderSwitchResponse,
    } as QueryProviderSwitchResponse;
    message.providerSwitch = object.providerSwitch ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of StakePoolInfo items. */
  StakePoolInfo(
    request: QueryStakePoolInfoRequest
  ): Promise<QueryStakePoolInfoResponse>;
  /** Queries a list of StakeItemList items. */
  StakeItemList(
    request: QueryStakeItemListRequest
  ): Promise<QueryStakeItemListResponse>;
  /** Queries a list of StakeReward items. */
  StakeReward(
    request: QueryStakeRewardRequest
  ): Promise<QueryStakeRewardResponse>;
  /** Queries a list of StakeRecordCount items. */
  StakeRecordCount(
    request: QueryStakeRecordCountRequest
  ): Promise<QueryStakeRecordCountResponse>;
  /** Queries a list of StakeRecord items. */
  StakeRecord(
    request: QueryStakeRecordRequest
  ): Promise<QueryStakeRecordResponse>;
  /** Queries a list of StakeRecordList items. */
  StakeRecordList(
    request: QueryStakeRecordListRequest
  ): Promise<QueryStakeRecordListResponse>;
  /** Queries a list of StakePoolList items. */
  StakePoolList(
    request: QueryStakePoolListRequest
  ): Promise<QueryStakePoolListResponse>;
  /** Queries a list of MiningProviderList items. */
  MiningProviderList(
    request: QueryMiningProviderListRequest
  ): Promise<QueryMiningProviderListResponse>;
  /** Queries a list of RewardTokenList items. */
  RewardTokenList(
    request: QueryRewardTokenListRequest
  ): Promise<QueryRewardTokenListResponse>;
  /** Queries a list of MaxRewardPoolNumber items. */
  MaxRewardPoolNumber(
    request: QueryMaxRewardPoolNumberRequest
  ): Promise<QueryMaxRewardPoolNumberResponse>;
  /** Queries a list of MaxStakeItemNumber items. */
  MaxStakeItemNumber(
    request: QueryMaxStakeItemNumberRequest
  ): Promise<QueryMaxStakeItemNumberResponse>;
  /** Queries a list of ProviderSwitch items. */
  ProviderSwitch(
    request: QueryProviderSwitchRequest
  ): Promise<QueryProviderSwitchResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.StakePoolInfo = this.StakePoolInfo.bind(this);
    this.StakeItemList = this.StakeItemList.bind(this);
    this.StakeReward = this.StakeReward.bind(this);
    this.StakeRecordCount = this.StakeRecordCount.bind(this);
    this.StakeRecord = this.StakeRecord.bind(this);
    this.StakeRecordList = this.StakeRecordList.bind(this);
    this.StakePoolList = this.StakePoolList.bind(this);
    this.MiningProviderList = this.MiningProviderList.bind(this);
    this.RewardTokenList = this.RewardTokenList.bind(this);
    this.MaxRewardPoolNumber = this.MaxRewardPoolNumber.bind(this);
    this.MaxStakeItemNumber = this.MaxStakeItemNumber.bind(this);
    this.ProviderSwitch = this.ProviderSwitch.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  StakePoolInfo(
    request: QueryStakePoolInfoRequest
  ): Promise<QueryStakePoolInfoResponse> {
    const data = QueryStakePoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakePoolInfo",
      data
    );
    return promise.then((data) =>
      QueryStakePoolInfoResponse.decode(new _m0.Reader(data))
    );
  }

  StakeItemList(
    request: QueryStakeItemListRequest
  ): Promise<QueryStakeItemListResponse> {
    const data = QueryStakeItemListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakeItemList",
      data
    );
    return promise.then((data) =>
      QueryStakeItemListResponse.decode(new _m0.Reader(data))
    );
  }

  StakeReward(
    request: QueryStakeRewardRequest
  ): Promise<QueryStakeRewardResponse> {
    const data = QueryStakeRewardRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakeReward",
      data
    );
    return promise.then((data) =>
      QueryStakeRewardResponse.decode(new _m0.Reader(data))
    );
  }

  StakeRecordCount(
    request: QueryStakeRecordCountRequest
  ): Promise<QueryStakeRecordCountResponse> {
    const data = QueryStakeRecordCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakeRecordCount",
      data
    );
    return promise.then((data) =>
      QueryStakeRecordCountResponse.decode(new _m0.Reader(data))
    );
  }

  StakeRecord(
    request: QueryStakeRecordRequest
  ): Promise<QueryStakeRecordResponse> {
    const data = QueryStakeRecordRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakeRecord",
      data
    );
    return promise.then((data) =>
      QueryStakeRecordResponse.decode(new _m0.Reader(data))
    );
  }

  StakeRecordList(
    request: QueryStakeRecordListRequest
  ): Promise<QueryStakeRecordListResponse> {
    const data = QueryStakeRecordListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakeRecordList",
      data
    );
    return promise.then((data) =>
      QueryStakeRecordListResponse.decode(new _m0.Reader(data))
    );
  }

  StakePoolList(
    request: QueryStakePoolListRequest
  ): Promise<QueryStakePoolListResponse> {
    const data = QueryStakePoolListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "StakePoolList",
      data
    );
    return promise.then((data) =>
      QueryStakePoolListResponse.decode(new _m0.Reader(data))
    );
  }

  MiningProviderList(
    request: QueryMiningProviderListRequest
  ): Promise<QueryMiningProviderListResponse> {
    const data = QueryMiningProviderListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "MiningProviderList",
      data
    );
    return promise.then((data) =>
      QueryMiningProviderListResponse.decode(new _m0.Reader(data))
    );
  }

  RewardTokenList(
    request: QueryRewardTokenListRequest
  ): Promise<QueryRewardTokenListResponse> {
    const data = QueryRewardTokenListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "RewardTokenList",
      data
    );
    return promise.then((data) =>
      QueryRewardTokenListResponse.decode(new _m0.Reader(data))
    );
  }

  MaxRewardPoolNumber(
    request: QueryMaxRewardPoolNumberRequest
  ): Promise<QueryMaxRewardPoolNumberResponse> {
    const data = QueryMaxRewardPoolNumberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "MaxRewardPoolNumber",
      data
    );
    return promise.then((data) =>
      QueryMaxRewardPoolNumberResponse.decode(new _m0.Reader(data))
    );
  }

  MaxStakeItemNumber(
    request: QueryMaxStakeItemNumberRequest
  ): Promise<QueryMaxStakeItemNumberResponse> {
    const data = QueryMaxStakeItemNumberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "MaxStakeItemNumber",
      data
    );
    return promise.then((data) =>
      QueryMaxStakeItemNumberResponse.decode(new _m0.Reader(data))
    );
  }

  ProviderSwitch(
    request: QueryProviderSwitchRequest
  ): Promise<QueryProviderSwitchResponse> {
    const data = QueryProviderSwitchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stafihub.stafihub.mining.Query",
      "ProviderSwitch",
      data
    );
    return promise.then((data) =>
      QueryProviderSwitchResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

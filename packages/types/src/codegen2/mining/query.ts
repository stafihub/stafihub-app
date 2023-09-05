import { Params, ParamsSDKType } from "./params";
import { StakePool, StakePoolSDKType, StakeItem, StakeItemSDKType, UserStakeRecord, UserStakeRecordSDKType, RewardToken, RewardTokenSDKType } from "./models";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
  params?: ParamsSDKType;
}
export interface QueryStakePoolInfoRequest {
  stakePoolIndex: number;
}
export interface QueryStakePoolInfoRequestSDKType {
  stakePoolIndex: number;
}
export interface QueryStakePoolInfoResponse {
  stakePool?: StakePool;
}
export interface QueryStakePoolInfoResponseSDKType {
  stakePool?: StakePoolSDKType;
}
export interface QueryStakeItemListRequest {
  stakePoolIndex: number;
}
export interface QueryStakeItemListRequestSDKType {
  stakePoolIndex: number;
}
export interface QueryStakeItemListResponse {
  stakeItemList: StakeItem[];
}
export interface QueryStakeItemListResponseSDKType {
  stakeItemList: StakeItemSDKType[];
}
export interface QueryStakeRewardRequest {
  stakeUserAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface QueryStakeRewardRequestSDKType {
  stakeUserAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface QueryStakeRewardResponse {
  rewardTokens: Coin[];
}
export interface QueryStakeRewardResponseSDKType {
  rewardTokens: CoinSDKType[];
}
export interface QueryStakeRecordCountRequest {
  userAddress: string;
  stakePoolIndex: number;
}
export interface QueryStakeRecordCountRequestSDKType {
  userAddress: string;
  stakePoolIndex: number;
}
export interface QueryStakeRecordCountResponse {
  count: number;
}
export interface QueryStakeRecordCountResponseSDKType {
  count: number;
}
export interface QueryStakeRecordRequest {
  userAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface QueryStakeRecordRequestSDKType {
  userAddress: string;
  stakePoolIndex: number;
  stakeRecordIndex: number;
}
export interface QueryStakeRecordResponse {
  stakeRecord?: UserStakeRecord;
}
export interface QueryStakeRecordResponseSDKType {
  stakeRecord?: UserStakeRecordSDKType;
}
export interface QueryStakeRecordListRequest {
  userAddress: string;
  stakePoolIndex: number;
}
export interface QueryStakeRecordListRequestSDKType {
  userAddress: string;
  stakePoolIndex: number;
}
export interface QueryStakeRecordListResponse {
  stakeRecordList: UserStakeRecord[];
}
export interface QueryStakeRecordListResponseSDKType {
  stakeRecordList: UserStakeRecordSDKType[];
}
export interface QueryStakePoolListRequest {}
export interface QueryStakePoolListRequestSDKType {}
export interface QueryStakePoolListResponse {
  stakePoolList: StakePool[];
}
export interface QueryStakePoolListResponseSDKType {
  stakePoolList: StakePoolSDKType[];
}
export interface QueryMiningProviderListRequest {}
export interface QueryMiningProviderListRequestSDKType {}
export interface QueryMiningProviderListResponse {
  miningProviderList: string[];
}
export interface QueryMiningProviderListResponseSDKType {
  miningProviderList: string[];
}
export interface QueryRewardTokenListRequest {}
export interface QueryRewardTokenListRequestSDKType {}
export interface QueryRewardTokenListResponse {
  rewardTokenList: RewardToken[];
}
export interface QueryRewardTokenListResponseSDKType {
  rewardTokenList: RewardTokenSDKType[];
}
export interface QueryMaxRewardPoolNumberRequest {}
export interface QueryMaxRewardPoolNumberRequestSDKType {}
export interface QueryMaxRewardPoolNumberResponse {
  number: number;
}
export interface QueryMaxRewardPoolNumberResponseSDKType {
  number: number;
}
export interface QueryMaxStakeItemNumberRequest {}
export interface QueryMaxStakeItemNumberRequestSDKType {}
export interface QueryMaxStakeItemNumberResponse {
  number: number;
}
export interface QueryMaxStakeItemNumberResponseSDKType {
  number: number;
}
export interface QueryProviderSwitchRequest {}
export interface QueryProviderSwitchRequestSDKType {}
export interface QueryProviderSwitchResponse {
  providerSwitch: boolean;
}
export interface QueryProviderSwitchResponseSDKType {
  providerSwitch: boolean;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryStakePoolInfoRequest(): QueryStakePoolInfoRequest {
  return {
    stakePoolIndex: 0
  };
}

export const QueryStakePoolInfoRequest = {
  encode(message: QueryStakePoolInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakePoolIndex !== 0) {
      writer.uint32(8).uint32(message.stakePoolIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakePoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakePoolInfoRequest();

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

  fromPartial(object: DeepPartial<QueryStakePoolInfoRequest>): QueryStakePoolInfoRequest {
    const message = createBaseQueryStakePoolInfoRequest();
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakePoolInfoResponse(): QueryStakePoolInfoResponse {
  return {
    stakePool: undefined
  };
}

export const QueryStakePoolInfoResponse = {
  encode(message: QueryStakePoolInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakePool !== undefined) {
      StakePool.encode(message.stakePool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakePoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakePoolInfoResponse();

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

  fromPartial(object: DeepPartial<QueryStakePoolInfoResponse>): QueryStakePoolInfoResponse {
    const message = createBaseQueryStakePoolInfoResponse();
    message.stakePool = object.stakePool !== undefined && object.stakePool !== null ? StakePool.fromPartial(object.stakePool) : undefined;
    return message;
  }

};

function createBaseQueryStakeItemListRequest(): QueryStakeItemListRequest {
  return {
    stakePoolIndex: 0
  };
}

export const QueryStakeItemListRequest = {
  encode(message: QueryStakeItemListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakePoolIndex !== 0) {
      writer.uint32(8).uint32(message.stakePoolIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeItemListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeItemListRequest();

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

  fromPartial(object: DeepPartial<QueryStakeItemListRequest>): QueryStakeItemListRequest {
    const message = createBaseQueryStakeItemListRequest();
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakeItemListResponse(): QueryStakeItemListResponse {
  return {
    stakeItemList: []
  };
}

export const QueryStakeItemListResponse = {
  encode(message: QueryStakeItemListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeItemList) {
      StakeItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeItemListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeItemListResponse();

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

  fromPartial(object: DeepPartial<QueryStakeItemListResponse>): QueryStakeItemListResponse {
    const message = createBaseQueryStakeItemListResponse();
    message.stakeItemList = object.stakeItemList?.map(e => StakeItem.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryStakeRewardRequest(): QueryStakeRewardRequest {
  return {
    stakeUserAddress: "",
    stakePoolIndex: 0,
    stakeRecordIndex: 0
  };
}

export const QueryStakeRewardRequest = {
  encode(message: QueryStakeRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRewardRequest();

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

  fromPartial(object: DeepPartial<QueryStakeRewardRequest>): QueryStakeRewardRequest {
    const message = createBaseQueryStakeRewardRequest();
    message.stakeUserAddress = object.stakeUserAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakeRewardResponse(): QueryStakeRewardResponse {
  return {
    rewardTokens: []
  };
}

export const QueryStakeRewardResponse = {
  encode(message: QueryStakeRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardTokens) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRewardResponse();

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

  fromPartial(object: DeepPartial<QueryStakeRewardResponse>): QueryStakeRewardResponse {
    const message = createBaseQueryStakeRewardResponse();
    message.rewardTokens = object.rewardTokens?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryStakeRecordCountRequest(): QueryStakeRecordCountRequest {
  return {
    userAddress: "",
    stakePoolIndex: 0
  };
}

export const QueryStakeRecordCountRequest = {
  encode(message: QueryStakeRecordCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordCountRequest();

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

  fromPartial(object: DeepPartial<QueryStakeRecordCountRequest>): QueryStakeRecordCountRequest {
    const message = createBaseQueryStakeRecordCountRequest();
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakeRecordCountResponse(): QueryStakeRecordCountResponse {
  return {
    count: 0
  };
}

export const QueryStakeRecordCountResponse = {
  encode(message: QueryStakeRecordCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordCountResponse();

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

  fromPartial(object: DeepPartial<QueryStakeRecordCountResponse>): QueryStakeRecordCountResponse {
    const message = createBaseQueryStakeRecordCountResponse();
    message.count = object.count ?? 0;
    return message;
  }

};

function createBaseQueryStakeRecordRequest(): QueryStakeRecordRequest {
  return {
    userAddress: "",
    stakePoolIndex: 0,
    stakeRecordIndex: 0
  };
}

export const QueryStakeRecordRequest = {
  encode(message: QueryStakeRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordRequest();

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

  fromPartial(object: DeepPartial<QueryStakeRecordRequest>): QueryStakeRecordRequest {
    const message = createBaseQueryStakeRecordRequest();
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    message.stakeRecordIndex = object.stakeRecordIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakeRecordResponse(): QueryStakeRecordResponse {
  return {
    stakeRecord: undefined
  };
}

export const QueryStakeRecordResponse = {
  encode(message: QueryStakeRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakeRecord !== undefined) {
      UserStakeRecord.encode(message.stakeRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordResponse();

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

  fromPartial(object: DeepPartial<QueryStakeRecordResponse>): QueryStakeRecordResponse {
    const message = createBaseQueryStakeRecordResponse();
    message.stakeRecord = object.stakeRecord !== undefined && object.stakeRecord !== null ? UserStakeRecord.fromPartial(object.stakeRecord) : undefined;
    return message;
  }

};

function createBaseQueryStakeRecordListRequest(): QueryStakeRecordListRequest {
  return {
    userAddress: "",
    stakePoolIndex: 0
  };
}

export const QueryStakeRecordListRequest = {
  encode(message: QueryStakeRecordListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }

    if (message.stakePoolIndex !== 0) {
      writer.uint32(16).uint32(message.stakePoolIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordListRequest();

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

  fromPartial(object: DeepPartial<QueryStakeRecordListRequest>): QueryStakeRecordListRequest {
    const message = createBaseQueryStakeRecordListRequest();
    message.userAddress = object.userAddress ?? "";
    message.stakePoolIndex = object.stakePoolIndex ?? 0;
    return message;
  }

};

function createBaseQueryStakeRecordListResponse(): QueryStakeRecordListResponse {
  return {
    stakeRecordList: []
  };
}

export const QueryStakeRecordListResponse = {
  encode(message: QueryStakeRecordListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeRecordList) {
      UserStakeRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeRecordListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRecordListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakeRecordList.push(UserStakeRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStakeRecordListResponse>): QueryStakeRecordListResponse {
    const message = createBaseQueryStakeRecordListResponse();
    message.stakeRecordList = object.stakeRecordList?.map(e => UserStakeRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryStakePoolListRequest(): QueryStakePoolListRequest {
  return {};
}

export const QueryStakePoolListRequest = {
  encode(_: QueryStakePoolListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakePoolListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakePoolListRequest();

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

  fromPartial(_: DeepPartial<QueryStakePoolListRequest>): QueryStakePoolListRequest {
    const message = createBaseQueryStakePoolListRequest();
    return message;
  }

};

function createBaseQueryStakePoolListResponse(): QueryStakePoolListResponse {
  return {
    stakePoolList: []
  };
}

export const QueryStakePoolListResponse = {
  encode(message: QueryStakePoolListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakePoolList) {
      StakePool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakePoolListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakePoolListResponse();

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

  fromPartial(object: DeepPartial<QueryStakePoolListResponse>): QueryStakePoolListResponse {
    const message = createBaseQueryStakePoolListResponse();
    message.stakePoolList = object.stakePoolList?.map(e => StakePool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryMiningProviderListRequest(): QueryMiningProviderListRequest {
  return {};
}

export const QueryMiningProviderListRequest = {
  encode(_: QueryMiningProviderListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMiningProviderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMiningProviderListRequest();

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

  fromPartial(_: DeepPartial<QueryMiningProviderListRequest>): QueryMiningProviderListRequest {
    const message = createBaseQueryMiningProviderListRequest();
    return message;
  }

};

function createBaseQueryMiningProviderListResponse(): QueryMiningProviderListResponse {
  return {
    miningProviderList: []
  };
}

export const QueryMiningProviderListResponse = {
  encode(message: QueryMiningProviderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.miningProviderList) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMiningProviderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMiningProviderListResponse();

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

  fromPartial(object: DeepPartial<QueryMiningProviderListResponse>): QueryMiningProviderListResponse {
    const message = createBaseQueryMiningProviderListResponse();
    message.miningProviderList = object.miningProviderList?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryRewardTokenListRequest(): QueryRewardTokenListRequest {
  return {};
}

export const QueryRewardTokenListRequest = {
  encode(_: QueryRewardTokenListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardTokenListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardTokenListRequest();

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

  fromPartial(_: DeepPartial<QueryRewardTokenListRequest>): QueryRewardTokenListRequest {
    const message = createBaseQueryRewardTokenListRequest();
    return message;
  }

};

function createBaseQueryRewardTokenListResponse(): QueryRewardTokenListResponse {
  return {
    rewardTokenList: []
  };
}

export const QueryRewardTokenListResponse = {
  encode(message: QueryRewardTokenListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardTokenList) {
      RewardToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardTokenListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardTokenListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardTokenList.push(RewardToken.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRewardTokenListResponse>): QueryRewardTokenListResponse {
    const message = createBaseQueryRewardTokenListResponse();
    message.rewardTokenList = object.rewardTokenList?.map(e => RewardToken.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryMaxRewardPoolNumberRequest(): QueryMaxRewardPoolNumberRequest {
  return {};
}

export const QueryMaxRewardPoolNumberRequest = {
  encode(_: QueryMaxRewardPoolNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMaxRewardPoolNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMaxRewardPoolNumberRequest();

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

  fromPartial(_: DeepPartial<QueryMaxRewardPoolNumberRequest>): QueryMaxRewardPoolNumberRequest {
    const message = createBaseQueryMaxRewardPoolNumberRequest();
    return message;
  }

};

function createBaseQueryMaxRewardPoolNumberResponse(): QueryMaxRewardPoolNumberResponse {
  return {
    number: 0
  };
}

export const QueryMaxRewardPoolNumberResponse = {
  encode(message: QueryMaxRewardPoolNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMaxRewardPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMaxRewardPoolNumberResponse();

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

  fromPartial(object: DeepPartial<QueryMaxRewardPoolNumberResponse>): QueryMaxRewardPoolNumberResponse {
    const message = createBaseQueryMaxRewardPoolNumberResponse();
    message.number = object.number ?? 0;
    return message;
  }

};

function createBaseQueryMaxStakeItemNumberRequest(): QueryMaxStakeItemNumberRequest {
  return {};
}

export const QueryMaxStakeItemNumberRequest = {
  encode(_: QueryMaxStakeItemNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMaxStakeItemNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMaxStakeItemNumberRequest();

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

  fromPartial(_: DeepPartial<QueryMaxStakeItemNumberRequest>): QueryMaxStakeItemNumberRequest {
    const message = createBaseQueryMaxStakeItemNumberRequest();
    return message;
  }

};

function createBaseQueryMaxStakeItemNumberResponse(): QueryMaxStakeItemNumberResponse {
  return {
    number: 0
  };
}

export const QueryMaxStakeItemNumberResponse = {
  encode(message: QueryMaxStakeItemNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMaxStakeItemNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMaxStakeItemNumberResponse();

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

  fromPartial(object: DeepPartial<QueryMaxStakeItemNumberResponse>): QueryMaxStakeItemNumberResponse {
    const message = createBaseQueryMaxStakeItemNumberResponse();
    message.number = object.number ?? 0;
    return message;
  }

};

function createBaseQueryProviderSwitchRequest(): QueryProviderSwitchRequest {
  return {};
}

export const QueryProviderSwitchRequest = {
  encode(_: QueryProviderSwitchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderSwitchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderSwitchRequest();

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

  fromPartial(_: DeepPartial<QueryProviderSwitchRequest>): QueryProviderSwitchRequest {
    const message = createBaseQueryProviderSwitchRequest();
    return message;
  }

};

function createBaseQueryProviderSwitchResponse(): QueryProviderSwitchResponse {
  return {
    providerSwitch: false
  };
}

export const QueryProviderSwitchResponse = {
  encode(message: QueryProviderSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerSwitch === true) {
      writer.uint32(8).bool(message.providerSwitch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderSwitchResponse();

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

  fromPartial(object: DeepPartial<QueryProviderSwitchResponse>): QueryProviderSwitchResponse {
    const message = createBaseQueryProviderSwitchResponse();
    message.providerSwitch = object.providerSwitch ?? false;
    return message;
  }

};
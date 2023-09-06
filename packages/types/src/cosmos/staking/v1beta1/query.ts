/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Validator,
  DelegationResponse,
  UnbondingDelegation,
  HistoricalInfo,
  Pool,
  Params,
  TokenizeShareRecord,
  RedelegationResponse,
} from "../../../cosmos/staking/v1beta1/staking";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.staking.v1beta1";

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator?: Validator;
}

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse;
}

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond?: UnbondingDelegation;
}

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator?: Validator;
}

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: Long;
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool?: Pool;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: Long;
}

/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record?: TokenizeShareRecord;
}

/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}

/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record?: TokenizeShareRecord;
}

/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}

/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}

/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}

/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: Long;
}

/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}

/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value?: Coin;
}

/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}

/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}

/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}

/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}

const baseQueryValidatorsRequest: object = { status: "" };

export const QueryValidatorsRequest = {
  encode(
    message: QueryValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsRequest {
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorsRequest>
  ): QueryValidatorsRequest {
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryValidatorsResponse: object = {};

export const QueryValidatorsResponse = {
  encode(
    message: QueryValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorsResponse,
    } as QueryValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsResponse {
    const message = {
      ...baseQueryValidatorsResponse,
    } as QueryValidatorsResponse;
    message.validators = (object.validators ?? []).map((e: any) =>
      Validator.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorsResponse>
  ): QueryValidatorsResponse {
    const message = {
      ...baseQueryValidatorsResponse,
    } as QueryValidatorsResponse;
    message.validators = (object.validators ?? []).map((e) =>
      Validator.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryValidatorRequest: object = { validatorAddr: "" };

export const QueryValidatorRequest = {
  encode(
    message: QueryValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorRequest {
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    return message;
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorRequest>
  ): QueryValidatorRequest {
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

const baseQueryValidatorResponse: object = {};

export const QueryValidatorResponse = {
  encode(
    message: QueryValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromJSON(object.validator)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorResponse>
  ): QueryValidatorResponse {
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    return message;
  },
};

const baseQueryValidatorDelegationsRequest: object = { validatorAddr: "" };

export const QueryValidatorDelegationsRequest = {
  encode(
    message: QueryValidatorDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorDelegationsRequest,
    } as QueryValidatorDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    const message = {
      ...baseQueryValidatorDelegationsRequest,
    } as QueryValidatorDelegationsRequest;
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorDelegationsRequest>
  ): QueryValidatorDelegationsRequest {
    const message = {
      ...baseQueryValidatorDelegationsRequest,
    } as QueryValidatorDelegationsRequest;
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryValidatorDelegationsResponse: object = {};

export const QueryValidatorDelegationsResponse = {
  encode(
    message: QueryValidatorDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorDelegationsResponse,
    } as QueryValidatorDelegationsResponse;
    message.delegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(
            DelegationResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    const message = {
      ...baseQueryValidatorDelegationsResponse,
    } as QueryValidatorDelegationsResponse;
    message.delegationResponses = (object.delegationResponses ?? []).map(
      (e: any) => DelegationResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorDelegationsResponse>
  ): QueryValidatorDelegationsResponse {
    const message = {
      ...baseQueryValidatorDelegationsResponse,
    } as QueryValidatorDelegationsResponse;
    message.delegationResponses = (object.delegationResponses ?? []).map((e) =>
      DelegationResponse.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryValidatorUnbondingDelegationsRequest: object = {
  validatorAddr: "",
};

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(
    message: QueryValidatorUnbondingDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorUnbondingDelegationsRequest,
    } as QueryValidatorUnbondingDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    const message = {
      ...baseQueryValidatorUnbondingDelegationsRequest,
    } as QueryValidatorUnbondingDelegationsRequest;
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>
  ): QueryValidatorUnbondingDelegationsRequest {
    const message = {
      ...baseQueryValidatorUnbondingDelegationsRequest,
    } as QueryValidatorUnbondingDelegationsRequest;
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryValidatorUnbondingDelegationsResponse: object = {};

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(
    message: QueryValidatorUnbondingDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorUnbondingDelegationsResponse,
    } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(
            UnbondingDelegation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    const message = {
      ...baseQueryValidatorUnbondingDelegationsResponse,
    } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = (object.unbondingResponses ?? []).map(
      (e: any) => UnbondingDelegation.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined
      );
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>
  ): QueryValidatorUnbondingDelegationsResponse {
    const message = {
      ...baseQueryValidatorUnbondingDelegationsResponse,
    } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = (object.unbondingResponses ?? []).map((e) =>
      UnbondingDelegation.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegationRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

export const QueryDelegationRequest = {
  encode(
    message: QueryDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRequest {
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    return message;
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegationRequest>
  ): QueryDelegationRequest {
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

const baseQueryDelegationResponse: object = {};

export const QueryDelegationResponse = {
  encode(
    message: QueryDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(
        message.delegationResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegationResponse,
    } as QueryDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    const message = {
      ...baseQueryDelegationResponse,
    } as QueryDelegationResponse;
    message.delegationResponse =
      object.delegationResponse !== undefined &&
      object.delegationResponse !== null
        ? DelegationResponse.fromJSON(object.delegationResponse)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined &&
      (obj.delegationResponse = message.delegationResponse
        ? DelegationResponse.toJSON(message.delegationResponse)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegationResponse>
  ): QueryDelegationResponse {
    const message = {
      ...baseQueryDelegationResponse,
    } as QueryDelegationResponse;
    message.delegationResponse =
      object.delegationResponse !== undefined &&
      object.delegationResponse !== null
        ? DelegationResponse.fromPartial(object.delegationResponse)
        : undefined;
    return message;
  },
};

const baseQueryUnbondingDelegationRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

export const QueryUnbondingDelegationRequest = {
  encode(
    message: QueryUnbondingDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnbondingDelegationRequest,
    } as QueryUnbondingDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    const message = {
      ...baseQueryUnbondingDelegationRequest,
    } as QueryUnbondingDelegationRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    return message;
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnbondingDelegationRequest>
  ): QueryUnbondingDelegationRequest {
    const message = {
      ...baseQueryUnbondingDelegationRequest,
    } as QueryUnbondingDelegationRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

const baseQueryUnbondingDelegationResponse: object = {};

export const QueryUnbondingDelegationResponse = {
  encode(
    message: QueryUnbondingDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(
        message.unbond,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnbondingDelegationResponse,
    } as QueryUnbondingDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    const message = {
      ...baseQueryUnbondingDelegationResponse,
    } as QueryUnbondingDelegationResponse;
    message.unbond =
      object.unbond !== undefined && object.unbond !== null
        ? UnbondingDelegation.fromJSON(object.unbond)
        : undefined;
    return message;
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined &&
      (obj.unbond = message.unbond
        ? UnbondingDelegation.toJSON(message.unbond)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnbondingDelegationResponse>
  ): QueryUnbondingDelegationResponse {
    const message = {
      ...baseQueryUnbondingDelegationResponse,
    } as QueryUnbondingDelegationResponse;
    message.unbond =
      object.unbond !== undefined && object.unbond !== null
        ? UnbondingDelegation.fromPartial(object.unbond)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorDelegationsRequest: object = { delegatorAddr: "" };

export const QueryDelegatorDelegationsRequest = {
  encode(
    message: QueryDelegatorDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorDelegationsRequest,
    } as QueryDelegatorDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    const message = {
      ...baseQueryDelegatorDelegationsRequest,
    } as QueryDelegatorDelegationsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorDelegationsRequest>
  ): QueryDelegatorDelegationsRequest {
    const message = {
      ...baseQueryDelegatorDelegationsRequest,
    } as QueryDelegatorDelegationsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorDelegationsResponse: object = {};

export const QueryDelegatorDelegationsResponse = {
  encode(
    message: QueryDelegatorDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorDelegationsResponse,
    } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(
            DelegationResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    const message = {
      ...baseQueryDelegatorDelegationsResponse,
    } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = (object.delegationResponses ?? []).map(
      (e: any) => DelegationResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorDelegationsResponse>
  ): QueryDelegatorDelegationsResponse {
    const message = {
      ...baseQueryDelegatorDelegationsResponse,
    } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = (object.delegationResponses ?? []).map((e) =>
      DelegationResponse.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorUnbondingDelegationsRequest: object = {
  delegatorAddr: "",
};

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(
    message: QueryDelegatorUnbondingDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsRequest,
    } as QueryDelegatorUnbondingDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsRequest,
    } as QueryDelegatorUnbondingDelegationsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>
  ): QueryDelegatorUnbondingDelegationsRequest {
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsRequest,
    } as QueryDelegatorUnbondingDelegationsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorUnbondingDelegationsResponse: object = {};

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(
    message: QueryDelegatorUnbondingDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsResponse,
    } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(
            UnbondingDelegation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsResponse,
    } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = (object.unbondingResponses ?? []).map(
      (e: any) => UnbondingDelegation.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined
      );
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>
  ): QueryDelegatorUnbondingDelegationsResponse {
    const message = {
      ...baseQueryDelegatorUnbondingDelegationsResponse,
    } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = (object.unbondingResponses ?? []).map((e) =>
      UnbondingDelegation.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRedelegationsRequest: object = {
  delegatorAddr: "",
  srcValidatorAddr: "",
  dstValidatorAddr: "",
};

export const QueryRedelegationsRequest = {
  encode(
    message: QueryRedelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRedelegationsRequest,
    } as QueryRedelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRedelegationsRequest {
    const message = {
      ...baseQueryRedelegationsRequest,
    } as QueryRedelegationsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.srcValidatorAddr =
      object.srcValidatorAddr !== undefined && object.srcValidatorAddr !== null
        ? String(object.srcValidatorAddr)
        : "";
    message.dstValidatorAddr =
      object.dstValidatorAddr !== undefined && object.dstValidatorAddr !== null
        ? String(object.dstValidatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined &&
      (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined &&
      (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRedelegationsRequest>
  ): QueryRedelegationsRequest {
    const message = {
      ...baseQueryRedelegationsRequest,
    } as QueryRedelegationsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRedelegationsResponse: object = {};

export const QueryRedelegationsResponse = {
  encode(
    message: QueryRedelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRedelegationsResponse,
    } as QueryRedelegationsResponse;
    message.redelegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(
            RedelegationResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRedelegationsResponse {
    const message = {
      ...baseQueryRedelegationsResponse,
    } as QueryRedelegationsResponse;
    message.redelegationResponses = (object.redelegationResponses ?? []).map(
      (e: any) => RedelegationResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) =>
        e ? RedelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRedelegationsResponse>
  ): QueryRedelegationsResponse {
    const message = {
      ...baseQueryRedelegationsResponse,
    } as QueryRedelegationsResponse;
    message.redelegationResponses = (object.redelegationResponses ?? []).map(
      (e) => RedelegationResponse.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorValidatorsRequest: object = { delegatorAddr: "" };

export const QueryDelegatorValidatorsRequest = {
  encode(
    message: QueryDelegatorValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorValidatorsRequest,
    } as QueryDelegatorValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const message = {
      ...baseQueryDelegatorValidatorsRequest,
    } as QueryDelegatorValidatorsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorValidatorsRequest>
  ): QueryDelegatorValidatorsRequest {
    const message = {
      ...baseQueryDelegatorValidatorsRequest,
    } as QueryDelegatorValidatorsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorValidatorsResponse: object = {};

export const QueryDelegatorValidatorsResponse = {
  encode(
    message: QueryDelegatorValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorValidatorsResponse,
    } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const message = {
      ...baseQueryDelegatorValidatorsResponse,
    } as QueryDelegatorValidatorsResponse;
    message.validators = (object.validators ?? []).map((e: any) =>
      Validator.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorValidatorsResponse>
  ): QueryDelegatorValidatorsResponse {
    const message = {
      ...baseQueryDelegatorValidatorsResponse,
    } as QueryDelegatorValidatorsResponse;
    message.validators = (object.validators ?? []).map((e) =>
      Validator.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryDelegatorValidatorRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

export const QueryDelegatorValidatorRequest = {
  encode(
    message: QueryDelegatorValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorValidatorRequest,
    } as QueryDelegatorValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    const message = {
      ...baseQueryDelegatorValidatorRequest,
    } as QueryDelegatorValidatorRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    return message;
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorValidatorRequest>
  ): QueryDelegatorValidatorRequest {
    const message = {
      ...baseQueryDelegatorValidatorRequest,
    } as QueryDelegatorValidatorRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

const baseQueryDelegatorValidatorResponse: object = {};

export const QueryDelegatorValidatorResponse = {
  encode(
    message: QueryDelegatorValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegatorValidatorResponse,
    } as QueryDelegatorValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    const message = {
      ...baseQueryDelegatorValidatorResponse,
    } as QueryDelegatorValidatorResponse;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromJSON(object.validator)
        : undefined;
    return message;
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorValidatorResponse>
  ): QueryDelegatorValidatorResponse {
    const message = {
      ...baseQueryDelegatorValidatorResponse,
    } as QueryDelegatorValidatorResponse;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    return message;
  },
};

const baseQueryHistoricalInfoRequest: object = { height: Long.ZERO };

export const QueryHistoricalInfoRequest = {
  encode(
    message: QueryHistoricalInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHistoricalInfoRequest,
    } as QueryHistoricalInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    const message = {
      ...baseQueryHistoricalInfoRequest,
    } as QueryHistoricalInfoRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    return message;
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHistoricalInfoRequest>
  ): QueryHistoricalInfoRequest {
    const message = {
      ...baseQueryHistoricalInfoRequest,
    } as QueryHistoricalInfoRequest;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    return message;
  },
};

const baseQueryHistoricalInfoResponse: object = {};

export const QueryHistoricalInfoResponse = {
  encode(
    message: QueryHistoricalInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHistoricalInfoResponse,
    } as QueryHistoricalInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    const message = {
      ...baseQueryHistoricalInfoResponse,
    } as QueryHistoricalInfoResponse;
    message.hist =
      object.hist !== undefined && object.hist !== null
        ? HistoricalInfo.fromJSON(object.hist)
        : undefined;
    return message;
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined &&
      (obj.hist = message.hist
        ? HistoricalInfo.toJSON(message.hist)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHistoricalInfoResponse>
  ): QueryHistoricalInfoResponse {
    const message = {
      ...baseQueryHistoricalInfoResponse,
    } as QueryHistoricalInfoResponse;
    message.hist =
      object.hist !== undefined && object.hist !== null
        ? HistoricalInfo.fromPartial(object.hist)
        : undefined;
    return message;
  },
};

const baseQueryPoolRequest: object = {};

export const QueryPoolRequest = {
  encode(
    _: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
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

  fromJSON(_: any): QueryPoolRequest {
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
    return message;
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
    return message;
  },
};

const baseQueryPoolResponse: object = {};

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

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

const baseQueryTokenizeShareRecordByIdRequest: object = { id: Long.UZERO };

export const QueryTokenizeShareRecordByIdRequest = {
  encode(
    message: QueryTokenizeShareRecordByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByIdRequest>
  ): QueryTokenizeShareRecordByIdRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByIdRequest,
    } as QueryTokenizeShareRecordByIdRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseQueryTokenizeShareRecordByIdResponse: object = {};

export const QueryTokenizeShareRecordByIdResponse = {
  encode(
    message: QueryTokenizeShareRecordByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(
        message.record,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    message.record =
      object.record !== undefined && object.record !== null
        ? TokenizeShareRecord.fromJSON(object.record)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record
        ? TokenizeShareRecord.toJSON(message.record)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByIdResponse>
  ): QueryTokenizeShareRecordByIdResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByIdResponse,
    } as QueryTokenizeShareRecordByIdResponse;
    message.record =
      object.record !== undefined && object.record !== null
        ? TokenizeShareRecord.fromPartial(object.record)
        : undefined;
    return message;
  },
};

const baseQueryTokenizeShareRecordByDenomRequest: object = { denom: "" };

export const QueryTokenizeShareRecordByDenomRequest = {
  encode(
    message: QueryTokenizeShareRecordByDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByDenomRequest>
  ): QueryTokenizeShareRecordByDenomRequest {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomRequest,
    } as QueryTokenizeShareRecordByDenomRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryTokenizeShareRecordByDenomResponse: object = {};

export const QueryTokenizeShareRecordByDenomResponse = {
  encode(
    message: QueryTokenizeShareRecordByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(
        message.record,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    message.record =
      object.record !== undefined && object.record !== null
        ? TokenizeShareRecord.fromJSON(object.record)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record
        ? TokenizeShareRecord.toJSON(message.record)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordByDenomResponse>
  ): QueryTokenizeShareRecordByDenomResponse {
    const message = {
      ...baseQueryTokenizeShareRecordByDenomResponse,
    } as QueryTokenizeShareRecordByDenomResponse;
    message.record =
      object.record !== undefined && object.record !== null
        ? TokenizeShareRecord.fromPartial(object.record)
        : undefined;
    return message;
  },
};

const baseQueryTokenizeShareRecordsOwnedRequest: object = { owner: "" };

export const QueryTokenizeShareRecordsOwnedRequest = {
  encode(
    message: QueryTokenizeShareRecordsOwnedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>
  ): QueryTokenizeShareRecordsOwnedRequest {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedRequest,
    } as QueryTokenizeShareRecordsOwnedRequest;
    message.owner = object.owner ?? "";
    return message;
  },
};

const baseQueryTokenizeShareRecordsOwnedResponse: object = {};

export const QueryTokenizeShareRecordsOwnedResponse = {
  encode(
    message: QueryTokenizeShareRecordsOwnedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(
            TokenizeShareRecord.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = (object.records ?? []).map((e: any) =>
      TokenizeShareRecord.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareRecordsOwnedResponse>
  ): QueryTokenizeShareRecordsOwnedResponse {
    const message = {
      ...baseQueryTokenizeShareRecordsOwnedResponse,
    } as QueryTokenizeShareRecordsOwnedResponse;
    message.records = (object.records ?? []).map((e) =>
      TokenizeShareRecord.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllTokenizeShareRecordsRequest: object = {};

export const QueryAllTokenizeShareRecordsRequest = {
  encode(
    message: QueryAllTokenizeShareRecordsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenizeShareRecordsRequest>
  ): QueryAllTokenizeShareRecordsRequest {
    const message = {
      ...baseQueryAllTokenizeShareRecordsRequest,
    } as QueryAllTokenizeShareRecordsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllTokenizeShareRecordsResponse: object = {};

export const QueryAllTokenizeShareRecordsResponse = {
  encode(
    message: QueryAllTokenizeShareRecordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(
            TokenizeShareRecord.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = (object.records ?? []).map((e: any) =>
      TokenizeShareRecord.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenizeShareRecordsResponse>
  ): QueryAllTokenizeShareRecordsResponse {
    const message = {
      ...baseQueryAllTokenizeShareRecordsResponse,
    } as QueryAllTokenizeShareRecordsResponse;
    message.records = (object.records ?? []).map((e) =>
      TokenizeShareRecord.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryLastTokenizeShareRecordIdRequest: object = {};

export const QueryLastTokenizeShareRecordIdRequest = {
  encode(
    _: QueryLastTokenizeShareRecordIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
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

  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
    return message;
  },

  toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastTokenizeShareRecordIdRequest>
  ): QueryLastTokenizeShareRecordIdRequest {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdRequest,
    } as QueryLastTokenizeShareRecordIdRequest;
    return message;
  },
};

const baseQueryLastTokenizeShareRecordIdResponse: object = { id: Long.UZERO };

export const QueryLastTokenizeShareRecordIdResponse = {
  encode(
    message: QueryLastTokenizeShareRecordIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastTokenizeShareRecordIdResponse>
  ): QueryLastTokenizeShareRecordIdResponse {
    const message = {
      ...baseQueryLastTokenizeShareRecordIdResponse,
    } as QueryLastTokenizeShareRecordIdResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseQueryTotalTokenizeSharedAssetsRequest: object = {};

export const QueryTotalTokenizeSharedAssetsRequest = {
  encode(
    _: QueryTotalTokenizeSharedAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
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

  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
    return message;
  },

  toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>
  ): QueryTotalTokenizeSharedAssetsRequest {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsRequest,
    } as QueryTotalTokenizeSharedAssetsRequest;
    return message;
  },
};

const baseQueryTotalTokenizeSharedAssetsResponse: object = {};

export const QueryTotalTokenizeSharedAssetsResponse = {
  encode(
    message: QueryTotalTokenizeSharedAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalTokenizeSharedAssetsResponse>
  ): QueryTotalTokenizeSharedAssetsResponse {
    const message = {
      ...baseQueryTotalTokenizeSharedAssetsResponse,
    } as QueryTotalTokenizeSharedAssetsResponse;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseQueryTotalLiquidStaked: object = {};

export const QueryTotalLiquidStaked = {
  encode(
    _: QueryTotalLiquidStaked,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidStaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
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

  fromJSON(_: any): QueryTotalLiquidStaked {
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
    return message;
  },

  toJSON(_: QueryTotalLiquidStaked): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = { ...baseQueryTotalLiquidStaked } as QueryTotalLiquidStaked;
    return message;
  },
};

const baseQueryTotalLiquidStakedResponse: object = { tokens: "" };

export const QueryTotalLiquidStakedResponse = {
  encode(
    message: QueryTotalLiquidStakedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidStakedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? String(object.tokens)
        : "";
    return message;
  },

  toJSON(message: QueryTotalLiquidStakedResponse): unknown {
    const obj: any = {};
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalLiquidStakedResponse>
  ): QueryTotalLiquidStakedResponse {
    const message = {
      ...baseQueryTotalLiquidStakedResponse,
    } as QueryTotalLiquidStakedResponse;
    message.tokens = object.tokens ?? "";
    return message;
  },
};

const baseQueryTokenizeShareLockInfo: object = { address: "" };

export const QueryTokenizeShareLockInfo = {
  encode(
    message: QueryTokenizeShareLockInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareLockInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareLockInfo {
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryTokenizeShareLockInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareLockInfo>
  ): QueryTokenizeShareLockInfo {
    const message = {
      ...baseQueryTokenizeShareLockInfo,
    } as QueryTokenizeShareLockInfo;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryTokenizeShareLockInfoResponse: object = {
  status: "",
  expirationTime: "",
};

export const QueryTokenizeShareLockInfoResponse = {
  encode(
    message: QueryTokenizeShareLockInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.expirationTime =
      object.expirationTime !== undefined && object.expirationTime !== null
        ? String(object.expirationTime)
        : "";
    return message;
  },

  toJSON(message: QueryTokenizeShareLockInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.expirationTime !== undefined &&
      (obj.expirationTime = message.expirationTime);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenizeShareLockInfoResponse>
  ): QueryTokenizeShareLockInfoResponse {
    const message = {
      ...baseQueryTokenizeShareLockInfoResponse,
    } as QueryTokenizeShareLockInfoResponse;
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Validators queries all validators that match the given status. */
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  ValidatorDelegations(
    request: QueryValidatorDelegationsRequest
  ): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(
    request: QueryUnbondingDelegationRequest
  ): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  DelegatorDelegations(
    request: QueryDelegatorDelegationsRequest
  ): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  Redelegations(
    request: QueryRedelegationsRequest
  ): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  DelegatorValidators(
    request: QueryDelegatorValidatorsRequest
  ): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  DelegatorValidator(
    request: QueryDelegatorValidatorRequest
  ): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(
    request: QueryHistoricalInfoRequest
  ): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Query for individual tokenize share record information by share by id */
  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest
  ): Promise<QueryTokenizeShareRecordByIdResponse>;
  /** Query for individual tokenize share record information by share denom */
  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest
  ): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /** Query tokenize share records by address */
  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest
  ): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /** Query for all tokenize share records */
  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest
  ): Promise<QueryAllTokenizeShareRecordsResponse>;
  /** Query for last tokenize share record id */
  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest
  ): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /** Query for total tokenized staked assets */
  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest
  ): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /** Query for total liquid staked (including tokenized shares or owned by an liquid staking provider) */
  TotalLiquidStaked(
    request: QueryTotalLiquidStaked
  ): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  TokenizeShareLockInfo(
    request: QueryTokenizeShareLockInfo
  ): Promise<QueryTokenizeShareLockInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.ValidatorUnbondingDelegations =
      this.ValidatorUnbondingDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
    this.DelegatorUnbondingDelegations =
      this.DelegatorUnbondingDelegations.bind(this);
    this.Redelegations = this.Redelegations.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorValidator = this.DelegatorValidator.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
    this.TokenizeShareRecordById = this.TokenizeShareRecordById.bind(this);
    this.TokenizeShareRecordByDenom =
      this.TokenizeShareRecordByDenom.bind(this);
    this.TokenizeShareRecordsOwned = this.TokenizeShareRecordsOwned.bind(this);
    this.AllTokenizeShareRecords = this.AllTokenizeShareRecords.bind(this);
    this.LastTokenizeShareRecordId = this.LastTokenizeShareRecordId.bind(this);
    this.TotalTokenizeSharedAssets = this.TotalTokenizeSharedAssets.bind(this);
    this.TotalLiquidStaked = this.TotalLiquidStaked.bind(this);
    this.TokenizeShareLockInfo = this.TokenizeShareLockInfo.bind(this);
  }
  Validators(
    request: QueryValidatorsRequest
  ): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Validators",
      data
    );
    return promise.then((data) =>
      QueryValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Validator",
      data
    );
    return promise.then((data) =>
      QueryValidatorResponse.decode(new _m0.Reader(data))
    );
  }

  ValidatorDelegations(
    request: QueryValidatorDelegationsRequest
  ): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "ValidatorDelegations",
      data
    );
    return promise.then((data) =>
      QueryValidatorDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data =
      QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "ValidatorUnbondingDelegations",
      data
    );
    return promise.then((data) =>
      QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  Delegation(
    request: QueryDelegationRequest
  ): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Delegation",
      data
    );
    return promise.then((data) =>
      QueryDelegationResponse.decode(new _m0.Reader(data))
    );
  }

  UnbondingDelegation(
    request: QueryUnbondingDelegationRequest
  ): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "UnbondingDelegation",
      data
    );
    return promise.then((data) =>
      QueryUnbondingDelegationResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatorDelegations(
    request: QueryDelegatorDelegationsRequest
  ): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "DelegatorDelegations",
      data
    );
    return promise.then((data) =>
      QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data =
      QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "DelegatorUnbondingDelegations",
      data
    );
    return promise.then((data) =>
      QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  Redelegations(
    request: QueryRedelegationsRequest
  ): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Redelegations",
      data
    );
    return promise.then((data) =>
      QueryRedelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatorValidators(
    request: QueryDelegatorValidatorsRequest
  ): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "DelegatorValidators",
      data
    );
    return promise.then((data) =>
      QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatorValidator(
    request: QueryDelegatorValidatorRequest
  ): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "DelegatorValidator",
      data
    );
    return promise.then((data) =>
      QueryDelegatorValidatorResponse.decode(new _m0.Reader(data))
    );
  }

  HistoricalInfo(
    request: QueryHistoricalInfoRequest
  ): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "HistoricalInfo",
      data
    );
    return promise.then((data) =>
      QueryHistoricalInfoResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest
  ): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TokenizeShareRecordById",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordByIdResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest
  ): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data =
      QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TokenizeShareRecordByDenom",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordByDenomResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest
  ): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TokenizeShareRecordsOwned",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareRecordsOwnedResponse.decode(new _m0.Reader(data))
    );
  }

  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest
  ): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "AllTokenizeShareRecords",
      data
    );
    return promise.then((data) =>
      QueryAllTokenizeShareRecordsResponse.decode(new _m0.Reader(data))
    );
  }

  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest
  ): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "LastTokenizeShareRecordId",
      data
    );
    return promise.then((data) =>
      QueryLastTokenizeShareRecordIdResponse.decode(new _m0.Reader(data))
    );
  }

  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest
  ): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TotalTokenizeSharedAssets",
      data
    );
    return promise.then((data) =>
      QueryTotalTokenizeSharedAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  TotalLiquidStaked(
    request: QueryTotalLiquidStaked
  ): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TotalLiquidStaked",
      data
    );
    return promise.then((data) =>
      QueryTotalLiquidStakedResponse.decode(new _m0.Reader(data))
    );
  }

  TokenizeShareLockInfo(
    request: QueryTokenizeShareLockInfo
  ): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Query",
      "TokenizeShareLockInfo",
      data
    );
    return promise.then((data) =>
      QueryTokenizeShareLockInfoResponse.decode(new _m0.Reader(data))
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

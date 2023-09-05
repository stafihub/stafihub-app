import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryValidatorsRequest, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponseSDKType, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponseSDKType, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponseSDKType, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponseSDKType, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponseSDKType, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponseSDKType, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponseSDKType, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
  }
  /* Validators queries all validators that match the given status. */
  async validators(params: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators`;
    return await this.req.get<QueryValidatorsResponseSDKType>(endpoint, options);
  }
  /* Validator queries validator info for given validator address. */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}`;
    return await this.req.get<QueryValidatorResponseSDKType>(endpoint);
  }
  /* ValidatorDelegations queries delegate info for given validator. */
  async validatorDelegations(params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`;
    return await this.req.get<QueryValidatorDelegationsResponseSDKType>(endpoint, options);
  }
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async validatorUnbondingDelegations(params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/unbonding_delegations`;
    return await this.req.get<QueryValidatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  }
  /* Delegation queries delegate info for given validator delegator pair. */
  async delegation(params: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}`;
    return await this.req.get<QueryDelegationResponseSDKType>(endpoint);
  }
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  async unbondingDelegation(params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}/unbonding_delegation`;
    return await this.req.get<QueryUnbondingDelegationResponseSDKType>(endpoint);
  }
  /* DelegatorDelegations queries all delegations of a given delegator address. */
  async delegatorDelegations(params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegatorAddr}`;
    return await this.req.get<QueryDelegatorDelegationsResponseSDKType>(endpoint, options);
  }
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address. */
  async delegatorUnbondingDelegations(params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/unbonding_delegations`;
    return await this.req.get<QueryDelegatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  }
  /* Redelegations queries redelegations of given address. */
  async redelegations(params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.srcValidatorAddr !== "undefined") {
      options.params.src_validator_addr = params.srcValidatorAddr;
    }
    if (typeof params?.dstValidatorAddr !== "undefined") {
      options.params.dst_validator_addr = params.dstValidatorAddr;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/redelegations`;
    return await this.req.get<QueryRedelegationsResponseSDKType>(endpoint, options);
  }
  /* DelegatorValidators queries all validators info for given delegator
   address. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators`;
    return await this.req.get<QueryDelegatorValidatorsResponseSDKType>(endpoint, options);
  }
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  async delegatorValidator(params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators/${params.validatorAddr}`;
    return await this.req.get<QueryDelegatorValidatorResponseSDKType>(endpoint);
  }
  /* HistoricalInfo queries the historical info for given height. */
  async historicalInfo(params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return await this.req.get<QueryHistoricalInfoResponseSDKType>(endpoint);
  }
  /* Pool queries the pool info. */
  async pool(_params: QueryPoolRequest = {}): Promise<QueryPoolResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Parameters queries the staking parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Query for individual tokenize share record information by share by id */
  async tokenizeShareRecordById(params: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/tokenize_share_record_by_id/${params.id}`;
    return await this.req.get<QueryTokenizeShareRecordByIdResponseSDKType>(endpoint);
  }
  /* Query for individual tokenize share record information by share denom */
  async tokenizeShareRecordByDenom(params: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/tokenize_share_record_by_denom/${params.denom}`;
    return await this.req.get<QueryTokenizeShareRecordByDenomResponseSDKType>(endpoint);
  }
  /* Query tokenize share records by address */
  async tokenizeShareRecordsOwned(params: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/tokenize_share_record_owned/${params.owner}`;
    return await this.req.get<QueryTokenizeShareRecordsOwnedResponseSDKType>(endpoint);
  }
  /* Query for all tokenize share records */
  async allTokenizeShareRecords(params: QueryAllTokenizeShareRecordsRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenizeShareRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/tokenize_share_records`;
    return await this.req.get<QueryAllTokenizeShareRecordsResponseSDKType>(endpoint, options);
  }
  /* Query for last tokenize share record id */
  async lastTokenizeShareRecordId(_params: QueryLastTokenizeShareRecordIdRequest = {}): Promise<QueryLastTokenizeShareRecordIdResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/last_tokenize_share_record_id`;
    return await this.req.get<QueryLastTokenizeShareRecordIdResponseSDKType>(endpoint);
  }
  /* Query for total tokenized staked assets */
  async totalTokenizeSharedAssets(_params: QueryTotalTokenizeSharedAssetsRequest = {}): Promise<QueryTotalTokenizeSharedAssetsResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/total_tokenize_shared_assets`;
    return await this.req.get<QueryTotalTokenizeSharedAssetsResponseSDKType>(endpoint);
  }
  /* Query for total liquid staked (including tokenized shares or owned by an liquid staking provider) */
  async totalLiquidStaked(_params: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/total_liquid_staked`;
    return await this.req.get<QueryTotalLiquidStakedResponseSDKType>(endpoint);
  }
  /* Query tokenize share locks */
  async tokenizeShareLockInfo(params: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponseSDKType> {
    const endpoint = `cosmos/staking/v1beta1/tokenize_share_lock_info/${params.address}`;
    return await this.req.get<QueryTokenizeShareLockInfoResponseSDKType>(endpoint);
  }
}
//@ts-nocheck
import { LCDClient } from "@osmonauts/lcd";
import { QueryGetExchangeRateRequest, QueryGetExchangeRateResponseSDKType, QueryExchangeRateAllRequest, QueryExchangeRateAllResponseSDKType, QueryGetEraExchangeRateRequest, QueryGetEraExchangeRateResponseSDKType, QueryEraExchangeRatesByDenomRequest, QueryEraExchangeRatesByDenomResponseSDKType, QueryBondedPoolsByDenomRequest, QueryBondedPoolsByDenomResponseSDKType, QueryGetPoolDetailRequest, QueryGetPoolDetailResponseSDKType, QueryGetChainEraRequest, QueryGetChainEraResponseSDKType, QueryGetCurrentEraSnapshotRequest, QueryGetCurrentEraSnapshotResponseSDKType, QueryGetProtocolFeeReceiverRequest, QueryGetProtocolFeeReceiverResponseSDKType, QueryGetStakingRewardCommissionRequest, QueryGetStakingRewardCommissionResponseSDKType, QueryGetUnbondRelayFeeRequest, QueryGetUnbondRelayFeeResponseSDKType, QueryGetUnbondCommissionRequest, QueryGetUnbondCommissionResponseSDKType, QueryGetEraUnbondLimitRequest, QueryGetEraUnbondLimitResponseSDKType, QueryGetBondPipelineRequest, QueryGetBondPipelineResponseSDKType, QueryGetEraSnapshotRequest, QueryGetEraSnapshotResponseSDKType, QueryGetSnapshotRequest, QueryGetSnapshotResponseSDKType, QueryGetTotalExpectedActiveRequest, QueryGetTotalExpectedActiveResponseSDKType, QueryGetBondRecordRequest, QueryGetBondRecordResponseSDKType, QueryGetSignatureRequest, QueryGetSignatureResponseSDKType, QueryGetRParamsRequest, QueryGetRParamsResponseSDKType, QueryTotalProtocolFeeRequest, QueryTotalProtocolFeeResponseSDKType, QueryRelayFeeReceiverRequest, QueryRelayFeeReceiverResponseSDKType, QueryUnbondSwitchRequest, QueryUnbondSwitchResponseSDKType, QueryPoolUnbondNextSequenceRequest, QueryPoolUnbondNextSequenceResponseSDKType, QueryPoolUnbondingsRequest, QueryPoolUnbondingsResponseSDKType, QueryIcaPoolListRequest, QueryIcaPoolListResponseSDKType, QueryInterchainTxStatusRequest, QueryInterchainTxStatusResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getExchangeRate = this.getExchangeRate.bind(this);
    this.exchangeRateAll = this.exchangeRateAll.bind(this);
    this.getEraExchangeRate = this.getEraExchangeRate.bind(this);
    this.eraExchangeRatesByDenom = this.eraExchangeRatesByDenom.bind(this);
    this.bondedPoolsByDenom = this.bondedPoolsByDenom.bind(this);
    this.getPoolDetail = this.getPoolDetail.bind(this);
    this.getChainEra = this.getChainEra.bind(this);
    this.getCurrentEraSnapshot = this.getCurrentEraSnapshot.bind(this);
    this.getProtocolFeeReceiver = this.getProtocolFeeReceiver.bind(this);
    this.getStakingRewardCommission = this.getStakingRewardCommission.bind(this);
    this.getUnbondRelayFee = this.getUnbondRelayFee.bind(this);
    this.getUnbondCommission = this.getUnbondCommission.bind(this);
    this.getEraUnbondLimit = this.getEraUnbondLimit.bind(this);
    this.getBondPipeline = this.getBondPipeline.bind(this);
    this.getEraSnapshot = this.getEraSnapshot.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getTotalExpectedActive = this.getTotalExpectedActive.bind(this);
    this.getBondRecord = this.getBondRecord.bind(this);
    this.getSignature = this.getSignature.bind(this);
    this.getRParams = this.getRParams.bind(this);
    this.totalProtocolFee = this.totalProtocolFee.bind(this);
    this.relayFeeReceiver = this.relayFeeReceiver.bind(this);
    this.unbondSwitch = this.unbondSwitch.bind(this);
    this.poolUnbondNextSequence = this.poolUnbondNextSequence.bind(this);
    this.poolUnbondings = this.poolUnbondings.bind(this);
    this.icaPoolList = this.icaPoolList.bind(this);
    this.interchainTxStatus = this.interchainTxStatus.bind(this);
  }
  /* Queries a list of getExchangeRate items. */


  async getExchangeRate(params: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/exchange_rate/${params.denom}`;
    return await this.req.get<QueryGetExchangeRateResponseSDKType>(endpoint);
  }
  /* Queries a list of exchangeRateAll items. */


  async exchangeRateAll(_params: QueryExchangeRateAllRequest = {}): Promise<QueryExchangeRateAllResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/exchange_rate_all`;
    return await this.req.get<QueryExchangeRateAllResponseSDKType>(endpoint);
  }
  /* Queries a list of getEraExchangeRate items. */


  async getEraExchangeRate(params: QueryGetEraExchangeRateRequest): Promise<QueryGetEraExchangeRateResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/era_exchange_rate/${params.denom}/${params.era}`;
    return await this.req.get<QueryGetEraExchangeRateResponseSDKType>(endpoint);
  }
  /* Queries a list of eraExchangeRatesByDenom items. */


  async eraExchangeRatesByDenom(params: QueryEraExchangeRatesByDenomRequest): Promise<QueryEraExchangeRatesByDenomResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/era_exchange_rates_by_denom/${params.denom}`;
    return await this.req.get<QueryEraExchangeRatesByDenomResponseSDKType>(endpoint);
  }
  /* Queries a list of bondedPoolsByDenom items. */


  async bondedPoolsByDenom(params: QueryBondedPoolsByDenomRequest): Promise<QueryBondedPoolsByDenomResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/bonded_pools_by_denom/${params.denom}`;
    return await this.req.get<QueryBondedPoolsByDenomResponseSDKType>(endpoint);
  }
  /* Queries a list of getPoolDetail items. */


  async getPoolDetail(params: QueryGetPoolDetailRequest): Promise<QueryGetPoolDetailResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_pool_detail/${params.denom}/${params.pool}`;
    return await this.req.get<QueryGetPoolDetailResponseSDKType>(endpoint);
  }
  /* Queries a list of getChainEra items. */


  async getChainEra(params: QueryGetChainEraRequest): Promise<QueryGetChainEraResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_chain_era/${params.denom}`;
    return await this.req.get<QueryGetChainEraResponseSDKType>(endpoint);
  }
  /* Queries a list of getCurrentEraSnapshot items. */


  async getCurrentEraSnapshot(params: QueryGetCurrentEraSnapshotRequest): Promise<QueryGetCurrentEraSnapshotResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_current_era_snapshot/${params.denom}`;
    return await this.req.get<QueryGetCurrentEraSnapshotResponseSDKType>(endpoint);
  }
  /* Queries a list of getReceiver items. */


  async getProtocolFeeReceiver(_params: QueryGetProtocolFeeReceiverRequest = {}): Promise<QueryGetProtocolFeeReceiverResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/protocol_fee_receiver`;
    return await this.req.get<QueryGetProtocolFeeReceiverResponseSDKType>(endpoint);
  }
  /* Queries a list of getCommission items. */


  async getStakingRewardCommission(params: QueryGetStakingRewardCommissionRequest): Promise<QueryGetStakingRewardCommissionResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `stafihub/stafihub/ledger/get_staking_reward_commission`;
    return await this.req.get<QueryGetStakingRewardCommissionResponseSDKType>(endpoint, options);
  }
  /* Queries a list of getUnbondFee items. */


  async getUnbondRelayFee(params: QueryGetUnbondRelayFeeRequest): Promise<QueryGetUnbondRelayFeeResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_unbond_relay_fee/${params.denom}`;
    return await this.req.get<QueryGetUnbondRelayFeeResponseSDKType>(endpoint);
  }
  /* Queries a list of getUnbondCommission items. */


  async getUnbondCommission(params: QueryGetUnbondCommissionRequest): Promise<QueryGetUnbondCommissionResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `stafihub/stafihub/ledger/get_unbond_commission`;
    return await this.req.get<QueryGetUnbondCommissionResponseSDKType>(endpoint, options);
  }
  /* Queries a list of getEraUnbondLimit items. */


  async getEraUnbondLimit(params: QueryGetEraUnbondLimitRequest): Promise<QueryGetEraUnbondLimitResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_era_unbond_limit/${params.denom}`;
    return await this.req.get<QueryGetEraUnbondLimitResponseSDKType>(endpoint);
  }
  /* Queries a list of getBondPipeline items. */


  async getBondPipeline(params: QueryGetBondPipelineRequest): Promise<QueryGetBondPipelineResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_bond_pipeline/${params.denom}/${params.pool}`;
    return await this.req.get<QueryGetBondPipelineResponseSDKType>(endpoint);
  }
  /* Queries a list of getEraSnapshot items. */


  async getEraSnapshot(params: QueryGetEraSnapshotRequest): Promise<QueryGetEraSnapshotResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_era_snapshot/${params.denom}/${params.era}`;
    return await this.req.get<QueryGetEraSnapshotResponseSDKType>(endpoint);
  }
  /* Queries a list of getSnapshot items. */


  async getSnapshot(params: QueryGetSnapshotRequest): Promise<QueryGetSnapshotResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_snapshot/${params.shotId}`;
    return await this.req.get<QueryGetSnapshotResponseSDKType>(endpoint);
  }
  /* Queries a list of getTotalExpectedActive items. */


  async getTotalExpectedActive(params: QueryGetTotalExpectedActiveRequest): Promise<QueryGetTotalExpectedActiveResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_total_expected_active/${params.denom}/${params.era}`;
    return await this.req.get<QueryGetTotalExpectedActiveResponseSDKType>(endpoint);
  }
  /* Queries a list of getBondRecord items. */


  async getBondRecord(params: QueryGetBondRecordRequest): Promise<QueryGetBondRecordResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_bond_record/${params.denom}/${params.txhash}`;
    return await this.req.get<QueryGetBondRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of getSignature items. */


  async getSignature(params: QueryGetSignatureRequest): Promise<QueryGetSignatureResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.era !== "undefined") {
      options.params.era = params.era;
    }

    if (typeof params?.pool !== "undefined") {
      options.params.pool = params.pool;
    }

    if (typeof params?.txType !== "undefined") {
      options.params.txType = params.txType;
    }

    if (typeof params?.propId !== "undefined") {
      options.params.propId = params.propId;
    }

    const endpoint = `stafihub/stafihub/ledger/get_signature`;
    return await this.req.get<QueryGetSignatureResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GetRParams items. */


  async getRParams(params: QueryGetRParamsRequest): Promise<QueryGetRParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/get_r_params/${params.denom}`;
    return await this.req.get<QueryGetRParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalFeeList items. */


  async totalProtocolFee(_params: QueryTotalProtocolFeeRequest = {}): Promise<QueryTotalProtocolFeeResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/total_protocol_fee`;
    return await this.req.get<QueryTotalProtocolFeeResponseSDKType>(endpoint);
  }
  /* Queries a list of RelayFeeReceiver items. */


  async relayFeeReceiver(params: QueryRelayFeeReceiverRequest): Promise<QueryRelayFeeReceiverResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/relay_fee_receiver/${params.denom}`;
    return await this.req.get<QueryRelayFeeReceiverResponseSDKType>(endpoint);
  }
  /* Queries a list of UnbondSwitch items. */


  async unbondSwitch(params: QueryUnbondSwitchRequest): Promise<QueryUnbondSwitchResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/unbond_switch/${params.denom}`;
    return await this.req.get<QueryUnbondSwitchResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolUnbondNextSequence items. */


  async poolUnbondNextSequence(params: QueryPoolUnbondNextSequenceRequest): Promise<QueryPoolUnbondNextSequenceResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/pool_unbond_next_sequence/${params.denom}/${params.pool}/${params.unlockEra}`;
    return await this.req.get<QueryPoolUnbondNextSequenceResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolUnbondings items. */


  async poolUnbondings(params: QueryPoolUnbondingsRequest): Promise<QueryPoolUnbondingsResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/pool_unbondings/${params.denom}/${params.pool}/${params.unlockEra}`;
    return await this.req.get<QueryPoolUnbondingsResponseSDKType>(endpoint);
  }
  /* Queries a list of IcaPoolList items. */


  async icaPoolList(params: QueryIcaPoolListRequest): Promise<QueryIcaPoolListResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/ica_pool_list/${params.denom}`;
    return await this.req.get<QueryIcaPoolListResponseSDKType>(endpoint);
  }
  /* Queries a list of InterchainTxStatus items. */


  async interchainTxStatus(params: QueryInterchainTxStatusRequest): Promise<QueryInterchainTxStatusResponseSDKType> {
    const endpoint = `stafihub/stafihub/ledger/interchain_tx_status/${params.propId}`;
    return await this.req.get<QueryInterchainTxStatusResponseSDKType>(endpoint);
  }

}
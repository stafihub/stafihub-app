import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStakePoolInfoRequest, QueryStakePoolInfoResponseSDKType, QueryStakeItemListRequest, QueryStakeItemListResponseSDKType, QueryStakeRewardRequest, QueryStakeRewardResponseSDKType, QueryStakeRecordCountRequest, QueryStakeRecordCountResponseSDKType, QueryStakeRecordRequest, QueryStakeRecordResponseSDKType, QueryStakeRecordListRequest, QueryStakeRecordListResponseSDKType, QueryStakePoolListRequest, QueryStakePoolListResponseSDKType, QueryMiningProviderListRequest, QueryMiningProviderListResponseSDKType, QueryRewardTokenListRequest, QueryRewardTokenListResponseSDKType, QueryMaxRewardPoolNumberRequest, QueryMaxRewardPoolNumberResponseSDKType, QueryMaxStakeItemNumberRequest, QueryMaxStakeItemNumberResponseSDKType, QueryProviderSwitchRequest, QueryProviderSwitchResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakePoolInfo = this.stakePoolInfo.bind(this);
    this.stakeItemList = this.stakeItemList.bind(this);
    this.stakeReward = this.stakeReward.bind(this);
    this.stakeRecordCount = this.stakeRecordCount.bind(this);
    this.stakeRecord = this.stakeRecord.bind(this);
    this.stakeRecordList = this.stakeRecordList.bind(this);
    this.stakePoolList = this.stakePoolList.bind(this);
    this.miningProviderList = this.miningProviderList.bind(this);
    this.rewardTokenList = this.rewardTokenList.bind(this);
    this.maxRewardPoolNumber = this.maxRewardPoolNumber.bind(this);
    this.maxStakeItemNumber = this.maxStakeItemNumber.bind(this);
    this.providerSwitch = this.providerSwitch.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of StakePoolInfo items. */


  async stakePoolInfo(params: QueryStakePoolInfoRequest): Promise<QueryStakePoolInfoResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_pool_info/${params.stakePoolIndex}`;
    return await this.req.get<QueryStakePoolInfoResponseSDKType>(endpoint);
  }
  /* Queries a list of StakeItemList items. */


  async stakeItemList(params: QueryStakeItemListRequest): Promise<QueryStakeItemListResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.stakePoolIndex !== "undefined") {
      options.params.stakePoolIndex = params.stakePoolIndex;
    }

    const endpoint = `stafihub/stafihub/mining/stake_item_list`;
    return await this.req.get<QueryStakeItemListResponseSDKType>(endpoint, options);
  }
  /* Queries a list of StakeReward items. */


  async stakeReward(params: QueryStakeRewardRequest): Promise<QueryStakeRewardResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_reward/${params.stakeUserAddress}/${params.stakePoolIndex}/${params.stakeRecordIndex}`;
    return await this.req.get<QueryStakeRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of StakeRecordCount items. */


  async stakeRecordCount(params: QueryStakeRecordCountRequest): Promise<QueryStakeRecordCountResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_record_count/${params.userAddress}/${params.stakePoolIndex}`;
    return await this.req.get<QueryStakeRecordCountResponseSDKType>(endpoint);
  }
  /* Queries a list of StakeRecord items. */


  async stakeRecord(params: QueryStakeRecordRequest): Promise<QueryStakeRecordResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_record/${params.userAddress}/${params.stakePoolIndex}/${params.stakeRecordIndex}`;
    return await this.req.get<QueryStakeRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of StakeRecordList items. */


  async stakeRecordList(params: QueryStakeRecordListRequest): Promise<QueryStakeRecordListResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_record_list/${params.userAddress}/${params.stakePoolIndex}`;
    return await this.req.get<QueryStakeRecordListResponseSDKType>(endpoint);
  }
  /* Queries a list of StakePoolList items. */


  async stakePoolList(_params: QueryStakePoolListRequest = {}): Promise<QueryStakePoolListResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/stake_pool_list`;
    return await this.req.get<QueryStakePoolListResponseSDKType>(endpoint);
  }
  /* Queries a list of MiningProviderList items. */


  async miningProviderList(_params: QueryMiningProviderListRequest = {}): Promise<QueryMiningProviderListResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/mining_provider_list`;
    return await this.req.get<QueryMiningProviderListResponseSDKType>(endpoint);
  }
  /* Queries a list of RewardTokenList items. */


  async rewardTokenList(_params: QueryRewardTokenListRequest = {}): Promise<QueryRewardTokenListResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/reward_token_list`;
    return await this.req.get<QueryRewardTokenListResponseSDKType>(endpoint);
  }
  /* Queries a list of MaxRewardPoolNumber items. */


  async maxRewardPoolNumber(_params: QueryMaxRewardPoolNumberRequest = {}): Promise<QueryMaxRewardPoolNumberResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/max_reward_pool_number`;
    return await this.req.get<QueryMaxRewardPoolNumberResponseSDKType>(endpoint);
  }
  /* Queries a list of MaxStakeItemNumber items. */


  async maxStakeItemNumber(_params: QueryMaxStakeItemNumberRequest = {}): Promise<QueryMaxStakeItemNumberResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/max_stake_item_number`;
    return await this.req.get<QueryMaxStakeItemNumberResponseSDKType>(endpoint);
  }
  /* Queries a list of ProviderSwitch items. */


  async providerSwitch(_params: QueryProviderSwitchRequest = {}): Promise<QueryProviderSwitchResponseSDKType> {
    const endpoint = `stafihub/stafihub/mining/provider_switch`;
    return await this.req.get<QueryProviderSwitchResponseSDKType>(endpoint);
  }

}
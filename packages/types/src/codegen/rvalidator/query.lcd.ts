import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRValidatorListRequest, QueryRValidatorListResponseSDKType, QueryCycleSecondsRequest, QueryCycleSecondsResponseSDKType, QueryShuffleSecondsRequest, QueryShuffleSecondsResponseSDKType, QueryLatestVotedCycleRequest, QueryLatestVotedCycleResponseSDKType, QueryLatestDealedCycleRequest, QueryLatestDealedCycleResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.rValidatorList = this.rValidatorList.bind(this);
    this.cycleSeconds = this.cycleSeconds.bind(this);
    this.shuffleSeconds = this.shuffleSeconds.bind(this);
    this.latestVotedCycle = this.latestVotedCycle.bind(this);
    this.latestDealedCycle = this.latestDealedCycle.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of RValidatorList items. */


  async rValidatorList(params: QueryRValidatorListRequest): Promise<QueryRValidatorListResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/r_validator_list/${params.denom}/${params.poolAddress}`;
    return await this.req.get<QueryRValidatorListResponseSDKType>(endpoint);
  }
  /* Queries a list of CycleSeconds items. */


  async cycleSeconds(params: QueryCycleSecondsRequest): Promise<QueryCycleSecondsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/cycle_seconds/${params.denom}`;
    return await this.req.get<QueryCycleSecondsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShuffleSeconds items. */


  async shuffleSeconds(params: QueryShuffleSecondsRequest): Promise<QueryShuffleSecondsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/shuffle_seconds/${params.denom}`;
    return await this.req.get<QueryShuffleSecondsResponseSDKType>(endpoint);
  }
  /* Queries a list of LatestVotedCycle items. */


  async latestVotedCycle(params: QueryLatestVotedCycleRequest): Promise<QueryLatestVotedCycleResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/latest_voted_cycle/${params.denom}/${params.poolAddress}`;
    return await this.req.get<QueryLatestVotedCycleResponseSDKType>(endpoint);
  }
  /* Queries a list of LatestDealedCycle items. */


  async latestDealedCycle(params: QueryLatestDealedCycleRequest): Promise<QueryLatestDealedCycleResponseSDKType> {
    const endpoint = `stafihub/stafihub/rvalidator/latest_dealed_cycle/${params.denom}/${params.poolAddress}`;
    return await this.req.get<QueryLatestDealedCycleResponseSDKType>(endpoint);
  }

}
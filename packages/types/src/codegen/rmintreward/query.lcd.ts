import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryActLatestCycleRequest, QueryActLatestCycleResponseSDKType, QueryActDetailRequest, QueryActDetailResponseSDKType, QueryUserMintCountRequest, QueryUserMintCountResponseSDKType, QueryUserActsRequest, QueryUserActsResponseSDKType, QueryActCurrentCycleRequest, QueryActCurrentCycleResponseSDKType, QueryClaimInfoDetailRequest, QueryClaimInfoDetailResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.actLatestCycle = this.actLatestCycle.bind(this);
    this.actDetail = this.actDetail.bind(this);
    this.userMintCount = this.userMintCount.bind(this);
    this.userActs = this.userActs.bind(this);
    this.actCurrentCycle = this.actCurrentCycle.bind(this);
    this.claimInfoDetail = this.claimInfoDetail.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ActLatestCycle items. */


  async actLatestCycle(params: QueryActLatestCycleRequest): Promise<QueryActLatestCycleResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/act_latest_cycle/${params.denom}`;
    return await this.req.get<QueryActLatestCycleResponseSDKType>(endpoint);
  }
  /* Queries a list of ActDetail items. */


  async actDetail(params: QueryActDetailRequest): Promise<QueryActDetailResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/act_detail/${params.denom}/${params.cycle}`;
    return await this.req.get<QueryActDetailResponseSDKType>(endpoint);
  }
  /* Queries a list of UserMintCount items. */


  async userMintCount(params: QueryUserMintCountRequest): Promise<QueryUserMintCountResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/user_mint_count/${params.address}/${params.denom}/${params.cycle}`;
    return await this.req.get<QueryUserMintCountResponseSDKType>(endpoint);
  }
  /* Queries a list of UserActs items. */


  async userActs(params: QueryUserActsRequest): Promise<QueryUserActsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/user_acts/${params.address}/${params.denom}`;
    return await this.req.get<QueryUserActsResponseSDKType>(endpoint);
  }
  /* Queries a list of ActCurrentCycle items. */


  async actCurrentCycle(params: QueryActCurrentCycleRequest): Promise<QueryActCurrentCycleResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/act_current_cycle/${params.denom}`;
    return await this.req.get<QueryActCurrentCycleResponseSDKType>(endpoint);
  }
  /* Queries a list of ClaimInfoDetail items. */


  async claimInfoDetail(params: QueryClaimInfoDetailRequest): Promise<QueryClaimInfoDetailResponseSDKType> {
    const endpoint = `stafihub/stafihub/rmintreward/claim_info_detail/${params.address}/${params.denom}/${params.cycle}/${params.mintIndex}`;
    return await this.req.get<QueryClaimInfoDetailResponseSDKType>(endpoint);
  }

}
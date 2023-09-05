import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySwapPoolInfoRequest, QuerySwapPoolInfoResponseSDKType, QuerySwapPoolListRequest, QuerySwapPoolListResponseSDKType, QueryProviderListRequest, QueryProviderListResponseSDKType, QueryPoolCreatorListRequest, QueryPoolCreatorListResponseSDKType, QueryProviderSwitchRequest, QueryProviderSwitchResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.swapPoolInfo = this.swapPoolInfo.bind(this);
    this.swapPoolList = this.swapPoolList.bind(this);
    this.providerList = this.providerList.bind(this);
    this.poolCreatorList = this.poolCreatorList.bind(this);
    this.providerSwitch = this.providerSwitch.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of SwapPoolInfo items. */


  async swapPoolInfo(params: QuerySwapPoolInfoRequest): Promise<QuerySwapPoolInfoResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/swap_pool_info/${params.lpDenom}`;
    return await this.req.get<QuerySwapPoolInfoResponseSDKType>(endpoint);
  }
  /* Queries a list of SwapPoolList items. */


  async swapPoolList(_params: QuerySwapPoolListRequest = {}): Promise<QuerySwapPoolListResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/swap_pool_list`;
    return await this.req.get<QuerySwapPoolListResponseSDKType>(endpoint);
  }
  /* Queries a list of ProviderList items. */


  async providerList(_params: QueryProviderListRequest = {}): Promise<QueryProviderListResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/provider_list`;
    return await this.req.get<QueryProviderListResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolCreatorList items. */


  async poolCreatorList(_params: QueryPoolCreatorListRequest = {}): Promise<QueryPoolCreatorListResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/pool_creator_list`;
    return await this.req.get<QueryPoolCreatorListResponseSDKType>(endpoint);
  }
  /* Queries a list of ProviderSwitch items. */


  async providerSwitch(_params: QueryProviderSwitchRequest = {}): Promise<QueryProviderSwitchResponseSDKType> {
    const endpoint = `stafihub/stafihub/rdex/provider_switch`;
    return await this.req.get<QueryProviderSwitchResponseSDKType>(endpoint);
  }

}
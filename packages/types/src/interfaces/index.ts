export interface PoolInfo {
  poolAddress: string;
  exchangeRate?: string;
}

export interface CosmosNetworkParams {
  chainId: string;
  chainName: string;
  rpc: string;
  restEndpoint: string;
  denom: string;
  coinDenom: string;
  decimals: number;
  bech32Config: any;
}

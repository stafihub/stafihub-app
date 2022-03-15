export type Environment = "dev" | "production";

export const STAFIHUB_NETWORK = "stafiHub";

export type NetworkConfig = { [key: string]: CosmosNetworkParams };

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

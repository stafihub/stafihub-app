export type Environment = "dev" | "production";

export const STAFIHUB_DECIMALS = 6;

export type NetworkConfig = { [key: string]: KeplrChainParams };

export interface KeplrChainParams {
  chainId: string;
  chainName: string;
  displayHubName: string;
  rpc: string;
  restEndpoint: string;
  denom: string;
  coinDenom: string;
  decimals: number;
  bech32Config: any;
  explorerUrl: string;
  defaultApy?: string;
  stafihubIBCChannels?: string[];
}

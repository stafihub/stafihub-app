export interface KeplrChainParams {
  chainId: string;
  chainName: string;
  rpc: string;
  denom: string;
  decimals: number;
}

export interface DetailKeplrChainParams {
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
  nativeKeplrChain?: boolean;
  rTokenEnabled?: boolean;
}

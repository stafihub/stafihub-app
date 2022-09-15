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
  isNativeKeplrChain?: boolean;
  rTokenEnabled?: boolean;
  currencies?: ChainCurrencyConfig[];
  gasPriceStep?: any;
}

export interface ChainCurrencyConfig {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
}

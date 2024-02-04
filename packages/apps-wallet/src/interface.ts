export interface KeplrChainParams {
  chainId: string;
  chainName: string;
  rpc: string;
  denom: string;
  decimals: number;
  gasLimit?: string;
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
  gasLimit?: string;
}

export interface ConnectKeplrOptions {
  chainId: string;
  chainName: string;
  displayHubName: string;
  rpc: string;
  restEndpoint: string;
  denom: string;
  coinDenom: string;
  decimals: number;
  bech32Config: any;
  isNativeKeplrChain?: boolean;
  currencies?: ChainCurrencyConfig[];
  gasPriceStep?: any;
}

export interface ChainCurrencyConfig {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
}

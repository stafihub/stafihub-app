export interface PoolInfo {
  poolAddress: string;
  exchangeRate?: string;
}

export interface KeplrAccount {
  name: string;
  bech32Address: string;
  balance?: KeplrAccountBalance;
}

export interface KeplrAccountBalance {
  denom: string;
  amount: string;
}

export interface TokenModel {
  name: string;
  icon?: any;
  balance?: string;
}

export interface FeeStationPool {
  // iris
  chainName: string;
  chainId: string;
  // uiris
  symbol: string;
  swapRate: string;
  decimals: number;
  formatSwapRate: string;
  poolAddress: string;
  icon?: any;
  formatBalance?: string;
}

export interface ChainStakeStatus {
  rTokenDenom: string;
  rTokenBalance: string;
}

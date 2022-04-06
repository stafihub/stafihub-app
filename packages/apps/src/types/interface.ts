export interface PoolInfo {
  poolAddress: string;
  exchangeRate?: string;
  leastBond: string;
}

export interface KeplrAccount {
  name: string;
  bech32Address: string;
  allBalances?: Coin[];
}

export interface Coin {
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
  formatBalance?: string;
}

export interface ChainStakeStatus {
  rTokenDenom: string;
  rTokenBalance: string;
  stakedValue: string;
}

export interface IBCChannelToken {
  denom: string;
  channelName: string;
}

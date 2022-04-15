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
  displayTokenName: string;
  denom: string;
  channelName: string;
}

export interface MintProgramsData {
  portalOn: string;
  derivativeTokenName: string;
  apyList: MintProgramsApy[];
  rewardList: MintProgramsReward[];
  mintedValue: string;
  duration: string;
}

export interface MintProgramsApy {
  unit: string;
  ratio: string;
}

export interface MintProgramsReward {
  unit: string;
  amount: string;
}

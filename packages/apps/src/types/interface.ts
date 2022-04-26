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
  stakedAmount: string;
  stakedValue: string;
}

export interface IBCChannelToken {
  displayTokenName: string;
  denom: string;
  channelName: string;
}

export interface PriceItem {
  denom: string;
  price: string;
}

export interface RTokenRewardData {
  last24hReward: string;
  lastEraReward: string;
  totalReward: string;
  eraRewardList: EraRewardItem[];
  chartXData: string[];
  chartYData: string[];
}

export interface EraRewardItem {
  era: number;
  rate: string;
  stakeValue: string;
  rTokenBalance: string;
  reward: string;
}

export interface FormatMintRewardAct {
  cycle: number;
  chainId: string;
  rTokenDisplayName: string;
  rTokenDenom: string;
  durationDays: string;
  totalNativeTokenAmount: string;
  tokenRewardInfos: FormatTokenRewardInfo[];
  begin: number;
  end: number;
  current: number;
  remainingSeconds: number;
  endTimestamp: number;
  lockedBlocks: number;
}

export interface FormatTokenRewardInfo {
  denom: string;
  apy: string;
  totalRewardAmount: string;
  leftRewardAmount: string;
}

export interface FormatUserMintInfo {
  // mintedValue: string;
  denom: string;
  claimMintIndexs: number[];
  nativeTokenAmount: string;
  percentage: string;
  userTotalRewardValue: string;
  userTotalRewardAmount: string;
  userTotalClaimableAmount: string;
  userTotalLockedAmount: string;
}

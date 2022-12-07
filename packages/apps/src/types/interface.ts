export interface PoolInfo {
  poolAddress: string;
  exchangeRate?: string;
  leastBond: string;
}

export interface KeplrAccount {
  name: string;
  bech32Address: string;
  isNanoLedger: boolean;
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
  totalRTokenAmount: string;
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
  calcApr: string;
}

export interface FormatUserMintInfo {
  denom: string;
  claimMintIndexs: number[];
  nativeTokenAmount: string;
  mintRTokenAmount: string;
  percentage: string;
  userTotalRewardValue: string;
  rewardMap: { [key: string]: UserMintRewardItem };
}

export interface UserMintRewardItem {
  userTotalRewardAmount: number;
  userTotalClaimableAmount: number;
  userTotalLockedAmount: number;
}

export interface UserUnbondRecord {
  txHash: string;
  hasReceived?: boolean;
  lockLeftTime: number;
  lockTotalTime?: number;
  poolAddress?: string;
  rTokenDenom: string;
  rTokenUnbondAmount?: string;
  receiveAddress: string;
  tokenAmount: string;
}

export interface ValidatorWrapperInfo {
  rTokenDenom: string;
  validatorList: ValidatorInfo[];
}

export interface ValidatorInfo {
  logoUrl: string;
  moniker: string;
  validatorAddress: string;
}

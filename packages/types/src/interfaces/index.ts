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

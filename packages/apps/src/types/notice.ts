export interface LocalNotice {
  id: string;
  type: NoticeType;
  timestamp: number;
  txDetail: NoticeTxDetail;
  data: NoticeDataType;
  explorerUrl: string;
  status: NoticeStatus;
}

export type NoticeType =
  | "Fee Station"
  | "Stake"
  | "Unbond"
  | "IBC Bridge"
  | "Claim Mint Reward";

export type NoticeStatus = "Pending" | "Error" | "Confirmed";

export interface NoticeTxDetail {
  sender: string;
  transactionHash: string;
  address?: string;
  chainId: string;
}

export type NoticeDataType =
  | NoticeFeeStationData
  | NoticeStakeData
  | NoticeUnbondData
  | NoticeIBCBridgeData
  | NoticeClaimMintRewardData;

export interface NoticeFeeStationData {
  inputTokenName: string;
  outputTokenName: string;
  inputAmount: string;
  outputAmount: string;
  uuid: string;
  payTxHash?: string;
}

export interface NoticeStakeData {
  tokenName: string;
  stakeAmount: string;
  eraNumber: number;
}

export interface NoticeUnbondData {
  tokenName: string;
  rTokenName: string;
  unstakeAmount: string;
  willGetAmount: string;
}

export interface NoticeIBCBridgeData {
  tokenName: string;
  inputChainName: string;
  outputChainName: string;
  amount: string;
}

export interface NoticeClaimMintRewardData {
  rewardTokenName: string;
  rewardTokenDenom: string;
  rewardAmount: string;
}

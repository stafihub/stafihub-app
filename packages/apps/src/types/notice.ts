export interface LocalNotice {
  id: string;
  type: NoticeType;
  timestamp: number;
  txDetail: NoticeTxDetail;
  data: NoticeDataType;
  explorerUrl: string;
  status: NoticeStatus;
}

export type NoticeType = "Fee Station" | "Stake" | "Unbond";

export type NoticeStatus = "Pending" | "Error" | "Confimed";

export interface NoticeTxDetail {
  sender: string;
  transactionHash: string;
  address: string;
}

export type NoticeDataType =
  | NoticeFeeStationData
  | NoticeStakeData
  | NoticeUnbondData;

export interface NoticeFeeStationData {
  inputTokenName: string;
  outputTokenName: string;
  inputAmount: string;
  outputAmount: string;
}

export interface NoticeStakeData {
  tokenName: string;
  stakeAmount: string;
}

export interface NoticeUnbondData {
  rTokenName: string;
  unstakeAmount: string;
}

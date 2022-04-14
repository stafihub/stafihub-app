export interface LocalNotice {
  id: string;
  type: NoticeType;
  timestamp: number;
  txDetail: NoticeTxDetail;
  data: NoticeDataType;
  explorerUrl: string;
  status: NoticeStatus;
}

export type NoticeType = "Fee Station" | "Stake" | "Unbond" | "IBC Bridge";

export type NoticeStatus = "Pending" | "Error" | "Confimed";

export interface NoticeTxDetail {
  sender: string;
  transactionHash: string;
  address: string;
  chainId: string;
}

export type NoticeDataType =
  | NoticeFeeStationData
  | NoticeStakeData
  | NoticeUnbondData
  | NoticeIBCBridgeData;

export interface NoticeFeeStationData {
  inputTokenName: string;
  outputTokenName: string;
  inputAmount: string;
  outputAmount: string;
}

export interface NoticeStakeData {
  tokenName: string;
  stakeAmount: string;
  eraNumber: number;
}

export interface NoticeUnbondData {
  rTokenName: string;
  unstakeAmount: string;
}

export interface NoticeIBCBridgeData {
  tokenName: string;
  inputChainName: string;
  outputChainName: string;
  amount: string;
}

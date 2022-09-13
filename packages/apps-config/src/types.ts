export type Environment = "dev" | "production";

export const STAFIHUB_DECIMALS = 6;

export type NetworkConfig = { [key: string]: KeplrChainParams };

export interface KeplrChainParams {
  chainId: string;
  chainName: string;
  displayHubName: string;
  rpc: string;
  restEndpoint: string;
  denom: string;
  coinDenom: string;
  decimals: number;
  bech32Config: any;
  currencies: [];
  explorerUrl: string;
  defaultApy?: string;
  isNativeKeplrChain?: boolean;
  sortIndex?: number;
  stakeDisabled?: boolean;
  stakeReserveAmount?: number;
}

export type IbcConfig = { [key: string]: IbcConfigParams };

export interface IbcConfigParams {
  srcChainId: string;
  dstChainId: string;
  srcChannel: string;
  dstChannel: string;
  assets: IbcAsset[];
}

export interface IbcAsset {
  denom: string;
  displayName: string;
}

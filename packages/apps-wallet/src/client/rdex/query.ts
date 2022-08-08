import {
  QuerySwapPoolListResponse,
  QueryProviderListResponse,
  QueryProviderSwitchResponse,
} from "@stafihub/types";
import { createRDexQueryService } from "..";
import { KeplrChainParams } from "../../interface";

export async function querySwapInfoList(
  stafiHubChainConfig: KeplrChainParams
): Promise<QuerySwapPoolListResponse | null> {
  try {
    const queryService = await createRDexQueryService(stafiHubChainConfig);
    const result = await queryService.SwapPoolList({});
    // console.log("querySwapInfoList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("querySwapInfoList err", err);
  }
  return null;
}

export async function queryRDexProviderSwitch(
  stafiHubChainConfig: KeplrChainParams
): Promise<QueryProviderSwitchResponse | null> {
  try {
    const queryService = await createRDexQueryService(stafiHubChainConfig);
    const result = await queryService.ProviderSwitch({});
    // console.log("queryRDexProviderSwitch result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexProviderSwitch err", err);
  }
  return null;
}

export async function queryRDexProviderList(
  stafiHubChainConfig: KeplrChainParams
): Promise<QueryProviderListResponse | null> {
  try {
    const queryService = await createRDexQueryService(stafiHubChainConfig);
    const result = await queryService.ProviderList({});
    // console.log("queryRDexProviderList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexProviderList err", err);
  }
  return null;
}

import { getStafiHubChainId } from "@stafihub/apps-config";
import {
  QueryStakePoolInfoResponse,
  QueryStakePoolListResponse,
  QueryMiningProviderListResponse,
  QueryMiningProviderSwitchResponse,
  QueryRDexMiningStakeRecordListResponse,
  QueryRDexMiningStakeRecordResponse,
  QueryRDexMiningStakeRecordCountResponse,
  QueryRDexMiningStakeItemListResponse,
  QueryRDexMiningRewardTokenListResponse,
  QueryRDexMiningStakeRewardResponse,
} from "@stafihub/types";
import { createRDexMiningQueryService } from "..";

export async function queryRDexMiningStakeInfoList(): Promise<QueryStakePoolListResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakePoolList({});
    // console.log("queryRDexMiningStakeInfoList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeInfoList err", err);
  }
  return null;
}

export async function queryRDexMiningStakeInfo(
  stakePoolIndex: number
): Promise<QueryStakePoolInfoResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakePoolInfo({ stakePoolIndex });
    // console.log("queryRDexMiningStakeInfo result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeInfo err", err);
  }
  return null;
}

export async function queryRDexMiningStakeItemList(
  stakePoolIndex: number
): Promise<QueryRDexMiningStakeItemListResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakeItemList({ stakePoolIndex });
    // console.log("queryRDexMiningStakeItemList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeItemList err", err);
  }
  return null;
}

export async function queryRDexMiningStakeRecordList(
  userAddress: string,
  stakePoolIndex: number
): Promise<QueryRDexMiningStakeRecordListResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakeRecordList({
      userAddress,
      stakePoolIndex,
    });
    // console.log("queryRDexMiningStakeRecordList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeRecordList err", err);
  }
  return null;
}

export async function queryRDexMiningStakeRecord(
  userAddress: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<QueryRDexMiningStakeRecordResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakeRecord({
      userAddress,
      stakePoolIndex,
      stakeRecordIndex,
    });
    // console.log("queryRDexMiningStakeRecord result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeRecord err", err);
  }
  return null;
}

export async function queryRDexMiningStakeRewardList(
  stakeUserAddress: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<QueryRDexMiningStakeRewardResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakeReward({
      stakeUserAddress,
      stakePoolIndex,
      stakeRecordIndex,
    });
    // console.log("queryRDexMiningStakeRewardList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningStakeRewardList err", err);
  }
  return null;
}

export async function queryRDexMiningUserStakeCount(
  userAddress: string,
  stakePoolIndex: number
): Promise<QueryRDexMiningStakeRecordCountResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.StakeRecordCount({
      userAddress,
      stakePoolIndex,
    });
    // console.log("queryRDexMiningUserStakeCount result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningUserStakeCount err", err);
  }
  return null;
}

export async function queryRDexMiningRewardTokenList(): Promise<QueryRDexMiningRewardTokenListResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.RewardTokenList({});
    // console.log("queryRDexMiningRewardTokenList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningRewardTokenList err", err);
  }
  return null;
}

export async function queryRDexMiningProviderSwitch(): Promise<QueryMiningProviderSwitchResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.ProviderSwitch({});
    // console.log("queryRDexMiningProviderSwitch result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningProviderSwitch err", err);
  }
  return null;
}

export async function queryRDexMiningProviderList(): Promise<QueryMiningProviderListResponse | null> {
  try {
    const queryService = await createRDexMiningQueryService(
      getStafiHubChainId()
    );
    const result = await queryService.MiningProviderList({});
    // console.log("queryRDexMiningProviderList result", result);
    return result;
  } catch (err: unknown) {
    // console.log("queryRDexMiningProviderList err", err);
  }
  return null;
}

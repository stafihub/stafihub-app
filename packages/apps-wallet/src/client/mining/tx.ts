import { DeliverTxResponse } from "@cosmjs/stargate";
import {
  CreateRDexMiningRewardPoolInfo,
  CreateRDexMiningStakeItemInfo,
  getSigningStafihubClient,
} from "@stafihub/types";
import { getOfflineSigner } from "..";
import { KeplrChainParams } from "../../interface";

declare const window: any;

export async function sendRDexMiningStakeTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakeAmount: string,
  stakePoolIndex: number,
  stakeItemIndex: number
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgStake",
    value: {
      creator: stafiHubAddress,
      stakeAmount,
      stakePoolIndex,
      stakeItemIndex,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendRDexMiningWithdrawTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  withdrawAmount: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgWithdraw",
    value: {
      creator: stafiHubAddress,
      withdrawAmount,
      stakePoolIndex,
      stakeRecordIndex,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.6).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendRDexMiningClaimRewardTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgClaimReward",
    value: {
      creator: stafiHubAddress,
      stakePoolIndex,
      stakeRecordIndex,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.4).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendCreateRDexMiningStakePoolTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakeTokenDenom: string,
  rewardPoolInfoList: CreateRDexMiningRewardPoolInfo[],
  stakeItemInfoList: CreateRDexMiningStakeItemInfo[]
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddStakePool",
    value: {
      creator: stafiHubAddress,
      stakeTokenDenom,
      rewardPoolInfoList,
      stakeItemInfoList,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendUpdateRDexMiningRewardPoolTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  rewardPerSecond: string
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
    value: {
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendUpdateRDexMiningAddRewardPoolTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardTokenDenom: string,
  totalRewardAmount: string,
  rewardPerSecond: string,
  startTimestamp: number
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddRewardPool",
    value: {
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardTokenDenom,
      totalRewardAmount,
      rewardPerSecond,
      startTimestamp,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendUpdateRDexMiningDepositRewardTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  addAmount: string,
  rewardPerSecond: string,
  startTimestamp: number
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await window.getOfflineSigner(
    stafiHubChainConfig.chainId
  );
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddReward",
    value: {
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond,
      addAmount,
      startTimestamp,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

export async function sendUpdateRDexMiningWithdrawRewardTx(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  withdrawAmount: string
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
    value: {
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      withdrawAmount,
    },
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: stafiHubChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee
  );

  return response;
}

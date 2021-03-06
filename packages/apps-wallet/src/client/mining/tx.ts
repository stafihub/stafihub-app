import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { chains, getStafiHubChainId } from "@stafihub/apps-config";
import {
  CreateRDexMiningRewardPoolInfo,
  CreateRDexMiningStakeItemInfo,
  MsgAddRDexMiningStakePool,
  MsgRDexMiningAddReward,
  MsgRDexMiningClaimReward,
  MsgRDexMiningStake,
  MsgRDexMiningUpdateRewardPool,
  MsgRDexMiningWithdraw,
  MsgRDexMiningAddRewardPool,
  MsgRDexMiningWithdrawRewardToken,
} from "@stafihub/types";

declare const window: any;

export async function sendRDexMiningStakeTx(
  stafiHubAddress: string,
  stakeAmount: string,
  stakePoolIndex: number,
  stakeItemIndex: number
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.mining.MsgStake", MsgRDexMiningStake);

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgStake",
    value: MsgRDexMiningStake.fromPartial({
      creator: stafiHubAddress,
      stakeAmount,
      stakePoolIndex,
      stakeItemIndex,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  withdrawAmount: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgWithdraw",
    MsgRDexMiningWithdraw
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgWithdraw",
    value: MsgRDexMiningWithdraw.fromPartial({
      creator: stafiHubAddress,
      withdrawAmount,
      stakePoolIndex,
      stakeRecordIndex,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  stakePoolIndex: number,
  stakeRecordIndex: number
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgClaimReward",
    MsgRDexMiningClaimReward
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgClaimReward",
    value: MsgRDexMiningClaimReward.fromPartial({
      creator: stafiHubAddress,
      stakePoolIndex,
      stakeRecordIndex,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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

export async function sendCreateRDexMiningStakePoolTx(
  stafiHubAddress: string,
  stakeTokenDenom: string,
  rewardPoolInfoList: CreateRDexMiningRewardPoolInfo[],
  stakeItemInfoList: CreateRDexMiningStakeItemInfo[]
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgAddStakePool",
    MsgAddRDexMiningStakePool
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddStakePool",
    value: MsgAddRDexMiningStakePool.fromPartial({
      creator: stafiHubAddress,
      stakeTokenDenom,
      rewardPoolInfoList,
      stakeItemInfoList,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  rewardPerSecond: string
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgUpdateRewardPool",
    MsgRDexMiningUpdateRewardPool
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
    value: MsgRDexMiningUpdateRewardPool.fromPartial({
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardTokenDenom: string,
  totalRewardAmount: string,
  rewardPerSecond: string,
  startTimestamp: number
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgAddRewardPool",
    MsgRDexMiningAddRewardPool
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddRewardPool",
    value: MsgRDexMiningAddRewardPool.fromPartial({
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardTokenDenom,
      totalRewardAmount,
      rewardPerSecond,
      startTimestamp,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  addAmount: string,
  rewardPerSecond: string,
  startTimestamp: number
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgAddReward",
    MsgRDexMiningAddReward
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgAddReward",
    value: MsgRDexMiningAddReward.fromPartial({
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond,
      addAmount,
      startTimestamp,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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
  stafiHubAddress: string,
  stakePoolIndex: number,
  rewardPoolIndex: number,
  withdrawAmount: string
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
    MsgRDexMiningWithdrawRewardToken
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
    value: MsgRDexMiningWithdrawRewardToken.fromPartial({
      creator: stafiHubAddress,
      stakePoolIndex,
      rewardPoolIndex,
      withdrawAmount,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
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

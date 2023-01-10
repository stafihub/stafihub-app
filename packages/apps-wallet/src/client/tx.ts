import { Registry } from "@cosmjs/proto-signing";
import {
  coins,
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { humanToAtomic } from "@stafihub/apps-util";
import {
  IBCMsgTransfer,
  MsgLiquidityUnbond,
  MsgClaimMintReward,
} from "@stafihub/types";
import { queryChannelClientState } from ".";
import { createCosmosClient } from "./connection";
import Long from "long";
import { KeplrChainParams } from "../interface";

declare const window: any;

export async function sendStakeTx(
  chainConfig: KeplrChainParams | null | undefined,
  inputAmount: string,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const client = await createCosmosClient(chainConfig);
  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    accountAddress,
    poolAddress,
    coins(humanToAtomic(inputAmount, chainConfig.decimals), chainConfig.denom),
    fee,
    `1:${stafiHubAddress}`
  );
  return sendTokens;
}

export async function sendRecoveryTx(
  chainConfig: KeplrChainParams | null | undefined,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string,
  txHash: string
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("stafiHubChainConfig can not be empty");
  }
  const client = await createCosmosClient(chainConfig);
  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    accountAddress,
    poolAddress,
    coins(1, chainConfig.denom),
    fee,
    `2:${stafiHubAddress}:${txHash}`
  );
  return sendTokens;
}

export async function sendChainTokens(
  chainConfig: KeplrChainParams | null | undefined,
  amount: string,
  sender: string,
  targetAddress: string,
  memo: string
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("stafiHubChainConfig can not be empty");
  }
  const client = await createCosmosClient(chainConfig);
  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const response = await client?.sendTokens(
    sender,
    targetAddress,
    coins(amount, chainConfig.denom),
    fee,
    memo
  );
  return response;
}

export async function sendLiquidityUnbondTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  rTokenDenom: string,
  chainAddress: string,
  stafiHubAddress: string,
  pools: { poolAddress: string; amount: string }[]
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  if (!stafiHubChainConfig) {
    throw new Error("stafiHubChainConfig can not be empty");
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    MsgLiquidityUnbond
  );

  const offlineSigner = window.getOfflineSigner(stafiHubChainConfig.chainId);

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const messages = pools.map((pool) => ({
    typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    value: MsgLiquidityUnbond.fromPartial({
      creator: stafiHubAddress,
      pool: pool.poolAddress,
      value: {
        denom: rTokenDenom,
        amount: pool.amount,
      },
      recipient: chainAddress,
    }),
  }));

  const simulateResponse = await client.simulate(stafiHubAddress, messages, "");

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
    messages,
    fee
  );

  return response;
}

export async function sendIBCTransferTx(
  srcChainConfig: KeplrChainParams | null | undefined,
  sender: string,
  receiver: string,
  amount: string,
  sourcePort: string,
  sourceChannel: string,
  denom: string
): Promise<DeliverTxResponse | undefined> {
  // console.log("sendIBCTransferTx arguments:", arguments);

  if (!window.getOfflineSigner) {
    return;
  }

  if (!srcChainConfig) {
    throw new Error("srcChainConfig can not be empty");
  }

  const myRegistry = new Registry(defaultStargateTypes);
  const msgTypeUrl = "/ibc.applications.transfer.v1.MsgTransfer";
  myRegistry.register(msgTypeUrl, IBCMsgTransfer);

  const offlineSigner = window.getOfflineSigner(srcChainConfig.chainId);

  const client = await SigningStargateClient.connectWithSigner(
    srcChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  // const currentHeight = await client.getHeight();

  const clientState = await queryChannelClientState(
    srcChainConfig,
    sourceChannel
  );

  const message = {
    typeUrl: msgTypeUrl,
    value: IBCMsgTransfer.fromPartial({
      sourcePort,
      sourceChannel,
      token: {
        denom,
        amount,
      },
      sender,
      receiver,
      timeoutHeight: {
        revisionNumber: clientState?.latestHeight?.revisionNumber,
        revisionHeight: clientState?.latestHeight?.revisionHeight?.add(100000),
      },
    }),
  };

  const simulateResponse = await client.simulate(sender, [message], "");

  const fee = {
    amount: [
      {
        denom: srcChainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.5).toString(),
  };

  const response = await client.signAndBroadcast(sender, [message], fee);

  // console.log("message", message);
  // console.log("response", response);

  return response;
}

export async function sendClaimMintRewardTx(
  chainConfig: KeplrChainParams | null | undefined,
  sender: string,
  denom: string,
  cycle: Long,
  mintIndexes: Long[]
): Promise<DeliverTxResponse | undefined> {
  // console.log("sendClaimRewardTx arguments:", arguments);
  if (!window.getOfflineSigner) {
    return;
  }

  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const myRegistry = new Registry(defaultStargateTypes);
  const msgTypeUrl = "/stafihub.stafihub.rmintreward.MsgClaimMintReward";
  myRegistry.register(msgTypeUrl, MsgClaimMintReward);

  const offlineSigner = window.getOfflineSigner(chainConfig.chainId);

  const client = await SigningStargateClient.connectWithSigner(
    chainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const messages = mintIndexes.map((mintIndex) => ({
    typeUrl: msgTypeUrl,
    value: MsgClaimMintReward.fromPartial({
      creator: sender,
      denom,
      cycle,
      mintIndex,
    }),
  }));

  // const simulateResponse = await client.simulate(sender, messages, "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    // gas: Math.ceil(simulateResponse * 1.3).toString(),
    gas: "500000",
  };

  const response = await client.signAndBroadcast(sender, messages, fee);

  // console.log("sendClaimRewardTx message", messages);
  // console.log("sendClaimRewardTx response", response);

  return response;
}

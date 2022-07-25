import { Registry } from "@cosmjs/proto-signing";
import {
  coins,
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import {
  chains,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { humanToAtomic } from "@stafihub/apps-util";
import {
  IBCMsgTransfer,
  MsgLiquidityUnbond,
  MsgClaimMintReward,
} from "@stafihub/types";
import { queryChannelClientState } from ".";
import { createCosmosClient } from "./connection";

declare const window: any;

export async function sendStakeTx(
  chainId: string,
  inputAmount: string,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string
): Promise<DeliverTxResponse | undefined> {
  const client = await createCosmosClient(chainId);
  const fee = {
    amount: [
      {
        denom: chains[chainId].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    accountAddress,
    poolAddress,
    coins(
      humanToAtomic(inputAmount, chains[chainId].decimals),
      chains[chainId].denom
    ),
    fee,
    `1:${stafiHubAddress}`
  );
  return sendTokens;
}

export async function sendRecoveryTx(
  chainId: string,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string,
  txHash: string
): Promise<DeliverTxResponse | undefined> {
  const client = await createCosmosClient(chainId);
  const fee = {
    amount: [
      {
        denom: chains[chainId].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    accountAddress,
    poolAddress,
    coins(1, chains[chainId].denom),
    fee,
    `2:${stafiHubAddress}:${txHash}`
  );
  return sendTokens;
}

export async function sendChainTokens(
  amount: string,
  chainId: string,
  sender: string,
  targetAddress: string,
  memo: string
): Promise<DeliverTxResponse | undefined> {
  if (!chains[chainId]) {
    return;
  }
  const client = await createCosmosClient(chainId);
  const fee = {
    amount: [
      {
        denom: chains[chainId].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const response = await client?.sendTokens(
    sender,
    targetAddress,
    coins(amount, chains[chainId].denom),
    fee,
    memo
  );
  return response;
}

export async function sendLiquidityUnbondTx(
  chainId: string,
  chainAddress: string,
  stafiHubAddress: string,
  pools: { poolAddress: string; amount: string }[]
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    MsgLiquidityUnbond
  );

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const messages = pools.map((pool) => ({
    typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    value: MsgLiquidityUnbond.fromPartial({
      creator: stafiHubAddress,
      pool: pool.poolAddress,
      value: {
        denom: getRTokenDenom(chainId),
        amount: pool.amount,
      },
      recipient: chainAddress,
    }),
  }));

  const simulateResponse = await client.simulate(stafiHubAddress, messages, "");

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
    messages,
    fee
  );

  return response;
}

export async function sendIBCTransferTx(
  srcChainId: string,
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

  const myRegistry = new Registry(defaultStargateTypes);
  const msgTypeUrl = "/ibc.applications.transfer.v1.MsgTransfer";
  myRegistry.register(msgTypeUrl, IBCMsgTransfer);

  const offlineSigner = window.getOfflineSigner(srcChainId);

  const client = await SigningStargateClient.connectWithSigner(
    chains[srcChainId].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  // const currentHeight = await client.getHeight();

  const clientState = await queryChannelClientState(srcChainId, sourceChannel);

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
        revisionHeight: clientState?.latestHeight?.revisionHeight?.add(10000),
      },
    }),
  };

  const simulateResponse = await client.simulate(sender, [message], "");

  const fee = {
    amount: [
      {
        denom: chains[srcChainId].denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(sender, [message], fee);

  // console.log("message", message);
  // console.log("response", response);

  return response;
}

export async function sendClaimMintRewardTx(
  chainId: string,
  sender: string,
  denom: string,
  cycle: Long,
  mintIndexes: Long[]
): Promise<DeliverTxResponse | undefined> {
  // console.log("sendClaimRewardTx arguments:", arguments);
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  const msgTypeUrl = "/stafihub.stafihub.rmintreward.MsgClaimMintReward";
  myRegistry.register(msgTypeUrl, MsgClaimMintReward);

  const offlineSigner = window.getOfflineSigner(chainId);

  const client = await SigningStargateClient.connectWithSigner(
    chains[chainId].rpc,
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
        denom: chains[chainId].denom,
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

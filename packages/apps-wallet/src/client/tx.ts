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
import { IBCMsgTransfer, MsgLiquidityUnbond } from "@stafihub/types";
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
  inputAmount: string,
  chainAddress: string,
  stafiHubAddress: string,
  poolAddress: string
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

  const message = {
    typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    value: MsgLiquidityUnbond.fromPartial({
      creator: stafiHubAddress,
      pool: poolAddress,
      value: {
        denom: getRTokenDenom(chainId),
        amount: inputAmount,
      },
      recipient: chainAddress,
    }),
  };

  const fee = {
    amount: [
      {
        denom: chains[getStafiHubChainId()].denom,
        amount: "1",
      },
    ],
    gas: "500000",
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee,
    "use your power wisely"
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

  const currentHeight = await client.getHeight();

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
      // timeoutTimestamp: (new Date().valueOf() + 10000) * 1000000,
      timeoutHeight: {
        revisionHeight: currentHeight,
        revisionNumber: currentHeight + 100,
      },
    }),
  };

  const fee = {
    amount: [
      {
        denom: chains[srcChainId].denom,
        amount: "1",
      },
    ],
    gas: "180000",
  };

  const response = await client.signAndBroadcast(
    sender,
    [message],
    fee,
    "use your power wisely"
  );

  // console.log("message", message);

  // console.log("response", response);

  return response;
}

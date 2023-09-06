import {
  coins,
  DeliverTxResponse,
  MsgSendEncodeObject,
} from "@cosmjs/stargate";
import { humanToAtomic } from "@stafihub/apps-util";
import {
  getSigningCosmosClient,
  getSigningStafihubClient,
} from "@stafihub/types";
import Long from "long";
import { getOfflineSigner, queryChannelClientState, queryLatestBlock } from ".";
import { KeplrChainParams } from "../interface";
import { createCosmosClient } from "./connection";

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
    gas: chainConfig.gasLimit || "200000",
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
    gas: chainConfig.gasLimit || "200000",
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
    gas: chainConfig.gasLimit || "200000",
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
  if (!stafiHubChainConfig) {
    throw new Error("stafiHubChainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  // const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  //   ...defaultStargateTypes,
  //   ...LedgerProtoRegistry.registry,
  // ];
  // const registry = new Registry(protoRegistry);
  // myRegistry.register(
  //   "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
  //   MsgLiquidityUnbond
  // );
  // LedgerProtoRegistry.load(registry);

  // const aminoConverters = { ...LedgerAnimoConverter };
  // const aminoTypes = new AminoTypes({ ...aminoConverters });

  // const client = await SigningStargateClient.connectWithSigner(
  //   stafiHubChainConfig.rpc,
  //   offlineSigner,
  //   { registry, aminoTypes }
  // );

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  // const oldMessages = pools.map((pool) => ({
  //   typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
  //   value: MsgLiquidityUnbond.fromPartial({
  //     creator: stafiHubAddress,
  //     pool: pool.poolAddress,
  //     value: {
  //       denom: rTokenDenom,
  //       amount: pool.amount,
  //     },
  //     recipient: chainAddress,
  //   }),
  // }));

  // const aminoMessages = pools.map((pool) => ({
  //   typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
  //   value: LedgerAnimoConverter[
  //     "/stafihub.stafihub.ledger.MsgLiquidityUnbond"
  //   ].toAmino({
  //     creator: stafiHubAddress,
  //     pool: pool.poolAddress,
  //     value: {
  //       denom: rTokenDenom,
  //       amount: pool.amount,
  //     },
  //     recipient: chainAddress,
  //   }),
  // }));

  const messages = pools.map((pool) => {
    return {
      typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
      value: {
        creator: stafiHubAddress,
        pool: pool.poolAddress,
        value: {
          denom: rTokenDenom,
          amount: pool.amount,
        },
        recipient: chainAddress,
      },
    };
  });

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

export async function sendClaimMintRewardTx(
  chainConfig: KeplrChainParams | null | undefined,
  sender: string,
  denom: string,
  cycle: Long,
  mintIndexes: Long[]
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const offlineSigner = await getOfflineSigner(chainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: chainConfig.rpc,
    signer: offlineSigner,
  });

  const messages = mintIndexes.map((mintIndex) => ({
    typeUrl: "/stafihub.stafihub.rmintreward.MsgClaimMintReward",
    value: {
      creator: sender,
      denom,
      cycle,
      mintIndex,
    },
  }));

  const simulateResponse = await client.simulate(sender, messages, "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
    // gas: "500000",
  };

  const response = await client.signAndBroadcast(sender, messages, fee);

  // console.log("sendClaimRewardTx message", messages);
  // console.log("sendClaimRewardTx response", response);

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
  if (!srcChainConfig) {
    throw new Error("srcChainConfig can not be empty");
  }
  const offlineSigner = await getOfflineSigner(srcChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: srcChainConfig.rpc,
    signer: offlineSigner,
  });

  // const currentHeight = await client.getHeight();

  const clientState = await queryChannelClientState(
    srcChainConfig,
    sourceChannel
  );

  const latestBlockResult = await queryLatestBlock(srcChainConfig);
  const latestBlockNanoSeconds = (
    Number(latestBlockResult?.block?.header?.time?.getTime()) * 1000000
  ).toFixed(0);

  const message = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    value: {
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
      timeoutTimestamp: Number(latestBlockNanoSeconds) + 600000000000000 + "",
    },
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

export async function sendCosmosClientTx(
  chainConfig: KeplrChainParams | null | undefined,
  userAddress: string,
  messages: { typeUrl: any; value: any }[],
  memo?: string
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(chainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningCosmosClient({
    rpcEndpoint: chainConfig.rpc,
    signer: offlineSigner,
  });

  const simulateResponse = await client.simulate(userAddress, messages, "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(
    userAddress,
    messages,
    fee,
    memo
  );

  return response;
}

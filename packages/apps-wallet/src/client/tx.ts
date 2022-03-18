import { Registry } from "@cosmjs/proto-signing";
import {
  coins,
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import {
  chains,
  getCosmosNetwork,
  STAFIHUB_NETWORK,
} from "@stafihub/apps-config";
import { humanToAtomic } from "@stafihub/apps-util";
import { MsgLiquidityUnbond } from "@stafihub/types";
import { createCosmosClient } from "./connection";

declare const window: any;

export async function sendStakeTx(
  inputAmount: string,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string
): Promise<boolean> {
  const network = getCosmosNetwork();

  const client = await createCosmosClient(network);
  const fee = {
    amount: [
      {
        denom: chains[network].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    accountAddress,
    poolAddress,
    coins(
      humanToAtomic(inputAmount, chains[network].decimals),
      chains[network].denom
    ),
    fee,
    `1:${stafiHubAddress}`
  );
  console.log("txHash", sendTokens?.transactionHash);
  return sendTokens?.code === 0;
}

export async function sendChainTokens(
  amount: string,
  chainName: string,
  sender: string,
  targetAddress: string,
  memo: string
): Promise<DeliverTxResponse | undefined> {
  if (!chains[chainName]) {
    return;
  }
  try {
    const client = await createCosmosClient(chainName);
    const fee = {
      amount: [
        {
          denom: chains[chainName].denom,
          amount: "5000",
        },
      ],
      gas: "200000",
    };
    const response = await client?.sendTokens(
      sender,
      targetAddress,
      coins(amount, chains[chainName].denom),
      fee,
      memo
    );
    console.log("txHash", response?.transactionHash);
    return response;
  } catch (err: unknown) {
    console.log("sendChainTokens err", err);
    return;
  }
}

export async function sendLiquidityUnbondTx(
  inputAmount: string,
  chainAddress: string,
  stafiHubAddress: string,
  poolAddress: string
) {
  if (!window.getOfflineSigner) {
    return false;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    MsgLiquidityUnbond
  );

  const offlineSigner = window.getOfflineSigner(
    chains[STAFIHUB_NETWORK].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[STAFIHUB_NETWORK].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    value: MsgLiquidityUnbond.fromPartial({
      creator: stafiHubAddress,
      pool: poolAddress,
      value: {
        denom: "uriris",
        amount: inputAmount,
      },
      recipient: chainAddress,
    }),
  };

  console.log("message", message);

  const fee = {
    amount: [
      {
        denom: chains[STAFIHUB_NETWORK].denom,
        amount: "2000",
      },
    ],
    gas: "180000",
  };

  const response = await client.signAndBroadcast(
    stafiHubAddress,
    [message],
    fee,
    "use your power wisely"
  );

  return response.code === 0;
}

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
import { MsgLiquidityUnbond } from "@stafihub/types";
import { createCosmosClient } from "./connection";

declare const window: any;

export async function sendStakeTx(
  chainId: string,
  inputAmount: string,
  accountAddress: string,
  stafiHubAddress: string,
  poolAddress: string
): Promise<DeliverTxResponse | undefined> {
  try {
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
  } catch {
    return;
  }
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
  try {
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
  } catch (err: unknown) {
    console.log("sendChainTokens err", err);
    return;
  }
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

  try {
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

    return response;
  } catch {
    return;
  }
}

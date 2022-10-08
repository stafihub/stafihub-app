import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgSwap, MsgAddLiquidity, MsgRemoveLiquidity } from "@stafihub/types";
import { getOfflineSigner } from "..";
import { KeplrChainParams } from "../../interface";

declare const window: any;

interface Coin {
  denom: string;
  amount: string;
}

export async function sendRDexSwapTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  swapPoolIndex: number,
  inputToken: Coin,
  minOutToken: Coin
): Promise<DeliverTxResponse | undefined> {
  if (!stafiHubChainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.rdex.MsgSwap", MsgSwap);

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.rdex.MsgSwap",
    value: MsgSwap.fromPartial({
      creator: stafiHubAddress,
      swapPoolIndex,
      inputToken,
      minOutToken,
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

export async function sendRDexAddLiquidityTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  swapPoolIndex: number,
  token0: Coin,
  token1: Coin
): Promise<DeliverTxResponse | undefined> {
  if (!stafiHubChainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.rdex.MsgAddLiquidity",
    MsgAddLiquidity
  );

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.rdex.MsgAddLiquidity",
    value: MsgAddLiquidity.fromPartial({
      creator: stafiHubAddress,
      swapPoolIndex,
      token0,
      token1,
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

export async function sendRDexRemoveLiquidityTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  swapPoolIndex: number,
  rmUnit: string,
  swapUnit: string,
  minOutToken0: Coin,
  minOutToken1: Coin,
  inputTokenDenom: string
): Promise<DeliverTxResponse | undefined> {
  if (!stafiHubChainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.rdex.MsgRemoveLiquidity",
    MsgRemoveLiquidity
  );

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.rdex.MsgRemoveLiquidity",
    value: MsgRemoveLiquidity.fromPartial({
      creator: stafiHubAddress,
      swapPoolIndex,
      rmUnit,
      swapUnit,
      minOutToken0,
      minOutToken1,
      inputTokenDenom,
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

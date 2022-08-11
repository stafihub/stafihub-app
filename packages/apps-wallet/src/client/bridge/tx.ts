import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgBridgeDeposit } from "@stafihub/types";
import { KeplrChainParams } from "../../interface";

declare const window: any;

export async function sendBridgeDepositTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  destChainId: number,
  denom: string,
  amount: string,
  receiver: string
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  if (!stafiHubChainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.bridge.MsgDeposit", MsgBridgeDeposit);

  const offlineSigner = window.getOfflineSigner(stafiHubChainConfig.chainId);

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.bridge.MsgDeposit",
    value: MsgBridgeDeposit.fromPartial({
      creator: stafiHubAddress,
      destChainId,
      denom,
      amount,
      receiver,
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

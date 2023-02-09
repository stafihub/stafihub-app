import { DeliverTxResponse } from "@cosmjs/stargate";
import { getSigningStafihubClient } from "@stafihub/types";
import { getOfflineSigner } from "..";
import { KeplrChainParams } from "../../interface";

export async function sendBridgeDepositTx(
  stafiHubChainConfig: KeplrChainParams | null | undefined,
  stafiHubAddress: string,
  destChainId: number,
  denom: string,
  amount: string,
  receiver: string
): Promise<DeliverTxResponse | undefined> {
  if (!stafiHubChainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/stafihub.stafihub.bridge.MsgDeposit",
    value: {
      creator: stafiHubAddress,
      destChainId,
      denom,
      amount,
      receiver,
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

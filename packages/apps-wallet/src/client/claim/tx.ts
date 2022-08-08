import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { chains, getStafiHubChainId } from "@stafihub/apps-config";
import { Coin, MsgAirdropClaim } from "@stafihub/types";

declare const window: any;

export async function getAirdropClaimTxSimulate(
  stafiHubAddress: string,
  round: number,
  index: number,
  coin: Coin,
  proof: string[]
): Promise<number | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.claim.MsgClaim", MsgAirdropClaim);

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.claim.MsgClaim",
    value: MsgAirdropClaim.fromPartial({
      creator: stafiHubAddress,
      round,
      index,
      account: stafiHubAddress,
      coin,
      proof,
    }),
  };

  const simulateResponse = await client.simulate(
    stafiHubAddress,
    [message],
    ""
  );

  return simulateResponse;
}

export async function sendAirdropClaimTx(
  stafiHubAddress: string,
  round: number,
  index: number,
  coin: Coin,
  proof: string[]
): Promise<DeliverTxResponse | undefined> {
  if (!window.getOfflineSigner) {
    return;
  }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.claim.MsgClaim", MsgAirdropClaim);

  const offlineSigner = window.getOfflineSigner(
    chains[getStafiHubChainId()].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    chains[getStafiHubChainId()].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const message = {
    typeUrl: "/stafihub.stafihub.claim.MsgClaim",
    value: MsgAirdropClaim.fromPartial({
      creator: stafiHubAddress,
      round,
      index,
      account: stafiHubAddress,
      coin,
      proof,
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

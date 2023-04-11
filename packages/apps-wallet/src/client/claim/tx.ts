import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  DeliverTxResponse,
  SigningStargateClient,
} from "@cosmjs/stargate";
import {
  Coin,
  getSigningStafihubClient,
  MsgAirdropClaim,
} from "@stafihub/types";
import { getOfflineSigner } from "..";
import { KeplrChainParams } from "../../interface";

export async function getAirdropClaimTxSimulate(
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  round: number,
  index: number,
  coin: Coin,
  proof: string[]
): Promise<number | undefined> {
  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register("/stafihub.stafihub.claim.MsgClaim", MsgAirdropClaim);

  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await SigningStargateClient.connectWithSigner(
    stafiHubChainConfig.rpc,
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
  stafiHubChainConfig: KeplrChainParams,
  stafiHubAddress: string,
  round: number,
  index: number,
  coin: Coin,
  proof: string[]
): Promise<DeliverTxResponse | undefined> {
  const offlineSigner = await getOfflineSigner(stafiHubChainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  const client = await getSigningStafihubClient({
    rpcEndpoint: stafiHubChainConfig.rpc,
    signer: offlineSigner,
  });

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

import { DeliverTxResponse } from "@cosmjs/stargate";
import { getSigningCosmosClient } from "@stafihub/types";
import { getOfflineSigner } from "..";
import { KeplrChainParams } from "../../interface";

export async function sendDelegateMsgTx(
  chainConfig: KeplrChainParams | null | undefined,
  userAddress: string,
  validatorAddress: string,
  coinDenom: string,
  coinAmount: string
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

  const message = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: {
      delegatorAddress: userAddress,
      validatorAddress,
      amount: {
        denom: coinDenom,
        amount: coinAmount,
      },
    },
  };

  const simulateResponse = await client.simulate(userAddress, [message], "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(userAddress, [message], fee);

  return response;
}

export async function sendTokenizeSharesTx(
  chainConfig: KeplrChainParams | null | undefined,
  userAddress: string,
  validatorAddress: string,
  coinDenom: string,
  coinAmount: string
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

  const message = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
    value: {
      delegatorAddress: userAddress,
      validatorAddress,
      tokenizedShareOwner: userAddress,
      amount: {
        denom: coinDenom,
        amount: coinAmount,
      },
    },
  };

  const simulateResponse = await client.simulate(userAddress, [message], "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(userAddress, [message], fee);

  return response;
}

export async function sendTransferTokenizeSharesTx(
  chainConfig: KeplrChainParams | null | undefined,
  sender: string,
  newOwner: string,
  recordId: Long
): Promise<DeliverTxResponse | undefined> {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(chainConfig.chainId);
  if (!offlineSigner) {
    return;
  }

  console.log("111", sender, newOwner, recordId);

  const client = await getSigningCosmosClient({
    rpcEndpoint: chainConfig.rpc,
    signer: offlineSigner,
  });

  const message = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
    value: {
      sender,
      newOwner,
      tokenizeShareRecordId: recordId,
    },
  };

  const simulateResponse = await client.simulate(sender, [message], "");

  const fee = {
    amount: [
      {
        denom: chainConfig.denom,
        amount: "1",
      },
    ],
    gas: Math.ceil(simulateResponse * 1.3).toString(),
  };

  const response = await client.signAndBroadcast(sender, [message], fee);

  return response;
}

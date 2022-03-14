import { Registry, TxBodyEncodeObject } from "@cosmjs/proto-signing";
import {
  coins,
  defaultRegistryTypes as defaultStargateTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { cosmosConfig, getCosmosNetwork } from "@stafihub/apps-config";
import { MsgLiquidityUnbond } from "@stafihub/types";
import { createMsgService } from ".";
import { createCosmosClient } from "./connection";
import { decodeTxRaw } from "@cosmjs/proto-signing";
import { fromBase64, toHex } from "@cosmjs/encoding";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { TxRaw } from "@stafihub/types";

declare const window: any;

export async function sendStakeTx(poolAddress: string) {
  const network = getCosmosNetwork();

  const client = await createCosmosClient(network);
  const fee = {
    amount: [
      {
        denom: cosmosConfig[network].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    "iaa15lne70yk254s0pm2da6g59r82cjymzjqz9sa5h",
    poolAddress,
    coins(1000000, cosmosConfig[network].denom),
    fee,
    "1:stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7"
  );
  // const success = sendTokens?.code === 0;
}

export async function sendStafiHubTokens(targetAddress: string) {
  const network = "stafiHub";

  const client = await createCosmosClient(network);
  const fee = {
    amount: [
      {
        denom: cosmosConfig[network].denom,
        amount: "5000",
      },
    ],
    gas: "200000",
  };
  const sendTokens = await client?.sendTokens(
    "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
    targetAddress,
    coins(1000000, cosmosConfig[network].denom),
    fee
  );
  // const success = sendTokens?.code === 0;
}

export async function liquidityUnbond() {
  if (!window.getOfflineSigner) {
    return;
  }

  // if (true) {
  //   const decoded = decodeTxRaw(
  //     fromBase64(
  //       "CixzdGFmaTE1bG5lNzB5azI1NHMwcG0yZGE2ZzU5cjgyY2p5bXpqcXZ2cXh6NxIsdGVycmExcHc1NmpzOW5lNHY0ZHU1eWhreGxxamdtYXV1ODJ4bXdoajM4ZWEaBjEwMDAwMCIsdGVycmExNWxuZTcweWsyNTRzMHBtMmRhNmc1OXI4MmNqeW16anEzcjJ2NXg="
  //     )
  //   );
  //   console.log("decoded", decoded);
  //   return;
  // }

  // if (true) {
  //   const service = await createMsgService();
  //   service.LiquidityUnbond({
  //     creator: "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
  //     pool: "urluna",
  //     value: "100000",
  //     recipient: "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
  //   });
  //   return;
  // }

  const myRegistry = new Registry(defaultStargateTypes);
  myRegistry.register(
    "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    MsgLiquidityUnbond
  );
  const stafiHubNetwork = "stafiHub";

  const offlineSigner = window.getOfflineSigner(
    cosmosConfig[stafiHubNetwork].chainId
  );

  const client = await SigningStargateClient.connectWithSigner(
    cosmosConfig[stafiHubNetwork].rpc,
    offlineSigner,
    { registry: myRegistry }
  );

  const myAddress = "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7";
  const message = {
    typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
    value: MsgLiquidityUnbond.fromPartial({
      creator: "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
      pool: "iaa15nplt4wf696d05lffgpjksf9v2ylf0s5vzzm3l",
      value: "1uriris",
      recipient: "iaa15lne70yk254s0pm2da6g59r82cjymzjqz9sa5h",
    }),
  };

  console.log("message", message);

  const fee = {
    amount: [
      // {
      //   denom: cosmosConfig[network].denom,
      //   amount: "2000",
      // },
    ],
    gas: "180000",
  };

  // if (true) {
  //   const cosmJS = new SigningCosmosClient(
  //     cosmosConfig[network].restEndpoint,
  //     "stafi15lne70yk254s0pm2da6g59r82cjymzjqvvqxz7",
  //     offlineSigner
  //   );

  //   cosmJS.signAndBroadcast([message], fee);
  //   return;
  // }

  // const response = await client.signAndBroadcast(
  //   myAddress,
  //   [message],
  //   fee,
  //   "use your power wisely"
  // );

  const txRaw = await client.sign(
    myAddress,
    [message],
    fee,
    "use your power wisely"
  );

  // console.log("response", JSON.stringify(txRaw));
  // console.log("response bodyBytes", toHex(txRaw.bodyBytes));
  // console.log("response authInfoBytes", toHex(txRaw.authInfoBytes));
  // console.log("response signatures", toHex(txRaw.signatures[0]));

  // const arr = stringToUint(JSON.stringify(txRaw));
  // console.log("txRaw Hex", toHex(arr));

  const encoded = TxRaw.encode(txRaw);
  // console.log("txRaw encode", toHex(encoded.finish()));
  console.log("txRaw encode decode", decodeTxRaw(encoded.finish()));

  // client.broadcastTx(encoded.finish());
}

function stringToUint(str: string) {
  var response = btoa(unescape(encodeURIComponent(str)));
  const charList = response.split("");
  const uintArray = [];
  for (var i = 0; i < charList.length; i++) {
    uintArray.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(uintArray);
}

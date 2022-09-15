import { SigningStargateClient } from "@cosmjs/stargate";
import { DetailKeplrChainParams, KeplrChainParams } from "../interface";

declare const window: any;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function connectAtomjs(
  chainConfig: DetailKeplrChainParams | null | undefined
) {
  await timeout(500);
  if (!window.getOfflineSigner || !window.keplr) {
    // message.error("Please install Keplr extension");
    return;
  }

  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const enableResult = await innerConnectKeplr(chainConfig);
  return enableResult;
}

async function innerConnectKeplr(chainConfig: DetailKeplrChainParams) {
  if (
    window.keplr.experimentalSuggestChain &&
    !chainConfig.isNativeKeplrChain
  ) {
    let parameter = {
      chainId: chainConfig.chainId,
      chainName: chainConfig.chainName,
      rpc: chainConfig.rpc,
      rest: chainConfig.restEndpoint,
      stakeCurrency: {
        coinDenom: chainConfig.coinDenom,
        coinMinimalDenom: chainConfig.denom,
        coinDecimals: 6,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: chainConfig.bech32Config,
      currencies: [
        {
          coinDenom: chainConfig.coinDenom,
          coinMinimalDenom: chainConfig.denom,
          coinDecimals: 6,
        },
        ...(chainConfig.currencies || []),
      ],
      feeCurrencies: [
        {
          coinDenom: chainConfig.coinDenom,
          coinMinimalDenom: chainConfig.denom,
          coinDecimals: 6,
          gasPriceStep: chainConfig.gasPriceStep || {
            low: 0.01,
            average: 0.02,
            high: 0.04,
          },
        },
      ],
    };
    await window.keplr.experimentalSuggestChain(parameter);
  } else {
    //   message.error("Please use the recent version of keplr extension");
    console.error("Please use the recent version of keplr extension");
  }

  const enableResult = await window.keplr.enable(chainConfig.chainId);
  return enableResult;
}

export async function createCosmosClient(
  chainConfig: KeplrChainParams | null | undefined
) {
  await timeout(500);
  if (!window.getOfflineSigner) {
    return null;
  }

  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = window.getOfflineSigner(chainConfig.chainId);
  const cosmosClient = SigningStargateClient.connectWithSigner(
    chainConfig.rpc,
    offlineSigner
  );
  return cosmosClient;
}

export async function getKeplrAccount(chainId: string) {
  await timeout(500);
  if (!window.keplr) {
    return;
  }
  return await window.keplr.getKey(chainId);
}

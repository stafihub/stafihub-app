import { OfflineSigner } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { DetailKeplrChainParams, KeplrChainParams } from "../interface";

declare const window: any;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getOfflineSigner(
  chainId: string
): Promise<OfflineSigner | null> {
  await timeout(500);

  // if (!window.getOfflineSignerOnlyAmino) {
  //   return null;
  // }
  // return window.getOfflineSignerOnlyAmino(chainId);

  if (!window.getOfflineSignerAuto) {
    return null;
  }
  return window.getOfflineSignerAuto(chainId);
}

export async function connectAtomjs(
  chainConfig: DetailKeplrChainParams | null | undefined
) {
  await timeout(500);
  if (!window.getOfflineSignerAuto || !window.keplr) {
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
        coinDecimals: chainConfig.decimals,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: chainConfig.bech32Config,
      currencies: [
        {
          coinDenom: chainConfig.coinDenom,
          coinMinimalDenom: chainConfig.denom,
          coinDecimals: chainConfig.decimals,
        },
        ...(chainConfig.currencies || []),
      ],
      feeCurrencies: [
        {
          coinDenom: chainConfig.coinDenom,
          coinMinimalDenom: chainConfig.denom,
          coinDecimals: chainConfig.decimals,
          gasPriceStep: chainConfig.gasPriceStep || {
            low: 0.01,
            average: 0.025,
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
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }

  const offlineSigner = await getOfflineSigner(chainConfig.chainId);
  if (!offlineSigner) {
    return null;
  }

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

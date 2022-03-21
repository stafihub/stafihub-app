import { SigningStargateClient } from "@cosmjs/stargate";
import { chains } from "@stafihub/apps-config";

declare const window: any;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function connectAtomjs(chainId: string) {
  await timeout(500);
  if (!window.getOfflineSigner || !window.keplr) {
    // message.error("Please install Keplr extension");
    return;
  }

  const enableResult = await innerConnectKeplr(chainId);
  return enableResult;
}

async function innerConnectKeplr(chainId: string) {
  if (window.keplr.experimentalSuggestChain) {
    let parameter = {
      // Chain-id of the Cosmos SDK chain.
      chainId: chains[chainId].chainId,
      // The name of the chain to be displayed to the user.
      chainName: chains[chainId].chainName,
      // RPC endpoint of the chain.
      rpc: chains[chainId].rpc,
      // REST endpoint of the chain.
      rest: chains[chainId].restEndpoint,
      // Staking coin information
      stakeCurrency: {
        // Coin denomination to be displayed to the user.
        coinDenom: chains[chainId].coinDenom,
        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
        coinMinimalDenom: chains[chainId].denom,
        // # of decimal points to convert minimal denomination to user-facing denomination.
        coinDecimals: 6,
      },
      // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
      // The 'stake' button in Keplr extension will link to the webpage.
      // walletUrlForStaking: "",
      // The BIP44 path.
      bip44: {
        // You can only set the coin type of BIP44.
        // 'Purpose' is fixed to 44.
        coinType: 118,
      },
      // Bech32 configuration to show the address to user.
      bech32Config: chains[chainId].bech32Config,
      // List of all coin/tokens used in this chain.
      currencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: chains[chainId].coinDenom,
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: chains[chainId].denom,
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
        },
      ],
      // List of coin/tokens used as a fee token in this chain.
      feeCurrencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: chains[chainId].coinDenom,
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: chains[chainId].denom,
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
        },
      ],
      // (Optional) The number of the coin type.
      // This field is only used to fetch the address from ENS.
      // Ideally, it is recommended to be the same with BIP44 path's coin type.
      // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
      // So, this is separated to support such chains.
      coinType: 118,
      // (Optional) This is used to set the fee of the transaction.
      // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
      // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
      // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
    };
    try {
      // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
      // cosmoshub-3 is integrated to Keplr so the code should return without errors.
      // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
      // If the user approves, the chain will be added to the user's Keplr extension.
      // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
      // If the same chain id is already registered, it will resolve and not require the user interactions.
      await window.keplr.experimentalSuggestChain(parameter);
    } catch {
      // message.error("Failed to suggest the chain");
    }
  } else {
    //   message.error("Please use the recent version of keplr extension");
    console.error("Please use the recent version of keplr extension");
  }

  const enableResult = await window.keplr.enable(chains[chainId].chainId);
  return enableResult;
}

export async function createCosmosClient(chainId: string) {
  await timeout(500);
  if (!window.getOfflineSigner) {
    return null;
  }

  const offlineSigner = window.getOfflineSigner(chainId);
  const cosmosClient = SigningStargateClient.connectWithSigner(
    chains[chainId].rpc,
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

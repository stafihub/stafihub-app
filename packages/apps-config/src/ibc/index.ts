import { getStafiHubChainId, IbcConfig, isDev } from "..";

let jsonConfigs = require.context("./mainnet", false, /\.json$/);
if (isDev()) {
  jsonConfigs = require.context("./testnet", false, /\.json$/);
}

const update: IbcConfig = {};
jsonConfigs.keys().forEach((k) => {
  const list = jsonConfigs(k);
  list.forEach((config: any) => {
    config.srcChainId = getStafiHubChainId();
    (update as any)[config.dstChainId] = config;
  });
});

// console.log("update", update);
export const ibcConfigs = update;

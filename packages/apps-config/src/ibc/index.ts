import { IbcConfig, isDev } from "..";

let jsonConfigs = require.context("./mainnet", false, /\.json$/);
if (isDev()) {
  jsonConfigs = require.context("./testnet", false, /\.json$/);
}

const update: IbcConfig = {};
jsonConfigs.keys().forEach((k) => {
  const list = jsonConfigs(k);
  list.forEach((config: any) => {
    (update as any)[config.chainIdPair] = config;
  });
});

// console.log("update", update);
export const ibcConfigs = update;

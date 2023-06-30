import { IbcConfig } from "../index";
import { mainnetConfig } from "./mainnet";
import { testnetConfig } from "./testnet";

// let jsonConfigs = require.context("./mainnet", false, /\.json$/);
// if (isDev()) {
//   jsonConfigs = require.context("./testnet", false, /\.json$/);
// }

const isDev = process.env.REACT_APP_ENV !== "production";

const configs = isDev ? testnetConfig : mainnetConfig;
const stafihubChainId = isDev ? "stafihub-testnet-2" : "stafihub-1";

const update: IbcConfig = {};
// configs.forEach((k: string) => {
//   const list = jsonConfigs(k);
//   list.forEach((config: any) => {
//     config.srcChainId = getStafiHubChainId();
//     (update as any)[config.dstChainId] = config;
//   });
// });

configs.forEach((config: any) => {
  config.srcChainId = stafihubChainId;
  (update as any)[config.dstChainId] = config;
});

// console.log("update", update);
export const ibcConfigs = update;

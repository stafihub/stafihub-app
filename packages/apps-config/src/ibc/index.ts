import { keys } from "lodash";
import { mainnetConfig } from "./mainnet";
import { testnetConfig } from "./testnet";

// let jsonConfigs = require.context("./mainnet", false, /\.json$/);
// if (isDev()) {
//   jsonConfigs = require.context("./testnet", false, /\.json$/);
// }

// const isDev = process.env.NEXT_PUBLIC_ENV !== "production";
// const isDev = false;

// const configs = isDev ? testnetConfig : mainnetConfig;
const testnetStafihubChainId = "stafihub-testnet-2";
const mainnetStafihubChainId = "stafihub-1";

// const update: IbcConfig = {};
// configs.forEach((k: string) => {
//   const list = jsonConfigs(k);
//   list.forEach((config: any) => {
//     config.srcChainId = getStafiHubChainId();
//     (update as any)[config.dstChainId] = config;
//   });
// });

// configs.forEach((config: any) => {
//   config.srcChainId = stafihubChainId;
//   (update as any)[config.dstChainId] = config;
// });

// console.log("update", update);
// export const ibcConfigs = update;

const ibcConfigs: {
  [key in "mainnet" | "testnet" | "devnet"]: any;
} = {
  mainnet: {},
  testnet: {},
  devnet: {},
};

let configs2 = {
  mainnet: mainnetConfig,
  testnet: testnetConfig,
  devnet: testnetConfig,
};

keys(configs2).forEach((net: string) => {
  const update: any = {};
  configs2[net as "mainnet" | "testnet" | "devnet"]
    // .keys()
    .forEach((c: any) => {
      c.srcChainId =
        net === "mainnet" ? mainnetStafihubChainId : testnetStafihubChainId;
      (update as any)[c.dstChainId] = c;
    });
  ibcConfigs[net as "mainnet" | "testnet" | "devnet"] = update;
});

export const ibcConfigsV2 = ibcConfigs;

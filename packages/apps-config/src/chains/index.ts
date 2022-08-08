import { isDev, NetworkConfig } from "..";
import { keys } from "lodash";

let configs = require.context("./mainnet", false, /\.json$/);
if (isDev()) {
  configs = require.context("./testnet", false, /\.json$/);
  // configs = require.context("./devnet", false, /\.json$/);
}

const update: NetworkConfig = {};
configs.keys().forEach((k: string) => {
  const c = configs(k);
  (update as any)[c.chainId] = c;
});

// export const chains = update;

let configs2 = {
  mainnet: require.context("./mainnet", false, /\.json$/),
  testnet: require.context("./testnet", false, /\.json$/),
  devnet: require.context("./devnet", false, /\.json$/),
};

const chainConfigs: {
  [key in "mainnet" | "testnet" | "devnet"]: NetworkConfig;
} = {
  mainnet: {},
  testnet: {},
  devnet: {},
};

keys(configs2).forEach((net: string) => {
  const update: NetworkConfig = {};
  configs2[net as "mainnet" | "testnet" | "devnet"]
    .keys()
    .forEach((k: string) => {
      const c = configs2[net as "mainnet" | "testnet" | "devnet"](k);
      (update as any)[c.chainId] = c;
    });
  chainConfigs[net as "mainnet" | "testnet" | "devnet"] = update;
});

export const chainsV2 = chainConfigs;

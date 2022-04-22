import { isDev, NetworkConfig } from "..";

let configs = require.context("./mainnet", false, /\.json$/);
if (isDev()) {
  configs = require.context("./testnet", false, /\.json$/);
}

const update: NetworkConfig = {};
configs.keys().forEach((k) => {
  const c = configs(k);
  (update as any)[c.chainId] = c;
});

export const chains = update;

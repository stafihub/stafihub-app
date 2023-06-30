import { NetworkConfig } from "..";
import { keys } from "lodash";
import { mainnetConfig } from "./mainnet";
import { testnetConfig } from "./testnet";
import { devnetConfig } from "./devnet";

// let configs = require.context("./mainnet", false, /\.json$/);
// if (isDev()) {
//   configs = require.context("./testnet", false, /\.json$/);
//   // configs = require.context("./devnet", false, /\.json$/);
// }

// const update: NetworkConfig = {};
// configs.keys().forEach((k: string) => {
//   const c = configs(k);
//   (update as any)[c.chainId] = c;
// });

// export const chains = update;

// fs.readdir("/mainnet", (err: any, files: any) => {
//   files.forEach((file: any) => {
//     console.log(file);
//     fs.readFile(file, "utf-8", function (err: any, data: any) {
//       if (err) throw err;

//       var obj = JSON.parse(data);
//       console.log({ obj });
//     });
//   });
// });
// const fs = require("fs");

// fs.readdir("./mainnet", (err: any, files: any) => {
//   files.forEach((file: any) => {
//     console.log(file);
//   });
// });

// var recursive = require("recursive-readdir");

// recursive("./mainnet", function (err, files) {
//   // `files` is an array of file paths
//   // console.log(files);
//   files.forEach((file) => {
//     const ss = require(file);
//     console.log({ ss });
//   });
// });

// const { fs, path } = require("filer");

// fs.readdir(path.resolve("./mainnet"), (err: any, files: any) => {
//   console.log({ err });
//   console.log({ files });
//   files.forEach((file: any) => {
//     console.log(file);
//   });
// });

let configs2 = {
  mainnet: mainnetConfig,
  testnet: testnetConfig,
  devnet: devnetConfig,
  // mainnet: require.context("./mainnet", false, /\.json$/),
  // testnet: require.context("./testnet", false, /\.json$/),
  // devnet: require.context("./devnet", false, /\.json$/),
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
    // .keys()
    .forEach((c: any) => {
      // const c = configs2[net as "mainnet" | "testnet" | "devnet"](k);
      (update as any)[c.chainId] = c;
    });
  chainConfigs[net as "mainnet" | "testnet" | "devnet"] = update;
});

export const chainsV2 = chainConfigs;

const config = {
  chainName: "StaFi-Hub-Devnet",
  chainId: "stafihub-public-devnet-1",
  displayHubName: "StaFiHub",
  rpc: "https://dev-rpc1.stafihub.io",
  restEndpoint: "https://dev-rest1.stafihub.io",
  denom: "ufis",
  coinDenom: "FIS",
  decimals: 6,
  bech32Config: {
    bech32PrefixAccAddr: "stafi",
    bech32PrefixAccPub: "stafipub",
    bech32PrefixValAddr: "stafivaloper",
    bech32PrefixValPub: "stafivaloperpub",
    bech32PrefixConsAddr: "stafivalcons",
    bech32PrefixConsPub: "stafivalconspub",
  },
  currencies: [
    {
      coinDenom: "rATOM",
      coinMinimalDenom: "uratom",
      coinDecimals: 6,
    },
  ],
  explorerUrl: "https://devnet-explorer.stafihub.io/stafi-hub-devnet",
  gasLimit: "200000",
};

export default config;

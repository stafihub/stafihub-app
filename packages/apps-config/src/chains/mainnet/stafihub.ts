const config = {
  chainName: "StaFi Hub",
  chainId: "stafihub-1",
  displayHubName: "StaFiHub",
  rpc: "https://public-rpc1.stafihub.io",
  restEndpoint: "https://public-rest-rpc1.stafihub.io",
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
    {
      coinDenom: "rIRIS",
      coinMinimalDenom: "uriris",
      coinDecimals: 6,
    },
    {
      coinDenom: "rHUAHUA",
      coinMinimalDenom: "urhuahua",
      coinDecimals: 6,
    },
    {
      coinDenom: "rSWTH",
      coinMinimalDenom: "urswth",
      coinDecimals: 8,
    },
  ],
  explorerUrl: "https://www.mintscan.io/stafi",
  isNativeKeplrChain: false,
  gasLimit: "200000",
};

export default config;

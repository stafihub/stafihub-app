const config = {
  chainName: "IRISnet",
  chainId: "irishub-1",
  displayHubName: "IRISnetHub",
  rpc: "https://rpc-irisnet-ia.cosmosia.notional.ventures",
  restEndpoint: "https://api-irisnet-ia.cosmosia.notional.ventures",
  denom: "uiris",
  coinDenom: "IRIS",
  decimals: 6,
  bech32Config: {
    bech32PrefixAccAddr: "iaa",
    bech32PrefixAccPub: "iap",
    bech32PrefixValAddr: "iva",
    bech32PrefixValPub: "ivp",
    bech32PrefixConsAddr: "ica",
    bech32PrefixConsPub: "icp",
  },
  explorerUrl: "https://www.mintscan.io/iris",
  defaultApy: "9.21",
  sortIndex: 2,
  isNativeKeplrChain: true,
  stakeReserveAmount: 0.5,
  gasLimit: "80000",
};

export default config;

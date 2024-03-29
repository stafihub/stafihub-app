const config = {
  chainName: "IRISnet-Testnet",
  chainId: "irishub-stafi-1",
  displayHubName: "IRISnetHub",
  rpc: "https://test-iris-rpc1.stafihub.io",
  restEndpoint: "https://test-iris-rest1.stafihub.io",
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
  explorerUrl: "https://testnet-explorer.stafihub.io/irisnet-testnet",
  defaultApy: "10",
  sortIndex: 2,
  stakeReserveAmount: 0.5,
  gasLimit: "80000",
};

export default config;

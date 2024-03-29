const config = {
  chainName: "Chihuahua-Testnet",
  chainId: "chihuahua-stafi-1",
  displayHubName: "Chihuahua",
  rpc: "https://test-chihuahua-rpc1.stafihub.io",
  restEndpoint: "https://test-chihuahua-rest1.stafihub.io",
  denom: "uhuahua",
  coinDenom: "HUAHUA",
  decimals: 6,
  bech32Config: {
    bech32PrefixAccAddr: "chihuahua",
    bech32PrefixAccPub: "chihuahuapub",
    bech32PrefixValAddr: "chihuahuavaloper",
    bech32PrefixValPub: "chihuahuavaloperpub",
    bech32PrefixConsAddr: "chihuahuavalcons",
    bech32PrefixConsPub: "chihuahuavalconspub",
  },
  explorerUrl: "https://testnet-explorer.stafihub.io/chihuahua-testnet",
  defaultApy: "91",
  sortIndex: 3,
  stakeReserveAmount: 1,
  gasLimit: "100000",
};

export default config;

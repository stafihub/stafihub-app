const config = {
  chainName: "Chihuahua",
  chainId: "chihuahua-1",
  displayHubName: "Chihuahua",
  rpc: "https://chihuahua-public-rpc1.stafihub.io",
  restEndpoint: "https://chihuahua-public-rest1.stafihub.io",
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
  explorerUrl: "https://www.mintscan.io/chihuahua",
  defaultApy: "55.71",
  sortIndex: 3,
  isNativeKeplrChain: false,
  stakeReserveAmount: 1,
  gasLimit: "100000",
};

export default config;

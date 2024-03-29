const config = {
  chainName: "Carbon",
  chainId: "carbon-1",
  displayHubName: "Carbon",
  rpc: "https://tm-api.carbon.network",
  restEndpoint: "https://api.carbon.network",
  denom: "swth",
  coinDenom: "SWTH",
  decimals: 8,
  bech32Config: {
    bech32PrefixAccAddr: "swth",
    bech32PrefixAccPub: "swthpub",
    bech32PrefixValAddr: "swthvaloper",
    bech32PrefixValPub: "swthvaloperpub",
    bech32PrefixConsAddr: "swthvalcons",
    bech32PrefixConsPub: "swthvalconspub",
  },
  gasPriceStep: {
    low: 800,
    average: 1000,
    high: 1200,
  },
  explorerUrl: "https://scan.carbon.network",
  defaultApy: "6.1",
  sortIndex: 4,
  isNativeKeplrChain: false,
  stakeReserveAmount: 5,
  gasLimit: "180000",
};

export default config;

const config = {
  chainName: "Carbon-Testnet",
  chainId: "carbon-testnet-42069",
  displayHubName: "Carbon",
  rpc: "https://test-tm-api.carbon.network",
  restEndpoint: "https://test-api.carbon.network",
  denom: "swth",
  coinDenom: "SWTH",
  decimals: 8,
  bech32Config: {
    bech32PrefixAccAddr: "tswth",
    bech32PrefixAccPub: "tswthpub",
    bech32PrefixValAddr: "tswthvaloper",
    bech32PrefixValPub: "tswthvaloperpub",
    bech32PrefixConsAddr: "tswthvalcons",
    bech32PrefixConsPub: "tswthvalconspub",
  },
  gasPriceStep: {
    low: 800,
    average: 1000,
    high: 1200,
  },
  explorerUrl: "https://scan.carbon.network",
  defaultApy: "6.4",
  sortIndex: 4,
  stakeReserveAmount: 5,
  gasLimit: "130000",
};

export default config;

const config = {
  chainName: "Cosmos Hub",
  chainId: "cosmoshub-4",
  displayHubName: "CosmosHub",
  rpc: "https://cosmos-rpc1.stafi.io",
  restEndpoint: "https://cosmos-rpc1.stafi.io",
  denom: "uatom",
  coinDenom: "ATOM",
  decimals: 6,
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub",
  },
  explorerUrl: "https://www.mintscan.io/cosmos",
  defaultApy: "19",
  sortIndex: 1,
  isNativeKeplrChain: true,
  stakeReserveAmount: 0.05,
  gasLimit: "80000",
};

export default config;

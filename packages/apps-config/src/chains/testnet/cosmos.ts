const config = {
  chainName: "Cosmos-Testnet",
  chainId: "cosmos-stafi-1",
  displayHubName: "CosmosHub",
  rpc: "https://test-cosmos-rpc1.stafihub.io",
  restEndpoint: "https://test-cosmos-rest1.stafihub.io",
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
  explorerUrl: "https://testnet-explorer.stafihub.io/cosmos-testnet",
  defaultApy: "19",
  sortIndex: 1,
  stakeReserveAmount: 0.05,
  gasLimit: "80000",
};

export default config;

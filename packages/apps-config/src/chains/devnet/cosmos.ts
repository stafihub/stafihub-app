const config = {
  chainName: "Cosmos-Devnet",
  chainId: "cosmoshub-stafi-dev-1",
  displayHubName: "CosmosHub",
  rpc: "https://dev-cosmos-rpc1.stafihub.io",
  restEndpoint: "https://dev-cosmos-rest1.stafihub.io",
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

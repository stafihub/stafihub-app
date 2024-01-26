const config = {
  chainName: "Neutron Testnet",
  chainId: "pion-1",
  displayHubName: "Neutron Testnet",
  rpc: "https://neutron-testnet-rpc.polkachu.com",
  restEndpoint: "https://neutron-testnet-rpc.polkachu.com",
  denom: "untrn",
  coinDenom: "NTRN",
  decimals: 6,
  bech32Config: {
    bech32PrefixAccAddr: "neutron",
    bech32PrefixAccPub: "neutronpub",
    bech32PrefixValAddr: "neutronvaloper",
    bech32PrefixValPub: "neutronvaloperpub",
    bech32PrefixConsAddr: "neutronvalcons",
    bech32PrefixConsPub: "neutronvalconspub",
  },
  explorerUrl: "https://www.mintscan.io/neutron-testnet",
  defaultApy: "19",
  sortIndex: 1,
  stakeReserveAmount: 0.05,
  gasLimit: "80000",
  hideInApp: true,
};

export default config;

const config = {
  chainName: "Neutron Testnet",
  chainId: "pion-1",
  displayHubName: "Neutron Testnet",
  rpc: "https://rpc-falcron.pion-1.ntrn.tech",
  restEndpoint: "https://rpc-falcron.pion-1.ntrn.tech",
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
  explorerUrl: "https://www.mintscan.io/neutron",
  defaultApy: "19",
  sortIndex: 1,
  stakeReserveAmount: 0.05,
  gasLimit: "80000",
  hideInApp: true,
};

export default config;

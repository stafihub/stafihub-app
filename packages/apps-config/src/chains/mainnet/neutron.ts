const config = {
  chainName: "Neutron",
  chainId: "neutron-1",
  displayHubName: "Neutron",
  rpc: "https://rpc-voidara.neutron-1.neutron.org:443",
  restEndpoint: "https://neutron-rest.publicnode.com",
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

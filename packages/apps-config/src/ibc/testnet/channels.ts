const config = [
  {
    srcChainId: "_STAFI_HUB_CHAIN_ID_",
    dstChainId: "cosmos-stafi-1",
    srcChannel: "channel-0",
    dstChannel: "channel-0",
    assets: [
      { denom: "uratom", displayName: "rATOM" },
      { denom: "uatom", displayName: "ATOM" },
    ],
  },
  {
    srcChainId: "_STAFI_HUB_CHAIN_ID_",
    dstChainId: "irishub-stafi-1",
    srcChannel: "channel-3",
    dstChannel: "channel-0",
    assets: [
      { denom: "uriris", displayName: "rIRIS" },
      { denom: "uiris", displayName: "IRIS" },
    ],
  },
  {
    srcChainId: "_STAFI_HUB_CHAIN_ID_",
    dstChainId: "chihuahua-stafi-1",
    srcChannel: "channel-4",
    dstChannel: "channel-0",
    assets: [
      { denom: "urhuahua", displayName: "rHUAHUA" },
      { denom: "uhuahua", displayName: "HUAHUA" },
    ],
  },
  {
    srcChainId: "cosmos-stafi-1",
    dstChainId: "pion-1",
    srcChannel: "channel-46",
    dstChannel: "channel-1010",
    assets: [{ denom: "uatom", displayName: "ATOM" }],
  },
];

export default config;

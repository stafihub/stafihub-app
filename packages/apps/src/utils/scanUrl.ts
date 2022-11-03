export function getScanFullUrl(
  host: string,
  type: "tx" | "account",
  param: string | undefined
) {
  let explorerHost = host;
  if (explorerHost.startsWith("https://ping.pub/stafihub")) {
    explorerHost = "https://www.mintscan.io/stafi";
  } else if (explorerHost.startsWith("https://ping.pub/iris")) {
    explorerHost = "https://www.mintscan.io/iris";
  } else if (explorerHost.startsWith("https://ping.pub/cosmos")) {
    explorerHost = "https://www.mintscan.io/cosmos";
  } else if (explorerHost.startsWith("https://ping.pub/chihuahua")) {
    explorerHost = "https://www.mintscan.io/chihuahua";
  }

  if (type === "tx") {
    return explorerHost.startsWith("https://www.mintscan.io")
      ? `${explorerHost}/txs/${param}`
      : `${explorerHost}/tx/${param}`;
  } else if (type === "account") {
    return `${explorerHost}/account/${param}`;
  }

  return explorerHost;
}

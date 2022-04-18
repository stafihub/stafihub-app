export const STORAGE_KEPLR_WALLET_ALLOWED = "stafihub_keplr_network_allowed_";
export const STORAGE_KEY_SLIPPAGE = "stafihub_slippage";
export const STORAGE_KEY_NOTICE = "stafihub_notice";
export const STORAGE_KEY_UNREAD_NOTICE = "stafihub_unread_notice";

export function saveNetworkAllowedFlag(network: string) {
  saveStorage(getNetworkAllowedKey(network), "1");
}

export function clearNetworkAllowedFlag(network: string) {
  removeStorage(getNetworkAllowedKey(network));
}

export function isNetworkAllowed(network: string) {
  return getStorage(getNetworkAllowedKey(network));
}

function getNetworkAllowedKey(network: string) {
  return STORAGE_KEPLR_WALLET_ALLOWED + network;
}

export function saveStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

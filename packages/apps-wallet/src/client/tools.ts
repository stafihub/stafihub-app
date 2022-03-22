import { bech32 } from "bech32";

export function checkAddress(address: string, addrPrefix: string): boolean {
  if (!address || address.length < 0) {
    return false;
  }
  try {
    decodeAddress(address, addrPrefix);
    return true;
  } catch (e) {
    return false;
  }
}

function decodeAddress(accAddress: string, addrPrefix: string) {
  const { prefix, words } = bech32.decode(accAddress);
  if (prefix !== addrPrefix) {
    throw Error("Wrong prefix");
  }

  //   const buffer = Buffer.from(bech32.fromWords(words));
  //   if (buffer.length !== DECODED_ADDRESS_LEN) {
  //     throw Error("Wrong decoded address len");
  //   }

  //   return buffer;
}

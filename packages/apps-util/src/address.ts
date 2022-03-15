export function getShortAddress(
  address: string | null | undefined,
  displayLength: number
) {
  if (!address) {
    return address;
  }
  if (displayLength < 0 || displayLength * 2 >= address.length) {
    return address;
  }

  let sFrontPart = address.substr(0, displayLength);
  let sTailPart = address.substr(
    address.length - displayLength,
    address.length
  );

  return sFrontPart + "..." + sTailPart;
}

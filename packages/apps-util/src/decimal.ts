import { Decimal } from "@cosmjs/math";

export function atomicToHuman(
  atomics: string,
  fractionalDigits: number = 6
): string {
  const decimal = Decimal.fromAtomics(atomics, fractionalDigits);

  return decimal.toString();
}

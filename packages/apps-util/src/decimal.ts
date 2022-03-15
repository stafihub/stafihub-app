import { Decimal, Uint64 } from "@cosmjs/math";

export function atomicToHuman(
  atomics: string | undefined | null,
  fractionalDigits: number = 6
): string {
  if (!atomics || isNaN(Number(atomics))) {
    return "--";
  }
  const decimal = Decimal.fromAtomics(atomics, fractionalDigits);

  return decimal.toString();
}

export function humanToAtomic(
  input: string | undefined | null,
  fractionalDigits: number = 6
): string {
  if (!input || isNaN(Number(input))) {
    return "--";
  }
  let decimal = Decimal.fromUserInput(input, fractionalDigits);
  decimal = decimal.multiply(
    Math.pow(10, fractionalDigits) as unknown as Uint64
  );

  return decimal.toString();
}

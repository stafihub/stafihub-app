import { Decimal, Uint64 } from "@cosmjs/math";

export function atomicToHuman(
  atomics: string | number | undefined | null,
  fractionalDigits: number = 6,
  decimals: number = 2
): string {
  console.log("atomics", atomics);
  if (!atomics || isNaN(Number(atomics))) {
    return "--";
  }
  const decimal = Decimal.fromAtomics(atomics.toString(), fractionalDigits);

  return formatNumberToFixed(decimal.toString(), decimals);
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

export function formatNumberToFixed(
  num: string | number | undefined,
  decimals: number = 2
) {
  if (num === undefined || num === "") {
    return "--";
  }
  if (isNaN(Number(num))) {
    return "--";
  }
  if (Number(num) === 0) {
    return "0";
  }
  const newNum = (
    Math.floor(Number(num) * Math.pow(10, decimals)) / Math.pow(10, decimals)
  ).toFixed(decimals);

  return newNum;
}

import { Decimal, Uint64 } from "@cosmjs/math";
import BigNumber from "bignumber.js";
BigNumber.config({ EXPONENTIAL_AT: [-12, 20] });

export function atomicToHuman(
  atomics: string | number | undefined | null,
  fractionalDigits: number = 6,
  decimals: number = 6
): string {
  if (!atomics || isNaN(Number(atomics))) {
    return "--";
  }
  const bn = new BigNumber(atomics)
    .shiftedBy(-fractionalDigits)
    .dp(decimals, BigNumber.ROUND_FLOOR);

  console.log(bn.toString());

  return bn.toString();
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
  decimals: number = 4
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

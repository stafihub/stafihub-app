import { useMemo } from "react";

interface FormatterTextProps {
  value: string | number | undefined;
  decimals?: number;
  skipSplit?: boolean;
  refineForBigNumber?: boolean;
  useRound?: boolean;
}

export const FormatterText = (props: FormatterTextProps) => {
  const formatNumber = useMemo(() => {
    if (
      props.value === undefined ||
      props.value === "" ||
      isNaN(Number(props.value))
    ) {
      return "--";
    }
    if (Number(props.value) === 0) {
      return "0";
    }
    const decimals = props.decimals === undefined ? 4 : props.decimals;
    const mathFunc = props.useRound ? Math.round : Math.floor;
    const newNum = (
      mathFunc(Number(props.value) * Math.pow(10, decimals)) /
      Math.pow(10, decimals)
    ).toFixed(decimals);

    let finalNum = "";

    if (props.refineForBigNumber) {
      if (Number(newNum) >= 1000000) {
        const divide = Number(newNum) / 1000000;
        finalNum = divide.toFixed(2) + "M";
      } else {
        finalNum = newNum;
      }
    } else {
      finalNum = newNum;
    }

    if (!props.skipSplit) {
      const parts = finalNum.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      finalNum = parts.join(".");
    }

    if (finalNum.indexOf(".") >= 0 && finalNum.length > 11) {
      const parts = finalNum.split(".");
      var overflowLength = finalNum.length - 11;
      var newDecimals = parts[1].slice(
        0,
        Math.max(parts[1].length - overflowLength, 0)
      );
      if (newDecimals) {
        finalNum = [parts[0], newDecimals].join(".");
      } else {
        finalNum = parts[0];
      }
    }

    return finalNum;
  }, [props.value, props.decimals, props.skipSplit, props.refineForBigNumber]);

  return <span>{formatNumber}</span>;
};

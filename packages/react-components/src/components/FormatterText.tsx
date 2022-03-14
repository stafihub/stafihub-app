import { useMemo } from "react";

interface FormatterTextProps {
  value: string | number | undefined;
  decimals?: number;
  skipSplit?: boolean;
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
    const decimals = props.decimals || 2;
    const newNum = (
      (Number(props.value) * Math.pow(10, decimals)) /
      Math.pow(10, decimals)
    ).toFixed(decimals);

    if (!props.skipSplit) {
      var parts = newNum.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    } else {
      return newNum;
    }
  }, [props.value, props.decimals, props.skipSplit]);

  return <span>{formatNumber}</span>;
};

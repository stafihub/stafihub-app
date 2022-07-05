import { Grid } from "@mui/material";
import { getDenom, getRTokenDenom } from "@stafihub/apps-config";
import { FormatterText, TokenIconLarge } from "@stafihub/react-components";
import classNames from "classnames";
import { useMemo } from "react";
import { usePriceFromDenom } from "../hooks/useAppSlice";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useTokenSupply } from "../hooks/useTokenSupply";
import { ValidatorWrapperInfo } from "../types/interface";
import { ValidatorIcon } from "./ValidatorIcon";

interface ValidatorCardProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  validators: ValidatorWrapperInfo[];
}

export const ValidatorCard = (props: ValidatorCardProps) => {
  const supply = useTokenSupply(props.chainId);
  const tokenPrice = usePriceFromDenom(getDenom(props.chainId));
  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(props.chainId));

  const liquidity = useMemo(() => {
    if (
      isNaN(Number(exchangeRate)) ||
      isNaN(Number(supply)) ||
      isNaN(Number(tokenPrice))
    ) {
      return "--";
    }
    return Number(supply) * Number(exchangeRate) * Number(tokenPrice);
  }, [exchangeRate, supply, tokenPrice]);

  const validatorWrapperInfo: ValidatorWrapperInfo | undefined = useMemo(() => {
    return props.validators.find(
      (item) => item.rTokenDenom === getRTokenDenom(props.chainId)
    );
  }, [props.validators, props.chainId]);

  return (
    <div className="flex">
      <div className="w-[233px] h-[300px] bg-white rounded-tl-[4px] rounded-bl-[4px] flex flex-col items-start">
        <div className="mt-4 ml-4 text-[#494949] text-[20px] font-bold">
          {props.derivativeTokenName}
        </div>

        <div className="mt-2 ml-4 text-[#888888] text-[12px]">
          {!isNaN(Number(liquidity)) && "$"}
          <FormatterText value={liquidity} refineForBigNumber /> in delegation
        </div>

        <div className={classNames("self-center", "mt-[35px]")}>
          <TokenIconLarge tokenName={props.originTokenName} size={120} />
        </div>
      </div>

      <div className="h-[300px] overflow-auto pl-[60px] pr-[30px] flex-1 bg-[#111017] rounded-tr-[4px] rounded-br-[4px]">
        <div className="mt-7 text-primary text-[18px]">
          Selected Validator{" "}
          {validatorWrapperInfo
            ? validatorWrapperInfo.validatorList.length
            : "--"}
        </div>

        <Grid container spacing={4} mt="20px" rowSpacing={1}>
          {validatorWrapperInfo?.validatorList?.map((item) => (
            <Grid key={item.validatorAddress} item xs={6}>
              <div className="mb-[12px] h-[55px] flex-1 rounded-[2px] border-solid border-[1px] border-[#222222] flex items-center">
                <div className="pl-3">
                  <ValidatorIcon logoUrl={item.logoUrl} />
                </div>

                <div className="ml-[6px]">
                  <div className="font-bold text-white text-[16px]">
                    {item.moniker}
                  </div>
                  <div className="mt-[3px] text-[#A2A2A2] text-[14px]">
                    {item.validatorAddress}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

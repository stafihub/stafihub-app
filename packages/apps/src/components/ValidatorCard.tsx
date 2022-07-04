import { Grid } from "@mui/material";
import { getDenom, getRTokenDenom } from "@stafihub/apps-config";
import { FormatterText, TokenIconLarge } from "@stafihub/react-components";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { usePriceFromDenom } from "../hooks/useAppSlice";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useTokenSupply } from "../hooks/useTokenSupply";
import iconValidator from "../assets/images/icon_validator.svg";

interface ValidatorCardProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
}

export const ValidatorCard = (props: ValidatorCardProps) => {
  const supply = useTokenSupply(props.chainId);
  const tokenPrice = usePriceFromDenom(getDenom(props.chainId));
  const { poolAddress } = useStakePoolInfo(getDenom(props.chainId));

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

  useEffect(() => {
    (async () => {
      if (!poolAddress) {
        return;
      }
    })();
  }, [poolAddress]);

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
          Selected Validator 5
        </div>

        <Grid container spacing={4} mt="20px" rowSpacing={1}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Grid key={n} item xs={6}>
              <div className="mb-[12px] h-[55px] flex-1 rounded-[2px] border-solid border-[1px] border-[#222222] flex items-center">
                <img
                  src={iconValidator}
                  alt="icon"
                  width="36px"
                  height="36px"
                  className="pl-3"
                />

                <div className="ml-[6px]">
                  <div className="font-bold text-white text-[16px]">Wetez</div>
                  <div className="mt-[3px] text-[#A2A2A2] text-[14px]">
                    cosmos1s05va5d09xlq3et8ma123sqh6r5lqy7mnr69xf
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

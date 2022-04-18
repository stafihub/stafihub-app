import { getRTokenDenom } from "@stafihub/apps-config";
import {
  FormatterText,
  RTokenIcon,
  TokenIconLarge,
} from "@stafihub/react-components";
import { useMemo } from "react";
import { useApy } from "../../hooks/useApy";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useTokenSupply } from "../../hooks/useTokenSupply";

interface StakeTokenCardProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  onClickStake: () => void;
}

export const StakeTokenCard = (props: StakeTokenCardProps) => {
  const apy = useApy(props.chainId);
  const supply = useTokenSupply(props.chainId);

  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(props.chainId));

  const liquidity = useMemo(() => {
    if (isNaN(Number(exchangeRate)) || isNaN(Number(supply))) {
      return "--";
    }
    return Number(supply) * Number(exchangeRate) * 20.1;
  }, [exchangeRate, supply]);

  return (
    <div className="w-full bg-white rounded-[4px] flex flex-col items-start">
      <div className="mt-5 ml-4 text-[#ADADAD] text-[12px]">Staked Asset</div>

      <div className="mt-3 ml-4 text-[#494949] text-[20px] font-bold uppercase">
        {props.originTokenName}
      </div>

      <div className="mt-2 ml-4 text-[#646464] text-[12px] scale-[0.7] origin-top-left">
        Staked Value {!isNaN(Number(liquidity)) && "$"}
        <FormatterText value={liquidity} decimals={2} />
      </div>

      <div className="mt-4 self-center">
        <TokenIconLarge tokenName={props.originTokenName} size={120} />
      </div>

      <div className="self-end mr-5">
        <RTokenIcon rtokenName={props.derivativeTokenName} size={26} />
      </div>

      <div
        className="mt-[10px] self-stretch h-12 bg-primary rounded-b-[4px] relative flex items-center justify-center cursor-pointer"
        onClick={props.onClickStake}
      >
        <div className="text-white text-[20px] font-bold">
          <FormatterText value={apy} decimals={2} />
          {!isNaN(Number(apy)) && "%"}
        </div>

        <div className="absolute right-9 top-auto bottom-auto text-[12px] text-text-gray5">
          APY
        </div>
      </div>
    </div>
  );
};

import {
  getDenom,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { FormatterText, TokenIconV2 } from "@stafihub/react-components";
import { useMemo } from "react";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useApy } from "../../hooks/useApy";
import { useTokenSupply } from "../../hooks/useTokenSupply";
import { usePriceFromDenom } from "../../hooks/useAppSlice";
import { chains } from "../../config";

interface StakeTokenItemProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  onClickStake: () => void;
}

export const StakeTokenItem = (props: StakeTokenItemProps) => {
  const apy = useApy(props.chainId);
  const supply = useTokenSupply(props.chainId);
  const tokenPrice = usePriceFromDenom(getDenom(props.chainId, chains));

  const { exchangeRate } = useStakePoolInfo(
    getRTokenDenom(props.chainId, chains)
  );

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

  return (
    <div className="w-[660px] h-[42px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center">
      <div className="basis-5/12 font-bold text-[16px] flex items-center">
        <div className="ml-9 mr-[10px]">
          <TokenIconV2
            stafiHubChainConfig={chains[getStafiHubChainId()]}
            denom={getDenom(props.chainId, chains)}
            size={26}
          />
        </div>

        <div>{props.originTokenName}</div>
      </div>

      <div className="basis-3/12 text-[14px]">{props.derivativeTokenName}</div>

      <div className="basis-4/12 text-[14px]">
        <FormatterText value={apy} decimals={2} />
        {!isNaN(Number(apy)) && "%"}
      </div>

      <div className="basis-4/12 text-[14px]">
        {!isNaN(Number(liquidity)) && "$"}
        <FormatterText value={liquidity} />
      </div>

      <div className="basis-3/12 text-[14px]">
        <div
          className="w-[66px] h-[22px] text-primary text-[12px] flex justify-center items-center border-primary border-solid border-[0.5px] rounded-[3px] cursor-pointer"
          onClick={props.onClickStake}
        >
          Stake
        </div>
      </div>
    </div>
  );
};

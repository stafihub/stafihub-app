import { getRTokenDenom } from "@stafihub/apps-config";
import { FormatterText, getTokenIcon } from "@stafihub/react-components";
import { useMemo } from "react";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useApy } from "../../hooks/useApy";
import { useTokenSupply } from "../../hooks/useTokenSupply";

interface StakeTokenItemProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  onClickStake: () => void;
}

export const StakeTokenItem = (props: StakeTokenItemProps) => {
  const icon = useMemo(() => {
    return getTokenIcon(props.derivativeTokenName);
  }, [props.derivativeTokenName]);
  const apy = useApy(props.chainId);
  const supply = useTokenSupply(props.chainId);

  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(props.chainId));

  const liquidity = useMemo(() => {
    if (isNaN(Number(exchangeRate)) || isNaN(Number(supply))) {
      return "--";
    }
    return Number(supply) * Number(exchangeRate) * 0.06;
  }, [exchangeRate, supply]);

  return (
    <div className="w-[660px] h-[42px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center">
      <div className="basis-4/12 font-bold text-[16px] flex items-center">
        <img
          src={icon}
          className="w-[26px] h-[26px] ml-9 mr-[10px]"
          alt="icon"
        />

        <div>{props.originTokenName}</div>
      </div>

      <div className="basis-3/12 text-[14px]">{props.derivativeTokenName}</div>

      <div className="basis-3/12 text-[14px]">
        <FormatterText value={apy} decimals={2} />%
      </div>

      <div className="basis-4/12 text-[14px]">
        <FormatterText value={liquidity} decimals={2} />
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

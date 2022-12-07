import { getDenom, getRTokenDenom } from "@stafihub/apps-config";
import {
  FormatterText,
  RTokenIcon,
  TokenIconLarge,
} from "@stafihub/react-components";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { chains } from "../../config";
import { useLatestBlock, usePriceFromDenom } from "../../hooks/useAppSlice";
import { useApy } from "../../hooks/useApy";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useTokenSupply } from "../../hooks/useTokenSupply";
import { FormatMintRewardAct } from "../../types/interface";

interface StakeTokenCardProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  type: "middle" | "large";
  actDetail: FormatMintRewardAct | undefined;
  onClickStake: () => void;
}

export const StakeTokenCard = (props: StakeTokenCardProps) => {
  const apy = useApy(props.chainId);
  const supply = useTokenSupply(props.chainId);
  const tokenPrice = usePriceFromDenom(getDenom(props.chainId, chains));
  const [totalApr, setTotalApr] = useState("--");
  const latestBlock = useLatestBlock();

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

  useEffect(() => {
    (async () => {
      if (isNaN(Number(apy.replace("%", "")))) {
        return;
      }
      let totalApr = Number(apy.replace("%", ""));
      if (
        latestBlock &&
        props.actDetail &&
        props.actDetail.end >= latestBlock
      ) {
        props.actDetail?.tokenRewardInfos.forEach((rewardInfo) => {
          if (!isNaN(Number(rewardInfo.calcApr))) {
            totalApr += Number(rewardInfo.calcApr);
          }
        });
      }

      setTotalApr(totalApr + "");
    })();
  }, [props.actDetail, apy, latestBlock]);

  return (
    <div className="w-full bg-white rounded-[4px] flex flex-col items-start">
      <div className="mt-5 ml-4 text-[#ADADAD] text-[12px]">APR</div>

      <div className="mt-3 ml-4 text-[#494949] text-[20px] font-bold uppercase">
        <FormatterText value={totalApr} decimals={2} />
        {!isNaN(Number(totalApr)) && "%"}
      </div>

      <div className="mt-2 ml-4 text-[#646464] text-[12px] scale-[0.7] origin-top-left">
        Staked Value {!isNaN(Number(liquidity)) && "$"}
        <FormatterText value={liquidity} refineForBigNumber />
      </div>

      <div
        className={classNames(
          "self-center",
          props.type === "middle" ? "mt-4" : "mt-[-20px]"
        )}
      >
        <TokenIconLarge tokenName={props.originTokenName} size={120} />
      </div>

      {props.type === "large" && (
        <div className="self-end mr-32 mt-[-30px]">
          <RTokenIcon
            rtokenName={props.derivativeTokenName}
            size={30}
            withBorder
          />
        </div>
      )}

      <div
        className="mt-[25px] self-stretch h-12 bg-primary rounded-b-[4px] relative flex items-center justify-center cursor-pointer shadow-[0_-2px_10px_2px_rgba(0,0,0,0.4)]"
        onClick={props.onClickStake}
      >
        <div className="text-white text-[20px] font-bold">
          Stake {props.originTokenName}
        </div>
      </div>
    </div>
  );
};

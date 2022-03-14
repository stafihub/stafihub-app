import { Button, FormatterText } from "@stafihub/react-components";
import ATOM from "../assets/images/ATOM.svg";
import iconStakeArrow from "../assets/images/icon_stake_arrow.svg";
import iconDown from "../assets/images/icon_down.png";
import { usePoolInfo, useRTokenBalance } from "../hooks";
import { useParams, useNavigate } from "react-router-dom";
import { RTokenDenom } from "@stafihub/apps-config";
import { useMemo } from "react";

export const StakeStatus = () => {
  const navigate = useNavigate();
  const params = useParams();
  const tokenName = params.tokenName;
  const { rTokenBalance } = useRTokenBalance(`ur${tokenName}` as RTokenDenom);
  const { exchangeRate } = usePoolInfo(`ur${tokenName}` as RTokenDenom);

  const stakedAmount = useMemo(() => {
    if (isNaN(Number(exchangeRate)) || isNaN(Number(rTokenBalance))) {
      return "--";
    }
    return Number(rTokenBalance) * Number(exchangeRate);
  }, [rTokenBalance, exchangeRate]);

  return (
    <div className="px-[52px] py-[42px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={ATOM} className="w-[36px] h-[36px]" alt="token icon" />

          <div className="ml-[10px] text-white text-[30px] font-bold">
            ur{tokenName?.toUpperCase()}
          </div>
        </div>

        <div className="ml-[10px] text-primary text-[30px] font-bold cursor-pointer">
          <FormatterText value={rTokenBalance} />
        </div>
      </div>

      <div className="flex justify-end mt-[5px] text-text-gray4 text-[12px]">
        Redeemable u{tokenName?.toUpperCase()} : 11.12
      </div>

      <div className="mt-[50px] flex items-center">
        <div className="flex-grow-[1] flex justify-start pl-[15px]">
          <div className="flex flex-col items-center ">
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center">
              Staked u{tokenName?.toUpperCase()}
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              <FormatterText value={stakedAmount} />
            </div>
          </div>
        </div>

        <div className="w-[0.5px] h-[35px] bg-divider" />

        <div className="flex-grow-[2]">
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center">
              Unbonding ATOM
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              11.12
            </div>
          </div>
        </div>

        <div className="w-[0.5px] h-[35px] bg-divider" />

        <div className="flex-grow-[1] flex justify-end pr-[15px]">
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-bold text-text-gray4 scale-[0.67] origin-center">
              Reward of last 24h
            </div>

            <div className="mt-[12px] text-[16px] font-bold text-white">
              + 0.002300
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[65px] flex justify-end">
        <Button
          size="small"
          onClick={() => {
            navigate(`/stake/${params.tokenName}/redeem`);
          }}
        >
          Redeem
        </Button>

        <div className="ml-[10px]">
          <Button size="small">
            <div className="flex items-center">
              <div>Trade</div>
              <img
                className="ml-[2px] w-[8px] h-[6px]"
                src={iconDown}
                alt="down"
              />
            </div>
          </Button>
        </div>
      </div>

      <div className="mt-[30px] h-[0.5px] bg-divider mr-[-25px] ml-[-20px]" />

      <div className="mt-[40px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={iconStakeArrow}
            className="w-[36px] h-[36px]"
            alt="token icon"
          />

          <div className="ml-[10px] text-white text-[30px] font-bold">
            rATOM / ATOM
          </div>
        </div>

        <div className="ml-[10px] text-primary text-[30px] font-bold cursor-pointer">
          1.0323
        </div>
      </div>

      <div className="mt-[44px] text-text-gray4 text-[12px]">
        Updated every 1 hours
      </div>
    </div>
  );
};

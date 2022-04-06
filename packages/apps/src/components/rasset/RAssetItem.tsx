import { Tooltip } from "@mui/material";
import { getTokenIcon, FormatterText } from "@stafihub/react-components";
import { getRTokenDenom } from "@stafihub/apps-config";
import { useMemo } from "react";
import iconDown from "../../assets/images/icon_down_white.png";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useChainStakeStatus } from "../../hooks/useChainStakeStatus";
import { useApy } from "../../hooks/useApy";
import { useNavigate } from "react-router-dom";

interface RAssetItemProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
}

export const RAssetItem = (props: RAssetItemProps) => {
  const navigate = useNavigate();
  const { stakeStatus } = useChainStakeStatus(props.chainId);
  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(props.chainId));
  const apy = useApy(props.chainId);

  const myStakedAmount = useMemo(() => {
    if (
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance)) ||
      isNaN(Number(exchangeRate))
    ) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * Number(exchangeRate);
  }, [stakeStatus, exchangeRate]);

  const icon = useMemo(() => {
    return getTokenIcon(props.derivativeTokenName);
  }, [props.derivativeTokenName]);

  return (
    <div className="w-[660px] h-[42px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center">
      <div className="basis-4/12 font-bold text-[16px] flex items-center justify-start">
        <img
          src={icon}
          className="ml-9 w-[26px] h-[26px] mr-[10px]"
          alt="icon"
        />

        <div>{props.derivativeTokenName}</div>
      </div>

      <div className="basis-3/12 text-[14px]">
        <div className="flex items-center">
          <FormatterText value={myStakedAmount} decimals={2} />
          <Tooltip
            title="The increased amount of Staked ETH within the last 24h."
            placement="right"
          >
            <div className="ml-1 text-[12px] text-secondary border-dashed border-b-[1px] border-secondary scale-[0.8] origin-center">
              +0.00
            </div>
          </Tooltip>
        </div>
      </div>

      <div className="basis-3/12 text-[14px]">
        <FormatterText value={stakeStatus?.rTokenBalance} decimals={2} />
      </div>

      <div className="basis-3/12 text-[14px]">
        <FormatterText value={apy} decimals={2} />%
      </div>

      <div className="basis-4/12 text-[14px] flex items-center">
        <div className="w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer">
          Trade
          <img src={iconDown} alt="down" className="ml-[2px] w-[10px]" />
        </div>
        <div
          className="ml-2 w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer"
          onClick={() => {
            navigate("/rBridge", {
              state: {
                fromChainId: props.chainId,
              },
            });
          }}
        >
          Bridge
        </div>
      </div>
    </div>
  );
};

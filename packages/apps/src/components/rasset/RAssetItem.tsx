import { Tooltip } from "@mui/material";
import { FormatterText, RTokenIcon } from "@stafihub/react-components";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import { useEffect, useMemo, useState } from "react";
// import iconDown from "../../assets/images/icon_down_white.png";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { useChainStakeStatus } from "../../hooks/useChainStakeStatus";
import { useApy } from "../../hooks/useApy";
import { useNavigate } from "react-router-dom";
import { TradeModal } from "../../modals/TradeModal";
import { useAccountReward } from "../../hooks/useAccountReward";
import { useChainAccount } from "../../hooks/useAppSlice";
import { useDispatch } from "react-redux";
import { updateRTokenReward } from "../../redux/reducers/ChainSlice";
import { atomicToHuman } from "@stafihub/apps-util";
import classNames from "classnames";

interface RAssetItemProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
}

export const RAssetItem = (props: RAssetItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const { stakeStatus } = useChainStakeStatus(props.chainId);
  const { exchangeRate } = useStakePoolInfo(getRTokenDenom(props.chainId));
  const apy = useApy(props.chainId);
  const { originLast24hReward } = useAccountReward(props.chainId);

  const [tradeModalVisible, setTradeModalVisible] = useState(false);

  useEffect(() => {
    if (stafiHubAccount) {
      dispatch(updateRTokenReward(getRTokenDenom(props.chainId)));
    }
  }, [props.chainId, dispatch, stafiHubAccount]);

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

  const [rewardText, highlight, hasBorder] = useMemo(() => {
    if (isNaN(Number(originLast24hReward))) {
      return ["--", false, false];
    }
    if (Number(originLast24hReward) === 0) {
      return ["0", false, false];
    }
    if (Number(originLast24hReward) <= -Math.pow(10, 4)) {
      return ["-" + atomicToHuman(originLast24hReward, 6), true, true];
    }
    if (
      Number(originLast24hReward) < 0 &&
      Number(originLast24hReward) > -Math.pow(10, 4)
    ) {
      return ["-<0.01", true, true];
    }
    if (Number(originLast24hReward) >= -Math.pow(10, 4)) {
      return ["+" + atomicToHuman(originLast24hReward, 6), true, true];
    }
    if (
      Number(originLast24hReward) > 0 &&
      Number(originLast24hReward) < Math.pow(10, 4)
    ) {
      return ["<0.01", true, true];
    }
    return ["--", false, false];
  }, [originLast24hReward]);

  return (
    <>
      <div
        className="w-[660px] h-[50px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center cursor-pointer"
        onClick={() => {
          navigate(`/rToken/${props.derivativeTokenName}/dashboard`);
        }}
      >
        <div className="basis-5/12 font-bold text-[16px] flex items-center justify-start">
          <div className="ml-9 mr-[10px]">
            <RTokenIcon rtokenName={props.derivativeTokenName} size={26} />
          </div>

          <div>{props.derivativeTokenName}</div>
        </div>

        <div className="basis-4/12 text-[16px]">
          <div className="flex items-center">
            <FormatterText value={myStakedAmount} />
            <Tooltip
              title="The increased amount of Staked ETH within the last 24h."
              placement="right"
            >
              <div
                className={classNames(
                  "ml-1 text-[12px] text-secondary border-dashed  border-secondary scale-[0.8] origin-center",
                  { "border-b-[1px]": hasBorder },
                  highlight
                    ? "border-secondary text-secondary"
                    : "text-text-gray2 border-text-gray2"
                )}
              >
                {rewardText}
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="basis-3/12 text-[16px]">
          <FormatterText value={stakeStatus?.rTokenBalance} />
        </div>

        <div className="basis-4/12 text-[16px]">
          <FormatterText value={apy} decimals={2} />%
        </div>

        <div className="basis-5/12 text-[14px] flex items-center">
          <div
            className="w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setTradeModalVisible(true);
            }}
          >
            Trade
            {/* <img src={iconDown} alt="down" className="ml-[2px] w-[10px]" /> */}
          </div>
          <div
            className="ml-2 w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
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

      <TradeModal
        tradeTokenName={props.derivativeTokenName}
        visible={tradeModalVisible}
        onClose={() => setTradeModalVisible(false)}
      />
    </>
  );
};

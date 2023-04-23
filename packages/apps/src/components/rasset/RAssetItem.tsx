import { Tooltip } from "@mui/material";
import {
  getRTokenDenom,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { FormatterText, RTokenIcon } from "@stafihub/react-components";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chains } from "../../config";
import { useAccountReward } from "../../hooks/useAccountReward";
import { useChainAccount, useLatestBlock } from "../../hooks/useAppSlice";
import { useApy } from "../../hooks/useApy";
import { useChainStakeStatus } from "../../hooks/useChainStakeStatus";
// import iconDown from "../../assets/images/icon_down_white.png";
import { useStakePoolInfo } from "../../hooks/useStakePoolInfo";
import { TradeModal } from "../../modals/TradeModal";
import { updateRTokenReward } from "../../redux/reducers/ChainSlice";
import { FormatMintRewardAct } from "../../types/interface";
import snackbarUtil from "../../utils/snackbarUtils";
import { openLink } from "../../utils/common";

interface RAssetItemProps {
  chainId: string;
  originTokenName: string;
  derivativeTokenName: string;
  actDetail: FormatMintRewardAct | undefined;
}

export const RAssetItem = (props: RAssetItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const { stakeStatus } = useChainStakeStatus(props.chainId);
  const { exchangeRate } = useStakePoolInfo(
    getRTokenDenom(props.chainId, chains)
  );
  const apy = useApy(props.chainId);
  const { originLast24hReward } = useAccountReward(props.chainId);
  const [tradeModalVisible, setTradeModalVisible] = useState(false);
  const [totalApr, setTotalApr] = useState("--");
  const latestBlock = useLatestBlock();

  useEffect(() => {
    if (stafiHubAccount) {
      dispatch(updateRTokenReward(getRTokenDenom(props.chainId, chains)));
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

  const [rewardText, highlight, hasBorder, displayRewardText] = useMemo(() => {
    if (isNaN(Number(originLast24hReward))) {
      return ["--", false, false, false];
    }
    if (Number(originLast24hReward) === 0) {
      return ["0", false, false, false];
    }
    if (Number(originLast24hReward) <= -Math.pow(10, 4)) {
      return ["-" + atomicToHuman(originLast24hReward, 6, 4), true, true];
    }
    if (
      Number(originLast24hReward) < 0 &&
      Number(originLast24hReward) > -Math.pow(10, 4)
    ) {
      return ["-<0.0001", true, true];
    }
    if (Number(originLast24hReward) >= -Math.pow(10, 4)) {
      return ["+" + atomicToHuman(originLast24hReward, 6, 4), true, true];
    }
    if (
      Number(originLast24hReward) > 0 &&
      Number(originLast24hReward) < Math.pow(10, 4)
    ) {
      return ["<0.0001", true, true];
    }
    return ["--", false, false, false];
  }, [originLast24hReward]);

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
    <>
      <div
        className="w-[800px] h-[50px] flex text-white border-[#494D51] border-solid border-[1px] rounded-[3.5px] items-center cursor-pointer"
        onClick={() => {
          navigate(`/rToken/${props.derivativeTokenName}/dashboard`);
        }}
      >
        <div className="basis-4/12 font-bold text-[16px] flex items-center justify-start">
          <div className="ml-5 mr-[10px]">
            <RTokenIcon rtokenName={props.derivativeTokenName} size={26} />
          </div>

          <div>{props.derivativeTokenName}</div>
        </div>

        <div className="basis-5/12 text-[16px]">
          <div className="flex items-end">
            <FormatterText value={myStakedAmount} useRound />
            <Tooltip
              title={`The increased amount of Staked ${getTokenDisplayName(
                props.chainId,
                chains
              )} within the last 24h.`}
              placement="right"
            >
              <div
                className={classNames(
                  "ml-1 text-[12px] text-secondary border-dashed  border-secondary scale-[0.8] origin-center",
                  { "border-b-[1px]": hasBorder },
                  highlight
                    ? "border-secondary text-secondary"
                    : "text-text-gray2 border-text-gray2",
                  { invisible: !displayRewardText }
                )}
              >
                {rewardText}
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="basis-4/12 text-[16px]">
          <FormatterText value={stakeStatus?.rTokenBalance} />
        </div>

        <div className="basis-3/12 text-[16px]">
          <FormatterText value={totalApr} decimals={2} />%
        </div>

        <div className="basis-4/12 text-[14px] flex items-center">
          <div
            className="w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (props.originTokenName === "SWTH") {
                snackbarUtil.success("rSWTH hasn’t be listed yet, stay tuned.");
              } else {
                setTradeModalVisible(true);
              }
            }}
          >
            Trade
            {/* <img src={iconDown} alt="down" className="ml-[2px] w-[10px]" /> */}
          </div>
          <div
            className="ml-2 w-[66px] h-[22px] text-white text-[12px] flex justify-center items-center border-white border-solid border-[0.5px] rounded-[3px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (props.originTokenName === "SWTH") {
                snackbarUtil.success(
                  "You are going to a 3rd party bridge, use at you own risk."
                );
                setTimeout(() => {
                  openLink(
                    "https://tfm.com/bridge?chainTo=carbon-1&chainFrom=stafihub-1"
                  );
                }, 3000);
              } else {
                navigate("/rBridge", {
                  state: {
                    fromChainId: props.chainId,
                  },
                });
              }
            }}
          >
            Bridge
          </div>
        </div>
      </div>

      <TradeModal
        tradeDenom={getRTokenDenom(props.chainId, chains)}
        tradeTokenName={props.derivativeTokenName}
        visible={tradeModalVisible}
        onClose={() => setTradeModalVisible(false)}
      />
    </>
  );
};

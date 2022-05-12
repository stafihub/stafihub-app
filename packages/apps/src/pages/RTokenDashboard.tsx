import {
  getChainIdFromRTokenDisplayName,
  getDenom,
  getRTokenDenom,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import {
  Button,
  FormatterText,
  RTokenIcon,
  TokenIcon,
  EraRewardChart,
} from "@stafihub/react-components";
import { Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import iconApy from "../assets/images/icon_apy.svg";
import iconBarLine from "../assets/images/icon_bar_line.svg";
import iconReward from "../assets/images/icon_rAsset_reward.svg";
// import iconSwitch from "../assets/images/icon_switch.svg";
import iconWaveLine from "../assets/images/icon_wave_line.svg";
import nodata from "../assets/images/nodata.png";
import { DashboardRecords } from "../components/stake/DashboardRecords";
import { useAccountReward } from "../hooks/useAccountReward";
import { useChainAccount, usePriceFromDenom } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useUnbondCommission } from "../hooks/useUnbondCommission";
import { TradeModal } from "../modals/TradeModal";
import { updateRTokenReward } from "../redux/reducers/ChainSlice";

export const RTokenDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const tokenName = getTokenDisplayName(chainId);
  const rTokenDenom = getRTokenDenom(chainId);
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const tokenPrice = usePriceFromDenom(getDenom(chainId));
  const rTokenPrice = usePriceFromDenom(rTokenDenom);
  const { stakeStatus } = useChainStakeStatus(chainId);
  const { exchangeRate, eraHours } = useStakePoolInfo(rTokenDenom);
  const { unbondCommission } = useUnbondCommission(rTokenDenom);
  const [tradeModalVisible, setTradeModalVisible] = useState(false);
  const { last24hReward, lastEraReward, totalReward, chartXData, chartYData } =
    useAccountReward(chainId);

  useEffect(() => {
    // Update reward data.
    dispatch(updateRTokenReward(rTokenDenom));
  }, [dispatch, rTokenDenom, stafiHubAccount?.bech32Address]);

  const redeemableAmount = useMemo(() => {
    if (
      isNaN(Number(exchangeRate)) ||
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance))
    ) {
      return "--";
    }
    return (
      Number(stakeStatus.rTokenBalance) *
      (1 - Number(unbondCommission)) *
      Number(exchangeRate)
    );
  }, [unbondCommission, exchangeRate, stakeStatus]);

  const rTokenValue = useMemo(() => {
    if (
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance)) ||
      isNaN(Number(rTokenPrice))
    ) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * Number(rTokenPrice);
  }, [stakeStatus, rTokenPrice]);

  const redeemableValue = useMemo(() => {
    if (isNaN(Number(redeemableAmount)) || isNaN(Number(tokenPrice))) {
      return "--";
    }
    return Number(redeemableAmount) * Number(tokenPrice);
  }, [redeemableAmount, tokenPrice]);

  return (
    <div className="w-[1090px]">
      <div className="pl-9 pb-[180px]">
        <div className="mt-6 flex items-center">
          <div className="text-[12px] text-text-gray4">rAsset on</div>
          <div className="ml-1 flex items-center cursor-pointer">
            <div className="text-[12px] text-primary font-bold">StaFiHub</div>
            {/* <img src={iconSwitch} className="ml-1 h-[14px]" alt="switch" /> */}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between">
          <div className="mt-6 min-w-[220px]">
            <div className="flex items-center">
              {params.rToken && (
                <RTokenIcon rtokenName={params.rToken} size={60} />
              )}

              <div className="ml-[10px] text-white font-bold text-[30px]">
                {params.rToken}
              </div>
            </div>

            <div className="mt-1">
              <div className="text-white font-bold text-[50px]">
                <FormatterText value={stakeStatus?.rTokenBalance} />
              </div>

              <div className="mt-3 text-text-gray7 text-[14px]">
                <FormatterText value={stakeStatus?.stakedAmount} /> {tokenName}{" "}
                staked
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mt-3 ml-20 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
              <div className="flex items-center">
                <img src={iconWaveLine} alt="wave line" className="w-6 h-6" />
                <div className="ml-1 text-white font-bold text-[20px]">
                  $<FormatterText value={rTokenValue} />
                </div>
              </div>

              <div className="mt-3 text-text-gray7 text-[14px]">
                {params.rToken} Value
              </div>

              <div className="mt-8 w-[110px]">
                <Button
                  bgPrimary
                  type="rectangle"
                  size="small"
                  onClick={() => setTradeModalVisible(true)}
                >
                  Trade {params.rToken}
                </Button>
              </div>
            </div>

            <div className="mt-3 ml-12 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
              <div className="flex items-center">
                <img src={iconBarLine} alt="bar line" className="w-6 h-6" />
                <div className="ml-1 text-white font-bold text-[20px]">
                  $<FormatterText value={redeemableValue} />
                </div>
              </div>

              <div className="mt-3 text-text-gray7 text-[14px]">
                Redeemable Value
              </div>

              <div className="mt-8 w-[110px]">
                <Button
                  bgPrimary
                  type="rectangle"
                  size="small"
                  px={1}
                  onClick={() => navigate(`/${params.rToken}/stake/redeem`)}
                >
                  Redeem {params.rToken}
                </Button>
              </div>
            </div>

            <div className="mt-3 ml-12 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
              <div className="flex items-center">
                <img src={iconApy} alt="apy" className="w-6 h-6" />

                <div className="ml-1 text-white font-bold text-[20px]">
                  <FormatterText value={exchangeRate} />
                </div>
              </div>

              <div className="mt-3 text-text-gray7 text-[14px]">
                {params.rToken} / {tokenName} Rate
              </div>

              <div className="mt-12 text-text-gray7 text-[12px] scale-[0.85] origin-top-left">
                Updated every {eraHours} hours
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[60px] py-7 pl-9 pr-12 bg-[#111017] rounded-[4px] flex items-start justify-between">
          <div>
            <div className="flex items-center">
              <img
                src={iconReward}
                alt="rAsset reward"
                className="w-[18px] h-[18px]"
              />

              <div className="ml-2 text-[12px] text-text-gray3">
                rAsset Reward
              </div>
            </div>

            <div className="mt-10 text-[#aaaaaa] text-[20px] leading-tight">
              Redeemable Reward
              <br />
              in {getTokenDisplayName(chainId)} (last 24h)
            </div>

            <div className="mt-6 flex items-center">
              <div className="text-white font-bold text-[30px]">
                + <FormatterText value={last24hReward} />
              </div>

              <div className="ml-5">
                <TokenIcon denom={getDenom(chainId)} size={26} />
              </div>
            </div>

            <div className="mt-7 w-[290px] h-[0.5px] bg-divider" />

            <div className="mt-5 text-[#aaaaaa] text-[20px] leading-tight">
              Total Redeemable
              <br />
              Reward in {getTokenDisplayName(chainId)}
            </div>

            <div className="mt-6 flex items-center">
              <div className="text-white font-bold text-[30px]">
                + <FormatterText value={totalReward} />
              </div>

              <div className="ml-5">
                <TokenIcon denom={getDenom(chainId)} size={26} />
              </div>
            </div>

            <Tooltip
              title="Staking rewards are automatically restaked, you can redeem reward through the redeem function."
              placement="right"
            >
              <div className="mt-10 w-8 self-start ml-1 text-[12px] underline text-white">
                Claim?
              </div>
            </Tooltip>
          </div>

          <div className="w-[590px]">
            <div className="mt-7 flex items-start justify-between">
              <div className="text-[22px] font-bold text-white">
                Staked Value
              </div>

              <div className="flex flex-col items-end">
                <div className="text-[22px] font-bold text-white">
                  $<FormatterText value={stakeStatus?.stakedValue} />
                </div>

                <div className="mt-2 flex">
                  <div className="text-secondary text-[14px]">
                    +<FormatterText value={lastEraReward} />{" "}
                    {getTokenDisplayName(chainId)}
                  </div>

                  <div className="ml-[4px] text-white text-[14px]">
                    (last era)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-divider" />

            <div className="mt-2 h-[320px]">
              {chartXData && chartXData.length > 0 ? (
                <EraRewardChart xData={chartXData} yData={chartYData} />
              ) : (
                <div className="flex justify-center">
                  <img
                    src={nodata}
                    alt="no data"
                    className="mt-[80px] w-[146px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <DashboardRecords />
        </div>
      </div>

      <TradeModal
        tradeTokenName={params.rToken || ""}
        visible={tradeModalVisible}
        onClose={() => setTradeModalVisible(false)}
      />
    </div>
  );
};

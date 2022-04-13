import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import {
  Button,
  FormatterText,
  RTokenIcon,
  TokenIcon,
} from "@stafihub/react-components";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import iconApy from "../assets/images/icon_apy.svg";
import iconBarLine from "../assets/images/icon_bar_line.svg";
import iconReward from "../assets/images/icon_rAsset_reward.svg";
import iconSwitch from "../assets/images/icon_switch.svg";
import iconWaveLine from "../assets/images/icon_wave_line.svg";
import { DashboardRecords } from "../components/stake/DashboardRecords";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useUnbondCommission } from "../hooks/useUnbondCommission";

export const RTokenDashboard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const tokenName = getTokenDisplayName(chainId);
  const rTokenDenom = getRTokenDenom(chainId);
  const { stakeStatus } = useChainStakeStatus(chainId);
  const { exchangeRate, eraHours } = useStakePoolInfo(rTokenDenom);
  const { unbondCommission } = useUnbondCommission(rTokenDenom);

  const stakedAmount = useMemo(() => {
    if (
      !stakeStatus ||
      isNaN(Number(exchangeRate)) ||
      isNaN(Number(stakeStatus.rTokenBalance))
    ) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * Number(exchangeRate);
  }, [exchangeRate, stakeStatus]);

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
    if (!stakeStatus || isNaN(Number(stakeStatus.rTokenBalance))) {
      return "--";
    }
    return Number(stakeStatus.rTokenBalance) * 0.06;
  }, [stakeStatus]);

  const redeemableValue = useMemo(() => {
    if (!redeemableAmount || isNaN(Number(redeemableAmount))) {
      return "--";
    }
    return Number(redeemableAmount) * 0.06;
  }, [redeemableAmount]);

  return (
    <div className="w-[1050px]">
      <div className="pl-9 pb-[180px]">
        <div className="mt-6 flex items-center">
          <div className="text-[12px] text-text-gray4">rAsset on</div>
          <div className="ml-1 flex items-center cursor-pointer">
            <div className="text-[12px] text-primary font-bold">StaFiHub</div>
            <img src={iconSwitch} className="ml-1 h-[14px]" alt="switch" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap">
          <div className="mt-8 min-w-[220px] flex items-start">
            {params.rToken && (
              <RTokenIcon rtokenName={params.rToken} size={60} />
            )}

            <div className="ml-7">
              <div className="text-white font-bold text-[30px]">
                {params.rToken}
              </div>

              <div className="mt-5 text-white font-bold text-[50px]">
                <FormatterText
                  value={stakeStatus?.rTokenBalance}
                  decimals={2}
                />
              </div>

              <div className="mt-4 text-text-gray7 text-[14px]">
                <FormatterText value={stakedAmount} decimals={2} /> {tokenName}{" "}
                staked
              </div>
            </div>
          </div>

          <div className="mt-3 ml-20 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
            <div className="flex items-center">
              <img src={iconWaveLine} alt="wave line" className="w-6 h-6" />
              <div className="ml-1 text-white font-bold text-[20px]">
                $<FormatterText value={rTokenValue} decimals={2} />
              </div>
            </div>

            <div className="mt-3 text-text-gray7 text-[14px]">rATOM Value</div>

            <div className="mt-8 w-[110px]">
              <Button bgPrimary textDark type="rectangle" size="small">
                Trade rATOM
              </Button>
            </div>
          </div>

          <div className="mt-3 ml-12 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
            <div className="flex items-center">
              <img src={iconBarLine} alt="bar line" className="w-6 h-6" />
              <div className="ml-1 text-white font-bold text-[20px]">
                $<FormatterText value={redeemableValue} decimals={2} />
              </div>
            </div>

            <div className="mt-3 text-text-gray7 text-[14px]">
              Redeemable Value
            </div>

            <div className="mt-8 w-[110px]">
              <Button
                bgPrimary
                textDark
                type="rectangle"
                size="small"
                px={1}
                onClick={() => navigate(`/${params.rToken}/stake/redeem`)}
              >
                Redeem rATOM
              </Button>
            </div>
          </div>

          <div className="mt-3 ml-12 min-w-[185px] pt-7 pl-4 pr-6 pb-5 bg-[#111017] rounded-[4px]">
            <div className="flex items-center">
              <img src={iconApy} alt="apy" className="w-6 h-6" />
              <div className="ml-1 text-white font-bold text-[20px]">
                <FormatterText value={exchangeRate} decimals={2} />
              </div>
            </div>

            <div className="mt-3 text-text-gray7 text-[14px]">
              rATOM / ATOM Rate
            </div>

            <div className="mt-12 text-text-gray7 text-[12px] scale-[0.85] origin-top-left">
              Updated every {eraHours} hours
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

            <div className="mt-10 w-[195px] text-[#aaaaaa] text-[20px]">
              Redeemable Reward in the last 24h
            </div>

            <div className="mt-7 flex items-center">
              <div className="text-white font-bold text-[30px]">+ 0.00</div>

              <div className="ml-5">
                <TokenIcon tokenName={getTokenDisplayName(chainId)} size={26} />
              </div>
            </div>

            <div className="mt-7 w-[290px] h-[0.5px] bg-divider" />

            <div className="mt-5 w-[240px] text-[#aaaaaa] text-[20px]">
              Total Redeemable Reward since stake
            </div>

            <div className="mt-7 flex items-center">
              <div className="text-white font-bold text-[30px]">+ 0.00</div>

              <div className="ml-5">
                <TokenIcon tokenName={getTokenDisplayName(chainId)} size={26} />
              </div>
            </div>
          </div>

          <div className="w-[590px]">
            <div className="mt-7 flex items-start justify-between">
              <div className="text-[22px] font-bold text-white">
                Staked Value
              </div>

              <div className="flex flex-col items-end">
                <div className="text-[22px] font-bold text-white">$2301.21</div>

                <div className="mt-2 flex">
                  <div className="text-secondary text-[14px]">
                    +0.00 {getTokenDisplayName(chainId)}
                  </div>

                  <div className="ml-[4px] text-white text-[14px]">
                    (last era)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-divider" />

            <div className="mt-2 h-[320px]"></div>
          </div>
        </div>

        <div className="mt-14">
          <DashboardRecords />
        </div>
      </div>
    </div>
  );
};

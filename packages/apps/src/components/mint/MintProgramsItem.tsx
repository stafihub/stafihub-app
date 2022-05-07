import { getDenom, getRTokenDisplayName } from "@stafihub/apps-config";
import { FormatterText, RTokenIcon } from "@stafihub/react-components";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePriceFromDenom } from "../../hooks/useAppSlice";
import { useInterval } from "../../hooks/useInterval";
import { FormatMintRewardAct } from "../../types/interface";
import { formatDuration } from "../../utils/time";
import { TokenName } from "./TokenName";

interface MintProgramsItemProps {
  data: FormatMintRewardAct;
}

export const MintProgramsItem = (props: MintProgramsItemProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const tokenPrice = usePriceFromDenom(getDenom(data.chainId));
  const [remainingDisplayTime, setRemainingDisplayTime] = useState("");
  const [displayTokenName, setDisplayTokenName] = useState("");

  useInterval(() => {
    if (data) {
      setRemainingDisplayTime(
        data.endTimestamp < Date.now()
          ? "End"
          : formatDuration(data.endTimestamp - Date.now())
      );
    }
  }, 1000);

  const mintedValue = useMemo(() => {
    if (
      isNaN(Number(tokenPrice)) ||
      isNaN(Number(data.totalNativeTokenAmount))
    ) {
      return "--";
    }
    return Number(tokenPrice) * Number(data.totalNativeTokenAmount);
  }, [data, tokenPrice]);

  return (
    <div className="w-full pt-5 pb-3 flex text-white bg-black-700 items-center">
      <div className="basis-[25%] font-bold text-[16px] flex items-center">
        <div className="ml-6 mr-[10px]">
          <RTokenIcon rtokenName={data.rTokenDisplayName} size={26} />
        </div>

        <div>{data.rTokenDisplayName}</div>
      </div>

      <div className="basis-[20%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="w-[70px]">1 : {rewardInfo.apy}</div>

            {/* <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom uppercase">
              {rewardInfo.denom.slice(1)}
            </div> */}
            <TokenName denom={rewardInfo.denom} />
          </div>
        ))}
      </div>

      <div className="basis-[15%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="w-[64px]">
              <FormatterText
                value={rewardInfo.totalRewardAmount}
                decimals={2}
              />
            </div>

            {/* <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom uppercase">
              {rewardInfo.denom.slice(1)}
            </div> */}
            <TokenName denom={rewardInfo.denom} />
          </div>
        ))}
      </div>

      <div className="basis-[20%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="w-[64px]">
              <FormatterText value={rewardInfo.leftRewardAmount} decimals={2} />
            </div>

            {/* <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom uppercase">
              {rewardInfo.denom.slice(1)}
            </div> */}
            <TokenName denom={rewardInfo.denom} />
          </div>
        ))}
      </div>

      <div className="basis-[20%] text-[14px]">
        $<FormatterText value={mintedValue} decimals={2} />
      </div>

      <div className="basis-[25%] text-[14px] flex items-end">
        <div>{data.durationDays}D</div>
        <div className="ml-1 text-[14px] origin-bottom-left">
          ({remainingDisplayTime})
        </div>
      </div>

      <div className="basis-3/12 text-[14px]">
        <div
          className="w-[66px] h-[22px] text-primary text-[12px] flex justify-center items-center border-primary border-solid border-[0.5px] rounded-full cursor-pointer"
          onClick={() =>
            navigate(
              `/mint/${getRTokenDisplayName(data.chainId)}/${data.cycle}`
            )
          }
        >
          Earn
        </div>
      </div>
    </div>
  );
};

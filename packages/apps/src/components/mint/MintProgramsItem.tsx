import {
  getDenom,
  getRTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { formatNumberToFixed } from "@stafihub/apps-util";
import {
  FormatterText,
  RTokenIcon,
  TokenName,
} from "@stafihub/react-components";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chains } from "../../config";
import { usePriceFromDenom } from "../../hooks/useAppSlice";
import { useInterval } from "../../hooks/useInterval";
import { RootState } from "../../redux/store";
import { FormatMintRewardAct } from "../../types/interface";
import { formatDuration } from "../../utils/time";

interface MintProgramsItemProps {
  data: FormatMintRewardAct;
}

export const MintProgramsItem = (props: MintProgramsItemProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const tokenPrice = usePriceFromDenom(getDenom(data.chainId, chains));
  const [remainingDisplayTime, setRemainingDisplayTime] = useState("");
  const priceList = useSelector((state: RootState) => {
    return state.app.priceList;
  });

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
      <div className="basis-[20%] font-bold text-[16px] flex items-center">
        <div className="ml-6 mr-[10px]">
          <RTokenIcon rtokenName={data.rTokenDisplayName} size={26} />
        </div>

        <div>{data.rTokenDisplayName}</div>
      </div>

      <div className="basis-[18%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="">
              {formatNumberToFixed(rewardInfo.calcApr, 2)}%
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[20%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="mr-1">
              <FormatterText
                value={rewardInfo.totalRewardAmount}
                decimals={2}
              />
            </div>

            <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom-left">
              <TokenName
                stafiHubChainConfig={chains[getStafiHubChainId()]}
                denom={rewardInfo.denom}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[20%] text-[14px]">
        {data.tokenRewardInfos.map((rewardInfo, index) => (
          <div key={index} className="my-1 flex items-end justify-start">
            <div className="mr-1">
              <FormatterText value={rewardInfo.leftRewardAmount} decimals={2} />
            </div>

            <div className="mb-[1px] pr-1 text-text-gray3 text-[12px] scale-[0.7] origin-bottom-left">
              <TokenName
                stafiHubChainConfig={chains[getStafiHubChainId()]}
                denom={rewardInfo.denom}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[15%] text-[14px]">
        $<FormatterText value={mintedValue} decimals={2} />
      </div>

      <div className="basis-[22%] text-[14px] flex items-end">
        <div>{data.durationDays}D</div>
        <div className="ml-1 text-[14px] origin-bottom-left">
          ({remainingDisplayTime})
        </div>
      </div>

      <div className="basis-2/12 text-[14px]">
        <div
          className="w-[66px] h-[22px] text-primary text-[12px] flex justify-center items-center border-primary border-solid border-[0.5px] rounded-full cursor-pointer"
          onClick={() =>
            navigate(
              `/mint/${getRTokenDisplayName(data.chainId, chains)}/${
                data.cycle
              }`
            )
          }
        >
          Earn
        </div>
      </div>
    </div>
  );
};

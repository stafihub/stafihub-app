import { useMemo } from "react";
import { useSelector } from "react-redux";
import bridgeImage from "../assets/images/hub_bridge.svg";
import { RAssetItem } from "../components/rasset/RAssetItem";
import { RAssetTableHeader } from "../components/rasset/RAssetTableHeader";
import { useRAssetList } from "../hooks/useRAssetList";
import { RootState } from "../redux/store";
import * as _ from "lodash";
import { FormatterText } from "@stafihub/react-components";
import { ComingSoon } from "../components/ComingSoon";

export const RAsset = () => {
  const rAssetList = useRAssetList();

  const stakeStatusMap = useSelector((state: RootState) => {
    return state.chain.chainStakeStatusMap;
  });

  const totalStakedValue = useMemo(() => {
    const sum = _.values(stakeStatusMap).reduce(
      (previousValue, currentValue) => {
        const oldValue = isNaN(Number(previousValue))
          ? 0
          : Number(previousValue);
        const newValue =
          Number(oldValue) + Number(currentValue?.stakedValue || 0);
        return newValue.toString();
      },
      "--"
    );

    return sum;
  }, [stakeStatusMap]);

  return <ComingSoon />;

  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-secondary text-[20px] px-4 py-[10px] border-b-[2px] border-solid border-secondary">
        StaFiHub
      </div>

      <div className="mt-6 min-h-[500px] relative flex flex-col items-center">
        <img
          src={bridgeImage}
          alt="background"
          className="w-[1138px] h-[100px] opacity-20 top-[400px] absolute"
        />

        <RAssetTableHeader />

        {rAssetList.map((rAsset) => (
          <div key={rAsset.chainId} className="my-[10px]">
            <RAssetItem
              chainId={rAsset.chainId}
              originTokenName={rAsset.tokenName}
              derivativeTokenName={rAsset.rTokenName}
            />
          </div>
        ))}

        <div className="self-stretch mt-16 flex justify-end items-center">
          <div className="text-[16px] text-text-gray3">Total Staked Value</div>
          <div className="ml-2 text-[20px] font-bold text-white">
            {!isNaN(Number(totalStakedValue)) && "$"}{" "}
            <FormatterText value={totalStakedValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

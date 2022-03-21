import { useNavigate } from "react-router-dom";
import bridgeImage from "../assets/images/hub_bridge.svg";
import { RAssetItem } from "../components/rasset/RAssetItem";
import { RAssetTableHeader } from "../components/rasset/RAssetTableHeader";
import { useRAssetList } from "../hooks/useRAssetList";

export const RAsset = () => {
  const navigate = useNavigate();
  const rAssetList = useRAssetList();

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
          <RAssetItem
            key={rAsset.chainId}
            chainId={rAsset.chainId}
            originTokenName={rAsset.tokenName}
            derivativeTokenName={rAsset.rTokenName}
            onClickStake={() => {
              navigate(`/stake/${rAsset.chainId}`);
            }}
          />
        ))}

        <div className="self-stretch mt-16 flex justify-end items-center">
          <div className="text-[16px] text-text-gray3">
            Total staked Value ($)
          </div>
          <div className="ml-2 text-[20px] font-bold text-white">--</div>
        </div>
      </div>
    </div>
  );
};

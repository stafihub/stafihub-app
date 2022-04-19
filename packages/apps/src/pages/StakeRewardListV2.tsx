import {
  getChainIdFromRTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { CustomLoading } from "@stafihub/react-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { StakeRewardTableHeader } from "../components/StakeRewardTableHeader";
import { StakeRewardTableItem } from "../components/StakeRewardTableItem";
import { useAccountReward } from "../hooks/useAccountReward";
import { useChainAccount } from "../hooks/useAppSlice";

export const StakeRewardListV2 = () => {
  const params = useParams();
  const stafihubAccount = useChainAccount(getStafiHubChainId());
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const { eraRewards, loading } = useAccountReward(chainId);

  useEffect(() => {
    if (!stafihubAccount || !params.rToken) {
      return;
    }
  }, [params.rToken, stafihubAccount, chainId]);

  return (
    <div className="">
      <div className="bg-[#111017] rounded-[10px] pt-5 px-7">
        <StakeRewardTableHeader chainId={chainId} />

        <div className="min-h-[150px]">
          <div className="flex flex-col items-center">
            {!loading && !eraRewards.length && (
              <>
                <img src={nodata} alt="nodata" className="mt-12 w-20" />

                <div className="mt-3 text-text-gray4 text-[12px]">No Data</div>
              </>
            )}

            {loading && (
              <div className="mt-14">
                <CustomLoading color="#FF7FA7" size={40} />
              </div>
            )}

            {eraRewards.map((eraReward) => (
              <StakeRewardTableItem eraReward={eraReward} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="mt-5 mb-4 text-text-gray4 text-[12px]">
          This form only shows the recent 10 records
        </div>
      </div>
    </div>
  );
};

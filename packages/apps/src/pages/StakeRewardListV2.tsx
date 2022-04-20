import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { CustomLoading } from "@stafihub/react-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { CustomPagination } from "../components/CustomPagination";
import { StakeRewardTableHeader } from "../components/StakeRewardTableHeader";
import { StakeRewardTableItem } from "../components/StakeRewardTableItem";
import { useChainAccount } from "../hooks/useAppSlice";
import { EraRewardItem } from "../types/interface";

export const StakeRewardListV2 = () => {
  const params = useParams();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [eraRewards, setEraRewards] = useState<EraRewardItem[]>([]);

  useEffect(() => {
    (async () => {
      if (!stafiHubAccount) {
        return;
      }
      const res = await fetch(
        "https://test-rtoken-api.stafihub.io/rtokenInfo/webapi/rtoken/reward",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chainType: 80,
            userAddress: stafiHubAccount.bech32Address,
            rTokenDenom: getRTokenDenom(chainId),
            pageIndex: page,
            pageCount: 10,
          }),
        }
      );

      const resJson = await res.json();
      setLoading(false);

      if (resJson.status === "80000" && resJson.data) {
        setEraRewards(resJson.data.eraRewardList || []);
        setTotalCount(resJson.data.totalCount);
      }
    })();
  }, [stafiHubAccount, page, chainId]);

  return (
    <div className="">
      <div className="bg-[#111017] rounded-[10px] pt-5 px-7">
        <StakeRewardTableHeader chainId={chainId} />

        <div className="min-h-[150px] pb-4">
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
              <StakeRewardTableItem key={eraReward.era} eraReward={eraReward} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="mt-5 mb-4 text-[12px]">
          <CustomPagination
            totalCount={totalCount}
            page={page}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

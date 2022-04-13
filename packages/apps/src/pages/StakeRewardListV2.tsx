import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { useParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { StakeRewardTableHeader } from "../components/StakeRewardTableHeader";
import { useAccountUnbond } from "../hooks/useAccountUnbond";
import { useRParams } from "../hooks/useRParams";

export const StakeRewardListV2 = () => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const { bondingDays } = useRParams(getRTokenDenom(chainId));

  const { unbondRecords, loading } = useAccountUnbond(getRTokenDenom(chainId));

  return (
    <div className="">
      <div className="bg-[#111017] rounded-[10px] pt-5 px-7">
        <StakeRewardTableHeader chainId={chainId} />

        <div className="min-h-[150px] overflow-auto">
          {/* <StakeRewardTableItem />

  <StakeRewardTableItem />

  <StakeRewardTableItem />

  <StakeRewardTableItem />

  <StakeRewardTableItem /> */}

          <div className="flex flex-col items-center">
            <img src={nodata} alt="nodata" className="mt-12 w-20" />

            <div className="mt-3 text-text-gray4 text-[12px]">No Data</div>
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

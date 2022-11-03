import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { CustomLoading } from "@stafihub/react-components";
import { useParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { UnbondRecordTableHeaderV2 } from "../components/unbond/UnbondRecordTableHeaderV2";
import { UnbondRewardItemV2 } from "../components/unbond/UnbondRewardItemV2";
import { chains } from "../config";
import { useAccountUnbond } from "../hooks/useAccountUnbond";
import { useRParams } from "../hooks/useRParams";

export const StakeUnbondV2 = () => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken, chains);
  const { bondingDays } = useRParams(getRTokenDenom(chainId, chains));

  const { unbondRecords, loading } = useAccountUnbond(
    getRTokenDenom(chainId, chains)
  );
  
  return (
    <div className="">
      <div className="bg-[#111017] rounded-[10px] pt-5 px-7">
        <UnbondRecordTableHeaderV2 />

        <div className="min-h-[150px]">
          <div className="flex flex-col items-center">
            {!loading && !unbondRecords.length && (
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

            {unbondRecords.map((record, index) => (
              <UnbondRewardItemV2
                key={index}
                item={record}
                unbondingDays={bondingDays}
              />
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

import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { CustomLoading } from "@stafihub/react-components";
import { useParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { UnbondRecordTableHeader } from "../components/unbond/UnbondRecordTableHeader";
import { useAccountUnbond } from "../hooks/useAccountUnbond";
import { useRParams } from "../hooks/useRParams";

export const StakeUnbond = () => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const { bondingDays } = useRParams(getRTokenDenom(chainId));

  const { unbondRecords, loading } = useAccountUnbond(getRTokenDenom(chainId));

  return (
    <div className="pl-[30px] pt-[36px] pr-[30px]">
      <div className="mb-4 font-bold text-white text-[30px]">
        Unbonded Records
      </div>

      <UnbondRecordTableHeader />

      <div className="max-h-[325px] h-[325px] overflow-auto">
        <div className="flex flex-col items-center">
          {!loading && !unbondRecords.length && (
            <>
              <img src={nodata} alt="nodata" className="mt-14 w-20" />

              <div className="mt-3 text-text-gray4 text-[12px]">No Data</div>
            </>
          )}

          {loading && (
            <div className="mt-14">
              <CustomLoading color="#FF7FA7" size={40} />
            </div>
          )}

          {/* {unbondRecords.map((record, index) => (
            <UnbondRewardItem
              key={index}
              item={record}
              unbondingDays={bondingDays}
            />
          ))} */}
        </div>
      </div>

      <div className="mt-10 mb-4 text-text-gray4 text-[12px]">
        This form only shows the recent 10 records
      </div>
    </div>
  );
};

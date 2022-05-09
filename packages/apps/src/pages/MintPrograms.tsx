import { CustomLoading, FormatterText } from "@stafihub/react-components";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import nodata from "../assets/images/nodata.png";
import { MintProgramsItem } from "../components/mint/MintProgramsItem";
import { MintProgramsTableHeader } from "../components/mint/MintProgramsTableHeader";
import { useLatestBlock } from "../hooks/useAppSlice";
import { useInterval } from "../hooks/useInterval";
import { useMintPrograms } from "../hooks/useMintPrograms";

export const MintPrograms = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const latestBlock = useLatestBlock();
  const {
    actDetails,
    totalMintedValue,
    totalRewardFis,
    loading,
    updateActDetails,
  } = useMintPrograms();

  const [programStatus, setProgramStatus] = useState<
    "In Progress" | "Completed"
  >("In Progress");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tab === "completed") {
      setProgramStatus("Completed");
    } else {
      setProgramStatus("In Progress");
    }
  }, [searchParams]);

  useInterval(() => {
    updateActDetails();
  }, 6000);

  const displayList = useMemo(() => {
    if (!latestBlock) {
      return [];
    }
    return actDetails.filter((actDetail) => {
      return programStatus === "In Progress"
        ? actDetail.end > latestBlock
        : actDetail.end <= latestBlock;
    });
  }, [latestBlock, programStatus, actDetails]);

  return (
    <div>
      <div className="mt-7 flex">
        <div className="w-[217px] h-20 rounded-[4px] bg-black-700 flex flex-col">
          <div className="mt-4 ml-5 text-white text-[12px]">
            Total Minted Value
          </div>
          <div className="self-end mt-4 mr-3 text-white text-[20px] font-bold">
            $<FormatterText value={totalMintedValue} decimals={2} />
          </div>
        </div>

        <div className="ml-7 w-[217px] h-20 rounded-[4px] bg-black-700 flex flex-col">
          <div className="mt-4 ml-5 text-white text-[12px]">
            Total Reward FIS
          </div>
          <div className="self-end mt-4 mr-3 text-white text-[20px] font-bold">
            <FormatterText value={totalRewardFis} decimals={2} />
          </div>
        </div>
      </div>

      <div className="mt-5 h-[1px] bg-divider" />

      <div className="mt-5 flex">
        <div
          className={classNames(
            "rounded-full w-[100px] h-[34px] flex items-center justify-center text-[12px] font-bold cursor-pointer bg-[#262626]",
            programStatus === "In Progress" ? "text-primary" : "text-text-gray3"
          )}
          // onClick={() => setProgramStatus("In Progress")}
          onClick={() => setSearchParams({ tab: "inProgress" })}
        >
          In Progress
        </div>

        <div
          className={classNames(
            "ml-5 rounded-full w-[100px] h-[34px] flex items-center justify-center text-[12px] font-bold cursor-pointer bg-[#262626]",
            programStatus === "Completed" ? "text-primary" : "text-text-gray3"
          )}
          onClick={() => setSearchParams({ tab: "completed" })}
        >
          Completed
        </div>
      </div>

      <div className="mt-5">
        <MintProgramsTableHeader />
      </div>

      <div>
        {displayList.map((actDetail, index) => (
          <MintProgramsItem key={index} data={actDetail} />
        ))}
      </div>

      {!loading && !displayList.length && (
        <div className="flex flex-col items-center">
          <img src={nodata} alt="nodata" className="mt-14 w-20" />

          <div className="mt-3 text-text-gray4 text-[12px]">No Data</div>
        </div>
      )}

      {loading && !displayList.length && (
        <div className="mt-14 flex flex-col items-center">
          <CustomLoading color="#FF7FA7" size={40} />
        </div>
      )}
    </div>
  );
};

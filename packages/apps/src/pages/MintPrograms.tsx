import classNames from "classnames";
import { useState } from "react";
import { MintProgramsItem } from "../components/mint/MintProgramsItem";
import { MintProgramsTableHeader } from "../components/mint/MintProgramsTableHeader";
import { useMintPrograms } from "../hooks/useMintPrograms";

export const MintPrograms = () => {
  const mintPrograms = useMintPrograms();

  const [programStatus, setProgramStatus] = useState<
    "In Progress" | "Completed"
  >("In Progress");

  return (
    <div>
      <div className="mt-7 flex">
        <div className="w-[217px] h-20 rounded-[4px] bg-black-700 flex flex-col">
          <div className="mt-4 ml-5 text-white text-[12px]">
            Total minted value
          </div>
          <div className="self-end mt-4 mr-3 text-white text-[20px] font-bold">
            $232,236,774
          </div>
        </div>

        <div className="ml-7 w-[217px] h-20 rounded-[4px] bg-black-700 flex flex-col">
          <div className="mt-4 ml-5 text-white text-[12px]">
            Farming APY. avg
          </div>
          <div className="self-end mt-4 mr-3 text-white text-[20px] font-bold">
            234.234%
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
          onClick={() => setProgramStatus("In Progress")}
        >
          In Progress
        </div>

        <div
          className={classNames(
            "ml-5 rounded-full w-[100px] h-[34px] flex items-center justify-center text-[12px] font-bold cursor-pointer bg-[#262626]",
            programStatus === "Completed" ? "text-primary" : "text-text-gray3"
          )}
          onClick={() => setProgramStatus("Completed")}
        >
          Completed
        </div>
      </div>

      <div className="mt-5">
        <MintProgramsTableHeader />
      </div>

      <div>
        {mintPrograms.map((mintProgram) => (
          <MintProgramsItem data={mintProgram} />
        ))}
      </div>
    </div>
  );
};

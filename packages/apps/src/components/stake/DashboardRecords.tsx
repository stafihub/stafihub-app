import classNames from "classnames";
import { useState } from "react";
import iconRecords from "../../assets/images/icon_records.svg";
import { StakeRewardListV2 } from "../../pages/StakeRewardListV2";
import { StakeUnbondV2 } from "../../pages/StakeUnbondV2";

export const DashboardRecords = () => {
  const [tab, setTab] = useState<"unbond" | "reward">("reward");

  return (
    <div>
      <div className="flex items-center">
        <img src={iconRecords} alt="records" className="w-[18px] h-[18px]" />

        <div className="ml-[10px] text-[12px] text-text-gray4">Records</div>
      </div>

      <div className="mt-[10px] flex items-center">
        <div
          className={classNames(
            "flex items-center justify-center w-[110px] h-[30px] font-bold text-[13px] rounded-[3px] cursor-pointer",
            tab === "reward"
              ? "text-text-black1 bg-primary"
              : "border-solid border-[1px] border-[#8F8F8F] text-[#8F8F8F]"
          )}
          onClick={() => setTab("reward")}
        >
          Reward
        </div>

        <div
          className={classNames(
            "ml-[10px] flex items-center justify-center w-[110px] h-[30px] font-bold text-[13px] rounded-[3px] cursor-pointer",
            tab === "unbond"
              ? "text-text-black1 bg-primary"
              : "border-solid border-[1px] border-[#8F8F8F] text-[#8F8F8F]"
          )}
          onClick={() => setTab("unbond")}
        >
          Unbond
        </div>
      </div>

      <div className="mt-6">
        {tab === "unbond" && <StakeUnbondV2 />}

        {tab === "reward" && <StakeRewardListV2 />}
      </div>
    </div>
  );
};

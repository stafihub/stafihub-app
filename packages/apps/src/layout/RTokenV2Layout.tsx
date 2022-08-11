import classNames from "classnames";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { ComingSoon } from "../components/ComingSoon";
import { DashboardTokenSelector } from "../components/stake/DashboardTokenSelector";

export const RTokenV2Layout = () => {
  const navigate = useNavigate();
  const matchStakeList = useMatch("/rToken");
  const matchStakeContent = useMatch("/rToken/:rToken/stake");

  return <ComingSoon />;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start">
        <div
          className={classNames(
            "text-[20px] cursor-pointer pb-3 px-1 font-bold",
            matchStakeList || matchStakeContent
              ? "text-secondary border-b-[2px] border-secondary font-bold border-solid"
              : "text-white"
          )}
          onClick={() => navigate("/rToken")}
        >
          STAKE
        </div>

        <DashboardTokenSelector />
      </div>

      <div
        className="self-stretch mt-8 pt-8 relative flex flex-col items-stretch"
        style={{
          height: "calc(100vh - 140px)",
        }}
      >
        <div className="overflow-auto flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

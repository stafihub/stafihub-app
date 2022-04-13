import classNames from "classnames";
import { Outlet, useMatch, useNavigate, useParams } from "react-router-dom";

export const RPoolLayout = () => {
  const navigate = useNavigate();
  const params = useParams();

  const matchDefault = useMatch(`/rPool`);
  const matchMint = useMatch(`/rPool/mint`);
  const matchLiquidity = useMatch(`/rPool/liquidity`);

  return (
    <div className="flex justify-center">
      <div className="w-[1120px] pl-[87px] pr-10">
        <div className="mt-14 flex items-start">
          <div
            className={classNames(
              "text-[20px] font-bold cursor-pointer pb-1",
              matchDefault || matchMint
                ? "text-primary border-b-[3px] border-primary border-solid"
                : "text-text-gray3"
            )}
            onClick={() => navigate("/rPool/mint")}
          >
            Mint Programs
          </div>

          <div
            className={classNames(
              "ml-10 text-[20px] font-bold cursor-pointer pb-1",
              matchLiquidity
                ? "text-primary border-b-[2px] border-primary border-solid"
                : "text-text-gray3"
            )}
            onClick={() => navigate("/rPool/liquidity")}
          >
            Liquidity Programs
          </div>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

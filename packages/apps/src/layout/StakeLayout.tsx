import { CardContainer } from "@stafihub/react-components/src";
import ClassNames from "classnames";
import { Link, Outlet, useParams, useMatch } from "react-router-dom";

export const StakeLayout = () => {
  const params = useParams();

  const matchHome = useMatch(`/stake/${params.tokenName}`);
  const matchStatus = useMatch(`/stake/${params.tokenName}/status`);
  const matchRedeem = useMatch(`/stake/${params.tokenName}/redeem`);
  const matchReward = useMatch(`/stake/${params.tokenName}/reward`);
  const matchRecovery = useMatch(`/stake/${params.tokenName}/recovery`);

  return (
    <div className="flex justify-center pt-[55px]">
      <CardContainer>
        <div className="flex">
          <div className="mt-[30px] ml-[20px] text-[12px] text-text-gray3">
            <Link to={`/stake/${params.tokenName}`}>
              <div
                className={ClassNames(
                  { "font-bold text-primary": matchHome },
                  "mb-[5px] cursor-pointer"
                )}
              >
                -Stake
              </div>
            </Link>

            <Link to={`/stake/${params.tokenName}/status`}>
              <div
                className={ClassNames(
                  { "font-bold text-primary": matchStatus || matchRedeem },
                  "mb-[5px] cursor-pointer"
                )}
              >
                -Status
              </div>
            </Link>

            <Link to={`/stake/${params.tokenName}/reward`}>
              <div
                className={ClassNames(
                  { "font-bold text-primary": matchReward },
                  "mb-[5px] cursor-pointer"
                )}
              >
                -Reward
              </div>
            </Link>

            <Link to={`/stake/${params.tokenName}/recovery`}>
              <div
                className={ClassNames(
                  { "font-bold text-primary": matchRecovery },
                  "mb-[5px] cursor-pointer"
                )}
              >
                -Recovery
              </div>
            </Link>
          </div>

          <div className="self-stretch my-[30px] ml-[20px] w-[0.5px] bg-divider" />

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

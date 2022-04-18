import { getRTokenDisplayName } from "@stafihub/apps-config";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StakeTokenCard } from "../components/stake/StakeTokenCard";
import { useAccounts } from "../hooks/useAppSlice";
import { useRTokenList } from "../hooks/useRTokenList";
import { connectKeplr } from "../redux/reducers/AppSlice";

export const RTokenV2StakeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const rTokenList = useRTokenList();
  const accounts = useAccounts();

  const selectedTab = useMemo(() => {
    return searchParams.get("tab") === "dashboard" ? "dashboard" : "stake";
  }, [searchParams]);

  const enterStakePage = (chainId: string) => {
    navigate(`/rToken/${getRTokenDisplayName(chainId)}/stake`);
  };

  return (
    <div className="mt-16 min-h-[500px] relative flex flex-col items-center">
      {/* <img
        src={bridgeImage}
        alt="background"
        className="w-[1138px] h-[100px] opacity-20 top-[400px] absolute"
      /> */}

      <div className="w-[580px] flex flex-wrap">
        {rTokenList.map((rToken) => (
          <div key={rToken.chainId} className="mb-3 px-[30px] flex-1">
            <StakeTokenCard
              chainId={rToken.chainId}
              originTokenName={rToken.tokenName}
              derivativeTokenName={rToken.rTokenName}
              onClickStake={() => {
                if (!accounts[rToken.chainId]) {
                  dispatch(
                    connectKeplr(rToken.chainId, (connected) => {
                      if (connected) {
                        enterStakePage(rToken.chainId);
                      }
                    })
                  );
                } else {
                  enterStakePage(rToken.chainId);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

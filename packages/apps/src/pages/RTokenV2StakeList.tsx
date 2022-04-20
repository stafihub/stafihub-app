import { getRTokenDisplayName } from "@stafihub/apps-config";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StakeTokenCard } from "../components/stake/StakeTokenCard";
import { useAccounts } from "../hooks/useAppSlice";
import { useRTokenList } from "../hooks/useRTokenList";
import { connectKeplr } from "../redux/reducers/AppSlice";

export const RTokenV2StakeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rTokenList = useRTokenList();
  const accounts = useAccounts();

  const enterStakePage = (chainId: string) => {
    navigate(`/rToken/${getRTokenDisplayName(chainId)}/stake`);
  };

  return (
    <div className="mt-16 min-h-[500px] relative flex flex-col items-center">
      <div
        className={classNames(
          "w-[580px] grid",
          rTokenList && rTokenList.length > 1 ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        {rTokenList.map((rToken) => (
          <div key={rToken.chainId} className="mb-3 px-[30px]">
            <StakeTokenCard
              type={rTokenList && rTokenList.length > 1 ? "middle" : "large"}
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

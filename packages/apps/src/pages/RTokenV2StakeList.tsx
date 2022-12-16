import { getRTokenDisplayName } from "@stafihub/apps-config";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StakeTokenCard } from "../components/stake/StakeTokenCard";
import { chains } from "../config";
import { useAccounts, useLatestBlock } from "../hooks/useAppSlice";
import { useMintPrograms } from "../hooks/useMintPrograms";
import { useRTokenList } from "../hooks/useRTokenList";
import { connectKeplr } from "../redux/reducers/AppSlice";

export const RTokenV2StakeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rTokenList = useRTokenList();
  const accounts = useAccounts();
  const { actDetails } = useMintPrograms();
  const latestBlock = useLatestBlock();

  const enterStakePage = (chainId: string) => {
    navigate(`/rToken/${getRTokenDisplayName(chainId, chains)}/stake`);
  };

  return (
    <div className="mt-4 min-h-[500px] relative flex flex-col items-center">
      <div
        className={classNames(
          rTokenList && rTokenList.length > 2 ? "w-[999px]" : "w-[580px]",
          "grid",
          rTokenList && rTokenList.length > 2
            ? "grid-cols-3"
            : rTokenList && rTokenList.length > 1
            ? "grid-cols-2"
            : "grid-cols-1"
        )}
      >
        {rTokenList.map((rToken) => (
          <div
            key={rToken.chainId}
            className={classNames(
              "mb-3",
              rTokenList.length > 2 ? "px-[50px]" : "px-[30px]"
            )}
          >
            <StakeTokenCard
              type={rTokenList && rTokenList.length > 1 ? "middle" : "large"}
              chainId={rToken.chainId}
              originTokenName={rToken.tokenName}
              derivativeTokenName={rToken.rTokenName}
              actDetail={actDetails.find(
                (item) =>
                  item.rTokenDisplayName === rToken.rTokenName &&
                  latestBlock &&
                  item.end >= latestBlock
              )}
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

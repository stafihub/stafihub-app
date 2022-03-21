import bridgeImage from "../assets/images/hub_bridge.svg";
import { useNavigate } from "react-router-dom";
import { useRTokenList } from "../hooks/useRTokenList";
import { StakeTokenItem } from "../components/stake/StakeTokenItem";
import { StakeTokenTableHeader } from "../components/stake/StakeTokenTableHeader";

export const RTokenHome = () => {
  const navigate = useNavigate();
  const rTokenList = useRTokenList();

  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-secondary text-[20px] px-4 py-[10px] border-b-[2px] border-solid border-secondary">
        Stake
      </div>

      <div className="mt-6 min-h-[500px] relative flex flex-col items-center">
        <img
          src={bridgeImage}
          alt="background"
          className="w-[1138px] h-[100px] opacity-20 top-[400px] absolute"
        />

        <StakeTokenTableHeader />

        {rTokenList.map((rToken) => (
          <StakeTokenItem
            key={rToken.chainId}
            chainId={rToken.chainId}
            originTokenName={rToken.tokenName}
            derivativeTokenName={rToken.rTokenName}
            onClickStake={() => {
              navigate(`/stake/${rToken.chainId}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

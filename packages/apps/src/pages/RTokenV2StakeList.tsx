import bridgeImage from "../assets/images/hub_bridge.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRTokenList } from "../hooks/useRTokenList";
import { StakeTokenItem } from "../components/stake/StakeTokenItem";
import { StakeTokenTableHeader } from "../components/stake/StakeTokenTableHeader";
import { getRTokenDisplayName } from "@stafihub/apps-config";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { StakeTokenCard } from "../components/stake/StakeTokenCard";

export const RTokenV2StakeList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const rTokenList = useRTokenList();

  const selectedTab = useMemo(() => {
    return searchParams.get("tab") === "dashboard" ? "dashboard" : "stake";
  }, [searchParams]);

  return (
    <div className="mt-16 min-h-[500px] relative flex flex-col items-center">
      <img
        src={bridgeImage}
        alt="background"
        className="w-[1138px] h-[100px] opacity-20 top-[400px] absolute"
      />

      <div className="w-[580px] flex flex-wrap">
        {rTokenList.map((rToken) => (
          <div key={rToken.chainId} className="mb-3 px-[30px] flex-1">
            <StakeTokenCard
              chainId={rToken.chainId}
              originTokenName={rToken.tokenName}
              derivativeTokenName={rToken.rTokenName}
              onClickStake={() => {
                navigate(
                  `/rToken/${getRTokenDisplayName(rToken.chainId)}/stake`
                );
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

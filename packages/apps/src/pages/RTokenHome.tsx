import {
  StakeTokenItem,
  StakeTokenTableHeader,
} from "@stafihub/react-components";
import bridgeImage from "../assets/images/hub_bridge.svg";
import { useNavigate } from "react-router-dom";

export const RTokenHome = () => {
  const navigate = useNavigate();

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

        <StakeTokenItem
          originTokenName="ETH"
          derivativeTokenName="rETH"
          onClickStake={() => {
            navigate("/stake/iris");
          }}
        />
      </div>
    </div>
  );
};

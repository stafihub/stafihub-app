import { useNavigate } from "react-router-dom";
import stafihubLogo from "../assets/images/stafihub_logo.svg";
import { ValidatorCard } from "../components/ValidatorCard";
import { useRTokenList } from "../hooks/useRTokenList";

export const ValidatorHome = () => {
  const navigate = useNavigate();
  const rTokenList = useRTokenList();

  return (
    <div className="flex-1">
      <img
        src={stafihubLogo}
        alt="logo"
        className="mt-6 ml-4 mb-[25px]  w-[116px] h-[38px] self-start cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="mt-12 ml-10 mr-[60px]">
        <div className="text-[40px] font-bold text-white">rToken Validator</div>

        <div className="mt-1 text-[14px] text-[#ADADAD]">
          To be transparency, onchain data decides whom can be delegated
        </div>

        <div className="mt-10">
          {rTokenList.map((rToken) => (
            <div key={rToken.chainId} className="mb-14">
              <ValidatorCard
                chainId={rToken.chainId}
                originTokenName={rToken.tokenName}
                derivativeTokenName={rToken.rTokenName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

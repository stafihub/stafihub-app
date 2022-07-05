import { getApiHost } from "@stafihub/apps-config";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stafihubLogo from "../assets/images/stafihub_logo.svg";
import { ValidatorCard } from "../components/ValidatorCard";
import { useRTokenList } from "../hooks/useRTokenList";
import { ValidatorWrapperInfo } from "../types/interface";

export const ValidatorHome = () => {
  const navigate = useNavigate();
  const rTokenList = useRTokenList();
  const [validators, setValidators] = useState<ValidatorWrapperInfo[]>([]);

  useEffect(() => {
    if (isEmpty(rTokenList)) {
      return;
    }

    const abortController = new AbortController();

    fetch(`${getApiHost()}/stakingElection/api/v1/selectedValidators`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: abortController.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        if (resJson.status === "80000") {
          const validators = resJson.data.selectedValidators;
          setValidators(validators);
        }
      })
      .catch((err: Error) => {
        if (err.name === "AbortError") return;
        throw err;
      });

    return () => {
      abortController.abort();
    };
  }, [rTokenList]);

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
                validators={validators}
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

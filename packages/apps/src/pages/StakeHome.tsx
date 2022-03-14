import { Button, CustomInput, FormatterText } from "@stafihub/react-components";
import {
  sendStakeTx,
  queryPoolInfo,
  queryrTokenBalance,
} from "@stafihub/apps-wallet";
import { useParams } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import { useEffect, useState } from "react";
import { usePoolInfo } from "../hooks";
import { RTokenDenom } from "@stafihub/apps-config";

export const StakeHome = () => {
  const params = useParams();
  const tokenName = params.tokenName;
  const { poolAddress } = usePoolInfo(`ur${tokenName}` as RTokenDenom);

  const clickStake = async () => {
    if (!poolAddress) {
      return;
    }
    await sendStakeTx(poolAddress);
  };

  return (
    <div className="pt-[36px] pl-[30px] pb-[45px]">
      <div className="text-white font-bold text-[30px]">
        Stake {tokenName?.toUpperCase()}
      </div>

      <div className="mt-[12px] text-text-gray4 text-[14px]">
        23.344 ATOM is staked in the contracts
      </div>

      <div className="mt-[10px] mr-[35px] h-[0.5px] bg-divider" />

      <div className="mt-10 flex flex-col">
        <div className="border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
          <div className="ml-5">
            <CustomInput placeholder="STAKE AMOUNT" />
          </div>

          <div className="flex items-center">
            <div className="text-primary text-[16px] cursor-pointer">Max</div>

            <img
              src={ATOM}
              className="w-[36px] h-[36px] mx-[5px]"
              alt="token icon"
            />
          </div>
        </div>

        <div className="mt-[10px] text-white text-[14px]">
          Transferable: 123.342
        </div>
      </div>

      <div className="mt-12 font-bold text-text-gray5 text-[14px]">
        You will get rATOM
      </div>

      <div className="mt-[2px] font-bold text-primary text-[30px]">
        <FormatterText value="100000.23" decimals={6} />
      </div>

      <div className="mt-6 flex items-end">
        <div>
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Staking APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +BNB
            </div>
          </div>

          <div className="mt-[2px] font-bold text-primary text-[30px]">
            8.23%
          </div>
        </div>

        <div className="ml-[2px] mr-[20px] font-bold text-white text-[30px]">
          +
        </div>

        <div>
          <div className="flex items-end">
            <div className="font-bold text-[14px] text-text-gray5">
              Mint APR
            </div>

            <div className="ml-1 mb-[1.5px] text-text-gray5 text-[12px] scale-[0.67] origin-bottom-left">
              +FIS
            </div>
          </div>

          <div className="mt-[2px] font-bold text-primary text-[30px]">
            12.23%
          </div>
        </div>
      </div>

      <div className="mt-14 font-bold text-white text-[16px]">
        Received address
      </div>

      <div className="mt-[10px] border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
        <div className="ml-5">
          <CustomInput placeholder="FIS..." />
        </div>

        <div className="mr-[10px] text-primary text-[12px] cursor-pointer w-[63px] text-center">
          Connected Address
        </div>
      </div>

      <div className="mt-[10px] w-[494px] text-text-gray5 text-[12px]">
        Note: Make sure you have the right address, otherwise you will not
        receive the token If you provide a wrong address.
      </div>

      <div className="flex justify-end mt-[30px] mr-[57px]">
        <Button onClick={clickStake}>Stake</Button>
      </div>
    </div>
  );
};

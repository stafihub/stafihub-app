import {
  getRTokenDenom,
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { formatNumberToFixed } from "@stafihub/apps-util";
import { Button, CustomNumberInput } from "@stafihub/react-components";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import { usePoolInfo } from "../hooks";
import { useChainAccount } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useUnbondCommission } from "../hooks/useUnbondCommission";
import { UnbondModal } from "../modals/UnbondModal";

export const StakeRedeem = () => {
  const params = useParams();
  const chainId = params.chainId;
  const rTokenDenom = getRTokenDenom(chainId);
  const { exchangeRate } = usePoolInfo(rTokenDenom);
  const { unbondCommission } = useUnbondCommission(rTokenDenom);
  const { stakeStatus } = useChainStakeStatus(chainId);

  const chainAccount = useChainAccount(chainId);
  const [unbondModalVisible, setUnbondModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState("");

  const redeemableAmount = useMemo(() => {
    if (
      isNaN(Number(unbondCommission)) ||
      !stakeStatus ||
      isNaN(Number(stakeStatus.rTokenBalance))
    ) {
      return "--";
    }
    return (
      Number(stakeStatus.rTokenBalance) *
      (1 - Number(unbondCommission))
    ).toString();
  }, [unbondCommission, stakeStatus]);

  const commissionFee = useMemo(() => {
    if (isNaN(Number(unbondCommission)) || isNaN(Number(inputAmount))) {
      return "--";
    }
    return (Number(inputAmount) * Number(unbondCommission)).toString();
  }, [unbondCommission, inputAmount]);

  const willGetAmount = useMemo(() => {
    if (isNaN(Number(inputAmount)) || isNaN(Number(exchangeRate))) {
      return "--";
    }
    return (Number(inputAmount) * Number(exchangeRate)).toString();
  }, [inputAmount, exchangeRate]);

  const buttonDisabled = useMemo(() => {
    if (Number(inputAmount) <= 0) {
      return true;
    }
    if (Number(inputAmount) > Number(redeemableAmount)) {
      return true;
    }
    return false;
  }, [redeemableAmount, inputAmount]);

  return (
    <div className="pt-[36px] pl-[30px] pb-[45px]">
      <div className="text-white font-bold text-[30px]">
        Redeem {getTokenDisplayName(chainId)}
      </div>

      <div className="mt-10 text-white text-[20px]">
        1. Unbond {getTokenDisplayName(chainId)}
      </div>

      <div className="mt-2 flex flex-col">
        <div className="border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
          <div className="ml-5">
            <CustomNumberInput
              placeholder="AMOUNT"
              value={inputAmount}
              handleValueChange={setInputAmount}
            />
          </div>

          <div className="flex items-center">
            <div
              className="text-primary text-[16px] cursor-pointer"
              onClick={() => {
                console.log("redeemableAmount", redeemableAmount);
                if (
                  !isNaN(Number(redeemableAmount)) &&
                  Number(redeemableAmount) > 0
                ) {
                  setInputAmount(formatNumberToFixed(redeemableAmount));
                }
              }}
            >
              Max
            </div>

            <img
              src={ATOM}
              className="w-[36px] h-[36px] mx-[5px]"
              alt="token icon"
            />
          </div>
        </div>

        <div className="mt-[10px] text-text-gray4 text-[12px] self-end mr-[60px]">
          {getRTokenDisplayName(chainId)} balance:{" "}
          {stakeStatus ? stakeStatus.rTokenBalance : "--"}
        </div>
      </div>

      <div className="mt-10 text-white text-[20px]">2. Receiving address</div>

      <div className="mt-[20px]  w-[494px] flex items-center justify-between">
        <div className="text-white text-[14px] w-[63px] text-center">
          {chainAccount?.bech32Address}
        </div>

        <div className="mr-[10px] text-primary text-[12px] cursor-pointer italic">
          Edit
        </div>
      </div>

      <div className="flex justify-end mt-[130px] mr-[57px]">
        <Button
          disabled={buttonDisabled}
          onClick={() => {
            setUnbondModalVisible(true);
          }}
        >
          Unbond
        </Button>
      </div>

      <UnbondModal
        visible={unbondModalVisible}
        onClose={() => setUnbondModalVisible(false)}
        inputAmount={inputAmount}
        receiveAddress={chainAccount?.bech32Address || ""}
        willGetAmount={formatNumberToFixed(willGetAmount)}
        commissionFee={formatNumberToFixed(commissionFee)}
      />
    </div>
  );
};

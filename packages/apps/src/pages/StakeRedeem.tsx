import {
  getRTokenDenom,
  getRTokenDisplayName,
  getTokenDisplayName,
  getChainAccountPrefix,
  getChainIdFromRTokenDisplayName,
} from "@stafihub/apps-config";
import { formatNumberToFixed } from "@stafihub/apps-util";
import { checkAddress } from "@stafihub/apps-wallet";
import {
  Button,
  CustomNumberInput,
  CustomInput,
} from "@stafihub/react-components";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import { usePoolInfo } from "../hooks";
import { useChainAccount } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useUnbondCommission } from "../hooks/useUnbondCommission";
import { UnbondModal } from "../modals/UnbondModal";
import snackbarUtils from "../utils/snackbarUtils";

export const StakeRedeem = () => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const rTokenDenom = getRTokenDenom(chainId);
  const { exchangeRate } = usePoolInfo(rTokenDenom);
  const { unbondCommission } = useUnbondCommission(rTokenDenom);
  const { stakeStatus } = useChainStakeStatus(chainId);

  const chainAccount = useChainAccount(chainId);
  const [unbondModalVisible, setUnbondModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState("");
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [editAddress, setEditAddress] = useState("");

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
    if (Number(inputAmount) > Number(stakeStatus?.rTokenBalance)) {
      return true;
    }
    return false;
  }, [stakeStatus, inputAmount]);

  const finalAddress = useMemo(() => {
    if (!showEditAddress) {
      return chainAccount?.bech32Address || "";
    }
    return editAddress;
  }, [chainAccount, showEditAddress, editAddress]);

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
                if (
                  !isNaN(Number(stakeStatus?.rTokenBalance)) &&
                  Number(stakeStatus?.rTokenBalance) > 0
                ) {
                  setInputAmount(
                    formatNumberToFixed(stakeStatus?.rTokenBalance)
                  );
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

      <div className="mt-[20px] w-[494px] h-[40px] flex items-center justify-between">
        {showEditAddress ? (
          <>
            <div className="pl-2 py-1 mr-6 flex-1 border-b-[1px] border-[#494D51] border-solid">
              <CustomInput
                fontSize={14}
                placeholder="..."
                value={editAddress}
                handleValueChange={setEditAddress}
              />
            </div>
          </>
        ) : (
          <div className="pl-2 text-white text-[14px] text-center">
            {chainAccount?.bech32Address}
          </div>
        )}

        {showEditAddress ? (
          <div
            className="mr-[10px] text-primary text-[12px] cursor-pointer italic"
            onClick={() => {
              setShowEditAddress(false);
            }}
          >
            Cancel
          </div>
        ) : (
          <div
            className="mr-[10px] text-primary text-[12px] cursor-pointer italic"
            onClick={() => {
              setShowEditAddress(true);
              setEditAddress(chainAccount?.bech32Address || "");
            }}
          >
            Edit
          </div>
        )}
      </div>

      <div className="flex justify-end mt-[130px] mr-[57px]">
        <Button
          disabled={buttonDisabled}
          onClick={() => {
            if (
              !finalAddress ||
              !checkAddress(finalAddress, getChainAccountPrefix(chainId))
            ) {
              snackbarUtils.warning("Please input valid address");
              return;
            }
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
        receiveAddress={finalAddress}
        willGetAmount={formatNumberToFixed(willGetAmount)}
        commissionFee={formatNumberToFixed(commissionFee)}
      />
    </div>
  );
};

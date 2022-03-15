import { Button, CustomInput } from "@stafihub/react-components";
import { getCosmosNetwork } from "@stafihub/apps-config";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ATOM from "../assets/images/ATOM.svg";
import { UnbondModal } from "../components/UnbondModal";
import { useChainAccount } from "../hooks/useAppSlice";
import { usePoolInfo, useRTokenBalance } from "../hooks";

export const StakeRedeem = () => {
  const params = useParams();
  const tokenName = params.tokenName;
  const { rTokenBalance } = useRTokenBalance(`ur${tokenName}`);
  const { exchangeRate } = usePoolInfo(`ur${tokenName}`);

  const [chainAccount] = useChainAccount(getCosmosNetwork());
  const [unbondModalVisible, setUnbondModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState("");

  const willGetAmount = useMemo(() => {
    if (isNaN(Number(inputAmount)) || isNaN(Number(exchangeRate))) {
      return "--";
    }
    return (Number(inputAmount) * Number(exchangeRate)).toString();
  }, [inputAmount, exchangeRate]);

  return (
    <div className="pt-[36px] pl-[30px] pb-[45px]">
      <div className="text-white font-bold text-[30px]">
        Redeem u{tokenName?.toUpperCase()}
      </div>

      <div className="mt-10 text-white text-[20px]">
        1. Unbond u{tokenName?.toUpperCase()}
      </div>

      <div className="mt-2 flex flex-col">
        <div className="border-solid border-[1px] rounded-[3.5px] border-input-border w-[494px] h-[46px] flex items-center justify-between">
          <div className="ml-5">
            <CustomInput
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
                  !isNaN(Number(rTokenBalance)) &&
                  Number(rTokenBalance) > 0
                ) {
                  setInputAmount(rTokenBalance);
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
          ur{tokenName?.toUpperCase()} balance: {rTokenBalance}
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
        willGetAmount={willGetAmount}
      />
    </div>
  );
};

import {
  getDenom,
  getTokenDisplayName,
  KeplrChainParams,
} from "@stafihub/apps-config";
import { FormatterText } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import iconArrowRight from "../assets/images/icon_arrow_right.svg";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { KeplrAccount } from "../types/interface";
import { getHumanAccountBalance } from "../utils/common";

interface AccountItemProps {
  chain: KeplrChainParams;
  chainAccount: KeplrAccount | undefined;
}

export const AccountItem = (props: AccountItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      {props.chainAccount ? (
        <div className="mt-7 mb-3 flex items-center cursor-pointer">
          <img src={iconArrowRight} className="w-[7px] h-[13px]" alt="arrow" />

          <div className="ml-1 text-primary text-[16px] font-bold">
            {props.chain.chainName}
          </div>
        </div>
      ) : (
        <div className="mt-7 mb-3 flex items-center">
          <img src={iconArrowRight} className="w-[7px] h-[13px]" alt="arrow" />

          <div className="ml-1 text-white text-[14px]">Connect</div>

          <div
            className="ml-1 text-primary text-[16px] font-bold cursor-pointer"
            onClick={() => {
              dispatch(connectKeplr(props.chain.chainId));
            }}
          >
            {props.chain.chainName}
          </div>
        </div>
      )}

      {props.chainAccount && (
        <div className="rounded-[7px] border-solid border-[1px] border-border-main">
          <div className="ml-[27px] mr-[20px] flex items-center justify-between">
            <div className="my-[10px]">
              <div className="text-white text-[20px]">
                {props.chainAccount.name}
              </div>

              <div className="mt-2 text-text-gray3">
                {props.chainAccount.bech32Address}
              </div>
            </div>

            <div className="text-white font-bold text-[16px] flex items-center">
              <FormatterText
                value={getHumanAccountBalance(
                  props.chainAccount.allBalances,
                  getDenom(props.chain.chainId)
                )}
                decimals={6}
              />

              <div className="ml-1 uppercase">
                {getTokenDisplayName(props.chain.chainId)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

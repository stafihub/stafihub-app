import { STAFIHUB_NETWORK } from "@stafihub/apps-config";
import { getShortAddress, atomicToHuman } from "@stafihub/apps-util";
import * as _ from "lodash";
import { FormatterText } from "@stafihub/react-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import iconNotice from "../assets/images/icon_notice.svg";
import iconStatis from "../assets/images/icon_statis.svg";
import { useAccounts } from "../hooks/useAppSlice";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { AccountModal } from "./AccountModal";

export const Header = () => {
  const dispatch = useDispatch();
  const accounts = useAccounts();
  const [accountModalVisible, setAccountModalVisible] = useState(false);

  const renderAccount = () => {
    if (_.isEmpty(accounts) || _.isEmpty(accounts[STAFIHUB_NETWORK])) {
      return (
        <div
          className="mr-3 h-[36px] bg-primary rounded-[3px] flex flex-col justify-center items-center px-2 cursor-pointer"
          onClick={() => {
            dispatch(connectKeplr(STAFIHUB_NETWORK));
          }}
        >
          <div className="text-white font-bold text-[14px]">Connect Keplr</div>
        </div>
      );
    }

    return (
      <div
        className="mr-3 h-[36px] bg-primary rounded-[3px] flex flex-col justify-center items-center px-2 cursor-pointer"
        onClick={async () => {
          setAccountModalVisible(true);
        }}
      >
        <div className="text-white font-bold text-[14px]">
          <FormatterText
            value={atomicToHuman(accounts[STAFIHUB_NETWORK]?.balance?.amount)}
            decimals={6}
          />
          {} {accounts[STAFIHUB_NETWORK]?.balance?.denom}
        </div>

        <div className="mt-[3px] text-text-gray1 font-bold text-[12px] scale-[0.8] origin-center">
          {getShortAddress(accounts[STAFIHUB_NETWORK]?.bech32Address, 6)}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-end pt-[20px] items-center h-[56px]">
      <img
        src={iconNotice}
        alt="notice"
        className="mr-3 w-[19px] h-[19px] cursor-pointer"
      />

      {renderAccount()}

      <img
        src={iconStatis}
        alt="statis"
        className="mr-5 w-[19px] h-[19px] cursor-pointer"
      />

      <AccountModal
        visible={accountModalVisible}
        onClose={() => setAccountModalVisible(false)}
      />
    </div>
  );
};

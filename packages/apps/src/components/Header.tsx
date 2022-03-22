import { Popover } from "@mui/material";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { atomicToHuman, getShortAddress } from "@stafihub/apps-util";
import { FormatterText } from "@stafihub/react-components";
import * as _ from "lodash";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useState } from "react";
import iconNotice from "../assets/images/icon_notice.svg";
import iconStatis from "../assets/images/icon_statis.svg";
import { useAccounts, useUnreadNoticeFlag } from "../hooks/useAppSlice";
import { AccountModal } from "./AccountModal";
import { NoticeList } from "./notice/NoticeList";

const STAFIHUB_CHAIN_ID = getStafiHubChainId();

export const Header = () => {
  const accounts = useAccounts();
  const [accountModalVisible, setAccountModalVisible] = useState(false);
  const unreadNoticeFlag = useUnreadNoticeFlag();

  const noticePopupState = usePopupState({
    variant: "popover",
    popupId: "notice",
  });

  const renderAccount = () => {
    if (_.isEmpty(accounts) || _.isEmpty(accounts[STAFIHUB_CHAIN_ID])) {
      return (
        <div
          className="mr-3 h-[36px] bg-primary rounded-[3px] flex flex-col justify-center items-center px-2 cursor-pointer"
          onClick={() => {
            // dispatch(connectKeplr(STAFIHUB_CHAIN_ID));
            setAccountModalVisible(true);
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
        <div className="text-white font-bold text-[14px] flex items-center">
          <FormatterText
            value={atomicToHuman(accounts[STAFIHUB_CHAIN_ID]?.balance?.amount)}
            decimals={6}
          />
          <div className="ml-1 uppercase">
            {accounts[STAFIHUB_CHAIN_ID]?.balance?.denom?.slice(1)}
          </div>
        </div>

        <div className="mt-[3px] text-text-gray1 font-bold text-[12px] scale-[0.8] origin-center">
          {getShortAddress(accounts[STAFIHUB_CHAIN_ID]?.bech32Address, 6)}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-end pt-[20px] items-center h-[56px]">
      <div
        className="mr-3 w-[20px] h-[20px] relative cursor-pointer"
        {...bindTrigger(noticePopupState)}
      >
        <img
          src={iconNotice}
          alt="notice"
          className="mr-3 w-full h-full cursor-pointer"
        />

        {unreadNoticeFlag && (
          <div className="bg-secondary w-[6px] h-[6px] rounded-full absolute right-0 top-0" />
        )}
      </div>

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

      {/* Notice */}
      <Popover
        {...bindPopover(noticePopupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginTop: "4px",
          marginLeft: "30px",
          "& .MuiTypography-root": {
            padding: "0px",
          },
        }}
      >
        <NoticeList
          isOpen={noticePopupState.isOpen}
          onClose={noticePopupState.close}
        />
      </Popover>
    </div>
  );
};

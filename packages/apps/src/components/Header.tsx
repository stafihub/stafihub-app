import { Popover } from "@mui/material";
import {
  getDenom,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { getShortAddress } from "@stafihub/apps-util";
import { FormatterText } from "@stafihub/react-components";
import * as _ from "lodash";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconMore from "../assets/images/icon_more.svg";
import iconNotice from "../assets/images/icon_notice.svg";
import { useAccounts, useUnreadNoticeFlag } from "../hooks/useAppSlice";
import { getHumanAccountBalance } from "../utils/common";
import { AccountModal } from "./AccountModal";
import { NoticeList } from "./notice/NoticeList";

const STAFIHUB_CHAIN_ID = getStafiHubChainId();

export const Header = () => {
  const navigate = useNavigate();
  const accounts = useAccounts();
  const [accountModalVisible, setAccountModalVisible] = useState(false);
  const unreadNoticeFlag = useUnreadNoticeFlag();

  const noticePopupState = usePopupState({
    variant: "popover",
    popupId: "notice",
  });

  const menuPopupState = usePopupState({
    variant: "popover",
    popupId: "menu",
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
            value={getHumanAccountBalance(
              accounts[STAFIHUB_CHAIN_ID]?.allBalances,
              getDenom(STAFIHUB_CHAIN_ID)
            )}
          />
          <div className="ml-1 uppercase">
            {getTokenDisplayName(STAFIHUB_CHAIN_ID)}
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

      {/* <img
        src={iconStatis}
        alt="statis"
        className="mr-5 w-[19px] h-[19px] cursor-pointer"
      /> */}

      <img
        src={iconMore}
        alt="menu"
        className="mr-5 w-[19px] h-[19px] cursor-pointer"
        {...bindTrigger(menuPopupState)}
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

      {/* Menu */}
      <Popover
        {...bindPopover(menuPopupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginTop: "14px",
          "& .MuiTypography-root": {
            padding: "0px",
          },
        }}
      >
        <div className="w-[120px]">
          {/* <div className="h-8 flex items-center justify-center text-[12px] text-text-black1 cursor-pointer">
            Info
          </div>

          <div className="h-[1px] bg-divider-light" /> */}

          <div
            className="h-8 flex items-center justify-center text-[12px] text-text-black1 cursor-pointer"
            onClick={() => {
              navigate("/stake/recovery");
              menuPopupState.close();
            }}
          >
            rToken Recovery
          </div>
        </div>
      </Popover>
    </div>
  );
};

import { Collapse, Popover } from "@mui/material";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import { queryPoolByDenom } from "@stafihub/apps-wallet";
import { Button, CustomInput, TokenIcon } from "@stafihub/react-components";
import classNames from "classnames";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconDown from "../assets/images/icon_down_white.png";
import iconSelectDropdown from "../assets/images/icon_select_dropdown.svg";
import { useChainAccount, useIsLoading } from "../hooks/useAppSlice";
import { RTokenItem, useRTokenList } from "../hooks/useRTokenList";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { stakeRecovery } from "../redux/reducers/TxSlice";
import snackbarUtil from "../utils/snackbarUtils";

export const StakeRecoveryV2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rTokenList = useRTokenList();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const isLoading = useIsLoading();

  const [selectedItem, setSelectedItem] = useState<RTokenItem | null>(null);
  const [txHash, setTxHash] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");
  const [poolAddress, setPoolAddress] = useState("");

  useEffect(() => {
    setPoolAddress("");

    if (!selectedItem) {
      return;
    }

    queryPoolByDenom(getRTokenDenom(selectedItem.chainId))
      .then((result) => {
        if (result.addrs && result.addrs.length >= 1) {
          setPoolAddress(result.addrs[0]);
        }
      })
      .catch(() => {});
  }, [selectedItem]);

  const selectPopupState = usePopupState({
    variant: "popover",
    popupId: "select",
  });

  const setConnectedStafiHubAddress = () => {
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    setStafiHubAddress(stafiHubAccount.bech32Address);
  };

  const clickRecovery = () => {
    if (!selectedItem) {
      snackbarUtil.warning("Please select a token first!");
      return;
    }
    if (!txHash || !stafiHubAddress || !poolAddress) {
      return;
    }

    dispatch(
      stakeRecovery(selectedItem.chainId, stafiHubAddress, poolAddress, txHash)
    );
  };

  return (
    <div className="pt-[36px] pl-[90px] pr-[80px] pb-[20px]">
      <div className="flex items-center">
        <img
          src={iconDown}
          className="h-[14px] rotate-90 cursor-pointer"
          alt="back"
          onClick={() => {
            navigate(-1);
          }}
        />

        <div className="ml-5 mb-1 text-white text-[30px] font-bold">
          Staking Record
        </div>
      </div>

      <div className="ml-10 mt-[10px] text-white text-[14px] leading-tight">
        Under certain circumstances such as the sudden shutdown of your computer
        after staking your PoS Tokens, you may not receive your rTokens due to
        being unable to sign the staking authorization transaction.
      </div>

      <div className="ml-10 mt-[10px] text-white text-[14px] leading-tight">
        Fret not, submit your TX information to recover your rTokens.
      </div>

      <div className="ml-10 mt-[34px] text-white text-[12px]">Token</div>

      <div
        className="ml-10 mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center justify-between cursor-pointer"
        {...bindTrigger(selectPopupState)}
      >
        <div className="ml-[13px] text-[#8f8f8f] text-[12px]">
          {selectedItem ? selectedItem.tokenName : "Select a token"}
        </div>

        <img
          src={iconSelectDropdown}
          alt="dropdown"
          className="h-[27px] mr-1"
        />
      </div>

      <div className="ml-10 mt-[40px] flex justify-between">
        <div className="text-white text-[12px]">TxHash</div>

        <div className="text-[#ededed] text-[12px] underline cursor-pointer">
          How to get TxHash?
        </div>
      </div>

      <div className="ml-10 mt-[7px] h-[34px] border-solid border-[1px] rounded-[5px] border-input-border flex items-center">
        <div className="ml-[13px] flex-1">
          <CustomInput
            placeholder=""
            fontSize={12}
            value={txHash}
            handleValueChange={setTxHash}
          />
        </div>
      </div>

      <div className="ml-10 mt-[40px] text-white text-[12px]">
        Receiving address
      </div>

      <div className="ml-10 mt-[10px] border-solid border-[1px] rounded-[3.5px] border-input-border h-[46px] flex items-center justify-between">
        <div className="ml-5 flex-1">
          <CustomInput
            fontSize={14}
            placeholder="stafi..."
            value={stafiHubAddress}
            handleValueChange={setStafiHubAddress}
          />
        </div>

        <div
          className="mx-[10px] text-primary text-[12px] cursor-pointer w-[63px] text-center"
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[100px] flex justify-end">
        <div className="w-[144px]">
          <Button
            type="rectangle"
            size="small"
            disabled={!poolAddress || !stafiHubAddress || !txHash}
            loading={isLoading}
          >
            <div className="italic text-[#3B3D5C]" onClick={clickRecovery}>
              Proceed
            </div>
          </Button>
        </div>
      </div>

      {/* Select token Popover */}
      <Popover
        {...bindPopover(selectPopupState)}
        TransitionComponent={Collapse}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          marginTop: "4px",
          marginLeft: "1px",
          "& .MuiTypography-root": {
            padding: "0px",
          },
        }}
      >
        <div className="min-w-[470px]">
          {rTokenList.map((rTokenItem) => (
            <div
              key={rTokenItem.chainId}
              className="cursor-pointer"
              onClick={() => {
                selectPopupState.close();
                setSelectedItem(rTokenItem);
              }}
            >
              <div
                className={classNames(
                  "px-5 h-14 flex items-center justify-between",
                  {
                    "bg-divider-light":
                      selectedItem &&
                      selectedItem.chainId === rTokenItem.chainId,
                  }
                )}
              >
                <div className="flex items-center">
                  <TokenIcon
                    tokenName={rTokenItem.tokenName}
                    size={26}
                    withBorder
                  />

                  <div
                    className={classNames(
                      "ml-[10px] text-[14px] text-text-black1"
                    )}
                  >
                    {rTokenItem.tokenName}
                  </div>
                </div>
              </div>

              <div
                className={classNames(
                  "ml-[-20px] mr-[-7px] bg-divider-light h-[1px]"
                )}
              />
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};
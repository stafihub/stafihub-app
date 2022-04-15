import { Collapse, Popover } from "@mui/material";
import { CustomLoading } from "@stafihub/react-components";
import classNames from "classnames";
import { bindPopover, bindTrigger } from "material-ui-popup-state";
import { usePopupState } from "material-ui-popup-state/hooks";
import { useMemo } from "react";
import iconDown from "../../assets/images/icon_down_gray.svg";
import { IBCChannelToken } from "../../types/interface";

interface BridgeTokenSelectorProps {
  selectedToken: IBCChannelToken | undefined | null;
  data: IBCChannelToken[] | null;
  onChange: (token: IBCChannelToken) => void;
}

export const BridgeTokenSelector = (props: BridgeTokenSelectorProps) => {
  const selectPopupState = usePopupState({
    variant: "popover",
    popupId: "select",
  });

  const trigger = useMemo(() => {
    return props.data && props.data.length > 0
      ? { ...bindTrigger(selectPopupState) }
      : {};
  }, [selectPopupState, props.data]);

  return (
    <>
      <div
        className={classNames(
          "rounded-[4px] bg-[#23292f] pl-8 pr-5 h-12 flex items-center justify-between",
          props.data && props.data.length > 0 && "cursor-pointer"
        )}
        {...trigger}
      >
        {props.selectedToken ? (
          <div className="text-[16px] font-bold text-white">
            {props.selectedToken.displayTokenName} (
            {props.selectedToken.channelName})
          </div>
        ) : (
          <div className="text-[12px] text-text-gray7">Choose a token</div>
        )}

        {props.data ? (
          <img src={iconDown} alt="down" className="w-4" />
        ) : (
          <CustomLoading color="#FF7FA7" size={16} />
        )}
      </div>

      {/* Select Chain Popover */}
      <Popover
        {...bindPopover(selectPopupState)}
        TransitionComponent={Collapse}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginTop: "4px",
          "& .MuiTypography-root": {
            padding: "0px",
          },
        }}
      >
        <div className="min-w-[563px]">
          {props.data?.map((channelToken, index) => (
            <div
              key={`${channelToken.denom}-${channelToken.channelName}`}
              className="cursor-pointer"
              onClick={() => {
                selectPopupState.close();
                props.onChange(channelToken);
              }}
            >
              <div
                className={classNames(
                  "h-14 px-4 flex items-center justify-between",
                  {
                    "bg-divider-light":
                      channelToken.channelName ===
                        props.selectedToken?.channelName &&
                      channelToken.denom === props.selectedToken?.denom,
                  }
                )}
              >
                <div
                  className={classNames(
                    "ml-4  font-bold text-[16px] text-text-black1"
                  )}
                >
                  {channelToken.displayTokenName} ({channelToken.channelName})
                </div>
              </div>

              <div
                className={classNames("mx-3 bg-divider-light h-[1px]", {
                  invisible: props.data && index === props.data.length - 1,
                })}
              />
            </div>
          ))}
        </div>
      </Popover>
    </>
  );
};

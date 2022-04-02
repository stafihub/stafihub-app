import { Popover } from "@mui/material";
import { KeplrChainParams } from "@stafihub/apps-config";
import { ChainIcon } from "@stafihub/react-components";
import classNames from "classnames";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import iconDown from "../../assets/images/icon_down_gray.svg";

interface BridgeChainSelectorProps {
  selectedChain: KeplrChainParams | null | undefined;
  data: KeplrChainParams[];
  onChange: (chain: KeplrChainParams) => void;
}

export const BridgeChainSelector = (props: BridgeChainSelectorProps) => {
  const selectPopupState = usePopupState({
    variant: "popover",
    popupId: "select",
  });

  return (
    <>
      <div
        className="rounded-[4px] bg-[#23292f] h-12 pl-8 pr-5 flex items-center justify-between cursor-pointer"
        {...bindTrigger(selectPopupState)}
      >
        {props.selectedChain ? (
          <div className="text-[16px] font-bold text-white">
            {props.selectedChain.chainName}
          </div>
        ) : (
          <div className="text-[12px] text-text-gray7">
            Choose a token standard
          </div>
        )}

        <img src={iconDown} alt="down" className="w-4" />
      </div>

      {/* Select Chain Popover */}
      <Popover
        {...bindPopover(selectPopupState)}
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
        <div className="min-w-[260px]">
          {props.data.map((chain, index) => (
            <div
              key={chain.chainId}
              className="cursor-pointer"
              onClick={() => {
                selectPopupState.close();
                props.onChange(chain);
              }}
            >
              <div
                className={classNames(
                  "h-14 px-4 flex items-center justify-between",
                  {
                    "bg-divider-light":
                      chain.chainId === props.selectedChain?.chainId,
                  }
                )}
              >
                <ChainIcon chainId={chain.chainId} size={36} withBorder />

                <div
                  className={classNames(
                    "ml-4  font-bold text-[16px] text-text-black1"
                  )}
                >
                  {chain.chainName}
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

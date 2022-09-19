import { Box, Modal } from "@mui/material";
import { Icon } from "@stafihub/react-components";
import classNames from "classnames";
import rdex from "../assets/images/rdex.png";
import { getRdexAppHost, isDev } from "../config";
import { openLink } from "../utils/common";

interface TradeModalProps {
  visible: boolean;
  tradeDenom: string;
  tradeTokenName: string;
  onClose: () => void;
}

export const TradeModal = (props: TradeModalProps) => {
  const tradable =
    isDev() ||
    props.tradeDenom === "uratom" ||
    props.tradeDenom === "uriris" ||
    props.tradeDenom === "urhuahua";

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="20px"
        pb="40px"
        border={0}
        height="270px"
        sx={{
          backgroundColor: "#ffffff",
          width: "400px",
          borderRadius: "6px",
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "80px",
        }}
      >
        <div className="flex justify-center relative">
          <div className="text-text-black1 font-bold text-[20px]">
            Trade {props.tradeTokenName}
          </div>

          <div
            className="absolute right-5 top-[1px] cursor-pointer"
            onClick={props.onClose}
          >
            <Icon icon="close" size={18} color="#23292F" />
          </div>
        </div>

        <div className="mt-7 text-center text-text-black1 font-bold text-[16px]">
          Available Trading DEXes
        </div>

        <div className="flex items-center mt-12">
          <div className="basis-8/12 text-[#7e7e7e] text-[14px] pl-7">DEX</div>

          <div className="basis-6/12 text-[#7e7e7e] text-[14px]">
            Token
            <br />
            Standard
          </div>

          <div className="basis-4/12 text-[#7e7e7e] text-[14px]">Operation</div>
        </div>

        <div className="h-[0.5px] mt-4 bg-divider-light ml-[-40px] mr-[-30px]" />

        <div>
          <div className="h-[42px] flex items-center text-[16px] text-base">
            <div className="basis-8/12 flex items-center w-[145px] pl-7">
              <img src={rdex} className="w-[18px] h-[18px] mr-2" alt="icon" />

              <div>rDEX</div>
            </div>

            <div className="basis-6/12">Native</div>

            <div className="basis-4/12 ">
              <div
                className={classNames(
                  "w-[52px] text-white font-bold bg-primary rounded-full flex items-center justify-center h-[22px]",
                  tradable ? "cursor-pointer" : "cursor-default",
                  { "opacity-50": !tradable }
                )}
                onClick={() => {
                  if (tradable) {
                    openLink(
                      `${getRdexAppHost()}/stafihub/swap?first=${
                        props.tradeDenom
                      }`
                    );
                  }
                }}
              >
                <div className="text-[12px] scale-[0.75] origin-center">
                  {tradable ? "Swap" : "Soon"}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[0.5px] bg-divider-light mx-4" />
        </div>
      </Box>
    </Modal>
  );
};

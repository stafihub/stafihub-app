import { Box, Modal } from "@mui/material";
import { Icon } from "@stafihub/react-components";
import rdex from "../assets/images/rdex.png";

interface TradeModalProps {
  visible: boolean;
  tradeTokenName: string;
  onClose: () => void;
}

export const TradeModal = (props: TradeModalProps) => {
  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="20px"
        pl="40px"
        pr="30px"
        pb="40px"
        border={0}
        height="470px"
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
            className="absolute right-0 top-[1px] cursor-pointer"
            onClick={props.onClose}
          >
            <Icon icon="close" size={18} color="#23292F" />
          </div>
        </div>

        <div className="mt-6 text-center text-text-black1 font-bold text-[16px]">
          Available Trading DEXes
        </div>

        <div className="flex items-center mt-12">
          <div className="text-[#7e7e7e] text-[14px] mr-[70px] ml-[50px]">
            DEX
          </div>

          <div className="text-[#7e7e7e] text-[14px]">Token Standard</div>
        </div>

        <div className="h-[0.5px] mt-4 bg-divider-light ml-[-40px] mr-[-30px]" />

        <div>
          <div className="h-[42px] flex items-center text-[16px] text-base">
            <div className="flex items-center w-[145px] ml-[30px]">
              <img src={rdex} className="w-[18px] h-[18px] mr-2" alt="icon" />

              <div>rDEX</div>
            </div>

            <div style={{ width: "130px" }}>Native</div>

            <div className="opacity-50 w-[52px] h-[22px] flex items-center justify-center bg-primary rounded-full">
              <div className="text-text-black1 font-bold text-[12px] scale-[0.75] origin-center">
                Soon
              </div>
            </div>
          </div>

          <div className="h-[0.5px] bg-divider-light" />
        </div>
      </Box>
    </Modal>
  );
};

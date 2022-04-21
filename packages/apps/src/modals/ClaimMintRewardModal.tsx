import { Box, Modal } from "@mui/material";
import { Button, CustomNumberInput } from "@stafihub/react-components";
import { useState } from "react";
import iconClose from "../assets/images/icon_close_bold.svg";

interface ClaimMintRewardModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ClaimMintRewardModal = (props: ClaimMintRewardModalProps) => {
  const [inputAmount, setInputAmount] = useState("");

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="48px"
        pl="40px"
        pr="30px"
        pb="42px"
        display="flex"
        flexDirection="column"
        border={0}
        sx={{
          backgroundColor: "#000002",
          width: "620px",
          borderRadius: "20px",
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "80px",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-[30px]">Claim Reward</div>

          <img
            src={iconClose}
            alt="close"
            className="w-6 h-6 cursor-pointer"
            onClick={props.onClose}
          />
        </div>

        <div className="mt-11 flex items-center">
          <div className="h-[50px] pl-7 border-[1px] border-solid border-[#525252] flex items-center">
            <div className="w-[387px]">
              <CustomNumberInput
                fontSize={22}
                value={inputAmount}
                handleValueChange={setInputAmount}
              />
            </div>
          </div>

          <div className="ml-[10px]">
            <Button>Claim</Button>
          </div>
        </div>

        <div className="mt-[80px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Total Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            1.0323 FIS
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Claimable Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            1.0323 FIS
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Locked Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            1.0323 FIS
          </div>
        </div>
      </Box>
    </Modal>
  );
};

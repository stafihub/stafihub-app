import { Modal, Box } from "@mui/material";
import { Button } from "@stafihub/react-components";
import { liquidityUnbond } from "@stafihub/apps-wallet";
import { useParams } from "react-router-dom";
import iconArrowRight from "../assets/images/icon_arrow_right.svg";

interface UnbondModalProps {
  visible: boolean;
  onClose: () => void;
}

export const UnbondModal = (props: UnbondModalProps) => {
  const params = useParams();
  const tokenName = params.tokenName;

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="48px"
        pl="40px"
        pr="30px"
        pb="30px"
        display="flex"
        flexDirection="column"
        border={0}
        sx={{
          backgroundColor: "#151515",
          width: "680px",
          borderRadius: "20px",
          margin: "auto",
          marginTop: "120px",
          outline: "none",
        }}
      >
        <div className="text-white font-bold text-[30px]">Wallet connected</div>

        <div className="flex items-center">
          <img src={iconArrowRight} className="w-[9px] h-[16px]" alt="arrow" />

          <div className="ml-1 text-primary text-[16px] font-bold">
            CosmosHub
          </div>
        </div>
        <div className="mt-[25px] text-text-gray4 text-[20px]">
          —Commission: 233.424 ur{tokenName?.toUpperCase()}
        </div>

        <div className="mt-[10px] text-text-gray4 text-[20px]">
          —Relay Fee: 3 FIS
        </div>

        <div className="mt-[40px] text-text-gray4 text-[20px]">
          —Period: around 14 days
        </div>

        <div className="mt-[55px] text-white font-bold text-[20px]">
          You will get 293.22 u{tokenName?.toUpperCase()}
        </div>

        <div className="mt-[22px] self-end flex items-center">
          <div
            className="mr-[30px] text-white font-bold text-[16px] cursor-pointer"
            onClick={props.onClose}
          >
            Cancel
          </div>

          <Button onClick={() => liquidityUnbond()}>Unbond</Button>
        </div>
      </Box>
    </Modal>
  );
};

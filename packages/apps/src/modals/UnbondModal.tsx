import { Box, Modal } from "@mui/material";
import { Button } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { usePoolInfo } from "../hooks";
import { useIsLoading } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { unbond } from "../redux/reducers/TxSlice";

interface UnbondModalProps {
  denom: string | undefined;
  visible: boolean;
  onClose: () => void;
  inputAmount: string;
  receiveAddress: string;
  willGetAmount: string;
  commissionFee: string;
}

export const UnbondModal = (props: UnbondModalProps) => {
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const { updateStakeStatus } = useChainStakeStatus(props.denom || "");

  const params = useParams();
  const tokenName = params.tokenName;
  const { poolAddress } = usePoolInfo(`ur${tokenName}`);

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
          backgroundColor: "#000002",
          width: "520px",
          borderRadius: "20px",
          margin: "auto",
          marginTop: "120px",
          outline: "none",
        }}
      >
        <div className="text-white font-bold text-[30px]">
          Unbond {props.inputAmount} ur{tokenName?.toUpperCase()}
        </div>

        <div className="mt-[25px] text-text-gray4 text-[20px]">
          —Commission: {props.commissionFee} r{tokenName?.toUpperCase()}
        </div>

        <div className="mt-[10px] text-text-gray4 text-[20px]">
          —Relay Fee: 3 FIS
        </div>

        <div className="mt-[40px] text-text-gray4 text-[20px]">
          —Period: around 14 days
        </div>

        <div className="mt-[55px] text-white font-bold text-[20px]">
          You will get {props.willGetAmount} u{tokenName?.toUpperCase()}
        </div>

        <div className="mt-[22px] self-end flex items-center">
          <div
            className="mr-[30px] text-white font-bold text-[16px] cursor-pointer"
            onClick={props.onClose}
          >
            Cancel
          </div>

          <Button
            loading={isLoading}
            onClick={() => {
              dispatch(
                unbond(props.inputAmount, poolAddress, (success) => {
                  if (success) {
                    props.onClose();
                    updateStakeStatus();
                  }
                })
              );
            }}
          >
            Unbond
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

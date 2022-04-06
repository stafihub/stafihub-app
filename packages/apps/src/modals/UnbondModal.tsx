import { Box, Modal } from "@mui/material";
import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
  getRTokenDisplayName,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { Button, FormatterText } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useIsLoading } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useRParams } from "../hooks/useRParams";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useUnbondRelayFee } from "../hooks/useUnbondRelayFee";
import { unbond } from "../redux/reducers/TxSlice";

interface UnbondModalProps {
  visible: boolean;
  onClose: () => void;
  inputAmount: string;
  receiveAddress: string;
  willGetAmount: string;
  commissionFee: string;
}

export const UnbondModal = (props: UnbondModalProps) => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken);
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const { updateStakeStatus } = useChainStakeStatus(chainId);
  const { relayFee } = useUnbondRelayFee(chainId);
  const { bondingDays } = useRParams(getRTokenDenom(chainId));

  const { poolAddress } = useStakePoolInfo(getRTokenDenom(chainId));

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
          transform: "translateX(80px)",
        }}
      >
        <div className="text-white font-bold text-[30px]">
          Unbond {props.inputAmount} {getRTokenDisplayName(chainId)}
        </div>

        <div className="mt-[25px] text-text-gray4 text-[20px]">
          —Commission: {props.commissionFee} {getRTokenDisplayName(chainId)}
        </div>

        <div className="mt-[10px] text-text-gray4 text-[20px]">
          —Relay Fee: <FormatterText value={relayFee} decimals={2} /> FIS
        </div>

        <div className="mt-[40px] text-text-gray4 text-[20px]">
          -Date: around {bondingDays} days
        </div>

        <div className="mt-[55px] text-white font-bold text-[20px]">
          You will get {props.willGetAmount} {getTokenDisplayName(chainId)}
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
                unbond(
                  chainId,
                  props.inputAmount,
                  poolAddress,
                  relayFee,
                  (success) => {
                    if (success) {
                      props.onClose();
                      updateStakeStatus();
                    }
                  }
                )
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

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
import { chains } from "../config";
import { useIsLoading } from "../hooks/useAppSlice";
import { useChainStakeStatus } from "../hooks/useChainStakeStatus";
import { useRParams } from "../hooks/useRParams";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useUnbondRelayFee } from "../hooks/useUnbondRelayFee";
import { unbond } from "../redux/reducers/TxSlice";

interface UnbondModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
  inputAmount: string;
  receiveAddress: string;
  willGetAmount: string;
  commissionFee: string;
}

export const UnbondModal = (props: UnbondModalProps) => {
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken, chains);
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const { updateStakeStatus } = useChainStakeStatus(chainId);
  const { relayFee } = useUnbondRelayFee(chainId);
  const { bondingDays, bondingHours } = useRParams(
    getRTokenDenom(chainId, chains)
  );

  const { multisigPoolAddress, icaPoolAddress } = useStakePoolInfo(
    getRTokenDenom(chainId, chains)
  );

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
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "80px",
        }}
      >
        <div className="text-white font-bold text-[30px]">
          Unbond {props.inputAmount} {getRTokenDisplayName(chainId, chains)}
        </div>

        <div className="mt-[25px] text-text-gray4 text-[20px]">
          —Commission: {props.commissionFee}{" "}
          {getRTokenDisplayName(chainId, chains)}
        </div>

        <div className="mt-[10px] text-text-gray4 text-[20px]">
          —Relay Fee: <FormatterText value={relayFee} /> FIS
        </div>

        <div className="mt-[40px] text-text-gray4 text-[20px]">
          -Date: around{" "}
          {Number(bondingDays) > 0
            ? `${bondingDays} ${Number(bondingDays) > 1 ? "days" : "day"}`
            : `${bondingHours} ${Number(bondingHours) > 1 ? "hours" : "hour"}`}
        </div>

        <div className="mt-[55px] text-white font-bold text-[20px]">
          You will get {props.willGetAmount}{" "}
          {getTokenDisplayName(chainId, chains)}
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
                  props.willGetAmount,
                  props.receiveAddress,
                  multisigPoolAddress,
                  icaPoolAddress,
                  relayFee,
                  bondingHours,
                  (success) => {
                    if (success) {
                      props.onSuccess();
                      updateStakeStatus(chainId);
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

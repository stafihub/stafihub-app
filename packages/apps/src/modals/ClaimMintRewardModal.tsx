import { Box, Modal } from "@mui/material";
import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import {
  Button,
  CustomNumberInput,
  FormatterText,
} from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import iconClose from "../assets/images/icon_close_bold.svg";
import { useIsLoading } from "../hooks/useAppSlice";
import { claimMintRewards } from "../redux/reducers/TxSlice";
import { FormatUserMintInfo } from "../types/interface";

interface ClaimMintRewardModalProps {
  userMintInfo: FormatUserMintInfo | null;
  visible: boolean;
  onClose: () => void;
}

export const ClaimMintRewardModal = (props: ClaimMintRewardModalProps) => {
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const params = useParams();
  const { rToken, cycle } = params;
  const { userMintInfo } = props;

  const clickClaim = () => {
    if (!userMintInfo) {
      return;
    }

    dispatch(
      claimMintRewards(
        getRTokenDenom(getChainIdFromRTokenDisplayName(rToken)),
        Number(cycle),
        userMintInfo.claimMintIndexs,
        userMintInfo.userTotalClaimableAmount,
        userMintInfo.denom,
        (success) => {
          if (success) {
            props.onClose();
          }
        }
      )
    );
  };

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
                disabled
                fontSize={22}
                value={userMintInfo?.userTotalClaimableAmount || "0"}
              />
            </div>
          </div>

          <div className="ml-[10px]">
            <Button
              loading={isLoading}
              disabled={
                isNaN(Number(userMintInfo?.userTotalClaimableAmount)) ||
                Number(userMintInfo?.userTotalClaimableAmount) <= 0
              }
              onClick={clickClaim}
            >
              Claim
            </Button>
          </div>
        </div>

        <div className="mt-[80px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Total Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            <FormatterText value={userMintInfo?.userTotalRewardAmount} /> FIS
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Claimable Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            <FormatterText value={userMintInfo?.userTotalClaimableAmount} /> FIS
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Locked Reward
          </div>

          <div className="w-[208px] text-text-gray2 text-[20px] font-bold">
            <FormatterText value={userMintInfo?.userTotalLockedAmount} /> FIS
          </div>
        </div>
      </Box>
    </Modal>
  );
};

import { Box, Modal } from "@mui/material";
import {
  getChainIdFromRTokenDisplayName,
  getRTokenDenom,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import { Button } from "@stafihub/react-components";
import * as _ from "lodash";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import iconClose from "../assets/images/icon_close_bold.svg";
import { chains } from "../config";
import { useIsLoading } from "../hooks/useAppSlice";
import { claimMintRewards } from "../redux/reducers/TxSlice";
import { FormatUserMintInfo, UserMintRewardItem } from "../types/interface";

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

  // console.log("userMintInfo", userMintInfo);

  const rewardArr: { denom: string; rewardInfo: UserMintRewardItem }[] =
    useMemo(() => {
      const arr: { denom: string; rewardInfo: UserMintRewardItem }[] = [];
      if (userMintInfo) {
        _.keys(userMintInfo.rewardMap).forEach((denom) => {
          const userRewardInfo = userMintInfo.rewardMap[denom];
          arr.push({
            denom,
            rewardInfo: userRewardInfo,
          });
        });
      }
      return arr;
    }, [userMintInfo]);

  const [claimableRewardText, totalRewardText, lockedRewardText] =
    useMemo(() => {
      if (!rewardArr || !rewardArr.length) {
        return [""];
      }
      let claimableRewardText = "";
      let totalRewardText = "";
      let lockedRewardText = "";
      rewardArr.forEach((reward, index) => {
        claimableRewardText += atomicToHuman(
          reward.rewardInfo.userTotalClaimableAmount,
          6,
          4
        );
        claimableRewardText += ` ${reward.denom.slice(1).toUpperCase()}`;
        if (index < rewardArr.length - 1) {
          claimableRewardText += " + ";
        }
        totalRewardText += atomicToHuman(
          reward.rewardInfo.userTotalRewardAmount,
          6,
          4
        );
        totalRewardText += ` ${reward.denom.slice(1).toUpperCase()}`;
        if (index < rewardArr.length - 1) {
          totalRewardText += " + ";
        }
        lockedRewardText += atomicToHuman(
          reward.rewardInfo.userTotalLockedAmount,
          6,
          4
        );
        lockedRewardText += ` ${reward.denom.slice(1).toUpperCase()}`;
        if (index < rewardArr.length - 1) {
          lockedRewardText += " + ";
        }
      });

      return [claimableRewardText, totalRewardText, lockedRewardText];
    }, [rewardArr]);

  const buttonEnabled = useMemo(() => {
    let enabled = false;
    rewardArr.forEach((reward) => {
      if (
        Number(
          atomicToHuman(reward.rewardInfo.userTotalClaimableAmount, 6, 4)
        ) > 0
      ) {
        enabled = true;
      }
    });
    return enabled;
  }, [rewardArr]);

  const clickClaim = () => {
    if (!userMintInfo) {
      return;
    }

    dispatch(
      claimMintRewards(
        getRTokenDenom(getChainIdFromRTokenDisplayName(rToken, chains), chains),
        Number(cycle),
        userMintInfo.claimMintIndexs,
        claimableRewardText,
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
              <div className="text-[22px] text-white font-bold">
                {claimableRewardText}
              </div>
            </div>
          </div>

          <div className="ml-[10px]">
            <Button
              loading={isLoading}
              disabled={!buttonEnabled}
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

          <div className="mr-[20px] text-text-gray2 text-[20px] font-bold">
            {totalRewardText}
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Claimable Reward
          </div>

          <div className="mr-[20px] text-text-gray2 text-[20px] font-bold">
            {claimableRewardText}
          </div>
        </div>

        <div className="mt-[14px] flex items-center">
          <div className="w-[208px] text-white font-bold text-[20px]">
            Locked Reward
          </div>

          <div className="mr-[20px] text-text-gray2 text-[20px] font-bold">
            {lockedRewardText}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

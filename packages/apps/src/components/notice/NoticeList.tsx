import { Box, Stack, Typography } from "@mui/material";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import { queryBondRecord } from "@stafihub/apps-wallet";
import { LiquidityBondState } from "@stafihub/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { chains } from "../../config";
import {
  setUnreadNoticeFlag,
  updateNotice,
} from "../../redux/reducers/AppSlice";
import {
  setStakeSidebarProps,
  showFeeStationSwapLoadingModal,
} from "../../redux/reducers/TxSlice";
import {
  LocalNotice,
  NoticeClaimMintRewardData,
  NoticeFeeStationData,
  NoticeIBCBridgeData,
  NoticeStakeData,
  NoticeUnbondData,
} from "../../types/notice";
import { openLink } from "../../utils/common";
import { getNoticeList } from "../../utils/notice";
import { getScanFullUrl } from "../../utils/scanUrl";
import { STORAGE_KEY_UNREAD_NOTICE, removeStorage } from "../../utils/storage";
import { formatDate } from "../../utils/time";

export const NoticeList = (props: { isOpen: boolean; onClose: () => void }) => {
  const dispatch = useDispatch();
  const [noticeList, setNoticeList] = useState<LocalNotice[]>([]);

  useEffect(() => {
    if (props.isOpen) {
      setNoticeList(getNoticeList());

      dispatch(setUnreadNoticeFlag(false));
      removeStorage(STORAGE_KEY_UNREAD_NOTICE);
    }
  }, [dispatch, props.isOpen]);

  return (
    <Box width="250px" padding="10px 10px 10px">
      <Typography variant="bold" fontSize="14px" color="#23292F">
        Notification
      </Typography>

      <Box
        mt="10px"
        height="1px"
        mx="-10px"
        sx={{
          backgroundColor: "rgba(232, 232, 232, 0.5)",
        }}
      />

      <Box
        minHeight="200px"
        maxHeight="300px"
        sx={{
          overflow: "auto",
        }}
      >
        {noticeList.map((notice, index) => (
          <NoticeItem
            key={notice.id}
            notice={notice}
            showDivider={index < noticeList.length - 1}
            isOpen={props.isOpen}
            onClose={props.onClose}
          />
        ))}

        {noticeList.length === 0 && (
          <Stack mt="30px" alignItems="center">
            <Typography mt="10px" color="#8E8E8E" fontSize="14px">
              No Data
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

interface NoticeItemProps {
  notice: LocalNotice;
  showDivider: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const NoticeItem = (props: NoticeItemProps) => {
  const dispatch = useDispatch();
  const { notice, showDivider, onClose, isOpen } = props;

  useEffect(() => {
    if (isOpen) {
      if (notice.type === "Stake" && notice.status === "Pending") {
        (async () => {
          const bondRecordRes = await queryBondRecord(
            chains[getStafiHubChainId()],
            getRTokenDenom(notice.txDetail.chainId, chains),
            notice.txDetail.transactionHash
          );
          if (bondRecordRes) {
            if (
              bondRecordRes.bondRecord?.state ===
              LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK
            ) {
              dispatch(updateNotice(notice.id, "Confirmed"));
            } else {
              dispatch(updateNotice(notice.id, "Error"));
            }
          }
        })();
      }
    }
  }, [isOpen, notice, dispatch]);

  const getNoticeTitle = (notice: LocalNotice): string => {
    return notice.type;
  };

  const getNoticeContent = (notice: LocalNotice): string => {
    try {
      let data;
      if (notice.type === "Fee Station") {
        data = notice.data as NoticeFeeStationData;
        return `Swap ${data.inputAmount} ${data.inputTokenName} for ${data.outputAmount} ${data.outputTokenName}.`;
      }
      if (notice.type === "Stake") {
        data = notice.data as NoticeStakeData;
        return `Stake ${data.stakeAmount} ${data.tokenName}.`;
      }
      if (notice.type === "Unbond") {
        data = notice.data as NoticeUnbondData;
        return `Unbond ${data.willGetAmount || "--"} ${data.tokenName}.`;
      }
      if (notice.type === "IBC Bridge") {
        data = notice.data as NoticeIBCBridgeData;
        return `Swap ${data.amount} ${data.tokenName} from ${data.inputChainName} to ${data.outputChainName}.`;
      }
      if (notice.type === "Claim Mint Reward") {
        data = notice.data as NoticeClaimMintRewardData;
        return `Claim ${data.claimableRewardText}.`;
      }
    } catch (err: unknown) {}

    return "";
  };

  const getNoticeUrl = (notice: LocalNotice): string | undefined => {
    try {
      let data;
      if (notice.type === "Fee Station") {
        data = notice.data as NoticeFeeStationData;
        if (data.payTxHash) {
          return getScanFullUrl(notice.explorerUrl, "tx", data.payTxHash);
        }
        return getScanFullUrl(
          notice.explorerUrl,
          "account",
          notice.txDetail.address
        );
      } else {
        return getScanFullUrl(
          notice.explorerUrl,
          "tx",
          notice.txDetail.transactionHash
        );
      }
    } catch (err: unknown) {}

    return "";
  };

  return (
    <>
      <Box key={notice.id}>
        <Box mt="10px">
          <Typography
            variant="bold"
            fontSize="14px"
            color="#23292F"
            lineHeight={1}
          >
            {getNoticeTitle(notice)}
          </Typography>
        </Box>

        <Box mt="8px">
          <Typography fontSize="12px" color="#8E8E8E" lineHeight={1}>
            {getNoticeContent(notice)}
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="space-between" mt="8px">
          <Typography
            fontSize="12px"
            color="#8E8E8E"
            lineHeight={1}
            sx={{
              transform: "scale(0.8)",
              transformOrigin: "left center",
            }}
          >
            {formatDate(notice.timestamp)}
          </Typography>

          <Typography
            fontSize="12px"
            color="primary"
            lineHeight={1}
            sx={{
              transform: "scale(0.8)",
              transformOrigin: "right center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              onClose();
              if (notice.type === "Stake") {
                const stakeData = notice.data as NoticeStakeData;
                dispatch(
                  setStakeSidebarProps({
                    visible: true,
                    explorerUrl: notice.explorerUrl,
                    txHash: notice.txDetail?.transactionHash,
                    chainId: notice.txDetail?.chainId,
                    eraNumber: stakeData.eraNumber,
                    sendingStatus: 2,
                    mintingStatus:
                      notice.status === "Pending"
                        ? 1
                        : notice.status === "Confirmed"
                        ? 2
                        : -1,
                  })
                );
                return;
              }
              if (
                notice.type === "Fee Station" &&
                notice.status === "Pending"
              ) {
                const feeStationData = notice.data as NoticeFeeStationData;
                if (feeStationData.uuid) {
                  dispatch(
                    showFeeStationSwapLoadingModal(
                      notice.txDetail.transactionHash,
                      notice.txDetail.address || "",
                      feeStationData.uuid,
                      feeStationData.outputAmount
                    )
                  );
                  return;
                }
              }
              openLink(getNoticeUrl(notice));
            }}
          >
            {notice.status}
          </Typography>
        </Stack>

        {showDivider && (
          <Box
            mt="10px"
            height="1px"
            mx="-10px"
            sx={{
              backgroundColor: "rgba(232, 232, 232, 0.5)",
            }}
          />
        )}
      </Box>
    </>
  );
};

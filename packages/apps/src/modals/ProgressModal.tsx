import { Box, LinearProgress, Modal } from "@mui/material";
import { getExplorerUrl, getStafiHubChainId } from "@stafihub/apps-config";
import { CustomLoading, FormatterText } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import iconClose from "../assets/images/icon_close_bold.svg";
import iconCheckedLarge from "../assets/images/icon_success_large.png";
import { chains } from "../config";
import { useSwapProgressModalProps } from "../hooks/useSwapProgressModalProps";
import { setSwapProgressModalProps } from "../redux/reducers/TxSlice";
import { openLink } from "../utils/common";
import { getScanFullUrl } from "../utils/scanUrl";

interface ProgressModalProps {}

export const ProgressModal = (props: ProgressModalProps) => {
  const dispatch = useDispatch();
  const swapProgressModalProps = useSwapProgressModalProps();

  const renderSuccessContent = () => {
    return (
      <>
        <div className="mt-14 font-bold text-secondary text-[46px]">
          Congratulations!
        </div>

        <div className="mt-10 font-bold text-white text-[22px]">
          You have successfully transferred your tokens. Please check your
          wallet.
        </div>

        <img
          src={iconCheckedLarge}
          alt="success"
          className="mt-16 w-20 h-20 px-3 py-4 bg-primary rounded-full"
        />

        <div
          className="mt-12 mb-24 h-12 px-6 flex items-center justify-center font-bold text-white text-[22px] bg-secondary rounded-sm cursor-pointer"
          onClick={() => {
            openLink(
              swapProgressModalProps?.txDetail?.feeStationPayTxHash
                ? getScanFullUrl(
                    getExplorerUrl(getStafiHubChainId(), chains),
                    "tx",
                    swapProgressModalProps?.txDetail?.feeStationPayTxHash
                  )
                : getScanFullUrl(
                    getExplorerUrl(getStafiHubChainId(), chains),
                    "account",
                    swapProgressModalProps?.txDetail?.stafihubAddress
                  )
            );
          }}
        >
          VIEW YOUR TRANSACTIONS
        </div>
      </>
    );
  };

  return (
    <Modal
      open={!!swapProgressModalProps.visible}
      onClose={() => {
        dispatch(setSwapProgressModalProps({ visible: false }));
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border={0}
        position="relative"
        sx={{
          backgroundColor: "#252525",
          width: "850px",
          borderRadius: "2px",
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "80px",
        }}
      >
        <img
          src={iconClose}
          className="w-8 h-8 absolute right-3 top-3 cursor-pointer"
          alt="close"
          onClick={() => {
            dispatch(setSwapProgressModalProps({ visible: false }));
          }}
        />

        {swapProgressModalProps.progress &&
        swapProgressModalProps.progress >= 100 ? (
          renderSuccessContent()
        ) : (
          <>
            <div className="mt-14 font-bold text-secondary text-[46px]">
              Transferring
            </div>

            <div className="mt-10 font-bold text-white text-[22px]">
              We are transferring your tokens to your received address
            </div>

            <div className="mt-8 font-bold text-white text-[40px]">
              <FormatterText value={swapProgressModalProps.txDetail?.amount} />{" "}
              {swapProgressModalProps.txDetail?.symbol}
            </div>

            <div className="self-stretch mx-32 mt-8">
              <LinearProgress
                variant="determinate"
                value={swapProgressModalProps.progress}
              />
            </div>

            <div className="mt-10">
              <CustomLoading color="#ffffff" size={60} />
            </div>

            <div
              className="mt-9 mb-14 font-bold text-[20px] text-secondary cursor-pointer underline"
              onClick={() => {
                openLink(
                  getScanFullUrl(
                    getExplorerUrl(getStafiHubChainId(), chains),
                    "account",
                    swapProgressModalProps?.txDetail?.stafihubAddress
                  )
                );
              }}
            >
              View on Explorer
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

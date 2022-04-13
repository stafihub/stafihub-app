import { Box, Modal } from "@mui/material";
import { Button } from "@stafihub/react-components";
import memoNoticeImage from "../assets/images/stake_memo_notice.png";

interface ClaimMintRewardModalProps {
  visible: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export const MemoNoticeModal = (props: ClaimMintRewardModalProps) => {
  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="20px"
        pl="40px"
        pr="30px"
        pb="40px"
        border={0}
        sx={{
          backgroundColor: "#ffffff",
          width: "660px",
          borderRadius: "6px",
          margin: "auto",
          marginTop: "190px",
          outline: "none",
          transform: "translateX(80px)",
        }}
      >
        <div className="flex justify-center">
          <div className="text-text-black1 font-bold text-[20px]">Notice</div>
        </div>

        <div className="mt-8 flex items-start">
          <img
            src={memoNoticeImage}
            className="w-[240px] h-[411px]"
            alt="memo notice"
          />

          <div className="mt-[112px] ml-12">
            <div className="bg-[#F7F8FA] border-solid border-[1px] border-[#E3E3E3]">
              <div className="mx-3 mt-7 mb-12 text-[#FD5D89] font-bold text-[14px]">
                The rToken App will use the Memo to register your receiving
                address on chain, please DO NOT edit the Memo.
              </div>
            </div>

            <div className="mt-20">
              <Button bgPrimary type="rectangle" onClick={props.onConfirm}>
                Understood
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

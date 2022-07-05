import { Box, Modal } from "@mui/material";
import { FormatterText } from "@stafihub/react-components";
import { useMemo } from "react";

interface ApyComparisonModalProps {
  visible: boolean;
  tokenName: string;
  stafiHubApy: string;
  otherApy: string;
  onClose: () => void;
}

export const ApyComparisonModal = (props: ApyComparisonModalProps) => {
  const comparison = useMemo(() => {
    if (isNaN(Number(props.otherApy)) || isNaN(Number(props.stafiHubApy))) {
      return "--";
    }

    return Number(props.stafiHubApy) - Number(props.otherApy);
  }, [props.otherApy, props.stafiHubApy]);

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="20px"
        pb="40px"
        border={0}
        height="526px"
        sx={{
          backgroundColor: "#ffffff",
          width: "659px",
          borderRadius: "6px",
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginLeft: "80px",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-text-black1 font-bold text-[20px]">
            Comparison
          </div>

          <div className="mt-12 w-[300px] h-[68px] pl-5  pr-3 bg-[#F7F8FA] border-solid border-[1px] border-[#E3E3E3] rounded-[3px] flex items-center justify-between">
            <div className="text-[14px] text-[#606060] leading-tight">
              General {props.tokenName}
              <br />
              Staking APY
            </div>

            <div className="font-bold text-[18px] text-[#606060]">
              <FormatterText value={props.otherApy} decimals={2} />%
            </div>
          </div>

          <div className="mt-5 w-[300px] h-[68px] pl-5  pr-3 bg-[#F7F8FA] border-solid border-[1px] border-[#E3E3E3] rounded-[3px] flex items-center justify-between">
            <div className="text-[14px] text-[#606060] leading-tight">
              StaFiHub {props.tokenName}
              <br />
              Staking APY
            </div>

            <div className="font-bold text-[18px] text-primary">
              <FormatterText value={props.stafiHubApy} decimals={2} />%
            </div>
          </div>

          <div className="mt-14 font-bold text-[16px] text-[#4F4F4F]">
            More APY on StaFiHub
          </div>

          <div className="mt-1 font-bold text-[30px] text-[#FF7FA7]">
            {isNaN(Number(comparison))
              ? ""
              : Number(comparison) < 0
              ? "-"
              : "+"}{" "}
            <FormatterText value={Math.abs(Number(comparison))} decimals={2} />%
          </div>

          <div className="w-[410px] mt-11 text-[12px] text-[#A5A5A5] scale-[0.84] leading-tight">
            General staking apy calculates all the validators regiseted
            on-chain, while StaFiHub APY caculates the validators selected by
            the StaFiHub algorithm. You can read more details
            <a
              className="text-[#000000] mx-1 underline"
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            , about how the protocol select validators.
          </div>
        </div>
      </Box>
    </Modal>
  );
};

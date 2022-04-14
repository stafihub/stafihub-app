import { getShortAddress } from "@stafihub/apps-util";
import { CustomLoading } from "@stafihub/react-components";
import classNames from "classnames";
import { getRTokenDenom, getStafiHubChainId } from "@stafihub/apps-config";
import {
  queryBondRecord,
  queryChainEra,
  queryRParams,
  queryLatestBlock,
} from "@stafihub/apps-wallet";
import { LiquidityBondState } from "@stafihub/types";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import iconClose from "../assets/images/icon_close_bold.svg";
import iconSuccess from "../assets/images/icon_correct.svg";
import iconError from "../assets/images/icon_error.svg";
import sidebarProgressIcon from "../assets/images/sidebar_progress.svg";
import { useStakeSidebarProps } from "../hooks/useStakeSidebarProps";
import {
  updateAllTokenBalance,
  updateNotice,
} from "../redux/reducers/AppSlice";
import { setStakeSidebarProps } from "../redux/reducers/TxSlice";
import { openLink } from "../utils/common";

export const StakeSidebar = () => {
  const intervalID = useRef<ReturnType<typeof setInterval> | null>(null);
  const dispatch = useDispatch();
  const stakeSidebarProps = useStakeSidebarProps();

  const [stakingSuccess, setStakingSuccess] = useState(false);
  const [stakingRemainingHours, setStakingRemainingHours] =
    useState("-- hours");

  useEffect(() => {
    (async () => {
      if (
        stakeSidebarProps.mintingStatus !== 2 ||
        !stakeSidebarProps.eraNumber ||
        !stakeSidebarProps.chainId
      ) {
        return;
      }

      const currentEraResult = await queryChainEra(
        getRTokenDenom(stakeSidebarProps.chainId)
      );
      if (
        currentEraResult &&
        currentEraResult.era > stakeSidebarProps.eraNumber
      ) {
        setStakingSuccess(true);
      } else {
        const rParamsResult = await queryRParams(
          getRTokenDenom(stakeSidebarProps.chainId)
        );
        if (!rParamsResult.rParams) {
          return;
        }
        const eraSeconds = rParamsResult.rParams?.eraSeconds;
        const latestBlockResult = await queryLatestBlock(getStafiHubChainId());
        const currentBlockSeconds = (
          Number(latestBlockResult?.block?.header?.time?.getTime()) / 1000
        ).toFixed(0);
        console.log("currentBlockSeconds", currentBlockSeconds);

        const remainingSeconds =
          (stakeSidebarProps.eraNumber + 1) * Number(eraSeconds) -
          Number(currentBlockSeconds);
        console.log("remainingSeconds", remainingSeconds);

        if (remainingSeconds > 0 && remainingSeconds < 3600) {
          const temp = Math.ceil(remainingSeconds / 3600);
          setStakingRemainingHours(
            "less than " + temp + (temp > 1 ? " hours" : " hour")
          );
        }
      }
    })();
  }, [
    stakeSidebarProps.visible,
    stakeSidebarProps.mintingStatus,
    stakeSidebarProps.eraNumber,
    stakeSidebarProps.chainId,
  ]);

  useEffect(() => {
    if (stakeSidebarProps.visible && stakeSidebarProps.mintingStatus === 1) {
      intervalID.current = setInterval(async () => {
        if (!stakeSidebarProps.txHash || !stakeSidebarProps.chainId) {
          return;
        }
        const bondRecordRes = await queryBondRecord(
          getRTokenDenom(stakeSidebarProps.chainId),
          stakeSidebarProps.txHash
        );

        if (bondRecordRes) {
          if (
            bondRecordRes.bondRecord?.state ===
            LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK
          ) {
            dispatch(
              setStakeSidebarProps({
                mintingStatus: 2,
              })
            );

            dispatch(updateNotice(stakeSidebarProps.txHash, "Confimed"));
            dispatch(updateAllTokenBalance());
          } else {
            dispatch(
              setStakeSidebarProps({
                mintingStatus: -1,
              })
            );

            dispatch(updateNotice(stakeSidebarProps.txHash, "Error"));
          }
        }
      }, 3000);
    } else {
      if (intervalID.current) {
        clearInterval(intervalID.current);
      }
    }
  }, [stakeSidebarProps, dispatch]);

  return (
    <div
      className={classNames(
        "absolute z-10 right-0 top-24 w-[253px] h-[610px] overflow-auto bg-[#252525] rounded-md px-3 py-2 animate-siderbar_progress_show flex flex-col items-start",
        { hidden: !stakeSidebarProps.visible }
      )}
    >
      <img
        src={iconClose}
        alt="close"
        className="w-4 cursor-pointer"
        onClick={() => {
          dispatch(setStakeSidebarProps({ visible: false }));
        }}
      />
      <div className="mt-[-8px] self-center flex items-center">
        <img src={sidebarProgressIcon} alt="icon" className="w-10" />
        <div className="ml-1 text-white font-bold text-[14px]">
          Liquidity Process
        </div>
      </div>

      {/* 1. Sending */}
      {stakeSidebarProps.sendingStatus && (
        <div className="mt-9 self-stretch">
          <div className="flex items-center">
            <div className="text-white text-[12px] w-4 h-4 rounded-full border-solid border-[0.5px] border-white flex items-center justify-center">
              1
            </div>

            <div className="ml-2 text-white font-bold text-[16px] italic">
              Sending
            </div>
          </div>

          <div className="mt-2 mx-6 flex items-center justify-between">
            <div className="text-[#8f8f8f] text-[12px] 5px]">Broadcasting</div>

            <div>
              {stakeSidebarProps.sendingStatus === 1 ? (
                <CustomLoading color="#FF7FA7" size={14} />
              ) : stakeSidebarProps.sendingStatus === 2 ? (
                <img src={iconSuccess} alt="success" className="w-4" />
              ) : (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>

          <div
            className={classNames(
              "mt-3 mx-6 flex items-center justify-between text-[12px] ",
              stakeSidebarProps.sendingStatus === 2
                ? "text-[#8f8f8f]"
                : "text-[#FF7FA7]",
              {
                invisible: stakeSidebarProps.sendingStatus === 1,
              }
            )}
          >
            {stakeSidebarProps.sendingStatus === 2 ? (
              <div>Completed</div>
            ) : (
              <div>Error</div>
            )}

            <div className="">
              {stakeSidebarProps.sendingStatus === 2 && (
                <img src={iconSuccess} alt="success" className="w-4" />
              )}

              {stakeSidebarProps.sendingStatus === -1 && (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>

          <div className="mt-8 ml-6 flex items-center text-[12px] text-[#8f8f8f]">
            {stakeSidebarProps.txHash && (
              <>
                <div>Check Tx</div>
                <div
                  className="ml-3 underline cursor-pointer"
                  onClick={() => {
                    openLink(
                      `${stakeSidebarProps.explorerUrl}/tx/${stakeSidebarProps.txHash}`
                    );
                  }}
                >
                  {getShortAddress(stakeSidebarProps.txHash, 4)}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 2. Minting */}
      {stakeSidebarProps.mintingStatus && (
        <div className="mt-9 self-stretch">
          <div className="flex items-center">
            <div className="text-white text-[12px] w-4 h-4 rounded-full border-solid border-[0.5px] border-white flex items-center justify-center">
              2
            </div>

            <div className="ml-2 text-white font-bold text-[16px] italic">
              Minting
            </div>
          </div>

          <div className="mt-2 mx-6 flex items-center justify-between">
            <div className="text-[#8f8f8f] text-[12px] 5px]">Broadcasting</div>

            <div>
              {stakeSidebarProps.mintingStatus === 1 ? (
                <CustomLoading color="#FF7FA7" size={14} />
              ) : stakeSidebarProps.mintingStatus === 2 ? (
                <img src={iconSuccess} alt="success" className="w-4" />
              ) : (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>

          <div
            className={classNames(
              "mt-3 mx-6 flex items-center justify-between text-[12px] ",
              stakeSidebarProps.mintingStatus === 2
                ? "text-[#8f8f8f]"
                : "text-[#FF7FA7]",
              {
                invisible: stakeSidebarProps.mintingStatus === 1,
              }
            )}
          >
            {stakeSidebarProps.mintingStatus === 2 ? (
              <div>Completed</div>
            ) : (
              <div>Error</div>
            )}

            <div className="">
              {stakeSidebarProps.mintingStatus === 2 && (
                <img src={iconSuccess} alt="success" className="w-4" />
              )}

              {stakeSidebarProps.mintingStatus === -1 && (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Staking */}
      {stakeSidebarProps.mintingStatus === 2 && (
        <div className="mt-9 self-stretch">
          <div className="flex items-center">
            <div className="text-white text-[12px] w-4 h-4 rounded-full border-solid border-[0.5px] border-white flex items-center justify-center">
              3
            </div>

            <div className="ml-2 text-white font-bold text-[16px] italic">
              Staking
            </div>
          </div>

          <div className="mt-2 mx-6 text-[#8f8f8f] text-[12px] 5px]">
            {stakingSuccess ? "Completed" : "Waiting to be staked"}
          </div>

          <div className="mt-2 ml-6 text-primary font-bold text-[12px] scale-[0.8] origin-top-left">
            {stakingSuccess
              ? "Staking already handled"
              : `Next staking circle in ${stakingRemainingHours}`}
          </div>
        </div>
      )}
    </div>
  );
};

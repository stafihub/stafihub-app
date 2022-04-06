import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getChainAccountPrefix,
  getChainDecimals,
  getChainName,
  getDenom,
  getExplorerUrl,
  getRTokenDenom,
  getStafiHubChainId,
  getTokenDisplayName,
  STAFIHUB_DECIMALS,
} from "@stafihub/apps-config";
import { humanToAtomic } from "@stafihub/apps-util";
import {
  checkAddress,
  queryBondRecord,
  queryTx,
  sendChainTokens,
  sendIBCTransferTx,
  sendLiquidityUnbondTx,
  sendRecoveryTx,
  sendStakeTx,
} from "@stafihub/apps-wallet";
import { LiquidityBondState } from "@stafihub/types";
import { FeeStationPool } from "../../types/interface";
import { getHumanAccountBalance, timeout } from "../../utils/common";
import snackbarUtil from "../../utils/snackbarUtils";
import { AppThunk } from "../store";
import {
  addNotice,
  connectKeplr,
  setIsLoading,
  updateAllTokenBalance,
  updateNotice,
  updateTokenBalance,
} from "./AppSlice";
import { getIBCChannel } from "./IBCSlice";

interface TxDetail {
  amount: string;
  symbol: string;
  stafihubAddress: string;
}

interface SwapProgressModalProps {
  visible?: boolean;
  progress?: number;
  txDetail?: TxDetail;
}

export interface SidebarProgressItem {
  name: string;
  // show item status.
  // 0-loading 1-success 2-error
  status: number;
  txHash?: string;
}

interface SidebarProgressProps {
  visible: boolean;
  explorerUrl?: string;
  items?: SidebarProgressItem[];
}

export interface TxState {
  swapProgressModalProps: SwapProgressModalProps;
  sidebarProgressProps: SidebarProgressProps;
}

const initialState: TxState = {
  swapProgressModalProps: {
    visible: false,
    progress: 0,
  },
  sidebarProgressProps: {
    visible: false,
  },
};

export const txSlice = createSlice({
  name: "tx",
  initialState,
  reducers: {
    setSwapProgressModalProps: (
      state: TxState,
      action: PayloadAction<Partial<SwapProgressModalProps>>
    ) => {
      state.swapProgressModalProps = {
        ...state.swapProgressModalProps,
        ...action.payload,
      };
    },
    setSidebarProgressProps: (
      state: TxState,
      action: PayloadAction<Partial<SidebarProgressProps>>
    ) => {
      state.sidebarProgressProps = {
        ...state.sidebarProgressProps,
        ...action.payload,
      };
    },
  },
});

export const { setSwapProgressModalProps, setSidebarProgressProps } =
  txSlice.actions;

export default txSlice.reducer;

export const stake =
  (
    chainId: string | undefined,
    inputAmount: string,
    stafiHubAddress: string,
    poolAddress: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      if (!chainId) {
        return;
      }

      if (
        !checkAddress(
          stafiHubAddress,
          getChainAccountPrefix(getStafiHubChainId())
        )
      ) {
        snackbarUtil.error("Address format error");
        return;
      }

      const chainAccount = getState().app.accounts[chainId];
      if (!chainAccount) {
        return;
      }

      dispatch(setIsLoading(true));
      const txResponse = await sendStakeTx(
        chainId,
        inputAmount,
        chainAccount.bech32Address,
        stafiHubAddress,
        poolAddress
      );
      dispatch(setIsLoading(false));

      let success = false;
      if (txResponse?.code === 0) {
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "Stake",
            {
              sender: chainAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: chainAccount.bech32Address,
            },
            {
              tokenName: getTokenDisplayName(chainId),
              stakeAmount: inputAmount,
            },
            getExplorerUrl(chainId)
          )
        );

        dispatch(updateTokenBalance(chainId));
        dispatch(
          setSidebarProgressProps({
            visible: true,
            explorerUrl: getExplorerUrl(chainId),
            items: [{ name: "Staking", status: 0 }],
          })
        );

        await timeout(2500);

        dispatch(
          setSidebarProgressProps({
            items: [
              {
                name: "Staking",
                status: 1,
                txHash: txResponse.transactionHash,
              },
              { name: "Minting", status: 0 },
            ],
          })
        );

        const MAX_COUNT = 40;
        let timeCount = 0;
        while (true) {
          const bondRecordRes = await queryBondRecord(
            getRTokenDenom(chainId),
            txResponse.transactionHash
          );

          if (bondRecordRes) {
            if (
              bondRecordRes.bondRecord?.state ===
              LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK
            ) {
              dispatch(
                setSidebarProgressProps({
                  items: [
                    {
                      name: "Staking",
                      status: 1,
                      txHash: txResponse.transactionHash,
                    },
                    { name: "Minting", status: 1 },
                  ],
                })
              );

              dispatch(updateNotice(txResponse.transactionHash, "Confimed"));
              success = true;
              break;
            } else {
              dispatch(
                setSidebarProgressProps({
                  items: [
                    {
                      name: "Staking",
                      status: 1,
                      txHash: txResponse.transactionHash,
                    },
                    { name: "Minting", status: 2 },
                  ],
                })
              );

              dispatch(updateNotice(txResponse.transactionHash, "Error"));
              break;
            }
          }

          await timeout(2500);
          timeCount++;
          if (timeCount > MAX_COUNT) {
            snackbarUtil.warning(
              "Check status timeout, please try again later."
            );
            dispatch(
              setSidebarProgressProps({
                visible: false,
              })
            );
            break;
          }

          if (!getState().tx.sidebarProgressProps.visible) {
            break;
          }
        }
      }

      callback && callback(success);
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
    }
  };

export const stakeRecovery =
  (
    chainId: string | undefined,
    stafiHubAddress: string,
    poolAddress: string,
    txHash: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      if (!chainId) {
        return;
      }
      if (!stafiHubAddress) {
        dispatch(connectKeplr(getStafiHubChainId()));
        return;
      }

      if (
        !checkAddress(
          stafiHubAddress,
          getChainAccountPrefix(getStafiHubChainId())
        )
      ) {
        snackbarUtil.error("Address format error");
        return;
      }

      const chainAccount = getState().app.accounts[chainId];
      if (!chainAccount) {
        return;
      }

      dispatch(setIsLoading(true));

      const txDetail = await queryTx(chainId, txHash);

      if (!txDetail) {
        snackbarUtil.error("The txHash does not exist on chain.");
        return;
      }

      const parsedRawLog = JSON.parse(txDetail.rawLog || "");

      if (!txDetail.rawLog || !parsedRawLog.length || !parsedRawLog[0].events) {
        snackbarUtil.error("This transaction is not a transfer transaction.");
        return;
      }

      const messageLog = parsedRawLog[0].events.find((event: any) => {
        return event.type === "message";
      });

      if (!messageLog) {
        snackbarUtil.error("This transaction is not a transfer transaction.");
        return;
      }

      const messageLogAttributes = messageLog.attributes;
      const actionAttribute = messageLogAttributes?.find(
        (attribute: any) => attribute.key === "action"
      );
      const senderAttribute = messageLogAttributes?.find(
        (attribute: any) => attribute.key === "sender"
      );

      const action = actionAttribute.value;
      const sender = senderAttribute.value;

      if (action !== "/cosmos.bank.v1beta1.MsgSend") {
        snackbarUtil.error("This transaction is not a transfer transaction.");
        return;
      }

      if (sender !== chainAccount.bech32Address) {
        snackbarUtil.error(
          `Please select your ${getTokenDisplayName(
            chainId
          )} account that sent the transaction.`
        );
        return;
      }

      // console.log("rawLog", parsedRawLog);

      const currentBondRecordRes = await queryBondRecord(
        getRTokenDenom(chainId),
        txHash
      );

      if (
        currentBondRecordRes &&
        currentBondRecordRes.bondRecord?.state ===
          LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK
      ) {
        snackbarUtil.error(
          "The minting process is already completed with this txHash."
        );
        return;
      }

      const txResponse = await sendRecoveryTx(
        chainId,
        chainAccount.bech32Address,
        stafiHubAddress,
        poolAddress,
        txHash
      );
      dispatch(setIsLoading(false));

      // console.log("recovery txHash", txResponse?.transactionHash);

      let success = false;

      if (txResponse?.code === 0) {
        dispatch(updateTokenBalance(chainId));
        dispatch(
          setSidebarProgressProps({
            visible: true,
            explorerUrl: getExplorerUrl(chainId),
            items: [
              { name: "Staking", status: 1, txHash },
              { name: "Minting", status: 0 },
            ],
          })
        );

        const MAX_COUNT = 20;
        let timeCount = 0;
        while (true) {
          const bondRecordRes = await queryBondRecord(
            getRTokenDenom(chainId),
            txHash
          );

          if (bondRecordRes) {
            if (
              bondRecordRes.bondRecord?.state ===
              LiquidityBondState.LIQUIDITY_BOND_STATE_VERIFY_OK
            ) {
              dispatch(
                setSidebarProgressProps({
                  items: [
                    {
                      name: "Staking",
                      status: 1,
                      txHash,
                    },
                    { name: "Minting", status: 1 },
                  ],
                })
              );

              dispatch(updateNotice(txHash, "Confimed"));
              success = true;
              break;
            }
          }

          await timeout(6000);
          timeCount++;
          if (timeCount > MAX_COUNT) {
            dispatch(
              setSidebarProgressProps({
                items: [
                  {
                    name: "Staking",
                    status: 1,
                    txHash,
                  },
                  { name: "Minting", status: 2 },
                ],
              })
            );

            dispatch(updateNotice(txHash, "Error"));
            break;
          }

          if (!getState().tx.sidebarProgressProps.visible) {
            break;
          }
        }
      }

      callback && callback(success);
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const unbond =
  (
    chainId: string | undefined,
    inputAmount: string,
    poolAddress: string,
    relayFee: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      if (!chainId) {
        return;
      }

      const stafiHubAccount = getState().app.accounts[getStafiHubChainId()];
      if (!stafiHubAccount) {
        dispatch(connectKeplr(getStafiHubChainId()));
        return;
      }

      const chainAccount = getState().app.accounts[chainId];
      if (!chainAccount) {
        return;
      }

      const fisAmount = getHumanAccountBalance(
        stafiHubAccount.allBalances,
        getDenom(getStafiHubChainId()),
        getChainDecimals(getStafiHubChainId())
      );

      if (Number(fisAmount) < Number(relayFee) + Number(0.0045)) {
        snackbarUtil.warning("Insufficient Balance for fee payment");
        return;
      }

      dispatch(setIsLoading(true));

      const txResponse = await sendLiquidityUnbondTx(
        chainId,
        humanToAtomic(inputAmount, STAFIHUB_DECIMALS),
        chainAccount.bech32Address,
        stafiHubAccount.bech32Address,
        poolAddress
      );
      if (txResponse?.code === 0) {
        snackbarUtil.success("Unbond success");
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "Unbond",
            {
              sender: stafiHubAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: chainAccount.bech32Address,
            },
            {
              rTokenName: getTokenDisplayName(chainId),
              unstakeAmount: inputAmount,
            },
            getExplorerUrl(getStafiHubChainId()),
            "Confimed"
          )
        );
      }
      dispatch(updateTokenBalance(chainId));
      callback && callback(txResponse?.code === 0);
    } catch (err: unknown) {
      console.log("sendLiquidityUnbondTx err", err);
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const feeStationSwap =
  (
    inAmount: string,
    outAmount: string,
    minOutAmount: string,
    poolInfo: FeeStationPool,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      let success = false;
      const stafiHubAccount = getState().app.accounts[getStafiHubChainId()];
      const chainAccount = getState().app.accounts[poolInfo.chainId];

      if (!stafiHubAccount) {
        dispatch(connectKeplr(getStafiHubChainId()));
        return;
      }

      if (!chainAccount) {
        dispatch(connectKeplr(poolInfo.chainId));
        return;
      }

      dispatch(setIsLoading(true));

      const postData = {
        stafihubAddress: stafiHubAccount.bech32Address,
        symbol: poolInfo.symbol,
        poolAddress: poolInfo.poolAddress,
        inAmount: humanToAtomic(inAmount, poolInfo.decimals),
        minOutAmount: humanToAtomic(minOutAmount, 6),
      };
      const postSwapInfoRes = await fetch(
        `https://test-rtoken-api.stafihub.io/feeStation/api/v1/station/swapInfo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      const postSwapInfoResJson = await postSwapInfoRes.json();
      if (postSwapInfoResJson.status === "80000") {
        const uuid = postSwapInfoResJson.data.uuid;
        const memo = `${uuid}:${stafiHubAccount.bech32Address}`;

        const txResponse = await sendChainTokens(
          humanToAtomic(inAmount, poolInfo.decimals),
          poolInfo.chainId,
          chainAccount.bech32Address,
          poolInfo.poolAddress,
          memo
        );

        if (txResponse?.code === 0) {
          dispatch(
            addNotice(
              txResponse.transactionHash,
              "Fee Station",
              {
                sender: chainAccount.bech32Address,
                transactionHash: txResponse.transactionHash,
                address: stafiHubAccount.bech32Address,
              },
              {
                inputTokenName: getTokenDisplayName(poolInfo.chainId),
                inputAmount: inAmount,
                outputTokenName: "FIS",
                outputAmount: outAmount,
              },
              getExplorerUrl(getStafiHubChainId())
            )
          );
          dispatch(setIsLoading(false));
          dispatch(
            setSwapProgressModalProps({
              visible: true,
              progress: 0,
              txDetail: {
                amount: outAmount,
                symbol: "FIS",
                stafihubAddress: stafiHubAccount.bech32Address,
              },
            })
          );

          const MAX_COUNT = 100;
          let timeCount = 0;
          while (timeCount <= MAX_COUNT) {
            if (timeCount % 5 === 0) {
              const getUuidRes = await fetch(
                `https://test-rtoken-api.stafihub.io/feeStation/api/v1/station/swapInfo?uuid=${uuid}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const getUuidResJson = await getUuidRes.json();
              if (getUuidResJson.data?.swapStatus === 2) {
                // Success.
                dispatch(
                  setSwapProgressModalProps({
                    progress: 100,
                  })
                );
                success = true;
                dispatch(updateNotice(txResponse.transactionHash, "Confimed"));
                break;
              } else if (getUuidResJson.data?.swapStatus === 3) {
                dispatch(
                  setSwapProgressModalProps({
                    visible: false,
                  })
                );
                snackbarUtil.error("InAmountNotMatch");
                dispatch(updateNotice(txResponse.transactionHash, "Error"));
              } else if (getUuidResJson.data?.swapStatus === 4) {
                dispatch(
                  setSwapProgressModalProps({
                    visible: false,
                  })
                );
                snackbarUtil.error("StafiAddressNotMatch");
                dispatch(updateNotice(txResponse.transactionHash, "Error"));
              }
            }

            timeCount++;
            dispatch(
              setSwapProgressModalProps({
                progress: Math.min(99, timeCount),
              })
            );

            if (timeCount > MAX_COUNT) {
              snackbarUtil.warning(
                "Transaction in progress, please check your wallet later"
              );
              dispatch(
                setSwapProgressModalProps({
                  visible: false,
                })
              );
            }

            await timeout(1000);
          }

          dispatch(updateAllTokenBalance());
          callback && callback(success);
        }
      } else {
        snackbarUtil.error(postSwapInfoResJson.message);
      }
    } catch (err: unknown) {
      console.log("feeStationSwap err", err);
      dispatch(setIsLoading(false));
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

/**
 * IBC Bridge swap tokens.
 */
export const ibcBridgeSwap =
  (
    srcChainId: string,
    dstChainId: string,
    srcChannel: string,
    inputAmount: string,
    dstAddress: string
  ): AppThunk =>
  async (dispatch, getState) => {
    // Check dst address.
    if (!checkAddress(dstAddress, getChainAccountPrefix(dstChainId))) {
      snackbarUtil.error("Address format error");
      return;
    }

    // Check wallet connections.
    const srcChainAccount = getState().app.accounts[srcChainId];
    if (!srcChainAccount) {
      dispatch(connectKeplr(srcChainId));
      return;
    }

    const dstChainAccount = getState().app.accounts[dstChainId];
    if (!dstChainAccount) {
      dispatch(connectKeplr(dstChainId));
      return;
    }

    try {
      dispatch(setIsLoading(true));

      const otherChainId =
        srcChainId === getStafiHubChainId() ? dstChainId : srcChainId;

      let transferDenom = undefined;

      if (srcChainId !== getStafiHubChainId()) {
        transferDenom = getDenom(otherChainId);
      } else {
        const ibcChannel = getIBCChannel(
          getState().ibc.ibcChannelStore,
          getDenom(otherChainId),
          srcChannel
        );

        transferDenom = ibcChannel?.ibcDenom;
      }

      if (!transferDenom) {
        snackbarUtil.error("Transfer denom info not found");
        return;
      }

      const txResponse = await sendIBCTransferTx(
        srcChainId,
        srcChainAccount.bech32Address,
        dstAddress,
        humanToAtomic(inputAmount, getChainDecimals(srcChainId)),
        "transfer",
        srcChannel,
        transferDenom
      );

      if (txResponse?.code === 0) {
        snackbarUtil.success("Swap success");
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "IBC Bridge",
            {
              sender: srcChainAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: dstChainAccount.bech32Address,
            },
            {
              tokenName: getTokenDisplayName(
                srcChainId === getStafiHubChainId() ? dstChainId : srcChainId
              ),
              amount: inputAmount,
              inputChainName: getChainName(srcChainId),
              outputChainName: getChainName(dstChainId),
            },
            getExplorerUrl(srcChainId),
            "Confimed"
          )
        );
      } else {
        snackbarUtil.error(`Swap failure ${txResponse?.rawLog}`);
      }
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

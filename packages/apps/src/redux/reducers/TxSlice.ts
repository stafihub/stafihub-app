import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getApiHost,
  getChainAccountPrefix,
  getChainDecimals,
  getChainName,
  getDenom,
  getExplorerUrl,
  getRTokenDenom,
  getRTokenDisplayName,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { atomicToHuman, humanToAtomic } from "@stafihub/apps-util";
import {
  checkAddress,
  queryAccountBalance,
  queryBondPipeline,
  queryBondRecord,
  queryTx,
  sendChainTokens,
  sendClaimMintRewardTx,
  sendIBCTransferTx,
  sendLiquidityUnbondTx,
  sendRecoveryTx,
  sendStakeTx,
} from "@stafihub/apps-wallet";
import { LiquidityBondState } from "@stafihub/types";
import Long from "long";
import moment from "moment";
import { chains } from "../../config";
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
  feeStationPayTxHash?: string;
}

interface SwapProgressModalProps {
  visible?: boolean;
  progress?: number;
  txDetail?: TxDetail;
}

interface StakeSidebarProps {
  visible: boolean;
  explorerUrl?: string;
  chainId?: string;
  txHash?: string;
  eraNumber?: number;
  // 1:loading 2:success -1:error
  sendingStatus?: number;
  mintingStatus?: number;
  stakingStatus?: number;
}

export interface TxState {
  swapProgressModalProps: SwapProgressModalProps;
  stakeSidebarProps: StakeSidebarProps;
}

const initialState: TxState = {
  swapProgressModalProps: {
    visible: false,
    progress: 0,
  },
  stakeSidebarProps: {
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
    setStakeSidebarProps: (
      state: TxState,
      action: PayloadAction<Partial<StakeSidebarProps>>
    ) => {
      state.stakeSidebarProps = {
        ...state.stakeSidebarProps,
        ...action.payload,
      };
    },
  },
});

export const { setSwapProgressModalProps, setStakeSidebarProps } =
  txSlice.actions;

export default txSlice.reducer;

export const stake =
  (
    chainId: string | undefined,
    inputAmount: string,
    stafiHubAddress: string,
    poolAddress: string,
    onTxSuccess: () => void,
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
          getChainAccountPrefix(getStafiHubChainId(), chains)
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
        chains[chainId],
        inputAmount,
        chainAccount.bech32Address,
        stafiHubAddress,
        poolAddress
      );

      let success = false;
      if (txResponse?.code === 0) {
        const eraNumber = getState().chain.chainEras[chainId] || 0;
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "Stake",
            {
              sender: chainAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: chainAccount.bech32Address,
              chainId,
            },
            {
              tokenName: getTokenDisplayName(chainId, chains),
              stakeAmount: inputAmount,
              eraNumber,
            },
            getExplorerUrl(chainId, chains)
          )
        );

        onTxSuccess();
        dispatch(updateTokenBalance(chainId));

        dispatch(
          setStakeSidebarProps({
            visible: true,
            explorerUrl: getExplorerUrl(chainId, chains),
            chainId: chainId,
            txHash: "",
            eraNumber,
            sendingStatus: 1,
            mintingStatus: 0,
            stakingStatus: 0,
          })
        );

        await timeout(3000);

        dispatch(
          setStakeSidebarProps({
            txHash: txResponse.transactionHash,
            sendingStatus: 2,
            mintingStatus: 1,
          })
        );

        const MAX_COUNT = 40;
        let timeCount = 0;
        while (true) {
          const bondRecordRes = await queryBondRecord(
            chains[getStafiHubChainId()],
            getRTokenDenom(chainId, chains),
            txResponse.transactionHash
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

              dispatch(updateNotice(txResponse.transactionHash, "Confirmed"));
              dispatch(updateAllTokenBalance());
              success = true;
              break;
            } else {
              dispatch(
                setStakeSidebarProps({
                  mintingStatus: -1,
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
              setStakeSidebarProps({
                visible: false,
              })
            );
            break;
          }

          if (!getState().tx.stakeSidebarProps.visible) {
            break;
          }
        }
      } else {
        snackbarUtil.warning(
          "Something went wrong, please increase the gas and try again!"
        );
      }

      callback && callback(success);
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
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
          getChainAccountPrefix(getStafiHubChainId(), chains)
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

      const txDetail = await queryTx(chains[chainId], txHash);

      if (!txDetail) {
        snackbarUtil.error(
          "The txHash does not exist on " +
            getChainName(chainId, chains) +
            " chain."
        );
        return;
      }

      const parsedRawLog = JSON.parse(txDetail.rawLog || "");

      if (!txDetail.rawLog || !parsedRawLog.length || !parsedRawLog[0].events) {
        snackbarUtil.error("This transaction is not a MsgSend transaction.");
        return;
      }

      const messageLog = parsedRawLog[0].events.find((event: any) => {
        return event.type === "message";
      });

      if (!messageLog) {
        snackbarUtil.error("This transaction is not a MsgSend transaction.");
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
        snackbarUtil.error("This transaction is not a MsgSend transaction.");
        return;
      }

      if (sender !== chainAccount.bech32Address) {
        snackbarUtil.error(
          `Please select your ${getTokenDisplayName(
            chainId,
            chains
          )} account that sent the transaction.`
        );
        return;
      }

      // console.log("rawLog", parsedRawLog);

      const currentBondRecordRes = await queryBondRecord(
        chains[getStafiHubChainId()],
        getRTokenDenom(chainId, chains),
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
        chains[chainId],
        chainAccount.bech32Address,
        stafiHubAddress,
        poolAddress,
        txHash
      );

      let success = false;

      if (txResponse?.code === 0) {
        dispatch(updateTokenBalance(chainId));
        dispatch(
          setStakeSidebarProps({
            visible: true,
            explorerUrl: getExplorerUrl(chainId, chains),
            txHash,
            sendingStatus: 2,
            mintingStatus: 1,
          })
        );

        const MAX_COUNT = 20;
        let timeCount = 0;
        while (true) {
          const bondRecordRes = await queryBondRecord(
            chains[getStafiHubChainId()],
            getRTokenDenom(chainId, chains),
            txHash
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

              dispatch(updateNotice(txHash, "Confirmed"));
              success = true;
              break;
            }
          }

          await timeout(6000);
          timeCount++;
          if (timeCount > MAX_COUNT) {
            dispatch(
              setStakeSidebarProps({
                mintingStatus: -1,
              })
            );

            dispatch(updateNotice(txHash, "Error"));
            break;
          }

          if (!getState().tx.stakeSidebarProps.visible) {
            break;
          }
        }
      } else {
        snackbarUtil.warning(
          "Something went wrong, please increase the gas and try again!"
        );
      }

      callback && callback(success);
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
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
    willGetAmount: string,
    multisigPoolAddress: string,
    icaPoolAddress: string,
    relayFee: string,
    bondingHours: string,
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
        getDenom(getStafiHubChainId(), chains),
        getChainDecimals(getStafiHubChainId(), chains)
      );

      if (Number(fisAmount) < Number(relayFee) + Number(0.0045)) {
        snackbarUtil.warning("Insufficient Balance for fee payment");
        return;
      }

      dispatch(setIsLoading(true));

      const multisigPoolBalance = await queryBondPipeline(
        chains[getStafiHubChainId()],
        getRTokenDenom(chainId, chains),
        multisigPoolAddress
      );

      let pools = [];
      if (Number(multisigPoolBalance) >= Number(humanToAtomic(willGetAmount))) {
        pools.push({
          poolAddress: multisigPoolAddress,
          amount: humanToAtomic(inputAmount),
        });
      } else {
        const multisigUnbondAmount = Math.floor(
          (Number(inputAmount) * Number(multisigPoolBalance) * 0.99) /
            Number(willGetAmount)
        );

        if (multisigUnbondAmount > 10000) {
          pools.push({
            poolAddress: multisigPoolAddress,
            amount: multisigUnbondAmount + "",
          });

          pools.push({
            poolAddress: icaPoolAddress,
            amount:
              Number(humanToAtomic(inputAmount)) - multisigUnbondAmount + "",
          });
        } else {
          pools.push({
            poolAddress: icaPoolAddress,
            amount: humanToAtomic(inputAmount),
          });
        }
      }

      const txResponse = await sendLiquidityUnbondTx(
        chains[getStafiHubChainId()],
        getRTokenDenom(chainId, chains),
        chainAccount.bech32Address,
        stafiHubAccount.bech32Address,
        pools
      );

      if (txResponse?.code === 0) {
        snackbarUtil.success("Unbond succeed");
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "Unbond",
            {
              sender: stafiHubAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: chainAccount.bech32Address,
              chainId,
            },
            {
              tokenName: getTokenDisplayName(chainId, chains),
              rTokenName: getRTokenDisplayName(chainId, chains),
              unstakeAmount: inputAmount,
              willGetAmount,
              completeTimestamp:
                moment().valueOf() + Number(bondingHours) * 3600 * 1000,
              rTokenDenom: getRTokenDenom(chainId, chains),
            },
            getExplorerUrl(getStafiHubChainId(), chains),
            "Confirmed"
          )
        );
      } else if (txResponse?.code === 1101) {
        snackbarUtil.warning(
          "Insufficient balance of your account, please check!"
        );
      } else if (txResponse?.code === 39) {
        snackbarUtil.warning(
          "The unbond function is temporarily unavailable because the system is being upgraded, please try again later!"
        );
      } else if (txResponse?.code === 20) {
        snackbarUtil.warning(
          "The unbond limit of the pool has been reached in the current era, please wait for the next era!"
        );
      } else if (txResponse?.code === 37) {
        snackbarUtil.warning(
          "The unbond limit of your account has been reached, please wait for your previous unbonding records to end!"
        );
      } else {
        snackbarUtil.warning(
          "Something went wrong, please increase the gas and try again!"
        );
      }
      dispatch(updateTokenBalance(chainId));
      callback && callback(txResponse?.code === 0);
    } catch (err: unknown) {
      // console.log("sendLiquidityUnbondTx err", err);
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
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
    payerAddress: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
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

      if (!payerAddress) {
        snackbarUtil.error(
          "Fee Station account not initialized, please try again later!"
        );
        return;
      }

      dispatch(setIsLoading(true));

      const payerAddressBalanceResult = await queryAccountBalance(
        chains[getStafiHubChainId()],
        getDenom(getStafiHubChainId(), chains),
        payerAddress
      );

      const feeStationBalance = Number(
        atomicToHuman(payerAddressBalanceResult?.amount)
      );

      // console.log("fee station balance: ", feeStationBalance);

      if (isNaN(feeStationBalance) || feeStationBalance < Number(outAmount)) {
        snackbarUtil.error(
          "Insufficient FIS balance of Fee Station, please try again later!"
        );
        return;
      }

      const postData = {
        stafihubAddress: stafiHubAccount.bech32Address,
        symbol: poolInfo.symbol,
        poolAddress: poolInfo.poolAddress,
        inAmount: humanToAtomic(inAmount, poolInfo.decimals),
        outAmount: humanToAtomic(outAmount, 6),
        minOutAmount: humanToAtomic(minOutAmount, 6),
      };
      const postSwapInfoRes = await fetch(
        `${getApiHost()}/feeStation/api/v1/station/swapInfo`,
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
          chains[poolInfo.chainId],
          humanToAtomic(inAmount, poolInfo.decimals),
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
                chainId: poolInfo.chainId,
              },
              {
                inputTokenName: getTokenDisplayName(poolInfo.chainId, chains),
                inputAmount: inAmount,
                outputTokenName: "FIS",
                outputAmount: outAmount,
                uuid,
              },
              getExplorerUrl(getStafiHubChainId(), chains)
            )
          );

          dispatch(setIsLoading(false));

          callback && callback(true);

          dispatch(
            showFeeStationSwapLoadingModal(
              txResponse.transactionHash,
              stafiHubAccount.bech32Address,
              uuid,
              outAmount
            )
          );
        } else {
          snackbarUtil.warning(
            "Something went wrong, please increase the gas and try again!"
          );
        }
      } else if (postSwapInfoResJson.status === "80012") {
        snackbarUtil.error(
          "The latest price has changed, please refresh the page and try again."
        );
      } else {
        snackbarUtil.error(postSwapInfoResJson.message);
      }
    } catch (err: unknown) {
      // console.log("feeStationSwap err", err);
      dispatch(setIsLoading(false));
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
      } else {
        // console.log((err as Error).message);
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const showFeeStationSwapLoadingModal =
  (
    txHash: string,
    stafihubAddress: string,
    uuid: string,
    outAmount: string
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(
        setSwapProgressModalProps({
          visible: true,
          progress: 0,
          txDetail: {
            amount: outAmount,
            symbol: "FIS",
            stafihubAddress: stafihubAddress,
          },
        })
      );

      const MAX_COUNT = 100;
      let timeCount = 0;
      while (timeCount <= MAX_COUNT) {
        if (timeCount % 5 === 0) {
          const getUuidRes = await fetch(
            `${getApiHost()}/feeStation/api/v1/station/swapInfo?uuid=${uuid}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const getUuidResJson = await getUuidRes.json();
          if (
            getUuidResJson.data?.swapStatus === 2 &&
            getUuidResJson.data?.payTxHash
          ) {
            // Success.
            const txDetail = await queryTx(
              chains[getStafiHubChainId()],
              getUuidResJson.data.payTxHash
            );

            const parsedRawLog = JSON.parse(txDetail?.rawLog || "");

            let realAmount = outAmount;

            if (parsedRawLog[0].events) {
              const messageLog = parsedRawLog[0].events.find((event: any) => {
                return event.type === "coin_received";
              });

              const messageLogAttributes = messageLog.attributes;
              const amountAttribute = messageLogAttributes?.find(
                (attribute: any) => attribute.key === "amount"
              );
              const amount = amountAttribute.value.replace("ufis", "");
              realAmount = atomicToHuman(amount);
            }

            dispatch(
              setSwapProgressModalProps({
                progress: 100,
                txDetail: {
                  amount: realAmount,
                  symbol: "FIS",
                  stafihubAddress: stafihubAddress,
                  feeStationPayTxHash: getUuidResJson.data.payTxHash,
                },
              })
            );
            dispatch(
              updateNotice(txHash, "Confirmed", {
                payTxHash: getUuidResJson.data.payTxHash,
                outputAmount: realAmount,
              })
            );
            break;
          } else if (getUuidResJson.data?.swapStatus === 3) {
            dispatch(
              setSwapProgressModalProps({
                visible: false,
              })
            );
            snackbarUtil.error("InAmountNotMatch");
            dispatch(updateNotice(txHash, "Error"));
            break;
          } else if (getUuidResJson.data?.swapStatus === 4) {
            dispatch(
              setSwapProgressModalProps({
                visible: false,
              })
            );
            snackbarUtil.error("StafiAddressNotMatch");
            dispatch(updateNotice(txHash, "Error"));
            break;
          }
        }

        timeCount++;
        dispatch(
          setSwapProgressModalProps({
            progress: Math.min(90, timeCount * 5),
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
    } catch (err: unknown) {
      snackbarUtil.error((err as Error).message);
    }
  };

/**
 * IBC Bridge swap tokens.
 */
export const ibcBridgeSwap =
  (
    isRToken: boolean,
    srcChainId: string,
    dstChainId: string,
    srcChannel: string,
    inputAmount: string,
    dstAddress: string,
    callback: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    // Check dst address.
    if (!checkAddress(dstAddress, getChainAccountPrefix(dstChainId, chains))) {
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

      if (srcChainId === getStafiHubChainId()) {
        if (isRToken) {
          transferDenom = getRTokenDenom(otherChainId, chains);
        } else {
          const ibcChannel = getIBCChannel(
            getState().ibc.ibcChannelStore,
            getDenom(otherChainId, chains),
            srcChannel
          );

          transferDenom = ibcChannel?.ibcDenom;
        }
      } else {
        if (isRToken) {
          const ibcChannel = getIBCChannel(
            getState().ibc.ibcChannelStore,
            getRTokenDenom(otherChainId, chains),
            srcChannel
          );

          transferDenom = ibcChannel?.ibcDenom;
        } else {
          transferDenom = getDenom(otherChainId, chains);
        }
      }

      if (!transferDenom) {
        snackbarUtil.error("Transfer denom info not found");
        return;
      }

      // console.log("transferDenom", transferDenom);

      const txResponse = await sendIBCTransferTx(
        chains[srcChainId],
        srcChainAccount.bech32Address,
        dstAddress,
        humanToAtomic(inputAmount, getChainDecimals(srcChainId, chains)),
        "transfer",
        srcChannel,
        transferDenom
      );

      if (txResponse?.code === 0) {
        await timeout(6000);
        snackbarUtil.success("Swap succeeded");
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "IBC Bridge",
            {
              sender: srcChainAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              address: dstChainAccount.bech32Address,
              chainId: srcChainId,
            },
            {
              tokenName: isRToken
                ? getRTokenDisplayName(otherChainId, chains)
                : getTokenDisplayName(otherChainId, chains),
              amount: inputAmount,
              inputChainName: getChainName(srcChainId, chains),
              outputChainName: getChainName(dstChainId, chains),
            },
            getExplorerUrl(srcChainId, chains),
            "Confirmed"
          )
        );
        callback(true);
      } else {
        snackbarUtil.error(`Swap failure ${txResponse?.rawLog}`);
      }
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
      } else {
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

/**
 * Claim mint rewards.
 */
export const claimMintRewards =
  (
    denom: string,
    cycle: number,
    mintIndexes: number[],
    claimableRewardText: string,
    rewardTokenDenom: string,
    callback: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    // Check wallet connections.
    const stafiHubAccount = getState().app.accounts[getStafiHubChainId()];
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }

    try {
      dispatch(setIsLoading(true));

      // console.log("transferDenom", transferDenom);

      const txResponse = await sendClaimMintRewardTx(
        chains[getStafiHubChainId()],
        stafiHubAccount.bech32Address,
        denom,
        Long.fromInt(cycle),
        mintIndexes.map((index) => Long.fromInt(index))
      );

      if (txResponse?.code === 0) {
        snackbarUtil.success("Claim succeed");
        dispatch(
          addNotice(
            txResponse.transactionHash,
            "Claim Mint Reward",
            {
              sender: stafiHubAccount.bech32Address,
              transactionHash: txResponse.transactionHash,
              chainId: getStafiHubChainId(),
            },
            {
              rewardTokenName: rewardTokenDenom.slice(1).toUpperCase(),
              rewardTokenDenom: rewardTokenDenom,
              claimableRewardText: claimableRewardText,
            },
            getExplorerUrl(getStafiHubChainId(), chains),
            "Confirmed"
          )
        );
        callback(true);
      } else if (txResponse?.code === 5) {
        snackbarUtil.error(
          "Insufficient rewards in the pool. The Foundation will fund the pool. Please try again later."
        );
      } else {
        snackbarUtil.error(`Swap failure ${txResponse?.rawLog}`);
      }
    } catch (err: unknown) {
      if ((err as Error).message === "Request rejected") {
        snackbarUtil.error(`Cancelled`);
      } else if ((err as Error).message === "Extension context invalidated.") {
        snackbarUtil.error(
          "Extension context invalidated, please refresh and retry."
        );
      } else {
        // console.log(err);
        snackbarUtil.error((err as Error).message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

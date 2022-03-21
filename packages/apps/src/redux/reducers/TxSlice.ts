import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STAFIHUB_NETWORK, STAFIHUB_DECIMALS } from "@stafihub/apps-config";
import {
  sendLiquidityUnbondTx,
  sendStakeTx,
  sendChainTokens,
} from "@stafihub/apps-wallet";
import { humanToAtomic } from "@stafihub/apps-util";
import { FeeStationPool } from "@stafihub/types";
import { AppThunk } from "../store";
import {
  connectKeplr,
  setIsLoading,
  updateAllTokenBalance,
  updateTokenBalance,
} from "./AppSlice";
import { timeout } from "../../utils/common";
import snackbarUtil from "../../utils/snackbarUtils";

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

interface SidebarProgressItem {
  name: string;
  // show item status.
  // 0-loading 1-success 2-error
  status: number;
}

interface SidebarProgressProps {
  visible: boolean;
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
      state,
      action: PayloadAction<Partial<SwapProgressModalProps>>
    ) => {
      state.swapProgressModalProps = {
        ...state.swapProgressModalProps,
        ...action.payload,
      };
    },
    setSidebarProgressProps: (
      state,
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

export const stake =
  (
    inputAmount: string,
    stafiHubAddress: string,
    poolAddress: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      const chainAccount =
        getState().app.accounts[getState().app.currentNetwork];
      if (!chainAccount) {
        return;
      }
      const success = await sendStakeTx(
        inputAmount,
        chainAccount.bech32Address,
        stafiHubAddress,
        poolAddress
      );
      dispatch(updateTokenBalance(getState().app.currentNetwork));
      dispatch(
        setSidebarProgressProps({
          visible: true,
          items: [{ name: "Staking", status: 0 }],
        })
      );

      await timeout(3000);

      dispatch(
        setSidebarProgressProps({
          visible: true,
          items: [
            { name: "Staking", status: 1 },
            { name: "Sending", status: 0 },
          ],
        })
      );

      await timeout(3000);

      dispatch(
        setSidebarProgressProps({
          visible: true,
          items: [
            { name: "Staking", status: 1 },
            { name: "Sending", status: 1 },
          ],
        })
      );

      callback && callback(success);
    } catch {}
  };

export const unbond =
  (
    inputAmount: string,
    poolAddress: string,
    callback?: (success: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      const stafiHubAccount = getState().app.accounts[STAFIHUB_NETWORK];
      if (!stafiHubAccount) {
        dispatch(connectKeplr(STAFIHUB_NETWORK));
        return;
      }

      const chainAccount =
        getState().app.accounts[getState().app.currentNetwork];
      if (!chainAccount) {
        return;
      }

      dispatch(setIsLoading(true));

      const success = await sendLiquidityUnbondTx(
        humanToAtomic(inputAmount, STAFIHUB_DECIMALS),
        chainAccount.bech32Address,
        stafiHubAccount.bech32Address,
        poolAddress
      );
      if (success) {
        snackbarUtil.success("Unbond success");
      }
      dispatch(updateTokenBalance(getState().app.currentNetwork));
      callback && callback(success);
    } catch (err: unknown) {
      console.log("sendLiquidityUnbondTx err", err);
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
      const stafiHubAccount = getState().app.accounts[STAFIHUB_NETWORK];
      const chainAccount = getState().app.accounts[poolInfo.chainName];

      if (!stafiHubAccount) {
        dispatch(connectKeplr(STAFIHUB_NETWORK));
        return;
      }

      if (!chainAccount) {
        dispatch(connectKeplr(poolInfo.chainName));
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
          poolInfo.chainName,
          chainAccount.bech32Address,
          poolInfo.poolAddress,
          memo
        );

        if (txResponse?.code === 0) {
          dispatch(setIsLoading(false));
          dispatch(
            setSwapProgressModalProps({
              visible: true,
              progress: 0,
              txDetail: {
                amount: outAmount,
                symbol: poolInfo.symbol,
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
                break;
              } else if (getUuidResJson.data?.swapStatus === 3) {
                dispatch(
                  setSwapProgressModalProps({
                    visible: false,
                  })
                );
                snackbarUtil.error("InAmountNotMatch");
              } else if (getUuidResJson.data?.swapStatus === 4) {
                dispatch(
                  setSwapProgressModalProps({
                    visible: false,
                  })
                );
                snackbarUtil.error("StafiAddressNotMatch");
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
      }
    } catch (err: unknown) {
      console.log("feeStationSwap err", err);
      dispatch(setIsLoading(false));
      snackbarUtil.error((err as Error).message);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export default txSlice.reducer;

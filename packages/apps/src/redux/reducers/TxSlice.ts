import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KeplrAccount } from "@stafihub/types";
import { sendStakeTx, sendLiquidityUnbondTx } from "@stafihub/apps-wallet";
import { AppThunk } from "../store";
import {
  connectKeplr,
  connectKeplrChains,
  updateTokenBalance,
} from "./AppSlice";
import { STAFIHUB_NETWORK } from "@stafihub/apps-config";

type AccountMap = { [key: string]: KeplrAccount };

export interface AppState {
  loading: boolean;
}

const initialState: AppState = {
  loading: false,
};

export const txSlice = createSlice({
  name: "tx",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = txSlice.actions;

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
        chainAccount.bech32Address,
        stafiHubAddress,
        inputAmount,
        poolAddress
      );
      dispatch(updateTokenBalance(getState().app.currentNetwork));
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
      const success = await sendLiquidityUnbondTx(
        chainAccount.bech32Address,
        stafiHubAccount.bech32Address,
        inputAmount,
        poolAddress
      );
      dispatch(updateTokenBalance(getState().app.currentNetwork));
      callback && callback(success);
    } catch {}
  };

export default txSlice.reducer;

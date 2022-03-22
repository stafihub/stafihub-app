import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chains } from "@stafihub/apps-config";
import {
  connectAtomjs,
  getKeplrAccount,
  queryAccountBalance,
} from "@stafihub/apps-wallet";
import { KeplrAccount } from "@stafihub/types";
import * as _ from "lodash";
import {
  NoticeDataType,
  NoticeStatus,
  NoticeTxDetail,
  NoticeType,
} from "../../types/notice";
import { addNoticeInternal, updateNoticeInternal } from "../../utils/notice";
import {
  saveNetworkAllowedFlag,
  saveStorage,
  STORAGE_KEY_SLIPPAGE,
} from "../../utils/storage";
import { AppThunk } from "../store";

type AccountMap = { [key: string]: KeplrAccount | undefined };

export interface AppState {
  isFork: boolean;
  accounts: AccountMap;
  isLoading: boolean;
  slippage: string;
  unreadNoticeFlag: boolean;
}

const initialState: AppState = {
  isFork: false,
  accounts: {},
  isLoading: false,
  slippage: "1",
  unreadNoticeFlag: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsFork: (state, action: PayloadAction<boolean>) => {
      state.isFork = action.payload;
    },
    setAccounts: (state, action: PayloadAction<AccountMap>) => {
      state.accounts = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSlippage: (state, action: PayloadAction<string>) => {
      saveStorage(STORAGE_KEY_SLIPPAGE, action.payload);
      state.slippage = action.payload;
    },
    setUnreadNoticeFlag: (state, action: PayloadAction<boolean>) => {
      state.unreadNoticeFlag = action.payload;
    },
  },
});

export const {
  setIsFork,
  setAccounts,
  setIsLoading,
  setSlippage,
  setUnreadNoticeFlag,
} = appSlice.actions;

export const updateAccounts =
  (network: string, account: KeplrAccount): AppThunk =>
  async (dispatch, getState) => {
    const newAccounts = {
      ...getState().app.accounts,
      [network]: account,
    };
    dispatch(setAccounts(newAccounts));
  };

export const updateMultiAccounts =
  (accountMap: AccountMap): AppThunk =>
  async (dispatch, getState) => {
    const newAccounts = {
      ...getState().app.accounts,
      ...accountMap,
    };
    dispatch(setAccounts(newAccounts));
  };

export const connectKeplr =
  (chainId: string | undefined): AppThunk =>
  async (dispatch, getState) => {
    if (!chainId) {
      return;
    }
    try {
      await connectAtomjs(chainId);
      const accountResult = await getKeplrAccount(chainId);

      if (!accountResult) {
        return;
      }

      const account: KeplrAccount = {
        name: accountResult.name,
        bech32Address: accountResult.bech32Address,
      };
      console.log("account", account);

      const balance = await queryAccountBalance(chainId, account.bech32Address);
      account.balance = balance;

      dispatch(updateAccounts(chainId, account));

      saveNetworkAllowedFlag(chainId);
    } catch (err: unknown) {
      console.log(`connect ${chainId} error`, err);
    }
  };

export const connectKeplrChains =
  (chainIds: string[]): AppThunk =>
  async (dispatch, getState) => {
    if (_.isEmpty(chainIds)) {
      return;
    }
    const requests = chainIds.map((network) => {
      return (async () => {
        try {
          await connectAtomjs(network);
          const accountResult = await getKeplrAccount(network);
          if (!accountResult) {
            return null;
          }

          const account: KeplrAccount = {
            name: accountResult.name,
            bech32Address: accountResult.bech32Address,
          };

          const balance = await queryAccountBalance(
            network,
            account.bech32Address
          );
          account.balance = balance;

          saveNetworkAllowedFlag(network);

          return { network, account };
        } catch (err: unknown) {
          console.log(`connect ${network} error`, err);
          return null;
        }
      })();
    });

    const results = await Promise.all(requests);

    const accountsMap: AccountMap = {};
    results.forEach((result) => {
      if (result) {
        accountsMap[result.network] = result.account;
      }
    });
    dispatch(updateMultiAccounts(accountsMap));
  };

export const updateTokenBalance =
  (network: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const account = getState().app.accounts[network];
      // console.log("account1", account);
      if (!account) {
        return;
      }
      const newAccount = { ...account };
      const balance = await queryAccountBalance(
        network,
        newAccount.bech32Address
      );
      newAccount.balance = balance;

      dispatch(updateAccounts(network, newAccount));
    } catch (err: unknown) {
      console.log(`updateTokenBalance ${network} error`, err);
    }
  };

export const updateAllTokenBalance =
  (): AppThunk => async (dispatch, getState) => {
    const chainIds = _.keys(chains);

    const requests = chainIds.map((chainId) => {
      return (async () => {
        try {
          const account = getState().app.accounts[chainId];
          // console.log("account1", account);
          if (!account) {
            return;
          }
          const newAccount = { ...account };
          const balance = await queryAccountBalance(
            chainId,
            newAccount.bech32Address
          );
          newAccount.balance = balance;

          return { network: chainId, account: newAccount };
        } catch (err: unknown) {
          console.log(`updateTokenBalance ${chainId} error`, err);
          return null;
        }
      })();
    });

    const results = await Promise.all(requests);

    const accountsMap: AccountMap = {};
    results.forEach((result) => {
      if (result) {
        accountsMap[result.network] = result.account;
      }
    });
    dispatch(updateMultiAccounts(accountsMap));
  };

/**
 * Add notice record.
 */
export const addNotice =
  (
    id: string,
    type: NoticeType,
    txDetail: NoticeTxDetail,
    data: NoticeDataType,
    explorerUrl: string,
    status: NoticeStatus = "Pending"
  ): AppThunk =>
  async (dispatch, getState) => {
    addNoticeInternal(id, type, txDetail, data, explorerUrl, status);
    dispatch(setUnreadNoticeFlag(true));
  };

/**
 * Update notice status.
 */
export const updateNotice =
  (id: string, newStatus: NoticeStatus): AppThunk =>
  async (dispatch, getState) => {
    updateNoticeInternal(id, newStatus);
    dispatch(setUnreadNoticeFlag(true));
  };

export default appSlice.reducer;

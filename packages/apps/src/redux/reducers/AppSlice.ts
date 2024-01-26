import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getApiHost,
  getChainDecimals,
  getChainIdFromDenom,
  getRTokenApi2Host,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import {
  connectAtomjs,
  getKeplrAccount,
  queryAccountBalances,
} from "@stafihub/apps-wallet";
import * as _ from "lodash";
import { chains } from "../../config";
import { KeplrAccount, PriceItem } from "../../types/interface";
import {
  NoticeDataType,
  NoticeStatus,
  NoticeTxDetail,
  NoticeType,
} from "../../types/notice";
import { getDenomFromServerTokenType } from "../../utils/common";
import { addNoticeInternal, updateNoticeInternal } from "../../utils/notice";
import snackbarUtil from "../../utils/snackbarUtils";
import {
  clearNetworkAllowedFlag,
  saveNetworkAllowedFlag,
  saveStorage,
  STORAGE_KEY_SLIPPAGE,
} from "../../utils/storage";
import { AppThunk } from "../store";

type AccountMap = { [key: string]: KeplrAccount | undefined };

interface StakeData {
  stakeAmount: string;
  stakeValue: string;
  stakeApy: string;
  mintApy: string;
  rTokenType: number;
  totalApy: string;
}

export type TokenStakeDataStore = {
  [denom in string]?: StakeData;
};

export interface AppState {
  isFork: boolean;
  accounts: AccountMap;
  isLoading: boolean;
  slippage: string;
  unreadNoticeFlag: boolean;
  priceList: PriceItem[];
  latestBlock: number | undefined;
  tokenStakeData: TokenStakeDataStore;
}

const initialState: AppState = {
  isFork: false,
  accounts: {},
  isLoading: false,
  slippage: "1",
  unreadNoticeFlag: false,
  priceList: [],
  latestBlock: undefined,
  tokenStakeData: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsFork: (state: AppState, action: PayloadAction<boolean>) => {
      state.isFork = action.payload;
    },
    setAccounts: (state: AppState, action: PayloadAction<AccountMap>) => {
      state.accounts = action.payload;
    },
    setIsLoading: (state: AppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSlippage: (state: AppState, action: PayloadAction<string>) => {
      saveStorage(STORAGE_KEY_SLIPPAGE, action.payload);
      state.slippage = action.payload;
    },
    setUnreadNoticeFlag: (state: AppState, action: PayloadAction<boolean>) => {
      state.unreadNoticeFlag = action.payload;
    },
    setPriceList: (state: AppState, action: PayloadAction<PriceItem[]>) => {
      state.priceList = action.payload;
    },
    setLatestBlock: (state: AppState, action: PayloadAction<number>) => {
      state.latestBlock = action.payload;
    },
    setTokenStakeData: (
      state: AppState,
      action: PayloadAction<TokenStakeDataStore>
    ) => {
      state.tokenStakeData = action.payload;
    },
  },
});

export const {
  setIsFork,
  setAccounts,
  setIsLoading,
  setSlippage,
  setUnreadNoticeFlag,
  setPriceList,
  setLatestBlock,
  setTokenStakeData,
} = appSlice.actions;

export const updateAccounts =
  (network: string, account: KeplrAccount | undefined): AppThunk =>
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
  (
    chainId: string | undefined,
    callback?: (connected: boolean) => void
  ): AppThunk =>
  async (dispatch, getState) => {
    if (!chainId) {
      return;
    }

    const result = await _connectkeplr(dispatch, chainId);
    callback && callback(!!result);
  };

export const connectKeplrChains =
  (chainIds: string[]): AppThunk =>
  async (dispatch, getState) => {
    if (_.isEmpty(chainIds)) {
      return;
    }
    const requests = chainIds.map((chainId) => {
      return _connectkeplr(dispatch, chainId);
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

const _connectkeplr = async (dispatch: any, chainId: string) => {
  try {
    await connectAtomjs(chains[chainId]);
    const accountResult = await getKeplrAccount(chainId);

    if (!accountResult) {
      return null;
    }

    const account: KeplrAccount = {
      name: accountResult.name,
      isNanoLedger: accountResult.isNanoLedger,
      bech32Address: accountResult.bech32Address,
    };
    // console.log("account", account);

    const balances = await queryAccountBalances(
      chains[chainId],
      account.bech32Address
    );
    account.allBalances = balances;

    dispatch(updateAccounts(chainId, account));

    saveNetworkAllowedFlag(chainId);

    if (chainId === getStafiHubChainId()) {
    }

    return { network: chainId, account };
  } catch (err: unknown) {
    if ((err as Error).message === "Request rejected") {
      snackbarUtil.error("Cancelled");
      clearNetworkAllowedFlag(chainId);
    }
    console.log(`connect ${chainId} error`, err);
    return null;
  }
};

export const disconnectKeplr =
  (chainId: string | undefined): AppThunk =>
  async (dispatch, getState) => {
    if (!chainId) {
      return;
    }

    dispatch(updateAccounts(chainId, undefined));
    clearNetworkAllowedFlag(chainId);
  };

export const updateTokenBalance =
  (chainId: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const account = getState().app.accounts[chainId];
      if (!account) {
        return;
      }
      const newAccount = { ...account };
      const balances = await queryAccountBalances(
        chains[chainId],
        newAccount.bech32Address
      );
      newAccount.allBalances = balances;

      // Prevent disconnect conflict.
      if (!getState().app.accounts[chainId]) {
        return;
      }

      dispatch(updateAccounts(chainId, newAccount));
    } catch (err: unknown) {
      // console.log(`updateTokenBalance ${chainId} error`, err);
    }
  };

export const updateAllTokenBalance =
  (): AppThunk => async (dispatch, getState) => {
    const chainIds = _.keys(chains);

    const requests = chainIds.map((chainId) => {
      return (async () => {
        try {
          const account = getState().app.accounts[chainId];
          if (!account) {
            return;
          }
          const newAccount = { ...account };
          const balances = await queryAccountBalances(
            chains[chainId],
            newAccount.bech32Address
          );
          newAccount.allBalances = balances;

          // Prevent disconnect conflict.
          if (
            !getState().app.accounts[chainId] ||
            getState().app.accounts[chainId]?.bech32Address !==
              account.bech32Address
          ) {
            return;
          }
          return { network: chainId, account: newAccount };
        } catch (err: unknown) {
          // console.log(`updateTokenBalance ${chainId} error`, err);
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
  (
    id: string,
    newStatus: NoticeStatus,
    newData?: Partial<NoticeDataType>
  ): AppThunk =>
  async (dispatch, getState) => {
    updateNoticeInternal(id, newStatus, newData);
    dispatch(setUnreadNoticeFlag(true));
  };

export const updatePriceList = (): AppThunk => async (dispatch, getState) => {
  fetch(`${getApiHost()}/rtokenInfo/webapi/priceList`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((resJson) => {
      if (resJson.status === "80000") {
        dispatch(setPriceList(resJson.data.priceList || []));
      }
    })
    .catch((err: Error) => {});
};

export const updateTokenStakeData =
  (): AppThunk => async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${getRTokenApi2Host()}/stafi/webapi/rtoken/allStakeValueList`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resJson = await response.json();
      if (resJson && resJson.status === "80000") {
        const { stakeValueList, totalStakeValue } = resJson.data;
        if (!Array.isArray(stakeValueList) || stakeValueList.length === 0)
          return;

        let stakeDataStore: TokenStakeDataStore = {};
        stakeValueList.forEach((data: StakeData) => {
          const denom = getDenomFromServerTokenType(data.rTokenType);
          if (!denom) {
            return;
          }
          const chainId = getChainIdFromDenom(denom, chains);
          if (!chainId) {
            return;
          }
          const decimals = getChainDecimals(chainId, chains);
          const mintApy = new Number(data.mintApy)
            .toLocaleString()
            .replaceAll(",", "");
          stakeDataStore[denom] = {
            ...data,
            mintApy,
            stakeAmount: atomicToHuman(data.stakeAmount, decimals),
          };
        });

        dispatch(setTokenStakeData(stakeDataStore));
      }
    } catch (err) {
      console.error(err);
    }
  };

export default appSlice.reducer;

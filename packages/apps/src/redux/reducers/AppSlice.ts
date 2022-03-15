import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  connectAtomjs,
  getKeplrAccount,
  queryAccountBalance,
} from "@stafihub/apps-wallet";
import { KeplrAccount } from "@stafihub/types";
import * as _ from "lodash";
import { saveNetworkAllowedFlag } from "../../utils/storage";
import { AppThunk } from "../store";

type AccountMap = { [key: string]: KeplrAccount | undefined };

export interface AppState {
  isFork: boolean;
  currentNetwork: string;
  accounts: AccountMap;
}

const initialState: AppState = {
  isFork: false,
  currentNetwork: "stafiHub",
  accounts: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsFork: (state, action: PayloadAction<boolean>) => {
      state.isFork = action.payload;
    },
    setCurrentNetwork: (state, action: PayloadAction<string>) => {
      state.currentNetwork = action.payload;
    },
    setAccounts: (state, action: PayloadAction<AccountMap>) => {
      state.accounts = action.payload;
    },
  },
});

export const { setIsFork, setCurrentNetwork, setAccounts } = appSlice.actions;

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
  (network: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const enableResult = await connectAtomjs(network);
      console.log("enableResult", enableResult);
      const accountResult = await getKeplrAccount(network);

      if (!accountResult) {
        return;
      }

      const account: KeplrAccount = {
        name: accountResult.name,
        bech32Address: accountResult.bech32Address,
      };
      console.log("account", account);

      const balance = await queryAccountBalance(network, account.bech32Address);
      account.balance = balance;

      dispatch(updateAccounts(network, account));

      saveNetworkAllowedFlag(network);
    } catch (err: unknown) {
      console.log(`connect ${network} error`, err);
    }
  };

export const connectKeplrChains =
  (networks: string[]): AppThunk =>
  async (dispatch, getState) => {
    if (_.isEmpty(networks)) {
      return;
    }
    const requests = networks.map((network) => {
      return (async () => {
        try {
          const enableResult = await connectAtomjs(network);
          console.log("enableResult", enableResult);
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
      console.log("account1", account);
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

export default appSlice.reducer;

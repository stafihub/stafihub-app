import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CosmosNetworkParams } from "@stafihub/types";

export interface AppState {
  currentNetwork: CosmosNetworkParams | null;
}

const initialState: AppState = {
  currentNetwork: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentNetwork: (state, action: PayloadAction<CosmosNetworkParams>) => {
      state.currentNetwork = action.payload;
    },
  },
});

export const { setCurrentNetwork } = appSlice.actions;

/**
// export const connectPolkadotJs =
//   (api: ApiPromise | null, showSelectAccountModal: boolean = false): AppThunk =>
//   async (dispatch, getState) => {
//     if (!api) {
//       return;
//     }

//     try {
//       const extensions = await web3Enable(WEB3_ENABLE_NAME);
//       if (extensions.length === 0) {
//         // no extension installed, or the user did not accept the authorization
//         // in this case we should inform the use and give a link to the extension
//         return;
//       }

//       const newAccounts = await web3Accounts();
//       const accounts: InjectedAccountWithMeta[] = newAccounts?.map(
//         ({ address, ...other }) => ({
//           ...other,
//           address: convertToSS58(address, 20),
//         })
//       );

//       // Check local selected account.
//       const savedStafiAddress = getStorage(STORAGE_KEY_STAFI_ADDRESS);
//       let matchAccount = accounts.find((account) => {
//         return account.address === savedStafiAddress;
//       });

//       // Use first account as default.
//       if (!matchAccount) {
//         if (accounts.length > 0) {
//           matchAccount = accounts[0];
//         }
//       }

//       if (matchAccount) {
//         dispatch(updateStafiAddress(api, savedStafiAddress));
//       }

//       for (let account of accounts) {
//         const result: any = await api.query.system.account(account.address);
//         if (result) {
//           let fisFreeBalance = convertNumberToHuman(
//             result.data.free.toString(),
//             TokenSymbol.Fis
//           );
//           account.balance = fisFreeBalance.toString();
//         }
//       }

//       dispatch(setAccounts(accounts));

//       if (showSelectAccountModal) {
//         dispatch(setSelectAccountModalVisible(true));
//       }

//       saveStorage(STORAGE_KEY_WALLET_ALLOWED, "1");
//     } catch (err: unknown) {
//       console.log("connect extension error:", err);
//     }
//   };
*/

export default appSlice.reducer;

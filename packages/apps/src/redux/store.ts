import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./reducers/AppSlice";
import txReducer from "./reducers/TxSlice";
import chainReducer from "./reducers/ChainSlice";
import ibcRecuder from "./reducers/IBCSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    tx: txReducer,
    chain: chainReducer,
    ibc: ibcRecuder,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormatMintRewardAct } from "../../types/interface";
import { AppThunk } from "../store";

// Store Format: { <uratom>:FormatMintRewardAct[] }
export type ActDetailStore = {
  [key: string]: FormatMintRewardAct[] | undefined;
};

export interface RPoolState {
  actDetailStore: ActDetailStore;
}

const initialState: RPoolState = {
  actDetailStore: {},
};

export const rPoolSlice = createSlice({
  name: "rPool",
  initialState,
  reducers: {
    setActDetailStore: (
      state: RPoolState,
      action: PayloadAction<ActDetailStore>
    ) => {
      state.actDetailStore = action.payload;
    },
  },
});

export const { setActDetailStore } = rPoolSlice.actions;

export default rPoolSlice.reducer;

export const updateSingleActDetailStore =
  (rTokenDenom: string, value: FormatMintRewardAct[]): AppThunk =>
  async (dispatch, getState) => {
    const newStore = {
      ...getState().rPool.actDetailStore,
      [rTokenDenom]: value,
    };
    dispatch(setActDetailStore(newStore));
  };

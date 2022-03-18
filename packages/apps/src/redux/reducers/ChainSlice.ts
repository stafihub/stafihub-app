import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChainStakeStatus } from "@stafihub/types";
import { AppThunk } from "../store";

// { denom:ChainStakeStatus }
type ChainStakeStatusMap = { [key: string]: ChainStakeStatus | undefined };

export interface ChainState {
  chainStakeStatusMap: ChainStakeStatusMap;
}

const initialState: ChainState = {
  chainStakeStatusMap: {},
};

export const chainSlice = createSlice({
  name: "chain",
  initialState,
  reducers: {
    setChainStakeStatusMap: (
      state,
      action: PayloadAction<ChainStakeStatusMap>
    ) => {
      state.chainStakeStatusMap = action.payload;
    },
  },
});

export const { setChainStakeStatusMap: setChainTokenStatusMap } =
  chainSlice.actions;

export const updateChainStakeStatus =
  (denom: string, stakeStatus: ChainStakeStatus): AppThunk =>
  async (dispatch, getState) => {
    const newMap = {
      ...getState().chain.chainStakeStatusMap,
      [denom]: stakeStatus,
    };
    dispatch(setChainTokenStatusMap(newMap));
  };

export default chainSlice.reducer;

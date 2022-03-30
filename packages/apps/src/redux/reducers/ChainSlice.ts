import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRTokenDenom } from "@stafihub/apps-config";
import { queryChainEra } from "@stafihub/apps-wallet";
import { ChainStakeStatus } from "@stafihub/types";
import { AppThunk } from "../store";

// { denom:ChainStakeStatus }
type ChainStakeStatusMap = { [key: string]: ChainStakeStatus | undefined };

type ChainEraMap = { [key: string]: number };

export interface ChainState {
  chainStakeStatusMap: ChainStakeStatusMap;
  chainEras: ChainEraMap;
}

const initialState: ChainState = {
  chainStakeStatusMap: {},
  chainEras: {},
};

export const chainSlice = createSlice({
  name: "chain",
  initialState,
  reducers: {
    setChainStakeStatusMap: (
      state: ChainState,
      action: PayloadAction<ChainStakeStatusMap>
    ) => {
      state.chainStakeStatusMap = action.payload;
    },
    setChainEras: (state: ChainState, action: PayloadAction<ChainEraMap>) => {
      state.chainEras = action.payload;
    },
  },
});

export const { setChainStakeStatusMap, setChainEras } = chainSlice.actions;

export default chainSlice.reducer;

export const updateChainStakeStatus =
  (chainId: string, stakeStatus: ChainStakeStatus): AppThunk =>
  async (dispatch, getState) => {
    const newMap = {
      ...getState().chain.chainStakeStatusMap,
      [chainId]: stakeStatus,
    };
    dispatch(setChainStakeStatusMap(newMap));
  };

export const updateChainEras =
  (chainIds: string[]): AppThunk =>
  async (dispatch, getState) => {
    const requests = chainIds.map((chainId) => {
      return (async () => {
        const era = await queryChainEra(getRTokenDenom(chainId));

        return { chainId, era: era?.era || 0 };
      })();
    });

    const results = await Promise.all(requests);

    const eraMap: ChainEraMap = {};
    results.forEach((result) => {
      eraMap[result.chainId] = result.era;
    });

    const newChainEras = {
      ...getState().chain.chainEras,
      ...eraMap,
    };
    dispatch(setChainEras(newChainEras));
  };

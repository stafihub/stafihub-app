import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getApiHost,
  getRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { queryChainEra } from "@stafihub/apps-wallet";
import { chains } from "../../config";
import { ChainStakeStatus, RTokenRewardData } from "../../types/interface";
import { AppThunk } from "../store";

// { chainId:ChainStakeStatus }
type ChainStakeStatusMap = { [key: string]: ChainStakeStatus | undefined };

type ChainEraMap = { [key: string]: number };

// { uratom:ChainStakeStatus }
type RTokenRewardStore = { [key: string]: RTokenRewardData | undefined };

export interface ChainState {
  chainStakeStatusMap: ChainStakeStatusMap;
  chainEras: ChainEraMap;
  rTokenRewardStore: RTokenRewardStore;
}

const initialState: ChainState = {
  chainStakeStatusMap: {},
  chainEras: {},
  rTokenRewardStore: {},
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
    setRTokenRewardStore: (
      state: ChainState,
      action: PayloadAction<RTokenRewardStore>
    ) => {
      state.rTokenRewardStore = action.payload;
    },
  },
});

export const { setChainStakeStatusMap, setChainEras, setRTokenRewardStore } =
  chainSlice.actions;

export default chainSlice.reducer;

export const updateChainStakeStatus =
  (chainId: string, stakeStatus: ChainStakeStatus | undefined): AppThunk =>
  async (dispatch, getState) => {
    const newMap = {
      ...getState().chain.chainStakeStatusMap,
      [chainId]: stakeStatus,
    };
    dispatch(setChainStakeStatusMap(newMap));
  };

/**
 * Query rToken eras in StaFiHub chain.
 */
export const updateChainEras =
  (chainIds: string[]): AppThunk =>
  async (dispatch, getState) => {
    const requests = chainIds.map((chainId) => {
      return (async () => {
        const era = await queryChainEra(
          chains[getStafiHubChainId()],
          getRTokenDenom(chainId, chains)
        );

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

/**
 * Query rToken rewards.
 * @param denom uratom
 */
export const updateRTokenReward =
  (denom: string): AppThunk =>
  async (dispatch, getState) => {
    const stafiHubAccount = getState().app.accounts[getStafiHubChainId()];
    if (!stafiHubAccount) {
      const rewardStore: RTokenRewardStore = {};
      rewardStore[denom] = undefined;
      const newRewardStore = {
        ...getState().chain.rTokenRewardStore,
        ...rewardStore,
      };
      dispatch(setRTokenRewardStore(newRewardStore));
      return;
    }

    const res = await fetch(`${getApiHost()}/rtokenInfo/webapi/rtoken/reward`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chainType: 80,
        userAddress: stafiHubAccount.bech32Address,
        rTokenDenom: denom,
        pageIndex: 0,
        pageCount: 10,
      }),
    });

    const resJson = await res.json();
    const rewardStore: RTokenRewardStore = {};

    if (resJson.status === "80000" && resJson.data) {
      rewardStore[denom] = resJson.data;
    }

    const newRewardStore = {
      ...getState().chain.rTokenRewardStore,
      ...rewardStore,
    };
    dispatch(setRTokenRewardStore(newRewardStore));
  };

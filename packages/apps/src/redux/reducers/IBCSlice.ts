import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { atomicToHuman } from "@stafihub/apps-util";
import { queryDenomTrace } from "@stafihub/apps-wallet";
import { DenomTrace } from "@stafihub/types";
import { chains } from "../../config";
import { Coin } from "../../types/interface";
import { AppThunk } from "../store";

export interface IBCChannel {
  ibcDenom: string;
  denomTrace?: DenomTrace;
  active?: boolean;
}

// Store Format: { <uatom>:IBCChannel[] }
export type IBCChannelStore = { [key: string]: IBCChannel[] | undefined };

export interface IBCState {
  ibcChannelStore: IBCChannelStore;
}

const initialState: IBCState = {
  ibcChannelStore: {},
};

export const ibcSlice = createSlice({
  name: "ibc",
  initialState,
  reducers: {
    setIBCChannelStore: (
      state: IBCState,
      action: PayloadAction<IBCChannelStore>
    ) => {
      state.ibcChannelStore = action.payload;
    },
  },
});

export const { setIBCChannelStore } = ibcSlice.actions;

export default ibcSlice.reducer;

export const updateChainIBCChannels =
  (chainId: string, balances: Coin[] | undefined): AppThunk =>
  async (dispatch, getState) => {
    if (!balances) {
      dispatch(setIBCChannelStore({}));
      return;
    }
    const requests = balances.map((coin) =>
      (async () => {
        if (coin.denom.startsWith("ibc/")) {
          const denomTraceRes = await queryDenomTrace(
            chains[chainId],
            coin.denom
          );
          // console.log("xxx", coin.denom, chainId, denomTraceRes);

          if (denomTraceRes && denomTraceRes.denomTrace) {
            return {
              ibcDenom: coin.denom,
              denomTrace: denomTraceRes.denomTrace,
            } as IBCChannel;
          }
          return null;
        } else {
          return null;
        }
      })()
    );

    const results = await Promise.all(requests);
    const ibcChannelStore: IBCChannelStore = {};

    results.forEach((result) => {
      if (result && result.denomTrace) {
        const oldArr = ibcChannelStore[result.denomTrace.baseDenom] || [];
        const newArr = [...oldArr, result];
        ibcChannelStore[result.denomTrace.baseDenom] = newArr;
      }
    });

    // console.log("ibcChannelStore", ibcChannelStore);

    dispatch(
      setIBCChannelStore({
        ...getState().ibc.ibcChannelStore,
        ...ibcChannelStore,
      })
    );
  };

/**
 * Get IBC Token balance in StaFiHub chain.
 * @param denom uatom
 * @param channelName channel-0
 */
export function getIBCBalanceInChannel(
  balances: Coin[] | undefined,
  ibcChannelStore: IBCChannelStore,
  denom: string,
  channelName: string
): string {
  if (!balances) {
    return "--";
  }

  // console.log("ibcChannelStore", ibcChannelStore);

  const ibcChannelArr = ibcChannelStore[denom];
  if (!ibcChannelArr) {
    return "0";
  }

  const matchedChannel = ibcChannelArr.find((item) => {
    return (
      item.denomTrace &&
      item.denomTrace.path.split("/") &&
      item.denomTrace.path.split("/").length >= 2 &&
      item.denomTrace.path.split("/")[1] === channelName
    );
  });

  if (!matchedChannel) {
    return "0";
  }

  const matchedBalance = balances.find(
    (item) => item.denom === matchedChannel.ibcDenom
  );
  if (!matchedBalance) {
    return "0";
  }

  return atomicToHuman(matchedBalance.amount);
}

/**
 * Get IBC Token Data in StaFiHub chain.
 * @param denom uatom
 * @param channelName channel-0
 */
export function getIBCChannel(
  ibcChannelStore: IBCChannelStore,
  denom: string,
  channelName: string
): IBCChannel | undefined {
  const ibcChannelArr = ibcChannelStore[denom];
  if (!ibcChannelArr) {
    return undefined;
  }

  const matchedChannel = ibcChannelArr.find((item) => {
    return (
      item.denomTrace &&
      item.denomTrace.path.split("/") &&
      item.denomTrace.path.split("/").length >= 2 &&
      item.denomTrace.path.split("/")[1] === channelName
    );
  });

  return matchedChannel;
}

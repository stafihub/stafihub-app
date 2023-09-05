//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgRemoveLiquidity, MsgToggleProviderSwitch, MsgAddProvider, MsgRmProvider, MsgAddPoolCreator, MsgRmPoolCreator } from "./tx";
export interface AminoMsgCreatePool extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgCreatePool";
  value: {
    creator: string;
    token0: {
      denom: string;
      amount: string;
    };
    token1: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgAddLiquidity extends AminoMsg {
  type: "rdex/AddLiquidity";
  value: {
    creator: string;
    swapPoolIndex: number;
    token0: {
      denom: string;
      amount: string;
    };
    token1: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgSwap extends AminoMsg {
  type: "rdex/Swap";
  value: {
    creator: string;
    swapPoolIndex: number;
    inputToken: {
      denom: string;
      amount: string;
    };
    minOutToken: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgRemoveLiquidity extends AminoMsg {
  type: "rdex/RemoveLiquidity";
  value: {
    creator: string;
    swapPoolIndex: number;
    rmUnit: string;
    swapUnit: string;
    minOutToken0: {
      denom: string;
      amount: string;
    };
    minOutToken1: {
      denom: string;
      amount: string;
    };
    inputTokenDenom: string;
  };
}
export interface AminoMsgToggleProviderSwitch extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgToggleProviderSwitch";
  value: {
    creator: string;
  };
}
export interface AminoMsgAddProvider extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgAddProvider";
  value: {
    creator: string;
    userAddress: string;
  };
}
export interface AminoMsgRmProvider extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgRmProvider";
  value: {
    creator: string;
    userAddress: string;
  };
}
export interface AminoMsgAddPoolCreator extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgAddPoolCreator";
  value: {
    creator: string;
    userAddress: string;
  };
}
export interface AminoMsgRmPoolCreator extends AminoMsg {
  type: "/stafihub.stafihub.rdex.MsgRmPoolCreator";
  value: {
    creator: string;
    userAddress: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.rdex.MsgCreatePool": {
    aminoType: "/stafihub.stafihub.rdex.MsgCreatePool",
    toAmino: ({
      creator,
      token0,
      token1
    }: MsgCreatePool): AminoMsgCreatePool["value"] => {
      return {
        creator,
        token0: {
          denom: token0.denom,
          amount: Long.fromValue(token0.amount).toString()
        },
        token1: {
          denom: token1.denom,
          amount: Long.fromValue(token1.amount).toString()
        }
      };
    },
    fromAmino: ({
      creator,
      token0,
      token1
    }: AminoMsgCreatePool["value"]): MsgCreatePool => {
      return {
        creator,
        token0: {
          denom: token0.denom,
          amount: token0.amount
        },
        token1: {
          denom: token1.denom,
          amount: token1.amount
        }
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgAddLiquidity": {
    aminoType: "rdex/AddLiquidity",
    toAmino: ({
      creator,
      swapPoolIndex,
      token0,
      token1
    }: MsgAddLiquidity): AminoMsgAddLiquidity["value"] => {
      return {
        creator,
        swapPoolIndex,
        token0: {
          denom: token0.denom,
          amount: Long.fromValue(token0.amount).toString()
        },
        token1: {
          denom: token1.denom,
          amount: Long.fromValue(token1.amount).toString()
        }
      };
    },
    fromAmino: ({
      creator,
      swapPoolIndex,
      token0,
      token1
    }: AminoMsgAddLiquidity["value"]): MsgAddLiquidity => {
      return {
        creator,
        swapPoolIndex,
        token0: {
          denom: token0.denom,
          amount: token0.amount
        },
        token1: {
          denom: token1.denom,
          amount: token1.amount
        }
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgSwap": {
    aminoType: "rdex/Swap",
    toAmino: ({
      creator,
      swapPoolIndex,
      inputToken,
      minOutToken
    }: MsgSwap): AminoMsgSwap["value"] => {
      return {
        creator,
        swapPoolIndex,
        inputToken: {
          denom: inputToken.denom,
          amount: Long.fromValue(inputToken.amount).toString()
        },
        minOutToken: {
          denom: minOutToken.denom,
          amount: Long.fromValue(minOutToken.amount).toString()
        }
      };
    },
    fromAmino: ({
      creator,
      swapPoolIndex,
      inputToken,
      minOutToken
    }: AminoMsgSwap["value"]): MsgSwap => {
      return {
        creator,
        swapPoolIndex,
        inputToken: {
          denom: inputToken.denom,
          amount: inputToken.amount
        },
        minOutToken: {
          denom: minOutToken.denom,
          amount: minOutToken.amount
        }
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgRemoveLiquidity": {
    aminoType: "rdex/RemoveLiquidity",
    toAmino: ({
      creator,
      swapPoolIndex,
      rmUnit,
      swapUnit,
      minOutToken0,
      minOutToken1,
      inputTokenDenom
    }: MsgRemoveLiquidity): AminoMsgRemoveLiquidity["value"] => {
      return {
        creator,
        swapPoolIndex,
        rmUnit,
        swapUnit,
        minOutToken0: {
          denom: minOutToken0.denom,
          amount: Long.fromValue(minOutToken0.amount).toString()
        },
        minOutToken1: {
          denom: minOutToken1.denom,
          amount: Long.fromValue(minOutToken1.amount).toString()
        },
        inputTokenDenom
      };
    },
    fromAmino: ({
      creator,
      swapPoolIndex,
      rmUnit,
      swapUnit,
      minOutToken0,
      minOutToken1,
      inputTokenDenom
    }: AminoMsgRemoveLiquidity["value"]): MsgRemoveLiquidity => {
      return {
        creator,
        swapPoolIndex,
        rmUnit,
        swapUnit,
        minOutToken0: {
          denom: minOutToken0.denom,
          amount: minOutToken0.amount
        },
        minOutToken1: {
          denom: minOutToken1.denom,
          amount: minOutToken1.amount
        },
        inputTokenDenom
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgToggleProviderSwitch": {
    aminoType: "/stafihub.stafihub.rdex.MsgToggleProviderSwitch",
    toAmino: ({
      creator
    }: MsgToggleProviderSwitch): AminoMsgToggleProviderSwitch["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgToggleProviderSwitch["value"]): MsgToggleProviderSwitch => {
      return {
        creator
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgAddProvider": {
    aminoType: "/stafihub.stafihub.rdex.MsgAddProvider",
    toAmino: ({
      creator,
      userAddress
    }: MsgAddProvider): AminoMsgAddProvider["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgAddProvider["value"]): MsgAddProvider => {
      return {
        creator,
        userAddress
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgRmProvider": {
    aminoType: "/stafihub.stafihub.rdex.MsgRmProvider",
    toAmino: ({
      creator,
      userAddress
    }: MsgRmProvider): AminoMsgRmProvider["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgRmProvider["value"]): MsgRmProvider => {
      return {
        creator,
        userAddress
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgAddPoolCreator": {
    aminoType: "/stafihub.stafihub.rdex.MsgAddPoolCreator",
    toAmino: ({
      creator,
      userAddress
    }: MsgAddPoolCreator): AminoMsgAddPoolCreator["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgAddPoolCreator["value"]): MsgAddPoolCreator => {
      return {
        creator,
        userAddress
      };
    }
  },
  "/stafihub.stafihub.rdex.MsgRmPoolCreator": {
    aminoType: "/stafihub.stafihub.rdex.MsgRmPoolCreator",
    toAmino: ({
      creator,
      userAddress
    }: MsgRmPoolCreator): AminoMsgRmPoolCreator["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgRmPoolCreator["value"]): MsgRmPoolCreator => {
      return {
        creator,
        userAddress
      };
    }
  }
};
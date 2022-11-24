import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgRemoveLiquidity, MsgToggleProviderSwitch, MsgAddProvider, MsgRmProvider, MsgAddPoolCreator, MsgRmPoolCreator } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.rdex.MsgCreatePool", MsgCreatePool], ["/stafihub.stafihub.rdex.MsgAddLiquidity", MsgAddLiquidity], ["/stafihub.stafihub.rdex.MsgSwap", MsgSwap], ["/stafihub.stafihub.rdex.MsgRemoveLiquidity", MsgRemoveLiquidity], ["/stafihub.stafihub.rdex.MsgToggleProviderSwitch", MsgToggleProviderSwitch], ["/stafihub.stafihub.rdex.MsgAddProvider", MsgAddProvider], ["/stafihub.stafihub.rdex.MsgRmProvider", MsgRmProvider], ["/stafihub.stafihub.rdex.MsgAddPoolCreator", MsgAddPoolCreator], ["/stafihub.stafihub.rdex.MsgRmPoolCreator", MsgRmPoolCreator]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },

    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddLiquidity",
        value: MsgAddLiquidity.encode(value).finish()
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },

    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.encode(value).finish()
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgToggleProviderSwitch",
        value: MsgToggleProviderSwitch.encode(value).finish()
      };
    },

    addProvider(value: MsgAddProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddProvider",
        value: MsgAddProvider.encode(value).finish()
      };
    },

    rmProvider(value: MsgRmProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmProvider",
        value: MsgRmProvider.encode(value).finish()
      };
    },

    addPoolCreator(value: MsgAddPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddPoolCreator",
        value: MsgAddPoolCreator.encode(value).finish()
      };
    },

    rmPoolCreator(value: MsgRmPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmPoolCreator",
        value: MsgRmPoolCreator.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgCreatePool",
        value
      };
    },

    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddLiquidity",
        value
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgSwap",
        value
      };
    },

    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRemoveLiquidity",
        value
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgToggleProviderSwitch",
        value
      };
    },

    addProvider(value: MsgAddProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddProvider",
        value
      };
    },

    rmProvider(value: MsgRmProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmProvider",
        value
      };
    },

    addPoolCreator(value: MsgAddPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddPoolCreator",
        value
      };
    },

    rmPoolCreator(value: MsgRmPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmPoolCreator",
        value
      };
    }

  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },

    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddLiquidity",
        value: MsgAddLiquidity.fromPartial(value)
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },

    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.fromPartial(value)
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgToggleProviderSwitch",
        value: MsgToggleProviderSwitch.fromPartial(value)
      };
    },

    addProvider(value: MsgAddProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddProvider",
        value: MsgAddProvider.fromPartial(value)
      };
    },

    rmProvider(value: MsgRmProvider) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmProvider",
        value: MsgRmProvider.fromPartial(value)
      };
    },

    addPoolCreator(value: MsgAddPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgAddPoolCreator",
        value: MsgAddPoolCreator.fromPartial(value)
      };
    },

    rmPoolCreator(value: MsgRmPoolCreator) {
      return {
        typeUrl: "/stafihub.stafihub.rdex.MsgRmPoolCreator",
        value: MsgRmPoolCreator.fromPartial(value)
      };
    }

  }
};
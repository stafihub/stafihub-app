import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInitRValidator, MsgSetCycleSeconds, MsgSetShuffleSeconds, MsgAddRValidator, MsgRmRValidator } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.rvalidator.MsgInitRValidator", MsgInitRValidator], ["/stafihub.stafihub.rvalidator.MsgSetCycleSeconds", MsgSetCycleSeconds], ["/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds", MsgSetShuffleSeconds], ["/stafihub.stafihub.rvalidator.MsgAddRValidator", MsgAddRValidator], ["/stafihub.stafihub.rvalidator.MsgRmRValidator", MsgRmRValidator]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    initRValidator(value: MsgInitRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgInitRValidator",
        value: MsgInitRValidator.encode(value).finish()
      };
    },

    setCycleSeconds(value: MsgSetCycleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds",
        value: MsgSetCycleSeconds.encode(value).finish()
      };
    },

    setShuffleSeconds(value: MsgSetShuffleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds",
        value: MsgSetShuffleSeconds.encode(value).finish()
      };
    },

    addRValidator(value: MsgAddRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgAddRValidator",
        value: MsgAddRValidator.encode(value).finish()
      };
    },

    rmRValidator(value: MsgRmRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgRmRValidator",
        value: MsgRmRValidator.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    initRValidator(value: MsgInitRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgInitRValidator",
        value
      };
    },

    setCycleSeconds(value: MsgSetCycleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds",
        value
      };
    },

    setShuffleSeconds(value: MsgSetShuffleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds",
        value
      };
    },

    addRValidator(value: MsgAddRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgAddRValidator",
        value
      };
    },

    rmRValidator(value: MsgRmRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgRmRValidator",
        value
      };
    }

  },
  fromPartial: {
    initRValidator(value: MsgInitRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgInitRValidator",
        value: MsgInitRValidator.fromPartial(value)
      };
    },

    setCycleSeconds(value: MsgSetCycleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds",
        value: MsgSetCycleSeconds.fromPartial(value)
      };
    },

    setShuffleSeconds(value: MsgSetShuffleSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds",
        value: MsgSetShuffleSeconds.fromPartial(value)
      };
    },

    addRValidator(value: MsgAddRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgAddRValidator",
        value: MsgAddRValidator.fromPartial(value)
      };
    },

    rmRValidator(value: MsgRmRValidator) {
      return {
        typeUrl: "/stafihub.stafihub.rvalidator.MsgRmRValidator",
        value: MsgRmRValidator.fromPartial(value)
      };
    }

  }
};
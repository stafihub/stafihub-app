import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgUnbondValidator, MsgCancelUnbondingDelegation, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate], ["/cosmos.staking.v1beta1.MsgUnbondValidator", MsgUnbondValidator], ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", MsgCancelUnbondingDelegation], ["/cosmos.staking.v1beta1.MsgTokenizeShares", MsgTokenizeShares], ["/cosmos.staking.v1beta1.MsgRedeemTokensForShares", MsgRedeemTokensForShares], ["/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord", MsgTransferTokenizeShareRecord], ["/cosmos.staking.v1beta1.MsgDisableTokenizeShares", MsgDisableTokenizeShares], ["/cosmos.staking.v1beta1.MsgEnableTokenizeShares", MsgEnableTokenizeShares], ["/cosmos.staking.v1beta1.MsgValidatorBond", MsgValidatorBond]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.encode(value).finish()
      };
    },

    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.encode(value).finish()
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },

    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.encode(value).finish()
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    },

    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.encode(value).finish()
      };
    },

    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.encode(value).finish()
      };
    },

    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.encode(value).finish()
      };
    },

    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.encode(value).finish()
      };
    },

    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.encode(value).finish()
      };
    },

    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.encode(value).finish()
      };
    },

    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.encode(value).finish()
      };
    },

    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value
      };
    },

    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value
      };
    },

    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value
      };
    },

    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value
      };
    },

    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value
      };
    },

    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value
      };
    },

    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value
      };
    },

    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value
      };
    },

    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value
      };
    },

    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value
      };
    },

    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value
      };
    }

  },
  fromPartial: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromPartial(value)
      };
    },

    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromPartial(value)
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },

    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromPartial(value)
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    },

    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.fromPartial(value)
      };
    },

    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.fromPartial(value)
      };
    },

    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.fromPartial(value)
      };
    },

    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.fromPartial(value)
      };
    },

    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.fromPartial(value)
      };
    },

    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.fromPartial(value)
      };
    },

    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.fromPartial(value)
      };
    },

    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.fromPartial(value)
      };
    }

  }
};
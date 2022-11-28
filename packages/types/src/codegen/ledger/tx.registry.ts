//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetEraUnbondLimit, MsgSetPoolDetail, MsgSetLeastBond, MsgClearCurrentEraSnapShots, MsgSetStakingRewardCommission, MsgSetProtocolFeeReceiver, MsgSetUnbondRelayFee, MsgLiquidityUnbond, MsgSetUnbondCommission, MsgSubmitSignature, MsgSetRParams, MsgSetRelayFeeReceiver, MsgSetRelayGasPrice, MsgSetEraSeconds, MsgRmBondedPool, MsgMigrateInit, MsgMigrateUnbondings, MsgToggleUnbondSwitch, MsgUnsealMigrateInit, MsgRegisterIcaPool, MsgSetWithdrawalAddr, MsgInitPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.ledger.MsgSetEraUnbondLimit", MsgSetEraUnbondLimit], ["/stafihub.stafihub.ledger.MsgSetPoolDetail", MsgSetPoolDetail], ["/stafihub.stafihub.ledger.MsgSetLeastBond", MsgSetLeastBond], ["/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots", MsgClearCurrentEraSnapShots], ["/stafihub.stafihub.ledger.MsgSetStakingRewardCommission", MsgSetStakingRewardCommission], ["/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver", MsgSetProtocolFeeReceiver], ["/stafihub.stafihub.ledger.MsgSetUnbondRelayFee", MsgSetUnbondRelayFee], ["/stafihub.stafihub.ledger.MsgLiquidityUnbond", MsgLiquidityUnbond], ["/stafihub.stafihub.ledger.MsgSetUnbondCommission", MsgSetUnbondCommission], ["/stafihub.stafihub.ledger.MsgSubmitSignature", MsgSubmitSignature], ["/stafihub.stafihub.ledger.MsgSetRParams", MsgSetRParams], ["/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver", MsgSetRelayFeeReceiver], ["/stafihub.stafihub.ledger.MsgSetRelayGasPrice", MsgSetRelayGasPrice], ["/stafihub.stafihub.ledger.MsgSetEraSeconds", MsgSetEraSeconds], ["/stafihub.stafihub.ledger.MsgRmBondedPool", MsgRmBondedPool], ["/stafihub.stafihub.ledger.MsgMigrateInit", MsgMigrateInit], ["/stafihub.stafihub.ledger.MsgMigrateUnbondings", MsgMigrateUnbondings], ["/stafihub.stafihub.ledger.MsgToggleUnbondSwitch", MsgToggleUnbondSwitch], ["/stafihub.stafihub.ledger.MsgUnsealMigrateInit", MsgUnsealMigrateInit], ["/stafihub.stafihub.ledger.MsgRegisterIcaPool", MsgRegisterIcaPool], ["/stafihub.stafihub.ledger.MsgSetWithdrawalAddr", MsgSetWithdrawalAddr], ["/stafihub.stafihub.ledger.MsgInitPool", MsgInitPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setEraUnbondLimit(value: MsgSetEraUnbondLimit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit",
        value: MsgSetEraUnbondLimit.encode(value).finish()
      };
    },

    setPoolDetail(value: MsgSetPoolDetail) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetPoolDetail",
        value: MsgSetPoolDetail.encode(value).finish()
      };
    },

    setLeastBond(value: MsgSetLeastBond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetLeastBond",
        value: MsgSetLeastBond.encode(value).finish()
      };
    },

    clearCurrentEraSnapShots(value: MsgClearCurrentEraSnapShots) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots",
        value: MsgClearCurrentEraSnapShots.encode(value).finish()
      };
    },

    setStakingRewardCommission(value: MsgSetStakingRewardCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission",
        value: MsgSetStakingRewardCommission.encode(value).finish()
      };
    },

    setProtocolFeeReceiver(value: MsgSetProtocolFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver",
        value: MsgSetProtocolFeeReceiver.encode(value).finish()
      };
    },

    setUnbondRelayFee(value: MsgSetUnbondRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee",
        value: MsgSetUnbondRelayFee.encode(value).finish()
      };
    },

    liquidityUnbond(value: MsgLiquidityUnbond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
        value: MsgLiquidityUnbond.encode(value).finish()
      };
    },

    setUnbondCommission(value: MsgSetUnbondCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondCommission",
        value: MsgSetUnbondCommission.encode(value).finish()
      };
    },

    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSubmitSignature",
        value: MsgSubmitSignature.encode(value).finish()
      };
    },

    setRParams(value: MsgSetRParams) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRParams",
        value: MsgSetRParams.encode(value).finish()
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver",
        value: MsgSetRelayFeeReceiver.encode(value).finish()
      };
    },

    setRelayGasPrice(value: MsgSetRelayGasPrice) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayGasPrice",
        value: MsgSetRelayGasPrice.encode(value).finish()
      };
    },

    setEraSeconds(value: MsgSetEraSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraSeconds",
        value: MsgSetEraSeconds.encode(value).finish()
      };
    },

    rmBondedPool(value: MsgRmBondedPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRmBondedPool",
        value: MsgRmBondedPool.encode(value).finish()
      };
    },

    migrateInit(value: MsgMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateInit",
        value: MsgMigrateInit.encode(value).finish()
      };
    },

    migrateUnbondings(value: MsgMigrateUnbondings) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateUnbondings",
        value: MsgMigrateUnbondings.encode(value).finish()
      };
    },

    toggleUnbondSwitch(value: MsgToggleUnbondSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch",
        value: MsgToggleUnbondSwitch.encode(value).finish()
      };
    },

    unsealMigrateInit(value: MsgUnsealMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgUnsealMigrateInit",
        value: MsgUnsealMigrateInit.encode(value).finish()
      };
    },

    registerIcaPool(value: MsgRegisterIcaPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRegisterIcaPool",
        value: MsgRegisterIcaPool.encode(value).finish()
      };
    },

    setWithdrawalAddr(value: MsgSetWithdrawalAddr) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr",
        value: MsgSetWithdrawalAddr.encode(value).finish()
      };
    },

    initPool(value: MsgInitPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgInitPool",
        value: MsgInitPool.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setEraUnbondLimit(value: MsgSetEraUnbondLimit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit",
        value
      };
    },

    setPoolDetail(value: MsgSetPoolDetail) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetPoolDetail",
        value
      };
    },

    setLeastBond(value: MsgSetLeastBond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetLeastBond",
        value
      };
    },

    clearCurrentEraSnapShots(value: MsgClearCurrentEraSnapShots) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots",
        value
      };
    },

    setStakingRewardCommission(value: MsgSetStakingRewardCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission",
        value
      };
    },

    setProtocolFeeReceiver(value: MsgSetProtocolFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver",
        value
      };
    },

    setUnbondRelayFee(value: MsgSetUnbondRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee",
        value
      };
    },

    liquidityUnbond(value: MsgLiquidityUnbond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
        value
      };
    },

    setUnbondCommission(value: MsgSetUnbondCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondCommission",
        value
      };
    },

    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSubmitSignature",
        value
      };
    },

    setRParams(value: MsgSetRParams) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRParams",
        value
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver",
        value
      };
    },

    setRelayGasPrice(value: MsgSetRelayGasPrice) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayGasPrice",
        value
      };
    },

    setEraSeconds(value: MsgSetEraSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraSeconds",
        value
      };
    },

    rmBondedPool(value: MsgRmBondedPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRmBondedPool",
        value
      };
    },

    migrateInit(value: MsgMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateInit",
        value
      };
    },

    migrateUnbondings(value: MsgMigrateUnbondings) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateUnbondings",
        value
      };
    },

    toggleUnbondSwitch(value: MsgToggleUnbondSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch",
        value
      };
    },

    unsealMigrateInit(value: MsgUnsealMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgUnsealMigrateInit",
        value
      };
    },

    registerIcaPool(value: MsgRegisterIcaPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRegisterIcaPool",
        value
      };
    },

    setWithdrawalAddr(value: MsgSetWithdrawalAddr) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr",
        value
      };
    },

    initPool(value: MsgInitPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgInitPool",
        value
      };
    }

  },
  fromPartial: {
    setEraUnbondLimit(value: MsgSetEraUnbondLimit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit",
        value: MsgSetEraUnbondLimit.fromPartial(value)
      };
    },

    setPoolDetail(value: MsgSetPoolDetail) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetPoolDetail",
        value: MsgSetPoolDetail.fromPartial(value)
      };
    },

    setLeastBond(value: MsgSetLeastBond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetLeastBond",
        value: MsgSetLeastBond.fromPartial(value)
      };
    },

    clearCurrentEraSnapShots(value: MsgClearCurrentEraSnapShots) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots",
        value: MsgClearCurrentEraSnapShots.fromPartial(value)
      };
    },

    setStakingRewardCommission(value: MsgSetStakingRewardCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission",
        value: MsgSetStakingRewardCommission.fromPartial(value)
      };
    },

    setProtocolFeeReceiver(value: MsgSetProtocolFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver",
        value: MsgSetProtocolFeeReceiver.fromPartial(value)
      };
    },

    setUnbondRelayFee(value: MsgSetUnbondRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee",
        value: MsgSetUnbondRelayFee.fromPartial(value)
      };
    },

    liquidityUnbond(value: MsgLiquidityUnbond) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgLiquidityUnbond",
        value: MsgLiquidityUnbond.fromPartial(value)
      };
    },

    setUnbondCommission(value: MsgSetUnbondCommission) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetUnbondCommission",
        value: MsgSetUnbondCommission.fromPartial(value)
      };
    },

    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSubmitSignature",
        value: MsgSubmitSignature.fromPartial(value)
      };
    },

    setRParams(value: MsgSetRParams) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRParams",
        value: MsgSetRParams.fromPartial(value)
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver",
        value: MsgSetRelayFeeReceiver.fromPartial(value)
      };
    },

    setRelayGasPrice(value: MsgSetRelayGasPrice) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetRelayGasPrice",
        value: MsgSetRelayGasPrice.fromPartial(value)
      };
    },

    setEraSeconds(value: MsgSetEraSeconds) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetEraSeconds",
        value: MsgSetEraSeconds.fromPartial(value)
      };
    },

    rmBondedPool(value: MsgRmBondedPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRmBondedPool",
        value: MsgRmBondedPool.fromPartial(value)
      };
    },

    migrateInit(value: MsgMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateInit",
        value: MsgMigrateInit.fromPartial(value)
      };
    },

    migrateUnbondings(value: MsgMigrateUnbondings) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgMigrateUnbondings",
        value: MsgMigrateUnbondings.fromPartial(value)
      };
    },

    toggleUnbondSwitch(value: MsgToggleUnbondSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch",
        value: MsgToggleUnbondSwitch.fromPartial(value)
      };
    },

    unsealMigrateInit(value: MsgUnsealMigrateInit) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgUnsealMigrateInit",
        value: MsgUnsealMigrateInit.fromPartial(value)
      };
    },

    registerIcaPool(value: MsgRegisterIcaPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgRegisterIcaPool",
        value: MsgRegisterIcaPool.fromPartial(value)
      };
    },

    setWithdrawalAddr(value: MsgSetWithdrawalAddr) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr",
        value: MsgSetWithdrawalAddr.fromPartial(value)
      };
    },

    initPool(value: MsgInitPool) {
      return {
        typeUrl: "/stafihub.stafihub.ledger.MsgInitPool",
        value: MsgInitPool.fromPartial(value)
      };
    }

  }
};
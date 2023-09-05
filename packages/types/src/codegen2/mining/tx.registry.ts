import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddStakePool, MsgAddStakeItem, MsgAddRewardPool, MsgStake, MsgClaimReward, MsgWithdraw, MsgUpdateStakeItem, MsgAddMiningProvider, MsgRmMiningProvider, MsgAddRewardToken, MsgSetMaxRewardPoolNumber, MsgUpdateRewardPool, MsgToggleProviderSwitch, MsgSetMaxStakeItemNumber, MsgAddReward, MsgToggleEmergencySwitch, MsgEmergencyWithdraw, MsgAddStakeToken, MsgRmRewardToken, MsgRmStakeToken, MsgSetStakeItemLimit, MsgWithdrawRewardToken } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.mining.MsgAddStakePool", MsgAddStakePool], ["/stafihub.stafihub.mining.MsgAddStakeItem", MsgAddStakeItem], ["/stafihub.stafihub.mining.MsgAddRewardPool", MsgAddRewardPool], ["/stafihub.stafihub.mining.MsgStake", MsgStake], ["/stafihub.stafihub.mining.MsgClaimReward", MsgClaimReward], ["/stafihub.stafihub.mining.MsgWithdraw", MsgWithdraw], ["/stafihub.stafihub.mining.MsgUpdateStakeItem", MsgUpdateStakeItem], ["/stafihub.stafihub.mining.MsgAddMiningProvider", MsgAddMiningProvider], ["/stafihub.stafihub.mining.MsgRmMiningProvider", MsgRmMiningProvider], ["/stafihub.stafihub.mining.MsgAddRewardToken", MsgAddRewardToken], ["/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber", MsgSetMaxRewardPoolNumber], ["/stafihub.stafihub.mining.MsgUpdateRewardPool", MsgUpdateRewardPool], ["/stafihub.stafihub.mining.MsgToggleProviderSwitch", MsgToggleProviderSwitch], ["/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber", MsgSetMaxStakeItemNumber], ["/stafihub.stafihub.mining.MsgAddReward", MsgAddReward], ["/stafihub.stafihub.mining.MsgToggleEmergencySwitch", MsgToggleEmergencySwitch], ["/stafihub.stafihub.mining.MsgEmergencyWithdraw", MsgEmergencyWithdraw], ["/stafihub.stafihub.mining.MsgAddStakeToken", MsgAddStakeToken], ["/stafihub.stafihub.mining.MsgRmRewardToken", MsgRmRewardToken], ["/stafihub.stafihub.mining.MsgRmStakeToken", MsgRmStakeToken], ["/stafihub.stafihub.mining.MsgSetStakeItemLimit", MsgSetStakeItemLimit], ["/stafihub.stafihub.mining.MsgWithdrawRewardToken", MsgWithdrawRewardToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addStakePool(value: MsgAddStakePool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakePool",
        value: MsgAddStakePool.encode(value).finish()
      };
    },

    addStakeItem(value: MsgAddStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeItem",
        value: MsgAddStakeItem.encode(value).finish()
      };
    },

    addRewardPool(value: MsgAddRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardPool",
        value: MsgAddRewardPool.encode(value).finish()
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },

    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    updateStakeItem(value: MsgUpdateStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateStakeItem",
        value: MsgUpdateStakeItem.encode(value).finish()
      };
    },

    addMiningProvider(value: MsgAddMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddMiningProvider",
        value: MsgAddMiningProvider.encode(value).finish()
      };
    },

    rmMiningProvider(value: MsgRmMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmMiningProvider",
        value: MsgRmMiningProvider.encode(value).finish()
      };
    },

    addRewardToken(value: MsgAddRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardToken",
        value: MsgAddRewardToken.encode(value).finish()
      };
    },

    setMaxRewardPoolNumber(value: MsgSetMaxRewardPoolNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber",
        value: MsgSetMaxRewardPoolNumber.encode(value).finish()
      };
    },

    updateRewardPool(value: MsgUpdateRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
        value: MsgUpdateRewardPool.encode(value).finish()
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleProviderSwitch",
        value: MsgToggleProviderSwitch.encode(value).finish()
      };
    },

    setMaxStakeItemNumber(value: MsgSetMaxStakeItemNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber",
        value: MsgSetMaxStakeItemNumber.encode(value).finish()
      };
    },

    addReward(value: MsgAddReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddReward",
        value: MsgAddReward.encode(value).finish()
      };
    },

    toggleEmergencySwitch(value: MsgToggleEmergencySwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleEmergencySwitch",
        value: MsgToggleEmergencySwitch.encode(value).finish()
      };
    },

    emergencyWithdraw(value: MsgEmergencyWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgEmergencyWithdraw",
        value: MsgEmergencyWithdraw.encode(value).finish()
      };
    },

    addStakeToken(value: MsgAddStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeToken",
        value: MsgAddStakeToken.encode(value).finish()
      };
    },

    rmRewardToken(value: MsgRmRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmRewardToken",
        value: MsgRmRewardToken.encode(value).finish()
      };
    },

    rmStakeToken(value: MsgRmStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmStakeToken",
        value: MsgRmStakeToken.encode(value).finish()
      };
    },

    setStakeItemLimit(value: MsgSetStakeItemLimit) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetStakeItemLimit",
        value: MsgSetStakeItemLimit.encode(value).finish()
      };
    },

    withdrawRewardToken(value: MsgWithdrawRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
        value: MsgWithdrawRewardToken.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    addStakePool(value: MsgAddStakePool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakePool",
        value
      };
    },

    addStakeItem(value: MsgAddStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeItem",
        value
      };
    },

    addRewardPool(value: MsgAddRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardPool",
        value
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgStake",
        value
      };
    },

    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgClaimReward",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdraw",
        value
      };
    },

    updateStakeItem(value: MsgUpdateStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateStakeItem",
        value
      };
    },

    addMiningProvider(value: MsgAddMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddMiningProvider",
        value
      };
    },

    rmMiningProvider(value: MsgRmMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmMiningProvider",
        value
      };
    },

    addRewardToken(value: MsgAddRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardToken",
        value
      };
    },

    setMaxRewardPoolNumber(value: MsgSetMaxRewardPoolNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber",
        value
      };
    },

    updateRewardPool(value: MsgUpdateRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
        value
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleProviderSwitch",
        value
      };
    },

    setMaxStakeItemNumber(value: MsgSetMaxStakeItemNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber",
        value
      };
    },

    addReward(value: MsgAddReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddReward",
        value
      };
    },

    toggleEmergencySwitch(value: MsgToggleEmergencySwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleEmergencySwitch",
        value
      };
    },

    emergencyWithdraw(value: MsgEmergencyWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgEmergencyWithdraw",
        value
      };
    },

    addStakeToken(value: MsgAddStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeToken",
        value
      };
    },

    rmRewardToken(value: MsgRmRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmRewardToken",
        value
      };
    },

    rmStakeToken(value: MsgRmStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmStakeToken",
        value
      };
    },

    setStakeItemLimit(value: MsgSetStakeItemLimit) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetStakeItemLimit",
        value
      };
    },

    withdrawRewardToken(value: MsgWithdrawRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
        value
      };
    }

  },
  fromPartial: {
    addStakePool(value: MsgAddStakePool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakePool",
        value: MsgAddStakePool.fromPartial(value)
      };
    },

    addStakeItem(value: MsgAddStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeItem",
        value: MsgAddStakeItem.fromPartial(value)
      };
    },

    addRewardPool(value: MsgAddRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardPool",
        value: MsgAddRewardPool.fromPartial(value)
      };
    },

    stake(value: MsgStake) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },

    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    updateStakeItem(value: MsgUpdateStakeItem) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateStakeItem",
        value: MsgUpdateStakeItem.fromPartial(value)
      };
    },

    addMiningProvider(value: MsgAddMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddMiningProvider",
        value: MsgAddMiningProvider.fromPartial(value)
      };
    },

    rmMiningProvider(value: MsgRmMiningProvider) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmMiningProvider",
        value: MsgRmMiningProvider.fromPartial(value)
      };
    },

    addRewardToken(value: MsgAddRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddRewardToken",
        value: MsgAddRewardToken.fromPartial(value)
      };
    },

    setMaxRewardPoolNumber(value: MsgSetMaxRewardPoolNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber",
        value: MsgSetMaxRewardPoolNumber.fromPartial(value)
      };
    },

    updateRewardPool(value: MsgUpdateRewardPool) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
        value: MsgUpdateRewardPool.fromPartial(value)
      };
    },

    toggleProviderSwitch(value: MsgToggleProviderSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleProviderSwitch",
        value: MsgToggleProviderSwitch.fromPartial(value)
      };
    },

    setMaxStakeItemNumber(value: MsgSetMaxStakeItemNumber) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber",
        value: MsgSetMaxStakeItemNumber.fromPartial(value)
      };
    },

    addReward(value: MsgAddReward) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddReward",
        value: MsgAddReward.fromPartial(value)
      };
    },

    toggleEmergencySwitch(value: MsgToggleEmergencySwitch) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgToggleEmergencySwitch",
        value: MsgToggleEmergencySwitch.fromPartial(value)
      };
    },

    emergencyWithdraw(value: MsgEmergencyWithdraw) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgEmergencyWithdraw",
        value: MsgEmergencyWithdraw.fromPartial(value)
      };
    },

    addStakeToken(value: MsgAddStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgAddStakeToken",
        value: MsgAddStakeToken.fromPartial(value)
      };
    },

    rmRewardToken(value: MsgRmRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmRewardToken",
        value: MsgRmRewardToken.fromPartial(value)
      };
    },

    rmStakeToken(value: MsgRmStakeToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgRmStakeToken",
        value: MsgRmStakeToken.fromPartial(value)
      };
    },

    setStakeItemLimit(value: MsgSetStakeItemLimit) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgSetStakeItemLimit",
        value: MsgSetStakeItemLimit.fromPartial(value)
      };
    },

    withdrawRewardToken(value: MsgWithdrawRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
        value: MsgWithdrawRewardToken.fromPartial(value)
      };
    }

  }
};
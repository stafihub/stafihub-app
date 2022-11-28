//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddMintRewardAct, MsgUpdateMintRewardAct, MsgClaimMintReward, MsgProvideRewardToken } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.rmintreward.MsgAddMintRewardAct", MsgAddMintRewardAct], ["/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct", MsgUpdateMintRewardAct], ["/stafihub.stafihub.rmintreward.MsgClaimMintReward", MsgClaimMintReward], ["/stafihub.stafihub.rmintreward.MsgProvideRewardToken", MsgProvideRewardToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addMintRewardAct(value: MsgAddMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct",
        value: MsgAddMintRewardAct.encode(value).finish()
      };
    },

    updateMintRewardAct(value: MsgUpdateMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct",
        value: MsgUpdateMintRewardAct.encode(value).finish()
      };
    },

    claimMintReward(value: MsgClaimMintReward) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgClaimMintReward",
        value: MsgClaimMintReward.encode(value).finish()
      };
    },

    provideRewardToken(value: MsgProvideRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgProvideRewardToken",
        value: MsgProvideRewardToken.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    addMintRewardAct(value: MsgAddMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct",
        value
      };
    },

    updateMintRewardAct(value: MsgUpdateMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct",
        value
      };
    },

    claimMintReward(value: MsgClaimMintReward) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgClaimMintReward",
        value
      };
    },

    provideRewardToken(value: MsgProvideRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgProvideRewardToken",
        value
      };
    }

  },
  fromPartial: {
    addMintRewardAct(value: MsgAddMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct",
        value: MsgAddMintRewardAct.fromPartial(value)
      };
    },

    updateMintRewardAct(value: MsgUpdateMintRewardAct) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct",
        value: MsgUpdateMintRewardAct.fromPartial(value)
      };
    },

    claimMintReward(value: MsgClaimMintReward) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgClaimMintReward",
        value: MsgClaimMintReward.fromPartial(value)
      };
    },

    provideRewardToken(value: MsgProvideRewardToken) {
      return {
        typeUrl: "/stafihub.stafihub.rmintreward.MsgProvideRewardToken",
        value: MsgProvideRewardToken.fromPartial(value)
      };
    }

  }
};
//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetResourceidToDenom, MsgDeposit, MsgAddChainId, MsgVoteProposal, MsgRmChainId, MsgSetRelayFeeReceiver, MsgSetRelayFee, MsgAddBannedDenom, MsgRmBannedDenom } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.bridge.MsgSetResourceidToDenom", MsgSetResourceidToDenom], ["/stafihub.stafihub.bridge.MsgDeposit", MsgDeposit], ["/stafihub.stafihub.bridge.MsgAddChainId", MsgAddChainId], ["/stafihub.stafihub.bridge.MsgVoteProposal", MsgVoteProposal], ["/stafihub.stafihub.bridge.MsgRmChainId", MsgRmChainId], ["/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver", MsgSetRelayFeeReceiver], ["/stafihub.stafihub.bridge.MsgSetRelayFee", MsgSetRelayFee], ["/stafihub.stafihub.bridge.MsgAddBannedDenom", MsgAddBannedDenom], ["/stafihub.stafihub.bridge.MsgRmBannedDenom", MsgRmBannedDenom]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setResourceidToDenom(value: MsgSetResourceidToDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetResourceidToDenom",
        value: MsgSetResourceidToDenom.encode(value).finish()
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    addChainId(value: MsgAddChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddChainId",
        value: MsgAddChainId.encode(value).finish()
      };
    },

    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgVoteProposal",
        value: MsgVoteProposal.encode(value).finish()
      };
    },

    rmChainId(value: MsgRmChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmChainId",
        value: MsgRmChainId.encode(value).finish()
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver",
        value: MsgSetRelayFeeReceiver.encode(value).finish()
      };
    },

    setRelayFee(value: MsgSetRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFee",
        value: MsgSetRelayFee.encode(value).finish()
      };
    },

    addBannedDenom(value: MsgAddBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddBannedDenom",
        value: MsgAddBannedDenom.encode(value).finish()
      };
    },

    rmBannedDenom(value: MsgRmBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmBannedDenom",
        value: MsgRmBannedDenom.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setResourceidToDenom(value: MsgSetResourceidToDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetResourceidToDenom",
        value
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgDeposit",
        value
      };
    },

    addChainId(value: MsgAddChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddChainId",
        value
      };
    },

    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgVoteProposal",
        value
      };
    },

    rmChainId(value: MsgRmChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmChainId",
        value
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver",
        value
      };
    },

    setRelayFee(value: MsgSetRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFee",
        value
      };
    },

    addBannedDenom(value: MsgAddBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddBannedDenom",
        value
      };
    },

    rmBannedDenom(value: MsgRmBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmBannedDenom",
        value
      };
    }

  },
  fromPartial: {
    setResourceidToDenom(value: MsgSetResourceidToDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetResourceidToDenom",
        value: MsgSetResourceidToDenom.fromPartial(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    addChainId(value: MsgAddChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddChainId",
        value: MsgAddChainId.fromPartial(value)
      };
    },

    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgVoteProposal",
        value: MsgVoteProposal.fromPartial(value)
      };
    },

    rmChainId(value: MsgRmChainId) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmChainId",
        value: MsgRmChainId.fromPartial(value)
      };
    },

    setRelayFeeReceiver(value: MsgSetRelayFeeReceiver) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver",
        value: MsgSetRelayFeeReceiver.fromPartial(value)
      };
    },

    setRelayFee(value: MsgSetRelayFee) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgSetRelayFee",
        value: MsgSetRelayFee.fromPartial(value)
      };
    },

    addBannedDenom(value: MsgAddBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgAddBannedDenom",
        value: MsgAddBannedDenom.fromPartial(value)
      };
    },

    rmBannedDenom(value: MsgRmBannedDenom) {
      return {
        typeUrl: "/stafihub.stafihub.bridge.MsgRmBannedDenom",
        value: MsgRmBannedDenom.fromPartial(value)
      };
    }

  }
};
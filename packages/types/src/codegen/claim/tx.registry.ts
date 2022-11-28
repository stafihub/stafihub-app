//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetMerkleRoot, MsgClaim, MsgToggleClaimSwitch, MsgProvideToken, MsgWithdrawToken } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stafihub.stafihub.claim.MsgSetMerkleRoot", MsgSetMerkleRoot], ["/stafihub.stafihub.claim.MsgClaim", MsgClaim], ["/stafihub.stafihub.claim.MsgToggleClaimSwitch", MsgToggleClaimSwitch], ["/stafihub.stafihub.claim.MsgProvideToken", MsgProvideToken], ["/stafihub.stafihub.claim.MsgWithdrawToken", MsgWithdrawToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgSetMerkleRoot",
        value: MsgSetMerkleRoot.encode(value).finish()
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },

    toggleClaimSwitch(value: MsgToggleClaimSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgToggleClaimSwitch",
        value: MsgToggleClaimSwitch.encode(value).finish()
      };
    },

    provideToken(value: MsgProvideToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgProvideToken",
        value: MsgProvideToken.encode(value).finish()
      };
    },

    withdrawToken(value: MsgWithdrawToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgWithdrawToken",
        value: MsgWithdrawToken.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgSetMerkleRoot",
        value
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgClaim",
        value
      };
    },

    toggleClaimSwitch(value: MsgToggleClaimSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgToggleClaimSwitch",
        value
      };
    },

    provideToken(value: MsgProvideToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgProvideToken",
        value
      };
    },

    withdrawToken(value: MsgWithdrawToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgWithdrawToken",
        value
      };
    }

  },
  fromPartial: {
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgSetMerkleRoot",
        value: MsgSetMerkleRoot.fromPartial(value)
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },

    toggleClaimSwitch(value: MsgToggleClaimSwitch) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgToggleClaimSwitch",
        value: MsgToggleClaimSwitch.fromPartial(value)
      };
    },

    provideToken(value: MsgProvideToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgProvideToken",
        value: MsgProvideToken.fromPartial(value)
      };
    },

    withdrawToken(value: MsgWithdrawToken) {
      return {
        typeUrl: "/stafihub.stafihub.claim.MsgWithdrawToken",
        value: MsgWithdrawToken.fromPartial(value)
      };
    }

  }
};
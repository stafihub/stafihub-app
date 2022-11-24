import { denomTypeFromJSON } from "./genesis";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import {
  MsgSetResourceidToDenom,
  MsgDeposit,
  MsgAddChainId,
  MsgVoteProposal,
  MsgRmChainId,
  MsgSetRelayFeeReceiver,
  MsgSetRelayFee,
  MsgAddBannedDenom,
  MsgRmBannedDenom,
} from "./tx";
export interface AminoMsgSetResourceidToDenom extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgSetResourceidToDenom";
  value: {
    creator: string;
    resourceId: string;
    denom: string;
    denomType: number;
  };
}
export interface AminoMsgDeposit extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgDeposit";
  value: {
    creator: string;
    destChainId: number;
    denom: string;
    amount: string;
    receiver: string;
  };
}
export interface AminoMsgAddChainId extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgAddChainId";
  value: {
    creator: string;
    chainId: number;
  };
}
export interface AminoMsgVoteProposal extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgVoteProposal";
  value: {
    creator: string;
    chainId: number;
    depositNonce: string;
    resourceId: string;
    amount: string;
    receiver: string;
  };
}
export interface AminoMsgRmChainId extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgRmChainId";
  value: {
    creator: string;
    chainId: number;
  };
}
export interface AminoMsgSetRelayFeeReceiver extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver";
  value: {
    creator: string;
    address: string;
  };
}
export interface AminoMsgSetRelayFee extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgSetRelayFee";
  value: {
    creator: string;
    chainId: number;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgAddBannedDenom extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgAddBannedDenom";
  value: {
    creator: string;
    chainId: number;
    denom: string;
  };
}
export interface AminoMsgRmBannedDenom extends AminoMsg {
  type: "/stafihub.stafihub.bridge.MsgRmBannedDenom";
  value: {
    creator: string;
    chainId: number;
    denom: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.bridge.MsgSetResourceidToDenom": {
    aminoType: "/stafihub.stafihub.bridge.MsgSetResourceidToDenom",
    toAmino: ({
      creator,
      resourceId,
      denom,
      denomType,
    }: MsgSetResourceidToDenom): AminoMsgSetResourceidToDenom["value"] => {
      return {
        creator,
        resourceId,
        denom,
        denomType,
      };
    },
    fromAmino: ({
      creator,
      resourceId,
      denom,
      denomType,
    }: AminoMsgSetResourceidToDenom["value"]): MsgSetResourceidToDenom => {
      return {
        creator,
        resourceId,
        denom,
        denomType: denomTypeFromJSON(denomType),
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgDeposit": {
    aminoType: "bridge.Deposit",
    toAmino: ({
      creator,
      destChainId,
      denom,
      amount,
      receiver,
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        creator,
        destChainId,
        denom,
        amount,
        receiver,
      };
    },
    fromAmino: ({
      creator,
      destChainId,
      denom,
      amount,
      receiver,
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        creator,
        destChainId,
        denom,
        amount,
        receiver,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgAddChainId": {
    aminoType: "/stafihub.stafihub.bridge.MsgAddChainId",
    toAmino: ({
      creator,
      chainId,
    }: MsgAddChainId): AminoMsgAddChainId["value"] => {
      return {
        creator,
        chainId,
      };
    },
    fromAmino: ({
      creator,
      chainId,
    }: AminoMsgAddChainId["value"]): MsgAddChainId => {
      return {
        creator,
        chainId,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgVoteProposal": {
    aminoType: "/stafihub.stafihub.bridge.MsgVoteProposal",
    toAmino: ({
      creator,
      chainId,
      depositNonce,
      resourceId,
      amount,
      receiver,
    }: MsgVoteProposal): AminoMsgVoteProposal["value"] => {
      return {
        creator,
        chainId,
        depositNonce: depositNonce.toString(),
        resourceId,
        amount,
        receiver,
      };
    },
    fromAmino: ({
      creator,
      chainId,
      depositNonce,
      resourceId,
      amount,
      receiver,
    }: AminoMsgVoteProposal["value"]): MsgVoteProposal => {
      return {
        creator,
        chainId,
        depositNonce: Long.fromString(depositNonce),
        resourceId,
        amount,
        receiver,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgRmChainId": {
    aminoType: "/stafihub.stafihub.bridge.MsgRmChainId",
    toAmino: ({
      creator,
      chainId,
    }: MsgRmChainId): AminoMsgRmChainId["value"] => {
      return {
        creator,
        chainId,
      };
    },
    fromAmino: ({
      creator,
      chainId,
    }: AminoMsgRmChainId["value"]): MsgRmChainId => {
      return {
        creator,
        chainId,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver": {
    aminoType: "/stafihub.stafihub.bridge.MsgSetRelayFeeReceiver",
    toAmino: ({
      creator,
      address,
    }: MsgSetRelayFeeReceiver): AminoMsgSetRelayFeeReceiver["value"] => {
      return {
        creator,
        address,
      };
    },
    fromAmino: ({
      creator,
      address,
    }: AminoMsgSetRelayFeeReceiver["value"]): MsgSetRelayFeeReceiver => {
      return {
        creator,
        address,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgSetRelayFee": {
    aminoType: "/stafihub.stafihub.bridge.MsgSetRelayFee",
    toAmino: ({
      creator,
      chainId,
      value,
    }: MsgSetRelayFee): AminoMsgSetRelayFee["value"] => {
      return {
        creator,
        chainId,
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString(),
        },
      };
    },
    fromAmino: ({
      creator,
      chainId,
      value,
    }: AminoMsgSetRelayFee["value"]): MsgSetRelayFee => {
      return {
        creator,
        chainId,
        value: {
          denom: value.denom,
          amount: value.amount,
        },
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgAddBannedDenom": {
    aminoType: "/stafihub.stafihub.bridge.MsgAddBannedDenom",
    toAmino: ({
      creator,
      chainId,
      denom,
    }: MsgAddBannedDenom): AminoMsgAddBannedDenom["value"] => {
      return {
        creator,
        chainId,
        denom,
      };
    },
    fromAmino: ({
      creator,
      chainId,
      denom,
    }: AminoMsgAddBannedDenom["value"]): MsgAddBannedDenom => {
      return {
        creator,
        chainId,
        denom,
      };
    },
  },
  "/stafihub.stafihub.bridge.MsgRmBannedDenom": {
    aminoType: "/stafihub.stafihub.bridge.MsgRmBannedDenom",
    toAmino: ({
      creator,
      chainId,
      denom,
    }: MsgRmBannedDenom): AminoMsgRmBannedDenom["value"] => {
      return {
        creator,
        chainId,
        denom,
      };
    },
    fromAmino: ({
      creator,
      chainId,
      denom,
    }: AminoMsgRmBannedDenom["value"]): MsgRmBannedDenom => {
      return {
        creator,
        chainId,
        denom,
      };
    },
  },
};

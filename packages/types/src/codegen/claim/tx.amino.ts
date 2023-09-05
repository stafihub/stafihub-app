//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import {
  MsgSetMerkleRoot,
  MsgClaim,
  MsgToggleClaimSwitch,
  MsgProvideToken,
  MsgWithdrawToken,
} from "./tx";
export interface AminoMsgSetMerkleRoot extends AminoMsg {
  type: "/stafihub.stafihub.claim.MsgSetMerkleRoot";
  value: {
    creator: string;
    round: string;
    merkleRoot: string;
  };
}
export interface AminoMsgClaim extends AminoMsg {
  type: "claim/Claim";
  value: {
    creator: string;
    round: string;
    index: string;
    account: string;
    coin: {
      denom: string;
      amount: string;
    };
    proof: string[];
  };
}
export interface AminoMsgToggleClaimSwitch extends AminoMsg {
  type: "/stafihub.stafihub.claim.MsgToggleClaimSwitch";
  value: {
    creator: string;
    round: string;
  };
}
export interface AminoMsgProvideToken extends AminoMsg {
  type: "/stafihub.stafihub.claim.MsgProvideToken";
  value: {
    creator: string;
    token: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgWithdrawToken extends AminoMsg {
  type: "/stafihub.stafihub.claim.MsgWithdrawToken";
  value: {
    creator: string;
    recipient: string;
    token: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.claim.MsgSetMerkleRoot": {
    aminoType: "/stafihub.stafihub.claim.MsgSetMerkleRoot",
    toAmino: ({
      creator,
      round,
      merkleRoot,
    }: MsgSetMerkleRoot): AminoMsgSetMerkleRoot["value"] => {
      return {
        creator,
        round: round.toString(),
        merkleRoot,
      };
    },
    fromAmino: ({
      creator,
      round,
      merkleRoot,
    }: AminoMsgSetMerkleRoot["value"]): MsgSetMerkleRoot => {
      return {
        creator,
        round: Long.fromString(round),
        merkleRoot,
      };
    },
  },
  "/stafihub.stafihub.claim.MsgClaim": {
    aminoType: "claim/Claim",
    toAmino: ({
      creator,
      round,
      index,
      account,
      coin,
      proof,
    }: MsgClaim): AminoMsgClaim["value"] => {
      return {
        creator,
        round: round.toString(),
        index: index.toString(),
        account,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString(),
        },
        proof,
      };
    },
    fromAmino: ({
      creator,
      round,
      index,
      account,
      coin,
      proof,
    }: AminoMsgClaim["value"]): MsgClaim => {
      return {
        creator,
        round: Long.fromString(round),
        index: Long.fromString(index),
        account,
        coin: {
          denom: coin.denom,
          amount: coin.amount,
        },
        proof,
      };
    },
  },
  "/stafihub.stafihub.claim.MsgToggleClaimSwitch": {
    aminoType: "/stafihub.stafihub.claim.MsgToggleClaimSwitch",
    toAmino: ({
      creator,
      round,
    }: MsgToggleClaimSwitch): AminoMsgToggleClaimSwitch["value"] => {
      return {
        creator,
        round: round.toString(),
      };
    },
    fromAmino: ({
      creator,
      round,
    }: AminoMsgToggleClaimSwitch["value"]): MsgToggleClaimSwitch => {
      return {
        creator,
        round: Long.fromString(round),
      };
    },
  },
  "/stafihub.stafihub.claim.MsgProvideToken": {
    aminoType: "/stafihub.stafihub.claim.MsgProvideToken",
    toAmino: ({
      creator,
      token,
    }: MsgProvideToken): AminoMsgProvideToken["value"] => {
      return {
        creator,
        token: {
          denom: token.denom,
          amount: Long.fromValue(token.amount).toString(),
        },
      };
    },
    fromAmino: ({
      creator,
      token,
    }: AminoMsgProvideToken["value"]): MsgProvideToken => {
      return {
        creator,
        token: {
          denom: token.denom,
          amount: token.amount,
        },
      };
    },
  },
  "/stafihub.stafihub.claim.MsgWithdrawToken": {
    aminoType: "/stafihub.stafihub.claim.MsgWithdrawToken",
    toAmino: ({
      creator,
      recipient,
      token,
    }: MsgWithdrawToken): AminoMsgWithdrawToken["value"] => {
      return {
        creator,
        recipient,
        token: {
          denom: token.denom,
          amount: Long.fromValue(token.amount).toString(),
        },
      };
    },
    fromAmino: ({
      creator,
      recipient,
      token,
    }: AminoMsgWithdrawToken["value"]): MsgWithdrawToken => {
      return {
        creator,
        recipient,
        token: {
          denom: token.denom,
          amount: token.amount,
        },
      };
    },
  },
};

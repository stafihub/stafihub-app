import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import {
  MsgAddMintRewardAct,
  MsgUpdateMintRewardAct,
  MsgClaimMintReward,
  MsgProvideRewardToken,
} from "./tx";
export interface AminoMsgAddMintRewardAct extends AminoMsg {
  type: "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct";
  value: {
    creator: string;
    denom: string;
    act: {
      begin: string;
      end: string;
      lockedBlocks: string;
      tokenRewardInfos: {
        denom: string;
        rewardRate: string;
        totalRewardAmount: string;
        userLimit: string;
      }[];
    };
  };
}
export interface AminoMsgUpdateMintRewardAct extends AminoMsg {
  type: "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct";
  value: {
    creator: string;
    denom: string;
    cycle: string;
    act: {
      begin: string;
      end: string;
      lockedBlocks: string;
      tokenRewardInfos: {
        denom: string;
        rewardRate: string;
        totalRewardAmount: string;
        userLimit: string;
      }[];
    };
  };
}
export interface AminoMsgClaimMintReward extends AminoMsg {
  type: "rmintreward.ClaimMintReward";
  value: {
    creator: string;
    denom: string;
    cycle: string;
    mintIndex: string;
  };
}
export interface AminoMsgProvideRewardToken extends AminoMsg {
  type: "/stafihub.stafihub.rmintreward.MsgProvideRewardToken";
  value: {
    creator: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct": {
    aminoType: "/stafihub.stafihub.rmintreward.MsgAddMintRewardAct",
    toAmino: ({
      creator,
      denom,
      act,
    }: MsgAddMintRewardAct): AminoMsgAddMintRewardAct["value"] => {
      return {
        creator,
        denom,
        act: {
          begin: act.begin.toString(),
          end: act.end.toString(),
          lockedBlocks: act.lockedBlocks.toString(),
          tokenRewardInfos: act.tokenRewardInfos.map((el0) => ({
            denom: el0.denom,
            rewardRate: el0.rewardRate,
            totalRewardAmount: el0.totalRewardAmount,
            userLimit: el0.userLimit,
          })),
        },
      };
    },
    fromAmino: ({
      creator,
      denom,
      act,
    }: AminoMsgAddMintRewardAct["value"]): MsgAddMintRewardAct => {
      return {
        creator,
        denom,
        act: {
          begin: Long.fromString(act.begin),
          end: Long.fromString(act.end),
          lockedBlocks: Long.fromString(act.lockedBlocks),
          tokenRewardInfos: act.tokenRewardInfos.map((el1) => ({
            denom: el1.denom,
            rewardRate: el1.rewardRate,
            totalRewardAmount: el1.totalRewardAmount,
            userLimit: el1.userLimit,
          })),
        },
      };
    },
  },
  "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct": {
    aminoType: "/stafihub.stafihub.rmintreward.MsgUpdateMintRewardAct",
    toAmino: ({
      creator,
      denom,
      cycle,
      act,
    }: MsgUpdateMintRewardAct): AminoMsgUpdateMintRewardAct["value"] => {
      return {
        creator,
        denom,
        cycle: cycle.toString(),
        act: {
          begin: act.begin.toString(),
          end: act.end.toString(),
          lockedBlocks: act.lockedBlocks.toString(),
          tokenRewardInfos: act.tokenRewardInfos.map((el0) => ({
            denom: el0.denom,
            rewardRate: el0.rewardRate,
            totalRewardAmount: el0.totalRewardAmount,
            userLimit: el0.userLimit,
          })),
        },
      };
    },
    fromAmino: ({
      creator,
      denom,
      cycle,
      act,
    }: AminoMsgUpdateMintRewardAct["value"]): MsgUpdateMintRewardAct => {
      return {
        creator,
        denom,
        cycle: Long.fromString(cycle),
        act: {
          begin: Long.fromString(act.begin),
          end: Long.fromString(act.end),
          lockedBlocks: Long.fromString(act.lockedBlocks),
          tokenRewardInfos: act.tokenRewardInfos.map((el1) => ({
            denom: el1.denom,
            rewardRate: el1.rewardRate,
            totalRewardAmount: el1.totalRewardAmount,
            userLimit: el1.userLimit,
          })),
        },
      };
    },
  },
  "/stafihub.stafihub.rmintreward.MsgClaimMintReward": {
    aminoType: "/stafihub.stafihub.rmintreward.MsgClaimMintReward",
    toAmino: ({
      creator,
      denom,
      cycle,
      mintIndex,
    }: MsgClaimMintReward): AminoMsgClaimMintReward["value"] => {
      return {
        creator,
        denom,
        cycle: cycle.toString(),
        mintIndex: mintIndex.toString(),
      };
    },
    fromAmino: ({
      creator,
      denom,
      cycle,
      mintIndex,
    }: AminoMsgClaimMintReward["value"]): MsgClaimMintReward => {
      return {
        creator,
        denom,
        cycle: Long.fromString(cycle),
        mintIndex: Long.fromString(mintIndex),
      };
    },
  },
  "/stafihub.stafihub.rmintreward.MsgProvideRewardToken": {
    aminoType: "/stafihub.stafihub.rmintreward.MsgProvideRewardToken",
    toAmino: ({
      creator,
      amount,
    }: MsgProvideRewardToken): AminoMsgProvideRewardToken["value"] => {
      return {
        creator,
        amount,
      };
    },
    fromAmino: ({
      creator,
      amount,
    }: AminoMsgProvideRewardToken["value"]): MsgProvideRewardToken => {
      return {
        creator,
        amount,
      };
    },
  },
};

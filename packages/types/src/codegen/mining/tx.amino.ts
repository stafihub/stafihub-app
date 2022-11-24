import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgAddStakePool, MsgAddStakeItem, MsgAddRewardPool, MsgStake, MsgClaimReward, MsgWithdraw, MsgUpdateStakeItem, MsgAddMiningProvider, MsgRmMiningProvider, MsgAddRewardToken, MsgSetMaxRewardPoolNumber, MsgUpdateRewardPool, MsgToggleProviderSwitch, MsgSetMaxStakeItemNumber, MsgAddReward, MsgToggleEmergencySwitch, MsgEmergencyWithdraw, MsgAddStakeToken, MsgRmRewardToken, MsgRmStakeToken, MsgSetStakeItemLimit, MsgWithdrawRewardToken } from "./tx";
export interface AminoMsgAddStakePool extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddStakePool";
  value: {
    creator: string;
    stakeTokenDenom: string;
    rewardPoolInfoList: {
      rewardTokenDenom: string;
      totalRewardAmount: string;
      rewardPerSecond: string;
      startTimestamp: string;
    }[];
    stakeItemInfoList: {
      lockSecond: string;
      powerRewardRate: string;
    }[];
  };
}
export interface AminoMsgAddStakeItem extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddStakeItem";
  value: {
    creator: string;
    stakePoolIndex: number;
    lockSecond: string;
    powerRewardRate: string;
    enable: boolean;
  };
}
export interface AminoMsgAddRewardPool extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddRewardPool";
  value: {
    creator: string;
    stakePoolIndex: number;
    rewardTokenDenom: string;
    totalRewardAmount: string;
    rewardPerSecond: string;
    startTimestamp: string;
  };
}
export interface AminoMsgStake extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgStake";
  value: {
    creator: string;
    stakePoolIndex: number;
    stakeAmount: string;
    stakeItemIndex: number;
  };
}
export interface AminoMsgClaimReward extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgClaimReward";
  value: {
    creator: string;
    stakePoolIndex: number;
    stakeRecordIndex: number;
  };
}
export interface AminoMsgWithdraw extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgWithdraw";
  value: {
    creator: string;
    stakePoolIndex: number;
    stakeRecordIndex: number;
    withdrawAmount: string;
  };
}
export interface AminoMsgUpdateStakeItem extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgUpdateStakeItem";
  value: {
    creator: string;
    index: number;
    stakePoolIndex: number;
    lockSecond: string;
    powerRewardRate: string;
    enable: boolean;
  };
}
export interface AminoMsgAddMiningProvider extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddMiningProvider";
  value: {
    creator: string;
    userAddress: string;
  };
}
export interface AminoMsgRmMiningProvider extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgRmMiningProvider";
  value: {
    creator: string;
    userAddress: string;
  };
}
export interface AminoMsgAddRewardToken extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddRewardToken";
  value: {
    creator: string;
    denom: string;
    minTotalRewardAmount: string;
    minRewardPerSecond: string;
  };
}
export interface AminoMsgSetMaxRewardPoolNumber extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber";
  value: {
    creator: string;
    number: number;
  };
}
export interface AminoMsgUpdateRewardPool extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgUpdateRewardPool";
  value: {
    creator: string;
    stakePoolIndex: number;
    rewardPoolIndex: number;
    rewardPerSecond: string;
  };
}
export interface AminoMsgToggleProviderSwitch extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgToggleProviderSwitch";
  value: {
    creator: string;
  };
}
export interface AminoMsgSetMaxStakeItemNumber extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber";
  value: {
    creator: string;
    number: number;
  };
}
export interface AminoMsgAddReward extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddReward";
  value: {
    creator: string;
    stakePoolIndex: number;
    rewardPoolIndex: number;
    addAmount: string;
    startTimestamp: string;
    rewardPerSecond: string;
  };
}
export interface AminoMsgToggleEmergencySwitch extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgToggleEmergencySwitch";
  value: {
    creator: string;
    stakePoolIndex: number;
  };
}
export interface AminoMsgEmergencyWithdraw extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgEmergencyWithdraw";
  value: {
    creator: string;
    stakePoolIndex: number;
    stakeRecordIndex: number;
  };
}
export interface AminoMsgAddStakeToken extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgAddStakeToken";
  value: {
    creator: string;
    denom: string;
  };
}
export interface AminoMsgRmRewardToken extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgRmRewardToken";
  value: {
    creator: string;
    denom: string;
  };
}
export interface AminoMsgRmStakeToken extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgRmStakeToken";
  value: {
    creator: string;
    denom: string;
  };
}
export interface AminoMsgSetStakeItemLimit extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgSetStakeItemLimit";
  value: {
    creator: string;
    maxLockSecond: string;
    maxPowerRewardRate: string;
  };
}
export interface AminoMsgWithdrawRewardToken extends AminoMsg {
  type: "/stafihub.stafihub.mining.MsgWithdrawRewardToken";
  value: {
    creator: string;
    stakePoolIndex: number;
    rewardPoolIndex: number;
    withdrawAmount: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.mining.MsgAddStakePool": {
    aminoType: "/stafihub.stafihub.mining.MsgAddStakePool",
    toAmino: ({
      creator,
      stakeTokenDenom,
      rewardPoolInfoList,
      stakeItemInfoList
    }: MsgAddStakePool): AminoMsgAddStakePool["value"] => {
      return {
        creator,
        stakeTokenDenom,
        rewardPoolInfoList: rewardPoolInfoList.map(el0 => ({
          rewardTokenDenom: el0.rewardTokenDenom,
          totalRewardAmount: el0.totalRewardAmount,
          rewardPerSecond: el0.rewardPerSecond,
          startTimestamp: el0.startTimestamp.toString()
        })),
        stakeItemInfoList: stakeItemInfoList.map(el0 => ({
          lockSecond: el0.lockSecond.toString(),
          powerRewardRate: el0.powerRewardRate
        }))
      };
    },
    fromAmino: ({
      creator,
      stakeTokenDenom,
      rewardPoolInfoList,
      stakeItemInfoList
    }: AminoMsgAddStakePool["value"]): MsgAddStakePool => {
      return {
        creator,
        stakeTokenDenom,
        rewardPoolInfoList: rewardPoolInfoList.map(el0 => ({
          rewardTokenDenom: el0.rewardTokenDenom,
          totalRewardAmount: el0.totalRewardAmount,
          rewardPerSecond: el0.rewardPerSecond,
          startTimestamp: Long.fromString(el0.startTimestamp)
        })),
        stakeItemInfoList: stakeItemInfoList.map(el0 => ({
          lockSecond: Long.fromString(el0.lockSecond),
          powerRewardRate: el0.powerRewardRate
        }))
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddStakeItem": {
    aminoType: "/stafihub.stafihub.mining.MsgAddStakeItem",
    toAmino: ({
      creator,
      stakePoolIndex,
      lockSecond,
      powerRewardRate,
      enable
    }: MsgAddStakeItem): AminoMsgAddStakeItem["value"] => {
      return {
        creator,
        stakePoolIndex,
        lockSecond: lockSecond.toString(),
        powerRewardRate,
        enable
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      lockSecond,
      powerRewardRate,
      enable
    }: AminoMsgAddStakeItem["value"]): MsgAddStakeItem => {
      return {
        creator,
        stakePoolIndex,
        lockSecond: Long.fromString(lockSecond),
        powerRewardRate,
        enable
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddRewardPool": {
    aminoType: "/stafihub.stafihub.mining.MsgAddRewardPool",
    toAmino: ({
      creator,
      stakePoolIndex,
      rewardTokenDenom,
      totalRewardAmount,
      rewardPerSecond,
      startTimestamp
    }: MsgAddRewardPool): AminoMsgAddRewardPool["value"] => {
      return {
        creator,
        stakePoolIndex,
        rewardTokenDenom,
        totalRewardAmount,
        rewardPerSecond,
        startTimestamp: startTimestamp.toString()
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      rewardTokenDenom,
      totalRewardAmount,
      rewardPerSecond,
      startTimestamp
    }: AminoMsgAddRewardPool["value"]): MsgAddRewardPool => {
      return {
        creator,
        stakePoolIndex,
        rewardTokenDenom,
        totalRewardAmount,
        rewardPerSecond,
        startTimestamp: Long.fromString(startTimestamp)
      };
    }
  },
  "/stafihub.stafihub.mining.MsgStake": {
    aminoType: "/stafihub.stafihub.mining.MsgStake",
    toAmino: ({
      creator,
      stakePoolIndex,
      stakeAmount,
      stakeItemIndex
    }: MsgStake): AminoMsgStake["value"] => {
      return {
        creator,
        stakePoolIndex,
        stakeAmount,
        stakeItemIndex
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      stakeAmount,
      stakeItemIndex
    }: AminoMsgStake["value"]): MsgStake => {
      return {
        creator,
        stakePoolIndex,
        stakeAmount,
        stakeItemIndex
      };
    }
  },
  "/stafihub.stafihub.mining.MsgClaimReward": {
    aminoType: "/stafihub.stafihub.mining.MsgClaimReward",
    toAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex
    }: MsgClaimReward): AminoMsgClaimReward["value"] => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex
    }: AminoMsgClaimReward["value"]): MsgClaimReward => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex
      };
    }
  },
  "/stafihub.stafihub.mining.MsgWithdraw": {
    aminoType: "/stafihub.stafihub.mining.MsgWithdraw",
    toAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex,
      withdrawAmount
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex,
        withdrawAmount
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex,
      withdrawAmount
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex,
        withdrawAmount
      };
    }
  },
  "/stafihub.stafihub.mining.MsgUpdateStakeItem": {
    aminoType: "/stafihub.stafihub.mining.MsgUpdateStakeItem",
    toAmino: ({
      creator,
      index,
      stakePoolIndex,
      lockSecond,
      powerRewardRate,
      enable
    }: MsgUpdateStakeItem): AminoMsgUpdateStakeItem["value"] => {
      return {
        creator,
        index,
        stakePoolIndex,
        lockSecond: lockSecond.toString(),
        powerRewardRate,
        enable
      };
    },
    fromAmino: ({
      creator,
      index,
      stakePoolIndex,
      lockSecond,
      powerRewardRate,
      enable
    }: AminoMsgUpdateStakeItem["value"]): MsgUpdateStakeItem => {
      return {
        creator,
        index,
        stakePoolIndex,
        lockSecond: Long.fromString(lockSecond),
        powerRewardRate,
        enable
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddMiningProvider": {
    aminoType: "/stafihub.stafihub.mining.MsgAddMiningProvider",
    toAmino: ({
      creator,
      userAddress
    }: MsgAddMiningProvider): AminoMsgAddMiningProvider["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgAddMiningProvider["value"]): MsgAddMiningProvider => {
      return {
        creator,
        userAddress
      };
    }
  },
  "/stafihub.stafihub.mining.MsgRmMiningProvider": {
    aminoType: "/stafihub.stafihub.mining.MsgRmMiningProvider",
    toAmino: ({
      creator,
      userAddress
    }: MsgRmMiningProvider): AminoMsgRmMiningProvider["value"] => {
      return {
        creator,
        userAddress
      };
    },
    fromAmino: ({
      creator,
      userAddress
    }: AminoMsgRmMiningProvider["value"]): MsgRmMiningProvider => {
      return {
        creator,
        userAddress
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddRewardToken": {
    aminoType: "/stafihub.stafihub.mining.MsgAddRewardToken",
    toAmino: ({
      creator,
      denom,
      minTotalRewardAmount,
      minRewardPerSecond
    }: MsgAddRewardToken): AminoMsgAddRewardToken["value"] => {
      return {
        creator,
        denom,
        minTotalRewardAmount,
        minRewardPerSecond
      };
    },
    fromAmino: ({
      creator,
      denom,
      minTotalRewardAmount,
      minRewardPerSecond
    }: AminoMsgAddRewardToken["value"]): MsgAddRewardToken => {
      return {
        creator,
        denom,
        minTotalRewardAmount,
        minRewardPerSecond
      };
    }
  },
  "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber": {
    aminoType: "/stafihub.stafihub.mining.MsgSetMaxRewardPoolNumber",
    toAmino: ({
      creator,
      number
    }: MsgSetMaxRewardPoolNumber): AminoMsgSetMaxRewardPoolNumber["value"] => {
      return {
        creator,
        number
      };
    },
    fromAmino: ({
      creator,
      number
    }: AminoMsgSetMaxRewardPoolNumber["value"]): MsgSetMaxRewardPoolNumber => {
      return {
        creator,
        number
      };
    }
  },
  "/stafihub.stafihub.mining.MsgUpdateRewardPool": {
    aminoType: "/stafihub.stafihub.mining.MsgUpdateRewardPool",
    toAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond
    }: MsgUpdateRewardPool): AminoMsgUpdateRewardPool["value"] => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        rewardPerSecond
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      rewardPerSecond
    }: AminoMsgUpdateRewardPool["value"]): MsgUpdateRewardPool => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        rewardPerSecond
      };
    }
  },
  "/stafihub.stafihub.mining.MsgToggleProviderSwitch": {
    aminoType: "/stafihub.stafihub.mining.MsgToggleProviderSwitch",
    toAmino: ({
      creator
    }: MsgToggleProviderSwitch): AminoMsgToggleProviderSwitch["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgToggleProviderSwitch["value"]): MsgToggleProviderSwitch => {
      return {
        creator
      };
    }
  },
  "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber": {
    aminoType: "/stafihub.stafihub.mining.MsgSetMaxStakeItemNumber",
    toAmino: ({
      creator,
      number
    }: MsgSetMaxStakeItemNumber): AminoMsgSetMaxStakeItemNumber["value"] => {
      return {
        creator,
        number
      };
    },
    fromAmino: ({
      creator,
      number
    }: AminoMsgSetMaxStakeItemNumber["value"]): MsgSetMaxStakeItemNumber => {
      return {
        creator,
        number
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddReward": {
    aminoType: "/stafihub.stafihub.mining.MsgAddReward",
    toAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      addAmount,
      startTimestamp,
      rewardPerSecond
    }: MsgAddReward): AminoMsgAddReward["value"] => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        addAmount,
        startTimestamp: startTimestamp.toString(),
        rewardPerSecond
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      addAmount,
      startTimestamp,
      rewardPerSecond
    }: AminoMsgAddReward["value"]): MsgAddReward => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        addAmount,
        startTimestamp: Long.fromString(startTimestamp),
        rewardPerSecond
      };
    }
  },
  "/stafihub.stafihub.mining.MsgToggleEmergencySwitch": {
    aminoType: "/stafihub.stafihub.mining.MsgToggleEmergencySwitch",
    toAmino: ({
      creator,
      stakePoolIndex
    }: MsgToggleEmergencySwitch): AminoMsgToggleEmergencySwitch["value"] => {
      return {
        creator,
        stakePoolIndex
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex
    }: AminoMsgToggleEmergencySwitch["value"]): MsgToggleEmergencySwitch => {
      return {
        creator,
        stakePoolIndex
      };
    }
  },
  "/stafihub.stafihub.mining.MsgEmergencyWithdraw": {
    aminoType: "/stafihub.stafihub.mining.MsgEmergencyWithdraw",
    toAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex
    }: MsgEmergencyWithdraw): AminoMsgEmergencyWithdraw["value"] => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      stakeRecordIndex
    }: AminoMsgEmergencyWithdraw["value"]): MsgEmergencyWithdraw => {
      return {
        creator,
        stakePoolIndex,
        stakeRecordIndex
      };
    }
  },
  "/stafihub.stafihub.mining.MsgAddStakeToken": {
    aminoType: "/stafihub.stafihub.mining.MsgAddStakeToken",
    toAmino: ({
      creator,
      denom
    }: MsgAddStakeToken): AminoMsgAddStakeToken["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgAddStakeToken["value"]): MsgAddStakeToken => {
      return {
        creator,
        denom
      };
    }
  },
  "/stafihub.stafihub.mining.MsgRmRewardToken": {
    aminoType: "/stafihub.stafihub.mining.MsgRmRewardToken",
    toAmino: ({
      creator,
      denom
    }: MsgRmRewardToken): AminoMsgRmRewardToken["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgRmRewardToken["value"]): MsgRmRewardToken => {
      return {
        creator,
        denom
      };
    }
  },
  "/stafihub.stafihub.mining.MsgRmStakeToken": {
    aminoType: "/stafihub.stafihub.mining.MsgRmStakeToken",
    toAmino: ({
      creator,
      denom
    }: MsgRmStakeToken): AminoMsgRmStakeToken["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgRmStakeToken["value"]): MsgRmStakeToken => {
      return {
        creator,
        denom
      };
    }
  },
  "/stafihub.stafihub.mining.MsgSetStakeItemLimit": {
    aminoType: "/stafihub.stafihub.mining.MsgSetStakeItemLimit",
    toAmino: ({
      creator,
      maxLockSecond,
      maxPowerRewardRate
    }: MsgSetStakeItemLimit): AminoMsgSetStakeItemLimit["value"] => {
      return {
        creator,
        maxLockSecond: maxLockSecond.toString(),
        maxPowerRewardRate
      };
    },
    fromAmino: ({
      creator,
      maxLockSecond,
      maxPowerRewardRate
    }: AminoMsgSetStakeItemLimit["value"]): MsgSetStakeItemLimit => {
      return {
        creator,
        maxLockSecond: Long.fromString(maxLockSecond),
        maxPowerRewardRate
      };
    }
  },
  "/stafihub.stafihub.mining.MsgWithdrawRewardToken": {
    aminoType: "/stafihub.stafihub.mining.MsgWithdrawRewardToken",
    toAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      withdrawAmount
    }: MsgWithdrawRewardToken): AminoMsgWithdrawRewardToken["value"] => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        withdrawAmount
      };
    },
    fromAmino: ({
      creator,
      stakePoolIndex,
      rewardPoolIndex,
      withdrawAmount
    }: AminoMsgWithdrawRewardToken["value"]): MsgWithdrawRewardToken => {
      return {
        creator,
        stakePoolIndex,
        rewardPoolIndex,
        withdrawAmount
      };
    }
  }
};
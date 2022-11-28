//@ts-nocheck
import { originalTxTypeFromJSON } from "./ledger";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgSetEraUnbondLimit, MsgSetPoolDetail, MsgSetLeastBond, MsgClearCurrentEraSnapShots, MsgSetStakingRewardCommission, MsgSetProtocolFeeReceiver, MsgSetUnbondRelayFee, MsgLiquidityUnbond, MsgSetUnbondCommission, MsgSubmitSignature, MsgSetRParams, MsgSetRelayFeeReceiver, MsgSetRelayGasPrice, MsgSetEraSeconds, MsgRmBondedPool, MsgMigrateInit, MsgMigrateUnbondings, MsgToggleUnbondSwitch, MsgUnsealMigrateInit, MsgRegisterIcaPool, MsgSetWithdrawalAddr, MsgInitPool } from "./tx";
export interface AminoMsgSetEraUnbondLimit extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit";
  value: {
    creator: string;
    denom: string;
    limit: number;
  };
}
export interface AminoMsgSetPoolDetail extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetPoolDetail";
  value: {
    creator: string;
    denom: string;
    pool: string;
    subAccounts: string[];
    threshold: number;
  };
}
export interface AminoMsgSetLeastBond extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetLeastBond";
  value: {
    creator: string;
    denom: string;
    leastBond: string;
  };
}
export interface AminoMsgClearCurrentEraSnapShots extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots";
  value: {
    creator: string;
    denom: string;
  };
}
export interface AminoMsgSetStakingRewardCommission extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission";
  value: {
    creator: string;
    denom: string;
    commission: string;
  };
}
export interface AminoMsgSetProtocolFeeReceiver extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver";
  value: {
    creator: string;
    receiver: string;
  };
}
export interface AminoMsgSetUnbondRelayFee extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee";
  value: {
    creator: string;
    denom: string;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgLiquidityUnbond extends AminoMsg {
  type: "ledger/LiquidityUnbond";
  value: {
    creator: string;
    pool: string;
    value: {
      denom: string;
      amount: string;
    };
    recipient: string;
  };
}
export interface AminoMsgSetUnbondCommission extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetUnbondCommission";
  value: {
    creator: string;
    denom: string;
    commission: string;
  };
}
export interface AminoMsgSubmitSignature extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSubmitSignature";
  value: {
    creator: string;
    denom: string;
    era: number;
    pool: string;
    txType: number;
    propId: string;
    signature: string;
  };
}
export interface AminoMsgSetRParams extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetRParams";
  value: {
    creator: string;
    denom: string;
    gasPrice: string;
    eraSeconds: number;
    offset: number;
    bondingDuration: number;
    leastBond: string;
  };
}
export interface AminoMsgSetRelayFeeReceiver extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver";
  value: {
    creator: string;
    denom: string;
    receiver: string;
  };
}
export interface AminoMsgSetRelayGasPrice extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetRelayGasPrice";
  value: {
    creator: string;
    denom: string;
    gasPrice: string;
  };
}
export interface AminoMsgSetEraSeconds extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetEraSeconds";
  value: {
    creator: string;
    denom: string;
    eraSeconds: number;
    bondingDuration: number;
    offset: number;
  };
}
export interface AminoMsgRmBondedPool extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgRmBondedPool";
  value: {
    creator: string;
    denom: string;
    address: string;
  };
}
export interface AminoMsgMigrateInit extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgMigrateInit";
  value: {
    creator: string;
    denom: string;
    pool: string;
    totalSupply: string;
    active: string;
    bond: string;
    unbond: string;
    exchangeRate: string;
    totalProtocolFee: string;
  };
}
export interface AminoMsgMigrateUnbondings extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgMigrateUnbondings";
  value: {
    creator: string;
    denom: string;
    pool: string;
    era: number;
    unbondings: {
      unbonder: string;
      amount: string;
      recipient: string;
    }[];
  };
}
export interface AminoMsgToggleUnbondSwitch extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch";
  value: {
    creator: string;
    denom: string;
  };
}
export interface AminoMsgUnsealMigrateInit extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgUnsealMigrateInit";
  value: {
    creator: string;
  };
}
export interface AminoMsgRegisterIcaPool extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgRegisterIcaPool";
  value: {
    creator: string;
    denom: string;
    connectionId: string;
  };
}
export interface AminoMsgSetWithdrawalAddr extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr";
  value: {
    creator: string;
    delegationAddr: string;
  };
}
export interface AminoMsgInitPool extends AminoMsg {
  type: "/stafihub.stafihub.ledger.MsgInitPool";
  value: {
    creator: string;
    denom: string;
    pool: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetEraUnbondLimit",
    toAmino: ({
      creator,
      denom,
      limit
    }: MsgSetEraUnbondLimit): AminoMsgSetEraUnbondLimit["value"] => {
      return {
        creator,
        denom,
        limit
      };
    },
    fromAmino: ({
      creator,
      denom,
      limit
    }: AminoMsgSetEraUnbondLimit["value"]): MsgSetEraUnbondLimit => {
      return {
        creator,
        denom,
        limit
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetPoolDetail": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetPoolDetail",
    toAmino: ({
      creator,
      denom,
      pool,
      subAccounts,
      threshold
    }: MsgSetPoolDetail): AminoMsgSetPoolDetail["value"] => {
      return {
        creator,
        denom,
        pool,
        subAccounts,
        threshold
      };
    },
    fromAmino: ({
      creator,
      denom,
      pool,
      subAccounts,
      threshold
    }: AminoMsgSetPoolDetail["value"]): MsgSetPoolDetail => {
      return {
        creator,
        denom,
        pool,
        subAccounts,
        threshold
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetLeastBond": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetLeastBond",
    toAmino: ({
      creator,
      denom,
      leastBond
    }: MsgSetLeastBond): AminoMsgSetLeastBond["value"] => {
      return {
        creator,
        denom,
        leastBond
      };
    },
    fromAmino: ({
      creator,
      denom,
      leastBond
    }: AminoMsgSetLeastBond["value"]): MsgSetLeastBond => {
      return {
        creator,
        denom,
        leastBond
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots": {
    aminoType: "/stafihub.stafihub.ledger.MsgClearCurrentEraSnapShots",
    toAmino: ({
      creator,
      denom
    }: MsgClearCurrentEraSnapShots): AminoMsgClearCurrentEraSnapShots["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgClearCurrentEraSnapShots["value"]): MsgClearCurrentEraSnapShots => {
      return {
        creator,
        denom
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetStakingRewardCommission",
    toAmino: ({
      creator,
      denom,
      commission
    }: MsgSetStakingRewardCommission): AminoMsgSetStakingRewardCommission["value"] => {
      return {
        creator,
        denom,
        commission
      };
    },
    fromAmino: ({
      creator,
      denom,
      commission
    }: AminoMsgSetStakingRewardCommission["value"]): MsgSetStakingRewardCommission => {
      return {
        creator,
        denom,
        commission
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetProtocolFeeReceiver",
    toAmino: ({
      creator,
      receiver
    }: MsgSetProtocolFeeReceiver): AminoMsgSetProtocolFeeReceiver["value"] => {
      return {
        creator,
        receiver
      };
    },
    fromAmino: ({
      creator,
      receiver
    }: AminoMsgSetProtocolFeeReceiver["value"]): MsgSetProtocolFeeReceiver => {
      return {
        creator,
        receiver
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetUnbondRelayFee",
    toAmino: ({
      creator,
      denom,
      value
    }: MsgSetUnbondRelayFee): AminoMsgSetUnbondRelayFee["value"] => {
      return {
        creator,
        denom,
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      creator,
      denom,
      value
    }: AminoMsgSetUnbondRelayFee["value"]): MsgSetUnbondRelayFee => {
      return {
        creator,
        denom,
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgLiquidityUnbond": {
    aminoType: "ledger/LiquidityUnbond",
    toAmino: ({
      creator,
      pool,
      value,
      recipient
    }: MsgLiquidityUnbond): AminoMsgLiquidityUnbond["value"] => {
      return {
        creator,
        pool,
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        },
        recipient
      };
    },
    fromAmino: ({
      creator,
      pool,
      value,
      recipient
    }: AminoMsgLiquidityUnbond["value"]): MsgLiquidityUnbond => {
      return {
        creator,
        pool,
        value: {
          denom: value.denom,
          amount: value.amount
        },
        recipient
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetUnbondCommission": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetUnbondCommission",
    toAmino: ({
      creator,
      denom,
      commission
    }: MsgSetUnbondCommission): AminoMsgSetUnbondCommission["value"] => {
      return {
        creator,
        denom,
        commission
      };
    },
    fromAmino: ({
      creator,
      denom,
      commission
    }: AminoMsgSetUnbondCommission["value"]): MsgSetUnbondCommission => {
      return {
        creator,
        denom,
        commission
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSubmitSignature": {
    aminoType: "/stafihub.stafihub.ledger.MsgSubmitSignature",
    toAmino: ({
      creator,
      denom,
      era,
      pool,
      txType,
      propId,
      signature
    }: MsgSubmitSignature): AminoMsgSubmitSignature["value"] => {
      return {
        creator,
        denom,
        era,
        pool,
        txType,
        propId,
        signature
      };
    },
    fromAmino: ({
      creator,
      denom,
      era,
      pool,
      txType,
      propId,
      signature
    }: AminoMsgSubmitSignature["value"]): MsgSubmitSignature => {
      return {
        creator,
        denom,
        era,
        pool,
        txType: originalTxTypeFromJSON(txType),
        propId,
        signature
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetRParams": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetRParams",
    toAmino: ({
      creator,
      denom,
      gasPrice,
      eraSeconds,
      offset,
      bondingDuration,
      leastBond
    }: MsgSetRParams): AminoMsgSetRParams["value"] => {
      return {
        creator,
        denom,
        gasPrice,
        eraSeconds,
        offset,
        bondingDuration,
        leastBond
      };
    },
    fromAmino: ({
      creator,
      denom,
      gasPrice,
      eraSeconds,
      offset,
      bondingDuration,
      leastBond
    }: AminoMsgSetRParams["value"]): MsgSetRParams => {
      return {
        creator,
        denom,
        gasPrice,
        eraSeconds,
        offset,
        bondingDuration,
        leastBond
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetRelayFeeReceiver",
    toAmino: ({
      creator,
      denom,
      receiver
    }: MsgSetRelayFeeReceiver): AminoMsgSetRelayFeeReceiver["value"] => {
      return {
        creator,
        denom,
        receiver
      };
    },
    fromAmino: ({
      creator,
      denom,
      receiver
    }: AminoMsgSetRelayFeeReceiver["value"]): MsgSetRelayFeeReceiver => {
      return {
        creator,
        denom,
        receiver
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetRelayGasPrice": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetRelayGasPrice",
    toAmino: ({
      creator,
      denom,
      gasPrice
    }: MsgSetRelayGasPrice): AminoMsgSetRelayGasPrice["value"] => {
      return {
        creator,
        denom,
        gasPrice
      };
    },
    fromAmino: ({
      creator,
      denom,
      gasPrice
    }: AminoMsgSetRelayGasPrice["value"]): MsgSetRelayGasPrice => {
      return {
        creator,
        denom,
        gasPrice
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetEraSeconds": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetEraSeconds",
    toAmino: ({
      creator,
      denom,
      eraSeconds,
      bondingDuration,
      offset
    }: MsgSetEraSeconds): AminoMsgSetEraSeconds["value"] => {
      return {
        creator,
        denom,
        eraSeconds,
        bondingDuration,
        offset
      };
    },
    fromAmino: ({
      creator,
      denom,
      eraSeconds,
      bondingDuration,
      offset
    }: AminoMsgSetEraSeconds["value"]): MsgSetEraSeconds => {
      return {
        creator,
        denom,
        eraSeconds,
        bondingDuration,
        offset
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgRmBondedPool": {
    aminoType: "/stafihub.stafihub.ledger.MsgRmBondedPool",
    toAmino: ({
      creator,
      denom,
      address
    }: MsgRmBondedPool): AminoMsgRmBondedPool["value"] => {
      return {
        creator,
        denom,
        address
      };
    },
    fromAmino: ({
      creator,
      denom,
      address
    }: AminoMsgRmBondedPool["value"]): MsgRmBondedPool => {
      return {
        creator,
        denom,
        address
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgMigrateInit": {
    aminoType: "/stafihub.stafihub.ledger.MsgMigrateInit",
    toAmino: ({
      creator,
      denom,
      pool,
      totalSupply,
      active,
      bond,
      unbond,
      exchangeRate,
      totalProtocolFee
    }: MsgMigrateInit): AminoMsgMigrateInit["value"] => {
      return {
        creator,
        denom,
        pool,
        totalSupply,
        active,
        bond,
        unbond,
        exchangeRate,
        totalProtocolFee
      };
    },
    fromAmino: ({
      creator,
      denom,
      pool,
      totalSupply,
      active,
      bond,
      unbond,
      exchangeRate,
      totalProtocolFee
    }: AminoMsgMigrateInit["value"]): MsgMigrateInit => {
      return {
        creator,
        denom,
        pool,
        totalSupply,
        active,
        bond,
        unbond,
        exchangeRate,
        totalProtocolFee
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgMigrateUnbondings": {
    aminoType: "/stafihub.stafihub.ledger.MsgMigrateUnbondings",
    toAmino: ({
      creator,
      denom,
      pool,
      era,
      unbondings
    }: MsgMigrateUnbondings): AminoMsgMigrateUnbondings["value"] => {
      return {
        creator,
        denom,
        pool,
        era,
        unbondings: unbondings.map(el0 => ({
          unbonder: el0.unbonder,
          amount: el0.amount,
          recipient: el0.recipient
        }))
      };
    },
    fromAmino: ({
      creator,
      denom,
      pool,
      era,
      unbondings
    }: AminoMsgMigrateUnbondings["value"]): MsgMigrateUnbondings => {
      return {
        creator,
        denom,
        pool,
        era,
        unbondings: unbondings.map(el0 => ({
          unbonder: el0.unbonder,
          amount: el0.amount,
          recipient: el0.recipient
        }))
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch": {
    aminoType: "/stafihub.stafihub.ledger.MsgToggleUnbondSwitch",
    toAmino: ({
      creator,
      denom
    }: MsgToggleUnbondSwitch): AminoMsgToggleUnbondSwitch["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgToggleUnbondSwitch["value"]): MsgToggleUnbondSwitch => {
      return {
        creator,
        denom
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgUnsealMigrateInit": {
    aminoType: "/stafihub.stafihub.ledger.MsgUnsealMigrateInit",
    toAmino: ({
      creator
    }: MsgUnsealMigrateInit): AminoMsgUnsealMigrateInit["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgUnsealMigrateInit["value"]): MsgUnsealMigrateInit => {
      return {
        creator
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgRegisterIcaPool": {
    aminoType: "/stafihub.stafihub.ledger.MsgRegisterIcaPool",
    toAmino: ({
      creator,
      denom,
      connectionId
    }: MsgRegisterIcaPool): AminoMsgRegisterIcaPool["value"] => {
      return {
        creator,
        denom,
        connectionId
      };
    },
    fromAmino: ({
      creator,
      denom,
      connectionId
    }: AminoMsgRegisterIcaPool["value"]): MsgRegisterIcaPool => {
      return {
        creator,
        denom,
        connectionId
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr": {
    aminoType: "/stafihub.stafihub.ledger.MsgSetWithdrawalAddr",
    toAmino: ({
      creator,
      delegationAddr
    }: MsgSetWithdrawalAddr): AminoMsgSetWithdrawalAddr["value"] => {
      return {
        creator,
        delegationAddr
      };
    },
    fromAmino: ({
      creator,
      delegationAddr
    }: AminoMsgSetWithdrawalAddr["value"]): MsgSetWithdrawalAddr => {
      return {
        creator,
        delegationAddr
      };
    }
  },
  "/stafihub.stafihub.ledger.MsgInitPool": {
    aminoType: "/stafihub.stafihub.ledger.MsgInitPool",
    toAmino: ({
      creator,
      denom,
      pool
    }: MsgInitPool): AminoMsgInitPool["value"] => {
      return {
        creator,
        denom,
        pool
      };
    },
    fromAmino: ({
      creator,
      denom,
      pool
    }: AminoMsgInitPool["value"]): MsgInitPool => {
      return {
        creator,
        denom,
        pool
      };
    }
  }
};
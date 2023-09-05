import { AminoMsg, decodeBech32Pubkey, encodeBech32Pubkey } from "@cosmjs/amino";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgUnbondValidator, MsgCancelUnbondingDelegation, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
export interface AminoMsgCreateValidator extends AminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: {
      type_url: string;
      value: Uint8Array;
    };
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgEditValidator extends AminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
  };
}
export interface AminoMsgDelegate extends AminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBeginRedelegate extends AminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUndelegate extends AminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUnbondValidator extends AminoMsg {
  type: "cosmos-sdk/MsgUnbondValidator";
  value: {
    validator_address: string;
  };
}
export interface AminoMsgCancelUnbondingDelegation extends AminoMsg {
  type: "cosmos-sdk/MsgCancelUnbondingDelegation";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    creation_height: string;
  };
}
export interface AminoMsgTokenizeShares extends AminoMsg {
  type: "cosmos-sdk/MsgTokenizeShares";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    tokenized_share_owner: string;
  };
}
export interface AminoMsgRedeemTokensForShares extends AminoMsg {
  type: "cosmos-sdk/MsgRedeemTokensForShares";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgTransferTokenizeShareRecord extends AminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeShareRecord";
  value: {
    tokenize_share_record_id: string;
    sender: string;
    new_owner: string;
  };
}
export interface AminoMsgDisableTokenizeShares extends AminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface AminoMsgEnableTokenizeShares extends AminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface AminoMsgValidatorBond extends AminoMsg {
  type: "cosmos-sdk/MsgValidatorBond";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      minSelfDelegation,
      delegatorAddress,
      validatorAddress,
      pubkey,
      value
    }: MsgCreateValidator): AminoMsgCreateValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.maxRate,
          max_change_rate: commission.maxChangeRate
        },
        min_self_delegation: minSelfDelegation,
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        pubkey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64(decodeBech32Pubkey(pubkey).value)
        },
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: AminoMsgCreateValidator["value"]): MsgCreateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          maxRate: commission.max_rate,
          maxChangeRate: commission.max_change_rate
        },
        minSelfDelegation: min_self_delegation,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        pubkey: encodeBech32Pubkey({
          type: "tendermint/PubKeySecp256k1",
          value: toBase64(pubkey.value)
        }, "cosmos"),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validatorAddress,
      commissionRate,
      minSelfDelegation
    }: MsgEditValidator): AminoMsgEditValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        validator_address: validatorAddress,
        commission_rate: commissionRate,
        min_self_delegation: minSelfDelegation
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: AminoMsgEditValidator["value"]): MsgEditValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        validatorAddress: validator_address,
        commissionRate: commission_rate,
        minSelfDelegation: min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgDelegate): AminoMsgDelegate["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: AminoMsgDelegate["value"]): MsgDelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount
    }: MsgBeginRedelegate): AminoMsgBeginRedelegate["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_src_address: validatorSrcAddress,
        validator_dst_address: validatorDstAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: AminoMsgBeginRedelegate["value"]): MsgBeginRedelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }: MsgUndelegate): AminoMsgUndelegate["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: AminoMsgUndelegate["value"]): MsgUndelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUnbondValidator": {
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    toAmino: ({
      validatorAddress
    }: MsgUnbondValidator): AminoMsgUnbondValidator["value"] => {
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      validator_address
    }: AminoMsgUnbondValidator["value"]): MsgUnbondValidator => {
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      creationHeight
    }: MsgCancelUnbondingDelegation): AminoMsgCancelUnbondingDelegation["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        creation_height: creationHeight.toString()
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height
    }: AminoMsgCancelUnbondingDelegation["value"]): MsgCancelUnbondingDelegation => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        creationHeight: Long.fromString(creation_height)
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgTokenizeShares": {
    aminoType: "cosmos-sdk/MsgTokenizeShares",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      tokenizedShareOwner
    }: MsgTokenizeShares): AminoMsgTokenizeShares["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        tokenized_share_owner: tokenizedShareOwner
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      tokenized_share_owner
    }: AminoMsgTokenizeShares["value"]): MsgTokenizeShares => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        tokenizedShareOwner: tokenized_share_owner
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    toAmino: ({
      delegatorAddress,
      amount
    }: MsgRedeemTokensForShares): AminoMsgRedeemTokensForShares["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      amount
    }: AminoMsgRedeemTokensForShares["value"]): MsgRedeemTokensForShares => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    toAmino: ({
      tokenizeShareRecordId,
      sender,
      newOwner
    }: MsgTransferTokenizeShareRecord): AminoMsgTransferTokenizeShareRecord["value"] => {
      return {
        tokenize_share_record_id: tokenizeShareRecordId.toString(),
        sender,
        new_owner: newOwner
      };
    },
    fromAmino: ({
      tokenize_share_record_id,
      sender,
      new_owner
    }: AminoMsgTransferTokenizeShareRecord["value"]): MsgTransferTokenizeShareRecord => {
      return {
        tokenizeShareRecordId: Long.fromString(tokenize_share_record_id),
        sender,
        newOwner: new_owner
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    toAmino: ({
      delegatorAddress
    }: MsgDisableTokenizeShares): AminoMsgDisableTokenizeShares["value"] => {
      return {
        delegator_address: delegatorAddress
      };
    },
    fromAmino: ({
      delegator_address
    }: AminoMsgDisableTokenizeShares["value"]): MsgDisableTokenizeShares => {
      return {
        delegatorAddress: delegator_address
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    toAmino: ({
      delegatorAddress
    }: MsgEnableTokenizeShares): AminoMsgEnableTokenizeShares["value"] => {
      return {
        delegator_address: delegatorAddress
      };
    },
    fromAmino: ({
      delegator_address
    }: AminoMsgEnableTokenizeShares["value"]): MsgEnableTokenizeShares => {
      return {
        delegatorAddress: delegator_address
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgValidatorBond": {
    aminoType: "cosmos-sdk/MsgValidatorBond",
    toAmino: ({
      delegatorAddress,
      validatorAddress
    }: MsgValidatorBond): AminoMsgValidatorBond["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }: AminoMsgValidatorBond["value"]): MsgValidatorBond => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  }
};
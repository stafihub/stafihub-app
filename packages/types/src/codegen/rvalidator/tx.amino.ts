import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgInitRValidator, MsgSetCycleSeconds, MsgSetShuffleSeconds, MsgAddRValidator, MsgRmRValidator } from "./tx";
export interface AminoMsgInitRValidator extends AminoMsg {
  type: "/stafihub.stafihub.rvalidator.MsgInitRValidator";
  value: {
    creator: string;
    denom: string;
    poolAddress: string;
    valAddressList: string[];
  };
}
export interface AminoMsgSetCycleSeconds extends AminoMsg {
  type: "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds";
  value: {
    creator: string;
    denom: string;
    seconds: string;
  };
}
export interface AminoMsgSetShuffleSeconds extends AminoMsg {
  type: "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds";
  value: {
    creator: string;
    denom: string;
    seconds: string;
  };
}
export interface AminoMsgAddRValidator extends AminoMsg {
  type: "/stafihub.stafihub.rvalidator.MsgAddRValidator";
  value: {
    creator: string;
    denom: string;
    poolAddress: string;
    valAddress: string;
  };
}
export interface AminoMsgRmRValidator extends AminoMsg {
  type: "/stafihub.stafihub.rvalidator.MsgRmRValidator";
  value: {
    creator: string;
    denom: string;
    poolAddress: string;
    oldAddress: string;
    newAddress: string;
  };
}
export const AminoConverter = {
  "/stafihub.stafihub.rvalidator.MsgInitRValidator": {
    aminoType: "/stafihub.stafihub.rvalidator.MsgInitRValidator",
    toAmino: ({
      creator,
      denom,
      poolAddress,
      valAddressList
    }: MsgInitRValidator): AminoMsgInitRValidator["value"] => {
      return {
        creator,
        denom,
        poolAddress,
        valAddressList
      };
    },
    fromAmino: ({
      creator,
      denom,
      poolAddress,
      valAddressList
    }: AminoMsgInitRValidator["value"]): MsgInitRValidator => {
      return {
        creator,
        denom,
        poolAddress,
        valAddressList
      };
    }
  },
  "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds": {
    aminoType: "/stafihub.stafihub.rvalidator.MsgSetCycleSeconds",
    toAmino: ({
      creator,
      denom,
      seconds
    }: MsgSetCycleSeconds): AminoMsgSetCycleSeconds["value"] => {
      return {
        creator,
        denom,
        seconds: seconds.toString()
      };
    },
    fromAmino: ({
      creator,
      denom,
      seconds
    }: AminoMsgSetCycleSeconds["value"]): MsgSetCycleSeconds => {
      return {
        creator,
        denom,
        seconds: Long.fromString(seconds)
      };
    }
  },
  "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds": {
    aminoType: "/stafihub.stafihub.rvalidator.MsgSetShuffleSeconds",
    toAmino: ({
      creator,
      denom,
      seconds
    }: MsgSetShuffleSeconds): AminoMsgSetShuffleSeconds["value"] => {
      return {
        creator,
        denom,
        seconds: seconds.toString()
      };
    },
    fromAmino: ({
      creator,
      denom,
      seconds
    }: AminoMsgSetShuffleSeconds["value"]): MsgSetShuffleSeconds => {
      return {
        creator,
        denom,
        seconds: Long.fromString(seconds)
      };
    }
  },
  "/stafihub.stafihub.rvalidator.MsgAddRValidator": {
    aminoType: "/stafihub.stafihub.rvalidator.MsgAddRValidator",
    toAmino: ({
      creator,
      denom,
      poolAddress,
      valAddress
    }: MsgAddRValidator): AminoMsgAddRValidator["value"] => {
      return {
        creator,
        denom,
        poolAddress,
        valAddress
      };
    },
    fromAmino: ({
      creator,
      denom,
      poolAddress,
      valAddress
    }: AminoMsgAddRValidator["value"]): MsgAddRValidator => {
      return {
        creator,
        denom,
        poolAddress,
        valAddress
      };
    }
  },
  "/stafihub.stafihub.rvalidator.MsgRmRValidator": {
    aminoType: "/stafihub.stafihub.rvalidator.MsgRmRValidator",
    toAmino: ({
      creator,
      denom,
      poolAddress,
      oldAddress,
      newAddress
    }: MsgRmRValidator): AminoMsgRmRValidator["value"] => {
      return {
        creator,
        denom,
        poolAddress,
        oldAddress,
        newAddress
      };
    },
    fromAmino: ({
      creator,
      denom,
      poolAddress,
      oldAddress,
      newAddress
    }: AminoMsgRmRValidator["value"]): MsgRmRValidator => {
      return {
        creator,
        denom,
        poolAddress,
        oldAddress,
        newAddress
      };
    }
  }
};
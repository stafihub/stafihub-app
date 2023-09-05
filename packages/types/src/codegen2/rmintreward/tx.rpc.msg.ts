import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddMintRewardAct, MsgAddMintRewardActResponse, MsgUpdateMintRewardAct, MsgUpdateMintRewardActResponse, MsgClaimMintReward, MsgClaimMintRewardResponse, MsgProvideRewardToken, MsgProvideRewardTokenResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  addMintRewardAct(request: MsgAddMintRewardAct): Promise<MsgAddMintRewardActResponse>;
  updateMintRewardAct(request: MsgUpdateMintRewardAct): Promise<MsgUpdateMintRewardActResponse>;
  claimMintReward(request: MsgClaimMintReward): Promise<MsgClaimMintRewardResponse>;
  provideRewardToken(request: MsgProvideRewardToken): Promise<MsgProvideRewardTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addMintRewardAct = this.addMintRewardAct.bind(this);
    this.updateMintRewardAct = this.updateMintRewardAct.bind(this);
    this.claimMintReward = this.claimMintReward.bind(this);
    this.provideRewardToken = this.provideRewardToken.bind(this);
  }

  addMintRewardAct(request: MsgAddMintRewardAct): Promise<MsgAddMintRewardActResponse> {
    const data = MsgAddMintRewardAct.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Msg", "AddMintRewardAct", data);
    return promise.then(data => MsgAddMintRewardActResponse.decode(new _m0.Reader(data)));
  }

  updateMintRewardAct(request: MsgUpdateMintRewardAct): Promise<MsgUpdateMintRewardActResponse> {
    const data = MsgUpdateMintRewardAct.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Msg", "UpdateMintRewardAct", data);
    return promise.then(data => MsgUpdateMintRewardActResponse.decode(new _m0.Reader(data)));
  }

  claimMintReward(request: MsgClaimMintReward): Promise<MsgClaimMintRewardResponse> {
    const data = MsgClaimMintReward.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Msg", "ClaimMintReward", data);
    return promise.then(data => MsgClaimMintRewardResponse.decode(new _m0.Reader(data)));
  }

  provideRewardToken(request: MsgProvideRewardToken): Promise<MsgProvideRewardTokenResponse> {
    const data = MsgProvideRewardToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rmintreward.Msg", "ProvideRewardToken", data);
    return promise.then(data => MsgProvideRewardTokenResponse.decode(new _m0.Reader(data)));
  }

}
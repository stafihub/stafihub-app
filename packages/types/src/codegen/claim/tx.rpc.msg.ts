//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetMerkleRoot, MsgSetMerkleRootResponse, MsgClaim, MsgClaimResponse, MsgToggleClaimSwitch, MsgToggleClaimSwitchResponse, MsgProvideToken, MsgProvideTokenResponse, MsgWithdrawToken, MsgWithdrawTokenResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  setMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse>;
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
  toggleClaimSwitch(request: MsgToggleClaimSwitch): Promise<MsgToggleClaimSwitchResponse>;
  provideToken(request: MsgProvideToken): Promise<MsgProvideTokenResponse>;
  withdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setMerkleRoot = this.setMerkleRoot.bind(this);
    this.claim = this.claim.bind(this);
    this.toggleClaimSwitch = this.toggleClaimSwitch.bind(this);
    this.provideToken = this.provideToken.bind(this);
    this.withdrawToken = this.withdrawToken.bind(this);
  }

  setMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse> {
    const data = MsgSetMerkleRoot.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Msg", "SetMerkleRoot", data);
    return promise.then(data => MsgSetMerkleRootResponse.decode(new _m0.Reader(data)));
  }

  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new _m0.Reader(data)));
  }

  toggleClaimSwitch(request: MsgToggleClaimSwitch): Promise<MsgToggleClaimSwitchResponse> {
    const data = MsgToggleClaimSwitch.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Msg", "ToggleClaimSwitch", data);
    return promise.then(data => MsgToggleClaimSwitchResponse.decode(new _m0.Reader(data)));
  }

  provideToken(request: MsgProvideToken): Promise<MsgProvideTokenResponse> {
    const data = MsgProvideToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Msg", "ProvideToken", data);
    return promise.then(data => MsgProvideTokenResponse.decode(new _m0.Reader(data)));
  }

  withdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse> {
    const data = MsgWithdrawToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.claim.Msg", "WithdrawToken", data);
    return promise.then(data => MsgWithdrawTokenResponse.decode(new _m0.Reader(data)));
  }

}
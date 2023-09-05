import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddStakePool, MsgAddStakePoolResponse, MsgAddStakeItem, MsgAddStakeItemResponse, MsgAddRewardPool, MsgAddRewardPoolResponse, MsgStake, MsgStakeResponse, MsgClaimReward, MsgClaimRewardResponse, MsgWithdraw, MsgWithdrawResponse, MsgUpdateStakeItem, MsgUpdateStakeItemResponse, MsgAddMiningProvider, MsgAddMiningProviderResponse, MsgRmMiningProvider, MsgRmMiningProviderResponse, MsgAddRewardToken, MsgAddRewardTokenResponse, MsgSetMaxRewardPoolNumber, MsgSetMaxRewardPoolNumberResponse, MsgUpdateRewardPool, MsgUpdateRewardPoolResponse, MsgToggleProviderSwitch, MsgToggleProviderSwitchResponse, MsgSetMaxStakeItemNumber, MsgSetMaxStakeItemNumberResponse, MsgAddReward, MsgAddRewardResponse, MsgToggleEmergencySwitch, MsgToggleEmergencySwitchResponse, MsgEmergencyWithdraw, MsgEmergencyWithdrawResponse, MsgAddStakeToken, MsgAddStakeTokenResponse, MsgRmRewardToken, MsgRmRewardTokenResponse, MsgRmStakeToken, MsgRmStakeTokenResponse, MsgSetStakeItemLimit, MsgSetStakeItemLimitResponse, MsgWithdrawRewardToken, MsgWithdrawRewardTokenResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  addStakePool(request: MsgAddStakePool): Promise<MsgAddStakePoolResponse>;
  addStakeItem(request: MsgAddStakeItem): Promise<MsgAddStakeItemResponse>;
  addRewardPool(request: MsgAddRewardPool): Promise<MsgAddRewardPoolResponse>;
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  updateStakeItem(request: MsgUpdateStakeItem): Promise<MsgUpdateStakeItemResponse>;
  addMiningProvider(request: MsgAddMiningProvider): Promise<MsgAddMiningProviderResponse>;
  rmMiningProvider(request: MsgRmMiningProvider): Promise<MsgRmMiningProviderResponse>;
  addRewardToken(request: MsgAddRewardToken): Promise<MsgAddRewardTokenResponse>;
  setMaxRewardPoolNumber(request: MsgSetMaxRewardPoolNumber): Promise<MsgSetMaxRewardPoolNumberResponse>;
  updateRewardPool(request: MsgUpdateRewardPool): Promise<MsgUpdateRewardPoolResponse>;
  toggleProviderSwitch(request: MsgToggleProviderSwitch): Promise<MsgToggleProviderSwitchResponse>;
  setMaxStakeItemNumber(request: MsgSetMaxStakeItemNumber): Promise<MsgSetMaxStakeItemNumberResponse>;
  addReward(request: MsgAddReward): Promise<MsgAddRewardResponse>;
  toggleEmergencySwitch(request: MsgToggleEmergencySwitch): Promise<MsgToggleEmergencySwitchResponse>;
  emergencyWithdraw(request: MsgEmergencyWithdraw): Promise<MsgEmergencyWithdrawResponse>;
  addStakeToken(request: MsgAddStakeToken): Promise<MsgAddStakeTokenResponse>;
  rmRewardToken(request: MsgRmRewardToken): Promise<MsgRmRewardTokenResponse>;
  rmStakeToken(request: MsgRmStakeToken): Promise<MsgRmStakeTokenResponse>;
  setStakeItemLimit(request: MsgSetStakeItemLimit): Promise<MsgSetStakeItemLimitResponse>;
  withdrawRewardToken(request: MsgWithdrawRewardToken): Promise<MsgWithdrawRewardTokenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addStakePool = this.addStakePool.bind(this);
    this.addStakeItem = this.addStakeItem.bind(this);
    this.addRewardPool = this.addRewardPool.bind(this);
    this.stake = this.stake.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.updateStakeItem = this.updateStakeItem.bind(this);
    this.addMiningProvider = this.addMiningProvider.bind(this);
    this.rmMiningProvider = this.rmMiningProvider.bind(this);
    this.addRewardToken = this.addRewardToken.bind(this);
    this.setMaxRewardPoolNumber = this.setMaxRewardPoolNumber.bind(this);
    this.updateRewardPool = this.updateRewardPool.bind(this);
    this.toggleProviderSwitch = this.toggleProviderSwitch.bind(this);
    this.setMaxStakeItemNumber = this.setMaxStakeItemNumber.bind(this);
    this.addReward = this.addReward.bind(this);
    this.toggleEmergencySwitch = this.toggleEmergencySwitch.bind(this);
    this.emergencyWithdraw = this.emergencyWithdraw.bind(this);
    this.addStakeToken = this.addStakeToken.bind(this);
    this.rmRewardToken = this.rmRewardToken.bind(this);
    this.rmStakeToken = this.rmStakeToken.bind(this);
    this.setStakeItemLimit = this.setStakeItemLimit.bind(this);
    this.withdrawRewardToken = this.withdrawRewardToken.bind(this);
  }

  addStakePool(request: MsgAddStakePool): Promise<MsgAddStakePoolResponse> {
    const data = MsgAddStakePool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddStakePool", data);
    return promise.then(data => MsgAddStakePoolResponse.decode(new _m0.Reader(data)));
  }

  addStakeItem(request: MsgAddStakeItem): Promise<MsgAddStakeItemResponse> {
    const data = MsgAddStakeItem.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddStakeItem", data);
    return promise.then(data => MsgAddStakeItemResponse.decode(new _m0.Reader(data)));
  }

  addRewardPool(request: MsgAddRewardPool): Promise<MsgAddRewardPoolResponse> {
    const data = MsgAddRewardPool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddRewardPool", data);
    return promise.then(data => MsgAddRewardPoolResponse.decode(new _m0.Reader(data)));
  }

  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new _m0.Reader(data)));
  }

  claimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "ClaimReward", data);
    return promise.then(data => MsgClaimRewardResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  updateStakeItem(request: MsgUpdateStakeItem): Promise<MsgUpdateStakeItemResponse> {
    const data = MsgUpdateStakeItem.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "UpdateStakeItem", data);
    return promise.then(data => MsgUpdateStakeItemResponse.decode(new _m0.Reader(data)));
  }

  addMiningProvider(request: MsgAddMiningProvider): Promise<MsgAddMiningProviderResponse> {
    const data = MsgAddMiningProvider.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddMiningProvider", data);
    return promise.then(data => MsgAddMiningProviderResponse.decode(new _m0.Reader(data)));
  }

  rmMiningProvider(request: MsgRmMiningProvider): Promise<MsgRmMiningProviderResponse> {
    const data = MsgRmMiningProvider.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "RmMiningProvider", data);
    return promise.then(data => MsgRmMiningProviderResponse.decode(new _m0.Reader(data)));
  }

  addRewardToken(request: MsgAddRewardToken): Promise<MsgAddRewardTokenResponse> {
    const data = MsgAddRewardToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddRewardToken", data);
    return promise.then(data => MsgAddRewardTokenResponse.decode(new _m0.Reader(data)));
  }

  setMaxRewardPoolNumber(request: MsgSetMaxRewardPoolNumber): Promise<MsgSetMaxRewardPoolNumberResponse> {
    const data = MsgSetMaxRewardPoolNumber.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "SetMaxRewardPoolNumber", data);
    return promise.then(data => MsgSetMaxRewardPoolNumberResponse.decode(new _m0.Reader(data)));
  }

  updateRewardPool(request: MsgUpdateRewardPool): Promise<MsgUpdateRewardPoolResponse> {
    const data = MsgUpdateRewardPool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "UpdateRewardPool", data);
    return promise.then(data => MsgUpdateRewardPoolResponse.decode(new _m0.Reader(data)));
  }

  toggleProviderSwitch(request: MsgToggleProviderSwitch): Promise<MsgToggleProviderSwitchResponse> {
    const data = MsgToggleProviderSwitch.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "ToggleProviderSwitch", data);
    return promise.then(data => MsgToggleProviderSwitchResponse.decode(new _m0.Reader(data)));
  }

  setMaxStakeItemNumber(request: MsgSetMaxStakeItemNumber): Promise<MsgSetMaxStakeItemNumberResponse> {
    const data = MsgSetMaxStakeItemNumber.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "SetMaxStakeItemNumber", data);
    return promise.then(data => MsgSetMaxStakeItemNumberResponse.decode(new _m0.Reader(data)));
  }

  addReward(request: MsgAddReward): Promise<MsgAddRewardResponse> {
    const data = MsgAddReward.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddReward", data);
    return promise.then(data => MsgAddRewardResponse.decode(new _m0.Reader(data)));
  }

  toggleEmergencySwitch(request: MsgToggleEmergencySwitch): Promise<MsgToggleEmergencySwitchResponse> {
    const data = MsgToggleEmergencySwitch.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "ToggleEmergencySwitch", data);
    return promise.then(data => MsgToggleEmergencySwitchResponse.decode(new _m0.Reader(data)));
  }

  emergencyWithdraw(request: MsgEmergencyWithdraw): Promise<MsgEmergencyWithdrawResponse> {
    const data = MsgEmergencyWithdraw.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "EmergencyWithdraw", data);
    return promise.then(data => MsgEmergencyWithdrawResponse.decode(new _m0.Reader(data)));
  }

  addStakeToken(request: MsgAddStakeToken): Promise<MsgAddStakeTokenResponse> {
    const data = MsgAddStakeToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "AddStakeToken", data);
    return promise.then(data => MsgAddStakeTokenResponse.decode(new _m0.Reader(data)));
  }

  rmRewardToken(request: MsgRmRewardToken): Promise<MsgRmRewardTokenResponse> {
    const data = MsgRmRewardToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "RmRewardToken", data);
    return promise.then(data => MsgRmRewardTokenResponse.decode(new _m0.Reader(data)));
  }

  rmStakeToken(request: MsgRmStakeToken): Promise<MsgRmStakeTokenResponse> {
    const data = MsgRmStakeToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "RmStakeToken", data);
    return promise.then(data => MsgRmStakeTokenResponse.decode(new _m0.Reader(data)));
  }

  setStakeItemLimit(request: MsgSetStakeItemLimit): Promise<MsgSetStakeItemLimitResponse> {
    const data = MsgSetStakeItemLimit.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "SetStakeItemLimit", data);
    return promise.then(data => MsgSetStakeItemLimitResponse.decode(new _m0.Reader(data)));
  }

  withdrawRewardToken(request: MsgWithdrawRewardToken): Promise<MsgWithdrawRewardTokenResponse> {
    const data = MsgWithdrawRewardToken.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.mining.Msg", "WithdrawRewardToken", data);
    return promise.then(data => MsgWithdrawRewardTokenResponse.decode(new _m0.Reader(data)));
  }

}
//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetEraUnbondLimit, MsgSetEraUnbondLimitResponse, MsgSetPoolDetail, MsgSetPoolDetailResponse, MsgSetLeastBond, MsgSetLeastBondResponse, MsgClearCurrentEraSnapShots, MsgClearCurrentEraSnapShotsResponse, MsgSetStakingRewardCommission, MsgSetStakingRewardCommissionResponse, MsgSetProtocolFeeReceiver, MsgSetProtocolFeeReceiverResponse, MsgSetUnbondRelayFee, MsgSetUnbondRelayFeeResponse, MsgLiquidityUnbond, MsgLiquidityUnbondResponse, MsgSetUnbondCommission, MsgSetUnbondCommissionResponse, MsgSubmitSignature, MsgSubmitSignatureResponse, MsgSetRParams, MsgSetRParamsResponse, MsgSetRelayFeeReceiver, MsgSetRelayFeeReceiverResponse, MsgSetRelayGasPrice, MsgSetRelayGasPriceResponse, MsgSetEraSeconds, MsgSetEraSecondsResponse, MsgRmBondedPool, MsgRmBondedPoolResponse, MsgMigrateInit, MsgMigrateInitResponse, MsgMigrateUnbondings, MsgMigrateUnbondingsResponse, MsgToggleUnbondSwitch, MsgToggleUnbondSwitchResponse, MsgUnsealMigrateInit, MsgUnsealMigrateInitResponse, MsgRegisterIcaPool, MsgRegisterIcaPoolResponse, MsgSetWithdrawalAddr, MsgSetWithdrawalAddrResponse, MsgInitPool, MsgInitPoolResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  setEraUnbondLimit(request: MsgSetEraUnbondLimit): Promise<MsgSetEraUnbondLimitResponse>;
  setPoolDetail(request: MsgSetPoolDetail): Promise<MsgSetPoolDetailResponse>;
  setLeastBond(request: MsgSetLeastBond): Promise<MsgSetLeastBondResponse>;
  clearCurrentEraSnapShots(request: MsgClearCurrentEraSnapShots): Promise<MsgClearCurrentEraSnapShotsResponse>;
  setStakingRewardCommission(request: MsgSetStakingRewardCommission): Promise<MsgSetStakingRewardCommissionResponse>;
  setProtocolFeeReceiver(request: MsgSetProtocolFeeReceiver): Promise<MsgSetProtocolFeeReceiverResponse>;
  setUnbondRelayFee(request: MsgSetUnbondRelayFee): Promise<MsgSetUnbondRelayFeeResponse>;
  liquidityUnbond(request: MsgLiquidityUnbond): Promise<MsgLiquidityUnbondResponse>;
  setUnbondCommission(request: MsgSetUnbondCommission): Promise<MsgSetUnbondCommissionResponse>;
  submitSignature(request: MsgSubmitSignature): Promise<MsgSubmitSignatureResponse>;
  setRParams(request: MsgSetRParams): Promise<MsgSetRParamsResponse>;
  setRelayFeeReceiver(request: MsgSetRelayFeeReceiver): Promise<MsgSetRelayFeeReceiverResponse>;
  setRelayGasPrice(request: MsgSetRelayGasPrice): Promise<MsgSetRelayGasPriceResponse>;
  setEraSeconds(request: MsgSetEraSeconds): Promise<MsgSetEraSecondsResponse>;
  rmBondedPool(request: MsgRmBondedPool): Promise<MsgRmBondedPoolResponse>;
  migrateInit(request: MsgMigrateInit): Promise<MsgMigrateInitResponse>;
  migrateUnbondings(request: MsgMigrateUnbondings): Promise<MsgMigrateUnbondingsResponse>;
  toggleUnbondSwitch(request: MsgToggleUnbondSwitch): Promise<MsgToggleUnbondSwitchResponse>;
  unsealMigrateInit(request: MsgUnsealMigrateInit): Promise<MsgUnsealMigrateInitResponse>;
  registerIcaPool(request: MsgRegisterIcaPool): Promise<MsgRegisterIcaPoolResponse>;
  setWithdrawalAddr(request: MsgSetWithdrawalAddr): Promise<MsgSetWithdrawalAddrResponse>;
  initPool(request: MsgInitPool): Promise<MsgInitPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setEraUnbondLimit = this.setEraUnbondLimit.bind(this);
    this.setPoolDetail = this.setPoolDetail.bind(this);
    this.setLeastBond = this.setLeastBond.bind(this);
    this.clearCurrentEraSnapShots = this.clearCurrentEraSnapShots.bind(this);
    this.setStakingRewardCommission = this.setStakingRewardCommission.bind(this);
    this.setProtocolFeeReceiver = this.setProtocolFeeReceiver.bind(this);
    this.setUnbondRelayFee = this.setUnbondRelayFee.bind(this);
    this.liquidityUnbond = this.liquidityUnbond.bind(this);
    this.setUnbondCommission = this.setUnbondCommission.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.setRParams = this.setRParams.bind(this);
    this.setRelayFeeReceiver = this.setRelayFeeReceiver.bind(this);
    this.setRelayGasPrice = this.setRelayGasPrice.bind(this);
    this.setEraSeconds = this.setEraSeconds.bind(this);
    this.rmBondedPool = this.rmBondedPool.bind(this);
    this.migrateInit = this.migrateInit.bind(this);
    this.migrateUnbondings = this.migrateUnbondings.bind(this);
    this.toggleUnbondSwitch = this.toggleUnbondSwitch.bind(this);
    this.unsealMigrateInit = this.unsealMigrateInit.bind(this);
    this.registerIcaPool = this.registerIcaPool.bind(this);
    this.setWithdrawalAddr = this.setWithdrawalAddr.bind(this);
    this.initPool = this.initPool.bind(this);
  }

  setEraUnbondLimit(request: MsgSetEraUnbondLimit): Promise<MsgSetEraUnbondLimitResponse> {
    const data = MsgSetEraUnbondLimit.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetEraUnbondLimit", data);
    return promise.then(data => MsgSetEraUnbondLimitResponse.decode(new _m0.Reader(data)));
  }

  setPoolDetail(request: MsgSetPoolDetail): Promise<MsgSetPoolDetailResponse> {
    const data = MsgSetPoolDetail.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetPoolDetail", data);
    return promise.then(data => MsgSetPoolDetailResponse.decode(new _m0.Reader(data)));
  }

  setLeastBond(request: MsgSetLeastBond): Promise<MsgSetLeastBondResponse> {
    const data = MsgSetLeastBond.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetLeastBond", data);
    return promise.then(data => MsgSetLeastBondResponse.decode(new _m0.Reader(data)));
  }

  clearCurrentEraSnapShots(request: MsgClearCurrentEraSnapShots): Promise<MsgClearCurrentEraSnapShotsResponse> {
    const data = MsgClearCurrentEraSnapShots.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "ClearCurrentEraSnapShots", data);
    return promise.then(data => MsgClearCurrentEraSnapShotsResponse.decode(new _m0.Reader(data)));
  }

  setStakingRewardCommission(request: MsgSetStakingRewardCommission): Promise<MsgSetStakingRewardCommissionResponse> {
    const data = MsgSetStakingRewardCommission.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetStakingRewardCommission", data);
    return promise.then(data => MsgSetStakingRewardCommissionResponse.decode(new _m0.Reader(data)));
  }

  setProtocolFeeReceiver(request: MsgSetProtocolFeeReceiver): Promise<MsgSetProtocolFeeReceiverResponse> {
    const data = MsgSetProtocolFeeReceiver.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetProtocolFeeReceiver", data);
    return promise.then(data => MsgSetProtocolFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  setUnbondRelayFee(request: MsgSetUnbondRelayFee): Promise<MsgSetUnbondRelayFeeResponse> {
    const data = MsgSetUnbondRelayFee.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetUnbondRelayFee", data);
    return promise.then(data => MsgSetUnbondRelayFeeResponse.decode(new _m0.Reader(data)));
  }

  liquidityUnbond(request: MsgLiquidityUnbond): Promise<MsgLiquidityUnbondResponse> {
    const data = MsgLiquidityUnbond.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "LiquidityUnbond", data);
    return promise.then(data => MsgLiquidityUnbondResponse.decode(new _m0.Reader(data)));
  }

  setUnbondCommission(request: MsgSetUnbondCommission): Promise<MsgSetUnbondCommissionResponse> {
    const data = MsgSetUnbondCommission.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetUnbondCommission", data);
    return promise.then(data => MsgSetUnbondCommissionResponse.decode(new _m0.Reader(data)));
  }

  submitSignature(request: MsgSubmitSignature): Promise<MsgSubmitSignatureResponse> {
    const data = MsgSubmitSignature.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SubmitSignature", data);
    return promise.then(data => MsgSubmitSignatureResponse.decode(new _m0.Reader(data)));
  }

  setRParams(request: MsgSetRParams): Promise<MsgSetRParamsResponse> {
    const data = MsgSetRParams.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetRParams", data);
    return promise.then(data => MsgSetRParamsResponse.decode(new _m0.Reader(data)));
  }

  setRelayFeeReceiver(request: MsgSetRelayFeeReceiver): Promise<MsgSetRelayFeeReceiverResponse> {
    const data = MsgSetRelayFeeReceiver.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetRelayFeeReceiver", data);
    return promise.then(data => MsgSetRelayFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  setRelayGasPrice(request: MsgSetRelayGasPrice): Promise<MsgSetRelayGasPriceResponse> {
    const data = MsgSetRelayGasPrice.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetRelayGasPrice", data);
    return promise.then(data => MsgSetRelayGasPriceResponse.decode(new _m0.Reader(data)));
  }

  setEraSeconds(request: MsgSetEraSeconds): Promise<MsgSetEraSecondsResponse> {
    const data = MsgSetEraSeconds.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetEraSeconds", data);
    return promise.then(data => MsgSetEraSecondsResponse.decode(new _m0.Reader(data)));
  }

  rmBondedPool(request: MsgRmBondedPool): Promise<MsgRmBondedPoolResponse> {
    const data = MsgRmBondedPool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "RmBondedPool", data);
    return promise.then(data => MsgRmBondedPoolResponse.decode(new _m0.Reader(data)));
  }

  migrateInit(request: MsgMigrateInit): Promise<MsgMigrateInitResponse> {
    const data = MsgMigrateInit.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "MigrateInit", data);
    return promise.then(data => MsgMigrateInitResponse.decode(new _m0.Reader(data)));
  }

  migrateUnbondings(request: MsgMigrateUnbondings): Promise<MsgMigrateUnbondingsResponse> {
    const data = MsgMigrateUnbondings.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "MigrateUnbondings", data);
    return promise.then(data => MsgMigrateUnbondingsResponse.decode(new _m0.Reader(data)));
  }

  toggleUnbondSwitch(request: MsgToggleUnbondSwitch): Promise<MsgToggleUnbondSwitchResponse> {
    const data = MsgToggleUnbondSwitch.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "ToggleUnbondSwitch", data);
    return promise.then(data => MsgToggleUnbondSwitchResponse.decode(new _m0.Reader(data)));
  }

  unsealMigrateInit(request: MsgUnsealMigrateInit): Promise<MsgUnsealMigrateInitResponse> {
    const data = MsgUnsealMigrateInit.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "UnsealMigrateInit", data);
    return promise.then(data => MsgUnsealMigrateInitResponse.decode(new _m0.Reader(data)));
  }

  registerIcaPool(request: MsgRegisterIcaPool): Promise<MsgRegisterIcaPoolResponse> {
    const data = MsgRegisterIcaPool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "RegisterIcaPool", data);
    return promise.then(data => MsgRegisterIcaPoolResponse.decode(new _m0.Reader(data)));
  }

  setWithdrawalAddr(request: MsgSetWithdrawalAddr): Promise<MsgSetWithdrawalAddrResponse> {
    const data = MsgSetWithdrawalAddr.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "SetWithdrawalAddr", data);
    return promise.then(data => MsgSetWithdrawalAddrResponse.decode(new _m0.Reader(data)));
  }

  initPool(request: MsgInitPool): Promise<MsgInitPoolResponse> {
    const data = MsgInitPool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.ledger.Msg", "InitPool", data);
    return promise.then(data => MsgInitPoolResponse.decode(new _m0.Reader(data)));
  }

}
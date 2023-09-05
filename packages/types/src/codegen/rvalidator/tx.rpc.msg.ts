import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgInitRValidator, MsgInitRValidatorResponse, MsgSetCycleSeconds, MsgSetCycleSecondsResponse, MsgSetShuffleSeconds, MsgSetShuffleSecondsResponse, MsgAddRValidator, MsgAddRValidatorResponse, MsgRmRValidator, MsgRmRValidatorResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  initRValidator(request: MsgInitRValidator): Promise<MsgInitRValidatorResponse>;
  setCycleSeconds(request: MsgSetCycleSeconds): Promise<MsgSetCycleSecondsResponse>;
  setShuffleSeconds(request: MsgSetShuffleSeconds): Promise<MsgSetShuffleSecondsResponse>;
  addRValidator(request: MsgAddRValidator): Promise<MsgAddRValidatorResponse>;
  rmRValidator(request: MsgRmRValidator): Promise<MsgRmRValidatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.initRValidator = this.initRValidator.bind(this);
    this.setCycleSeconds = this.setCycleSeconds.bind(this);
    this.setShuffleSeconds = this.setShuffleSeconds.bind(this);
    this.addRValidator = this.addRValidator.bind(this);
    this.rmRValidator = this.rmRValidator.bind(this);
  }

  initRValidator(request: MsgInitRValidator): Promise<MsgInitRValidatorResponse> {
    const data = MsgInitRValidator.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Msg", "InitRValidator", data);
    return promise.then(data => MsgInitRValidatorResponse.decode(new _m0.Reader(data)));
  }

  setCycleSeconds(request: MsgSetCycleSeconds): Promise<MsgSetCycleSecondsResponse> {
    const data = MsgSetCycleSeconds.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Msg", "SetCycleSeconds", data);
    return promise.then(data => MsgSetCycleSecondsResponse.decode(new _m0.Reader(data)));
  }

  setShuffleSeconds(request: MsgSetShuffleSeconds): Promise<MsgSetShuffleSecondsResponse> {
    const data = MsgSetShuffleSeconds.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Msg", "SetShuffleSeconds", data);
    return promise.then(data => MsgSetShuffleSecondsResponse.decode(new _m0.Reader(data)));
  }

  addRValidator(request: MsgAddRValidator): Promise<MsgAddRValidatorResponse> {
    const data = MsgAddRValidator.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Msg", "AddRValidator", data);
    return promise.then(data => MsgAddRValidatorResponse.decode(new _m0.Reader(data)));
  }

  rmRValidator(request: MsgRmRValidator): Promise<MsgRmRValidatorResponse> {
    const data = MsgRmRValidator.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rvalidator.Msg", "RmRValidator", data);
    return promise.then(data => MsgRmRValidatorResponse.decode(new _m0.Reader(data)));
  }

}
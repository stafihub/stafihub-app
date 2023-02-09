//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreatePool, MsgCreatePoolResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgSwap, MsgSwapResponse, MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgToggleProviderSwitch, MsgToggleProviderSwitchResponse, MsgAddProvider, MsgAddProviderResponse, MsgRmProvider, MsgRmProviderResponse, MsgAddPoolCreator, MsgAddPoolCreatorResponse, MsgRmPoolCreator, MsgRmPoolCreatorResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
  toggleProviderSwitch(request: MsgToggleProviderSwitch): Promise<MsgToggleProviderSwitchResponse>;
  addProvider(request: MsgAddProvider): Promise<MsgAddProviderResponse>;
  rmProvider(request: MsgRmProvider): Promise<MsgRmProviderResponse>;
  addPoolCreator(request: MsgAddPoolCreator): Promise<MsgAddPoolCreatorResponse>;
  rmPoolCreator(request: MsgRmPoolCreator): Promise<MsgRmPoolCreatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPool = this.createPool.bind(this);
    this.addLiquidity = this.addLiquidity.bind(this);
    this.swap = this.swap.bind(this);
    this.removeLiquidity = this.removeLiquidity.bind(this);
    this.toggleProviderSwitch = this.toggleProviderSwitch.bind(this);
    this.addProvider = this.addProvider.bind(this);
    this.rmProvider = this.rmProvider.bind(this);
    this.addPoolCreator = this.addPoolCreator.bind(this);
    this.rmPoolCreator = this.rmPoolCreator.bind(this);
  }

  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "AddLiquidity", data);
    return promise.then(data => MsgAddLiquidityResponse.decode(new _m0.Reader(data)));
  }

  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new _m0.Reader(data)));
  }

  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "RemoveLiquidity", data);
    return promise.then(data => MsgRemoveLiquidityResponse.decode(new _m0.Reader(data)));
  }

  toggleProviderSwitch(request: MsgToggleProviderSwitch): Promise<MsgToggleProviderSwitchResponse> {
    const data = MsgToggleProviderSwitch.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "ToggleProviderSwitch", data);
    return promise.then(data => MsgToggleProviderSwitchResponse.decode(new _m0.Reader(data)));
  }

  addProvider(request: MsgAddProvider): Promise<MsgAddProviderResponse> {
    const data = MsgAddProvider.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "AddProvider", data);
    return promise.then(data => MsgAddProviderResponse.decode(new _m0.Reader(data)));
  }

  rmProvider(request: MsgRmProvider): Promise<MsgRmProviderResponse> {
    const data = MsgRmProvider.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "RmProvider", data);
    return promise.then(data => MsgRmProviderResponse.decode(new _m0.Reader(data)));
  }

  addPoolCreator(request: MsgAddPoolCreator): Promise<MsgAddPoolCreatorResponse> {
    const data = MsgAddPoolCreator.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "AddPoolCreator", data);
    return promise.then(data => MsgAddPoolCreatorResponse.decode(new _m0.Reader(data)));
  }

  rmPoolCreator(request: MsgRmPoolCreator): Promise<MsgRmPoolCreatorResponse> {
    const data = MsgRmPoolCreator.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.rdex.Msg", "RmPoolCreator", data);
    return promise.then(data => MsgRmPoolCreatorResponse.decode(new _m0.Reader(data)));
  }

}
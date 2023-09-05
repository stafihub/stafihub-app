import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetResourceidToDenom, MsgSetResourceidToDenomResponse, MsgDeposit, MsgDepositResponse, MsgAddChainId, MsgAddChainIdResponse, MsgVoteProposal, MsgVoteProposalResponse, MsgRmChainId, MsgRmChainIdResponse, MsgSetRelayFeeReceiver, MsgSetRelayFeeReceiverResponse, MsgSetRelayFee, MsgSetRelayFeeResponse, MsgAddBannedDenom, MsgAddBannedDenomResponse, MsgRmBannedDenom, MsgRmBannedDenomResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  setResourceidToDenom(request: MsgSetResourceidToDenom): Promise<MsgSetResourceidToDenomResponse>;
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  addChainId(request: MsgAddChainId): Promise<MsgAddChainIdResponse>;
  voteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
  rmChainId(request: MsgRmChainId): Promise<MsgRmChainIdResponse>;
  setRelayFeeReceiver(request: MsgSetRelayFeeReceiver): Promise<MsgSetRelayFeeReceiverResponse>;
  setRelayFee(request: MsgSetRelayFee): Promise<MsgSetRelayFeeResponse>;
  addBannedDenom(request: MsgAddBannedDenom): Promise<MsgAddBannedDenomResponse>;
  rmBannedDenom(request: MsgRmBannedDenom): Promise<MsgRmBannedDenomResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setResourceidToDenom = this.setResourceidToDenom.bind(this);
    this.deposit = this.deposit.bind(this);
    this.addChainId = this.addChainId.bind(this);
    this.voteProposal = this.voteProposal.bind(this);
    this.rmChainId = this.rmChainId.bind(this);
    this.setRelayFeeReceiver = this.setRelayFeeReceiver.bind(this);
    this.setRelayFee = this.setRelayFee.bind(this);
    this.addBannedDenom = this.addBannedDenom.bind(this);
    this.rmBannedDenom = this.rmBannedDenom.bind(this);
  }

  setResourceidToDenom(request: MsgSetResourceidToDenom): Promise<MsgSetResourceidToDenomResponse> {
    const data = MsgSetResourceidToDenom.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "SetResourceidToDenom", data);
    return promise.then(data => MsgSetResourceidToDenomResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  addChainId(request: MsgAddChainId): Promise<MsgAddChainIdResponse> {
    const data = MsgAddChainId.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "AddChainId", data);
    return promise.then(data => MsgAddChainIdResponse.decode(new _m0.Reader(data)));
  }

  voteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse> {
    const data = MsgVoteProposal.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "VoteProposal", data);
    return promise.then(data => MsgVoteProposalResponse.decode(new _m0.Reader(data)));
  }

  rmChainId(request: MsgRmChainId): Promise<MsgRmChainIdResponse> {
    const data = MsgRmChainId.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "RmChainId", data);
    return promise.then(data => MsgRmChainIdResponse.decode(new _m0.Reader(data)));
  }

  setRelayFeeReceiver(request: MsgSetRelayFeeReceiver): Promise<MsgSetRelayFeeReceiverResponse> {
    const data = MsgSetRelayFeeReceiver.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "SetRelayFeeReceiver", data);
    return promise.then(data => MsgSetRelayFeeReceiverResponse.decode(new _m0.Reader(data)));
  }

  setRelayFee(request: MsgSetRelayFee): Promise<MsgSetRelayFeeResponse> {
    const data = MsgSetRelayFee.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "SetRelayFee", data);
    return promise.then(data => MsgSetRelayFeeResponse.decode(new _m0.Reader(data)));
  }

  addBannedDenom(request: MsgAddBannedDenom): Promise<MsgAddBannedDenomResponse> {
    const data = MsgAddBannedDenom.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "AddBannedDenom", data);
    return promise.then(data => MsgAddBannedDenomResponse.decode(new _m0.Reader(data)));
  }

  rmBannedDenom(request: MsgRmBannedDenom): Promise<MsgRmBannedDenomResponse> {
    const data = MsgRmBannedDenom.encode(request).finish();
    const promise = this.rpc.request("stafihub.stafihub.bridge.Msg", "RmBannedDenom", data);
    return promise.then(data => MsgRmBannedDenomResponse.decode(new _m0.Reader(data)));
  }

}
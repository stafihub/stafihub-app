import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryChaindIdsRequest, QueryChaindIdsResponseSDKType, QueryProposalDetailRequest, QueryProposalDetailResponseSDKType, QueryResourceidToDenomsRequest, QueryResourceidToDenomsResponseSDKType, QueryRelayFeeReceiverRequest, QueryRelayFeeReceiverResponseSDKType, QueryRelayFeeRequest, QueryRelayFeeResponseSDKType, QueryBannedDenomListRequest, QueryBannedDenomListResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.chaindIds = this.chaindIds.bind(this);
    this.proposalDetail = this.proposalDetail.bind(this);
    this.resourceidToDenoms = this.resourceidToDenoms.bind(this);
    this.relayFeeReceiver = this.relayFeeReceiver.bind(this);
    this.relayFee = this.relayFee.bind(this);
    this.bannedDenomList = this.bannedDenomList.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ChaindIds items. */


  async chaindIds(_params: QueryChaindIdsRequest = {}): Promise<QueryChaindIdsResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/chaind_ids`;
    return await this.req.get<QueryChaindIdsResponseSDKType>(endpoint);
  }
  /* Queries a list of ProposalDetail items. */


  async proposalDetail(params: QueryProposalDetailRequest): Promise<QueryProposalDetailResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/proposal_detail/${params.chainId}/${params.depositNonce}/${params.resourceId}/${params.amount}/${params.receiver}`;
    return await this.req.get<QueryProposalDetailResponseSDKType>(endpoint);
  }
  /* Queries a list of ResourceidToDenoms items. */


  async resourceidToDenoms(_params: QueryResourceidToDenomsRequest = {}): Promise<QueryResourceidToDenomsResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/resourceid_to_denoms`;
    return await this.req.get<QueryResourceidToDenomsResponseSDKType>(endpoint);
  }
  /* Queries a list of RelayFeeReceiver items. */


  async relayFeeReceiver(_params: QueryRelayFeeReceiverRequest = {}): Promise<QueryRelayFeeReceiverResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/relay_fee_receiver`;
    return await this.req.get<QueryRelayFeeReceiverResponseSDKType>(endpoint);
  }
  /* Queries a list of RelayFee items. */


  async relayFee(params: QueryRelayFeeRequest): Promise<QueryRelayFeeResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/relay_fee/${params.chainId}`;
    return await this.req.get<QueryRelayFeeResponseSDKType>(endpoint);
  }
  /* Queries a list of BannedDenomList items. */


  async bannedDenomList(_params: QueryBannedDenomListRequest = {}): Promise<QueryBannedDenomListResponseSDKType> {
    const endpoint = `stafihub/stafihub/bridge/banned_denom_list`;
    return await this.req.get<QueryBannedDenomListResponseSDKType>(endpoint);
  }

}
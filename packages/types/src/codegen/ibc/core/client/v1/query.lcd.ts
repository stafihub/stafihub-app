//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesResponseSDKType, QueryClientParamsRequest, QueryClientParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientParams = this.clientParams.bind(this);
  }
  /* ClientState queries an IBC light client. */


  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1beta1/client_states/${params.clientId}`;
    return await this.req.get<QueryClientStateResponseSDKType>(endpoint);
  }
  /* ClientStates queries all the IBC light clients of a chain. */


  async clientStates(params: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1beta1/client_states`;
    return await this.req.get<QueryClientStatesResponseSDKType>(endpoint, options);
  }
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */


  async consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }

    const endpoint = `ibc/core/client/v1beta1/consensus_states/${params.clientId}/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.req.get<QueryConsensusStateResponseSDKType>(endpoint, options);
  }
  /* ConsensusStates queries all the consensus state associated with a given
   client. */


  async consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1beta1/consensus_states/${params.clientId}`;
    return await this.req.get<QueryConsensusStatesResponseSDKType>(endpoint, options);
  }
  /* ClientParams queries all parameters of the ibc client. */


  async clientParams(_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponseSDKType> {
    const endpoint = `ibc/client/v1beta1/params`;
    return await this.req.get<QueryClientParamsResponseSDKType>(endpoint);
  }

}
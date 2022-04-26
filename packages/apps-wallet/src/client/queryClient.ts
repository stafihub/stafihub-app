import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  QueryClientImpl,
  CosmosBankQueryClientImpl,
  CosmosStakingQueryClientImpl,
  IBCApplicationsQueryClientImpl,
  IBCCoreChannelQueryClientImpl,
  CosmosBaseServiceClientImpl,
  RMintRewardQueryClientImpl,
} from "@stafihub/types";
import { chains } from "@stafihub/apps-config";

export async function createQueryService(chainId: string) {
  // Inside an async function...
  // The Tendermint client knows how to talk to the Tendermint RPC endpoint
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
  const queryClient = new QueryClient(tendermintClient);

  // This helper function wraps the generic Stargate query client for use by the specific generated query client
  const rpcClient = createProtobufRpcClient(queryClient);

  // Here we instantiate a specific query client which will have the custom methods defined in the .proto file
  const queryService = new QueryClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosBankQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosBankQueryClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosBaseQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosBaseServiceClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosStakingQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosStakingQueryClientImpl(rpcClient);

  return queryService;
}

export async function createIBCApplicationsQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new IBCApplicationsQueryClientImpl(rpcClient);

  return queryService;
}

export async function createIBCCoreConnectionQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new IBCCoreChannelQueryClientImpl(rpcClient);

  return queryService;
}

export async function createRMintRewardQueryService(chainId: string) {
  const tendermintClient = await Tendermint34Client.connect(
    chains[chainId].rpc
  );

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new RMintRewardQueryClientImpl(rpcClient);

  return queryService;
}

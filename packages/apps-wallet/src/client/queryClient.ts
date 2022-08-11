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
  RDexMiningQueryClientImpl,
  AirdropClaimQueryClientImpl,
  BridgeQueryClientImpl,
} from "@stafihub/types";
import { RDexQueryClientImpl } from "@stafihub/types/src/rdex";
import { KeplrChainParams } from "../interface";

export async function createQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new QueryClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosBankQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosBankQueryClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosBaseQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosBaseServiceClientImpl(rpcClient);

  return queryService;
}

export async function createCosmosStakingQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new CosmosStakingQueryClientImpl(rpcClient);

  return queryService;
}

export async function createIBCApplicationsQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new IBCApplicationsQueryClientImpl(rpcClient);

  return queryService;
}

export async function createIBCCoreConnectionQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new IBCCoreChannelQueryClientImpl(rpcClient);

  return queryService;
}

export async function createRMintRewardQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new RMintRewardQueryClientImpl(rpcClient);

  return queryService;
}

type QueryClientImplType = IBCCoreChannelQueryClientImpl;

// export type Constructor<T = {}> = new (...args: any[]) => T;
export type Constructor = new (rpc: any) => QueryClientImplType;

export async function createQueryService2<T extends Constructor>(
  chainConfig: KeplrChainParams | null | undefined,
  clientType: T
): Promise<QueryClientImplType> {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new clientType(rpcClient);

  return queryService;
}

export async function createRDexQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new RDexQueryClientImpl(rpcClient);

  return queryService;
}

export async function createRDexMiningQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new RDexMiningQueryClientImpl(rpcClient);

  return queryService;
}

export async function createAirdropClaimQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new AirdropClaimQueryClientImpl(rpcClient);

  return queryService;
}

export async function createBridgeQueryService(
  chainConfig: KeplrChainParams | null | undefined
) {
  if (!chainConfig) {
    throw new Error("chainConfig can not be empty");
  }
  const tendermintClient = await Tendermint34Client.connect(chainConfig.rpc);

  const queryClient = new QueryClient(tendermintClient);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryService = new BridgeQueryClientImpl(rpcClient);

  return queryService;
}

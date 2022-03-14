import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl, MsgClientImpl } from "@stafihub/types";
import { cosmosConfig, CosmosNetwork } from "@stafihub/apps-config";

export async function createQueryService(network: CosmosNetwork) {
  // Inside an async function...
  // The Tendermint client knows how to talk to the Tendermint RPC endpoint
  const tendermintClient = await Tendermint34Client.connect(
    cosmosConfig[network].rpc
  );

  // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
  const queryClient = new QueryClient(tendermintClient);

  // This helper function wraps the generic Stargate query client for use by the specific generated query client
  const rpcClient = createProtobufRpcClient(queryClient);

  // Here we instantiate a specific query client which will have the custom methods defined in the .proto file
  const queryService = new QueryClientImpl(rpcClient);

  return queryService;

  // Now you can use this service to submit queries
  //   const queryResult = await queryService.GetLeastBond({
  //     foo: "bar",
  //   });
}

export async function createMsgService() {
  const tendermintClient = await Tendermint34Client.connect(
    cosmosConfig.stafiHub.rpc
  );

  const queryClient = new QueryClient(tendermintClient);

  const rpcClient = createProtobufRpcClient(queryClient);

  const msgService = new MsgClientImpl(rpcClient);

  return msgService;
}

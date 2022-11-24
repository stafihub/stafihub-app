import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bridgeTxRegistry from "../bridge/tx.registry";
import * as claimTxRegistry from "../claim/tx.registry";
import * as ledgerTxRegistry from "../ledger/tx.registry";
import * as miningTxRegistry from "../mining/tx.registry";
import * as rdexTxRegistry from "../rdex/tx.registry";
import * as rmintrewardTxRegistry from "../rmintreward/tx.registry";
import * as ibcTransferTxRegistry from "../ibc/applications/transfer/v1/tx.registry";
import * as bridgeTxAmino from "../bridge/tx.amino";
import * as claimTxAmino from "../claim/tx.amino";
import * as ledgerTxAmino from "../ledger/tx.amino";
import * as miningTxAmino from "../mining/tx.amino";
import * as rdexTxAmino from "../rdex/tx.amino";
import * as rmintrewardTxAmino from "../rmintreward/tx.amino";
import * as ibcTransferTxAmino from "../ibc/applications/transfer/v1/tx.amino";
export const stafihubAminoConverters = {
  ...bridgeTxAmino.AminoConverter,
  ...claimTxAmino.AminoConverter,
  ...ledgerTxAmino.AminoConverter,
  ...miningTxAmino.AminoConverter,
  ...rdexTxAmino.AminoConverter,
  ...rmintrewardTxAmino.AminoConverter,
  ...ibcTransferTxAmino.AminoConverter,
};
export const stafihubProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...bridgeTxRegistry.registry,
  ...claimTxRegistry.registry,
  ...ledgerTxRegistry.registry,
  ...miningTxRegistry.registry,
  ...rdexTxRegistry.registry,
  ...rmintrewardTxRegistry.registry,
  ...ibcTransferTxRegistry.registry,
];
export const getSigningStafihubClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...stafihubProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...stafihubAminoConverters });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningStafihubClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningStafihubClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    }
  );
  return client;
};

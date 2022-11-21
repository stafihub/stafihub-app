import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ledgerTxRegistry from "../ledger/tx.registry";
import * as ledgerTxAmino from "../ledger/tx.amino";
export const stafihubAminoConverters = { ...ledgerTxAmino.AminoConverter
};
export const stafihubProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...ledgerTxRegistry.registry];
export const getSigningStafihubClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...stafihubProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...stafihubAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStafihubClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningStafihubClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
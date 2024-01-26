import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
  InstantiateResult,
} from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128 } from "./lsdToken";
export interface InstantiateMsg {
  /**
   * initial allowlist - all cw20 tokens we will send must be previously allowed by governance
   */
  allowlist: AllowMsg[];
  /**
   * If set, contracts off the allowlist will run with this gas limit. If unset, will refuse to accept any contract off the allow list.
   */
  default_gas_limit?: number | null;
  /**
   * Default timeout for ics20 packets, specified in seconds
   */
  default_timeout: number;
  /**
   * who can allow more contracts
   */
  gov_contract: string;
}
export interface AllowMsg {
  contract: string;
  gas_limit?: number | null;
}
export type Amount =
  | {
      native: Coin;
    }
  | {
      cw20: Cw20Coin;
    };
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
// export type Uint128 = string;

export interface Cw20Ics20Schema {
  responses:
    | AdminResponse
    | AllowedResponse
    | ChannelResponse
    | ConfigResponse
    | ListAllowedResponse
    | ListChannelsResponse
    | PortResponse;
  query: ChannelArgs | AllowedArgs;
  execute: UpdateAdminArgs;
  [k: string]: unknown;
}
/**
 * Returned from Admin.query_admin()
 */
export interface AdminResponse {
  admin?: string | null;
}
export interface AllowedResponse {
  gas_limit?: number | null;
  is_allowed: boolean;
}
export interface ChannelResponse {
  /**
   * How many tokens we currently have pending over this channel
   */
  balances: Amount[];
  /**
   * Information on the channel's connection
   */
  info: ChannelInfo;
  /**
   * The total number of tokens that have been sent over this channel (even if many have been returned, so balance is low)
   */
  total_sent: Amount[];
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface ChannelInfo {
  /**
   * the connection this exists on (you can use to query client/consensus info)
   */
  connection_id: string;
  /**
   * the remote channel/port we connect to
   */
  counterparty_endpoint: IbcEndpoint;
  /**
   * id of this channel
   */
  id: string;
}
export interface IbcEndpoint {
  channel_id: string;
  port_id: string;
  [k: string]: unknown;
}
export interface ConfigResponse {
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
}
export interface ListAllowedResponse {
  allow: AllowedInfo[];
}
export interface AllowedInfo {
  contract: string;
  gas_limit?: number | null;
}
export interface ListChannelsResponse {
  channels: ChannelInfo[];
}
export interface PortResponse {
  port_id: string;
}
export interface ChannelArgs {
  id: string;
}
export interface AllowedArgs {
  contract: string;
}
export interface UpdateAdminArgs {
  admin: string;
}

function isSigningCosmWasmClient(
  client: CosmWasmClient | SigningCosmWasmClient
): client is SigningCosmWasmClient {
  return "execute" in client;
}

export class Client {
  private readonly client: CosmWasmClient | SigningCosmWasmClient;
  contractAddress: string;
  constructor(
    client: CosmWasmClient | SigningCosmWasmClient,
    contractAddress: string
  ) {
    this.client = client;
    this.contractAddress = contractAddress;
  }
  mustBeSigningClient() {
    return new Error("This client is not a SigningCosmWasmClient");
  }
  static async instantiate(
    client: SigningCosmWasmClient,
    sender: string,
    codeId: number,
    initMsg: InstantiateMsg,
    label: string,
    initCoins?: readonly Coin[],
    fees?: StdFee | "auto" | number
  ): Promise<InstantiateResult> {
    const res = await client.instantiate(sender, codeId, initMsg, label, fees, {
      ...(initCoins && initCoins.length && { funds: initCoins }),
    });
    return res;
  }
  queryPort = async (): Promise<PortResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { port: {} });
  };
  queryListChannels = async (): Promise<ListChannelsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_channels: {},
    });
  };
  queryChannel = async (args: ChannelArgs): Promise<ChannelResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      channel: args,
    });
  };
  queryConfig = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { config: {} });
  };
  queryAdmin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { admin: {} });
  };
  queryAllowed = async (args: AllowedArgs): Promise<AllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowed: args,
    });
  };
  queryListAllowed = async (): Promise<ListAllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_allowed: {},
    });
  };
  receive = async (
    sender: string,
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    if (!isSigningCosmWasmClient(this.client)) {
      throw this.mustBeSigningClient();
    }
    return this.client.execute(
      sender,
      this.contractAddress,
      { receive: {} },
      fee || "auto",
      memo,
      funds
    );
  };
  transfer = async (
    sender: string,
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    if (!isSigningCosmWasmClient(this.client)) {
      throw this.mustBeSigningClient();
    }
    return this.client.execute(
      sender,
      this.contractAddress,
      { transfer: {} },
      fee || "auto",
      memo,
      funds
    );
  };
  allow = async (
    sender: string,
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    if (!isSigningCosmWasmClient(this.client)) {
      throw this.mustBeSigningClient();
    }
    return this.client.execute(
      sender,
      this.contractAddress,
      { allow: {} },
      fee || "auto",
      memo,
      funds
    );
  };
  updateAdmin = async (
    sender: string,
    args: UpdateAdminArgs,
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    if (!isSigningCosmWasmClient(this.client)) {
      throw this.mustBeSigningClient();
    }
    return this.client.execute(
      sender,
      this.contractAddress,
      { update_admin: args },
      fee || "auto",
      memo,
      funds
    );
  };
}

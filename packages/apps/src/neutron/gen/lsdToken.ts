import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
  InstantiateResult,
} from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin } from "@cosmjs/amino";
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
/**
 * This is used for uploading logo data, or setting it in InstantiateData
 */
export type Logo =
  | {
      url: string;
    }
  | {
      embedded: EmbeddedLogo;
    };
/**
 * This is used to store the logo on the blockchain in an accepted format. Enforce maximum size of 5KB on all variants.
 */
export type EmbeddedLogo =
  | {
      svg: Binary;
    }
  | {
      png: Binary;
    };
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 */
// export type Binary = string;

export interface InstantiateMsg {
  decimals: number;
  initial_balances: Cw20Coin[];
  marketing?: InstantiateMarketingInfo | null;
  mint?: MinterResponse | null;
  name: string;
  symbol: string;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
}
export interface MinterResponse {
  /**
   * cap is a hard cap on total supply that can be achieved by minting. Note that this refers to total_supply. If None, there is unlimited cap.
   */
  cap?: Uint128 | null;
  minter: string;
}
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
export type Uint128 = string;
/**
 * Expiration represents a point in time when some event happens. It can compare with a BlockInfo and will return is_expired() == true once the condition is hit (and for every block in the future)
 */
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {};
    };
/**
 * A point in time in nanosecond precision.
 *
 * This type can represent times from 1970-01-01T00:00:00Z to 2554-07-21T23:34:33Z.
 *
 * ## Examples
 *
 * ``` # use cosmwasm_std::Timestamp; let ts = Timestamp::from_nanos(1_000_000_202); assert_eq!(ts.nanos(), 1_000_000_202); assert_eq!(ts.seconds(), 1); assert_eq!(ts.subsec_nanos(), 202);
 *
 * let ts = ts.plus_seconds(2); assert_eq!(ts.nanos(), 3_000_000_202); assert_eq!(ts.seconds(), 3); assert_eq!(ts.subsec_nanos(), 202); ```
 */
export type Timestamp = Uint64;
/**
 * A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u64` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint64; let a = Uint64::from(42u64); assert_eq!(a.u64(), 42);
 *
 * let b = Uint64::from(70u32); assert_eq!(b.u64(), 70); ```
 */
export type Uint64 = string;
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 */
export type Binary = string;
/**
 * This is used to display logo info, provide a link or inform there is one that can be downloaded from the blockchain itself
 */
export type LogoInfo =
  | {
      url: string;
    }
  | "embedded";
/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr = string;

export interface LsdTokenSchema {
  responses:
    | AllAccountsResponse
    | AllAllowancesResponse
    | AllSpenderAllowancesResponse
    | AllowanceResponse
    | BalanceResponse
    | DownloadLogoResponse
    | MarketingInfoResponse
    | MinterResponse
    | TokenInfoResponse;
  query:
    | BalanceArgs
    | AllowanceArgs
    | AllAllowancesArgs
    | AllSpenderAllowancesArgs;
  execute:
    | TransferArgs
    | BurnArgs
    | SendArgs
    | IncreaseAllowanceArgs
    | DecreaseAllowanceArgs
    | TransferFromArgs
    | SendFromArgs
    | BurnFromArgs
    | MintArgs
    | UpdateMinterArgs
    | UpdateMarketingArgs;
  [k: string]: unknown;
}
export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
}
export interface AllSpenderAllowancesResponse {
  allowances: SpenderAllowanceInfo[];
  [k: string]: unknown;
}
export interface SpenderAllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  owner: string;
}
export interface AllowanceResponse {
  allowance: Uint128;
  expires: Expiration;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balance: Uint128;
}
/**
 * When we download an embedded logo, we get this response type. We expect a SPA to be able to accept this info and display it.
 */
export interface DownloadLogoResponse {
  data: Binary;
  mime_type: string;
}
export interface MarketingInfoResponse {
  /**
   * A longer description of the token and it's utility. Designed for tooltips or such
   */
  description?: string | null;
  /**
   * A link to the logo, or a comment there is an on-chain logo stored
   */
  logo?: LogoInfo | null;
  /**
   * The address (if any) who can update this data structure
   */
  marketing?: Addr | null;
  /**
   * A URL pointing to the project behind this token.
   */
  project?: string | null;
  [k: string]: unknown;
}
export interface MinterResponse {
  /**
   * cap is a hard cap on total supply that can be achieved by minting. Note that this refers to total_supply. If None, there is unlimited cap.
   */
  cap?: Uint128 | null;
  minter: string;
}
export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: Uint128;
}
export interface BalanceArgs {
  address: string;
}
export interface AllowanceArgs {
  owner: string;
  spender: string;
}
export interface AllAllowancesArgs {
  limit?: number | null;
  owner: string;
  start_after?: string | null;
}
export interface AllSpenderAllowancesArgs {
  limit?: number | null;
  spender: string;
  start_after?: string | null;
}
export interface TransferArgs {
  amount: Uint128;
  recipient: string;
}
export interface BurnArgs {
  amount: Uint128;
}
export interface SendArgs {
  amount: Uint128;
  contract: string;
  msg: Binary;
}
export interface IncreaseAllowanceArgs {
  amount: Uint128;
  expires?: Expiration | null;
  spender: string;
}
export interface DecreaseAllowanceArgs {
  amount: Uint128;
  expires?: Expiration | null;
  spender: string;
}
export interface TransferFromArgs {
  amount: Uint128;
  owner: string;
  recipient: string;
}
export interface SendFromArgs {
  amount: Uint128;
  contract: string;
  msg: Binary;
  owner: string;
}
export interface BurnFromArgs {
  amount: Uint128;
  owner: string;
}
export interface MintArgs {
  amount: Uint128;
  recipient: string;
}
export interface UpdateMinterArgs {
  new_minter?: string | null;
}
export interface UpdateMarketingArgs {
  /**
   * A longer description of the token and it's utility. Designed for tooltips or such
   */
  description?: string | null;
  /**
   * The address (if any) who can update this data structure
   */
  marketing?: string | null;
  /**
   * A URL pointing to the project behind this token.
   */
  project?: string | null;
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
  queryBalance = async (args: BalanceArgs): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: args,
    });
  };
  queryTokenInfo = async (): Promise<TokenInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_info: {},
    });
  };
  queryMinter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { minter: {} });
  };
  queryAllowance = async (args: AllowanceArgs): Promise<AllowanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowance: args,
    });
  };
  queryAllAllowances = async (
    args: AllAllowancesArgs
  ): Promise<AllAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_allowances: args,
    });
  };
  queryAllSpenderAllowances = async (
    args: AllSpenderAllowancesArgs
  ): Promise<AllSpenderAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_spender_allowances: args,
    });
  };
  queryAllAccounts = async (): Promise<AllAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_accounts: {},
    });
  };
  queryMarketingInfo = async (): Promise<MarketingInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketing_info: {},
    });
  };
  queryDownloadLogo = async (): Promise<DownloadLogoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      download_logo: {},
    });
  };
  transfer = async (
    sender: string,
    args: TransferArgs,
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
      { transfer: args },
      fee || "auto",
      memo,
      funds
    );
  };
  burn = async (
    sender: string,
    args: BurnArgs,
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
      { burn: args },
      fee || "auto",
      memo,
      funds
    );
  };
  send = async (
    sender: string,
    args: SendArgs,
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
      { send: args },
      fee || "auto",
      memo,
      funds
    );
  };
  increaseAllowance = async (
    sender: string,
    args: IncreaseAllowanceArgs,
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
      { increase_allowance: args },
      fee || "auto",
      memo,
      funds
    );
  };
  decreaseAllowance = async (
    sender: string,
    args: DecreaseAllowanceArgs,
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
      { decrease_allowance: args },
      fee || "auto",
      memo,
      funds
    );
  };
  transferFrom = async (
    sender: string,
    args: TransferFromArgs,
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
      { transfer_from: args },
      fee || "auto",
      memo,
      funds
    );
  };
  sendFrom = async (
    sender: string,
    args: SendFromArgs,
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
      { send_from: args },
      fee || "auto",
      memo,
      funds
    );
  };
  burnFrom = async (
    sender: string,
    args: BurnFromArgs,
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
      { burn_from: args },
      fee || "auto",
      memo,
      funds
    );
  };
  mint = async (
    sender: string,
    args: MintArgs,
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
      { mint: args },
      fee || "auto",
      memo,
      funds
    );
  };
  updateMinter = async (
    sender: string,
    args: UpdateMinterArgs,
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
      { update_minter: args },
      fee || "auto",
      memo,
      funds
    );
  };
  updateMarketing = async (
    sender: string,
    args: UpdateMarketingArgs,
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
      { update_marketing: args },
      fee || "auto",
      memo,
      funds
    );
  };
  uploadLogo = async (
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
      { upload_logo: {} },
      fee || "auto",
      memo,
      funds
    );
  };
}

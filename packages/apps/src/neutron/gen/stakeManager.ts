import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult, InstantiateResult } from "@cosmjs/cosmwasm-stargate"; 
import { StdFee } from "@cosmjs/amino";
export interface InstantiateMsg {
  lsd_token_code_id: number;
  [k: string]: unknown;
}
export type Uint64 = number;
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
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr = string;
export type ArrayOfTupleOf_ArrayOfUint8And_String = [number[], string][];
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 */
export type Binary = string;
/**
 * Describes possible interchain query types
 */
export type QueryType = "kv" | "tx";
/**
 * @minItems 3
 * @maxItems 3
 */
export type TupleOf_IcaInfoAnd_IcaInfoAnd_Addr = [IcaInfo, IcaInfo, Addr];
export type EraProcessStatus =
  | "era_update_started"
  | "era_update_ended"
  | "bond_started"
  | "bond_ended"
  | "withdraw_started"
  | "withdraw_ended"
  | "restake_started"
  | "restake_ended"
  | "active_ended";
export type ValidatorUpdateStatus = "start" | "wait_query_update" | "end";
export type WithdrawStatus = "default" | "pending";
export type ArrayOfUnstakeInfo = UnstakeInfo[];
export type String = string;

export interface StakeManagerSchema {
  responses:
    | Uint64
    | BalanceResponse
    | DelegatorDelegationsResponse
    | EraSnapshot
    | ArrayOfTupleOf_ArrayOfUint8And_String
    | QueryRegisteredQueryResponse
    | QueryInterchainAccountAddressResponse
    | TupleOf_IcaInfoAnd_IcaInfoAnd_Addr
    | PoolInfo
    | Stack
    | ArrayOfUnstakeInfo
    | String;
  query:
    | GetRegisteredQueryArgs
    | BalanceArgs
    | DelegationsArgs
    | PoolInfoArgs
    | EraSnapshotArgs
    | InterchainAccountAddressArgs
    | InterchainAccountAddressFromContractArgs
    | AcknowledgementResultArgs
    | UserUnstakeArgs
    | UserUnstakeIndexArgs;
  execute:
    | RegisterPoolArgs
    | OpenChannelArgs
    | RedeemTokenForShareArgs
    | StakeArgs
    | UnstakeArgs
    | WithdrawArgs
    | PoolRmValidatorArgs
    | PoolAddValidatorArgs
    | PoolUpdateValidatorArgs
    | PoolUpdateQueryArgs
    | EraUpdateArgs
    | EraBondArgs
    | EraCollectWithdrawArgs
    | EraRestakeArgs
    | EraActiveArgs
    | StakeLsmArgs;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balances: Balances;
  last_submitted_local_height: number;
  [k: string]: unknown;
}
/**
 * A structure that can be reconstructed from **StorageValues**'s for the **Balance Interchain Query**. Contains coins that are held by some account on remote chain.
 */
export interface Balances {
  coins: Coin[];
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface DelegatorDelegationsResponse {
  delegations: Delegation[];
  last_submitted_local_height: number;
  [k: string]: unknown;
}
/**
 * Delegation is basic (cheap to query) data about a delegation.
 *
 * Instances are created in the querier.
 */
export interface Delegation {
  /**
   * How much we have locked in the delegation
   */
  amount: Coin;
  delegator: Addr;
  /**
   * A validator address (e.g. cosmosvaloper1...)
   */
  validator: string;
  [k: string]: unknown;
}
export interface EraSnapshot {
  active: Uint128;
  bond: Uint128;
  bond_height: number;
  era: number;
  restake_amount: Uint128;
  unbond: Uint128;
}
export interface QueryRegisteredQueryResponse {
  /**
   * *registered_query** is a registered query
   */
  registered_query: RegisteredQuery;
  [k: string]: unknown;
}
export interface RegisteredQuery {
  /**
   * The IBC connection ID for getting ConsensusState to verify proofs.
   */
  connection_id: string;
  /**
   * Amount of coins deposited for the query.
   */
  deposit?: Coin[];
  /**
   * The unique id of the registered query.
   */
  id: number;
  /**
   * The KV-storage keys for which we want to get values from remote chain
   */
  keys: KVKey[];
  /**
   * The local chain last block height when the query result was updated.
   */
  last_submitted_result_local_height?: number;
  /**
   * The remote chain last block height when the query result was updated.
   */
  last_submitted_result_remote_height?: Height;
  /**
   * The address that registered the query.
   */
  owner: string;
  /**
   * The query type identifier (i.e. 'kv' or 'tx' for now)
   */
  query_type: QueryType;
  /**
   * The local chain height when the query was registered.
   */
  registered_at_height?: number;
  /**
   * Timeout before query becomes available for everybody to remove.
   */
  submit_timeout?: number;
  /**
   * The filter for transaction search ICQ
   */
  transactions_filter: string;
  /**
   * Parameter that defines how often the query must be updated.
   */
  update_period: number;
  [k: string]: unknown;
}
/**
 * Describes a KV key for which you want to get value from the storage on remote chain
 */
export interface KVKey {
  /**
   * *key** is a key you want to read from the storage
   */
  key: Binary;
  /**
   * *path** is a path to the storage (storage prefix) where you want to read value by key (usually name of cosmos-packages module: 'staking', 'bank', etc.)
   */
  path: string;
  [k: string]: unknown;
}
export interface Height {
  /**
   * *height** is a height of remote chain
   */
  revision_height?: number;
  /**
   * the revision that the client is currently on
   */
  revision_number?: number;
  [k: string]: unknown;
}
export interface QueryInterchainAccountAddressResponse {
  /**
   * *interchain_account_address** is a interchain account address on the remote chain
   */
  interchain_account_address: string;
  [k: string]: unknown;
}
export interface IcaInfo {
  ctrl_channel_id: string;
  ctrl_connection_id: string;
  ctrl_port_id: string;
  host_channel_id: string;
  host_connection_id: string;
  ica_addr: string;
}
export interface PoolInfo {
  active: Uint128;
  admin: Addr;
  bond: Uint128;
  channel_id_of_ibc_denom: string;
  era: number;
  era_process_status: EraProcessStatus;
  era_seconds: number;
  era_snapshot: EraSnapshot1;
  ibc_denom: string;
  ica_id: string;
  lsd_token: Addr;
  lsm_pending_limit: number;
  lsm_support: boolean;
  minimal_stake: Uint128;
  next_unstake_index: number;
  offset: number;
  paused: boolean;
  platform_fee_commission: Uint128;
  platform_fee_receiver: Addr;
  rate: Uint128;
  rate_change_limit: Uint128;
  redeemming_share_token_denom: string[];
  remote_denom: string;
  share_tokens: Coin[];
  total_lsd_token_amount: Uint128;
  total_platform_fee: Uint128;
  unbond: Uint128;
  unbond_commission: Uint128;
  unbonding_period: number;
  unstake_times_limit: number;
  validator_addrs: string[];
  validator_update_status: ValidatorUpdateStatus;
}
export interface EraSnapshot1 {
  active: Uint128;
  bond: Uint128;
  bond_height: number;
  era: number;
  restake_amount: Uint128;
  unbond: Uint128;
}
export interface Stack {
  admin: Addr;
  lsd_token_code_id: number;
  pools: string[];
  stack_fee_commission: Uint128;
  stack_fee_receiver: Addr;
  total_stack_fee: Uint128;
}
export interface UnstakeInfo {
  amount: Uint128;
  era: number;
  pool_addr: string;
  status: WithdrawStatus;
  unstaker: string;
}
export interface GetRegisteredQueryArgs {
  query_id: number;
}
export interface BalanceArgs {
  ica_addr: string;
}
export interface DelegationsArgs {
  pool_addr: string;
}
export interface PoolInfoArgs {
  pool_addr: string;
}
export interface EraSnapshotArgs {
  pool_addr: string;
}
export interface InterchainAccountAddressArgs {
  connection_id: string;
  interchain_account_id: string;
}
export interface InterchainAccountAddressFromContractArgs {
  interchain_account_id: string;
}
export interface AcknowledgementResultArgs {
  interchain_account_id: string;
  sequence_id: number;
}
export interface UserUnstakeArgs {
  pool_addr: string;
  user_neutron_addr: Addr;
}
export interface UserUnstakeIndexArgs {
  pool_addr: string;
  user_neutron_addr: Addr;
}
export interface RegisterPoolArgs {
  connection_id: string;
  interchain_account_id: string;
  register_fee: Coin[];
  [k: string]: unknown;
}
export interface OpenChannelArgs {
  closed_channel_id: string;
  pool_addr: string;
  register_fee: Coin[];
  [k: string]: unknown;
}
export interface RedeemTokenForShareArgs {
  pool_addr: string;
  tokens: Coin[];
  [k: string]: unknown;
}
export interface StakeArgs {
  neutron_address: string;
  pool_addr: string;
  [k: string]: unknown;
}
export interface UnstakeArgs {
  amount: Uint128;
  pool_addr: string;
  [k: string]: unknown;
}
export interface WithdrawArgs {
  pool_addr: string;
  receiver: Addr;
  unstake_index_list: number[];
  [k: string]: unknown;
}
export interface PoolRmValidatorArgs {
  pool_addr: string;
  validator_addr: string;
  [k: string]: unknown;
}
export interface PoolAddValidatorArgs {
  pool_addr: string;
  validator_addr: string;
  [k: string]: unknown;
}
export interface PoolUpdateValidatorArgs {
  new_validator: string;
  old_validator: string;
  pool_addr: string;
  [k: string]: unknown;
}
export interface PoolUpdateQueryArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface EraUpdateArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface EraBondArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface EraCollectWithdrawArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface EraRestakeArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface EraActiveArgs {
  pool_addr: string;
  [k: string]: unknown;
}
export interface StakeLsmArgs {
  neutron_address: string;
  pool_addr: string;
  [k: string]: unknown;
}


function isSigningCosmWasmClient(
  client: CosmWasmClient | SigningCosmWasmClient
): client is SigningCosmWasmClient {
  return 'execute' in client;
}

export class Client {
  private readonly client: CosmWasmClient | SigningCosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient | SigningCosmWasmClient, contractAddress: string) {
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
    fees?: StdFee | 'auto' | number,
  ): Promise<InstantiateResult> {
    const res = await client.instantiate(sender, codeId, initMsg, label, fees, {
      ...(initCoins && initCoins.length && { funds: initCoins }),
    });
    return res;
  }
  queryGetRegisteredQuery = async(args: GetRegisteredQueryArgs): Promise<QueryRegisteredQueryResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { get_registered_query: args });
  }
  queryBalance = async(args: BalanceArgs): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { balance: args });
  }
  queryDelegations = async(args: DelegationsArgs): Promise<DelegatorDelegationsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { delegations: args });
  }
  queryPoolInfo = async(args: PoolInfoArgs): Promise<PoolInfo> => {
    return this.client.queryContractSmart(this.contractAddress, { pool_info: args });
  }
  queryStackInfo = async(): Promise<Stack> => {
    return this.client.queryContractSmart(this.contractAddress, { stack_info: {} });
  }
  queryEraSnapshot = async(args: EraSnapshotArgs): Promise<EraSnapshot> => {
    return this.client.queryContractSmart(this.contractAddress, { era_snapshot: args });
  }
  queryInterchainAccountAddress = async(args: InterchainAccountAddressArgs): Promise<QueryInterchainAccountAddressResponse> => {
    return this.client.queryContractSmart(this.contractAddress, { interchain_account_address: args });
  }
  queryInterchainAccountAddressFromContract = async(args: InterchainAccountAddressFromContractArgs): Promise<TupleOf_IcaInfoAnd_IcaInfo_and_Addr> => {
    return this.client.queryContractSmart(this.contractAddress, { interchain_account_address_from_contract: args });
  }
  queryAcknowledgementResult = async(args: AcknowledgementResultArgs): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, { acknowledgement_result: args });
  }
  queryUserUnstake = async(args: UserUnstakeArgs): Promise<ArrayOfUnstakeInfo> => {
    return this.client.queryContractSmart(this.contractAddress, { user_unstake: args });
  }
  queryUserUnstakeIndex = async(args: UserUnstakeIndexArgs): Promise<String> => {
    return this.client.queryContractSmart(this.contractAddress, { user_unstake_index: args });
  }
  queryErrorsQueue = async(): Promise<ArrayOfTupleOf_Array_of_uint8And_String> => {
    return this.client.queryContractSmart(this.contractAddress, { errors_queue: {} });
  }
  registerPool = async(sender:string, args: RegisterPoolArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { register_pool: args }, fee || "auto", memo, funds);
  }
  initPool = async(sender: string, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { init_pool: {} }, fee || "auto", memo, funds);
  }
  configPool = async(sender: string, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { config_pool: {} }, fee || "auto", memo, funds);
  }
  configStack = async(sender: string, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { config_stack: {} }, fee || "auto", memo, funds);
  }
  openChannel = async(sender:string, args: OpenChannelArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { open_channel: args }, fee || "auto", memo, funds);
  }
  redeemTokenForShare = async(sender:string, args: RedeemTokenForShareArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { redeem_token_for_share: args }, fee || "auto", memo, funds);
  }
  stake = async(sender:string, args: StakeArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { stake: args }, fee || "auto", memo, funds);
  }
  unstake = async(sender:string, args: UnstakeArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { unstake: args }, fee || "auto", memo, funds);
  }
  withdraw = async(sender:string, args: WithdrawArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { withdraw: args }, fee || "auto", memo, funds);
  }
  poolRmValidator = async(sender:string, args: PoolRmValidatorArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { pool_rm_validator: args }, fee || "auto", memo, funds);
  }
  poolAddValidator = async(sender:string, args: PoolAddValidatorArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { pool_add_validator: args }, fee || "auto", memo, funds);
  }
  poolUpdateValidator = async(sender:string, args: PoolUpdateValidatorArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { pool_update_validator: args }, fee || "auto", memo, funds);
  }
  poolUpdateQuery = async(sender:string, args: PoolUpdateQueryArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { pool_update_query: args }, fee || "auto", memo, funds);
  }
  eraUpdate = async(sender:string, args: EraUpdateArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { era_update: args }, fee || "auto", memo, funds);
  }
  eraBond = async(sender:string, args: EraBondArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { era_bond: args }, fee || "auto", memo, funds);
  }
  eraCollectWithdraw = async(sender:string, args: EraCollectWithdrawArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { era_collect_withdraw: args }, fee || "auto", memo, funds);
  }
  eraRestake = async(sender:string, args: EraRestakeArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { era_restake: args }, fee || "auto", memo, funds);
  }
  eraActive = async(sender:string, args: EraActiveArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { era_active: args }, fee || "auto", memo, funds);
  }
  stakeLsm = async(sender:string, args: StakeLsmArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> =>  {
          if (!isSigningCosmWasmClient(this.client)) { throw this.mustBeSigningClient(); }
    return this.client.execute(sender, this.contractAddress, { stake_lsm: args }, fee || "auto", memo, funds);
  }
}

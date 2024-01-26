import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { getChains, getIBCConfig } from "@stafihub/apps-config";
import { getOfflineSigner, sendIBCTransferTx } from "@stafihub/apps-wallet";
import { ibcConfigs } from "../../config";
import { LsdToken, StakeManager } from "../gen";

export async function testStake() {
  console.log("Start Stake");
  const ibcConfig = getIBCConfig("pion-1", ibcConfigs);
  const channel = ibcConfig.srcChannel;

  const memo = JSON.stringify({
    wasm: {
      contract:
        "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au",
      msg: {
        stake: {
          neutron_address: "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa",
          pool_addr:
            "cosmos18m6ym3tq08wweuuhjmfukfjpraw8zdxfu6fhqv75y5eu4r4lgl8qn4dksq",
        },
      },
    },
  });

  const response = await sendIBCTransferTx(
    getChains("testnet")["cosmos-stafi-1"],
    "cosmos1lwfzf8h0dkecltvz5wz6jn00t4te9qrhfn3vn6",
    "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au",
    "1000000",
    "transfer",
    channel,
    "uatom",
    memo
  );

  console.log({ response });
}

export async function testUnstake(amount: number) {
  const offlineSigner = await getOfflineSigner("pion-1");
  const signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
    "https://rpc-falcron.pion-1.ntrn.tech",
    offlineSigner
  );

  const stakeManagerContractAddress =
    "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au";
  const poolAddress =
    "cosmos18m6ym3tq08wweuuhjmfukfjpraw8zdxfu6fhqv75y5eu4r4lgl8qn4dksq";
  const lsdTokenContractAddress =
    "neutron1lynzj6ym0y4ne69cm4m3zhmdyuql9clapcdx6k8kd3grxl494g0quy4xjq";
  const userAddress = "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa";

  const lsdTokenClient = new LsdToken.Client(
    signingCosmWasmClient,
    lsdTokenContractAddress
  );
  const userBalance = await lsdTokenClient.queryBalance({
    address: userAddress,
  });
  console.log({ userBalance });

  const allowance = await lsdTokenClient.queryAllowance({
    owner: userAddress,
    spender: stakeManagerContractAddress,
  });

  console.log({ allowance });
  const amountInChain = amount * 1000000;

  const fee = {
    amount: [
      {
        denom: "untrn",
        amount: "1",
      },
    ],
    gas: "1000000",
  };

  if (amountInChain > Number(allowance.allowance)) {
    const executeResult = await lsdTokenClient.increaseAllowance(
      userAddress,
      {
        spender: stakeManagerContractAddress,
        amount: Number(amountInChain) - Number(allowance.allowance) + "",
      },
      fee
    );

    console.log({ executeResult });
  }

  const stakeManagerClient = new StakeManager.Client(
    signingCosmWasmClient,
    stakeManagerContractAddress
  );

  const executeResult = await stakeManagerClient.unstake(
    userAddress,
    {
      amount: amountInChain + "",
      pool_addr: poolAddress,
    },
    fee
  );
  console.log({ executeResult });
}

export async function testWithdraw(amount: number) {
  const offlineSigner = await getOfflineSigner("pion-1");
  const signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
    "https://rpc-falcron.pion-1.ntrn.tech",
    offlineSigner
  );

  const stakeManagerContractAddress =
    "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au";
  const poolAddress =
    "cosmos18m6ym3tq08wweuuhjmfukfjpraw8zdxfu6fhqv75y5eu4r4lgl8qn4dksq";
  const userAddress = "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa";

  const fee = {
    amount: [
      {
        denom: "untrn",
        amount: "1",
      },
    ],
    gas: "1000000",
  };

  const stakeManagerClient = new StakeManager.Client(
    signingCosmWasmClient,
    stakeManagerContractAddress
  );

  const executeResult = await stakeManagerClient.withdraw(
    userAddress,
    {
      pool_addr: poolAddress,
      receiver: "cosmos1lwfzf8h0dkecltvz5wz6jn00t4te9qrhfn3vn6",
      unstake_index_list: [],
    },
    fee
  );
  console.log({ executeResult });
}

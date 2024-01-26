import { getOfflineSigner } from "@stafihub/apps-wallet";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { LsdToken, StakeManager } from "../gen";

export async function testQuery() {
  const cosmWasmClient = await CosmWasmClient.connect(
    "https://rpc-falcron.pion-1.ntrn.tech"
  );

  const stakeManagerContractAddress =
    "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au";
  const poolAddress =
    "cosmos18m6ym3tq08wweuuhjmfukfjpraw8zdxfu6fhqv75y5eu4r4lgl8qn4dksq";
  const lsdTokenContractAddress =
    "neutron1lynzj6ym0y4ne69cm4m3zhmdyuql9clapcdx6k8kd3grxl494g0quy4xjq";
  const userAddress = "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa";

  const stakeManagerClient = new StakeManager.Client(
    cosmWasmClient,
    stakeManagerContractAddress
  );

  const lsdTokenClient = new LsdToken.Client(
    cosmWasmClient,
    lsdTokenContractAddress
  );
  const userBalance = await lsdTokenClient.queryBalance({
    address: userAddress,
  });
  console.log({ userBalance });
}

export async function queryWithdrawInfo() {
  const cosmWasmClient = await CosmWasmClient.connect(
    "https://rpc-falcron.pion-1.ntrn.tech"
  );

  const stakeManagerContractAddress =
    "neutron16ecn09hyz97rw6v6py2tddpcj2k7fvkfm6tlg5xzqywdmgmnc74qhya7au";
  const poolAddress =
    "cosmos18m6ym3tq08wweuuhjmfukfjpraw8zdxfu6fhqv75y5eu4r4lgl8qn4dksq";
  const lsdTokenContractAddress =
    "neutron1lynzj6ym0y4ne69cm4m3zhmdyuql9clapcdx6k8kd3grxl494g0quy4xjq";
  const userAddress = "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa";

  const stakeManagerClient = new StakeManager.Client(
    cosmWasmClient,
    stakeManagerContractAddress
  );

  const poolInfo = await stakeManagerClient.queryPoolInfo({
    pool_addr: poolAddress,
  });
  console.log({ poolInfo });

  const eraSnapshot = await stakeManagerClient.queryEraSnapshot({
    pool_addr: poolAddress,
  });
  console.log({ eraSnapshot });

  const userUnstakeList = await stakeManagerClient.queryUserUnstake({
    pool_addr: poolAddress,
    user_neutron_addr: userAddress,
  });
  console.log({ userUnstakeList });

  let overallAmount = 0;
  let withdrawableAmount = 0;
  userUnstakeList.forEach((item) => {
    overallAmount += Number(item.amount);
    if (item.era + poolInfo.unbonding_period <= poolInfo.era) {
      withdrawableAmount += Number(item.amount);
    }
  });
  console.log({ overallAmount });
  console.log({ withdrawableAmount });
}

// export async function testBond() {
//   const offlineSigner = await getOfflineSigner("pion-1");
//   const signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
//     "https://rpc-falcron.pion-1.ntrn.tech",
//     offlineSigner
//   );

//   const neutronVaultClient = new NeutronVault.Client(
//     signingCosmWasmClient,
//     "neutron1hjjqfvpwpkl5ssc6hk76es2lznd4tws75jcvkql9xncmgasemjuqhzyzvg"
//   );

//   neutronVaultClient.bond(
//     "neutron1lwfzf8h0dkecltvz5wz6jn00t4te9qrhdvcwfa",
//     {
//       amount: [
//         {
//           denom: "untrn",
//           amount: "1",
//         },
//       ],
//       gas: "1000000",
//     },
//     "",
//     [
//       {
//         denom: "untrn",
//         amount: "1000000",
//       },
//     ]
//   );
// }

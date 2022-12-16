import {
  getDenom,
  getRTokenDenom,
  getRTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { atomicToHuman } from "@stafihub/apps-util";
import {
  queryActDetail,
  queryActLatestCycle,
  queryUserClaimInfoDetail,
  queryUserMintCount,
  queryLatestBlock,
  queryDenomTrace,
} from "@stafihub/apps-wallet";
import * as _ from "lodash";
import Long from "long";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chains } from "../config";
import {
  ActDetailStore,
  setActDetailStore,
  updateSingleActDetailStore,
} from "../redux/reducers/RPoolSlice";
import { RootState } from "../redux/store";
import {
  FormatMintRewardAct,
  FormatUserMintInfo,
  PriceItem,
} from "../types/interface";
import {
  useChainAccount,
  useLatestBlock,
  usePriceFromDenom,
  usePriceList,
} from "./useAppSlice";

export function useMintPrograms() {
  const dispatch = useDispatch();
  const priceList = usePriceList();
  const [loading, setLoading] = useState(true);

  const actDetails: FormatMintRewardAct[] = useSelector((state: RootState) => {
    const arr = _.values(state.rPool.actDetailStore);
    const result: FormatMintRewardAct[] = [];
    arr.forEach((item) => {
      if (item) {
        result.push(...item);
      }
    });
    result.sort((a, b) => {
      const aChain = chains[a.chainId];
      const bChain = chains[b.chainId];
      return Number(aChain.sortIndex) - Number(bChain.sortIndex);
    });
    return result;
  });

  const totalMintedValue = useMemo(() => {
    let total = 0;
    actDetails.forEach((actDetail) => {
      const priceItem = priceList.find(
        (item) => item.denom === getDenom(actDetail.chainId, chains)
      );
      if (isNaN(Number(actDetail.totalNativeTokenAmount)) || !priceItem) {
        return;
      }
      total +=
        Number(actDetail.totalNativeTokenAmount) *
        Number(atomicToHuman(priceItem.price, 6, 6));
    });

    return total;
  }, [actDetails, priceList]);

  const totalRewardFis = useMemo(() => {
    let total = 0;
    actDetails.forEach((actDetail) => {
      actDetail.tokenRewardInfos.forEach((info) => {
        if (info.denom === getDenom(getStafiHubChainId(), chains)) {
          total += Number(info.totalRewardAmount);
        }
      });
    });

    return total;
  }, [actDetails]);

  const updateActDetails = useCallback(async () => {
    const restChainsArr = _.values(_.omit(chains, [getStafiHubChainId()]));
    const actDetailStore: ActDetailStore = {};

    const chainActDetailList = await Promise.all(
      restChainsArr.map((chain) => {
        return getActDetailList(chain.chainId, priceList);
      })
    );

    chainActDetailList.forEach((chainActDetail) => {
      if (chainActDetail) {
        chainActDetail.forEach((actDetail) => {
          if (actDetail) {
            let oldArr = actDetailStore[actDetail.rTokenDenom] || [];
            actDetailStore[actDetail.rTokenDenom] = [...oldArr, actDetail];
          }
        });
      }
    });

    dispatch(setActDetailStore(actDetailStore));
    setLoading(false);
  }, [dispatch, priceList]);

  useEffect(() => {
    updateActDetails();
  }, [updateActDetails]);

  return {
    actDetails,
    totalMintedValue,
    totalRewardFis,
    loading,
    updateActDetails,
  };
}

export function useMintProgram(chainId: string, cycle: number) {
  const dispatch = useDispatch();
  const latestBlock = useLatestBlock();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const priceList = usePriceList();
  const tokenPrice = usePriceFromDenom(getDenom(chainId, chains));
  const [userMintInfo, setUserMintInfo] = useState<FormatUserMintInfo | null>(
    null
  );

  const actDetailStore = useSelector((state: RootState) => {
    return state.rPool.actDetailStore;
  });

  const actDetail: FormatMintRewardAct | undefined = useMemo(() => {
    const arr = actDetailStore[getRTokenDenom(chainId, chains)];
    if (!arr) {
      return undefined;
    }
    return arr.find((item) => item.cycle === cycle);
  }, [actDetailStore, chainId, cycle]);

  const mintedValue = useMemo(() => {
    if (
      !actDetail ||
      isNaN(Number(tokenPrice)) ||
      isNaN(Number(actDetail.totalNativeTokenAmount))
    ) {
      return "--";
    }
    return Number(tokenPrice) * Number(actDetail.totalNativeTokenAmount);
  }, [actDetail, tokenPrice]);

  const vesting = useMemo(() => {
    if (!actDetail) {
      return "--";
    }
    return Math.floor((actDetail.lockedBlocks * 6) / (60 * 60 * 24)) + "D";
  }, [actDetail]);

  const updateActDetail = useCallback(async () => {
    const chainActDetailList = await getActDetailList(chainId, priceList);

    const newValue: FormatMintRewardAct[] = (chainActDetailList?.filter(
      (item) => item !== undefined
    ) || []) as FormatMintRewardAct[];

    dispatch(
      updateSingleActDetailStore(getRTokenDenom(chainId, chains), newValue)
    );
  }, [dispatch, chainId, priceList]);

  const updateUserActDetail = useCallback(async () => {
    if (!stafiHubAccount?.bech32Address || !actDetail || !latestBlock) {
      setUserMintInfo(null);
      return;
    }
    const userMintCount = await queryUserMintCount(
      chains[getStafiHubChainId()],
      stafiHubAccount.bech32Address,
      getRTokenDenom(chainId, chains),
      Long.fromInt(cycle)
    );

    if (userMintCount === undefined) {
      return;
    }

    const claimInfoRequests = _.range(0, userMintCount.toInt()).map(
      (mintIndex) =>
        (async () => {
          const claimInfoDetail = await queryUserClaimInfoDetail(
            chains[getStafiHubChainId()],
            stafiHubAccount.bech32Address,
            getRTokenDenom(chainId, chains),
            Long.fromInt(cycle),
            Long.fromInt(mintIndex)
          );
          return claimInfoDetail;
        })()
    );

    const claimInfoResponses = await Promise.all(claimInfoRequests);
    let userNativeTokenAmount = 0;
    let userRTokenAmount = 0;
    let userTotalRewardValue = 0;

    const rewardMap: {
      [key: string]: {
        userTotalRewardAmount: number;
        userTotalClaimableAmount: number;
        userTotalClaimedAmount: number;
        userTotalLockedAmount: number;
      };
    } = {};

    const claimMintIndexs: number[] = [];

    await Promise.all(
      claimInfoResponses.map((claimInfo, mintIndex) =>
        (async () => {
          if (claimInfo) {
            userNativeTokenAmount += Number(claimInfo.nativeTokenAmount);
            userRTokenAmount += Number(claimInfo.mintRTokenAmount);

            await Promise.all(
              claimInfo.TokenClaimInfos.map((tokenClaimInfo) =>
                (async () => {
                  let finalDenom = tokenClaimInfo.denom;

                  if (finalDenom.startsWith("ibc/")) {
                    const denomTraceRes = await queryDenomTrace(
                      chains[getStafiHubChainId()],
                      finalDenom
                    );

                    if (denomTraceRes && denomTraceRes.denomTrace) {
                      finalDenom = denomTraceRes.denomTrace.baseDenom;
                    }
                  }

                  const priceItem = priceList.find(
                    (item) => item.denom === finalDenom
                  );
                  if (
                    isNaN(Number(tokenClaimInfo.totalRewardAmount)) ||
                    !priceItem
                  ) {
                    return;
                  }
                  userTotalRewardValue +=
                    Number(tokenClaimInfo.totalRewardAmount) *
                    Number(atomicToHuman(priceItem.price));
                  if (!rewardMap[finalDenom]) {
                    rewardMap[finalDenom] = {
                      userTotalRewardAmount: 0,
                      userTotalClaimableAmount: 0,
                      userTotalClaimedAmount: 0,
                      userTotalLockedAmount: 0,
                    };
                  }

                  rewardMap[finalDenom].userTotalRewardAmount =
                    Number(rewardMap[finalDenom].userTotalRewardAmount) +
                    Number(tokenClaimInfo.totalRewardAmount);

                  rewardMap[finalDenom].userTotalClaimedAmount =
                    Number(rewardMap[finalDenom].userTotalClaimedAmount) +
                    Number(tokenClaimInfo.totalClaimedAmount);

                  let finalBlock =
                    claimInfo.mintBlock.toInt() +
                    Number(actDetail.lockedBlocks);

                  let shouldClaimAmount = 0;
                  let leftClaimAmount =
                    Number(tokenClaimInfo.totalRewardAmount) -
                    Number(tokenClaimInfo.totalClaimedAmount);
                  if (leftClaimAmount > 0) {
                    if (latestBlock < finalBlock) {
                      let duBlocks =
                        latestBlock - claimInfo.latestClaimedBlock.toInt();
                      let lockedDuBlocks =
                        finalBlock - claimInfo.latestClaimedBlock.toInt();
                      shouldClaimAmount =
                        leftClaimAmount * (duBlocks / lockedDuBlocks);
                    } else {
                      shouldClaimAmount = leftClaimAmount;
                    }
                  }
                  if (Number(shouldClaimAmount) > Number(0)) {
                    if (claimMintIndexs.indexOf(mintIndex) < 0) {
                      claimMintIndexs.push(mintIndex);
                    }
                    rewardMap[finalDenom].userTotalClaimableAmount =
                      Number(rewardMap[finalDenom].userTotalClaimableAmount) +
                      shouldClaimAmount;
                  }

                  rewardMap[finalDenom].userTotalLockedAmount =
                    Number(rewardMap[finalDenom].userTotalRewardAmount) -
                    Number(rewardMap[finalDenom].userTotalClaimableAmount) -
                    Number(rewardMap[finalDenom].userTotalClaimedAmount);
                })()
              )
            );
          }
        })()
      )
    );

    // const userMintedValue = isNaN(Number(tokenPrice))
    //   ? "--"
    //   : atomicToHuman(Number(userNativeTokenAmount) * Number(tokenPrice));

    const userPercentage =
      Number(actDetail.totalRTokenAmount) === 0
        ? "0"
        : (
            (Number(atomicToHuman(userRTokenAmount)) * 100) /
            Number(actDetail.totalRTokenAmount)
          ).toString();

    setUserMintInfo({
      denom: "ufis",
      claimMintIndexs,
      nativeTokenAmount: atomicToHuman(userNativeTokenAmount),
      mintRTokenAmount: atomicToHuman(userRTokenAmount),
      percentage: userPercentage,
      userTotalRewardValue: atomicToHuman(userTotalRewardValue),
      rewardMap: _.cloneDeep(rewardMap),
    });
  }, [
    chainId,
    stafiHubAccount?.bech32Address,
    cycle,
    priceList,
    actDetail,
    latestBlock,
  ]);

  useEffect(() => {
    updateActDetail();
  }, [updateActDetail]);

  useEffect(() => {
    updateUserActDetail();
  }, [updateUserActDetail]);

  return { actDetail, mintedValue, userMintInfo, vesting, updateUserActDetail };
}

async function getActDetailList(
  chainId: string,
  priceList: PriceItem[]
): Promise<(FormatMintRewardAct | undefined)[] | undefined> {
  try {
    const rTokenDenom = getRTokenDenom(chainId, chains);
    const response = await queryActLatestCycle(
      chains[getStafiHubChainId()],
      rTokenDenom
    );

    const latestBlockResult = await queryLatestBlock(
      chains[getStafiHubChainId()]
    );
    const latestBlock = latestBlockResult?.block?.header?.height?.toNumber();

    const actDetailRequests = [];
    for (let cycle = 0; cycle <= response.latestCycle.toInt(); cycle++) {
      actDetailRequests.push(
        (async (): Promise<FormatMintRewardAct | undefined> => {
          try {
            const actDetailResponse = await queryActDetail(
              chains[getStafiHubChainId()],
              rTokenDenom,
              Long.fromInt(cycle)
            );

            const actDetail = actDetailResponse.act;

            if (!actDetail) {
              return undefined;
            }

            let durationDays = 0;
            let remainingSeconds = 0;
            let endTimestamp = 0;
            try {
              durationDays =
                ((actDetail.end.toNumber() - actDetail.begin.toNumber()) * 6) /
                (24 * 60 * 60);
              remainingSeconds =
                Math.max(0, actDetail.end.toNumber() - (latestBlock || 0)) * 6;
              endTimestamp = remainingSeconds * 1000 + Date.now();
              // endTimestamp = actDetail.end.toNumber() * 6000;
            } catch {}

            const formatTokenRewardInfos = actDetail.tokenRewardInfos.map(
              (info) => {
                return {
                  denom: info.denom,
                  apy: atomicToHuman(info.rewardRate, 18),
                  totalRewardAmount: atomicToHuman(info.totalRewardAmount, 6),
                  leftRewardAmount: atomicToHuman(info.leftAmount, 6),
                  calcApr: "--",
                };
              }
            );

            const reqList = formatTokenRewardInfos.map((rewardInfo) => {
              return (async () => {
                if (Number(rewardInfo.leftRewardAmount) <= 0) {
                  return "0";
                }
                let finalDenom;
                if (rewardInfo.denom.startsWith("ibc/")) {
                  const denomTraceRes = await queryDenomTrace(
                    chains[getStafiHubChainId()],
                    rewardInfo.denom
                  );

                  if (denomTraceRes && denomTraceRes.denomTrace) {
                    finalDenom = denomTraceRes.denomTrace.baseDenom;
                  }
                } else {
                  finalDenom = rewardInfo.denom;
                }

                if (!finalDenom) {
                  return "--";
                }
                const rewardTokenPrice = getTokenPrice(finalDenom, priceList);
                const mintTokenPrice = getTokenPrice(
                  getDenom(chainId, chains),
                  priceList
                );
                if (
                  isNaN(Number(rewardTokenPrice)) ||
                  isNaN(Number(mintTokenPrice))
                ) {
                  return "--";
                }
                const rewardAPR =
                  (Number(rewardInfo.apy) * Number(rewardTokenPrice) * 100) /
                  Number(mintTokenPrice);
                return rewardAPR + "";
              })();
            });

            const aprList = await Promise.all(reqList);
            formatTokenRewardInfos.forEach((rewardInfo, index) => {
              rewardInfo.calcApr = aprList[index];
            });

            return {
              chainId,
              rTokenDenom: rTokenDenom,
              cycle,
              rTokenDisplayName: getRTokenDisplayName(chainId, chains),
              durationDays: Math.round(durationDays).toString(),
              totalNativeTokenAmount: atomicToHuman(
                actDetail.totalNativeTokenAmount
              ),
              totalRTokenAmount: atomicToHuman(actDetail.totalRTokenAmount),
              tokenRewardInfos: formatTokenRewardInfos,
              begin: actDetail.begin.toInt(),
              end: actDetail.end.toInt(),
              current: latestBlock || 0,
              remainingSeconds,
              endTimestamp,
              lockedBlocks: actDetail.lockedBlocks.toInt(),
            };
          } catch {
            return undefined;
          }
        })()
      );
    }

    const actDetailResponses = await Promise.all(actDetailRequests);

    return actDetailResponses;
  } catch {
    return undefined;
  }
}

const getTokenPrice = (denom: string, priceList: PriceItem[]) => {
  const matched = priceList.find((price: PriceItem) => price.denom === denom);
  if (matched) {
    return atomicToHuman(matched.price, 6, 6);
  } else {
    return "--";
  }
};

import {
  chains,
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
} from "@stafihub/apps-wallet";
import * as _ from "lodash";
import Long from "long";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActDetailStore,
  setActDetailStore,
  updateSingleActDetailStore,
} from "../redux/reducers/RPoolSlice";
import { RootState } from "../redux/store";
import { FormatMintRewardAct, FormatUserMintInfo } from "../types/interface";
import {
  useChainAccount,
  useLatestBlock,
  usePriceFromDenom,
  usePriceList,
} from "./useAppSlice";

export function useMintPrograms() {
  const dispatch = useDispatch();
  const priceList = usePriceList();

  const actDetails: FormatMintRewardAct[] = useSelector((state: RootState) => {
    const arr = _.values(state.rPool.actDetailStore);
    const result: FormatMintRewardAct[] = [];
    arr.forEach((item) => {
      if (item) {
        result.push(...item);
      }
    });
    return result;
  });

  const totalMintedValue = useMemo(() => {
    let total = 0;
    actDetails.forEach((actDetail) => {
      const priceItem = priceList.find(
        (item) => item.denom === getDenom(actDetail.chainId)
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
        if (info.denom === getDenom(getStafiHubChainId())) {
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
        return getActDetailList(chain.chainId);
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
  }, [dispatch]);

  useEffect(() => {
    updateActDetails();
  }, [updateActDetails]);

  return { actDetails, totalMintedValue, totalRewardFis };
}

export function useMintProgram(chainId: string, cycle: number) {
  const dispatch = useDispatch();
  const latestBlock = useLatestBlock();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const priceList = usePriceList();
  const tokenPrice = usePriceFromDenom(getDenom(chainId));
  const [userMintInfo, setUserMintInfo] = useState<FormatUserMintInfo | null>(
    null
  );

  const actDetailStore = useSelector((state: RootState) => {
    return state.rPool.actDetailStore;
  });

  const actDetail: FormatMintRewardAct | undefined = useMemo(() => {
    const arr = actDetailStore[getRTokenDenom(chainId)];
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
    return Math.ceil((actDetail.lockedBlocks * 6) / (60 * 60 * 24)) + "D";
  }, [actDetail]);

  const updateActDetail = useCallback(async () => {
    const chainActDetailList = await getActDetailList(chainId);

    const newValue: FormatMintRewardAct[] = (chainActDetailList?.filter(
      (item) => item !== undefined
    ) || []) as FormatMintRewardAct[];

    dispatch(updateSingleActDetailStore(getRTokenDenom(chainId), newValue));
  }, [dispatch, chainId]);

  const updateUserActDetail = useCallback(async () => {
    if (!stafiHubAccount?.bech32Address || !actDetail || !latestBlock) {
      setUserMintInfo(null);
      return;
    }
    const userMintCount = await queryUserMintCount(
      getStafiHubChainId(),
      stafiHubAccount.bech32Address,
      getRTokenDenom(chainId),
      Long.fromInt(cycle)
    );

    if (userMintCount === undefined) {
      return;
    }

    const claimInfoRequests = _.range(0, userMintCount.toInt() + 1).map(
      (mintIndex) =>
        (async () => {
          const claimInfoDetail = await queryUserClaimInfoDetail(
            getStafiHubChainId(),
            stafiHubAccount.bech32Address,
            getRTokenDenom(chainId),
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
    let userTotalRewardAmount = 0;
    let userTotalClaimableAmount = 0;
    let userTotalClaimedAmount = 0;
    let userTotalLockedAmount = 0;

    const claimMintIndexs: number[] = [];

    claimInfoResponses.forEach((claimInfo, mintIndex) => {
      if (claimInfo) {
        userNativeTokenAmount += Number(claimInfo.nativeTokenAmount);
        userRTokenAmount += Number(claimInfo.mintRTokenAmount);
        claimInfo.TokenClaimInfos.forEach((tokenClaimInfo) => {
          const priceItem = priceList.find(
            (item) => item.denom === tokenClaimInfo.denom
          );
          if (isNaN(Number(tokenClaimInfo.totalRewardAmount)) || !priceItem) {
            return;
          }
          userTotalRewardValue +=
            Number(tokenClaimInfo.totalRewardAmount) *
            Number(atomicToHuman(priceItem.price));
          userTotalRewardAmount += Number(tokenClaimInfo.totalRewardAmount);
          userTotalClaimedAmount += Number(tokenClaimInfo.totalClaimedAmount);

          let finalBlock =
            claimInfo.mintBlock.toInt() + Number(actDetail.lockedBlocks);

          let shouldClaimAmount = 0;
          let leftClaimAmount =
            Number(tokenClaimInfo.totalRewardAmount) -
            Number(tokenClaimInfo.totalClaimedAmount);
          if (leftClaimAmount > 0) {
            if (latestBlock < finalBlock) {
              let duBlocks = latestBlock - claimInfo.latestClaimedBlock.toInt();
              let lockedDuBlocks =
                finalBlock - claimInfo.latestClaimedBlock.toInt();
              shouldClaimAmount = leftClaimAmount * (duBlocks / lockedDuBlocks);
            } else {
              shouldClaimAmount = leftClaimAmount;
            }
          }
          if (Number(shouldClaimAmount) > Number(0)) {
            claimMintIndexs.push(mintIndex);
            userTotalClaimableAmount += shouldClaimAmount;
          }
        });
      }
    });

    userTotalLockedAmount =
      Number(userTotalRewardAmount) -
      Number(userTotalClaimableAmount) -
      Number(userTotalClaimedAmount);

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
      userTotalRewardAmount: atomicToHuman(userTotalRewardAmount, 6, 4),
      userTotalClaimableAmount: atomicToHuman(userTotalClaimableAmount, 6, 4),
      userTotalLockedAmount: atomicToHuman(userTotalLockedAmount, 6, 4),
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
  chainId: string
): Promise<(FormatMintRewardAct | undefined)[] | undefined> {
  try {
    const rTokenDenom = getRTokenDenom(chainId);
    const response = await queryActLatestCycle(
      getStafiHubChainId(),
      rTokenDenom
    );

    const latestBlockResult = await queryLatestBlock(getStafiHubChainId());
    const latestBlock = latestBlockResult?.block?.header?.height?.toNumber();

    const actDetailRequests = [];
    for (let cycle = 0; cycle <= response.latestCycle.toInt(); cycle++) {
      actDetailRequests.push(
        (async (): Promise<FormatMintRewardAct | undefined> => {
          try {
            const actDetailResponse = await queryActDetail(
              getStafiHubChainId(),
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
                };
              }
            );
            return {
              chainId,
              rTokenDenom: rTokenDenom,
              cycle,
              rTokenDisplayName: getRTokenDisplayName(chainId),
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

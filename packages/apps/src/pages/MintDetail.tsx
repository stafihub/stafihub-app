import {
  getChainIdFromRTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { atomicToHuman, formatNumberToFixed } from "@stafihub/apps-util";
import {
  Button,
  CardContainer,
  FormatterText,
  RTokenIcon,
  TokenIconV2,
} from "@stafihub/react-components";
import * as _ from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import iconDown from "../assets/images/icon_down_white.png";
import iconRewardToken from "../assets/images/icon_mint_reward_token.svg";
import iconMintValue from "../assets/images/icon_mint_value.svg";
import iconVesting from "../assets/images/icon_mint_vesting.svg";
import iconMyMint from "../assets/images/icon_my_mint.svg";
import iconMyReward from "../assets/images/icon_my_reward.svg";
import { chains } from "../config";
import { useChainAccount, useLatestBlock } from "../hooks/useAppSlice";
import { useMintProgram } from "../hooks/useMintPrograms";
import { ClaimMintRewardModal } from "../modals/ClaimMintRewardModal";
import { RootState } from "../redux/store";
import { PriceItem } from "../types/interface";

export const MintDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const latestBlock = useLatestBlock();
  const { rToken, cycle } = params;
  const [claimModalVisible, setClaimModalVisible] = useState(false);
  const { actDetail, mintedValue, userMintInfo, vesting, updateUserActDetail } =
    useMintProgram(
      getChainIdFromRTokenDisplayName(rToken, chains),
      Number(cycle)
    );
  const priceList = useSelector((state: RootState) => {
    return state.app.priceList;
  });
  const [totalApr, setTotalApr] = useState("--");

  const isEnd = useMemo(() => {
    if (!latestBlock || !actDetail) {
      return true;
    }
    return actDetail.end <= latestBlock;
  }, [latestBlock, actDetail]);

  const claimDisabled = useMemo(() => {
    return (
      !stafiHubAccount || !userMintInfo || _.isEmpty(userMintInfo.rewardMap)
    );
  }, [stafiHubAccount, userMintInfo]);

  const isRewardEmpty = useMemo(() => {
    if (!actDetail) {
      return false;
    }

    const validList = actDetail.tokenRewardInfos.filter(
      (item) => Number(item.leftRewardAmount) > 0
    );
    return validList.length === 0;
  }, [actDetail]);

  const getTokenPrice = useCallback(
    (denom: string) => {
      const matched = priceList.find(
        (price: PriceItem) => price.denom === denom
      );
      if (matched) {
        return atomicToHuman(matched.price, 6, 6);
      } else {
        return "--";
      }
    },
    [priceList]
  );

  useEffect(() => {
    (async () => {
      if (!actDetail?.tokenRewardInfos) {
        return;
      }
      let totalApr = 0;
      actDetail.tokenRewardInfos.forEach((rewardInfo) => {
        if (!isNaN(Number(rewardInfo.calcApr))) {
          totalApr += Number(rewardInfo.calcApr);
        }
      });

      setTotalApr(formatNumberToFixed(totalApr, 2) + "%");
    })();
  }, [actDetail, getTokenPrice, rToken]);

  if (!rToken) {
    return null;
  }

  return (
    <div className="flex justify-center pt-[55px]">
      <CardContainer>
        <div className="pt-9 pl-7 pb-11 pr-[73px]">
          <div className="flex items-center">
            <img
              src={iconDown}
              className="h-[14px] rotate-90 cursor-pointer"
              alt="back"
              onClick={() => {
                navigate(-1);
              }}
            />

            <div className="ml-5 mb-1 text-white text-[30px] font-bold">
              rPool
            </div>
          </div>

          <div className="mt-11 flex">
            <div className="ml-[46px]">
              <RTokenIcon rtokenName={rToken} size={60} />
            </div>

            <div className="ml-[80px]">
              <div className="text-white text-[20px] font-bold">
                Mint {rToken} APR
              </div>

              <div className="mt-6 mb-2">
                <div className="mb-2 text-primary text-[20px] font-bold">
                  {totalApr}
                </div>
              </div>
              {/* <div className="mt-6 mb-2">
                {actDetail?.tokenRewardInfos.map(
                  (rewardInfo, index) =>
                    (Number(rewardInfo.leftRewardAmount) > 0 || isEnd) && (
                      <div
                        key={index}
                        className="mb-2 text-primary text-[20px] font-bold"
                      >
                        1 {rToken.slice(1)} : {rewardInfo.apy}{" "}
                        <TokenName
                          stafiHubChainConfig={chains[getStafiHubChainId()]}
                          denom={rewardInfo.denom}
                        />
                      </div>
                    )
                )}

                {isRewardEmpty && !isEnd && (
                  <div className="mb-2 text-primary text-[20px] font-bold">
                    Reward Remaining 0
                  </div>
                )}
              </div> */}

              <div className="my-4 h-[1px] bg-divider w-[280px]" />

              <div className="flex items-center">
                <img src={iconRewardToken} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Reward Token
                </div>

                <div className="ml-20 flex">
                  {actDetail?.tokenRewardInfos.map((rewardInfo, index) => (
                    <div key={index} className="mr-[10px]">
                      <TokenIconV2
                        stafiHubChainConfig={chains[getStafiHubChainId()]}
                        denom={rewardInfo.denom}
                        size={20}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <img src={iconMintValue} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Minted Value
                </div>

                <div className="ml-20 flex">
                  <div className="text-white text-[15.5px] font-bold">
                    $<FormatterText value={mintedValue} decimals={2} />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <img src={iconMyMint} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  My Mint
                </div>

                <div className="ml-20 flex">
                  <div className="text-white text-[15.5px] font-bold">
                    <FormatterText value={userMintInfo?.mintRTokenAmount} />
                    (
                    <FormatterText
                      value={userMintInfo?.percentage}
                      decimals={2}
                    />
                    %)
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <img src={iconMyReward} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  My Reward
                </div>

                <div className="ml-20 flex">
                  <div className="text-white text-[15.5px] font-bold">
                    $
                    <FormatterText value={userMintInfo?.userTotalRewardValue} />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <img src={iconVesting} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Vesting
                </div>

                <div className="ml-20 flex">
                  <div className="text-white text-[15.5px] font-bold">
                    {vesting}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex w-[388px]">
                {!isEnd && (
                  <div className="flex-1 mr-5">
                    <Button
                      type="rectangle"
                      height={35}
                      onClick={() => navigate(`/rToken/${rToken}/stake`)}
                    >
                      Mint
                    </Button>
                  </div>
                )}

                <div className="flex-1">
                  <Button
                    disabled={claimDisabled}
                    type="rectangle"
                    height={35}
                    onClick={() => setClaimModalVisible(true)}
                  >
                    Claim
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>

      <ClaimMintRewardModal
        userMintInfo={userMintInfo}
        visible={claimModalVisible}
        onClose={() => {
          setClaimModalVisible(false);
          updateUserActDetail();
        }}
      />
    </div>
  );
};

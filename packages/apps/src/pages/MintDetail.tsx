import {
  CardContainer,
  RTokenIcon,
  TokenIcon,
  Button,
  FormatterText,
} from "@stafihub/react-components";
import {
  getChainIdFromRTokenDisplayName,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import iconDown from "../assets/images/icon_down_white.png";
import iconRewardToken from "../assets/images/icon_mint_reward_token.svg";
import iconMintValue from "../assets/images/icon_mint_value.svg";
import iconMyMint from "../assets/images/icon_my_mint.svg";
import iconMyReward from "../assets/images/icon_my_reward.svg";
import iconVesting from "../assets/images/icon_mint_vesting.svg";
import { useMintProgram } from "../hooks/useMintPrograms";
import { ClaimMintRewardModal } from "../modals/ClaimMintRewardModal";
import { useChainAccount } from "../hooks/useAppSlice";

export const MintDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const { rToken, cycle } = params;
  const [claimModalVisible, setClaimModalVisible] = useState(false);
  const { actDetail, mintedValue, userMintInfo, vesting, updateUserActDetail } =
    useMintProgram(getChainIdFromRTokenDisplayName(rToken), Number(cycle));

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
                Mint {rToken}
              </div>

              <div className="mt-4">
                {actDetail?.tokenRewardInfos.map((rewardInfo, index) => (
                  <div
                    key={index}
                    className="mt-2 text-primary text-[20px] font-bold"
                  >
                    1 {rToken.slice(1)} : {rewardInfo.apy}{" "}
                    {rewardInfo.denom.slice(1).toUpperCase()}
                  </div>
                ))}
              </div>

              <div className="my-4 h-[1px] bg-divider w-[280px]" />

              <div className="flex items-center">
                <img src={iconRewardToken} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Reward Token
                </div>

                <div className="ml-20 flex">
                  {actDetail?.tokenRewardInfos.map((rewardInfo, index) => (
                    <div key={index} className="mr-[10px]">
                      <TokenIcon
                        tokenName={rewardInfo.denom.slice(1).toUpperCase()}
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
                    <FormatterText value={userMintInfo?.nativeTokenAmount} />
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

              <div className="mt-12 flex">
                <div className="w-[184px]">
                  <Button
                    type="rectangle"
                    height={35}
                    onClick={() => navigate(`/rToken/${rToken}/stake`)}
                  >
                    Mint
                  </Button>
                </div>

                <div className="ml-5 w-[184px]">
                  <Button
                    disabled={!stafiHubAccount}
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

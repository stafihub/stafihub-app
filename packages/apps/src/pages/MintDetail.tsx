import {
  CardContainer,
  RTokenIcon,
  TokenIcon,
  Button,
} from "@stafihub/react-components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import iconDown from "../assets/images/icon_down_white.png";
import iconRewardToken from "../assets/images/icon_mint_reward_token.svg";
import iconMintValue from "../assets/images/icon_mint_value.svg";
import iconMyMint from "../assets/images/icon_my_mint.svg";
import iconMyReward from "../assets/images/icon_my_reward.svg";
import { ClaimMintRewardModal } from "../modals/ClaimMintRewardModal";

export const MintDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [claimModalVisible, setClaimModalVisible] = useState(false);

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
              <RTokenIcon rtokenName="rATOM" size={60} />
            </div>

            <div className="ml-[80px]">
              <div className="text-white text-[20px] font-bold">Mint rATOM</div>

              <div className="mt-6 text-primary text-[20px] font-bold">
                1 ETH : 0.001 ETH
              </div>

              <div className="mt-2 text-primary text-[20px] font-bold">
                1 ETH : 2312 FIS
              </div>

              <div className="my-4 h-[1px] bg-divider w-[280px]" />

              <div className="flex items-center">
                <img src={iconRewardToken} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Reward Token
                </div>

                <div className="ml-20 flex">
                  <div className="mr-[10px]">
                    <TokenIcon tokenName="ATOM" size={20} />
                  </div>

                  <div className="mr-[10px]">
                    <TokenIcon tokenName="IRIS" size={20} />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <img src={iconMintValue} className="w-5" alt="icon" />

                <div className="w-[105px] ml-2 text-[15.5px] text-text-gray2">
                  Minted Value
                </div>

                <div className="ml-20 flex">
                  <div className="text-white text-[15.5px] font-bold">
                    $2,334.23
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
                    0(0%)
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
                    $83.23
                  </div>
                </div>
              </div>

              <div className="mt-12 flex">
                <div className="w-[184px]">
                  <Button type="rectangle" height={35}>
                    Mint
                  </Button>
                </div>

                <div className="ml-5 w-[184px]">
                  <Button
                    type="rectangle"
                    height={35}
                    onClick={() => setClaimModalVisible(true)}
                  >
                    Claim
                  </Button>
                </div>
              </div>

              <div className="mt-7 text-text-gray2 text-[14px]">
                rETH reward is calculated every 20 minutes
              </div>
            </div>
          </div>
        </div>
      </CardContainer>

      <ClaimMintRewardModal
        visible={claimModalVisible}
        onClose={() => setClaimModalVisible(false)}
      />
    </div>
  );
};

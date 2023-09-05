import {
  getApiHost,
  getChainDecimals,
  getChainIdFromRTokenDisplayName,
  getDenom,
  getDisplayHubName,
  getRTokenDenom,
  getRTokenDisplayName,
  getStafiHubChainId,
  getTokenDisplayName,
} from "@stafihub/apps-config";
import { formatNumberToFixed, humanToAtomic } from "@stafihub/apps-util";
import {
  Button,
  CustomInput,
  CustomNumberInput,
  FormatterText,
  TokenName,
  TokenIconV2,
} from "@stafihub/react-components";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import iconApy from "../assets/images/icon_apy.svg";
import iconStakeMenu from "../assets/images/icon_stake_menu.svg";
import {
  useChainAccount,
  useIsLoading,
  useLatestBlock,
} from "../hooks/useAppSlice";
import { useApy } from "../hooks/useApy";
import { useMintPrograms } from "../hooks/useMintPrograms";
import { useStakePoolInfo } from "../hooks/useStakePoolInfo";
import { useTokenSupply } from "../hooks/useTokenSupply";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ApyComparisonModal } from "../modals/ApyComparisonModal";
import { MemoNoticeModal } from "../modals/MemoNoticeModal";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { setStakeSidebarProps, stake } from "../redux/reducers/TxSlice";
import { Coin, FormatTokenRewardInfo } from "../types/interface";
import { getHumanAccountBalance } from "../utils/common";
import snackbarUtil from "../utils/snackbarUtils";
import { chains } from "../config";
import {
  STORAGE_KEY_MEMO_NOTICE_MODAL,
  getStorage,
  saveStorage,
} from "../utils/storage";
import { useTokenStakeData } from "../hooks/useTokenStakeData";
import { useDelegateTokenAmount } from "../hooks/useDelegateTokenAmount";
import {
  queryAccountBalances,
  queryRValidatorList,
  queryTokenizeShareRecords,
  sendCosmosClientTx,
  sendTokenizeSharesTx,
  sendTransferTokenizeSharesTx,
} from "@stafihub/apps-wallet";
import _ from "lodash";
import { useStakingLimit } from "../hooks/useStakingLimit";

export const StakeV2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const chainId = getChainIdFromRTokenDisplayName(params.rToken, chains);
  const isLoading = useIsLoading();
  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainAccount = useChainAccount(chainId);
  const apy = useApy(chainId);
  const { totalApy } = useTokenStakeData(getDenom(chainId, chains));
  const supply = useTokenSupply(chainId);
  const { multisigPoolAddress, icaPoolAddress, exchangeRate, leastBond } =
    useStakePoolInfo(getRTokenDenom(chainId, chains));
  const [inputAmount, setInputAmount] = useState("");
  const [stafiHubAddress, setStafiHubAddress] = useState("");
  const [memoNoticeModalVisible, setMemoNoticeModalVisible] = useState(false);
  const [apyComparisonModalVisible, setApyComparisonModalVisible] =
    useState(false);
  const [otherApy, setOtherApy] = useState("--");
  const { height } = useWindowDimensions();
  const latestBlock = useLatestBlock();
  const { actDetails } = useMintPrograms();

  const { delegateTokenBalance, delegationList } =
    useDelegateTokenAmount(chainId);
  // console.log({ delegateTokenBalance });
  useStakingLimit(chainId);

  useEffect(() => {
    const rTokenDenom = getRTokenDenom(chainId, chains);
    const abortController = new AbortController();

    apyComparisonModalVisible &&
      fetch(`${getApiHost()}/stakingElection/api/v1/annualRateList`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
      })
        .then((response) => {
          return response.json();
        })
        .then((resJson) => {
          if (resJson.status === "80000") {
            const annualRateList = resJson.data.annualRateList;
            const matched = annualRateList.find(
              (item: any) => item.rTokenDenom === rTokenDenom
            );
            if (matched) {
              setOtherApy(Number(matched.annualRate) * 100 + "");
            }
          }
        })
        .catch((err: Error) => {
          if (err.name === "AbortError") return;
          throw err;
        });

    return () => {
      abortController.abort();
    };
  }, [chainId]);

  useEffect(() => {
    setInputAmount("");
    setStafiHubAddress("");
  }, [stafiHubAccount?.bech32Address]);

  const mintRewardInfos: FormatTokenRewardInfo[] = useMemo(() => {
    if (!actDetails || !latestBlock) {
      return [];
    }
    return (
      actDetails.find(
        (item) =>
          item.rTokenDisplayName === params.rToken && item.end >= latestBlock
      )?.tokenRewardInfos || []
    );
  }, [actDetails, params.rToken, latestBlock]);

  const mintRewardArr = useMemo(() => {
    if (!inputAmount || isNaN(Number(inputAmount))) {
      return [];
    }
    return mintRewardInfos
      .map((rewardInfo) => {
        return {
          denom: rewardInfo.denom,
          rewardAmount: Math.min(
            Number(inputAmount) * Number(rewardInfo.apy),
            Number(rewardInfo.leftRewardAmount)
          ),
          calcApr: rewardInfo.calcApr,
        };
      })
      .filter((item) => Number(item.rewardAmount) > 0);
  }, [mintRewardInfos, inputAmount]);

  const buttonDisabled = useMemo(() => {
    return Boolean(
      (!multisigPoolAddress && !icaPoolAddress) ||
        !stafiHubAddress ||
        !inputAmount
    );
  }, [multisigPoolAddress, icaPoolAddress, stafiHubAddress, inputAmount]);

  const totalStakedAmount = useMemo(() => {
    if (isNaN(Number(exchangeRate)) || isNaN(Number(supply))) {
      return "--";
    }
    return Number(supply) * Number(exchangeRate);
  }, [exchangeRate, supply]);

  const transferrableAmount = useMemo(() => {
    if (!chainAccount || !chains[chainId]) {
      return "--";
    }
    const reserveAmount = chains[chainId].stakeReserveAmount || 0.05;
    return Math.max(
      0,
      Number(
        getHumanAccountBalance(
          chainAccount.allBalances,
          getDenom(chainId, chains)
        )
      ) - reserveAmount
    );
  }, [chainAccount, chainId]);

  const willGetAmount = useMemo(() => {
    if (
      !inputAmount ||
      isNaN(Number(inputAmount)) ||
      isNaN(Number(exchangeRate))
    ) {
      return "--";
    }
    return Number(inputAmount) / Number(exchangeRate);
  }, [inputAmount, exchangeRate]);

  const delegate = async (delegateAmount: string) => {
    const poolAddress = icaPoolAddress || multisigPoolAddress;
    const userAddress = chainAccount?.bech32Address;

    if (!userAddress || !poolAddress) {
      return;
    }

    console.log({ poolAddress });
    const queryRValidatorListResponse = await queryRValidatorList(
      chains[getStafiHubChainId()],
      poolAddress,
      "uratom"
    );

    const sortDelegationList = _.cloneDeep(delegationList).sort(
      (item1, item2) => {
        return Number(item2.balance?.amount) - Number(item1.balance?.amount);
      }
    );

    if (
      !queryRValidatorListResponse?.rValidatorList ||
      queryRValidatorListResponse.rValidatorList.length === 0
    ) {
      return;
    }

    const targetValidatorAddress =
      queryRValidatorListResponse.rValidatorList[0];

    let tokenizeShareCount = 0;
    const prepareMessages: { typeUrl: any; value: any }[] = [];
    let chainDelegateAmount = humanToAtomic(
      delegateAmount,
      getChainDecimals(chainId, chains)
    );

    for (let i = 0; i < sortDelegationList.length; i++) {
      if (Number(chainDelegateAmount) <= 0) {
        break;
      }
      const currentDelegation = sortDelegationList[i];
      let currentAmount = "0";
      if (
        Number(currentDelegation.balance?.amount) >= Number(chainDelegateAmount)
      ) {
        currentAmount = chainDelegateAmount;
        chainDelegateAmount = "0";
      } else {
        currentAmount = currentDelegation.balance?.amount || "0";
        chainDelegateAmount =
          Number(chainDelegateAmount) - Number(currentAmount) + "";
      }

      if (
        queryRValidatorListResponse?.rValidatorList?.indexOf(
          currentDelegation.delegation?.validatorAddress || ""
        ) < 0
      ) {
        prepareMessages.push({
          typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
          value: {
            delegatorAddress: userAddress,
            validatorSrcAddress:
              currentDelegation.delegation?.validatorAddress || "",
            validatorDstAddress: targetValidatorAddress,
            amount: {
              denom: currentDelegation.balance?.denom,
              amount: currentAmount,
            },
          },
        });
      }

      tokenizeShareCount++;
      prepareMessages.push({
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: {
          delegatorAddress: userAddress,
          validatorAddress: targetValidatorAddress,
          tokenizedShareOwner: userAddress,
          amount: {
            denom: currentDelegation.balance?.denom,
            amount: currentAmount,
          },
        },
      });
    }
    console.log({ messages: prepareMessages });

    const prepareTxResponse = await sendCosmosClientTx(
      chains[chainId],
      userAddress,
      prepareMessages
    );
    console.log({ prepareTxResponse });

    // const txResponse = await sendTokenizeSharesTx(
    //   chains[chainId],
    //   chainAccount?.bech32Address || "",
    //   "cosmosvaloper1pcrsgnvy5z8uqe9sy6qwfanvd9fnc4gely74r6",
    //   "uatom",
    //   "3500000"
    // );
    // console.log({ txResponse });

    const userBalances = await queryAccountBalances(
      chains[chainId],
      userAddress
    );
    const result = await queryTokenizeShareRecords(
      chains[chainId],
      chainAccount?.bech32Address || ""
    );
    const transferMessages: { typeUrl: any; value: any }[] = [];
    const balanceTransferAmounts: Coin[] = [];
    if (result?.records && result.records.length >= tokenizeShareCount) {
      for (
        let recordIndex = result.records.length - 1;
        recordIndex > result.records.length - 1 - tokenizeShareCount;
        recordIndex--
      ) {
        const tokenizeSharesRecord = result.records[recordIndex];
        const tokenizeShareDenom = `${
          tokenizeSharesRecord.validator
        }/${tokenizeSharesRecord.id.toString()}`;
        const tokenizeShareBalance = userBalances.find((item) => {
          return item.denom === tokenizeShareDenom;
        });
        if (!tokenizeShareBalance) {
          throw new Error("TokenizeShare Balance not found");
        }
        // const transferTxResponse = await sendTransferTokenizeSharesTx(
        //   chains[chainId],
        //   chainAccount?.bech32Address || "",
        //   poolAddress,
        //   tokenizeSharesRecord.id
        // );
        transferMessages.push({
          typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
          value: {
            sender: userAddress,
            newOwner: poolAddress,
            tokenizeShareRecordId: tokenizeSharesRecord.id,
          },
        });
        balanceTransferAmounts.push({
          denom: tokenizeShareBalance.denom,
          amount: tokenizeShareBalance.amount,
        });
      }

      transferMessages.push({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: userAddress,
          toAddress: poolAddress,
          amount: balanceTransferAmounts,
        },
      });

      const transferTxResponse = await sendCosmosClientTx(
        chains[chainId],
        userAddress,
        transferMessages
      );
      console.log({ transferTxResponse });
    } else {
      throw new Error("TokenizeShares records not match");
    }
  };

  const clickStake = async () => {
    if ((!multisigPoolAddress && !icaPoolAddress) || !stafiHubAddress) {
      return;
    }

    // if (stafiHubAccount?.isNanoLedger) {
    //   snackbarUtil.error(
    //     "Ledger is not supported, please use the extension wallet."
    //   );
    //   return;
    // }

    const poolAddress = icaPoolAddress || multisigPoolAddress;

    if (true) {
      delegate("135");
      return;
    }

    dispatch(
      stake(
        chainId,
        inputAmount,
        stafiHubAddress,
        poolAddress,
        () => {},
        (success) => {
          if (success) {
            snackbarUtil.success("Stake succeed");
            setInputAmount("");
            setStafiHubAddress("");
            setTimeout(() => {
              dispatch(
                setStakeSidebarProps({
                  visible: false,
                })
              );
              navigate(`/rToken/${params.rToken}/dashboard`);
            }, 3000);
          }
        }
      )
    );
  };

  const setConnectedStafiHubAddress = () => {
    if (isLoading) {
      return;
    }
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    setStafiHubAddress(stafiHubAccount.bech32Address);
  };

  return (
    <div className="w-[490px] pb-[85px] flex flex-col items-stretch">
      <div className="flex items-center self-center">
        <img src={iconStakeMenu} alt="menu" className="w-6 h-6" />
        <div className="ml-1 text-white font-bold text-[30px]">
          Stake {getTokenDisplayName(chainId, chains)}
        </div>
      </div>

      <div className="self-center mt-[12px] text-text-gray4 text-[14px]">
        <FormatterText value={totalStakedAmount} />{" "}
        {getTokenDisplayName(chainId, chains)} is currently staked
      </div>

      <div className="mt-[14px] h-[0.5px] bg-divider" />

      <div className="mt-10 flex flex-col">
        <div className="bg-white rounded-[3.5px] h-[46px] flex items-center justify-between">
          <div className="ml-5 flex-1">
            <CustomNumberInput
              light
              fontSize={16}
              disabled={isLoading}
              placeholder="STAKE AMOUNT"
              value={inputAmount}
              handleValueChange={setInputAmount}
            />
          </div>

          <div className="flex items-center">
            <div
              className={classNames(
                isNaN(Number(transferrableAmount)) ||
                  Number(transferrableAmount) === Number(inputAmount)
                  ? "text-[#8f8f8f]"
                  : "text-primary",
                "text-[16px]",
                isLoading ? "cursor-default" : "cursor-pointer"
              )}
              onClick={() => {
                if (isLoading) {
                  return;
                }
                if (
                  !isNaN(Number(transferrableAmount)) &&
                  Number(transferrableAmount) > 0
                ) {
                  setInputAmount(
                    formatNumberToFixed(Number(transferrableAmount))
                  );
                }
              }}
            >
              Max
            </div>

            <div className="mx-[5px]">
              {params.rToken && (
                <TokenIconV2
                  stafiHubChainConfig={chains[getStafiHubChainId()]}
                  denom={getDenom(chainId, chains)}
                  size={36}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mr-[60px] mt-[10px] text-white text-[12px]">
          Transferable: <FormatterText value={transferrableAmount} />
        </div>
      </div>

      <div className="mt-[50px] bg-white rounded-[3.5px] h-[46px] flex items-center justify-between">
        <div className="ml-5 flex-1">
          <CustomInput
            light
            disabled={isLoading}
            fontSize={16}
            placeholder="RECEIVING ADDRESS"
            value={stafiHubAddress}
            handleValueChange={setStafiHubAddress}
          />
        </div>

        <div
          className={classNames(
            stafiHubAddress === stafiHubAccount?.bech32Address
              ? "text-[#8f8f8f]"
              : "text-primary",
            "mx-[10px] text-[12px] w-[63px] text-center",
            isLoading ? "cursor-default" : "cursor-pointer"
          )}
          onClick={setConnectedStafiHubAddress}
        >
          Connected Address
        </div>
      </div>

      <div className="mt-[10px] text-text-gray8 text-[12px]">
        Note: Please ensure you have input the correct address. Failure to do so
        may cause you to lose your tokens.
      </div>

      <div className="self-center mt-14 flex items-center">
        <img src={iconApy} alt="apy icon" className="w-6 h-6" />

        <div
          className="flex items-center"
          // onClick={() => setApyComparisonModalVisible(true)}
        >
          <div className="ml-1 text-white font-bold text-[20px]">APR</div>

          {/* <img
            src={tooltipIcon}
            width="8px"
            height="8px"
            alt="tooltip"
            style={{ alignSelf: "flex-start", marginLeft: "6px" }}
          /> */}
        </div>
      </div>

      <div className="self-center mt-6 font-bold text-primary text-[90px]">
        <FormatterText value={totalApy} decimals={2} />%
      </div>

      <div className="mt-10 h-[0.5px] bg-divider" />

      <div
        className={classNames(
          mintRewardInfos.length ? "" : "hidden",
          "self-center"
        )}
      >
        <div className="self-center mt-5 flex items-end">
          <div>
            <div className="flex items-end">
              <div className="font-bold text-[14px] text-text-gray8">
                Staking APR
              </div>

              <div className="ml-1 mb-[1.5px] text-text-gray8 text-[12px] scale-[0.67] origin-bottom-left">
                +{getTokenDisplayName(chainId, chains)}
              </div>
            </div>

            <div className="mr-2 mt-[2px] font-bold text-text-gray8 text-[24px]">
              <FormatterText value={apy} decimals={2} />%
            </div>
          </div>

          {mintRewardInfos.map((rewardInfo) => (
            <div key={rewardInfo.denom} className="flex items-end">
              <div className=" ml-[2px] mr-[20px] font-bold text-white text-[30px]">
                +
              </div>

              <div className="">
                <div className="flex items-end">
                  <div className="font-bold text-[14px] text-text-gray8">
                    Mint APR
                  </div>

                  <div className="ml-1 mb-[1.5px] text-text-gray8 text-[12px] scale-[0.67] origin-bottom-left">
                    +
                    <TokenName
                      stafiHubChainConfig={chains[getStafiHubChainId()]}
                      denom={rewardInfo.denom}
                    />
                  </div>
                </div>

                <div className="mt-[2px] font-bold text-text-gray8 text-[24px]">
                  {formatNumberToFixed(rewardInfo.calcApr, 2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={classNames(
          height < 830
            ? "absolute w-[490px] bottom-0 bg-[#000002] shadow-[0_-5px_20px_15px_rgba(0,0,0,1)]"
            : "mt-14"
        )}
      >
        <Button
          bgPrimary
          type="rectangle"
          height={56}
          onClick={() => {
            if (!stafiHubAccount) {
              dispatch(connectKeplr(getStafiHubChainId()));
              return;
            }
            if (!chainAccount) {
              dispatch(connectKeplr(chainId));
              return;
            }
            if (Number(inputAmount) < Number(leastBond)) {
              snackbarUtil.warning(
                `The stake amount is less than the minimum stake size: ${leastBond} ${getTokenDisplayName(
                  chainId,
                  chains
                )}`
              );
              return;
            }
            if (getStorage(STORAGE_KEY_MEMO_NOTICE_MODAL)) {
              clickStake();
            } else {
              setMemoNoticeModalVisible(true);
            }
          }}
          disabled={
            stafiHubAccount &&
            chainAccount &&
            (buttonDisabled ||
              Number(inputAmount) > Number(transferrableAmount))
          }
          loading={isLoading}
        >
          {isLoading ? (
            <div>
              You will get <FormatterText value={willGetAmount} />{" "}
              {getRTokenDisplayName(chainId, chains)}
            </div>
          ) : !stafiHubAccount ? (
            "Connect StaFi-Hub Wallet"
          ) : !chainAccount ? (
            `Connect ${getDisplayHubName(chainId, chains)} Wallet`
          ) : Number(inputAmount) > 0 &&
            Number(inputAmount) > Number(transferrableAmount) ? (
            "Insufficient Balance"
          ) : (
            <div>
              You will get <FormatterText value={willGetAmount} />{" "}
              {getRTokenDisplayName(chainId, chains)}
            </div>
          )}
        </Button>
      </div>

      <MemoNoticeModal
        visible={memoNoticeModalVisible}
        onClose={() => setMemoNoticeModalVisible(false)}
        onConfirm={() => {
          saveStorage(STORAGE_KEY_MEMO_NOTICE_MODAL, "1");
          setMemoNoticeModalVisible(false);
          clickStake();
        }}
      />

      <ApyComparisonModal
        visible={apyComparisonModalVisible}
        onClose={() => setApyComparisonModalVisible(false)}
        tokenName={getTokenDisplayName(chainId, chains)}
        stafiHubApy={totalApy || ""}
        otherApy={otherApy}
      />
    </div>
  );
};

import { Box, IconButton, Stack } from "@mui/material";
import { getStafiHubChainId } from "@stafihub/apps-config";
import { formatNumberToFixed } from "@stafihub/apps-util";
import { Button, FormatterText } from "@stafihub/react-components";
import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import arrowDownIcon from "../assets/images/icon_arrow_down.svg";
import settingIcon from "../assets/images/icon_setting.svg";
import { DataCell } from "../components/DataCell";
import { SelectTokenInput } from "../components/SelectTokenInput";
import { SelectTokenList } from "../components/SelectTokenList";
import { SlippageSetting } from "../components/SlippageSetting";
import {
  useChainAccount,
  useIsLoading,
  useSlippage,
} from "../hooks/useAppSlice";
import { useFeeStationPools } from "../hooks/useFeeStationPool";
import { connectKeplr } from "../redux/reducers/AppSlice";
import { feeStationSwap } from "../redux/reducers/TxSlice";
import { FeeStationPool } from "../types/interface";
import snackbarUtil from "../utils/snackbarUtils";

const enum DisplayStatus {
  Main,
  SelectInput,
  SelectOutput,
  Setting,
}

export const FeeStation = (props: {}) => {
  const dispatch = useDispatch();
  const slippage = useSlippage();
  const isLoading = useIsLoading();

  const { poolList, swapMinLimit, swapMaxLimit, loadingPools, payerAddress } =
    useFeeStationPools();

  const [selectedChainName, setSelectedChainName] = useState("");

  const selectedPool: FeeStationPool | undefined = useMemo(() => {
    if (!selectedChainName || !poolList) {
      return undefined;
    }
    return poolList.find((pool) => pool.chainName === selectedChainName);
  }, [poolList, selectedChainName]);

  const stafiHubAccount = useChainAccount(getStafiHubChainId());
  const chainAccount = useChainAccount(selectedPool?.chainId);

  const [displayStatus, setDisplayStatus] = useState<DisplayStatus>(
    DisplayStatus.Main
  );

  const [amounts, setAmounts] = useState<[string, string]>(["", ""]);

  const [inputAmount, outputAmount] = useMemo(() => {
    return amounts;
  }, [amounts]);

  const transferrableBalance = useMemo(() => {
    return selectedPool?.formatBalance || "--";
  }, [selectedPool]);

  const [buttonDisabled, buttonText]: [boolean, string] = useMemo(() => {
    if (selectedPool && !stafiHubAccount) {
      return [false, `Connect StaFi-Hub Wallet`];
    }
    if (selectedPool && !chainAccount) {
      return [false, `Connect ${selectedPool.chainName}`];
    }
    if (!selectedPool || !inputAmount || !outputAmount) {
      return [true, "Swap"];
    }
    if (
      Number(inputAmount) > Number(transferrableBalance) ||
      isNaN(Number(transferrableBalance))
    ) {
      return [true, "Insufficient Balance"];
    }
    return [false, "Swap"];
  }, [
    chainAccount,
    stafiHubAccount,
    selectedPool,
    inputAmount,
    outputAmount,
    transferrableBalance,
  ]);

  const minReceive = useMemo(() => {
    if (!outputAmount || isNaN(Number(outputAmount))) {
      return "--";
    }
    return formatNumberToFixed(
      ((100 - Number(slippage)) * Number(outputAmount)) / 100,
      6
    );
  }, [slippage, outputAmount]);

  const handleAmountChange = useCallback(
    (fromInput: boolean, value: string) => {
      if (!selectedPool) {
        return;
      }
      if (!value) {
        setAmounts(["", ""]);
      } else if (fromInput) {
        setAmounts([
          value,
          formatNumberToFixed(
            Number(value) * Number(selectedPool.formatSwapRate)
          ),
        ]);
      } else {
        setAmounts([
          formatNumberToFixed(
            Number(value) / Number(selectedPool.formatSwapRate)
          ),
          value,
        ]);
      }
    },
    [selectedPool]
  );

  const handleClickButton = useCallback(() => {
    if (!stafiHubAccount) {
      dispatch(connectKeplr(getStafiHubChainId()));
      return;
    }
    if (!chainAccount) {
      dispatch(connectKeplr(selectedPool?.chainId));
      return;
    }
    if (!selectedPool) {
      return;
    }

    if (
      Number(outputAmount) < Number(swapMinLimit) ||
      Number(outputAmount) > Number(swapMaxLimit)
    ) {
      snackbarUtil.warning(
        `Output amount must be between ${swapMinLimit} - ${swapMaxLimit}`
      );
      return;
    }

    dispatch(
      feeStationSwap(
        inputAmount,
        outputAmount,
        minReceive,
        selectedPool,
        payerAddress,
        (success) => {
          if (success) {
            setAmounts(["", ""]);
          }
        }
      )
    );
  }, [
    dispatch,
    stafiHubAccount,
    chainAccount,
    selectedPool,
    inputAmount,
    minReceive,
    outputAmount,
    swapMinLimit,
    swapMaxLimit,
    payerAddress,
  ]);

  const renderContent = useCallback(() => {
    if (
      displayStatus === DisplayStatus.SelectInput ||
      displayStatus === DisplayStatus.SelectOutput
    ) {
      return (
        <Box padding="15px 20px 0">
          <SelectTokenList
            loading={loadingPools}
            list={poolList}
            selectedToken={selectedPool}
            onChange={(pool) => {
              setSelectedChainName(pool.chainName);
              setDisplayStatus(DisplayStatus.Main);
            }}
            onClose={() => setDisplayStatus(DisplayStatus.Main)}
          />
        </Box>
      );
    }

    if (displayStatus === DisplayStatus.Setting) {
      return (
        <Box padding="15px 20px 0">
          <SlippageSetting
            onClose={() => setDisplayStatus(DisplayStatus.Main)}
          />
        </Box>
      );
    }

    return (
      <Box display="flex" flexDirection="column" padding="15px 20px 0">
        <div className="self-stretch flex items-center justify-between">
          <div className="text-white font-bold text-[18px]">Swap</div>

          <img
            src={settingIcon}
            className="cursor-pointer w-5 h-6"
            alt="setting"
            onClick={() => {
              setDisplayStatus(DisplayStatus.Setting);
            }}
          />
        </div>

        <Box mt="24px" alignSelf="stretch">
          <SelectTokenInput
            title="From"
            showMaxButton
            disabled={!selectedPool || isLoading}
            value={inputAmount}
            handleValueChange={(v) => handleAmountChange(true, v)}
            selectable={!isLoading}
            selectedToken={selectedPool}
            triggerSelect={() => setDisplayStatus(DisplayStatus.SelectInput)}
            onClickMax={() => {
              if (
                !isNaN(Number(transferrableBalance)) &&
                Number(transferrableBalance) > 0
              ) {
                handleAmountChange(true, transferrableBalance);
              }
            }}
          />
        </Box>

        <div className="mt-1 text-text-gray4 text-[12px] scale-[0.8] origin-center self-end">
          Balance: <FormatterText value={transferrableBalance} />
        </div>

        <Box mt="-5px" alignSelf="center">
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(87,87,87,0.2)",
              },
            }}
          >
            <img src={arrowDownIcon} width="15px" height="15px" alt="down" />
          </IconButton>
        </Box>

        <Box mt="6px" alignSelf="stretch">
          <SelectTokenInput
            disabled={!selectedPool || isLoading}
            title="To"
            showMaxButton={false}
            value={outputAmount}
            handleValueChange={(v) => handleAmountChange(false, v)}
            selectable={false}
            triggerSelect={() => setDisplayStatus(DisplayStatus.SelectOutput)}
            content="FIS"
          />
        </Box>

        <Box mt="20px" alignSelf="center">
          <div
            className={classNames("mt-1 text-text-gray4 text-[12px] self-end", {
              invisible: !selectedPool,
            })}
          >
            1 {selectedPool?.symbol.slice(1).toUpperCase()} ={" "}
            <FormatterText value={selectedPool?.formatSwapRate} /> FIS
          </div>
        </Box>

        <Box
          mt="29px"
          alignSelf="stretch"
          display="flex"
          flexDirection="column"
        >
          <Button
            loading={isLoading}
            disabled={buttonDisabled}
            onClick={handleClickButton}
            type="rectangle"
          >
            {buttonText}
          </Button>
        </Box>

        <Box
          mt="19px"
          height="1px"
          sx={{
            backgroundColor: "#383E44",
            marginLeft: "-20px",
            marginRight: "-20px",
          }}
        />

        <DataCell
          title="Slippage tolerance"
          content={`${slippage}%`}
          mt="10px"
        />

        <DataCell
          title="Minimum receive"
          content={`${minReceive} FIS`}
          mt="4px"
        />
      </Box>
    );
  }, [
    displayStatus,
    buttonDisabled,
    buttonText,
    inputAmount,
    outputAmount,
    selectedPool,
    poolList,
    transferrableBalance,
    handleClickButton,
    handleAmountChange,
    minReceive,
    slippage,
    isLoading,
    loadingPools,
  ]);

  return (
    <Stack direction="column" alignItems="center">
      <div className="mt-2 font-bold text-white text-[30px]">Fee Station</div>

      <div className="mt-4 text-[14px] text-text-gray4 w-[430px] text-center">
        If you have no native FIS to pay for the fee, you can swap native FIS
        using native ATOM and other Cosmos Eco tokens.
      </div>

      <div className="mt-8 h-[444px] w-[340px] overflow-auto bg-black-700 rounded-lg border-solid border-[1px] border-[#31373e]">
        {renderContent()}
      </div>

      <div className="mt-8 text-text-gray5 text-[14px]">
        Note: You can only swap up to {swapMaxLimit} FIS every transaction.
      </div>
    </Stack>
  );
};

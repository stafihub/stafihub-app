import { Box, Stack, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSlippage } from "../hooks/useAppSlice";
import { setSlippage } from "../redux/reducers/AppSlice";
import { BackIcon } from "./icons/BackIcon";
import { SlippageInput } from "./SlippageInput";

interface SlippageSettingProps {
  onClose: () => void;
}

export const SlippageSetting = (props: SlippageSettingProps) => {
  const dispatch = useDispatch();
  const slippage = useSlippage();
  const [inputSlippage, setInputSlippage] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputSlippage(value);
    if (value === "" || value === null || value === undefined) {
      return;
    }
    if (Number(value) < 0.1 || Number(value) > 99) {
      return;
    }
    dispatch(setSlippage(value));
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Stack
          justifyContent="center"
          sx={{
            cursor: "pointer",
          }}
          onClick={props.onClose}
        >
          <BackIcon color="#ffffff" />
        </Stack>

        <div className="ml-[6px] text-[18px] font-bold text-white">Setting</div>
      </Stack>

      <div className="mt-[20px] text-[12px] text-white">Slippage Tolerance</div>

      <Stack direction="row" mt="15px" alignItems="center">
        <div
          className={classNames(
            "mr-4 w-[60px] h-[27px] flex items-center justify-center cursor-pointer rounded-md",
            Number(slippage) === 0.1 ? "bg-primary" : "bg-[#40464c]"
          )}
          onClick={() => {
            dispatch(setSlippage("0.1"));
            setInputSlippage("");
          }}
        >
          <div className="text-white text-[14px]">0.1%</div>
        </div>

        <div
          className={classNames(
            "mr-4 w-[60px] h-[27px] flex items-center justify-center cursor-pointer rounded-md",
            Number(slippage) === 0.5 ? "bg-primary" : "bg-[#40464c]"
          )}
          onClick={() => {
            dispatch(setSlippage("0.5"));
            setInputSlippage("");
          }}
        >
          <div className="text-white text-[14px]">0.5%</div>
        </div>

        <div
          className={classNames(
            "mr-4 w-[60px] h-[27px] flex items-center justify-center cursor-pointer rounded-md",
            Number(slippage) === 1 ? "bg-primary" : "bg-[#40464c]"
          )}
          onClick={() => {
            dispatch(setSlippage("1"));
            setInputSlippage("");
          }}
        >
          <div className="text-white text-[14px]">1%</div>
        </div>

        <Stack
          alignItems="center"
          justifyContent="center"
          width="60px"
          height="27px"
          mr="5px"
          pl="10px"
          sx={{
            backgroundColor: "#40464c",
            borderRadius: "5px",
          }}
        >
          <SlippageInput
            placeholder={slippage}
            value={inputSlippage}
            handleValueChange={handleInputChange}
          />
        </Stack>

        <div className="text-white text-[14px]">%</div>
      </Stack>
    </Box>
  );
};

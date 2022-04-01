import { Box, Stack } from "@mui/material";
import { getTokenDisplayName } from "@stafihub/apps-config";
import { CustomNumberInput } from "@stafihub/react-components";
import { useMemo } from "react";
import downIcon from "../assets/images/icon_down_white.png";
import { FeeStationPool } from "../types/interface";

interface SelectTokenInputProps {
  title: string;
  showMaxButton: boolean;
  value: string;
  handleValueChange: (value: string) => void;
  disabled?: boolean;
  selectable?: boolean;
  selectedToken?: FeeStationPool | undefined;
  content?: string;
  triggerSelect?: () => void;
  onClickMax?: () => void;
}

export const SelectTokenInput = (props: SelectTokenInputProps) => {
  const { title, showMaxButton } = props;

  const displayTokenName = useMemo(() => {
    if (!props.selectedToken) {
      return "";
    }
    return getTokenDisplayName(props.selectedToken.chainId);
  }, [props.selectedToken]);

  return (
    <Box
      height="68px"
      borderRadius="2px"
      border="1px solid #979797"
      padding="7px 8px 0"
    >
      <div className="text-[14px] text-white">{title}</div>

      <Stack
        mt="4px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width="150px">
          <CustomNumberInput
            disabled={props.disabled}
            value={props.value}
            placeholder="0.0"
            handleValueChange={props.handleValueChange}
          />
        </Box>

        <Stack direction="row" alignItems="center">
          {showMaxButton && props.selectedToken && (
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={props.onClickMax}
            >
              <div className="text-primary text-[12px]">Max</div>
            </Box>
          )}

          <Stack
            ml="10px"
            direction="row"
            alignItems="center"
            sx={{
              cursor: props.selectable ? "pointer" : "",
            }}
            onClick={() => {
              props.selectable && props.triggerSelect && props.triggerSelect();
            }}
          >
            {props.selectedToken ? (
              <div className="text-white text-[18px] uppercase">
                {displayTokenName}
              </div>
            ) : props.content ? (
              <div className="text-white text-[18px]">{props.content}</div>
            ) : (
              <div className="text-black-900 font-bold text-[12px] bg-secondary rounded-sm py-1 px-2">
                Select a Token
              </div>
            )}

            {props.selectable && (
              <Box
                style={{
                  alignSelf: "flex-end",
                  marginBottom: "7px",
                  marginLeft: "4px",
                }}
              >
                <img src={downIcon} width="7px" height="4px" alt="down" />
              </Box>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

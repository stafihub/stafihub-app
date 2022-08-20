import { Box, Stack } from "@mui/material";
import { getDenom, getStafiHubChainId } from "@stafihub/apps-config";
import {
  CustomLoading,
  FormatterText,
  TokenIconV2,
} from "@stafihub/react-components";
import { chains } from "../config";
import { FeeStationPool } from "../types/interface";
import { BackIcon } from "./icons/BackIcon";

interface SelectTokenListProps {
  loading: boolean;
  list: FeeStationPool[];
  selectedToken: FeeStationPool | undefined;
  onChange: (token: FeeStationPool) => void;
  onClose: () => void;
}

export const SelectTokenList = (props: SelectTokenListProps) => {
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

        <div className="ml-[6px] text-[18px] font-bold text-white">
          Select a Token
        </div>
      </Stack>

      <Box
        mt="10px"
        maxHeight="400px"
        sx={{
          overflow: "auto",
        }}
      >
        {props.loading && (
          <div className="flex flex-col items-center mt-10">
            <CustomLoading color="#FF7FA7" size={40} />
          </div>
        )}

        {props.list &&
          props.list.map((item, index) => {
            return (
              <Stack
                key={index}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding="15px"
                sx={{
                  cursor: "pointer",
                  borderBottom: "1px solid #383e44",
                  "& :last-child": {
                    borderBottom: "none",
                  },
                  // ":hover": {
                  //   backgroundColor: "#383e44a0",
                  // },
                  // backgroundColor:
                  //   props.selectedToken &&
                  //   props.selectedToken.name === item.name
                  //     ? "#383e44a0"
                  //     : "transparent",
                  opacity:
                    props.selectedToken &&
                    props.selectedToken.chainName === item.chainName
                      ? 0.5
                      : 1,
                }}
                onClick={() => {
                  props.onChange && props.onChange(item);
                }}
              >
                <Stack direction="row" alignItems="center">
                  <Box mr="10px">
                    {/* <img
                      src={item.icon}
                      alt="icon"
                      style={{
                        objectFit: "fill",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid #eeeeee",
                      }}
                    /> */}

                    <TokenIconV2
                      stafiHubChainConfig={chains[getStafiHubChainId()]}
                      denom={getDenom(item.chainId, chains)}
                      size={36}
                      withBorder
                    />
                  </Box>

                  <div className="text-[16px] text-white uppercase">
                    {item.symbol?.slice(1)}
                  </div>
                </Stack>

                <div className="text-[16px] text-white font-bold">
                  <FormatterText value={item.formatBalance} />
                </div>
              </Stack>
            );
          })}
      </Box>
    </Box>
  );
};

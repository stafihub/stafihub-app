import { Box, Stack } from "@mui/material";
import { FeeStationPool } from "@stafihub/types";
import { BackIcon } from "./icons/BackIcon";

interface SelectTokenListProps {
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
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{
                        objectFit: "fill",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid #eeeeee",
                      }}
                    />
                  </Box>

                  <div className="text-[16px] text-white uppercase">
                    {item.symbol?.slice(1)}
                  </div>
                </Stack>

                <div className="text-[16px] text-white font-bold">
                  {item.formatBalance}
                </div>
              </Stack>
            );
          })}
      </Box>
    </Box>
  );
};

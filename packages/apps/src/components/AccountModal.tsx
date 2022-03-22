import { Box, Modal } from "@mui/material";
import { chains, getStafiHubChainId } from "@stafihub/apps-config";
import { Button } from "@stafihub/react-components";
import * as _ from "lodash";
import { useMemo } from "react";
import { useAccounts } from "../hooks/useAppSlice";
import { AccountItem } from "./AccountItem";

interface UnbondModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AccountModal = (props: UnbondModalProps) => {
  const accounts = useAccounts();
  // const [isFork] = useIsFork();

  const { stafiHubChain, restChainsArr } = useMemo(() => {
    const stafiHubChain = chains[getStafiHubChainId()];
    const restChainsArr = _.values(_.omit(chains, [getStafiHubChainId()]));
    return { stafiHubChain, restChainsArr };
  }, []);

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box
        pt="48px"
        pl="40px"
        pr="30px"
        pb="30px"
        display="flex"
        flexDirection="column"
        border={0}
        sx={{
          backgroundColor: "#151515",
          width: "680px",
          borderRadius: "20px",
          margin: "auto",
          marginTop: "120px",
          outline: "none",
        }}
      >
        <div className="mb-2 text-white font-bold text-[30px]">
          Wallet connected
        </div>

        <div className="h-96 max-h-96 overflow-auto">
          <AccountItem
            chain={stafiHubChain}
            chainAccount={accounts[getStafiHubChainId()]}
          />

          {restChainsArr.map((chainItem) => (
            <AccountItem
              key={chainItem.chainId}
              chain={chainItem}
              chainAccount={accounts[chainItem.chainId]}
            />
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <Button onClick={props.onClose}>Confirm</Button>
        </div>
      </Box>
    </Modal>
  );
};

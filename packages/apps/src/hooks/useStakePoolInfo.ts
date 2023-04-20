import { queryStakePoolInfo } from "@stafihub/apps-wallet";
import { useEffect, useState } from "react";
import { atomicToHuman } from "@stafihub/apps-util";
import {
  getChainDecimals,
  getChainIdFromDenom,
  getChainIdFromRTokenDenom,
  getStafiHubChainId,
} from "@stafihub/apps-config";
import { chains } from "../config";

export function useStakePoolInfo(denom: string) {
  const [multisigPoolAddress, setMultisigPoolAddress] = useState("--");
  const [icaPoolAddress, setIcaPoolAddress] = useState("--");
  const [exchangeRate, setExchangeRate] = useState("--");
  const [originExchangeRate, setOriginExchangeRate] = useState("--");
  const [leastBond, setLeastBond] = useState("--");
  const [eraHours, setEraHours] = useState("--");

  useEffect(() => {
    (async () => {
      try {
        const result = await queryStakePoolInfo(
          chains[getStafiHubChainId()],
          denom
        );
        if (result.exchangeRate) {
          setExchangeRate(atomicToHuman(result.exchangeRate, 6, 6));
          setOriginExchangeRate(atomicToHuman(result.exchangeRate));
        }
        if (result.leastBond) {
          setLeastBond(
            atomicToHuman(
              result.leastBond,
              getChainDecimals(getChainIdFromRTokenDenom(denom, chains), chains)
            )
          );
        }
        if (result.eraHours) {
          setEraHours(result.eraHours);
        }
        setMultisigPoolAddress(result.multisigPoolAddress);
        setIcaPoolAddress(result.icaPoolAddress);
      } catch {}
    })();
  }, [denom]);

  return {
    multisigPoolAddress,
    icaPoolAddress,
    exchangeRate,
    originExchangeRate,
    leastBond,
    eraHours,
  };
}

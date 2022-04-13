import { useEffect, useState } from "react";
import { MintProgramsData } from "../types/interface";

export function useMintPrograms() {
  const [mintPrograms, setMintPrograms] = useState<MintProgramsData[]>([]);

  useEffect(() => {
    setMintPrograms([
      {
        portalOn: "StaFi",
        derivativeTokenName: "rETH",
        apyList: [
          {
            ratio: "1000",
            unit: "FIS",
          },
          {
            ratio: "0.0001",
            unit: "ETH",
          },
        ],
        rewardList: [
          {
            amount: "1000",
            unit: "FIS",
          },
          {
            amount: "2030",
            unit: "ETH",
          },
        ],
        mintedValue: "282233122",
        duration: "30",
      },
    ]);
  }, []);

  return mintPrograms;
}

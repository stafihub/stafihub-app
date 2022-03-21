import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useChainEra(chainId: string | undefined) {
  const era = useSelector((state: RootState) => {
    if (!chainId) {
      return 0;
    }
    return state.chain.chainEras[chainId];
  });

  return era;
}

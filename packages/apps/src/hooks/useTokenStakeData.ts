import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useTokenStakeData(denom: string) {
  const { stakeAmount, stakeValue, totalApy } = useSelector(
    (state: RootState) => {
      const satkeData = state.app.tokenStakeData[denom];
      return (
        satkeData || {
          stakeAmount: undefined,
          stakeValue: undefined,
          totalApy: undefined,
        }
      );
    }
  );

  // const displayStakedAmount = useMemo(() => {
  //   return tokenName === TokenName.ETH ? allEth : stakedAmount;
  // }, [tokenName, allEth, stakedAmount]);

  // const displayStakedValue = useMemo(() => {
  //   return tokenName === TokenName.ETH ? allEthValue : stakedValue;
  // }, [tokenName, allEthValue, stakedValue]);

  return { stakeAmount, stakeValue, totalApy };
}

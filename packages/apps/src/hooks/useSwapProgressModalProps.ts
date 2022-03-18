import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useSwapProgressModalProps() {
  const swapProgressModalProps = useSelector((state: RootState) => {
    return state.tx.swapProgressModalProps;
  });

  return swapProgressModalProps;
}

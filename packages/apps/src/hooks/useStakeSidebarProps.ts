import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useStakeSidebarProps() {
  const sidebarProgressProps = useSelector((state: RootState) => {
    return state.tx.stakeSidebarProps;
  });

  return sidebarProgressProps;
}

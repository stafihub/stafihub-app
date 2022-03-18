import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useSidebarProgressProps() {
  const sidebarProgressProps = useSelector((state: RootState) => {
    return state.tx.sidebarProgressProps;
  });

  return sidebarProgressProps;
}

import { createTokenModel } from "../utils/common";

export function useFeeStationTokens() {
  const irisToken = createTokenModel("iris");

  const tokenList = [irisToken];

  return { tokenList };
}

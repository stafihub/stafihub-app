import { getApiHost, getStafiHubChainId } from "@stafihub/apps-config";
import { humanToAtomic } from "@stafihub/apps-util";
import moment from "moment";
import { useEffect, useState } from "react";
import { UserUnbondRecord } from "../types/interface";
import { NoticeUnbondData } from "../types/notice";
import { getNoticeList } from "../utils/notice";
import { useChainAccount } from "./useAppSlice";

export function useAccountUnbond(denom: string) {
  const stafiHubAccount = useChainAccount(getStafiHubChainId());

  const [loading, setLoading] = useState(true);
  const [unbondingAmount, setUnbondingAmount] = useState("--");
  const [unbondRecords, setUnbondRecords] = useState<UserUnbondRecord[]>([]);

  useEffect(() => {
    (async () => {
      if (!stafiHubAccount?.bech32Address) {
        setLoading(false);
      } else {
        const res = await fetch(
          `${getApiHost()}/rtokenInfo/webapi/rtoken/unbondList`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userAddress: stafiHubAccount.bech32Address,
              rTokenDenom: denom,
              pageIndex: 1,
              pageCount: 10,
            }),
          }
        );

        const resJson = await res.json();
        setLoading(false);

        if (resJson.status === "80000" && resJson.data) {
          const list: UserUnbondRecord[] = [];
          const noticeList = getNoticeList();

          try {
            noticeList.forEach((notice) => {
              const noticeData = notice.data as NoticeUnbondData;
              if (
                notice.type === "Unbond" &&
                noticeData.completeTimestamp &&
                noticeData.rTokenDenom === denom
              ) {
                const matched = resJson.data.unbondList.find(
                  (item: UserUnbondRecord) => item.txHash === notice.id
                );
                if (!matched) {
                  list.push({
                    txHash: notice.id,
                    hasReceived: false,
                    lockLeftTime:
                      Math.max(
                        0,
                        Number(noticeData.completeTimestamp) -
                          moment().valueOf()
                      ) / 1000,
                    rTokenDenom: noticeData.rTokenDenom,
                    receiveAddress: notice.txDetail.address || "",
                    tokenAmount: humanToAtomic(noticeData.willGetAmount),
                  });
                }
              }
            });
          } catch {}

          list.push(...resJson.data.unbondList);

          setUnbondRecords(list.slice(0, 10));
        }
      }
    })();
  }, [denom, stafiHubAccount?.bech32Address]);

  return { unbondingAmount, unbondRecords, loading };
}

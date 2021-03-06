import moment from "moment";
import {
  LocalNotice,
  NoticeDataType,
  NoticeStatus,
  NoticeTxDetail,
  NoticeType,
} from "../types/notice";
import {
  getStorage,
  saveStorage,
  STORAGE_KEY_NOTICE,
  STORAGE_KEY_UNREAD_NOTICE,
} from "./storage";
import * as _ from "lodash";

export function addNoticeInternal(
  id: string,
  type: NoticeType,
  txDetail: NoticeTxDetail,
  data: NoticeDataType,
  explorerUrl: string,
  status: NoticeStatus
) {
  const noticeList = getNoticeList();

  const newLength = noticeList.unshift({
    id,
    type,
    txDetail,
    data,
    timestamp: moment().valueOf(),
    explorerUrl,
    status,
  });

  if (newLength > 10) {
    noticeList.pop();
  }

  saveStorage(STORAGE_KEY_NOTICE, JSON.stringify(noticeList));
  saveStorage(STORAGE_KEY_UNREAD_NOTICE, "1");
}

export function updateNoticeInternal(
  id: string,
  newStatus: NoticeStatus,
  newData?: Partial<NoticeDataType>
) {
  const noticeList = getNoticeList();

  const targetNotice = _.remove(noticeList, (value) => {
    return value.id === id;
  });

  if (targetNotice.length === 1) {
    let matched = targetNotice[0];
    if (newData) {
      matched = {
        ...matched,
        data: {
          ...matched.data,
          ...newData,
        },
      };
    }

    noticeList.unshift({
      ...matched,
      status: newStatus,
    });

    saveStorage(STORAGE_KEY_NOTICE, JSON.stringify(noticeList));
    saveStorage(STORAGE_KEY_UNREAD_NOTICE, "1");
  }
}

export function getNoticeList(): LocalNotice[] {
  const localStr = getStorage(STORAGE_KEY_NOTICE);

  let noticeList: LocalNotice[] = [];
  if (localStr) {
    noticeList = JSON.parse(localStr);
  }

  return noticeList || [];
}

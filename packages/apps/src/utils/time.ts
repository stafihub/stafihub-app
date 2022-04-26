import moment from "moment";

export function formatDate(
  millis: number,
  template: string = "YYYY-M-D HH:mm"
) {
  return moment(millis).format(template);
}

export const formatDuration = (milliSeconds: number) => {
  if (milliSeconds <= 0) {
    return "00:00:00:00";
  }
  const sec_num = (milliSeconds / 1000).toFixed(0);
  var days = Math.floor(Number(sec_num) / (3600 * 24)).toString();
  var hours = Math.floor(
    (Number(sec_num) - Number(days) * 3600 * 24) / 3600
  ).toString();
  var minutes = Math.floor(
    (Number(sec_num) - Number(days) * 3600 * 24 - Number(hours) * 3600) / 60
  ).toString();
  var seconds = (
    Number(sec_num) -
    Number(days) * 3600 * 24 -
    Number(hours) * 3600 -
    Number(minutes) * 60
  ).toString();

  if (Number(days) < 0) {
    days = "00";
  } else if (Number(days) < 10) {
    days = "0" + days;
  }
  if (Number(hours) < 10) {
    hours = "0" + hours;
  }
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }
  return `${days}:${hours}:${minutes}:${seconds}`;
};

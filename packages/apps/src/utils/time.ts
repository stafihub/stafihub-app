import moment from "moment";

export function formatDate(
  millis: number,
  template: string = "YYYY-M-D HH:mm"
) {
  return moment(millis).format(template);
}

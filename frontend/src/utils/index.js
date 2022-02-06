import { date } from "quasar";

export const formatDate = (dateToFormat, format) =>
  date.formatDate(dateToFormat, format ? format : "YYYY-MM-DD");

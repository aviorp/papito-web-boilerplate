import Vue from "vue";
import numeral from "numeral";

Vue.filter("formatNumber", (value, format = "0,0.00") => {
  return numeral(value).format(format);
});

Vue.filter("formatNumberWithOutPrecession", value => {
  return numeral(value).format();
});

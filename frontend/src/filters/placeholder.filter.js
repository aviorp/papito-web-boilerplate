import Vue from "vue";

Vue.filter("placeholder", function (value, sign) {
  sign = sign || "-";
  if (!value) return sign;
  else return value;
});

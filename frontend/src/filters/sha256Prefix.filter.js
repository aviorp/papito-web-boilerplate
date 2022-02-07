import Vue from "vue";

Vue.filter("sha256Prefix", function (input) {
  if (!input || input === "-") {
    return "-";
  }
  return "sha256:" + input;
});

import Vue from "vue";

Vue.filter("shortenStrings", (string, length) => {
  return string && string.length > length
    ? string.substr(0, length - 1)
    : string;
});

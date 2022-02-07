import Vue from "vue";

Vue.filter("ellipsis", function (value, length) {
  if (value.length > length) {
    return value.substring(0, length) + "...";
  }
  return value;
});

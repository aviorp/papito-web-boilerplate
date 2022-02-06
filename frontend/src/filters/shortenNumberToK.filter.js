import Vue from "vue";

Vue.filter("shortenNumberToK", value => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return value;
});

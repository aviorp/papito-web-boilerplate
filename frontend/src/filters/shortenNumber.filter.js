import Vue from "vue";

Vue.filter("shortenNumber", value => {
  if (value === 0) return value;
  if (isNaN(parseInt(value))) return value;
  const sizes = ["", "K", "M", "B"];
  const k = 1000;
  const dm = 2;
  const i = Math.floor(Math.log(value) / Math.log(k));
  return `${parseFloat((value / k ** i).toFixed(dm))} ${sizes[i]}`;
});

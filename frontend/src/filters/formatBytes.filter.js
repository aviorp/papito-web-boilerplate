import Vue from "vue";

//filter converting bytes to KB or MB or GB

Vue.filter("formatBytes", function(bytes, decimals) {
  if (bytes === 0) return "0 Bytes";
  if (isNaN(parseInt(bytes))) return bytes;
  if (typeof bytes === "string") bytes = parseInt(bytes);
  if (bytes === 0) return "0";
  const k = 1000;
  const dm = decimals || 2;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
});

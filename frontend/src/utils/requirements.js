export const required = () => val =>
  (val && val.length > 0) || "Required Field";

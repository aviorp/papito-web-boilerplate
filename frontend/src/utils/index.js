import { date } from "quasar";
import jwt_decode from "jwt-decode";
export const formatDate = (dateToFormat, format) =>
  date.formatDate(dateToFormat, format ? format : "YYYY-MM-DD");

export const toBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const getPropFromToken = prop => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  return prop ? decoded[prop] : decoded;
};

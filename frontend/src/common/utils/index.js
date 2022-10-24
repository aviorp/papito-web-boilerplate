import { date } from "quasar";
import jwt_decode from "jwt-decode";
import { STORAGE_KEYS } from "@/common/constants";
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
  const token = localStorage[STORAGE_KEYS.TOKEN];
  const decoded = jwt_decode(token);
  return prop ? decoded[prop] : decoded;
};

import axios from "axios";

export const api = axios.create({
  baseURL: "api/",
  timeout: 15000
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      if (!config.headers.common["Authorization"]) {
        config.headers.common = {
          ...config.headers.common,
          authorization: token
        };
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

import axios from "axios";

class BaseApiRepository {
  constructor(options = {}) {
    this.options = options;
    this.api = axios.create({
      baseURL: "api/",
      timeout: 15000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.api.interceptors.request.use(
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
  }
}

export default BaseApiRepository;

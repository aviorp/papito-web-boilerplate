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
  async getAll() {
    const { data } = await this.api.get(`${this.endpoint}`);
    return data;
  }
  async getOne(id) {
    const { data } = await this.api.get(`${this.endpoint}/${id}`);
    return data;
  }
  async create(payload) {
    const { data } = await this.api.post(`${this.endpoint}`, payload);
    return data;
  }
  async update(id, payload) {
    const { data } = await this.api.put(`${this.endpoint}/${id}`, payload);
    return data;
  }
  async delete(id) {
    const { data } = await this.api.delete(`${this.endpoint}/${id}`);
    return data;
  }
}

export default BaseApiRepository;

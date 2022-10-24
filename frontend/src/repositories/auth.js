import BaseApiRepository from "./base";
class AuthRepository extends BaseApiRepository {
  constructor(options = {}) {
    super(options);
    this.endpoint = "auth";
  }
  async register(payload) {
    const { data } = await this.api.post(`${this.endpoint}/register`, payload);
    return data;
  }
  async login(payload) {
    const { data } = await this.api.post(`${this.endpoint}/login`, payload);
    return data;
  }
}

export default new AuthRepository();

import BaseApiRepository from "./base";

class UserRepository extends BaseApiRepository {
  constructor(options = {}) {
    super(options);
    this.endpoint = "/users";
  }
}
export default new UserRepository();

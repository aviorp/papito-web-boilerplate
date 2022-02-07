import { UserI } from "../interfaces/index";
import UserService from "../services/UserService";

/**
 * This Class is responsible for the business logic of the user endpoint.
 * @class User Business Logic Class for the user endpoint.
 */
class UserBL {
  getAll() {
    return UserService.getAll(false);
  }
  getById(id: string) {
    return UserService.getById(id);
  }
  getByUsername(username: string) {
    return UserService.getByUsername(username);
  }
  create(newUser: UserI) {
    return UserService.create(newUser);
  }
  update(id: string, updatedUser: UserI) {
    return UserService.update(id, updatedUser);
  }
  delete(user: UserI) {
    return UserService.delete(user);
  }
}

export default new UserBL();

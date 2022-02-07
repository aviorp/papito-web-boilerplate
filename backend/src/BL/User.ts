import { UserI } from "../interfaces/index";
import UserService from "../services/UserService";

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
  update(user: UserI) {
    return UserService.update(user);
  }
  delete(user: UserI) {
    return UserService.delete(user);
  }
}

export default new UserBL();

import User from "../db/models/User";
import { UserI } from "../interfaces/index";

class UserService {
  getUsers(isAdmin: boolean) {
    return isAdmin
      ? User.find({})
      : User.find({}).select(["-isAdmin", "-password"]);
  }
  getUserById(id: string) {
    return User.findById(id);
  }
  getUserByEmail(email: string) {
    return User.findOne({ email });
  }
  addUser(newUser: UserI) {
    return User.create(newUser);
  }
  updateUser(user) {
    return User.updateOne({ email: user.email }, ...user);
  }
  deleteUser({ _id }: UserI) {
    return User.deleteOne({ _id: _id });
  }
}

export default new UserService();

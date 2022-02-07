import User from "../db/models/User";
import { UserI } from "../interfaces/index";

class UserService {
  getAll(isAdmin: boolean) {
    return isAdmin
      ? User.find({})
      : User.find({}).select(["-isAdmin", "-password"]);
  }
  getById(id) {
    return User.findById(id);
  }
  getByUsername(username) {
    return User.findOne({ username });
  }
  create(newUser: UserI) {
    return User.create(newUser);
  }
  update(user) {
    return User.updateOne({ id: user._id }, ...user);
  }
  delete({ _id }: UserI) {
    return User.deleteOne({ _id: _id });
  }
}

export default new UserService();

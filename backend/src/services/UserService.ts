import User from "../db/models/User";
import { UserI } from "../interfaces/index";

class UserService {
  getAll(isAdmin: boolean) {
    return isAdmin
      ? User.find({})
      : User.find({}).select(["-isAdmin", "-password"]);
  }
  getById(_id) {
    return User.findById({ _id });
  }
  getByUsername(username) {
    return User.findOne({ username });
  }
  create(newUser: UserI) {
    return User.create(newUser);
  }
  update(_id, updatedUser) {
    return User.updateOne({ _id }, { $set: updatedUser });
  }
  delete({ _id }: UserI) {
    return User.deleteOne({ _id });
  }
}

export default new UserService();

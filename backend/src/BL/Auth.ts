import { genSaltSync, hashSync } from "bcryptjs";
import { UserI } from "../interfaces";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";

/**
 *  This Class is responsible for the business logic of the authentication.
 * @class Auth Business Logic Class for the authentication.
 */
class AuthBL {
  async register(user: UserI) {
    const salt = await genSaltSync(10);
    const hashedPassword = await hashSync(user.password!, salt);
    const newUser = { ...user, password: hashedPassword };
    return AuthService.register(newUser);
  }
  async login(username: string, passwordToCompare: string) {
    const user = await UserService.getByUsername(username);

    return await AuthService.login(user, passwordToCompare);
  }
}

export default new AuthBL();

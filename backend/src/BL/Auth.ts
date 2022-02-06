import { genSaltSync, hashSync } from "bcryptjs";
import { UserI } from "../interfaces";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
const salt = genSaltSync(10);

export const register = (user: UserI) => {
  const hashedPassword = hashSync(user.password!, salt);
  const newUser = { ...user, password: hashedPassword };
  return AuthService.register(newUser);
};

export const login = async (email: string, password: string) => {
  const user = await UserService.getUserByEmail(email);
  return await AuthService.login(password, user);
};

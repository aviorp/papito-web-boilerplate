import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/index";
import User from "../db/models/User";
import { UserI } from "../interfaces";

class AuthService {
  comparePasswords(userPassword: string, hashedPassword: string) {
    return compareSync(userPassword, hashedPassword);
  }
  generateToken(user: UserI) {
    return jwt.sign(JSON.parse(JSON.stringify(user)), config.jwtSecret, {
      expiresIn: 600000,
    });
  }

  async register(newUser: UserI) {
    return User.create(newUser);
  }

  async login(password: string, user: UserI) {
    const isValid = await this.comparePasswords(password, user.password!);
    if (!user || !isValid) return "Invalid User or Password";
    const token = this.generateToken(user);
    return token;
  }
}

export default new AuthService();

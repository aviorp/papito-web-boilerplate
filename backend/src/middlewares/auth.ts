import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";
import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../errorHandlers";

class Auth {
  /**
   * This function check if user can continue to protected routes.
   */
  verifyUser(req: Request, res: Response, next: NextFunction) {
    const token = req.header("authorization");
    if (!token) {
      return next(new NotFoundError("token not found"));
    }
    jwt.verify(token, config.jwtSecret, (err, auth) => {
      if (err) {
        return next(new UnauthorizedError("invalid token"));
      }
      if (!auth) {
        return next(new UnauthorizedError("user not authorized"));
      }
      next();
    });
  }
  /**
   * This function check if user can continue to protected routes as an admin.
   */
  verifyAdmin(req, res, next) {
    const token = req.header("authorization");
    if (!token) {
      return next(new NotFoundError("token not found"));
    }
    jwt.verify(token, config.jwtSecret, (err, auth) => {
      if (err) {
        return next(new UnauthorizedError("invalid token"));
      } else {
        if (auth && !auth.isAdmin) {
          return next(new ForbiddenError("this user is not an admin"));
        }
        console.log(auth);
        next();
      }
    });
  }
}

export default new Auth();

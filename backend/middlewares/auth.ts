import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";
import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError
} from "../errorHandlers";

/**
 * This Class is responsible for the authentication of the user.
 * @class Auth Middleware Class for the authentication of the user.
 */
class Auth {
  /**
   * This function check if user can continue to protected routes.
   * Fetching the token from the header, and verify it.
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
   * This function check if user can continue to protected routes (Administrators).
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
        if (!auth?.isAdmin) {
          return next(new ForbiddenError("user not authorized"));
        }
        next();
      }
    });
  }
}

export default new Auth();

import { UnauthorizedError } from "../errorHandlers";
import UserService from "../services/UserService";
import { Request, Response, NextFunction } from "express";

class Requirements {
  async userIsNull(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.getUserByEmail(
      req.body.email || req.params.email
    );
    if (user) return next(new UnauthorizedError("User is already exist."));
    next();
  }
  async userExist(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.getUserByEmail(
      req.body.email || req.params.email
    );
    if (!user) return next(new UnauthorizedError("User Not Found."));
    next();
  }
}

export default new Requirements();

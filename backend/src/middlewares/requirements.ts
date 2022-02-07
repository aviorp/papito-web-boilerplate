import { UnauthorizedError } from "../errorHandlers";
import UserService from "../services/UserService";
import { Request, Response, NextFunction } from "express";

class Requirements {
  async userIsNull(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.getByUsername(
      req.body.username || req.params.username
    );
    if (user) return next(new UnauthorizedError("User is exist."));
    next();
  }
  async userExist(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.getByUsername(
      req.body.username || req.params.username
    );
    if (!user) return next(new UnauthorizedError("User is not exist."));
    next();
  }
}

export default new Requirements();

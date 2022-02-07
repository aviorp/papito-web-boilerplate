import { Request, Response, NextFunction } from "express";
import { BadRequestError, UnauthorizedError } from "../errorHandlers";
import UserService from "../services/UserService";
import mongoose from "mongoose";
/**
 * This Class is responsible for the validation of the requirements of the endpoint.
 * @class Requirements Middleware Class for the validation of the requirements of the endpoint.
 */
class Requirements {
  async userIsNull(
    req: Request,
    res: Response,
    next: NextFunction,
    checkId = false
  ) {
    let user;
    if (checkId) {
      const id = req.body.id || req.params.id;
      user = await UserService.getById(id);
    } else {
      user = await UserService.getByUsername(req.body.username);
    }
    if (user) return next(new BadRequestError("User is exist."));
    next();
  }
  async userExist(req: Request, res: Response, next: NextFunction) {
    const id = req.body.id || req.params.id;
    const user = await UserService.getById(id);
    if (!user) return next(new UnauthorizedError("User is not exist."));
    next();
  }
  isValidId(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id || req.body.id;
    if (!mongoose.isValidObjectId(id)) {
      return next(new BadRequestError("Invalid Id"));
    }
    next();
  }
}

export default new Requirements();

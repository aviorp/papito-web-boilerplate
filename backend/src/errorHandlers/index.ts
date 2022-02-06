import { UserFacingError } from "./baseErrors";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
export class BadRequestError extends UserFacingError {
  get statusCode() {
    return 400;
  }
}

export class NotFoundError extends UserFacingError {
  get statusCode() {
    return 404;
  }
}
export class UnauthorizedError extends UserFacingError {
  get statusCode() {
    return 401;
  }
}
export class ForbiddenError extends UserFacingError {
  get statusCode() {
    return 403;
  }
}

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    return res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message }); // Bad request
  } else {
    console.log(err);
    res.status(500).send("Server Error.");
  }
  next();
};

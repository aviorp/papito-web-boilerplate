import express, { Request, Response, NextFunction } from "express";
import Requirements from "../middlewares/requirements";
import { useMiddleware } from "../middlewares";
import { register, login } from "../BL/Auth";
import { BadRequestError } from "../errorHandlers";
const router = express.Router();

/**
 * The api creates register new user
 *
 */
router.post(
  "/register",
  useMiddleware(Requirements.userIsNull),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await register(req.body);
      return res.status(201).send("User Created.");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * user is log in to the server
 *
 * @returns valid token.
 *
 */
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const response = await login(email, password);
      return res.status(201).send(response);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

export default router;

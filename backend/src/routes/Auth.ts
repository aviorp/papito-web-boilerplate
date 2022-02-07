import express, { Request, Response, NextFunction } from "express";
import Requirements from "../middlewares/requirements";
import { useMiddleware } from "../middlewares";
import { BadRequestError } from "../errorHandlers";
import { AuthBL } from "../BL";
import { UserI } from "../interfaces";
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
      await AuthBL.register(req.body);
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
      const { username, password } = req.body;
      if (!username || !password) {
        throw new Error();
      }
      const token = await AuthBL.login(username, password);
      if (!token) {
        console.log("here");
        throw new Error();
      }
      return res.status(201).json(token);
    } catch (error: any) {
      next(new BadRequestError("Username or Password Are Invalid."));
    }
  }
);

export default router;

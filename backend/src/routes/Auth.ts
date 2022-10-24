import express, { Request, Response, NextFunction } from "express";
import Requirements from "../middlewares/requirements";
import { useMiddleware } from "../middlewares";
import { BadRequestError } from "../errorHandlers";
import { AuthBL } from "../BL";
const router = express.Router();

/**
 * Register a new user.
 * @param username The username of the user.
 * @param password The password of the user.
 * @returns The user with the given username.
 * @returns The message.
 */
router.post(
  "/register",
  useMiddleware(Requirements.userIsNull),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await AuthBL.register(req.body);
      return res.status(201).send("User Created.");
    } catch (error: any) {
      next(new BadRequestError("Failed to create user."));
    }
  }
);

/**
 * Login a user.
 * @param username The username of the user.
 * @param password The password of the user.
 * @returns The user with the given username.
 * @returns The message.
 * @returns The token.
 */
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        throw new Error("Missing username or password.");
      }
      const token = await AuthBL.login(username, password);
      if (!token) {
        throw new Error("Invalid username or password.");
      }
      return res.status(201).json(token);
    } catch (error: any) {
      next(new BadRequestError("Username or Password Are Invalid."));
    }
  }
);

export default router;

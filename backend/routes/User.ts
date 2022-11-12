import express, { Request, Response, NextFunction } from "express";
import { UserBL } from "../BL";

import { BadRequestError } from "../errorHandlers/index";
import { useMiddleware } from "../middlewares/index";
import Requirements from "../middlewares/requirements";

const router = express.Router();

/**
 * Gets all the users in the api.
 * @returns All The users in the api.
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserBL.getAll();
    res.status(200).send(users);
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});

/**
 * Creates a new user.
 * @interface UserI,
 */
router.post(
  "/",
  useMiddleware(Requirements.userIsNull),

  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserBL.create(req.body);
      return res.status(201).send("User Created");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * Gets a user by id.
 * @param id The id of the user.
 * @returns The user with the given id.
 */
router.get(
  "/:id",
  useMiddleware(Requirements.isValidId),
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserBL.getById(req.params.id);
      res.status(200).send(user);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * Updates a user by id.
 * @param id The id of the user.
 * @returns The updated user.
 */
router.put(
  "/:id",
  [
    useMiddleware(Requirements.isValidId),
    useMiddleware(Requirements.userExist)
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserBL.update(req.params.id, req.body);
      return res.status(201).send("User Updated");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * Deletes a user by id.
 * @param id The id of the user.
 * @returns The deleted user.
 */
router.delete(
  "/:id",
  [
    useMiddleware(Requirements.userExist),
    useMiddleware(Requirements.isValidId)
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserBL.getById(req.params.id);
      await UserBL.delete(user);
      return res.status(200).send("User Deleted.");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

export default router;

import express, { Request, Response, NextFunction } from "express";
import {
  addUser,
  getAllUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "../BL/Users";
import { BadRequestError, NotFoundError } from "../errorHandlers/index";
import { useMiddleware } from "../middlewares/index";
import Requirements from "../middlewares/requirements";

const router = express.Router();

/**
 * Gets all the users in the api.
 *
 * @returns All The users in the api.
 *
 */
router.get(
  "/get-users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await getAllUsers();
      if (!users.length) return next(new NotFoundError("Dataset Not found."));
      res.status(200).send(users);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * The api creates new user
 *
 */
router.post(
  "/add-user",
  useMiddleware(Requirements.userIsNull),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await addUser(req.body);
      return res.status(201).send("User Created");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/** 
* Get Speicific User by his Email.

* @returns User By Email.

*/
router.get(
  "/:email",
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getUserByEmail(req.params.email);
      return res.status(200).send(user);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/** 
* update Speicific User by his Email.

* @returns User By Email.

*/
router.put(
  "/update-user",
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getUserByEmail(req.body.email);
      const updatedUser = {
        ...user,
        ...req.params,
      };
      const response = await updateUser(updatedUser);
      return res.status(200).send(response);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * delete Speicific User by his Email.
 */
router.delete(
  "/delete-user",
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getUserByEmail(req.body.email);
      await deleteUser(user);
      return res.status(200).send("User Deleted.");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

export default router;

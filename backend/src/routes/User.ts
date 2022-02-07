import express, { Request, Response, NextFunction } from "express";
import { UserBL } from "../BL";

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
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserBL.getAll();
    res.status(200).send(users);
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});

/**
 * The api creates new user
 *
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
* Get Speicific User by his Email.

* @returns User By Email.

*/
router.get(
  "/:id",
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserBL.getByUsername(req.params.username);
      return res.status(200).send(user);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/** 
* update Speicific User by his id.

* @returns User By id.

*/
router.put(
  "/:id",
  useMiddleware(Requirements.userExist),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserBL.getById(req.params.id);
      const updatedUser = {
        ...user,
        ...req.params
      };
      const response = await UserBL.update(updatedUser);
      return res.status(200).send(response);
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

/**
 * delete Speicific User by his id.
 */
router.delete(
  "/:id",
  useMiddleware(Requirements.userExist),
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

import { Request, Response, NextFunction } from "express";

export const useMiddleware =
  (fn) => async (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next);

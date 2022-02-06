import express, { NextFunction, Request, Response } from "express";
import { upload } from "../utils/multer";

const router = express.Router();

/**
 * The api send a message to the user
 *
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({message:"Use /swagger to see and try all the entities."});
  } catch (error) {
    next(error);
  }
});

/**
 * The api takes a file and uploading it.
 *
 */
router.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send({
        message: "File Uploaded",
        fileName: req.file?.filename,
      });
    } catch (error) {
      next(error);
    }
  }
);
/**
 * The api takes a file and send it to the browser.
 *
 */
router.get(
  "/files/:filename",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send({
        message: "File Uploaded",
        fileName: req.file?.filename,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

export default router;

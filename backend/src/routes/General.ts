import express, { NextFunction, Request, Response } from "express";
import { upload } from "../utils/multer";

const router = express.Router();

/**
 * the Api will send message to redirect to Swagger UI page.
 * @returns The message.
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(200)
      .json({ message: "Use /swagger to see and try all the entities." });
  } catch (error) {
    next(error);
  }
});

/**
 * Uploading a file to the server.
 * @returns The message.
 * @param file The file to upload.
 * @param req The request.
 */
router.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send({
        message: "File Uploaded",
        fileName: req.file?.filename
      });
    } catch (error) {
      next(error);
    }
  }
);
/**
 * Downloading a file from the server.
 * @returns The file.
 * @param fileName The name of the file to download.
 *
 */
router.get(
  "/files/:filename",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).send({
        message: "File Uploaded",
        fileName: req.file?.filename
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

export default router;

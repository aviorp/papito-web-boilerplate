import express, { NextFunction, Request, Response } from "express";
import { upload } from "../utils/multer";
import {
  uploadFileToS3Bucket,
  downloadFileFromS3Bucket,
  deleteFileFromS3Bucket
} from "../apis/s3";
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
    const file = req.file;
    try {
      await uploadFileToS3Bucket(file);
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
 * @returns The file (streamed).
 * @param {string} fileKey The key of the file to download.
 *
 */
router.get(
  "/downloads/:fileKey",
  async (req: Request, res: Response, next: NextFunction) => {
    const fileKey = req.params.fileKey;
    try {
      if (!fileKey) {
        throw new Error("File key not provided");
      }
      const fileStream = await downloadFileFromS3Bucket(fileKey);
      fileStream.pipe(res);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Deleting a file from the server.
 * @returns The message.
 * @param {string} fileKey The key of the file to delete.
 */
router.delete(
  "/delete/:fileKey",
  async (req: Request, res: Response, next: NextFunction) => {
    const fileKey = req.params.fileKey;
    try {
      if (!fileKey) {
        throw new Error("File key not provided");
      }
      await deleteFileFromS3Bucket(fileKey);
      res.status(200).send({
        message: "File Deleted"
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;

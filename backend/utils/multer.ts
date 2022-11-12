import multer from "multer";

// create the storage target
const storage = multer.diskStorage({
  // destination for files (save locally)
  // destination: (req, file, callback) => {
  //   callback(null, "src/uploads");
  // },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

//create the middleware
export const upload = multer({
  storage,
  limits: {
    fieldSize: 1024 * 1024 * 3
  }
});

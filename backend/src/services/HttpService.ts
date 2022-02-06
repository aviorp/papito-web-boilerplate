import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { Server } from "socket.io";
import { errorHandler, NotFoundError } from "../errorHandlers";
import swaggerDocument from "../swaggerConfig";
import routesModules from "../routes";
import db from "../db";
import cors from "cors";

class HttpService {
  app;
  constructor() {
    this.app = express();
  }

  setSettings(settings: object) {
    Object.entries(settings).forEach((key, value) => {
      this.app.set(key, value);
    });
  }

  use404ErrorHandler() {
    this.app.get("*", (req: Request, res: Response, next: NextFunction) => {
      // ! ERROR did not return as catch to the front.
      next(new NotFoundError(`Can't find ${req!.url}`));
    });
    // return this;
  }

  async useRoutes() {
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    routesModules.forEach(({ path, module }) => {
      this.app.use(path, module);
    });
  }

  initApp(port) {
    this.useDefaultMiddlewares();
    const server = this.app.listen(port, () =>
      console.log(`listening on port ${port}...`)
    );
    new Server(server);
  }

  useApi() {
    this.useRoutes();
    this.use404ErrorHandler();
    this.app.use(errorHandler);
    db();
  }

  useDefaultMiddlewares() {
    this.app.use(morgan("tiny"));
    this.app.use(json({ limit: "50mb" }));
    this.app.use(cors());
    this.app.use(
      urlencoded({
        limit: "50mb",
        extended: true,
      })
    );
  }
}

export default new HttpService();

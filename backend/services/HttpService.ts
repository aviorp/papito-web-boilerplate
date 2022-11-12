import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { Server } from "socket.io";
import { errorHandler, NotFoundError } from "../errorHandlers";
import swaggerDocument from "../swaggerConfig";
import routesModules from "../routes";
import DB from "../db";
import cors from "cors";

/**
 * This Class is responsible for the init and run of the server.
 * @class HttpService
 */
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
      next(new NotFoundError(`${req.originalUrl} not found`));
    });
  }

  async useRoutes() {
    this.useSwagger();
    routesModules.forEach(({ path, module }) => {
      this.app.use(path, module);
    });
  }

  initApp(port) {
    this.useDefaultMiddlewares();
    const server = this.app.listen(port, () =>
      console.log(`Server is running on port ${port}`)
    );
    new Server(server);
  }

  useApi() {
    this.useRoutes();
    this.use404ErrorHandler();
    this.app.use(errorHandler);
    // db();
    DB.init();
  }

  useDefaultMiddlewares() {
    this.app.use(morgan("tiny"));
    this.app.use(json({ limit: "50mb" }));
    this.app.use(cors());
    this.app.use(
      urlencoded({
        limit: "50mb",
        extended: true
      })
    );
  }
  useSwagger() {
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new HttpService();

import mongoose from "mongoose";
import config from "../config";
import { DatabaseError } from "../errorHandlers/baseErrors";

/**
 * The module responsible for all the mongodb connection configuration.
 *
 * @author Avior
 */
const options = {
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  useCreateIndex: true
};

class DB {
  client: mongoose.Connection;
  constructor(options = {}) {
    mongoose
      .connect(config.DB_URI, options)
      .catch((err: Error) =>
        console.error("the connection to the DB failed.   ", err)
      );
    this.client = mongoose.connection;
  }

  init() {
    this.client.on("connected", () => {
      console.log("connected successfully to mongo database.");
    });

    this.client.on("error", (e: Error) => {
      return new DatabaseError(`Error occurred on mongo database. Err : ${e}`);
    });

    this.client.on("disconnected", (e: Error) => {
      return new DatabaseError(`Disconnected from mongo database. ${e}`);
    });

    this.client.on("reconnected", () => {
      console.log("Successfully reconnected to mongo database.");
    });

    this.client.on("reconnectFailed", (e: Error) => {
      return new DatabaseError(
        `Failed to reconnect to mongo database! run out of reconnect tries. Sending a new connection request... Err : ${e}`
      );
    });
  }
}

export default new DB(options);

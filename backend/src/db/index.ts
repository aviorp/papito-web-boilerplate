import mongoose from "mongoose";
import config from "../config";
import { DatabaseError } from "../errorHandlers/baseErrors";

/**
 * The module reponsobile for all the mongodb connection configuration.
 *
 * @author Avior
 */

/**
 * The function connect to mongodb server
 *
 */

const options = {
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  useCreateIndex: true,
};

export default () => {
  const db = mongoose.connection;
  mongoose
    .connect(config.DB_URI, options)
    .catch((err: Error) =>
      console.error("the connection to the DB failed.   ", err)
    );

  db.on("connected", () => {
    console.log("connected successfully to mongo database.");
  });

  db.on("error", (e: Error) => {
    return new DatabaseError(`Error occured on mongo database. Err : ${e}`);
  });

  db.on("disconnected", (e: Error) => {
    return new DatabaseError(`Disconnected from mongo database. ${e}`);
  });

  db.on("reconnected", () => {
    console.log("Successfully reconnected to mongo database.");
  });

  db.on("reconnectFailed", (e: Error) => {
    return new DatabaseError(
      "Failed to reconnect to mongo database! run out of reconnect tries. Sending a new connection request... Err : ${}"
    );
  });
};

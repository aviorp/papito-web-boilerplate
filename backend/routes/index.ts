import General from "./General";
import Auth from "./Auth";
import User from "./User";

/**
 * The routes of the application.
 * @returns The routes of the application.
 */
export default [
  { path: "/", module: General },
  { path: "/auth", module: Auth },
  { path: "/users", module: User }
];

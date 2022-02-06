import General from "./General";
import Auth from "./Auth";
import User from "./User";

export default [
  { path: "/", module: General },
  { path: "/auth", module: Auth },
  { path: "/users", module: User },
];

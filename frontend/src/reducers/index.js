import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import habits from "./habits";
import users from "./users";

export default combineReducers({
  errors,
  messages,
  auth,
  habits,
  users,
});

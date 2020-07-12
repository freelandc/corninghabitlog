import axios from "axios";
import { returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_USERS, AUTH_ERROR } from "./types";

// CHECK TOKEN & LOAD USER
export const getUsers = () => (dispatch) => {
  axios
    //the .get retrieves data from the backend
    .get("/api/users/users")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .then((res) => {
      console.log("getusers");
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LIST_ERROR,
      });
    });
};

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_HABITS,
  DELETE_HABIT,
  ADD_HABIT,
  HABITADD_ERROR,
  HABITDELETE_ERROR,
  HABITGET_ERROR,
  HABITUPDATE_ERROR,
  UPDATE_HABITS,
} from "./types";

//ADD HABIT
export const addHabit = (habit) => (dispatch, getState) => {
  axios
    .post("/api/habits/", habit, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addHabit: "Habit Added" }));
      dispatch({
        type: ADD_HABIT,
        payload: res.data,
      });
    })
    .then((res) => {
      console.log("habits added");
    })
    //this is where any errors will be caught
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ addHabit: "Error" }));
      dispatch({
        type: HABITADD_ERROR,
      });
    });
};

// GET HABITS
export const getHabits = () => (dispatch, getState) => {
  axios
    .get("/api/habits/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_HABITS,
        payload: res.data,
      });
    })
    .then((res) => {
      console.log("get habits");
    })
    //this is where any errors will be caught
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: HABITGET_ERROR,
      });
    });
};

// Delete habit
export const deleteHabit = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/habits/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteHabit: "Habit Deleted" }));
      dispatch({
        type: DELETE_HABIT,
        payload: id,
      });
    })
    .then((res) => {
      console.log("habit deleted");
    })
    //this is where any errors will be caught
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: HABITDELETE_ERROR,
      });
    });
};

export const updateHabits = (id, habit) => (dispatch, getState) => {
  axios
    .patch(`/api/habits/${id}/`, habit, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateHabits: "Habit Updated" }));
      dispatch({
        type: UPDATE_HABITS,
        payload: res.data,
      });
    })
    .then((res) => {
      console.log("habit updated");
    })
    //this is where any errors will be caught
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: HABITUPDATE_ERROR,
      });
    });
};

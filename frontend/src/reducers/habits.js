import {
  GET_HABITS,
  DELETE_HABIT,
  CLEAR_HABITS,
  ADD_HABIT,
  UPDATE_HABITS,
} from "../actions/types.js";

const initialState = {
  habits: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HABITS:
      return {
        ...state,
        habits: action.payload,
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload),
      };
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case CLEAR_HABITS:
      return {
        ...state,
        habits: [],
      };
    case UPDATE_HABITS:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}

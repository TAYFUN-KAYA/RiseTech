import { JOB_ACTIONS } from "../../types";

export default function jobReducer(state = [], action) {
  switch (action.type) {
  case JOB_ACTIONS.SET_JOB: {
    const newState = [...action.payload];
    return newState;
  }
  default:
    return state;
  }
}

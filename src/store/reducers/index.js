import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import jobs from "./jobs";

export default reduceReducers(
  combineReducers({
    jobs,
  })
);

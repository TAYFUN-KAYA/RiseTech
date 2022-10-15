import store from "../../../store";
import { JOB_ACTIONS } from "../../types";

const { dispatch } = store;

export const SET_JOB = (payload) =>
  dispatch({
    type: JOB_ACTIONS.SET_JOB,
    payload,
  });

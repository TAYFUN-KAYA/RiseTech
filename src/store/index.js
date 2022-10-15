import { createStore } from "redux";
import reducers from "./reducers";

const STORE = createStore(reducers, {
  jobs: [],
});

export default STORE;

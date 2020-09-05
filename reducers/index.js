import { combineReducers } from "redux";

import { moviesReducers } from "./movies";

const rootReducer = combineReducers({
  Movies: moviesReducers,
});

export default rootReducer;

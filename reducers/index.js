import { combineReducers } from "redux";

import { moviesReducers } from "./movies";

const rootReducer = combineReducers({
  movies: moviesReducers,
});

export default rootReducer;

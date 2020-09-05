import { put, call } from "redux-saga/effects";
import { getMovies } from "../services/api";
import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from "../reducers/movies";

export function* getMoviesList() {
  const response = yield call(getMovies);

  if (response.statusText === "OK") {
    yield put({ type: GET_MOVIES_SUCCESS, payload: response.data });
  } else {
    yield put({ type: GET_MOVIES_ERROR, errorMessage: "Failed get movies" });
  }
}

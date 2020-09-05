import { put, call } from "redux-saga/effects";
import { getMovies, getMovieDetail } from "../services/api";
import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_ERROR,
} from "../reducers/movies";

export function* getMoviesList() {
  const response = yield call(getMovies);

  if (response.statusText === "OK") {
    yield put({ type: GET_MOVIES_SUCCESS, payload: response.data });
  } else {
    yield put({ type: GET_MOVIES_ERROR, errorMessage: "Failed get movies" });
  }
}

export function* sagaGetMovieDetail(data) {
  const response = yield call(getMovieDetail, data);

  if (response.statusText === "OK") {
    yield put({ type: GET_MOVIE_DETAIL_SUCCESS, payload: response.data });
  } else {
    yield put({
      type: GET_MOVIE_DETAIL_ERROR,
      errorMessage: "Failed get movie detail",
    });
  }
}

import { takeLatest, all } from "redux-saga/effects";
import { getMoviesList, sagaGetMovieDetail } from "./movies";
import {
  GET_MOVIES_REQUEST,
  GET_MOVIE_DETAIL_REQUEST,
} from "../reducers/movies";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_MOVIES_REQUEST, getMoviesList),
    takeLatest(GET_MOVIE_DETAIL_REQUEST, sagaGetMovieDetail),
  ]);
}

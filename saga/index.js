import { takeLatest, all } from "redux-saga/effects";
import { getMoviesList } from "./movies";
import { GET_MOVIES_REQUEST } from "../reducers/movies";

export default function* rootSaga() {
  yield all([takeLatest(GET_MOVIES_REQUEST, getMoviesList)]);
}

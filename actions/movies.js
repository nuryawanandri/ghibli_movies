import axios from "axios";

import {
  GET_MOVIES_REQUEST,
  GET_MOVIE_DETAIL_REQUEST,
} from "../reducers/movies";

export const getMovieListRequest = () => ({
  type: GET_MOVIES_REQUEST,
});

export const getMovieDetail = (data) => ({
  type: GET_MOVIE_DETAIL_REQUEST,
  payload: data,
});

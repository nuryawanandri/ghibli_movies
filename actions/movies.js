import axios from "axios";

import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from "../reducers/movies";

const baseUrl = "https://ghibliapi.herokuapp.com";

export const getMoviesList = () => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/films?limit=250`)
      .then((response) => {
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_ERROR,
          error: "Failed get movies data",
        });
      });
  };
};

export const testActionCreator = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
  };
};

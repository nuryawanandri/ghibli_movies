import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../services/api";

import { wrapper } from "../store";

import { testActionCreator, getMovieListRequest } from "../actions/movies";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const movieList = await getMovies();
    store.dispatch({
      type: "movies/GET_MOVIES_SUCCESS",
      payload: movieList.data,
    });
  }
);

const Movies = (props) => {
  return <button onClick={props.getMovieListRequest}>Test</button>;
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testActionCreator: () => {
      dispatch(testActionCreator());
    },
    getMovieListRequest() {
      dispatch(getMovieListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

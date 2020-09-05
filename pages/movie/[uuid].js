import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../services/api";

import { wrapper } from "../../store";

import { GET_MOVIE_DETAIL_SUCCESS } from "../../reducers/movies";

import MovieDetailComponent from "../../components/MovieDetail";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const movieList = await getMovieDetail(params.uuid);
    store.dispatch({
      type: GET_MOVIE_DETAIL_SUCCESS,
      payload: movieList.data,
    });
  }
);

const MovieDetail = (props) => {
  return <MovieDetailComponent />;
};

export default MovieDetail;

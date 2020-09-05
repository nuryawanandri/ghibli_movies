import React from "react";
import { getMovies } from "../services/api";
import MovieList from "../components/MovieList";

import { GET_MOVIES_SUCCESS } from "../reducers/movies";

import { wrapper } from "../store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const movieList = await getMovies();
    store.dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: movieList.data,
    });
  }
);

const Movies = () => {
  return <MovieList />;
};

export default Movies;

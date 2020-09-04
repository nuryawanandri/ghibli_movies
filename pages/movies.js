import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Provider, useSelector } from "react-redux";

import { wrapper } from "../store";

import { getMoviesList, testActionCreator } from "../actions/movies";

// export const getStaticProps = async (context) => {
//   const movieList = await axios.get("https://ghibliapi.herokuapp.com/films");

//   console.log("movieList : ", context);

//   return {
//     props: {
//       films: movieList.data,
//     },
//   };
// };

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    await store.dispatch(getMoviesList());
    console.log("preview : ", preview);
    const movieList = await axios.get("https://ghibliapi.herokuapp.com/films");
    store.dispatch({
      type: "movies/GET_MOVIES_REQUEST",
      payload: movieList.data,
    });
    store.dispatch({ type: "movies/GET_MOVIES_REQUEST" });
  }
);

const Movies = (props) => {
  const { movies } = useSelector((state) => state);
  console.log("prosp : ", movies);
  return <button onClick={props.getMoviesList}>Test</button>;
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
    getMoviesList() {
      dispatch(getMoviesList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

import Styles from "./index.scss";

const MovieList = (props) => {
  return (
    <div>
      <div className={Styles.movieListContainer}>
        {props.movies.films.map((film) => (
          <div className={Styles.movieBox} key={film.id}>
            <Link href={`/movie/${film.id}`}>
              <a>
                <div className={Styles.movieTitleContainer}>{film.title}</div>
                <div className={Styles.descriptionBox}>
                  <div className={Styles.descInfo}>
                    <span>{`${film.description.slice(0, 90)}...`}</span>
                  </div>
                </div>
                <div className={Styles.ratingContainer}>
                  <img src="/static/images/star_rating.svg" />
                  <span>{film.rt_score}</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.Movies,
});

export default connect(mapStateToProps)(MovieList);

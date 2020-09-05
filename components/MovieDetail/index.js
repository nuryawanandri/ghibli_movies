import React from "react";
import { connect } from "react-redux";

import Styles from "./index.scss";

const MovieDetail = (props) => {
  const { filmDetail } = props;
  return (
    <div className={Styles.container}>
      <div className={Styles.detailContainer}>
        <div className={Styles.upperContainer}>
          <div className={Styles.titleBox}>
            {filmDetail.title}
            <div className={Styles.containerRating}>
              <img src="/static/images/star_rating.svg" />
              <div>{filmDetail.rt_score}</div>
            </div>
          </div>
          <div className={Styles.righSideContainer}>
            <div className={Styles.infoItem}>
              <div className={Styles.infoLabel}>Title</div>
              <div>{`: ${filmDetail.title}`}</div>
            </div>
            <div className={Styles.infoItem}>
              <div className={Styles.infoLabel}>Release Date</div>
              <div>{`: ${filmDetail.release_date}`}</div>
            </div>
            <div className={Styles.infoItem}>
              <div className={Styles.infoLabel}>Producer</div>
              <div>{`: ${filmDetail.producer}`}</div>
            </div>
            <div className={Styles.infoItem}>
              <div className={Styles.infoLabel}>Director</div>
              <div>{`: ${filmDetail.director}`}</div>
            </div>
          </div>
        </div>
        <div>{filmDetail.description}</div>
      </div>
    </div>
  );
};

const mapStateToProsp = (state) => ({
  filmDetail: state.Movies.filmsDetail,
});

export default connect(mapStateToProsp)(MovieDetail);

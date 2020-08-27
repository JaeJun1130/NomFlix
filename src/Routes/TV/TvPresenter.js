import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TvPresenter = ({ topRating, popular, airingToday, error, Loading }) =>
  null;

TvPresenter.propTypes = {
  topRating: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  Loading: PropTypes.bool.isRequired,
};

export default TvPresenter;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, Loading }) => null;

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  Loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

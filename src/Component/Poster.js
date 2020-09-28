import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { Link } from "react-router-dom";

const Container = Styled.div``;
const ImageContainer = Styled.div``;
const Image = Styled.div``;
const Rating = Styled.span``;
const Title = Styled.span``;
const Year = Styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMoive = false }) => (
  <Link to={isMoive ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl}></Image>
        <Rating>
          <span role="img" aria-label="rating">
            🏆/10
          </span>{" "}
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string,
  isMoive: PropTypes.bool,
};

export default Poster;

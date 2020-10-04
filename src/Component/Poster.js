import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { Link } from "react-router-dom";

const Container = Styled.div`
font-size:12px;`;

const Image = Styled.div`
background-Image:url(${(props) => props.bgUrl});
  height:180px;
  margin-bottom:5px;
  background-size:cover;
  background-position:center;
  border-radius:10px;
  transition:opacity 0.2s linear;
  `;

const Rating = Styled.span`
bottom:5px;
right:5px; 
position:absolute;
opacity:0;`;

const ImageContainer = Styled.div`
margin-bottom:5px;
position:relative;
&:hover{
  ${Image} {
    opacity:0.3;
  }
  ${Rating} {
    opacity:1;
    transition:opacity 0.2s linear;
  }
  
}
`;

const Title = Styled.span`
display:block;
margin-bottom:3px;`;

const Year = Styled.span`
font-size:10px;
color:rgba(255,255,255,0.5);`;

const Poster = ({ id, imageUrl, title, rating, year, isMoive = false }) => (
  <Link to={isMoive ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../Img/NotImg.JPG")
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            🏆
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
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

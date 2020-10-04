import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Component/Section";
import Lodaer from "../../Component/Lodaer";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, Loading }) =>
  Loading ? (
    <Lodaer />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMoive={true}
            />
          ))}
        </Section>
      )}

      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Up Coming">
          {upComing.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMoive={true}
            />
          ))}
        </Section>
      )}

      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMoive={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  Loading: PropTypes.bool.isRequired,
};

export default HomePresenter;

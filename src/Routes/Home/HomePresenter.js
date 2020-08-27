import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Component/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, Loading }) =>
  Loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}

      {upComing && upComing.length > 0 && (
        <Section title="Up Coming">
          {upComing.map((movie) => movie.title)}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((movie) => movie.title)}</Section>
      )}
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

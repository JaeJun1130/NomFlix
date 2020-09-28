import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Component/Section";
import Lodaer from "../../Component/Lodaer";
import Message from "../../Component/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TvPresenter = ({ topRating, popular, airingToday, error, Loading }) =>
  Loading ? (
    <Lodaer />
  ) : (
    <Container>
      {topRating && topRating.length > 0 && (
        <Section title="Top Rating">
          {topRating.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TvPresenter.propTypes = {
  topRating: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  Loading: PropTypes.bool.isRequired,
};

export default TvPresenter;

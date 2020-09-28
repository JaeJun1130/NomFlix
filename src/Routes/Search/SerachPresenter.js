import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Component/Section";
import Lodaer from "../../Component/Lodaer";
import Message from "../../Component/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  Loading,
  handleSubmit,
  upDateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={upDateTerm}
        placeholder="Search Moive or TV Show..."
        value={searchTerm}
      ></Input>
    </Form>
    {Loading ? (
      <Lodaer />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Result">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
            {error}
          </Section>
        )}

        {tvResults && tvResults.length > 0 && (
          <Section title="TV Result">
            {tvResults.map((show) => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}

        {error && <Message color="#e74c3c" text={error} />}

        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message color="#7f8c8d" text="Noting Found" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  Loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  upDateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;

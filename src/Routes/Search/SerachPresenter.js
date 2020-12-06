import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../Component/Section";
import Lodaer from "../../Component/Lodaer";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
    padding: 20px;
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

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, Loading, handleSubmit, upDateTerm }) => (
    <Container>
        <Helmet>
            <title>Serach | Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input onChange={upDateTerm} placeholder="Search Moive or TV Show..." value={searchTerm}></Input>
        </Form>
        {Loading ? (
            <Lodaer />
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Result">
                        {movieResults.map((movie) => (
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
                        {error}
                    </Section>
                )}

                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Result">
                        {tvResults.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.original_name}
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                isMoive={true}
                            />
                        ))}
                    </Section>
                )}

                {error && <Message color="#e74c3c" text={error} />}

                {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
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

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

const HomePresenter = ({ nowPlaying, upComing, popular, error, Loading }) => (
    <>
        <Helmet>
            <title>Movies | Nomflix</title>
        </Helmet>
        {Loading ? (
            <Lodaer />
        ) : (
            <Container>
                <Helmet>
                    <title>Movies | Nomflix</title>
                </Helmet>
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
        )}
        ;
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    Loading: PropTypes.bool.isRequired,
};

export default HomePresenter;

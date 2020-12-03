import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Component/Section";
import Lodaer from "../../Component/Lodaer";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
    padding: 20px;
`;

const TvPresenter = ({ topRating, popular, airingToday, error, Loading }) =>
    Loading ? (
        <Lodaer />
    ) : (
        <Container>
            {topRating && topRating.length > 0 && (
                <Section title="Top Rating">
                    {topRating.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    {airingToday.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                    {console.log({ airingToday })}
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

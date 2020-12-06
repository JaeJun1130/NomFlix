import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Lodaer from "../../Component/Lodaer";
import Helmet from "react-helmet";

import { Link } from "react-router-dom";
import { AiFillStar, BsStarHalf, AiOutlineStar } from "react-icons/all";

const Contianer = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(5px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
`;

const Cover = styled.div`
    width: 50%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-image: url(${(props) => props.bgImage});
    border-radius: 10px;
    margin-right: 20px;
    mask-image: -webkit-gradient(
        linear,
        right top,
        left top,
        color-stop(1, rgba(0, 0, 0, 1)),
        color-stop(0.5, rgba(0, 0, 0, 1)),
        color-stop(0, rgba(0, 0, 0, 0))
    );
`;
const Data = styled.div`
    width: 100%;
    margin-left: 10px;
`;

const Title = styled.h3`
    margin: 10px 0;
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
`; // DIV 컨테이너

const Item = styled.span`
    font-size: 18px;
`;

const Divider = styled.span`
    margin: 0px 10px;
`;

const Homepage = styled.div`
    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
    padding: 10px 5px;
    font-size: 15px;
    border: 1px #fff solid;
    border-radius: 3px;
    margin: 0 0 25px;
    width: 140px;
    text-align: center;
    color: #fff !important;
    background: rgba(255, 255, 255, 0.3);
    font-weight: bold;
    cursor: pointer;
    margin: 20px 0;
`;

const Overview = styled.p`
    width: 50%;
    font-size: 16px;
    opacity: 0.7;
    line-height: 1.5;
`; //줄거리

const DetailPresenter = ({ result, error, Loading }) =>
    Loading ? (
        <>
            <Helmet>
                <title>Loding | NomFlix</title>
            </Helmet>
            <Lodaer />
        </>
    ) : (
        //최상위 div
        <Contianer>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name} | NomFlix</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../Img/NotImg.JPG")
                    }
                ></Cover>
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)}
                        </Item>
                        <Divider>•</Divider>
                        <Item>{result.runtime ? result.runtime : result.episode_run_time}</Item>min
                        <Divider>•</Divider>
                        <Item>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                    index === result.genres.length - 1 ? `${genre.name}` : `${genre.name} /`
                                )}
                        </Item>
                        {/* --별 평점-- */}
                        <Item>
                            {result.vote_average >= 0 && result.vote_average <= 2 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 2 && result.vote_average <= 3 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <BsStarHalf color="#FFFF00" />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 3 && result.vote_average <= 4 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 4 && result.vote_average <= 5 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <BsStarHalf color="#FFFF00" />
                                    <AiOutlineStar />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 5 && result.vote_average <= 6 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiOutlineStar />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 6 && result.vote_average <= 7 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <BsStarHalf color="#FFFF00" />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 7 && result.vote_average <= 8 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiOutlineStar />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 8 && result.vote_average <= 9 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <BsStarHalf color="#FFFF00" />/{result.vote_average}
                                </>
                            ) : null}
                            {result.vote_average > 10 && result.vote_average <= 10 ? (
                                <>
                                    <Divider>•</Divider>
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />
                                    <AiFillStar color="#FFFF00" />/{result.vote_average}
                                </>
                            ) : null}
                        </Item>
                        <a href={`${result.homepage}`}>
                            <Homepage>Homepage</Homepage>
                        </a>
                        {/* --별 평점-- */}
                        <Overview>{result.overview}</Overview>
                    </ItemContainer>
                </Data>
            </Content>
        </Contianer>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    Loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

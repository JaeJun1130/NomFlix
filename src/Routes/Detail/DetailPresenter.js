import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Lodaer from "../../Component/Lodaer";

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
    width: 30%;
    height: 100%;
    position: absolute;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
`;

const DetailPresenter = ({ result, error, Loading }) =>
    Loading ? (
        <Lodaer />
    ) : (
        <Contianer>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />

            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../Img/NotImg.JPG")
                    }
                ></Cover>
            </Content>
        </Contianer>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    Loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

import React from "react";

import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../Api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    Loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upComing },
      } = await moviesApi.upComing();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying: nowPlaying,
        upComing: upComing,
        popular: popular,
      });
    } catch {
      this.setState({ error: "Can't Find Movies imformation" });
    } finally {
      this.setState({ Loading: false });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, Loading } = this.state;
    console.log(this.state);

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        Loading={Loading}
      />
    );
  }
}

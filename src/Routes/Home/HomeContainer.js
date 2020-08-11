import React from "react";

import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    Loading: true,
  };

  render() {
    const { nowPlaying, upComing, popular, error, Loading } = this.state;

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

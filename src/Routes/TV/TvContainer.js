import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    topRating: null,
    popular: null,
    airingToday: null,
    error: null,
    Loading: null,
  };

  render() {
    const { topRating, popular, airingToday, error, Loading } = this.state;
    return (
      <TvPresenter
        topRating={topRating}
        popular={popular}
        airingToday={airingToday}
        error={error}
        Loading={Loading}
      />
    );
  }
}

import React from "react";
import SerachPresenter from "./SerachPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    Loading: false,
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, Loading } = this.state;
    return (
      <SerachPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        Loading={Loading}
      />
    );
  }
}

import React from "react";
import SerachPresenter from "./SerachPresenter";
import { moviesApi, tvApi } from "../../Api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    Loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  upDateTerm = (event) => {
    const {
      target: { value },
    } = event;

    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({ Loading: true });

      const {
        data: { results: movieResults },
      } = await moviesApi.movieSearch(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.tvSearch(searchTerm);

      this.setState({ movieResults: movieResults, tvResults: tvResults });
    } catch {
      this.setState({ error: "Can't Find Result" });
    } finally {
      this.setState({ Loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, Loading } = this.state;
    console.log(this.state);
    return (
      <SerachPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        Loading={Loading}
        handleSubmit={this.handleSubmit}
        upDateTerm={this.upDateTerm}
      />
    );
  }
}

import React from "react";

import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../Api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      Loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const { isMovie } = this.state;
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        result = await moviesApi.movieDetail(parseId);
      } else {
        result = await tvApi.showDetail(parseId);
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't Find Result" });
    } finally {
      this.setState({ loading: false, result: null });
    }
  }

  render() {
    const { result, error, Loading } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}

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
        const request = await moviesApi.movieDetail(parseId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parseId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't Find Result" });
    } finally {
      this.setState({ Loading: false, result });
      console.log(result);
    }
  }

  render() {
    const { result, error, Loading } = this.state;
    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}

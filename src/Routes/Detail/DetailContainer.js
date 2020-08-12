import React from "react";

import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    Loading: true,
  };

  async componentDidMount() {
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
  }

  render() {
    const { result, error, Loading } = this.state;

    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}

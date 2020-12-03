import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../Api";

export default class extends React.Component {
  state = {
    topRating: null,
    popular: null,
    airingToday: null,
    error: null,
    Loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRating },
      } = await tvApi.topRating();
      //console.log(topRating);

      const {
        data: { results: popular },
      } = await tvApi.popular();
      //console.log(popular);

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      //console.log(airingToday);

      this.setState({
        topRating: topRating,
        popular: popular,
        airingToday: airingToday,
      });
    } catch {
      this.setState({ error: "Can't Find Tv impomation" });
    } finally {
      this.setState({ Loading: false });
    }
  }

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

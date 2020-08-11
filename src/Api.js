import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  upComing: () =>
    api.get("movie/upcoming", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  popular: () =>
    api.get("movie/popular", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
        append_to_response: "videos",
      },
    }),

  movieSearch: (term) =>
    api.get("movie/serach", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRating: () =>
    api.get("tv/top_rated", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  popular: () =>
    api.get("tv/popular", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  airingToday: () =>
    api.get("tv/airing_today", {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
      },
    }),

  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        api_key: "aaf73d06a96c7cdafaa6aabd6660b488",
        language: "en-US",
        append_to_response: "videos",
      },
    }),

  tvSearch: (term) =>
    api.get("serach/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

import axios from "axios";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODIwMzdlMmFmYzg0NWZlNDZhZTUzNTA1YWJhMzBlNSIsIm5iZiI6MTcyNTYzMjIxMC4xMTM4NTgsInN1YiI6IjY2ZDg2MGQ0YTNmZjBmNjExMzRmNGI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X73VUoz0e_QzEfXopDy4munHeK_PjfzKpax6Fl1pOGA";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get("trending/movie/day");
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getMovieBySearch = async (query) => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    return [];
  }
};

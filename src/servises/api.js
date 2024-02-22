import axios from 'axios';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getAllTrending = async period => {
  const response = await axios(`${BASE_URL}/trending/all/${period}`);
  // console.log(response.data);
  return response.data;
};

export const getTopRatedMovies = async page => {
  const response = await axios(`${BASE_URL}/movie/top_rated?&page=${page}`);
  // console.log(response.data);
  return response.data;
};

export const getTopRatedTv = async page => {
  const response = await axios(`${BASE_URL}/tv/top_rated?&page=${page}`);
  // console.log(response.data);
  return response.data;
};

export async function searchMovie({ query, page }) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?&query=${query}&page=${page}`
  );

  return response.data;
}
export const getMovieDetails = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}`);

  return response.data;
};
export const getMovieCredits = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}/credits`);

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios(`${BASE_URL}/movie/${id}/reviews`);

  return response.data;
};

export const getGenre = async () => {
  const response = await axios(`${BASE_URL}/genre/movie/list`);

  return response.data;
};

export const getFilteredMovies = async (genre, page) => {
  const adjustedPage = page + 1;
  // console.log('sortByGenre called with genre:', genre, 'and page:', page);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: adjustedPage,
      sort_by: 'popularity.desc',
      with_genres: genre,
      // 'release_date.gte': data.from,
      // 'release_date.lte': data.to,
      //  primary_release_year: data.year,
    },
    headers: {
      accept: 'application/json',
      // Authorization:
      //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzBlN2Y3NTFkZTU4OWEyMTRjN2E3Y2IyNTZkZGZlYyIsInN1YiI6IjY1NzlhY2ZmNGJmYTU0NWNmZDc4ZjJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrQqms9_kLUcLnzlIObzup4rDnJS1QBqZV9NRJ0lfE4',
    },
  };
  const response = await axios(options.url, {
    method: 'GET',
    params: options.params,
    headers: options.headers,
  });

  return response;
};

export const getAllTrendingTvShow = async period => {
  const response = await axios(`${BASE_URL}/trending/tv/${period}`);
  //   console.log(response.data.results);
  return response.data.results;
};

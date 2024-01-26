import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTvShow } from '../redux/TV-shows/TvShow-selectors';
import { fetchTopTvShow } from '../redux/TV-shows/TvShows-operations';
import { Gallery } from '../components/Gallery/Gallery';

const TvShows = () => {
  const movies = useSelector(selectTvShow);
  const dispatch = useDispatch();

  console.log(movies);

  useEffect(() => {
    dispatch(fetchTopTvShow('day'));
  }, [dispatch]);

  return (
    <>
      <h1>TV</h1>
      {movies.length > 0 ? (
        <Gallery gallery={movies}></Gallery>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TvShows;

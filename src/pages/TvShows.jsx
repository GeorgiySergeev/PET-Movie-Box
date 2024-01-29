import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../redux/movies/selectors';

import { Gallery } from '../components/Gallery/Gallery';
import { fetchTvShow } from '../redux/movies/operations';

const TvShows = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTvShow('day'));
  }, [dispatch]);

  return (
    <>
      <Gallery gallery={movies}></Gallery>
    </>
  );
};

export default TvShows;

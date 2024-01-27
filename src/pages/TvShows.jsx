import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTvShow } from '../redux/TV-shows/TvShow-selectors';
import { fetchTopTvShow } from '../redux/TV-shows/TvShows-operations';
import { Gallery } from '../components/Gallery/Gallery';

const TvShows = () => {
  const movies = useSelector(selectTvShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopTvShow('day'));
  }, [dispatch]);

  return (
    <>
      <Gallery gallery={movies}></Gallery>
    </>
  );
};

export default TvShows;

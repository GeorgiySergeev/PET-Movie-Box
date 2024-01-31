import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies, selectTotalPage } from '../redux/movies/selectors';
import Pagination from '../components/Pagination/Pagination';

import { Gallery } from '../components/Gallery/Gallery';
import { fetchTopRatedTv } from '../redux/movies/operations';

const TvShows = () => {
  const [page, setPage] = useState(1);
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedTv(page));
  }, [dispatch, page]);

  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <>
      <Gallery gallery={movies}></Gallery>
      <Pagination count={totalPages ?? 10} onChange={handlePageChange} />
    </>
  );
};

export default TvShows;

import { Gallery } from '../components/Gallery/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import { selectMovies, selectTotalPage } from '../redux/movies/selectors';
import { useEffect, useState } from 'react';
import { fetchTopRared } from '../redux/movies/operations';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRared(page));
  }, [dispatch, page]);

  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <>
      <h1>Top Rated Movies</h1>
      {/* <TopBar
        title={'Movie search on'}
        span={'MovieBox'}
        text={
          'Browse movies, add them to watchlists and share them with friends. Just click the to add a movie, the poster to see more details or to mark the movie as watched.'
        }
      />
      <SearchForm onSubmit={handleSubmit}></SearchForm> */}

      <Gallery gallery={movies}></Gallery>
      <Pagination count={totalPages ?? 10} onChange={handlePageChange} />
    </>
  );
};

export default Movies;

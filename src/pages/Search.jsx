import { Gallery } from 'components/Gallery/Gallery';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchedMovies } from '../redux/movies/operations';
import { searchMovie } from 'servises/api';
import { selectMovies } from '../redux/movies/selectors';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';

const Search = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const { query } = useParams();
  const [totalPages, setTotalPages] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTotal = async q => {
      const { total_results } = await searchMovie(q);
      setTotalPages(total_results);
    };

    dispatch(fetchSearchedMovies({ query: query, page: page }));
    getTotal({ query: query, page: page });
  }, [dispatch, query, page]);

  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <>
      <Gallery gallery={movies}></Gallery>
      <Pagination count={totalPages ?? 1} onChange={handlePageChange} />
    </>
  );
};

export default Search;

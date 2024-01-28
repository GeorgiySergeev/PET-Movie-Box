import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GalleryTitle } from 'components/GalleryTitle/GalleryTitle';
// import { MobileHeader } from 'components/Mobile/Header/MobileHeader';
import { Gallery } from 'components/Gallery/Gallery';
// import { Sidebar } from 'components/Sidebar/Sidebar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { TopBar } from 'components/Topbar/Topbar';
import Pagination from '../components/Pagination/Pagination';

import text from '../servises/constant';
import { selectLoading, selectMovies } from '../redux/movies/selectors';
import {
  fetchTopMovies,
  fetchSearchedMovies,
} from '../redux/movies/operations';
import { searchMovie } from '../servises/api';

const Home = () => {
  const [shouldRenderTopbar, setShouldRenderTopbar] = useState(false);

  const [searchParams, setSearchParams] = useState({
    query: '',
    page: 1,
  });
  const [totalPages, setTotalPages] = useState(500);

  const isLoading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();

  // const range = searchParams.get('range') || 'day';

  useEffect(() => {
    dispatch(fetchTopMovies('day'));
  }, [dispatch, searchParams]);

  useEffect(() => {
    const getTotal = async q => {
      const { total_results } = await searchMovie(q);
      setTotalPages(total_results);
    };

    // const searchQuery = searchParams.get('query') ?? '';

    if (!searchParams.query) return;
    dispatch(fetchSearchedMovies(searchParams));
    // setTotalPages(movies.length);
    getTotal(searchParams);
  }, [searchParams.page, searchParams, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const shouldRender = window.innerWidth >= 768;
      setShouldRenderTopbar(shouldRender);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = value => {
    // const query = value !== '' ? { query: value } : {};
    // setSearchParams(query);

    setSearchParams({
      query: value,
      page: 1,
    });
  };

  const handlePageChange = page => {
    setSearchParams(prev => ({
      ...prev,
      page: page,
    }));
  };

  return (
    <>
      {isLoading && <h2>Loading</h2>}
      {shouldRenderTopbar ? (
        <TopBar title={'Welcome to'} span={'MovieBox'} text={text}></TopBar>
      ) : null}
      <SearchForm onSubmit={handleSubmit} />
      <GalleryTitle text={'Popular movies right now'} />
      <Gallery gallery={movies}></Gallery>
      <Pagination count={totalPages} onChange={handlePageChange} />
    </>
  );
};
export default Home;

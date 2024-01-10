import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllTrending } from 'servises/api';
import { searchMovie } from 'servises/api';
import { GalleryTitle } from 'components/GalleryTitle/GalleryTitle';
// import { MobileHeader } from 'components/Mobile/Header/MobileHeader';
import { Gallery } from 'components/Gallery/Gallery';
// import { Sidebar } from 'components/Sidebar/Sidebar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { TopBar } from 'components/Topbar/Topbar';

import text from '../servises/constant';

const Home = () => {
  const [shouldRenderTopbar, setShouldRenderTopbar] = useState(false);
  const [page, setPage] = useState(1);

  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const range = searchParams.get('range') || 'day';

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (!searchQuery) return;

    const getMovies = async () => {
      try {
        const { results } = await searchMovie(searchQuery, page);

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, [page, searchParams]);

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

  useEffect(() => {
    setLoading(true);

    const getTopMovies = async () => {
      try {
        const data = await getAllTrending(range);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTopMovies();
  }, [range]);

  // const onRangeChange = value => {
  //   setSearchParams({ range: value });
  // };

  const handleSubmit = value => {
    const query = value !== '' ? { query: value } : {};
    setSearchParams(query);

    setPage(1);
    setMovies([]);
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
    </>
  );
};
export default Home;

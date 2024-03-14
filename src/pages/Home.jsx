import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import { Gallery } from 'components/Gallery/Gallery';
import { TopBar } from 'components/Topbar/Topbar';
import text from '../servises/constant';

import { GalleryTitle } from 'components/GalleryTitle/GalleryTitle';
// import { MobileHeader } from 'components/Mobile/Header/MobileHeader';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import { SearchForm } from 'components/SearchForm/SearchForm';

import { selectLoading, selectMovies } from '../redux/movies/selectors';
import { fetchTopMovies } from '../redux/movies/operations';

const Home = () => {
  const [shouldRenderTopbar, setShouldRenderTopbar] = useState(false);

  const isLoading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  // console.log(movies);
  // const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  const dispatch = useDispatch();

  // const [query, setQuery] = useSearchParams();

  //  const range = searchParams.get('range') || 'day';

  useEffect(() => {
    dispatch(fetchTopMovies('day'));
  }, [dispatch]);

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

  return (
    <>
      {isLoading && <h2>Loading</h2>}
      {shouldRenderTopbar ? (
        <TopBar title={'Welcome to'} span={'MovieBox'} text={text}></TopBar>
      ) : null}
      {/* <SearchForm /> */}
      <GalleryTitle text={'Popular Movies'} />
      <Gallery gallery={movies}></Gallery>
    </>
  );
};
export default Home;

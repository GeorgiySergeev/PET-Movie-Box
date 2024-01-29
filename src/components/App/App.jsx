import { Route, Routes } from 'react-router-dom';
// import { Container } from './App.styled';

import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const Movies = lazy(() => import('pages/Movies'));
const WatchList = lazy(() => import('pages/WatchList'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Genres = lazy(() => import('pages/Genres'));
const TvShows = lazy(() => import('pages/TvShows'));

const NotFound = lazy(() => import('pages/404page'));

export const App = () => {
  return (
    // <Container className="main-container">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/:movieId/*" element={<MovieDetails />} />
        <Route path="/genres/:id" element={<Genres />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </Container>
  );
};

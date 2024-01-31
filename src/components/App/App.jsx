import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from 'components/Layout/Layout';
import { LoadingSpinner } from 'components/Loader/Loader';
import ErrorBoundary from '../ErrorDoundory/ErrorBoundary';

import {
  PrivatRoute,
  PrivatRouteAuth,
} from 'components/Navigation/PrivatRoute';
// import { AuthProvider } from 'components/AuthProvider/AuthProvider';

const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const Movies = lazy(() => import('pages/Movies'));
const WatchList = lazy(() => import('pages/WatchList'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Genres = lazy(() => import('pages/Genres'));
const TvShows = lazy(() => import('pages/TvShows'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/404page'));

export const App = () => {
  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/:movieId/*" element={<MovieDetails />} />
            <Route path="/genres/:id" element={<Genres />} />
            <Route
              path="/watchlist"
              element={
                <PrivatRoute>
                  <WatchList />
                </PrivatRoute>
              }
            />
            <Route path="/tvshows" element={<TvShows />} />
          </Route>
          <Route
            path="/login"
            element={
              <PrivatRouteAuth>
                {/* <AuthProvider> */}
                <Login />
                {/* </AuthProvider> */}
              </PrivatRouteAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

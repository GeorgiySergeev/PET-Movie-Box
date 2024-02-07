import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { LoadingSpinner } from 'components/Loader/Loader';
import ErrorBoundary from '../ErrorDoundory/ErrorBoundary';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useSelector } from 'react-redux';
import {
  PrivatRoute,
  PrivatRouteAuth,
} from 'components/Navigation/PrivatRoute';
import { useDispatch } from 'react-redux';

import { setIsLoggedIn } from '../../redux/auth/auth-slice';

import { selectWatchlist } from '../../redux/watchlist/watchlist-selectors';
const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const Movies = lazy(() => import('pages/Movies'));
const WatchList = lazy(() => import('pages/WatchList'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Genres = lazy(() => import('pages/Genres'));
const TvShows = lazy(() => import('pages/TvShows'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/404page'));

export const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const watchlist = useSelector(selectWatchlist);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);

      if (currentUser === null) {
        dispatch(setIsLoggedIn(false));
      }

      // Обновление состояния вашего компонента, например, установка локального состояния
      // setUse({ email: currentUser.email, token: currentUser.accessToken, ... });
    });
    dispatch(setIsLoggedIn(true));

    return () => {
      unsubscribe();
    };
  }, [auth, dispatch, watchlist]);

  return (
    <>
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
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

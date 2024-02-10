import { lazy } from 'react';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from 'servises/api';
import { Suspense } from 'react';
import { LoadingSpinner } from 'components/Loader/Loader';
import { GoToBack } from 'components/GoToBack/GoToBack';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import {
  Container,
  List,
  StyledLi,
} from '../components/MovieDetailsCard/MovieDetailsCard.styled';

import { selectWatchlist } from '../redux/watchlist/watchlist-selectors';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

const MovieDetails = () => {
  const watchlist = useSelector(selectWatchlist);
  const [isLoading, setLoading] = useState(false);
  const [movieCard, setMovieCard] = useState({});
  const { movieId } = useParams();
  const [inWatchlist, setInWatchlist] = useState(false);

  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const movieIdAsNumber = parseInt(movieId, 10);

    const exists = watchlist.some(item => item.id === movieIdAsNumber);
    setInWatchlist(exists);
  }, [movieId, watchlist]);

  useEffect(() => {
    setLoading(true);

    async function fetchMovie() {
      if (!movieId) return;
      try {
        const movieInfo = await getMovieDetails(movieId);

        setMovieCard(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId, watchlist]);

  return (
    <Container>
      <Link to={backHomeLink.current}>
        <GoToBack></GoToBack>
      </Link>

      {isLoading && <LoadingSpinner />}
      <MovieDetailsCard
        card={movieCard}
        isAdded={inWatchlist}
      ></MovieDetailsCard>

      <List style={{ marginBottom: 25 }}>
        <StyledLi>
          <NavLink to="cast">Cast</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink to="reviews">Reviews</NavLink>
        </StyledLi>
      </List>
      <Suspense fallback={<div>Is Loading...</div>}>
        <Outlet />
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default MovieDetails;

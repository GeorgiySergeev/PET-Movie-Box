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

import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

const MovieDetails = () => {
  const [isLoading, setLoading] = useState(false);
  const [movieCard, setMovieCard] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

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
  }, [movieId]);

  return (
    <Container>
      <Link to={backHomeLink.current}>
        <GoToBack></GoToBack>
      </Link>

      {isLoading && <LoadingSpinner />}
      <MovieDetailsCard card={movieCard}></MovieDetailsCard>

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

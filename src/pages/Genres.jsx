import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import { LoadingSpinner } from 'components/Loader/Loader';
import { TopBar } from 'components/TopBar/TopBar';
import { GoToBack } from 'components/GoToBack/GoToBack';
import { sortByGenre } from 'servises/api';
import { Gallery } from 'components/Gallery/Gallery';
import { Container } from 'components/MovieDetailsCard/MovieDetailsCard.styled';

const Genres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const { genre } = useParams();
  const page = 1;

  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    let isMounted = true;

    const getGenre = async () => {
      try {
        const data = await sortByGenre(genre, page);

        if (isMounted) {
          setGenres(data.results);
        }
      } catch (error) {
        console.error('Error fetching genre:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getGenre();

    return () => {
      isMounted = false;
    };
  }, [genre]);

  return (
    <Container>
      <Link to={backHomeLink.current}>
        <GoToBack></GoToBack>
      </Link>
      <TopBar title={genre}></TopBar>

      {isLoading && <LoadingSpinner />}
      <Gallery gallery={genres}></Gallery>
    </Container>
  );
};

export default Genres;

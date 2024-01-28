import { getGenre } from 'servises/api';
import { useEffect, useState } from 'react';
import { GenreListWrapper, GenreListStyled, Button } from './GenreList.styled';
import { NavLink } from 'react-router-dom';
// import { Scrollbar } from 'react-scrollbars-custom';

export const GenreList = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getGenresList = async () => {
      const data = await getGenre();

      setGenre(data.genres);
    };
    getGenresList();
  }, []);

  return (
    <GenreListWrapper>
      <GenreListStyled>
        {genre.map(({ id, name }, index) => {
          return (
            <Button key={id}>
              <NavLink to={`/genres/${id}`}>{name}</NavLink>
            </Button>
          );
        })}
      </GenreListStyled>
    </GenreListWrapper>
  );
};

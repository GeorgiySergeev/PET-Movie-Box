import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/api';
import { CastItem } from 'components/CastItem/CastItem';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fathMovie = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fathMovie();
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast.map(({ id, name, character, profile_path }, index) => {
          return (
            <CastItem
              key={index}
              name={name}
              character={character}
              photo={profile_path}
            ></CastItem>
          );
        })}
      </CastList>
    </div>
  );
};

export default Cast;

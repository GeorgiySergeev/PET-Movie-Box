import React from 'react';
import { CastItemCard, Image } from './CastItem.styled';
import defaultImg from '../../assets/default-img/no-available-image.png';

export const CastItem = ({ name, character, photo }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <CastItemCard>
      {photo ? (
        <Image src={`${BASIC_IMG_URL}${photo}`} alt="" />
      ) : (
        <Image src={defaultImg} alt="" />
      )}
      <div>
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </CastItemCard>
  );
};

import { useState } from 'react';
import { convertMinutesToHoursAndMinutes } from 'servises/minutesTohours';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { AddToListButton } from 'components/Sidebar/Sidebar.styled';

import {
  Image,
  HeadWrapper,
  InfoWrapper,
  Title,
  List,
  TitleSecond,
  TextOverview,
  ScoreBox,
} from './MovieDetailsCard.styled';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const MovieDetailsCard = ({ card }) => {
  const [buttonText, setButtonText] = useState('Add to Watchlist');

  const handleClick = () => {
    setButtonText(prevText =>
      prevText === 'Add to Watchlist'
        ? 'Remove from tchlist'
        : 'Add to Watchlist'
    );
  };

  const {
    title,
    poster_path,
    // release_date,
    overview,
    genres,
    runtime,
    vote_count,
  } = card;
  return (
    <>
      <HeadWrapper>
        {poster_path ? (
          <Image src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
        ) : (
          <Image src={defaultImg} alt="No image" />
        )}

        <InfoWrapper>
          <Title>{title}</Title>
          <div style={{ display: 'flex', marginBottom: 50, maxWidth: 580 }}>
            <List>
              {genres &&
                genres.map(({ id, name }) => {
                  return <li key={id}> {name}</li>;
                })}
            </List>
            <p style={{ color: 'yellow' }}>
              {convertMinutesToHoursAndMinutes(runtime)}
            </p>
          </div>
          <TitleSecond>Overview</TitleSecond>
          <TextOverview>{overview}</TextOverview>
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
            }}
          >
            <ScoreBox>
              <p>Score</p>
              <h3>{vote_count}</h3>
            </ScoreBox>
            <AddToListButton style={{ width: 239 }} onClick={handleClick}>
              {buttonText}
            </AddToListButton>
          </div>
        </InfoWrapper>
      </HeadWrapper>
    </>
  );
};

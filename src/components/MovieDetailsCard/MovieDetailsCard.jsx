import { useEffect, useState } from 'react';
import { convertMinutesToHoursAndMinutes } from 'servises/minutesTohours';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { AddToListButton } from 'components/Sidebar/Sidebar.styled';
import { addMovie, removeMovie } from '../../redux/watchlist/watchlist-slice';

import { formatDate } from 'servises/date';

import {
  Image,
  HeadWrapper,
  InfoWrapper,
  Title,
  List,
  TitleSecond,
  TextOverview,
  ScoreBox,
  // ImageWrapper,
} from './MovieDetailsCard.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { selectWatchlist } from '../../redux/watchlist/watchlist-selectors';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';
import { Notify } from 'notiflix';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const MovieDetailsCard = ({ card, isAdded }) => {
  // console.log(card);
  const {
    id,
    title,
    poster_path,
    release_date,
    overview,
    genres,
    runtime,
    vote_count,
    backdrop_path,
    tagline,
    production_companies,
  } = card;

  const img = poster_path;
  const relise = release_date;

  const [buttonText, setButtonText] = useState('fdf');
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLogedIn);

  useEffect(() => {
    const text = isAdded ? 'Remove from wtchlist' : 'Add to Watchlist';
    setButtonText(text);
  }, [isAdded]);

  const handleClick = () => {
    if (!isLoggedin) {
      Notify.failure('Please, enter your account');
      return;
    }

    if (buttonText === 'Add to Watchlist') {
      dispatch(addMovie({ id, title, img, relise, backdrop_path }));
      setButtonText('Remove from Watchlist');
    } else {
      dispatch(removeMovie(id));
      setButtonText('Add to Watchlist');
    }
  };

  return (
    <>
      <HeadWrapper>
        {/* <ImageWrapper></ImageWrapper> */}
        {poster_path ? (
          <Image src={`${BASIC_IMG_URL}${poster_path}`} alt={title} />
        ) : (
          <Image src={defaultImg} alt="No image" />
        )}

        <InfoWrapper>
          <Title>{title}</Title>
          <h4 style={{ fontStyle: 'italic', marginBottom: 15 }}>{tagline}</h4>
          <div
            style={{
              display: 'flex',
              marginBottom: 15,
              maxWidth: 580,
              gap: 15,
            }}
          >
            <List>
              <h4>Genre: </h4>
              {genres &&
                genres.map(({ id, name }) => {
                  return <li key={id}> {name}</li>;
                })}
            </List>
            <p style={{ color: 'yellow' }}>
              {convertMinutesToHoursAndMinutes(runtime)}
            </p>
            <p style={{ color: 'f33f3f' }}>
              {' '}
              Release date: {formatDate(release_date)}
            </p>
          </div>
          <List
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {' '}
            {production_companies &&
              production_companies.map(({ logo_path }, i) => {
                return (
                  <li key={i}>
                    <img
                      style={{ width: 55 }}
                      src={
                        logo_path ? `${BASIC_IMG_URL}${logo_path}` : defaultImg
                      }
                      alt="poster"
                    />
                  </li>
                );
              })}
          </List>
          <TitleSecond>Overview</TitleSecond>
          <TextOverview>{overview}</TextOverview>
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
              // paddingBottom: 15,
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

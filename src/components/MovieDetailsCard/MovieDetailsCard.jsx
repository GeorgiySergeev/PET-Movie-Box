import { useEffect, useState } from 'react';
import { convertMinutesToHoursAndMinutes } from 'servises/minutesTohours';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { AddToListButton } from 'components/Sidebar/Sidebar.styled';
import { addMovie, removeMovie } from '../../redux/watchlist/watchlist-slice';

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
import { useDispatch, useSelector } from 'react-redux';
// import { selectWatchlist } from '../../redux/watchlist/watchlist-selectors';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const MovieDetailsCard = ({ card, isAdded }) => {
  const {
    id,
    title,
    poster_path,
    release_date,
    overview,
    genres,
    runtime,
    vote_count,
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
    if (!isLoggedin) return;
    // setButtonText(prevText =>
    //   prevText === 'Add to Watchlist'
    //     ? 'Remove from tchlist'
    //     : 'Add to Watchlist'
    // );

    if (buttonText === 'Add to Watchlist') {
      dispatch(addMovie({ id, title, img, relise }));
      setButtonText('Remove from Watchlist');
    } else {
      dispatch(removeMovie(id));
      setButtonText('Add to Watchlist');
    }
  };

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

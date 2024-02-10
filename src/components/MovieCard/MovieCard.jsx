import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as IconLow } from '../../assets/icons/awful _35.svg';
import { ReactComponent as IconHigh } from '../../assets/icons/great _ 80.svg';
// import { ReactComponent as IconNormal } from '../../assets/icons/normal _35 and _80.svg';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { formatDate } from '../../servises/date';

import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../../redux/watchlist/watchlist-slice';

import {
  GalleryItem,
  ImageGalleryItemImage,
  RatingBox,
  InfoBox,
  IconAddToListStyled,
} from './MovieCard.styled';
import { useState } from 'react';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';
import { Notify } from 'notiflix';

export const MovieCard = ({
  id,
  img,
  title,
  rating,
  relise,
  first_air_date,
  vote_average,
  isAdded,
}) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  const formatedData = formatDate(relise);
  const formatedDataAlt = formatDate(first_air_date);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(isAdded);
  const isLoggedin = useSelector(selectIsLogedIn);

  const handlerAddMovieToggle = () => {
    if (!isLoggedin) {
      Notify.failure('Please, enter your accaunt');
      return;
    }
    setIsChecked(prev => (prev = !prev));

    isChecked
      ? dispatch(removeMovie(id))
      : dispatch(
          addMovie({
            id,
            img,
            title,
            rating,
            relise,
            // first_air_date,
            vote_average,
            // added: isChecked,
            isWatched: false,
          })
        );
  };

  return (
    <GalleryItem>
      <IconAddToListStyled onClick={handlerAddMovieToggle} checked={isAdded} />

      <Link state={{ from: location }} to={`/${id}`} key={id}>
        <ImageGalleryItemImage
          src={img ? `${BASIC_IMG_URL}${img}` : defaultImg}
          alt={title}
          datatype={id}
          height="180"
        />
        <InfoBox>
          <RatingBox>
            {rating < 100 ? (
              <IconLow style={{ width: 20, height: 20 }} />
            ) : (
              <IconHigh style={{ width: 20, height: 20 }} />
            )}
            <p> {rating}</p>
          </RatingBox>
          <h4>{title}</h4>
          <h6>{relise ? formatedData : formatedDataAlt}</h6>
        </InfoBox>
      </Link>
    </GalleryItem>
  );
};

import { dateFormating } from '../../../servises/date';
import {
  MobileMovieItem,
  MobileImage,
  MomileInfoContainer,
} from './MobileMovieCard.styled';

import defaultImg from '../../../assets/default-img/no-available-image.png';
import { Link } from 'react-router-dom';
import { IconAddToListStyled } from 'components/MovieCard/MovieCard.styled';

export const MobileMovieCard = ({
  id,
  img,
  title,
  rating,
  relise = 'no info',
}) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  // const location = useLocation();

  return (
    <Link to={`/movies/${id}`}>
      <MobileMovieItem>
        <IconAddToListStyled />
        <MobileImage
          src={img ? `${BASIC_IMG_URL}${img}` : defaultImg}
          alt={title}
          datatype={id}
        />

        {/* <IconAddToListStyled onClick={() => alert('Added to watchList')} />

      <Link state={{ from: location }} to={`/movies/${id}`} key={id}>
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
          </RatingBox> */}
        <MomileInfoContainer>
          <h3 style={{ fontSize: 14 }}>{title}</h3>
          <p style={{ fontSize: 8 }}>{rating}</p>
          <p style={{ fontSize: 10 }}>{dateFormating(relise)}</p>
        </MomileInfoContainer>
      </MobileMovieItem>
    </Link>
  );
};

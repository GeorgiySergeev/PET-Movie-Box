import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as IconLow } from '../../assets/icons/awful _35.svg';
import { ReactComponent as IconHigh } from '../../assets/icons/great _ 80.svg';
// import { ReactComponent as IconNormal } from '../../assets/icons/normal _35 and _80.svg';
import defaultImg from '../../assets/default-img/no-available-image.png';

import {
  GalleryItem,
  ImageGalleryItemImage,
  RatingBox,
  InfoBox,
  IconAddToListStyled,
} from './MovieCard.styled';

export const MovieCard = ({ id, img, title, rating, relise = 'no info' }) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();

  return (
    <GalleryItem>
      <IconAddToListStyled onClick={() => alert('Added to watchList')} />

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
          </RatingBox>
          <h3>{title}</h3>
        </InfoBox>
      </Link>
    </GalleryItem>
  );
};

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as IconLow } from '../../assets/icons/awful _35.svg';
import { ReactComponent as IconHigh } from '../../assets/icons/great _ 80.svg';
// import { ReactComponent as IconNormal } from '../../assets/icons/normal _35 and _80.svg';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { formatDate } from '../../servises/date';

import {
  GalleryItem,
  ImageGalleryItemImage,
  RatingBox,
  InfoBox,
  IconAddToListStyled,
} from './MovieCard.styled';

export const MovieCard = ({
  id,
  img,
  title,
  rating,
  relise,
  first_air_date,
  vote_average,
}) => {
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  const formatedData = formatDate(relise);
  const formatedDataAlt = formatDate(first_air_date);

  return (
    <GalleryItem>
      <IconAddToListStyled onClick={() => alert('Added to watchList')} />

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

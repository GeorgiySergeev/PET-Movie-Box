import styled from '@emotion/styled';
import { ReactComponent as IconAddToList } from '../../assets/icons/add-to-watch-list/Property 1=Default.svg';

export const IconAddToListStyled = styled(IconAddToList)`
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 23px;

  @media screen and (min-width: 768px) {
    left: 0px;
    width: 24px;
    height: 35px;
    z-index: 10;
  }
`;

export const GalleryItem = styled.li`
  position: relative;
  width: 200px;
  height: 415px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  /* text-align: center; */
  /* min-height: 450px; */
  /* padding: 15px 10px; */
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 10px;
  }
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  /* height: 350px; */
  object-fit: cover;
  margin: 0 auto;
  margin-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
    cursor: zoom-in;
  }
`;

export const InfoBox = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  padding: 0px 10px;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
  padding-top: 10px;

  height: 19px;
  border: 0.1 solid white;
  margin-bottom: 19px;
  border-bottom: 1px solid var(--dark);
`;

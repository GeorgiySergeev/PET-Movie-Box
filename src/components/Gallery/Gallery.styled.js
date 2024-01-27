import styled from '@emotion/styled';

export const GallerySection = styled.section`
  width: 100%;
  /* height: 80vh; */

  /* outline: auto; */

  @media screen and (min-width: 768px) {
  }
`;

export const GalleryList = styled.ul`
  list-style: none;
  justify-content: space-between;
  row-gap: 55px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

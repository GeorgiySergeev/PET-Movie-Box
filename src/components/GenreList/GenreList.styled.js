import styled from '@emotion/styled';

export const GenreListWrapper = styled.div`
  /* overflow: scroll;
  height: 375px; */
  width: 90%;
  padding: 10px;
  margin-top: 35px;
  margin-bottom: 35px;
  border: 1px solid rgba(255, 190, 190, 0.2);
  border-radius: 8px;
`;

export const GenreListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li:hover {
    scale: 101%;
    color: #f33f3f;
  }
`;

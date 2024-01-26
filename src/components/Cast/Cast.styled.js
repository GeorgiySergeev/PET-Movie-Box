import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 100px;
  list-style: none;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  row-gap: 125px; */
`;

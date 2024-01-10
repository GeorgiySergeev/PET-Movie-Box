import styled from '@emotion/styled';

export const MobileMovieItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 15px;
  border: 1px solid var(--dark);
  border-bottom-right-radius: 8px;
  /* padding: 0 10px; */
`;

export const MobileImage = styled.img`
  width: 35px;
  height: 55px;
  margin-right: 15px;
`;

export const MomileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

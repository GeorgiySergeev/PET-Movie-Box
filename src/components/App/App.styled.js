import styled from '@emotion/styled';

export const Container = styled.div`
  /* outline: auto; */
  position: relative;
  min-height: 100vh;

  max-width: 428px;
  margin: 0 auto;
  padding: 0 26px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    max-width: 1440px;
  }
`;

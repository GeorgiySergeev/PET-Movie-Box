import styled from '@emotion/styled';

export const TopBarWrapper = styled.div`
  position: relative;
  max-width: 1058px;
  height: 350px;
  margin-bottom: 25px;
  border-radius: 8px;
  /* padding: 20px; */
  overflow: hidden;

  /* Добавим прозрачный фон поверх слайдера */
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(86, 86, 86, 0.8);
    z-index: 10; /* Выставим z-index поверх слайдера (обычно слайдеры имеют z-index: 0 по умолчанию) */
  }
`;

export const TopBarTitle = styled.h1`
  position: absolute;
  top: 25px;
  left: 20px;
  display: block;
  font-weight: 900;
  font-size: 48px;
  color: #e1e1e1;
  font-family: 'Archivo', sans-serif;

  margin-bottom: 15px;
  z-index: 12;

  @media screen and (min-width: 1280px) {
    font-size: 68px;
  }
`;

export const TopBarText = styled.p`
  position: absolute;
  top: 140px;
  left: 20px;
  font-size: 18px;
  font-family: 'Archivo', sans-serif;
  color: #e1e1e1;
  width: 380px;
  margin-bottom: 13px;
  line-height: 28px;
  z-index: 12;

  @media screen and (min-width: 1280px) {
    font-size: 38px;
    /* top: 200px; */
    width: 780px;
    line-height: 48px;
  }
`;

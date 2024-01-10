import styled from '@emotion/styled';
import { RxHamburgerMenu } from 'react-icons/rx';

export const MobileHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;

  border-bottom: 1px solid var(--dark);

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const HeaderBurgerIcon = styled(RxHamburgerMenu)`
  width: 18px;
  height: 18px;
  color: white;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

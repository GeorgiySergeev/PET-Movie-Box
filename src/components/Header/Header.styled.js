import styled from '@emotion/styled';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderContainer = styled.header`
  max-width: 376px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;

  border-bottom: 1px solid var(--dark);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    max-width: 1330px;
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

export const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 10px 0;
  gap: 55px;
  color: #858585;
  a:hover {
    color: white;
  }
`;
